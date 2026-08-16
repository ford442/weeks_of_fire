# notes/scenes/ — Long-Form Dialog Scenes

Full screenplay drafts for scenes that outgrew a bullet list. Each file is a
shootable 3–6 minute block with slugline, cast, music cue, emotional notes,
per-beat Grok prompts, and production notes.

Short gags and seeds still live upstream:
`../dialog-jokes-incidents.md` (one-liners, running gags, incidents) and
`../scene-suggestions.md` (scene concepts, one-pagers). This folder is where
they go when they get long enough to act.

---

## Index

| Scene | File | Runtime | Setting | Register |
|---|---|---|---|---|
| **Item Three: Decorative Accent** | [`item-three-decorative-accent.md`](item-three-decorative-accent.md) | 4–6 min | HOA clubhouse, night | Deadpan / procedural |
| **Master Control, 4 AM** | [`master-control-4am.md`](master-control-4am.md) | 3–5 min | EyeWash Station master control | Procedural / liminal |
| **2AM Laundromat Slow Dance** | [`laundromat-slow-dance.md`](laundromat-slow-dance.md) | 3–4 min | 24-hour laundromat | Warm / musical cutaway |
| **We Play to Win (House of Mirrors Rally)** | [`house-of-mirrors-rally.md`](house-of-mirrors-rally.md) | 4–5 min | Abandoned ballroom | Glamour / apocalypse |
| **Empty Highway Confession** *(stretch)* | [`empty-highway-confession.md`](empty-highway-confession.md) | 3–4 min | Interstate, 4:17 AM | Poetic / nocturnal |
| **The Long Way Up** | [`the-long-way-up.md`](the-long-way-up.md) | 9–12 min | Ridge road → Kestrel Ridge, 2:10 PM–9:40 PM | Procedural / sci-fi parody |
| **No Other Human Sounds** | [`no-other-human-sounds.md`](no-other-human-sounds.md) | 6–8 min | 4N22-C cut-through → Pulpit Overlook, 5:40–6:25 PM | Quiet rally / two-hander |

**The Long Way Up is deliberately the longest continuous dialog block in the
series** — the "wordy episode," where the show appears to change channels into a
cable procedural for eleven minutes. It only works because every other episode is
nearly silent. There should never be a second one. **No Other Human Sounds** is
not a second wordy episode; it is that episode's quiet mile — Rubella and Riley
on the unmaintained cut-through, a short-line rally, then they rejoin Lillith
and drive to Pulpit Overlook. The tower stays offscreen. The car does not go up.

**Subtitles:** [`master-control-4am.srt`](master-control-4am.srt) — timed SRT draft (4:44) for the Master Control scene.

---

## Cast Table — Who Appears Where

| Character | Item Three | Master Control | Laundromat | House of Mirrors | Empty Highway | Long Way Up | Still Woods |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Karen | ● lead | — | — | — | — | — | — |
| Dale | ● lead | — | — | — | — | — | — |
| Brad | ● lead (monologue) | — | — | — | — | — | — |
| Patricia | ● | — | — | — | — | — | — |
| Gary Johnson | ○ | — | — | — | — | — | — |
| Biscuit | ● (steals gavel) | — | — | — | — | — | — |
| Oz | — | ● lead | — | — | — | — | — |
| Marguerite Flood | — | ● | — | — | — | — | — |
| Continuity Voice | — | ● V.O. | ○ V.O. (corner TV) | — | ◐ *see note* | ● V.O. (×2) | — |
| Radio Voice | — | — | — | — | ● V.O. | — | — |
| The Saints (unnamed pair) | — | — | ● leads | — | — | — | — |
| Night Laundromat Attendant | — | — | ● (one speech) | — | — | — | — |
| Vivienne Vale | ○ (2 lines, standing) | — | — | ● lead (monologue) | — | — | — |
| Liliane Vale | ○ (2 lines, standing) | — | — | ● lead (monologue) | — | — | — |
| Rubella Vale | — | — | — | — | — | ● lead (drives) | ● lead (walks) |
| Lillith Vale | — | — | — | — | — | ● lead | ○ fork + reunion |
| Riley Smith | — | — | — | — | — | ● lead | ● lead |
| Pizza Guy | ○ (door) | — | — | ○ (button) | — | — | — |
| The Driver | — | — | — | — | ● lead | — | — |

● principal · ○ cameo / single beat · ◐ deliberately unresolved

**Note on the Voices:** the Continuity Voice (EyeWash Station) and the Radio
Voice (Ep2) are never confirmed to be the same person. Empty Highway uses the
Radio Voice. Do not cast a face for either.

---

## Scene-Level Rules (carried across files)

- **No names for the Laundromat Saints** — not spoken, not slated, not in the SRT.
- **Master Control never adjudicates** haunted vs. unscheduled. Oz says one, Marguerite says the other, the scene ends.
- **"Don't smudge the mascara" is earned mid-scene**, never an opener.
- **The Pizza Guy's order name is always almost right, and never corrected.**
- **No copyrighted lyrics anywhere.** Original Minimax tracks or `[Section]` placeholder tags only.
- **The Kestrel Ridge antenna is never adjudicated.** Dead weather repeater or EyeWash Station transmitter — Riley has a theory, nobody rules on it, same as haunted vs. unscheduled.
- **The red lamp pulse at the end of The Long Way Up is never explained**, never referenced in dialog, and never happens again.
- **Rubella's pseudoscience is corrected exactly once** (Long Way Up, Beat D). She simply stops giving that lecture afterward. The change is never marked.
- **Riley is never wrong about a fact and never smug about it.** No mystical register, no tragic backstory on camera, no crying scene. Inventory lives in `characters/riley-smith.md`.
- **No Other Human Sounds has no other human sounds** between Lillith's fork line and the sedan at the reunion. No Continuity Voice, no radio, no score in the woods. The tower stays offscreen. The pendant is fourteen dollars. They drive to Pulpit Overlook. The car does not attempt the tower.

---

## Promotion Path

1. Draft here (`notes/scenes/`).
2. Lock the music cue and generate the priority shots into `prompts/`.
3. Promote to `episodes/episode-N/screenplay.md` when the episode exists.
   - **Item Three** is the Episode 4 anchor if the HOA episode locks.
   - **The Long Way Up** is the Episode 4 *dialog* anchor if the ridge episode locks instead. The two are alternatives, not neighbors — one wordy episode per season.
   - **No Other Human Sounds** inserts between Long Way Up Beats E and F (cut-through, rally, drive to Pulpit Overlook). It is not a second wordy episode.
   - **Empty Highway Confession** is an Episode 2 tail or Episode 5 opener.
   - **Master Control** works as connective tissue between any two cutaways.

---

*Made with Grok Imagine magic ✨*
