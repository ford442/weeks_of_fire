# Short Packet Farm — boards for the three generate-first packets

Copy-ready **Grok Imagine** boards for the three packets marked generate-first in
[`ideas/short-packet-farm.md`](../ideas/short-packet-farm.md).

**Loop rules:** [`ideas/loop-grammar.md`](../ideas/loop-grammar.md) · **Farm:** [#22](https://github.com/ford442/weeks_on_fire/issues/22)
**Date:** 2026-09-09 · **Status:** boards only. No stills generated, none committed.

**Prompt policy:** written long on purpose (~1,000–1,300 characters), one continuous run,
Imagine order — **subject → bodies → job → 3–4 supporting figures → room → light →
lens/grade**. Continuity tokens are repeated *verbatim* between prompts; they are the
thing that keeps the room the same room. Do not trim them to clean the prompt up. If a
generation comes back mushy, cut **supporting figures** first — never the job.

**Pipeline:** strong stills → silent picture → audio bed → timed slideshow / simple
motion → clip_stacker second pass. Do not wait on lipsync. No faces in any of these three.

---

# 1. `bag-at-chest-height`

**Shelf:** loop tile · **Target length:** 5.0s seamless · **Audio:** silent picture, one
paper crease per pass · **Room:** mail room, one room only

## Why it is Weeks on Fire

The building has a rule about how a bag is carried, and the rule has been implemented in
hardware. Nobody is being carried away by it and nothing escalates — three porcelain
hands simply keep a kraft bag at chest height around an oak island, forever, because that
is the height. It is the same joke as an HOA memo arriving before the apocalypse, told
with no people and no line of dialogue. Generic surrealism would open the bag or float
it. This one never opens it and never lets it drift a half inch off the rub line.

The strange-3D test passes: one object with a job (the bag is handled), doing the job
too well.

## Continuity tokens

Repeat these exact strings in every prompt.

- `oval honey-oak service counter island`
- `three pale porcelain human hands mounted on short brass wrist-posts`
- `kraft paper grocery bag with one crisp square fold across its top`
- `worn pale rubbed line at chest height around the outer edge`
- `wall of small unlit brass pigeonholes`
- `one caged bulb hanging directly over the island`
- `no arms, no bodies, no faces anywhere in frame`

## Beats

| t | Picture | Sound |
|---|---------|-------|
| 0.0–0.8 | **Rest pose.** Bag upright in hand 1. All three hands open and still. | — |
| 0.8–2.0 | Hand 1 lifts and passes the bag to hand 2. Height never changes. | one paper crease |
| 2.0–3.2 | Hand 2 passes across the far side of the island to hand 3. | — |
| 3.2–4.4 | Hand 3 closes the circuit and returns the bag to hand 1. | one paper crease |
| 4.4–5.0 | Rest pose again. Identical frame to 0.0. | — |

Underlying job: **orbit**. One circuit, one system, home.

## Loop note

**In-point = out-point:** frame 0.0 and frame 5.0 are the same image — bag upright in hand
1, fold facing camera, all fingers relaxed and open, bulb at the same intensity. The rest
hold at 4.4–5.0 is the landing pad for clip_stacker and the slideshow; cut in or out
anywhere in that window and the seam is invisible.

**Accumulation check:** the bag does not soften, crease further, or gain a dent per lap.
The counter does not collect paper dust. The bulb does not warm. If lap two looks worn
compared to lap one, the tile is not seamless — regenerate, do not fix in post.

## Still prompts

**A — rest pose (in-point / out-point)**
```
Photoreal product-lab still, 4:5, an oval honey-oak service counter island in a small municipal mail room, three pale porcelain human hands mounted on short brass wrist-posts spaced evenly around the outer edge of the island, fingers relaxed and open, no arms, no bodies, no faces anywhere in frame, a single kraft paper grocery bag with one crisp square fold across its top standing upright in the first hand at exactly chest height, the island's outer edge worn to a pale rubbed line at chest height around the outer edge from decades of the same pass, bag closed and full and completely unlabelled, three supporting figures in the room: a wall of small unlit brass pigeonholes behind the island, a rubber date-stamp lying face down on the oak, and a short honeycomb-pattern floor vent guard at the wainscot, institutional cream plaster walls, grey terrazzo floor, one caged bulb hanging directly over the island pooling warm light on the oak and cool spill on the terrazzo, everything beyond the island in soft falloff, locked camera at counter height, 50mm, T2.8, fine grain, matte porcelain against satin brass against dry kraft paper, no chrome, no signage, no legible text, Grok Imagine style
```

**B — first pass, hand 1 to hand 2**
```
Photoreal product-lab still, 4:5, the same oval honey-oak service counter island in a small municipal mail room, three pale porcelain human hands mounted on short brass wrist-posts around the outer edge, no arms, no bodies, no faces anywhere in frame, the first and second hands both touching the same kraft paper grocery bag with one crisp square fold across its top mid-handover, four porcelain fingers under the base and four over the fold, the bag held dead level and exactly on the worn pale rubbed line at chest height around the outer edge, the third hand open and waiting, unmoved, three supporting figures: a wall of small unlit brass pigeonholes behind the island, a rubber date-stamp lying face down on the oak, a short honeycomb-pattern floor vent guard at the wainscot, institutional cream plaster walls, grey terrazzo floor, one caged bulb hanging directly over the island, same warm pool on the oak and cool spill on the terrazzo as the rest frame, locked camera at counter height, identical framing, 50mm, T2.8, fine grain, matte porcelain against satin brass against dry kraft paper, no chrome, no signage, no legible text, Grok Imagine style
```

**C — the far side, hand 2 to hand 3**
```
Photoreal product-lab still, 4:5, the same oval honey-oak service counter island in a small municipal mail room seen from the same locked position, three pale porcelain human hands mounted on short brass wrist-posts around the outer edge, no arms, no bodies, no faces anywhere in frame, the handover now happening on the far side of the island so the kraft paper grocery bag with one crisp square fold across its top is partly occluded by the near edge of the oak, still dead level on the worn pale rubbed line at chest height around the outer edge, the first hand already returned to open and relaxed, three supporting figures: a wall of small unlit brass pigeonholes directly behind the far handover, a rubber date-stamp lying face down on the oak in the near foreground slightly out of focus, a short honeycomb-pattern floor vent guard at the wainscot, institutional cream plaster walls, grey terrazzo floor, one caged bulb hanging directly over the island, the far hands lit a half stop hotter because they are under the bulb, locked camera at counter height, 50mm, T2.8, fine grain, matte porcelain against satin brass against dry kraft paper, no chrome, no signage, no legible text, Grok Imagine style
```

**D — closing the circuit, hand 3 to hand 1**
```
Photoreal product-lab still, 4:5, the same oval honey-oak service counter island in a small municipal mail room, three pale porcelain human hands mounted on short brass wrist-posts around the outer edge, no arms, no bodies, no faces anywhere in frame, the third hand extending the kraft paper grocery bag with one crisp square fold across its top back into the first hand, completing a full circuit of the island, the fold turned to face camera exactly as it did at the start, bag never leaving the worn pale rubbed line at chest height around the outer edge, second hand open and empty behind, three supporting figures: a wall of small unlit brass pigeonholes behind the island, a rubber date-stamp lying face down on the oak, a short honeycomb-pattern floor vent guard at the wainscot, institutional cream plaster walls, grey terrazzo floor, one caged bulb hanging directly over the island, same warm pool and cool spill, no change in bulb intensity, locked camera at counter height, identical framing to the rest frame, 50mm, T2.8, fine grain, matte porcelain against satin brass against dry kraft paper, no chrome, no signage, no legible text, Grok Imagine style
```

**E — texture insert (optional coverage, not in the loop)**
```
Photoreal macro insert, 4:5, extreme close on the worn pale rubbed line at chest height around the outer edge of an oval honey-oak service counter island, the grain polished smooth and slightly paler exactly along that band and untouched above and below it, one pale porcelain thumb entering frame at the right resting on the line, the bottom corner of a kraft paper grocery bag with one crisp square fold across its top just touching the oak, no arms, no bodies, no faces anywhere in frame, three supporting figures held soft in the background: a wall of small unlit brass pigeonholes, a rubber date-stamp lying face down, a short honeycomb-pattern floor vent guard at the wainscot, institutional cream plaster and grey terrazzo far out of focus, one caged bulb hanging directly over the island raking across the polished band, locked camera, 100mm macro, T4, fine grain, matte porcelain against satin brass against dry kraft paper and old wax, no chrome, no signage, no legible text, Grok Imagine style
```

## Motion prompt

```
5-second seamless loop. Three porcelain hands pass one kraft bag once around the oval oak island and return it to the first hand in the exact opening position, fold facing camera. Height never changes — the bag stays on the worn rub line for every frame. Nothing else in the room moves: pigeonholes still, stamp still, vent guard still, bulb steady. Camera locked, no push, no drift. The bag does not open, does not soften, does not gain a crease per lap. Ends on the opening frame. Silent picture except one dry paper crease on the first handover and one on the last.
```

## clip_stacker

**Not needed.** One Imagine take, one system, one circuit. If the third handover mushes,
regenerate the take — do not stitch two passes, the seam will show on loop.

---

# 2. `we-will-stand`

**Shelf:** joke interrupt · **Target length:** 7.0s · **Audio:** off-camera echo +
chair creak + one chirp · **Room:** HOA clubhouse, one room only

## Why it is Weeks on Fire

The line already exists and it is already funny: offered a folding chair, *"We'll stand.
We don't do polyester."* This packet never says the second half and never shows a face.
The chair simply solves the refusal itself by producing a second chair — the building's
answer to any objection is more of the thing you objected to. Deadpan building logic,
one physical punch, out. On the same shelf as the cowboy-chimp cartoon and the bird
flock: it cuts in cold and it does not explain.

Sibling, not remake: the flock's joke is the echo *plus* the listening twin. This one's
joke is entirely furniture.

## Continuity tokens

- `beige steel folding chair with a grey polyester seat`
- `clubhouse linoleum with one cracked gavel mark in it`
- `fluorescent troffer with one tube pinker than the other`
- `stacked chair trolley against the far wall`
- `no faces, framing cuts off above the elbow`

## Beats

| t | Picture | Sound |
|---|---------|-------|
| 0.0–1.4 | A gloved hand carries one folded chair into frame and holds it out toward camera-left. | cold cut in, room hum |
| 1.4–2.8 | The chair is set down and opened. It settles on the linoleum. Hand withdraws. | chair creak, one linoleum scuff |
| 2.8–3.9 | **Hold.** Nothing happens. One empty open chair. | *(echo, off camera)* "We'll stand." |
| 3.9–5.6 | **Punch.** The seat hinges once more than it should and a second identical chair separates out and stands itself beside the first. | one hinge creak, one chirp |
| 5.6–7.0 | Two identical chairs, both empty, both still. Cut out. | — |

**One line, off camera, before the punch.** Nobody on screen speaks. The last thing in
the packet is the picture.

## Still prompts

**A — the offer**
```
Photoreal interior still, 2.39:1, a suburban HOA clubhouse meeting room, one beige steel folding chair with a grey polyester seat held folded flat in a single gloved hand entering from frame right, offered outward toward an empty spot at camera-left, framing cuts off above the elbow so there are no faces and no shoulders in frame, the chair held at hip height and slightly tilted the way you carry one you intend to hand over, three supporting figures in the room: a stacked chair trolley against the far wall loaded eight deep, a folding banquet table with a cracked wooden gavel resting on it, and a corkboard of overlapping unreadable notices, clubhouse linoleum with one cracked gavel mark in it running across the foreground, cream cinderblock walls, a fluorescent troffer with one tube pinker than the other directly overhead throwing flat institutional light with a faint magenta cast on one side of the room, no windows, locked camera at seated eye height, 35mm, T2.8, mild grain, dry beige steel against grey polyester against yellowed linoleum, no signage legible, Grok Imagine style
```

**B — set down and opened**
```
Photoreal interior still, 2.39:1, the same suburban HOA clubhouse meeting room from the same locked position, one beige steel folding chair with a grey polyester seat now standing open and empty in the middle of the frame, legs settled, seat level, faced squarely at camera, the gloved hand already withdrawing out of frame right and blurred with motion, framing cuts off above the elbow so there are no faces in frame, three supporting figures: a stacked chair trolley against the far wall loaded eight deep, a folding banquet table with a cracked wooden gavel on it, a corkboard of overlapping unreadable notices, clubhouse linoleum with one cracked gavel mark in it running across the foreground, cream cinderblock walls, a fluorescent troffer with one tube pinker than the other directly overhead, flat institutional light, the chair casting two overlapping soft shadows because of the two tubes, locked camera at seated eye height, identical framing, 35mm, T2.8, mild grain, dry beige steel against grey polyester against yellowed linoleum, no signage legible, Grok Imagine style
```

**C — the hold (rest frame under the echo)**
```
Photoreal interior still, 2.39:1, the same suburban HOA clubhouse meeting room from the same locked position, a single beige steel folding chair with a grey polyester seat standing open, empty, dead centre, absolutely nothing else happening, no hands anywhere in frame, no faces, the room composed and patient as though it expects to be sat in, three supporting figures: a stacked chair trolley against the far wall loaded eight deep, a folding banquet table with a cracked wooden gavel on it, a corkboard of overlapping unreadable notices, clubhouse linoleum with one cracked gavel mark in it running across the foreground, cream cinderblock walls, a fluorescent troffer with one tube pinker than the other directly overhead, flat institutional light, two overlapping soft shadows under the chair, generous empty floor to the left of the chair with nothing in it, locked camera at seated eye height, identical framing, 35mm, T2.8, mild grain, dry beige steel against grey polyester against yellowed linoleum, no signage legible, Grok Imagine style
```

**D — the split (punch, mid-action)**
```
Photoreal interior still, 2.39:1, the same suburban HOA clubhouse meeting room from the same locked position, one beige steel folding chair with a grey polyester seat in the act of separating into two identical chairs, the seat hinging open one fold too many along a seam that should not exist, the second chair's frame emerging half-formed and already load-bearing, both sets of legs on the floor, the split happening as clean mechanical hinge motion with no stretching and no melting and no glow, no hands anywhere in frame, no faces, three supporting figures: a stacked chair trolley against the far wall loaded eight deep, a folding banquet table with a cracked wooden gavel on it, a corkboard of overlapping unreadable notices, clubhouse linoleum with one cracked gavel mark in it, cream cinderblock walls, a fluorescent troffer with one tube pinker than the other directly overhead, flat institutional light, four overlapping soft shadows now, locked camera at seated eye height, identical framing, 35mm, T2.8, mild grain, dry beige steel against grey polyester against yellowed linoleum, no signage legible, Grok Imagine style
```

**E — two chairs (out-frame)**
```
Photoreal interior still, 2.39:1, the same suburban HOA clubhouse meeting room from the same locked position, two identical beige steel folding chairs with grey polyester seats standing open and empty side by side, squared to camera, touching at the frame rail, both perfectly settled as if they had always been a pair, the floor around them otherwise bare, no hands, no faces, no people, three supporting figures: a stacked chair trolley against the far wall loaded eight deep, a folding banquet table with a cracked wooden gavel on it, a corkboard of overlapping unreadable notices, clubhouse linoleum with one cracked gavel mark in it running across the foreground, cream cinderblock walls, a fluorescent troffer with one tube pinker than the other directly overhead, flat institutional light, four overlapping soft shadows, locked camera at seated eye height, identical framing, 35mm, T2.8, mild grain, dry beige steel against grey polyester against yellowed linoleum, no signage legible, Grok Imagine style
```

## Motion prompt

```
7-second locked interior, no camera move. A gloved hand sets one folding chair down, opens it, and withdraws. Hold two seconds — nothing moves. Then the chair's seat hinges once more than it should and a second identical chair separates out and stands itself on the floor beside the first, as clean hinge mechanics: no stretch, no melt, no glow, no particles. Both chairs come to rest and hold one full second. No faces, no bodies above the elbow, nobody sits. Camera locked. Ends on two still empty chairs.
```

## clip_stacker

**Needed.** Imagine will not hold the hold *and* land the split cleanly in one take.

| Slot | Source | Note |
|------|--------|------|
| 1 | Take from **B** (set down / open / withdraw) | Trim out on the chair settling |
| 2 | Take from **C** (dead hold) | ~1.1s. Echo VO sits here |
| 3 | Take from **D** (the split) | The only cut that matters — land it on the hinge creak |
| 4 | Take from **E** (two chairs) | 1.4s hold, hard out |

Doorway wipe: none. Speed curve: none. **Straight cuts only** — a wipe would sell the
joke harder than the joke, and the punch is that nobody reacted.

---

# 3. `the-approval-desk`

**Shelf:** gag sketch · **Target length:** 30s · **Audio:** silent picture + four stamp
thumps · **Room:** honey-oak office, one room only

## Why it is Weeks on Fire

A brass lamp with a stamp arm is an object with a job. Left alone with no forms, it does
the job anyway: it approves the desk, the drawer pull, its own base, and finally itself.
That is building bureaucracy as a physical machine — the same logic that produces an HOA
memo before the apocalypse, rendered as one employed object in one room. The lamp-eyes
are pale pink and they never become a face. Nothing is destroyed and nothing escalates
into a fight; the lamp is simply extremely good at its job and there is nothing left to
approve.

The land is the coldest part: a real form arrives and it does not stamp it. It is done.

Generic trippy CGI would give the lamp a personality and a reaction shot. This one never
looks at camera.

## Continuity tokens

- `articulated brass desk lamp with two small pale pink lenses set in the shade rim`
- `second brass arm ending in a wooden-handled rubber stamp`
- `honey-oak desk with a rectangular grey marble insert`
- `wire in-tray and a brass paper spike`
- `porcelain cup of pencils`
- `short honeycomb-pattern vent guard in the wainscot`
- `no face, no mouth, no eyes beyond the two pink lenses`

## Beats

| t | Section | Picture | Sound |
|---|---------|---------|-------|
| 0–3s | Setup | Rest pose. Lamp folded, stamp arm down, marble insert empty. | room silence |
| 3–7s | Setup | A form slides onto the marble insert. Lamp leans, pink lenses brighten a half stop, stamp arm lifts and strikes. Form slides off. | thump 1 |
| 7–11s | Setup | Second form. Same move, faster. Rhythm established. Form slides off. | thump 2 |
| 11–15s | — | No form arrives. The lamp waits, leaning, lenses at half. | *(nothing)* |
| 15–19s | **Wrong turn** | It stamps the bare marble insert. Camera begins a slow orbit left. | thump 3 |
| 19–24s | Wrong turn | It stamps the desk edge, then the drawer pull, then its own base. Orbit continues. | three light thumps |
| 24–28s | **Land** | The stamp arm folds up and over and stamps the **shade**. The pink lenses go dark for one beat, then return. | thump 4, heavier |
| 28–30s | Land | Arm returns to rest. A fresh form slides onto the marble insert. The lamp does not move. Hold. | one paper slide, then nothing |

Setup (0–11) · wrong turn (11–24) · land (24–30).

## Loop note

Not a loop — but **3–7s is liftable as a 4s tile** if the farm ever needs an approval
bumper. Cut it as its own packet with its own in/out on the rest pose, do not carve it
out of the finished 30. Per [`ideas/loop-grammar.md`](../ideas/loop-grammar.md): one
system, rest pose, silent but for the thump.

## Still prompts

**A — rest pose (establish)**
```
Photoreal object still, 16:9, an articulated brass desk lamp with two small pale pink lenses set in the shade rim standing folded and at rest on a honey-oak desk with a rectangular grey marble insert, a second brass arm ending in a wooden-handled rubber stamp hanging folded at the lamp's side like a tool at rest, the marble insert bare and clean, no face, no mouth, no eyes beyond the two pink lenses, the lamp posed as equipment and not as a character, three supporting figures on the desk: a wire in-tray holding nothing, a brass paper spike, and a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot behind, dark green painted office walls, a closed panelled door far left, warm practical light coming only from the lamp's own bulb pooling on the marble and falling off fast into the oak grain, the two pink lenses glowing faintly at half intensity, locked camera at desk height, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text on any paper, Grok Imagine style
```

**B — the stamp strike (setup, doing the job right)**
```
Photoreal object still, 16:9, the same articulated brass desk lamp with two small pale pink lenses set in the shade rim leaning forward over a honey-oak desk with a rectangular grey marble insert, its second brass arm ending in a wooden-handled rubber stamp driven down flat onto a single sheet of pale paper lying on the marble insert, the stamp caught at the instant of contact with the paper visibly compressed under it, the lamp head angled down at the work like a machine sighting, no face, no mouth, no eyes beyond the two pink lenses which are now a half stop brighter, three supporting figures: a wire in-tray holding nothing, a brass paper spike, a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot behind, dark green painted office walls, a closed panelled door far left, warm practical light coming only from the lamp's own bulb, hard pooled light on the marble, oak grain in falloff, locked camera at desk height, identical framing, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text on the paper, Grok Imagine style
```

**C — stamping the bare marble (wrong turn begins)**
```
Photoreal object still, 16:9, the same articulated brass desk lamp with two small pale pink lenses set in the shade rim, its second brass arm ending in a wooden-handled rubber stamp pressed directly onto the bare rectangular grey marble insert of the honey-oak desk with no paper under it at all, a faint ink mark already sitting on the polished stone beside the strike, the lamp head still angled down at the work with complete indifference, no face, no mouth, no eyes beyond the two pink lenses, camera beginning a slow orbit so the desk is now seen from ten degrees further left than the rest frame, three supporting figures: a wire in-tray holding nothing, a brass paper spike, a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot behind, dark green painted office walls, warm practical light coming only from the lamp's own bulb, the marble catching a long specular highlight from the new angle, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text, Grok Imagine style
```

**D — stamping the desk edge and the drawer pull (wrong turn, orbit at 40°)**
```
Photoreal object still, 16:9, the same articulated brass desk lamp with two small pale pink lenses set in the shade rim reaching down past the edge of the honey-oak desk with a rectangular grey marble insert, its second brass arm ending in a wooden-handled rubber stamp pressed against the rounded front edge of the desk, three small ink marks already on the oak edge and one on the brass drawer pull below it, the lamp's own base carrying a fresh mark on its flange, everything done neatly and in a row like inventory, no face, no mouth, no eyes beyond the two pink lenses, camera now forty degrees around the desk in a continuing slow orbit so the wainscot is behind the lamp, three supporting figures: a wire in-tray holding nothing, a brass paper spike, a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot, dark green painted office walls, warm practical light from the lamp's own bulb only, long raking shadows across the oak, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text, Grok Imagine style
```

**E — the self-stamp (the land)**
```
Photoreal object still, 16:9, the same articulated brass desk lamp with two small pale pink lenses set in the shade rim with its second brass arm ending in a wooden-handled rubber stamp folded all the way up and over onto its own shade, the stamp pressed flat against the outside of the brass shade, the arm bent into an anatomically awkward but purely mechanical loop with visible pivots and no distortion, both pale pink lenses gone completely dark for this frame, the honey-oak desk with a rectangular grey marble insert below still bare, no face, no mouth, no eyes, camera at the far side of the slow orbit roughly sixty degrees around, three supporting figures: a wire in-tray holding nothing, a brass paper spike, a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot, dark green painted office walls, the only light now the lamp's bulb throwing the shade's shadow across the desk with the stamp's silhouette in it, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text, Grok Imagine style
```

**F — the unstamped form (out-frame)**
```
Photoreal object still, 16:9, the articulated brass desk lamp with two small pale pink lenses set in the shade rim folded back down at rest exactly as it began, its second brass arm ending in a wooden-handled rubber stamp hanging folded at its side, a small dark ink mark now sitting on the outside of the brass shade, a single fresh sheet of pale paper lying squarely on the rectangular grey marble insert of the honey-oak desk completely unstamped, the lamp not leaning toward it, not angled at it, entirely disengaged, no face, no mouth, no eyes beyond the two pink lenses which are back at half intensity, camera returned to the original locked rest-frame position, three supporting figures: a wire in-tray holding nothing, a brass paper spike, a porcelain cup of pencils, a short honeycomb-pattern vent guard in the wainscot behind, dark green painted office walls, a closed panelled door far left, warm practical light from the lamp's own bulb pooling on the marble and the untouched paper, locked camera at desk height, 40mm, T2.8, fine grain, satin brass against cold grey marble against warm honey-oak against matte porcelain, no chrome, no legible text on the paper, Grok Imagine style
```

## Motion prompt (per segment, not one 30s take)

```
Locked or slow-orbit photoreal object shot. The brass lamp is the only thing that moves — one arm, one job. Stamp strikes are mechanical: lift, drive, contact, lift, no wobble and no recoil bounce. The pink lenses change intensity only, never shape, never blink like eyes. Nothing else on the desk moves: tray, spike, pencil cup and vent guard are furniture. No glow, no particles, no sparks, no HUD. When the camera orbits it orbits at a constant slow rate and never stops mid-move. Silent picture; the stamp thump is added in the stacker.
```

## clip_stacker

**Needed.** Six takes, one orbit, and a 30s runtime — Imagine will not do this in one.

| Slot | Source | Length | Note |
|------|--------|--------|------|
| 1 | A rest | 3.0s | Locked. Hard in from black |
| 2 | B strike | 4.0s | Locked. Thump 1 |
| 3 | B strike (regen, tighter) | 4.0s | Locked. Thump 2, cut 4 frames earlier than slot 2 — the rhythm speeding up is the setup |
| 4 | A rest (reuse, held) | 4.0s | The wait. **Reuse the slot-1 take**; identical framing makes the wait land |
| 5 | C marble | 4.0s | Orbit starts here. Thump 3 |
| 6 | D edge / pull / base | 5.0s | Orbit continues. Three light thumps, PiP not needed |
| 7 | E self-stamp | 4.0s | Orbit at its widest. Thump 4, heaviest. One-beat lens blackout |
| 8 | F unstamped form | 2.0s | **Snap back to the slot-1 framing.** No orbit. Hold, then out |

Speed curve: slot 6 may ramp 1.15× to keep the three small stamps inside 5s. Doorway
wipe: none — the joke is that the room never changes. The only real edit trick in the
packet is **reusing slot 1 as slot 4**; the audience reads it as patience, not as a
repeat.

---

## Do-not, all three packets

- No faces. No lipsync. Nobody sits, nobody speaks on camera.
- One room per packet. Mail room, clubhouse, and office never see each other.
- No marble cabinet, no night lot, no magnets, no wings, no porcelain swan-necks, no
  mountain lion, no Daisy field, no Sweden.
- No new Minimax bed. The two joke packets use a prior-scene echo; the tile is silent.
- Wet enamel, if it ever enters these rooms, stays on the ground.
- Do not commit stills from these boards. Boards and prompts only.
