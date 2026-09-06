# Home Sweet Void — Segment Prompts

Copy-ready prompts for **Grok Imagine** (stills-to-video from locked stills) and **Gemini Omni** (short video twins).
Treatment: [`ideas/home-sweet-void.md`](../ideas/home-sweet-void.md). Dialog stub: [`songs/Home_Sweet_Void_Dialog.md`](../songs/Home_Sweet_Void_Dialog.md).
Canonical board (local): `artifacts/space_house_return_board.md`. Visible on the site **Suggestions** view as `home-sweet-void` (Scenes).

**This week:** Daisy, Hanshaw, and the bird joke are the musical spine. Generate stills-to-video when that week turns. Expand prompts here; do not steal the week.

Imagine I2V is the shoot instruction. Keep prompts **tight** — 2–4 motion verbs, one job, start from the named still. This is not a marble-length prompt.

---

## Continuity lock (paste into every take)

Riley Elaine Smith: sun-bleached blonde, sage-green backless crop top, amethyst pendant on a short chain. Deadpan. Same face the whole scene. No shapeshift.

Rubella: dark hair, black lace long sleeve. Dry.

Lillith: dark hair, black lace. Brighter, not a tour guide.

Three unnamed hosts: tall pale women in sheer grey gowns, standing weather, not helping.

White building cat: short white fur, pink eye-glow. Not the Episode 3 black cat. One half-sentence in the whole movie.

Worms / snakes: long pale white asteroid-ride bodies. Floor form first. Seated form only after a hard cut. Motive: hog the scene. Lasers heat coffee, toast a marshmallow, or silence the cat. No beams into bodies.

Jumbo Earth marshmallow bag on a glass table. Temp Imagine label is fine. Do not invent a space-brand bag.

Lounge: glass table, pale tile, window weather / ribbons. Hollywood hog, not combat.

Negatives (every take): no beams into bodies, no person-becomes-snake morph, no new wardrobe, no looking at camera, no extra species, no porch, no eye-poke, no Picard at this table, no marble cabinet, no mountain lion, no Daisy bicycle, no hosts sitting down to help.

---

## Timing sheet (total 1:11, under ~90s)

Mids of the locked duration ranges. After H, cut to Riley 0:55 or Picard in the other lounge. Do not continue the snake talk-show.

| Beat | Time | Dur | Start still | Motion (2–4 verbs) | Sound |
|------|------|-----|-------------|--------------------|-------|
| A | 0:00–0:10 | 10s | `imagine_images/Y5aPf.jpg` | steam / one marshmallow rolls / hosts breathe | greeting; hull hum |
| B | 0:10–0:26 | 16s | same table as A | chew, look at each other, not the floor | conversation |
| C | 0:26–0:36 | 10s | `imagine_images/7FZsj.jpg` | worms slide an inch or two; ladies do not look down | dialog continues; almost no music |
| D | 0:36–0:41 | 5s | same floor plate | one head turns down | recognition lands |
| E | 0:41–0:49 | 8s | **cut** to `imagine_images/Zc7sD.jpg` | sit-up is a cut, not a melt | snake takes the scene |
| F | 0:49–0:54 | 5s | `imagine_images/gSKXS.jpg` | steam off the paper cup, one blink of eye-glow | hard cutaway |
| G | 0:54–1:04 | 10s | `imagine_images/2rHo1.jpg` | cat mouth opens, snake glow brightens, cat mouth closes | cat’s only line, then silence |
| H | 1:04–1:11 | 7s | hold G composition | hold | credit grab shut |

Pad still `imagine_images/PDuIx.jpg` cuts into A. Cruise / taillights / yard dog are 7b, not this packet.

---

## Dialog timing (locked lines)

Tighten line breaks only. No origin speeches. No second cat line.

