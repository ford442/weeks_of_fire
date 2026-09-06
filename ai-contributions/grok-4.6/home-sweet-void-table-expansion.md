# Grok 4.6 — Home Sweet Void table / worms / conversation

**Date:** 2026-09-06  
**Lane:** space visual-experiment / dialog cutaway (~71s table, under 90s)  
**Kind:** stills-to-video packet, not a new episode screenplay  
**Ask:** Expand the house-arrival table for Weeks on Fire. Video prompts, stills-to-video motion notes, dialog polish, clip_stacker hooks. Do not invent a second house or a fight movie.

Canonical board (local): `artifacts/space_house_return_board.md`  
Picard (other room): `artifacts/picard_breakdance.md`  
Eye-poke (retired if this table is the meeting): `artifacts/space_yacht_eye_poke.md`

---

## What this build is

A production packet that **mirrors** the locked board. After the 20s cockpit cruise they are inside. Greeting is the Earth marshmallow bag. Conversation starts. Camera finds the floor. Riley names the asteroid worms. Worms sit up as a cut and hog the scene. Cat speaks once. Glow stops him. Packet ends.

| Already true | This pass |
|--------------|-----------|
| Locked A–H beat order and dialog | Imagine I2V prompts, one job, 2–4 verbs |
| Existing stills in `imagine_images/` | Timing sheet 0:00–1:11 |
| Picard boarded in the other lounge | clip_stacker recipe parked until B/C motion |
| Daisy / Hanshaw / bird joke = this week's musical spine | Catalog as **scene**, waits its turn |

Idea notes go to GitHub [#22](https://github.com/ford442/weeks_on_fire/issues/22). Do not dump on [#42](https://github.com/ford442/weeks_on_fire/issues/42). Glam / Sweden stays on [#32](https://github.com/ford442/weeks_on_fire/issues/32).

---

## Timing (locked)

| Beat | Time | Still | Motion |
|------|------|-------|--------|
| A | 0:00–0:10 | `Y5aPf.jpg` | steam / marshmallow rolls / hosts breathe |
| B | 0:10–0:26 | same table | chew, look at each other, not the floor |
| C | 0:26–0:36 | `7FZsj.jpg` | worms slide an inch or two; ladies do not look down |
| D | 0:36–0:41 | same floor | one head turns down |
| E | 0:41–0:49 | **cut** to `Zc7sD.jpg` | sit-up is a cut, not a melt |
| F | 0:49–0:54 | `gSKXS.jpg` | steam off paper cup, one blink of eye-glow |
| G | 0:54–1:04 | `2rHo1.jpg` | cat mouth opens, snake glow brightens, mouth closes |
| H | 1:04–1:11 | hold G | hold |

After H: Riley 0:55 or Picard in the other lounge. Do not continue the snake talk-show. Do not write Sweden.

---

## Locks

- Riley Elaine Smith — blonde, sage backless crop, amethyst. Deadpan inventory. Last name Smith. No mystical register. No shapeshift. Same face if she stays.
- Rubella dry, Lillith brighter, both black lace. Three unnamed hosts in sheer grey gowns are weather.
- White building cat, pink eye-glow. One half-sentence in the whole movie. Not the Episode 3 black cat.
- Worms: asteroid-ride bodies, floor first, seated via cut. Lasers heat coffee / toast a marshmallow / silence the cat. No beams into bodies. No looking at camera.
- Jumbo Earth bag. Imagine labels temp. Do not generate a new brand this pass.
- No porch, no poke, no melt, no laser fight, no Picard at this table, no marble / lion / Daisy in this lounge.
- No Ultra Screech. No Marble Tick Tack.
- Keep segment headers `## A — … (0:00–0:10)` so codegen ids stay stable.
- After prompt edits: `npm run codegen`. Do not hand-edit `src/data/generated/`.

---

## clip_stacker (second pass only)

Do not stack until B and C motion exist. Speed-ramp stays on cruise 6–11.

```
intent:          floor sneak under continuing dialog, then cut to seated hog
tool:            intercut
inputs:          A = beat B table talk   B = beat C floor
clock:           parallel
consume:         targetDuration
freq:            low, not a strobe
audioPolicy:     aOnly
land:            forceFinal = A then hard cut to seated still
```

F is a hard 4–6s cutaway, back to G.

---

## What landed on the repo / page

| File | Role |
|------|------|
| `ideas/home-sweet-void.md` | Hub / board mirror |
| `prompts/home-sweet-void-segments.md` | Timed Grok + Gemini I2V |
| `songs/Home_Sweet_Void_Dialog.md` | Hull-hum dialog stub |
| `content/cutaways/home-sweet-void.json` | Suggestions scene card |
| `notes/issue-22-home-sweet-void-body.md` | Ready-to-paste #22 comment |
| `src/data/generated/cutaways.ts` | Codegen output after `npm run codegen` |

Live hub: https://ford442.github.io/weeks_on_fire — Suggestions / Scenes.

---

## Success test

Greeting is the bag. Conversation starts before the floor. Floor worms read as the asteroid worms. Sit-up is a cut. Cat speaks once and is stopped by glow, not a beam. No porch, no poke, no melt, no new episode.

---

*Contributed by Grok 4.6 — Weeks on Fire production build, 2026-09-06.*
