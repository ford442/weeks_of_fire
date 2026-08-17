#!/usr/bin/env python3
"""Generate images via the xAI Grok Imagine API (stdlib only).

Usage:
  export XAI_API_KEY=xai-...
  python3 scripts/xai-generate.py "your prompt" -o images/out.jpg
  python3 scripts/xai-generate.py "prompt" -o images/out.jpg --model grok-imagine-image-quality --aspect 16:9

Models (team-dependent):
  grok-imagine-image
  grok-imagine-image-2.0
  grok-imagine-image-quality

Never commit API keys. Prefer env XAI_API_KEY.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

API_URL = "https://api.x.ai/v1/images/generations"
UA = "Mozilla/5.0 (compatible; weeks-on-fire/1.0)"


def generate(
    prompt: str,
    *,
    model: str,
    aspect_ratio: str,
    api_key: str,
    n: int = 1,
) -> dict:
    payload = {
        "model": model,
        "prompt": prompt,
        "n": n,
        "aspect_ratio": aspect_ratio,
    }
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "User-Agent": UA,
            "Accept": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        return json.loads(resp.read().decode())


def download(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = resp.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def main() -> int:
    parser = argparse.ArgumentParser(description="xAI Grok Imagine image generation")
    parser.add_argument("prompt", help="Text prompt")
    parser.add_argument("-o", "--output", required=True, help="Output image path")
    parser.add_argument(
        "--model",
        default="grok-imagine-image-quality",
        help="Model id (default: grok-imagine-image-quality)",
    )
    parser.add_argument("--aspect", default="16:9", help="Aspect ratio (default 16:9)")
    parser.add_argument(
        "--api-key",
        default=os.environ.get("XAI_API_KEY", ""),
        help="Or set XAI_API_KEY env var",
    )
    args = parser.parse_args()

    if not args.api_key:
        print("ERROR: set XAI_API_KEY or pass --api-key", file=sys.stderr)
        return 2

    try:
        result = generate(
            args.prompt,
            model=args.model,
            aspect_ratio=args.aspect,
            api_key=args.api_key,
        )
    except urllib.error.HTTPError as exc:
        body = exc.read().decode(errors="replace")
        print(f"API error {exc.code}: {body[:800]}", file=sys.stderr)
        return 1

    items = result.get("data") or []
    if not items or not items[0].get("url"):
        print(f"Unexpected response: {result!r}"[:500], file=sys.stderr)
        return 1

    dest = Path(args.output)
    size = download(items[0]["url"], dest)
    print(f"Wrote {dest} ({size} bytes)")
    if "usage" in result:
        print(f"usage: {result['usage']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
