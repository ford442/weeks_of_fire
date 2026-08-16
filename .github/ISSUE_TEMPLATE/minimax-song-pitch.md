---
name: Minimax song pitch
about: Reusable intake for pitching Minimax songs to Weeks on Fire
title: '[Song pitch] '
labels: music, minimax
assignees: ''
---

## Purpose

**Reusable template** for pitching Minimax songs to *Weeks on Fire*. Copy this issue's structure when you want a fresh intake thread, or comment here with a new pitch.

**Standing intake for finished tracks:** issue **#18** (Minimax song pack — now open to totally new ideas).

**In-repo workspace:** [`notes/song-suggestions.md`](notes/song-suggestions.md) (template + graduated log)

---

## How to consider the show (read this before pitching)

*Weeks on Fire* is not a playlist. It is **late-night affiliate programming that wandered into a short film** — EyeWash Station framing, musical cutaways, and one-panel gags that refuse to explain themselves.

### The world in one breath

Suburban cul-de-sac absurdity (laser snakes, HOA, pizza guy) shares airtime with glamour-apocalypse (burning town, house of mirrors), nocturnal drift (dashboard glow, laundromat fluorescents), and cosmic bureaucracy (elevators with unlisted floors, pools that hang overhead, moons that bill collect). **The Two** (Rubella & Lillith) are bored, beautiful, and never off the clock. **EyeWash Station** is the network that airs all of it — warm, worn, structurally wrong on purpose.

### Voice map (who sings what)

| Voice | Register | Example tracks |
|-------|----------|----------------|
| **Rubella** | Glamour, drift, close-mic, never belting | Neon Exit Sign, Pearls in the Ashtray, Closed for Cosmic Reasons |
| **Lillith** | Cabaret, whisper-lead, committed chaos | Choose Your Basalt, After Is a Floor, The Pour |
| **Continuity Voice** | Institutional announcer, tire-ad sincerity | Rinse Cycle (sign-off lines) |
| **Pizza Guy** | Professionally neutral, zero vibrato | Pepperoni or Margherita |
| **Unison / deadpan** | Labor, gag cycle, no wink | Third Shift Porcelain |
| **Instrumental** | Lanois pedal-steel, battle cues, ident beds | Deep Space Drift, Halloween Snake Battle |

### Cutaway types (pick one)

1. **Musical cutaway** — song is the scene; dialog optional or absent
2. **EyeWash framing** — ident, sign-off, master-control bed (*Rinse Cycle* is sign-off; don't duplicate unless intentional)
3. **One-panel gag score** — one still does the joke; motion is weather, not punchline ([`one-panel-gags.md`](notes/one-panel-gags.md))
4. **Night-drive / liminal** — unresolved, half-asleep, static as harmony (*Quarter to Seventy-Five*, *Static Between Stations*, *Les Ondes Courtes*)
5. **Celestial witness** — sky breaks a law; one person notices (*Strange Light*, *Porch Light Meridian*)

### Sonic rules (from the catalog bible)

1. Nobody **acts** — arrangement carries emotion.
2. One **structural flaw** held for the whole track (late bar, missing word, flat PA line, dryer thump off-grid).
3. **Dark top end**, tape hiss, mains hum — unless the sky is literally the subject.
4. Comedy stays **professionally neutral** — never wink at the camera in the lyrics.

### Quick "does this fit?" checklist

- [ ] Could this air on EyeWash between two unrelated cutaways?
- [ ] Is there a **specific still** you can picture without explaining the joke?
- [ ] Does it reuse an existing track's job? (If yes, say why the second version earns its place.)
- [ ] Who is the voice — and are they bored, institutional, or professionally neutral?
- [ ] What is the **one wrong thing** in the meter or harmony that never gets fixed?

---

## How to add a song suggestion

Comment with the block below **or** add a section to [`notes/song-suggestions.md`](notes/song-suggestions.md).

```
**Working Title:**
**Genre / Vibe / BPM:**
**Voice / character lean:**
**Cutaway type:** (musical / EyeWash / gag / night-drive / celestial)
**Hook or structural flaw:**
**Show fit:** (episode, scene draft, gag #, character)
**Grok Imagine companion:** (one still sentence)
**Why it might be fun:**
**Status:** seed / ready for Minimax / graduated
```

---

## When a pitch graduates

1. Full `songs/<Title>.md` with STYLE + LYRICS (+ timed MV or gag still)
2. Entry in `src/data/songs.ts`
3. Mark in [`notes/song-suggestions.md`](notes/song-suggestions.md)
4. Optional: `songCutaways.ts` / `gagCutaways.ts` for the Suggestions view
5. Comment on issue **#18** with the PR link

---

## References

- [`notes/song-suggestions.md`](notes/song-suggestions.md) · [`notes/scenes/`](notes/scenes/) · [`notes/one-panel-gags.md`](notes/one-panel-gags.md)
- [`ideas/eyewash-station.md`](ideas/eyewash-station.md) · [`characters/suggested-characters.md`](characters/suggested-characters.md)
- Minimax intake: issue **#18**