| Start | Beat | Line |
|-------|------|------|
| 0:00 | A | **LILLITH:** These were for the fire. |
| 0:03 | A | **RUBELLA:** The fire is a different night. |
| 0:06 | A | **RILEY:** Same bag. That’s the whole arrival. |
| 0:10 | B | **RUBELLA:** We came in hot. |
| 0:14 | B | **LILLITH:** The desert did not have a limit. Orbit did. |
| 0:20 | B | **RILEY:** I didn’t clock it. I counted windows. |
| 0:32 | C→D | **LILLITH:** Those were outside. *(over floor picture)* |
| 0:36 | D | **RILEY:** Same ones. They changed for the glass. |
| 0:41 | E | **SNAKE:** You were space-speeding. We know the number. |
| 0:45 | E | **RUBELLA:** You were behind the asteroids. |
| 0:49 | F | **SNAKE:** We were in the coffee house first. We had it figured out. |
| 0:54 | G | **SNAKE:** This is our scene. |
| 0:57 | G | **CAT:** The limit isn’t speed. It’s— *(mouth opens; snake glow hot; mouth closes; glow holds)* |
| 1:04 | H | **RILEY:** He’s in the scene. You’re not the title. |
| 1:07 | H | **SNAKE:** We heated the coffee. |
| 1:09 | H | **RUBELLA:** The bag was here first. |

---

## Audio lock

Hull hum + cup + bag plastic. Almost no music on C. Cat line dry, close, one take — no voice series. Snake voice: pleased, industry, coffee-house. Not a monster roar.

No Ultra Screech. No Marble Tick Tack.

---

## clip_stacker (second pass only)

Do not stack until B and C motion exist. Speed-ramp belongs on cruise 6–11, not on the worms. Coffee-house F is a hard cutaway, 4–6s, back to G.

Grammar: production `artifacts/clip_stacker_directions.md`. Not Timeline JSON (`docs/clip-stacker.md`).

```
### clip_stacker
intent:          floor sneak under continuing dialog, then cut to seated hog
tool:            intercut
inputs:          A = beat B table talk   B = beat C floor
clock:           parallel
consume:         targetDuration
freq:            low, not a strobe
audioPolicy:     aOnly
land:            forceFinal = A then hard cut to seated still
```

---

## A — Bag Greeting (0:00–0:10)

**Start still:** `imagine_images/Y5aPf.jpg`  
**Locked:** jumbo Earth bag down on the glass table; Riley sage crop + amethyst; Rubella black lace long sleeve; Lillith black lace; three hosts standing in sheer grey gowns; **no worms in chairs**.  
**Motion:** steam, one marshmallow rolls, hosts breathe.  
**Camera:** locked-off medium-wide on the table.  
**Duration:** 10s.

**Grok Imagine**
```
Start from the locked still of a glass lounge table, jumbo Earth marshmallow bag just set down, Riley Elaine Smith blonde in a sage backless crop and amethyst pendant, Rubella in black lace long sleeve, Lillith in black lace, three tall pale unnamed hosts standing in sheer grey gowns as weather, no worms in the chairs. Soft steam off a cup. One marshmallow rolls a few inches on the glass. Hosts breathe. Camera locked medium-wide. 10 seconds. No beams into bodies, no morph, no new wardrobe, no looking at camera, no extra species, no porch, no snakes seated, Grok Imagine style
```

**Gemini Omni**
```
10-second locked-off medium-wide of the same glass table. Jumbo Earth marshmallow bag already down. Soft steam. One marshmallow rolls. Three hosts in sheer grey gowns breathe and do not sit. Riley, Rubella, and Lillith in locked wardrobe look at the bag, not the floor. Soft hull hum. No worms in chairs. No beams, no morph, no eye contact with camera. Photoreal short film.
```

---

## B — Space Speeding (0:10–0:26)

**Start still:** same table as A (`imagine_images/Y5aPf.jpg`).  
**Locked:** same wardrobe, same bag, hosts still standing, still no worms sitting.  
**Motion:** they chew, look at each other, not the floor.  
**Camera:** slow drift between faces, never tilts to the tiles.  
**Duration:** 16s.

