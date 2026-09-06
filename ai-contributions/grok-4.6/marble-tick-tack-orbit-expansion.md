# Grok 4.6 — Marble Tick Tack build

**Date:** 2026-09-05  
**Lane:** Roley Voss / night-lot production take  
**Kind:** musical cutaway / visual experiment (~2:03)  
**Ask:** First Imagine videos held the rooms but did not vibrate as magnet systems. Build the remaining half with scientifically based fast motion locked to the measured 136 BPM tick, and land the packet on the repo + Suggestions page.

Companion Claude runbook: [`../sonnet-4.6/marble-tick-tack-agentic-expansion.md`](../sonnet-4.6/marble-tick-tack-agentic-expansion.md).  
Index: [`../../ideas/marble-tick-tack-agentic.md`](../../ideas/marble-tick-tack-agentic.md).

---

## What this build is

A production packet, not a pitch. Same JSON id `marble-tick-tack`. Same three rooms. Same Minimax bed.

Station objects hop. Magnets couple.

| Already true | Still missing |
|--------------|---------------|
| Cabinet / alley / lawn geography | Magnet–magnet orbits |
| One job per clip | 136 RPM visible as one lap per beat |
| Rodin stays, tower rise/slumps | Non-contact gears, three-phase field, bound pair |
| Ferrofluid is the only liquid | Rain that trembles on the tick before it falls |

---

## Tempo (measured off the file)

Track: local `artifacts/marble_tick_tack.mp3` — 2:03.06, no vocal, no tagged BPM.

| Feel | BPM | Period | On screen |
|------|-----|--------|-----------|
| Tick / cut grid | **136** | 0.441s quarter / 0.220s eighth | Hop, orbit lap, snapCutsToBeats |
| Kick / slump | **68** | 0.882s | Coils on, tower stands, chain snap |
| Ignore | ~92 | 3:2 grouping | Do not snap to it |

One revolution per beat = **136 RPM**. Watchable. Fast. Not planets.

Prompt the number. “Vibrating to music” is not enough — Imagine will decorate dust and leave the magnets idle.

---

## Shot grammar (Grok Imagine)

Order every still: **subject → magnet job → room → light → lens → “no faces”**.

Continuity tokens — say them or the lot splits:

- Warm-lamp **cabinet wood** (same grain as A)
- Packed **dirt alley**, peeling fence, rusted corrugated
- Copper **Rodin-coil torus**, nested vortex windings
- **Unrealistically green** lawn, flowers too saturated for night
- Three **industrial coils** under the magnet tower
- **Red tower light** far in the dark so the lot is one place
- Frost on fence wire when we are still in the alley

Motion rules for image-to-video / Gemini Omni:

- Continuous single take. No mid-clip scene swap.
- Camera follows one job. “Camera not moving” only on holds (E, I, M).
- Center of orbit named: Rodin / shared barycenter / coil trio / the other sphere.
- If the take becomes a marble bowl, a solar system, or CGI field lines — kill it.

---

## Physics jobs (say the look, do not lecture)

| Job | Look | Clip |
|-----|------|------|
| Attract / almost-snap | Millimeter gap, tug, rebound, then roll | B |
| Cyclotron orbit | Spheres lap the Rodin at 136 RPM | C |
| Magnetic gears | Two spheres counter-rotate, never touch | D |
| Almost | Freeze a millimeter short. No orbit after freeze | E, I, M |
| Rotating field | Coils fire 120° apart; spheres orbit the base | G |
| Hung tremble | Ferrofluid spikes shiver on the eighth, do not fall | H |
| Bound binary | Wet pair orbits each other while the pair travels | K |
| Gauss chain | Spinning pair slams into a snap-line of cubes | L |

Hop stays on furniture: marbles, fence slats, dew, flowers, speaker cones.

---

## Generate batch (this week)

Do not generate Wrong Sets while this batch is open.

1. **C** — four spheres orbit the torus. Torus vibrates, does not travel. Kick tightens the orbit a centimeter.
2. **D** — two equal spheres, one-diameter gap, opposite spin. Smaller spheres may take one lap and drop back.
3. **G** — coils sequence around the circle. Tower still stands on 68 and slumps in the gap. One sphere peels into the orbit, does not leave frame.
4. **B** — cube hands off to two spheres; attract, almost-snap, roll through the same doorway.
5. **E** — threshold Almost. Freeze at eight seconds. No orbit after.
6. **H** — hung rain appears; spikes tremble on the tick; do not thaw yet.
7. **K** then **L** — bound pair home past a dry Rodin; spinning pair into cabinet chain. Wood must match A.

A / F / J can stay if the existing takes already hold the room. Re-roll only if the cabinet drifted or the tower forgot to slump.

---

## Locks

- Night-lot ≠ Wrong Sets. Worlds stills do not mix into this picture.
- No faces, no lips, no creatures, no building-cast, no mountain lion on this take.
- Rodin does not roll. Tower does not walk. Coils do not leave the grass.
- Ferrofluid is H–J (smear only on K/L).
- Clip I stays quiet Almost. Clip M stays decay hold.
- Picture silent. Master bed `marble_tick_tack.mp3`.
- Do not replace the cutaway with a new JSON id.
- Keep segment headers `## A — … (0:00–0:10)` so codegen ids stay stable.
- After prompt edits: `npm run codegen` and commit `src/data/generated/cutaways.ts`.
- clip_stacker twins wait until C / D / G motion exists.
- New pitches go to the idea farm ([#22](https://github.com/ford442/weeks_on_fire/issues/22)), not the production hub ([#42](https://github.com/ford442/weeks_on_fire/issues/42)).

---

## What landed on the repo / page

| File | Role |
|------|------|
| `ideas/marble-tick-tack.md` | Parent idea |
| `ideas/marble-tick-tack-orbit.md` | Punch-in map |
| `ideas/marble-tick-tack-agentic.md` | Dual-pass index |
| `prompts/marble-tick-tack-segments.md` | Timed Grok + Gemini prompts (Suggestions) |
| `content/cutaways/marble-tick-tack.json` | Card summary / arc / tags |
| `src/data/generated/cutaways.ts` | Codegen output after `npm run codegen` |

Live hub: https://ford442.github.io/weeks_on_fire — Songs + Suggestions.

---

*Contributed by Grok 4.6 — Weeks on Fire production build, 2026-09-05.*
