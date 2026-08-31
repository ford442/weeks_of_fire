#!/usr/bin/env python3
"""
Episode Scaffold Generator
-------------------------
Quickly creates a new episode directory with the standard folder structure
and copies template files (synopsis, subtitles) into place.

Usage:
    python scripts/create_episode.py 04 "HOA Morning After"

The script will:
  * Create episodes/episode-XX/ (zero‑padded number)
  * Copy templates/synopsis-template.md → synopsis.md
  * Copy templates/subtitles-template.srt → subtitles.srt
  * Insert the provided title into the YAML front‑matter of the synopsis.

No external dependencies; works with Python 3.8+.
"""
import sys
import shutil
from pathlib import Path
import re

TEMPLATE_SYNOPSIS = Path("templates/synopsis-template.md")
TEMPLATE_SUBS = Path("templates/subtitles-template.srt")
EPISODES_ROOT = Path("episodes")

def create_episode(number: str, title: str):
    # Ensure number is two‑digit string
    num = number.zfill(2)
    episode_dir = EPISODES_ROOT / f"episode-{num}"
    if episode_dir.exists():
        print(f"Episode directory {episode_dir} already exists. Skipping.")
        return
    episode_dir.mkdir(parents=True)
    # Copy templates
    synopsis_path = episode_dir / "synopsis.md"
    subtitles_path = episode_dir / "subtitles.srt"
    shutil.copy(TEMPLATE_SYNOPSIS, synopsis_path)
    shutil.copy(TEMPLATE_SUBS, subtitles_path)
    # Insert title into YAML front‑matter of synopsis
    content = synopsis_path.read_text()
    # Replace placeholder title if present
    new_content = re.sub(r"title: \".*?\"", f"title: \"{title}\"", content)
    synopsis_path.write_text(new_content)
    print(f"Created episode {num} with title '{title}'.")

def main():
    if len(sys.argv) < 3:
        print("Usage: create_episode.py <number> <title>")
        sys.exit(1)
    number = sys.argv[1]
    title = " ".join(sys.argv[2:])
    create_episode(number, title)

if __name__ == "__main__":
    main()