**Grok Imagine**
```
Continue the same glass lounge table from the greeting still, jumbo Earth marshmallow bag on the glass, Riley Elaine Smith in sage backless crop and amethyst, Rubella black lace long sleeve, Lillith black lace, three unnamed hosts in sheer grey gowns standing behind. They chew one marshmallow. They look at each other, not the floor. Slow face drift. 16 seconds. No worms in chairs, no floor reveal, no beams into bodies, no morph, no new wardrobe, no looking at camera, no extra species, Grok Imagine style
```

**Gemini Omni**
```
16-second continuous table two-and-three-shot. Same lounge, same bag, same wardrobe. They chew. They look at each other, not the floor. Camera never tilts down. Hosts remain standing weather. Hull hum and bag plastic. Still no worms sitting. No beams, no morph, no camera look. Photoreal short film.
```

---

## C — Floor Sneak (0:26–0:36)

**Start still:** `imagine_images/7FZsj.jpg`  
**Locked:** pale tile, white asteroid-ride worms along the baseboard; ladies still talking above, not looking down.  
**Motion:** worms slide an inch or two along the baseboard. Ladies do not look down.  
**Camera:** low on the floor, baseboard in frame, table legs and gown hems above.  
**Duration:** 10s.

**Grok Imagine**
```
Start from the locked floor still: pale lounge tiles, long pale white worms sneaking the baseboard, same asteroid-ride bodies from behind the rocks, table legs and sheer grey gown hems above, ladies still talking off the floor. Worms slide an inch or two along the baseboard. Ladies do not look down. Camera low, almost no music. 10 seconds. No sit-up, no melt, no beams into bodies, no looking at camera, no extra species, no new wardrobe, Grok Imagine style
```

**Gemini Omni**
```
10-second low floor shot. White worms slide an inch or two along the baseboard. Dialog continues above. Ladies do not look down. Almost no music, hull hum only. Same pale tiles. No sit-up, no morph, no camera look, no extra animals. Photoreal short film.
```

---

## D — Same Ones (0:36–0:41)

**Start still:** same floor plate as C (`imagine_images/7FZsj.jpg`).  
**Locked:** worms still worms on the tiles; one head turns down.  
**Motion:** one head turns down.  
**Camera:** hold the floor; a face enters the top of frame looking down.  
**Duration:** 5s.

**Grok Imagine**
```
Hold the floor still of pale white worms on lounge tiles. One head turns down from above — Riley Elaine Smith blonde sage crop or Lillith dark hair black lace, inventory look, not fear. Worms still worms, still on the floor. 5 seconds. No sit-up, no melt, no beams into bodies, no new wardrobe, no looking at camera, no extra species, Grok Imagine style
```

**Gemini Omni**
```
5-second hold on the floor worms. One head turns down into the top of frame. Recognition, not panic. Worms do not sit up yet. No morph, no beams, no camera look. Photoreal short film.
```

---

## E — Sit Up (0:41–0:49)

**Start still:** hard cut to `imagine_images/Zc7sD.jpg` — do not interpolate from the floor plate.  
**Locked:** pale seated snake-figures in chairs, eyes on, coffee cup, cat present, jumbo bag still on the table, ladies in locked wardrobe.  
**Motion:** sit-up is a cut, not a melt. Hold the seated plate. Eyes on. Cup may steam.  
**Camera:** medium-wide on the table now hogged.  
**Duration:** 8s.

**Grok Imagine**
```
Hard cut to the locked seated still: pale white snake-figures already sitting in the lounge chairs as Hollywood scene-hogs, eyes on, coffee cup on the glass table, jumbo Earth marshmallow bag still there, white building cat in frame, Riley Elaine Smith sage crop, Rubella and Lillith black lace, hosts standing unused. Hold. Eyes on. Cup steams. Sit-up already happened off the cut. 8 seconds. No melt, no person-becomes-snake, no beams into bodies, no looking at camera, no new wardrobe, no extra species, Grok Imagine style
```

**Gemini Omni**
```
8-second hold after a hard cut to seated pale figures already in the chairs. Eyes on. Coffee cup steams. No interpolation from floor worms. No laser fight. No beams into bodies. Snake voice pleased, industry. Photoreal short film.
```

