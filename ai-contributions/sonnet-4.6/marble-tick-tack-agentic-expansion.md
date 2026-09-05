# Claude — Marble Tick Tack agentic expansion

**Date:** 2026-09-05  
**Model lane:** Claude-style agentic follow-up to the Grok 4.6 build  
**Parent idea:** [`ideas/marble-tick-tack.md`](../../ideas/marble-tick-tack.md)  
**Grok build:** [`../grok-4.6/marble-tick-tack-orbit-expansion.md`](../grok-4.6/marble-tick-tack-orbit-expansion.md)  
**Index:** [`../../ideas/marble-tick-tack-agentic.md`](../../ideas/marble-tick-tack-agentic.md)

This file is a runbook. An agent picking it up should be able to generate, reject, and stack without inventing a second night.

---

## Goal

Finish the night-lot cutaway so magnets read as a coupled physical system at **136 BPM**, without minting a new cutaway, mixing Wrong Sets, or breaking cabinet continuity.

Done means: clips **C, D, G** exist as motion twins that pass the acceptance tests below. B / E / H / K / L follow. clip_stacker stays parked until those three exist.

---

## Task graph

```
[0] Read locks
    ideas/marble-tick-tack.md
    ideas/marble-tick-tack-orbit.md
    prompts/marble-tick-tack-segments.md
    content/cutaways/marble-tick-tack.json
        |
        v
[1] Still pack (only if the existing still drifted)
    C Rodin + four spheres mid-orbit
    D two spheres mid-opposite-spin, gap visible
    G coils mid-sequence + three spheres at the base
        |
        v
[2] Image-to-video / Gemini Omni
    C → D → G   (stop the batch if C fails)
    then B, E, H
    then K → L
        |
        v
[3] Reject / re-prompt
    gravity bowl · solar system · field lines · faces
    second alley · Rodin rolling · tower walking · worlds bleed
        |
        v
[4] Codegen only if prompts changed
    npm run codegen
    commit prompts + content JSON + src/data/generated/cutaways.ts
        |
        v
[5] clip_stacker (later)
    engine pair F/G freezeHidden, kick-synced, land on F
    Almost E vs Wrong Sets ice = sibling interrupt only
    musical cutaway: picture silent, master marble_tick_tack.mp3
```

Do not start [5] from [2]. The stacker has nothing to intercut until C / D / G are real.

---

## Agent rules (non-negotiable)

1. Do not create `content/cutaways/marble-tick-tack-orbit.json`. Punch-ins stay on the parent id.
2. Do not rewrite segment headers. Codegen keys off `## A — … (0:00–0:10)`.
3. Do not mix `marble-tick-tack-worlds` stills into night-lot prompts or stacks.
4. Do not put a mountain lion, vinyl alien, London cobble, or Seoul tile in this take.
5. Do not comment on the frame (no prompt cards, no seed HUD). That grammar belongs to Wrong Sets.
6. Do not dump notes on issue #42. Farm chatter → #22. Song notes → #18 / #33.
7. Do not add the mp3 binary to `songs/` unless asked. Track stays local until someone wants the clone heavier.
8. Picture audio stays silent. Never let Imagine’s native bed ride into an edit.

---

## Prompt hardeners

Append these when a take idles, orbits the wrong center, or grows a solar system. Keep them short. Do not lecture physics on camera.

| Failure | Append |
|---------|--------|
| Magnets just sit there | `136 BPM tick-tock is playing. Magnets move on every quarter. Station objects hop on every 0.22s eighth.` |
| Gravity bowl / planets | `Center of the orbit is the copper Rodin torus / the other sphere / the three coils — not gravity. No solar system. No marble bowl.` |
| Spheres touch on the gear shot | `Non-contact magnetic gears. One-diameter air gap. They never touch.` |
| Rodin travels | `The torus vibrates in place and does not roll. Spheres may travel. The torus may not.` |
| Tower walks | `The tower rises on each 68 BPM kick and slumps in the gap. It does not walk. Coils stay in the grass.` |
| CGI field lines | `No visible field lines. No glowing vectors. Force is only in the motion.` |
| Faces in ferrofluid | `Spiked black mercury. No faces, no creatures, no eyes.` |
| Lawn goes municipal | `Unrealistically vivid emerald lawn. Flowers too saturated for night.` |
| Lot splits | `Same night lot. Red tower light far in the dark. Same cabinet wood as the opening shelf.` |
| Worlds bleed | `Dirt alley and unreal lawn only. No desert, no ice sheet, no space void, no London, no Seoul.` |

