# Cue Sheets

Nova Chen's second record. The short one, with a voice on it.
Catalog album, not a cutaway bed.

**Kind:** catalog / vocal record
**Owner:** Nova Chen (Music Supervisor)
**Sibling:** `ideas/night-side.md` — the long instrumental grid. These two do not mix.
**Generate first:** `songs/Hold_for_Eight.md` · `songs/Under_Dialogue.md` · `songs/Cue_Sheets.md`
**Farm:** [#18](https://github.com/ford442/weeks_on_fire/issues/18) · [#33](https://github.com/ford442/weeks_on_fire/issues/33)
**Do not dump on #42.**
**Boarded:** 2026-09-09, for MiniMax Music 3.0.

---

## What it is

Night Side is five and six minutes at a time, instrumental, a grid you leave running while
you generate stills. Cue Sheets is the opposite record from the same desk: ten short songs,
none over two and a half minutes, every one of them **sung**, and every lyric written in the
language a music supervisor actually uses on a cut.

Hold for eight. Under dialogue. Out on the cut. Two dB and don't tell me. Needle drop,
source. Temp love. Cue out, scene continues.

The joke is never explained and nobody winks. These are love songs about the job, sung by
someone who has spent a career describing her own work in a column marked *incidental*.

**Thesis:** Night Side says the grid holds so the stills can move. Cue Sheets says the same
thing an octave down — the cue leaves so the scene can keep going.

---

## Lock

- **Vocal record.** One female contralto on all ten tracks, close-miked, dry, conversational,
  unhurried. She says the technical words like ordinary words.
- **The voice is uncredited on the sleeve.** Nova will not take a mic and will not build a
  booth brand. Brooklyn is the room, not the name. Credit reads *Session Voice.*
- **Not the cast.** Not Rubella, not Lillith, not the Continuity Voice, not Peggy Babcock's
  secretary. This record is Nova's catalog lane, not the building and not the station.
- **One locked BPM per track. One key per track.** No tempo maps. Slow grid, 68–100 BPM —
  deliberately below and outside the 120–132 Night Side club range so the two records can
  never be mistaken for each other.
- **Every track carries one structural flaw** and the arrangement never corrects it. That is
  the house rule and it is the whole record.
- **MiniMax 3.0, dense STYLE.** Genre → BPM + key → voice → instruments → the central
  production idea → the structural flaw → mood → negatives → runtime. Every STYLE block is
  written near the **2000-character ceiling** and none exceeds it. Do not trim them to tidy
  them up.
- **LYRICS are real lyrics** with descriptive section tags. This is not the Night Side
  `[Inst]` field.
- No Glamora magenta, no night-lot, no station VO, no Lace Waterfall. Worlds do not mix.

---

## Track list

| # | Title | BPM | Key | The flaw that never gets fixed | First? |
|---|---|---|---|---|---|
| 1 | Hold for Eight | 84 | Dm | The count reaches six and restarts. It never gets to eight. | yes |
| 2 | Under Dialogue | 76 | B♭m | The mix ducks a beat early, for a line that never comes. | yes |
| 3 | Out on the Cut | 92 | Am | Every phrase is clipped before its last word, including the last one. | |
| 4 | Two dB and Don't Tell Me | 88 | Gm | Each chorus is genuinely two dB quieter. The vocal never compensates. | |
| 5 | Needle Drop, Source | 96 | Em | Source becomes score mid-song. One word changes. Nothing acknowledges it. | |
| 6 | Temp Love | 80 | F♯m | The bridge modulates to the wrong key and never modulates back. | |
| 7 | Cue Out, Scene Continues | 72 | Cm | Twenty-two seconds of room tone after the music ends. Nothing returns. | |
| 8 | Sting, Four Frames Late | 100 | Bm | Every stab lands a sixteenth late. The last one lands after the word. | |
| 9 | No Music Here | 68 | E♭m | The band hard-mutes on the word *here*. The last time, it doesn't come back. | |
| 10 | Cue Sheets | 84 | Dm | The outro sings *background, instrumental* over a plainly foreground vocal. | yes |

Tracks 1 and 10 share a key and the same held Rhodes chord — the record opens and closes on
it, and the closer holds it one second too long.

---

## Generate order

**Hold for Eight** first — it is the shortest statement of the whole idea and it tells you
immediately whether MiniMax will hold a suspended chord and let a voice count over it.

Then **Under Dialogue**, because the empty ducks are the hardest thing on the record to get:
the model will want to fill them. If it fills them, regenerate.

Then **Cue Sheets** for the title and the sleeve.

After that, the risky three in order: **Out on the Cut** (will the model let lines end
mid-word), **Needle Drop, Source** (will it flip from band-limited source to full-range
score without a transition), **Sting, Four Frames Late** (will it keep the rhythm section on
the grid while the stabs drag).

**No Music Here**, **Cue Out**, **Two dB** and **Temp Love** are safer takes and can batch.

---

## What will go wrong with MiniMax, and what to do

| Symptom | Fix |
|---|---|
| It completes the truncated lines on *Out on the Cut* | Regenerate. The truncation is the song, not an artifact. |
| It fills the silent ducks on *Under Dialogue* | Regenerate. The holes stay empty. |
| It normalizes the step-downs on *Two dB* | Keep the quiet take. Do not master it back up. |
| It trims the room-tone tail on *Cue Out* | Generate longer and trim by hand from the tail end. |
| It adds runs, ad-libs or a belt | Regenerate. She never belts. There are no runs on this record. |
| It drags the whole band on *Sting* | Regenerate. Only the stabs are late. |
| A take stops short of the stated runtime | These are short songs. Keep the take. |

---

## Picture language (visualizer only, later)

Loft nearfields at night. A printed cue sheet on the desk with a pen on it. Fader caps.
A paused frame on a second monitor with the timecode visible. The brick window with nothing
happening outside it.

Not: stage, crowd, booth, microphone hero shot, cabinet, night lot, tandem, yacht.

---

## Assignment rule

Same as Night Side: **this is catalog, not a bed.** Do not put a Cue Sheets track under a
picture unless a packet table says so by name. Nova's standing rules hold — no aria under a
joke interrupt, no commercial bed under a flower bicycle.

*Cue Sheets was the record that was waiting. It is not waiting now.*
