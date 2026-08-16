## Purpose

Open pipeline for **new Minimax Music tracks** for *Weeks on Fire* — whether you are finishing a backlog seed, pairing a one-panel gag, scoring a drafted scene, or pitching something **totally new**.

The original four-pack (Neon Exit Sign, Quarter to Seventy-Five, Pepperoni or Margherita, Rinse Cycle) is **graduated** → `songs/*.md` + `src/data/songs.ts` + the site **Songs** view. This issue is no longer a fixed checklist. It is a **standing intake** for whatever song the show needs next.

**Twin in-repo:** [`notes/song-suggestions.md`](notes/song-suggestions.md) · **How to think about the show:** issue **#33** (reusable song pitch template)

---

## What makes a *Weeks on Fire* song?

Before pitching, skim these — they are the show's actual rules, not generic "cinematic pop" advice:

| Lens | Read |
|------|------|
| Sonic bible | [`notes/song-suggestions.md`](notes/song-suggestions.md) — "Series sonic bible" (EyeWash transmission, structural flaws, nobody acts) |
| Characters & voices | Rubella (glamour / drift), Lillith (cabaret / whisper), Continuity Voice (institutional), Pizza Guy (professionally neutral), Oz (warm procedural) |
| Cutaway types | Musical cutaway · EyeWash framing · one-panel gag score · night-drive / liminal bed |
| Visual pairing | [`notes/one-panel-gags.md`](notes/one-panel-gags.md) · [`prompts/`](prompts/) · Grok Imagine stills-first when video is expensive |

**Three rules that survive every genre:**

1. **Nobody in these songs is acting.** Emotion arrives through arrangement, not belting.
2. **Something is structurally wrong, and it is never corrected** — a bar too long, a chord late, a phrase a beat behind.
3. **Keep the top end dark unless the sky is the subject** (*Strange Light*, *Porch Light Meridian* are the clean-digital exceptions).

---

## What you can submit here

Anything that could become a Minimax track — no need to match a pre-assigned title:

- **Totally new ideas** (your pitch, your genre, your gag)
- **Scene scores** for drafts in [`notes/scenes/`](notes/scenes/) (Laundromat Saints, Master Control, Item Three, etc.)
- **Gag pairings** from [`notes/one-panel-gags.md`](notes/one-panel-gags.md) not yet in `songs/`
- **EyeWash / ident variants** (10-second tone-per-second upgrades)
- **Instrumental cues** (no lyrics) when the scene already has dialog
- **A/B style attempts** (like *Strange Light* A–E) before picking a canonical mix

---

## Suggested comment format

```
**Type:** new idea / scene score / gag pairing / ident / instrumental / lyric tweak
**Working title:**
**Genre / BPM / voice:**
**Show fit:** (episode, scene, character, gag #)
**Hook or structural flaw:**
**Why it might be fun:**
**Visual companion:** (one still idea or timed segment seed)
```

Or dump the thought — volume beats polish on the first pass.

---

## Graduated catalog (do not re-pitch unless a deliberate remix)

Already on the **Songs** page (`src/data/songs.ts`): Neon Exit Sign · Quarter to Seventy-Five · Pepperoni or Margherita · Rinse Cycle · Choose Your Basalt · Ultra Screech · Pearls in the Ashtray · After Is a Floor · Closed for Cosmic Reasons · The Pour · The Moon Is Collect · Third Shift Porcelain · Strange Light · Porch Light Meridian · Static Between Stations · Empty Parking Lot Waltz · Recycling Bin Rebellion · Caffeinated Melon · Les Ondes Courtes · Twilight Time · Whatever Lets Us Be · Halloween Snake Battle · Monster Mash Finale · Lanois pedal-steel instrumentals · etc.

Mark new promotions in [`notes/song-suggestions.md`](notes/song-suggestions.md) when a pitch graduates.

---

## Per-song file format (when ready for production)

Create `songs/<Title_With_Underscores>.md` matching existing tracks (see `songs/Whatever_Lets_Us_Be.md`):

```markdown
STYLE:
(full Minimax-ready style paragraph — instruments, BPM, mix notes, voice)

LYRICS:
[Section tags]
...

NOTES:
- Episode placement
- Emotional arc
- Reference artists

## Music video treatment (timed)
| Time | Shot | Grok Imagine prompt seed |
|------|------|--------------------------|
| 0:00–0:10 | ... | "..." |

## Status
Concept | Lyrics draft | Ready for Minimax | Integrated in src/data/songs.ts
```

Also update:
- `src/data/songs.ts` — once lyrics are stable
- `notes/song-suggestions.md` — mark graduated
- Optional: `src/data/songCutaways.ts` or `src/data/gagCutaways.ts` if the cutaway is timed on the **Suggestions** view

---

## Acceptance criteria (for a production PR)

- [ ] `songs/*.md` with **complete** lyrics (or explicit instrumental) + STYLE block
- [ ] Timed music-video treatment (≥6 shots) **or** one-panel still + motion note
- [ ] Maps to ≥1 concrete episode/scene, gag, or EyeWash slot
- [ ] Minimax-ready: STYLE is copy-pasteable into Minimax Music
- [ ] Cross-link from `notes/song-suggestions.md`
- [ ] If adding to the app: `npm run build` passes

## Stretch

- Local `.mp3` in `songs/` + `audioFile` in `src/data/songs.ts` (keep binaries reasonable)
- Shared ident variant specs (10s loopable)
- Second PR with A/B generations before canonizing lyrics

## Out of scope

- Large video renders
- Committing huge audio batches without approval

## References

- [`notes/song-suggestions.md`](notes/song-suggestions.md) · [`grok.md`](grok.md) · [`ideas/eyewash-station.md`](ideas/eyewash-station.md)
- Scene drafts: [`notes/scenes/`](notes/scenes/) · Gags: [`notes/one-panel-gags.md`](notes/one-panel-gags.md)
- Reusable pitch guide + starter songs: issue **#33**
