#!/usr/bin/env python3
"""
Cat POV Cutaway Generator
------------------------
Utility to scaffold a pure‑visual cutaway where a black cat witnesses events.

The script produces a concise markdown outline containing:
- Scene title
- Visual description (what the cat sees)
- Sound‑design cues (ambient, foley, music)
- Suggested Grok Imagine prompts for key frames

Usage examples:
    python scripts/cat_pov_generator.py "Suburban Halloween"
    # or provide a custom description file
    python scripts/cat_pov_generator.py description.txt

No external dependencies; works with Python 3.8+.
"""
import sys
from pathlib import Path

DEFAULT_TITLE = "Cat POV Cutaway"
DEFAULT_DESC = "A black cat prowls through a suburban Halloween street, observing spooky lights and strange sounds."

def generate_outline(title: str, description: str) -> str:
    """Return a markdown outline for the cutaway."""
    prompt = f"Cinematic black cat perspective, {description}, night, orange pumpkin glow, detailed fur, Grok Imagine style"
    return (
        f"## {title}\n\n"
        f"**Visual description:** {description}\n\n"
        f"**Sound design cues:**\n"
        f"- Ambient nighttime wind\n"
        f"- Distant children's laughter\n"
        f"- Soft cat purrs and footfalls\n"
        f"- Underscore with low synth drone\n\n"
        f"**Grok Imagine prompt:**\n"
        f"`{prompt}`\n"
    )

def main():
    if len(sys.argv) > 1:
        arg = sys.argv[1]
        path = Path(arg)
        if path.is_file():
            description = path.read_text().strip()
            title = Path(arg).stem.replace("_", " ").title()
        else:
            description = " ".join(sys.argv[1:])
            title = DEFAULT_TITLE
    else:
        description = DEFAULT_DESC
        title = DEFAULT_TITLE

    print(generate_outline(title, description))

if __name__ == "__main__":
    main()