---

## F — Coffee House (0:49–0:54)

**Start still:** `imagine_images/gSKXS.jpg`  
**Locked:** one snake in a wool coat, Earth coffee house, paper cup. Hard cutaway, then back to G.  
**Motion:** steam off the paper cup, one blink of eye-glow.  
**Camera:** close on the cup and the coat.  
**Duration:** 5s.

**Grok Imagine**
```
Start from the locked coffee-house still: a pale snake-figure in a wool coat at an Earth coffee house, heating a paper cup, one blink of eye-glow, steam off the cup. 4 to 6 seconds, hold 5. Hard cutaway, not a morph. No beams into bodies, no looking at camera, no extra species, no new lounge, Grok Imagine style
```

**Gemini Omni**
```
5-second hard cutaway. Wool coat, Earth coffee house, steam off a paper cup, one blink of pink eye-glow. Then we will cut back to the table. No monster roar. No beams into bodies. Photoreal short film.
```

---

## G — Cat Stops (0:54–1:04)

**Start still:** `imagine_images/2rHo1.jpg`  
**Locked:** jumbo bag (temp Jet-Puffed label is fine), white cat mid-sentence, seated snakes, ladies in locked wardrobe.  
**Motion:** cat mouth opens, snake glow brightens, cat mouth closes. Glow holds so the cat stays in frame. No beam.  
**Camera:** medium on cat, bag, and nearest snake eyes.  
**Duration:** 10s.

**Grok Imagine**
```
Start from the locked still of the glass table, jumbo Earth marshmallow bag, white building cat mid-open mouth, seated pale snake-figures, Riley Elaine Smith sage crop, Rubella and Lillith black lace. Cat mouth opens. Snake eyes go hot pink. No beam. Cat mouth closes. Glow holds so the cat stays in frame. 10 seconds. One half-sentence only. No beams into bodies, no morph, no new wardrobe, no looking at camera, no extra species, no second cat, Grok Imagine style
```

**Gemini Omni**
```
10-second table hold. White cat opens its mouth for one dry close line. Snake eyes brighten. No laser beam. Cat mouth closes. Glow stays. Jumbo bag in frame. Silence after the cut-off. Photoreal short film.
```

---

## H — Bag First (1:04–1:11)

**Start still:** hold G composition (`imagine_images/2rHo1.jpg`).  
**Locked:** same bag, same faces, cat still in frame with glow, snakes not the title.  
**Motion:** hold.  
**Camera:** not moving.  
**Duration:** 7s.

**Grok Imagine**
```
Hold the same glass-table composition: jumbo Earth marshmallow bag, white building cat with leftover pink eye-glow, seated pale snake-figures, Riley Elaine Smith blonde sage crop and amethyst, Rubella black lace long sleeve, Lillith black lace, three hosts standing unused. Camera not moving. Hold 7 seconds. No new action, no beams into bodies, no morph, no new wardrobe, no looking at camera, no extra species, Grok Imagine style
```

**Gemini Omni**
```
7-second hold. Same table, same bag, same faces. Cat remains in frame with glow. No new motion. Riley and Rubella shut the credit grab. Then the packet ends. Photoreal short film.
```

---

## Optional still (not this pass)

Do not generate a new bag brand. When the user photographs the real jumbo Earth bag from the mountain store, rebuild Y5aPf and 2rHo1 with that bag in the same compositions.

Mid sit-up as a person-melt is forbidden. If a bridge is needed later: a worm half on the chair seat, still a worm, not a person melting.

---

## After H

Packet stops. Optional exits already boarded elsewhere: Riley’s 0:55 (camera on cat vs robot-birds at the window) or Picard in the other lounge (`artifacts/picard_breakdance.md`). Do not write Sweden. Do not continue the snake talk-show.

Riley stay-behind (same face, sage crop; not an A–H beat):

```
RILEY
They already had my number. I’m already here.
```
