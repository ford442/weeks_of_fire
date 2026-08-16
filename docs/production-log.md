# Production Log

## 2026-08-16
- Graduated **"Condition Report"** from `notes/song-suggestions.md` onto the Songs page: `songs/Condition_Report.md` + `src/data/songs.ts` (`condition-report`). Gag #6 **The Overnight Conservator** now pairs with it in `src/data/gagCutaways.ts` instead of a Rinse Cycle placeholder. Eight-for-eight gag song pairing is complete.
- **Riley Smith** graduated from a card to a full inventory: `characters/riley-smith.md`. Porterville / Tulare County, family all living, nine-year site-survey job, 1998 4Runner in Darren's driveway, Bishop amethyst for fourteen dollars, songs titled by date and wind direction. Last name is Smith. Comedy remains that she is correct, not wounded — no tragic reading, no crying scene, keep her above five thousand feet.
- New Episode 4 insert **No Other Human Sounds** (`notes/scenes/no-other-human-sounds.md`): after the hose clamp, Lillith takes the graded fork; Rubella and Riley walk 4N22-C (5:40–6:25 PM). Still woods, zero score, then a **short-line rally**, then they rejoin Lillith and **drive to Pulpit Overlook**. Tower stays offscreen. The car does not go up. They walk the rest from the cliff side.
- One-pager in `notes/scene-suggestions.md`. Index + cast column + scene rule in `notes/scenes/README.md`. Cross-linked from `the-long-way-up.md`. Cast + Suggestions entries updated.
- Added song pitch **"Condition Report"** to `notes/song-suggestions.md` (seed) as the song pairing for gag #6 **The Overnight Conservator**, previously the only one-panel gag without a matched track. Cross-linked from `notes/one-panel-gags.md`. Contributed via the Minimax song-pitch intake template — signed Claude Sonnet 5.
- **Glam-Sham-Poo / Ultra Screech** living ideas page: `notes/glam-sham-poo-ideas.md` (twin of issue [#32](https://github.com/ford442/weeks_on_fire/issues/32)). Track graduated to Songs + Suggestions. Kenji “Shred” Sato added to Cast.
- Productionized the cutaway: song file rewritten to STYLE/LYRICS/NOTES (`songs/Glam_Sham_Poo_Ultra_Screech.md`), six timed segments as `mv-ultra-screech` in `src/data/songCutaways.ts`, and copy-ready stills prompts in `prompts/glam-sham-poo-segments.md` (plus bonus college-lore stills: handbook §12, dorm pyro, Kenji campus tour).
- `ideas/glam-sham-poo-commercial.md` is now the cutaway hub: timed spoken-VO script for the scratch audio (~0:35), product variants (Quiet Formula banned, Freshman Orientation Size), banned ingredient “liquid feedback,” HOA vs. campus-curfew conflict, and why the track deliberately avoids cosmetic-ad dance-pop.
- **Blocker:** no Minimax render yet. Spoken commercial audio stays scratch under the original 5-still clip; stills and `glam_sham_poo_commercial_clip.mp4` remain local artifacts, not committed.

## 2026-08-13 (later)
- Productionized the eight one-panel gags: long-form Grok Imagine stills + 3–8s motion prompts, character leans, filenames. `notes/one-panel-gags.md` + `src/data/gagCutaways.ts`.
- Graduated the gag-cycle songs to `songs/` with Minimax STYLE/LYRICS/NOTES: Pearls in the Ashtray, After Is a Floor, Closed for Cosmic Reasons, The Pour, The Moon Is Collect, Third Shift Porcelain.
- Also graduated remaining song suggestions so the Songs page is complete: Strange Light, Porch Light Meridian, Static Between Stations, Empty Parking Lot Waltz, Recycling Bin Rebellion, Caffeinated Melon, plus the five Lanois instrumentals that were on disk but missing from `src/data/songs.ts`. Deduped catalog entries.
- Suggestions page now lists **all** current cutaways, gags, and scenes (filters: Musical / Gags / Scenes). New data: `src/data/songCutaways.ts`, `src/data/sceneCutaways.ts`.

## 2026-08-13
- Added **eight one-panel gag stills** (newspaper-comic / *New Yorker* energy, series register) in `notes/one-panel-gags.md`: Closed for Cosmic Reasons; The Moon Is Collect; Third Shift Porcelain; Cities in the Shell; Complaint Window, Deep Field; The Overnight Conservator; Furnace Season; The Ice That Exhales. Each has a one-line visual, the quiet joke, 3–6s micro-motion, and a Grok Imagine still prompt. Not yet in `prompts/`.
- Added **six original song drafts** (full lyrics, chords, motifs, cutaway pairings) to `notes/song-suggestions.md`: Pearls in the Ashtray; After Is a Floor; Closed for Cosmic Reasons; The Pour; The Moon Is Collect; Third Shift Porcelain. Not graduated to `songs/` or `src/data/songs.ts`.
- Cross-links: `notes/README.md`, `notes/image-prompt-captures.md`, `notes/scene-suggestions.md`.

## 2026-08-10
- Developed **The Long Way Up** — Episode 4 scene suggestion, ~9–12 min: the deliberate **"wordy episode."** The near-silent show appears to change channels into a mid-season cable procedural that turns into a chatty sci-fi movie, and nobody in the cast notices. Fake TEASER + three ACTS, a main title held one beat too long, and an opening station card: **"THE FOLLOWING PROGRAM CONTAINS DIALOGUE."**
- **The climb now consumes the rest of the day** — eight beats with on-screen timestamps from **2:10 PM** (meeting Riley, played as a traffic stop) to **9:40 PM** (fire under the antenna). Obstacles added: a seasonal-closure gate with a cut padlock re-hung to read as locked, the sedan quitting on an eleven percent grade (hose clamp, not head gasket), and 2.1 miles of switchbacks walked in **one trail boot and one stiletto** — the episode's signature image.
- **New character: Riley** (`characters/suggested-characters.md`) — nine years of site surveys, calm, specific, never wrong about a fact. Written explicitly *against* the mystical/poetic draft that read as daytime drama: no seer register, no tragic backstory, no crying scene. Anti-daytime-drama rule written into the scene file — sincerity must be load-bearing on a distance, a padlock, a frequency, or a boot.
- **Continuity event:** Rubella's pseudoscience lecture is **corrected for the first time in the series** (Beat D, ground current / rats / hydrogen sulfide). She never gives it again; the change is never marked.
- **Score withheld for nine minutes.** Payoff is a written, non-negotiable **14-second silence** at the saddle — the first time all episode the show sounds like itself — then **"The Honest Height"** (original Minimax, `[Section]` placeholders only) sung diegetically at the fire. One red aircraft lamp on the dead tower pulses once; nobody looks up; never explained.
- Script: `notes/scenes/the-long-way-up.md`. Prompts: `prompts/the-long-way-up-segments.md`. One-pager: `notes/scene-suggestions.md`. Index + cast table + scene rules: `notes/scenes/README.md`.
- **Blockers:** "The Honest Height" lyric + Minimax render. Not promoted to `episodes/episode-04/` — Episode 4 has no folder yet, and **Item Three** (HOA) vs. **The Long Way Up** (ridge) are alternative Ep4 anchors, not neighbors. One wordy episode per season.

## 2026-08-05
- Developed **The 480p Studio Huddle** — Episode 02 meta writer-meeting dialog (~2:00–2:15): Mara, Rubella & Lillith under one softbox argue cereal bowls, barista informants, Ep2 pacing, and seed the HOA Meeting + chromatic synth bass cue.
- Script: `episodes/episode-02/studio-huddle.md` (full dialog, barista insert seed, production notes).
- Per-segment Grok Imagine + Gemini Omni prompts: `prompts/studio-huddle-segments.md` (+ bonus cereal / barista stills).
- Site **Suggestions** entry: `studio-huddle` in `src/data/suggestions.ts`.
- Master story tracker: `docs/story-tracker.md` (roster, setpieces, Ep1–04 spine).
- Notes: scene + drop-in dialog beats in `notes/scene-suggestions.md` and `notes/dialog-jokes-incidents.md`.

## 2026-07-31 (later)
- **Monster Mash Finale expansion** — runtime now ~3:00–3:30 with two new dance breaks:
  - **2B (1:00–1:12)** — **Amy & Alec return** from "The Rescue" hiking sketch in their exact
    costumes (REI shell + lit headlamp + carabiners; wool sweater + aviators at night + ranger
    hat + spear) and dance at two wildly different speeds. Carabiner jingle mixed as percussion.
  - **4B (2:22–2:34)** — **Thriller-style werewolf** in red-and-black varsity jacket and single
    sequined glove **moonwalks backwards** in a slow orbit around the mic stand, staring down
    the lens. Monster line catches the choreography for four beats and loses it.
- All segment prompts rewritten **long-form** (~1,000–1,300 chars) to push Grok Imagine's detail
  ceiling — ordered subject → wardrobe → blocking → background → light → lens → grade → style.
- Both cameos carry into the Spy vs. Spy outro as background silhouettes; all downstream segment
  timings shifted. Updated: `prompts/monster-mash-finale-segments.md`,
  `episodes/episode-03/monster-mash-finale.md` (cameo section, imagery bank, segment map),
  `src/data/suggestions.ts` (new `mm-2b` / `mm-4b` segments).
- New backlog of cameo/staging/prompt-craft pitches: `ideas/monster-mash-expansion.md`.

## 2026-07-31
- Added **Monster Mash Finale** scene plan for Ep3 Halloween (~2:30–3:00): Rubella covers "The Monster Mash" on the post-snake-battle lawn; cursed guest list (Nixon, Khomeini, Furbies, knife-kittens, Skeksis, etc.); parallel Lillith spy-heist; hologram reveal; Spy vs. Spy noir outro.
- **Minimax Music 3.0** paste blocks + full lyrics in `songs/The_Monster_Mash_Finale.md`.
- **SNL-style silver glitter transition** bump (Rubella + Lillith portraits on black) in scene plan + segment prompts.
- Added **Ultra-Refreshed Water Lab** cutaway: over-engineered window apparatus delivering the most refreshing ice water — `ideas/ultra-refreshed-water-lab.md` + `prompts/ultra-refreshed-water-lab-segments.md`.
- Script: `episodes/episode-03/monster-mash-finale.md` (full lyrics, dialog, imagery bank, character notes for **Qing Rao** + **Justine** as fourth lawn character).
- Per-segment Grok Imagine + Gemini Omni prompts: `prompts/monster-mash-finale-segments.md`.
- Song / Minimax brief: `songs/The_Monster_Mash_Finale.md` (registered in Songs catalog).
- Character update: `characters/suggested-characters.md` — Qing Rao (crystal-skull keeper), Justine clarified as fourth core lawn cast.
- Site **Suggestions** + **Songs** view entries in `src/data/suggestions.ts` and `src/data/songs.ts`.

## 2026-07-28
- Added **Spooky Telephone Poles** Halloween dialog cutaway (~55s): Lillith, Rubella & Scarlet dead-pan a pseudoscience lecture on utility poles, rat electrocution, and hydrogen sulfide — button line: “And that’s why you have to dodge phone poles!”
- Script: `episodes/episode-03/spooky-telephone-poles.md`
- Per-segment Grok Imagine + Gemini Omni prompts: `prompts/spooky-telephone-poles-segments.md` + site **Suggestions** view entry in `src/data/suggestions.ts`.

## 2026-07-27
- Added **Choose Your Basalt** educational-cabaret cutaway (~55s): Lillith & Rubella classify lava types in their house, floor opens to magma beneath, button line “That’s nature for us,” smash-cut into Twilight Time trance.
- Song file: `songs/Choose_Your_Basalt.md` (registered in Songs catalog).
- Per-segment Grok Imagine + Gemini Omni prompts: `prompts/choose-your-basalt-segments.md` + new site **Suggestions** view (`src/data/suggestions.ts`, `src/components/Suggestions.tsx`).
- Notes updated in `notes/song-suggestions.md` and `notes/scene-suggestions.md`.

## 2026-05-08
- Set up organized folder structure (ideas/, scripts/, prompts/, templates/, docs/)
- Created starter templates and example scripts
- Next: Fill in episode-03 concept in ideas/

## 2026-05-14 (approx)
- Populated `notes/scene-suggestions.md` with 4 structured ideas:
  - "Morning After the Portal" (deadpan suburban cleanup sequel to Ep3/HOA)
  - "2AM Laundromat Slow Dance" (intimate musical cutaway, strong Ep2 tonal match)
  - "The Velvet Rope at the End of the World" (glamour + collapse, Ep1 callback)
  - "The Empty Highway Confession" (nocturnal drive extension / character monologue)
- Added 3 song concepts to `notes/song-suggestions.md`:
  - "Empty Parking Lot Waltz" (sparse, late-night, unresolved)
  - "Recycling Bin Rebellion" (absurd punk-ska HOA energy)
  - "Neon Exit Sign" (80s synth + direct "don't smudge the mascara" callback — potential signature track)
- Quick captures added to `scratchpad.md` (pizza guy running gag, cat POV episode, breakup vs marching skeletons, etc.)
- Updated `ideas/backlog.md` with recurring character idea and new suggestions status
- All ideas designed to respect the core tone: deadpan suburban surrealism + poetic musical cutaways + "performance amid chaos"

- Created `characters/the-two.md` with rich suggestions for the central glamorous duo (The Vale Sisters / Vivienne & Liliane). Three variants built around the "swap lives" + "house of mirrors" + black lace Lamborghini imagery already in the characters/ folder. Strongly anchored to Episode 1 lyrics. Added references in backlog and scratchpad.
- Opened first GitHub issue: [#1](https://github.com/ford442/weeks_on_fire/issues/1) — "Add detailed screenplay / formatted script material for core episodes". Covers Episode 1 (The Two characters + poetic material) and Episode 3 (laser snakes + pizza guy reveal), plus suggested template and integration with Grok Imagine prompts + Minimax cues. Body cleaned up for readability.

## [Date]
- ...