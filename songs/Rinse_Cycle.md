STYLE:

Institutional soft rock / late-night television sign-off theme, 72 BPM, warm and badly over-rehearsed — a house band that has played this every night for thirty years and stopped hearing it. Wet upright piano and Rhodes doubled, heavy plate and room reverb. Brushed kit, very soft, no fills ever. Round flatwound electric bass. A small string pad with slow attack, and a muted trumpet that enters only on the last phrase of each section. Opens with a three-note broadcast ident sting on vibraphone and a 1kHz tone that stops a half-second late. Structurally wrong on purpose: every eight-bar phrase runs **nine bars**, and the final chord of each section resolves one full beat late, every single time — never correct it. Tape hiss, 60Hz mains hum, and mild AM-bandwidth filtering baked in; this is a transmission, not a recording. Lead vocal in warm announcer cadence — sung, but with the phrasing of continuity copy, over-articulated consonants, absolute sincerity, no irony. The faux-sponsor break is spoken over an organ pad with the drums dropped out. Outro is a two-bar phrase that loops seamlessly and could run all night, ending on a spoken tag, not a sung one. Total runtime about 1:20 and fully loopable. Use a warm institutional announcer voice, male or androgynous, over-rehearsed and kind.


LYRICS:

[Ident sting]
(three notes, then tone)

[Verse 1]
We now conclude our broadcasting day
We've been concluding it for years
Thank you for the hours you don't remember
Thank you for the chair, thank you for the tears
Channel twelve and a half is signing off
The way we always do
Nobody's watching, nobody's watching
But everybody's seen it through

[Sponsor break — spoken, over organ pad]
Tonight's sign-off is brought to you by the water.
Not any water. The water in the wall.
Fifteen minutes is the recommendation.
Fifteen minutes is not a suggestion.
Flush for fifteen, darling.
You'll want the full fifteen.

[Verse 2]
The bars come up, the tone comes down
The flag goes still on the lawn
We'll play the anthem for the cul-de-sac
And a bar too long, and a bar too long
If you have seen something this evening
You don't have to say what it was
We'll take it from here, we'll take it from here
That is the whole of what we does

[Refrain]
Rinse cycle
Fifteen minutes, do not blink
Rinse cycle
Longer than you think
Rinse cycle
We'll return to your program
We always do
We always do

[Outro — loops, spoken tag last]
Please stand by
Please stand by
Please stand by
(muted trumpet, one phrase)
Do not blink.


NOTES:

The network framing device in song form: everything in the series is secretly airing on EyeWash Station, and this is what plays when the station admits it. Comfort that curdles on the second pass with nothing in the music changed — so the loop matters more than the take. "That is the whole of what we does" is deliberate; do not fix the grammar. The nine-bar phrasing and late resolutions are the entire trick; if Minimax straightens them out, generate again with `every eight-bar phrase runs nine bars, final chord always lands one beat late, never resolve on time` at the front of the style block.

## Production notes

- **Episode placement.** Sign-off between any two cutaways; "Sign-Off at 3:44" and "Master Control, 4 AM" (`notes/scene-suggestions.md`); usable as a closer over existing footage, which makes it the cheapest tonal upgrade in the project.
- **Emotional arc.** First pass: warm nostalgia. Second pass: something else entirely, from the identical audio. Play it twice in the same episode at least once — that's the whole device.
- **Character voice.** The Continuity Voice, never seen and never to be seen. Its relationship to Episode 2's Radio Voice stays unresolved on screen; the two may share a shift.
- **Reference artists.** Analog TV sign-off anthems and national-anthem beds; in-catalog, the *Twilight Time* pad and the *Les Ondes Courtes* hiss.
- **Ident variants (10 seconds each, generate from this same bed).** 1) **Sign-On** — three-note sting plus four bars of the Twilight Time pad and one bar of something that isn't a tone. 2) **Rinse Timer** — solo vibraphone over a countdown ticking to 14:59 and resetting. 3) **The Fixture** — trumpet phrase alone, no rhythm. 4) **Test Pattern** — the 1kHz tone with the piano faintly behind it, as if the card is holding something back.

## Music video treatment (timed)

Empty master control at 4 AM. The wall of monitors is one second ahead of everything happening in the room. Nobody is ever present, but the chair is warm.

| Time | Shot | Grok Imagine prompt seed |
|------|------|--------------------------|
| 0:00–0:08 | Ident sting. The station card: an eyewash fixture rendered as a logo, wall of test-pattern color behind it. | "1980s television station ident card featuring a stylized wall-mounted emergency eyewash fixture as a logo, SMPTE color bars behind it, CRT scanlines, chroma bleed, broadcast graphic aesthetic" |
| 0:08–0:24 | V1. Slow push into an empty master control room. Every fader is set. The operator's chair is turned as if just vacated. | "Slow dolly into an empty 1980s television master control room at night, wall of CRT monitors glowing, faders set, operator chair turned away as if just vacated, fluorescent hum, cinematic" |
| 0:24–0:38 | V1 cont. Monitor wall: twenty screens showing the same hallway. One screen shows the hallway one second earlier. | "Wall of twenty CRT monitors all showing the same empty institutional hallway, one monitor showing the same hallway a moment out of sync, green tile, flicker, unsettling, cinematic" |
| 0:38–0:52 | Sponsor break. Institutional green tile room. A wall-mounted eyewash station, twin chrome nozzles rotating slowly toward camera. Steam. | "Close-up of an industrial wall-mounted emergency eyewash station in a flickering fluorescent hallway, twin chrome nozzles slowly rotating toward the camera, institutional green tile, faint steam, 1980s broadcast ident aesthetic, VHS chroma bleed" |
| 0:52–1:02 | V2. Locked-off shot of a cul-de-sac at night with a flag hanging dead still, playing on a monitor inside the control room. | "Locked-off night shot of a suburban cul-de-sac with a flagpole, flag completely motionless, orange streetlight, framed inside a glowing CRT monitor bezel, VHS artifacts, cinematic" |
| 1:02–1:12 | Refrain. A tiled room with a 15-minute countdown clock. It reaches 14:59 and resets upward. Lower third: **DO NOT BLINK.** | "Institutional tiled room with a large countdown timer reading 14:59, digits resetting, wet floor drain, harsh fluorescent light, broadcast lower-third caption reading DO NOT BLINK, 1980s video look" |
| 1:12–1:18 | Outro loop. Test pattern card. Something moves behind it — visible only in the gaps between the color bars. | "SMPTE test pattern card on a CRT screen with a faint humanoid shape visible only in the gaps between the color bars, heavy scanlines, static, deeply unsettling, broadcast still" |
| 1:18–1:20 | Tag. Extreme close-up of an eye being rinsed. The reflection in the iris is the laser-snake battle. The eye is not distressed. | "Extreme close-up of a human eye being rinsed with water, reflection in the iris showing a green laser snake battle, calm and undistressed expression, clinical lighting, macro, cinematic" |

## Status

Concept | **Lyrics draft — complete** | **Ready for Minimax** | Integrated in `src/data/songs.ts`
Audio not yet generated — no `.mp3` in repo; link externally once rendered.
