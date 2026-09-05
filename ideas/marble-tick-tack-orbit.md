# Marble Tick Tack — Orbit pass (Grok / Claude expansion)

**Parent:** [`marble-tick-tack.md`](marble-tick-tack.md) (night-lot production take)  
**Sibling:** [`marble-tick-tack-worlds.md`](marble-tick-tack-worlds.md) (do not mix)  
**Dual-agent runbook:** [`marble-tick-tack-agentic.md`](marble-tick-tack-agentic.md)  
**Status:** Punch-in prompts, not a new cutaway. Same song, same three rooms.  
**Owner:** Roley Voss lane.  
**Expanded by:** Grok 4.6 build + Claude agentic follow-up (2026-09-05).

Night-lot motion takes already cover about half the 2:03. Geography holds. What is missing is **magnet–magnet work at 136 BPM**: orbit, couple, precess, snap, rebound. Hop is for furniture. Magnets lock to the tick.

---

## Why this pass

First Imagine videos sat in the correct rooms and did not vibrate as a system. Cubes shivered. Spheres rolled. They did not orbit a shared center, did not gear without touching, did not ride a rotating field.

This packet does not invent a second night. It re-jobs clips **C, D, G, K, L** on the existing lot.

---

## Tempo (measured)

Track: `marble_tick_tack.mp3` — 2:03.06, no vocal, no tagged BPM.

| Feel | BPM | Period | Use |
|------|-----|--------|-----|
| Tick / cut grid | **136** | 0.441s quarter / 0.220s eighth | Imagine hop, clip_stacker `snapCutsToBeats` |
| Kick / slump | **68** | 0.882s | Coils on, tower stands, chain snap |
| Ignore | ~92 | 3:2 grouping | Do not snap to it |

One revolution per beat = **136 RPM**. Watchable. Fast. Not planets.

---

## Physics vocabulary (say the job, do not lecture)

| Job | What it looks like | Where |
|-----|--------------------|-------|
| Cyclotron orbit | Spheres lap a fixed coil / Rodin at 136 RPM | C |
| Magnetic gears | Two spheres counter-rotate around a barycenter, never touch | D |
| Rotating field | Three lawn coils fire 120° apart; spheres orbit the base | G |
| Bound binary | Wet pair orbits each other while the pair travels home | K |
| Gauss chain | Spinning pair slams into a snap-line of cubes and locks | L |
| Almost | Millimeter gap, freeze. No orbit. | E, I, M |

Center of every orbit is **another magnet, a coil, or the Rodin**. Not gravity. If Imagine turns it into a marble bowl or a solar system, kill the take.

Station objects still hop on the eighths. Marbles, fence slats, dew, flowers, speaker cones.

---

## What does not change

- Night-lot is the production take. Wrong Sets stays a sibling.
- No faces, no lips, no creatures, no building-cast.
- Camera never teleports. Cabinet doorway → alley → lawn → same doorway.
- Rodin does not roll. Tower does not walk. Ferrofluid is H–J only (and the smear on K/L).
- Clip I stays the quiet Almost. Clip M stays the decay hold.
- Picture `audioPolicy: silent`. Bed is the Minimax track.

---

## Punch-in map

| Clip | Old job | New job |
|------|---------|---------|
| A | Stacks shiver, one slide | Same + 136 BPM hop named |
| B | Cube hands off to two spheres | Attract, almost-snap, roll through the door |
| C | Spheres roll, Rodin hums | **Rodin cyclotron** — spheres orbit the torus |
| D | Colliding roll | **Non-contact gears** — counter-rotating pair |
| E | Almost at the seam | Same freeze. No orbit. |
| F | Tower rise / slump | Same + eighth shiver on the stack |
| G | Closer rise / slump, one peel | **Three-phase orbit** around the coils + peel |
| H | Hung rain appears | Drops tremble on the tick, do not fall |
| I | Quiet Almost | Tremble only |
| J | Thaw and smash | Same liquid job |
| K | Slick spheres home | **Bound binary** rolls home, Rodin dry |
| L | Chain lock | Spinning pair → Gauss chain |
| M | Decay hold | No orbit |

---

## clip_stacker (second pass)

Grammar: production `artifacts/clip_stacker_directions.md` / repo `docs/clip-stacker.md`.

Do not stack until C/D/G motion twins exist.

- Engine pair F/G: `freezeHidden`, kick-synced, land on F.
- Almost E vs Wrong Sets ice: sibling interrupt only.
- Musical cutaways: picture silent, master `marble_tick_tack.mp3`.

---

## Test order for this pass

1. **C** — spheres orbit the Rodin, torus does not travel.
2. **D** — gears never touch.
3. **G** — coils sequence, spheres lap the base, tower still rise/slumps.
4. **K** then **L** — binary into chain. Cabinet wood must match A.

If C invents gravity or a second alley, stop.

---

## Repo / page

- Idea (parent): `ideas/marble-tick-tack.md`
- Dual-agent index: `ideas/marble-tick-tack-agentic.md`
- Prompts (Suggestions): `prompts/marble-tick-tack-segments.md`
- Cutaway card: `content/cutaways/marble-tick-tack.json`
- Grok build: `ai-contributions/grok-4.6/marble-tick-tack-orbit-expansion.md`
- Claude agentic: `ai-contributions/sonnet-4.6/marble-tick-tack-agentic-expansion.md`
- After push: `npm run codegen` so Suggestions + `src/data/generated/cutaways.ts` match.

---

*Weeks on Fire. Roley Voss. 2026-09-05.*
