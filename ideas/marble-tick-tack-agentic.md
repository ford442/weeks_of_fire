# Marble Tick Tack — Grok build / Claude agentic expansion

**Parent:** [`marble-tick-tack.md`](marble-tick-tack.md) (night-lot production take)  
**Orbit punch-ins:** [`marble-tick-tack-orbit.md`](marble-tick-tack-orbit.md)  
**Sibling (do not mix):** [`marble-tick-tack-worlds.md`](marble-tick-tack-worlds.md)  
**Status:** Dual-agent packet. Same song, same three rooms, same JSON id.  
**Owner:** Roley Voss lane.  
**Date:** 2026-09-05

This is not a new cutaway. It is the production runbook for the half of the 2:03 that still needs magnet–magnet work.

| Pass | File | Job |
|------|------|-----|
| Grok 4.6 build | [`ai-contributions/grok-4.6/marble-tick-tack-orbit-expansion.md`](../ai-contributions/grok-4.6/marble-tick-tack-orbit-expansion.md) | Locks, tempo math, shot grammar, generate batch, kill criteria |
| Claude agentic | [`ai-contributions/sonnet-4.6/marble-tick-tack-agentic-expansion.md`](../ai-contributions/sonnet-4.6/marble-tick-tack-agentic-expansion.md) | Task graph, failure modes, prompt hardeners, acceptance tests, clip_stacker wait rules |

---

## What the two passes agree on

- Night-lot is the production take. Wrong Sets is a sibling interrupt later, never in the same picture.
- No faces, no lips, no creatures, no building-cast.
- Cabinet wood must match clip A or the chorus cannot come home.
- Rodin does not roll. Tower does not walk. Ferrofluid is H–J only (smear allowed on K/L).
- Center of every orbit is **another magnet, a coil, or the Rodin** — not gravity.
- Hop is furniture. Magnets lock to **136 BPM** (tick) / **68 BPM** (kick).
- Picture `audioPolicy: silent`. Bed is `marble_tick_tack.mp3`.
- Do not mint a second cutaway id. Keep `## A — … (0:00–0:10)` headers so codegen stays stable.
- Do not dump this on [#42](https://github.com/ford442/weeks_on_fire/issues/42). Farm notes go on [#22](https://github.com/ford442/weeks_on_fire/issues/22).

---

## Generate next (locked order)

Half the song already has motion takes that hold the rooms. They do not vibrate as a coupled system.

1. **C** — Rodin cyclotron. If this invents gravity or a second alley, stop the batch.
2. **D** — non-contact gears. Gap must stay visible.
3. **G** — three-phase coil orbit + tower still rise/slumps.
4. **B, E, H** — doorway attract, Almost freeze, hung-rain tremble (no new worlds).
5. **K then L** — bound binary into Gauss chain. Cabinet wood = A.

clip_stacker twins wait until C / D / G exist.

---

## Repo / page

- Idea (parent): `ideas/marble-tick-tack.md`
- Prompts (Suggestions): `prompts/marble-tick-tack-segments.md`
- Cutaway card: `content/cutaways/marble-tick-tack.json`
- After prompt edits: `npm run codegen` so Suggestions + `src/data/generated/cutaways.ts` match.
- Site: Songs + Suggestions on [ford442.github.io/weeks_on_fire](https://ford442.github.io/weeks_on_fire)

---

*Weeks on Fire. Roley Voss. Dual pass 2026-09-05.*
