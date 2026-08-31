#!/usr/bin/env python3
"""
EyeWash Idents Generator
------------------------
This script helps you quickly scaffold the six (or any number of) EyeWash idents
mentioned in the *Idea Pack* issue.

Each ident consists of:
- Title card text
- Audio sting placeholder filename
- One Grok Imagine prompt for a still image
- Continuity Voice line placeholder

Run the script with a list of titles (one per line) or use the built‑in default
set. The output is printed in a Markdown table that can be copied into the
project's documentation or issue comment.

Example usage:
    python scripts/eyewash_idents_generator.py
    # or with a custom list file
    python scripts/eyewash_idents_generator.py titles.txt

The script is dependency‑free and works with Python 3.8+.
"""
import sys
from pathlib import Path

DEFAULT_TITLES = [
    "Please Stand By",
    "Rinse Cycle",
    "Unscheduled Programming",
    "Aspect Ratio Matters",
    "We Always Return",
    "3:44 Again",
]

def generate_ident(title: str) -> dict:
    """Return a dict with scaffold data for a single ident.

    The fields are deliberately simple placeholders – you can replace them with
    real assets later.
    """
    safe_name = title.lower().replace(" ", "_")
    return {
        "title": title,
        "audio_sting": f"audio/{safe_name}.mp3",
        "grok_prompt": f"Cinematic title card, {title}, bold colors, retro TV static, Grok Imagine style",
        "continuity_line": f"[Continuity Voice] {{title}} broadcast",
    }

def format_markdown(idents: list[dict]) -> str:
    """Render a Markdown table for the given list of ident dicts."""
    header = "| Title | Audio Sting | Grok Prompt | Continuity Line |\n"
    separator = "|---|---|---|---|\n"
    rows = []
    for i in idents:
        rows.append(
            f"| {i['title']} | `{i['audio_sting']}` | {i['grok_prompt']} | {i['continuity_line']} |"
        )
    return header + separator + "\n".join(rows)

def main():
    if len(sys.argv) > 1:
        titles_path = Path(sys.argv[1])
        if titles_path.is_file():
            titles = [line.strip() for line in titles_path.read_text().splitlines() if line.strip()]
        else:
            print(f"Error: {titles_path} not found. Using default titles.")
            titles = DEFAULT_TITLES
    else:
        titles = DEFAULT_TITLES

    idents = [generate_ident(t) for t in titles]
    print(format_markdown(idents))

if __name__ == "__main__":
    main()
