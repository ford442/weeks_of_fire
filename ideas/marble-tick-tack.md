# Marble Tick Tack

**Scene title:** Marble Tick Tack  
**Duration:** ~2:03 (12 × 10s + 3s hold)  
**Location:** One night lot — cabinet room, dirt alley, unreal green lawn  
**Tone:** Pure animation bridge. Mechanical, no faces, magnets as the second system.  
**Status:** Ready to generate. Sources on Songs + Suggestions. Roley Voss lane.

---

## Logline

A cabinet of hopping glass marbles keeps time while magnets walk the building lot at night — cubes slide, spheres roll, a copper Rodin torus hums in an alley, an electromagnet tower stands on the kick and slumps in the gap, frozen ferrofluid rain thaws at the dirt/grass seam — then everything chains home on the same shelf.

---

## Two systems

1. **Station objects** hop in place. Already sitting there.
2. **Magnets** are the second thing, and they have bodies: cubes, bars, spheres that roll against each other, a copper Rodin torus, pulsing electromagnet coils, frozen ferrofluid rain.

Speakers keep time indoors. Outside, the magnets *are* the beat.

---

## Geography

| Lane | Look | Job |
|------|------|-----|
| Cabinet | Warm lamp, marble chorus, glasses | Chorus. Start and home. |
| Alley | Old fences, dirt street, Rodin torus, rolling spheres | Travel + sculpture. |
| Lawn | Unreal emerald grass, flowers, electromagnet tower | Rise / slump on the kick. |
| Threshold | Dirt meeting the too-green lawn. Ferrofluid rain. | Only liquid job. |

Camera never teleports. Doorway of the cabinet room opens onto the alley. Alley opens onto the lawn. Lawn returns along the fence line to the same doorway. Red tower light in the far dark so the lot stays one place.

---

## Magnet bodies

| Body | Job |
|------|------|-----|
| Cube / bar | Stack, slide, snap, hang, almost. Cabinet language. |
| Sphere | Roll against each other. Dirt-street language. They may travel. |
| Rodin torus | Sculpture in the alley. Nested copper vortex rings. Hums. Does not roll. |
| Electromagnet coils | Three industrial coils under a magnet tower on the lawn. Kick = stand. Gap = slump. |
| Ferrofluid rain | Frozen black spikes that thaw mid-air, fall, smash, reach for any magnet they hit. One clip only. |

One job per clip.

---

## What this version drops

Piano, pins, typewriter, watch guts, chandelier, buttons, clothespins, tuning forks, Faraday milk, Chladni plate, coins, dice-on-cone.  
They were good. They are not as striking as a Rodin in an alley or a tower that stands up on the kick.  
Oobleck still out — ferrofluid rain is the liquid.

Kept: marble chorus, wine glasses as the indoor handoff, keys on the alley fence if a take needs them, ice as frost on fence wire, quiet Almost.

---

## Music map

| Time | Feel | Where | Magnet energy |
|------|------|--------|----------------|
| 0:00–0:10 | Tick into groove | Cabinet | Stacks shiver |
| 0:10–0:20 | Growing | Cabinet → alley door | Slide / first spheres |
| 0:20–0:40 | Hits | Alley | Rodin hum + spheres in ruts |
| 0:40–0:50 | Build, freeze 0:48 | Alley → lawn | Almost |
| 0:50–1:20 | Full engine | Lawn | Tower rises / slumps |
| 1:20–1:30 | Quiet | Threshold | Ferrofluid hung, Almost |
| 1:30–2:00 | Return + climax | Threshold → cabinet | Rain smashes, chain home |
| 2:00–2:03 | Decay | Cabinet | One last click |

Track: local `artifacts/marble_tick_tack.mp3` (2:03.06, no vocal). Not committed yet.

Measured tempo: **136 BPM** tick grid (0.441s quarter / 0.220s eighth). **68 BPM** kick. Ignore a weaker ~92 BPM 3:2 grouping.

Orbit expansion (punch-ins, not a new cutaway): [`marble-tick-tack-orbit.md`](marble-tick-tack-orbit.md). Clips C / D / G / K / L pick up cyclotron orbit, non-contact gears, three-phase coil field, bound binary, Gauss chain. Center of every orbit is another magnet, a coil, or the Rodin — not gravity.

Dual-agent runbook (Grok build + Claude agentic): [`marble-tick-tack-agentic.md`](marble-tick-tack-agentic.md).

---

## Imagine rules

- Clip C is the Rodin. Do not also do ferrofluid.
- Clips F–G are the tower. Rise and slump only. No rain.
- Clips H–J are the rain. No tower in frame.
- Spheres may roll. The Rodin and the tower may not travel.
- “Unrealistically green” must be in the prompt or the lawn will go municipal.
- Electromagnet coils “switch on with the kick, slump in the gap” — say both or it will just sit there.
- Frozen ferrofluid = spiked black mercury, some faceted, some liquid. Say “no faces, no creatures.”
- Continuous single take, no cut. One camera sentence.

---

## Test order

1. Clip A — stacks, one slide, glasses. Proves indoor grammar.
2. Clip C — spheres orbit the Rodin, torus stays. Proves the alley science.
3. Clip F — tower rises and slumps on the kick. Proves the lawn.
4. Clip J — rain falls and hits. Proves the liquid.

Do not generate the rest until A holds the cabinet. A lost cabinet means the chorus cannot come home.

---

## Sibling

Jokier world-hop on the same song: [`marble-tick-tack-worlds.md`](marble-tick-tack-worlds.md). Night-lot A–M stays the production take.

---

## Repo / page

- Song catalog: `songs/Marble_Tick_Tack.md` (`id: marble-tick-tack`)
- Cutaway: `content/cutaways/marble-tick-tack.json`
- Prompts: `prompts/marble-tick-tack-segments.md`
- Orbit pass: `ideas/marble-tick-tack-orbit.md`
- Dual-agent packet: `ideas/marble-tick-tack-agentic.md`
- Grok build: `ai-contributions/grok-4.6/marble-tick-tack-orbit-expansion.md`
- Claude agentic: `ai-contributions/sonnet-4.6/marble-tick-tack-agentic-expansion.md`
- Site: Songs + Suggestions after `npm run codegen`

---

*Idea capture for Weeks on Fire. Revised 2026-09-05. 136 BPM orbit pass on C/D/G/K/L. Grok/Claude agentic packet added.*