---

## Acceptance tests

Watch muted against a 136 BPM click (0.441s). If you cannot count laps, it failed.

### Clip C — Rodin cyclotron

- [ ] Four spheres complete roughly one lap per beat.
- [ ] Pairing happens on the near side, unpairing on the far side.
- [ ] On the 68 BPM kick the orbit tightens, then opens — not a jump-cut.
- [ ] Torus does not leave the fence.
- [ ] No ferrofluid in this alley.

### Clip D — magnetic gears

- [ ] Two equal spheres, opposite spin, gap always readable.
- [ ] They rebound on the off-beat instead of colliding.
- [ ] Smaller spheres may take **one** lap, then drop back into the rut.
- [ ] Rodin may be soft in the background. It is not the job.

### Clip G — three-phase + tower

- [ ] Three coils glow in sequence around the circle (120°).
- [ ] Three spheres orbit the **bases**, just above the dew.
- [ ] Tower stands on the kick, slumps a foot in the gap, gets caught.
- [ ] The peeling sphere joins the orbit and stays in frame.
- [ ] No rain.

### Clip K / L — home

- [ ] Pair orbits each other while the pair travels (binary, not a train).
- [ ] Rodin in K is dry.
- [ ] L locks to cabinet wood that matches A.
- [ ] Last click is one snap, not a new dance.

Fail any box → re-prompt that clip only. Do not “fix” it by stacking.

---

## Science that reads on camera

Use the look. Do not put the textbook in the prompt.

| Name in the packet | Physical cousin | What the eye needs |
|--------------------|-----------------|--------------------|
| Cyclotron orbit | Charge circling a magnetic field | Closed laps around a fixed coil-body |
| Magnetic gears | Like-pole repulsion + torque | Counter-rotation with a held gap |
| Three-phase field | 120° AC rotation | Coils lighting in order, spheres following |
| Bound binary | Magnetic dipole pair | Two bodies orbit a point between them |
| Gauss chain | Sequential induction / Newton’s cradle of flux | Contact snap that travels down a line |
| Almost | Force vs gap (1/r⁴-ish) | Millimeter freeze. Motion dies, tension stays |
| Hung ferrofluid | Magnetically saturated spikes | Spikes aim at the nearest magnet, then thaw |

Forbidden translations: orbit → planets, gears → meshed teeth, field → neon arrows, ferrofluid → creature.

---

## clip_stacker wait list

Grammar: production `artifacts/clip_stacker_directions.md` / repo `docs/clip-stacker.md`.

Only after C / D / G pass:

| Block | Move | Land |
|-------|------|------|
| Engine | intercut F / G, `freezeHidden`, snap to 68 BPM kick | F |
| Almost | E vs Wrong Sets ice twin — sibling interrupt, not a world mix in one frame | E |
| Door | B doorway wipe only. No city wipes. | B |
| Bed | `audioPolicy: silent` + master `marble_tick_tack.mp3` | whole cutaway |

Do not speed-curve C to fake 136 RPM. Re-generate C.

---

## Definition of done (repo / page)

- [x] Parent idea names the 136 BPM orbit pass.
- [x] Punch-in map lives at `ideas/marble-tick-tack-orbit.md`.
- [x] Dual-pass index at `ideas/marble-tick-tack-agentic.md`.
- [x] Segment prompts on Suggestions path (`prompts/marble-tick-tack-segments.md`).
- [x] Cutaway card summary / arc / tags mention orbit, gears, 136 BPM.
- [ ] Motion twins for C / D / G exist (generate next).
- [ ] `npm run codegen` clean after any further prompt edit.
- [ ] clip_stacker recipes written against real clips, not stills.

Live hub: https://ford442.github.io/weeks_on_fire (Songs + Suggestions, id `marble-tick-tack`).

---

*Contributed by Claude-style agentic expansion — Weeks on Fire, 2026-09-05.*  
*Roley Voss lane. Cabinet comes home.*
