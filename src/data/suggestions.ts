export interface CutawaySegment {
  id: string;
  label: string;
  start: string;
  end: string;
  durationSec: number;
  onScreen: string;
  lyrics: string;
  musicCue: string;
  grokImaginePrompt: string;
  geminiOmniPrompt: string;
  promptVariations: string[];
}

export interface CutawaySuggestion {
  id: string;
  title: string;
  status: 'suggested' | 'ready-to-generate' | 'in-production';
  runtime: string;
  episode: string;
  songId: string;
  songTitle: string;
  summary: string;
  visualArc: string;
  tags: string[];
  segments: CutawaySegment[];
}

export const cutawaySuggestions: CutawaySuggestion[] = [
  {
    id: 'choose-your-basalt',
    title: 'Choose Your Basalt',
    status: 'ready-to-generate',
    runtime: '~55 seconds',
    episode: 'Musical Cutaway',
    songId: 'choose-your-basalt',
    songTitle: 'Choose Your Basalt',
    summary:
      'Dead-pan educational cabaret duet: Lillith and Rubella classify lava types in their gothic living room, then the floor opens onto magma. Ends with “That’s nature for us” / “Science.” before a Twilight Time trance smash-cut.',
    visualArc:
      'House interior (black lace + Hawaiian leis) → heat shimmer in floorboards → cracked living-room floor → lava tubes beneath the foundation → white-flash smash-cut into trance remix.',
    tags: ['basalt', 'cabaret', 'lava', 'lillith', 'rubella', 'house', 'duet', 'trance-handoff'],
    segments: [
      {
        id: 'basalt-a-intro',
        label: 'A — Intro / Living Room Set-up',
        start: '0:00',
        end: '0:08',
        durationSec: 8,
        onScreen:
          'Wide static shot inside their gothic living room. Lillith (left) and Rubella (right) stand dead-pan in black lace dresses with bright Hawaiian leis. Behind them: mantel, velvet sofa, cheap volcano painting on the wall — not green-screen yet. Soft key from left.',
        lyrics:
          'LILLITH: When the mountain splits its seam and the magma starts to flow —\nRUBELLA: You must classify your basalt before deciding where to go.',
        musicCue: 'Detuned upright piano lounge intro, soft pedal, 4 short bars',
        grokImaginePrompt:
          'Cinematic wide still of two glamorous women in matching black lace dresses and bright pink-and-yellow Hawaiian leis standing dead-pan in a gothic living room, velvet sofa and mantel behind them, a cheap framed volcano painting on the wall, soft key light from the left, cool backlight rim, educational-cabaret comedy mood, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          '8-second locked-off wide video inside a gothic living room. Two women in black lace with bright Hawaiian leis stand dead-pan facing camera, lips barely moving as they sing a sweet educational duet. Slight piano-lounge feel. Velvet sofa, mantel, cheap volcano painting behind them. Soft left key light, cool rim light. No cuts. Subtle stillness, tiny blinks only. Photoreal cinematic short film.',
        promptVariations: [
          'Medium-wide living-room frame, same duo dead-pan, leis over black lace, volcano painting slightly crooked, practical lamp glow, Grok Imagine.',
          'Low-angle living-room still looking up at Lillith and Rubella, chandelier edge in frame, dead-pan educational cabaret energy.',
        ],
      },
      {
        id: 'basalt-b-pahoehoe',
        label: 'B — Pāhoehoe Verse',
        start: '0:08',
        end: '0:20',
        durationSec: 12,
        onScreen:
          'Same living-room wide. One subtle classroom hand-wave on “Pā-ho-e-ho-e!” Optional tiny lower-third: “Pāhoehoe = smooth.” Floorboards begin a faint orange heat shimmer under their heels — barely noticeable.',
        lyrics:
          'LILLITH: If it’s gray and smooth and ropy, like a lazy braid of dough —\nRUBELLA: You may cross it at your leisure. It’s a courteous flow.\nTOGETHER: Pā-ho-e-ho-e!\nRUBELLA: Viscosity: agreeable.',
        musicCue: 'Piano continues; light brushed snare on 2 & 4',
        grokImaginePrompt:
          'Same gothic living room wide shot, two women in black lace and Hawaiian leis, one making a tiny classroom conducting gesture, faint orange heat shimmer rising through the hardwood floorboards under their feet, dead-pan faces, soft cinematic lighting, short-film still, Grok Imagine style',
        geminiOmniPrompt:
          '12-second continuous wide video, same living-room setup. Duo sings call-and-response about smooth lava. On the chant “Pā-ho-e-ho-e” one woman makes a tiny classroom hand-wave. Spoken aside “Viscosity: agreeable.” Faint orange heat shimmer begins under the floorboards. Locked camera, dead-pan faces, no dancing. Photoreal cinematic.',
        promptVariations: [
          'Close-up of heels on hardwood with subtle orange glow between floorboards, leis and black lace visible at frame edge, Grok Imagine.',
          'Insert of a small lower-third graphic vibe without text overlays: chalkboard energy suggested by posture only, living room background soft.',
        ],
      },
      {
        id: 'basalt-c-aa',
        label: 'C — ‘A‘ā Verse & Punchline',
        start: '0:20',
        end: '0:35',
        durationSec: 15,
        onScreen:
          'Living-room floorboards crack into jagged plates. Warm magma light punches up between gaps. Dust motes. Faces stay dead-pan through the folk-etymology gag and mirrored “Ah. Ah.”',
        lyrics:
          'LILLITH: But if the crust is torn and jagged, like a field of broken plates —\nRUBELLA: And it opens up your ankles, and it cauter—\nLILLITH: Nothing rhymes with it.\nRUBELLA: Sing it anyway.\nTOGETHER: ‘A-‘ā!\nLILLITH: Because ‘ā-ā is the sound you make when you step on it.\nRUBELLA: That’s a folk etymology.\nRUBELLA: It means “to burn”.\nLILLITH: Ah. Ah.\nRUBELLA: Ah. Ah.',
        musicCue: 'Low-string pad enters; piano stops briefly on a tiny snare pop after the chant',
        grokImaginePrompt:
          'Gothic living room floor cracking into jagged plates like ‘a‘ā lava, orange magma light glowing up through the gaps under two dead-pan women in black lace and Hawaiian leis, dust in the air, clinical comedy lighting mixed with volcanic underglow, cinematic short-film still, Grok Imagine style',
        geminiOmniPrompt:
          '15-second video: living-room floorboards split into jagged plates while the duet continues dead-pan. Magma light rises through cracks. They chant “‘A-‘ā,” deliver the folk-etymology correction, then mirror “Ah. Ah.” Camera still mostly locked; subtle vibration as the floor fails. Photoreal, short-film comedy-horror tone.',
        promptVariations: [
          'Detail still of cracked hardwood revealing glowing lava crust beneath elegant black heels, leis fringe in frame, Grok Imagine.',
          'Two-shot medium: women staring at camera while floor ruptures behind/under them, no panic, only academic boredom.',
        ],
      },
      {
        id: 'basalt-d-pillow-nature',
        label: 'D — Pillow Lava + “That’s Nature for Us”',
        start: '0:35',
        end: '0:50',
        durationSec: 15,
        onScreen:
          'Camera slowly tilts / pushes down through the ruptured floor into a glowing lava-tube chamber beneath the house foundation. Their silhouettes remain at the top of frame standing on the broken living-room edge. Button lines: “That’s nature for us.” / “Science.”',
        lyrics:
          'TOGETHER: And if it cools beneath the ocean, it will swell into a pillow —\nRUBELLA: Which sounds restful.\nLILLITH: It is not.\nTOGETHER: That’s nature for us.\nTOGETHER: Science.',
        musicCue: 'Piano returns with gentle glockenspiel arpeggio (C–G–E)',
        grokImaginePrompt:
          'Cinematic downward view from a ruptured gothic living-room floor into a glowing lava tube beneath a suburban house foundation, two silhouetted women in black lace and Hawaiian leis standing on the broken edge above, magma light painting the cavern, dead-pan educational-cabaret mood meeting geological sublime, short-film still, Grok Imagine style',
        geminiOmniPrompt:
          '15-second slow camera push or tilt down through cracked living-room floor into lava tubes beneath the house. Duo remains silhouetted at the top edge. Soft glockenspiel energy. They finish with dead-pan “That’s nature for us” then “Science.” Magma glow intensifies. Photoreal cinematic transition from domestic interior to subterranean lava.',
        promptVariations: [
          'Under-house lava chamber looking up at a rectangular hole of living-room light, two figures peering down dead-pan, Grok Imagine.',
          'Side cutaway diagram-like cinematic still of house cross-section: parlor above, pillow-lava / magma chamber below, surreal educational film aesthetic.',
        ],
      },
      {
        id: 'basalt-e-smash-cut',
        label: 'E — Smash-Cut → Trance Drop',
        start: '0:50',
        end: '0:55',
        durationSec: 5,
        onScreen:
          'Sudden white flash + synth stab. Cut to Lillith & Rubella standing on real pāhoehoe crust with open magma below / around them — house gone or reduced to floating debris. Twilight Time trance remix hits.',
        lyrics: '[Instrumental handoff — Twilight Time trance remix begins]',
        musicCue: '2s saw-wave synth stab + reverb tail → full Twilight Time trance mix',
        grokImaginePrompt:
          'Sudden cinematic smash-cut still: the same two women in black lace and Hawaiian leis now standing on glowing pāhoehoe lava crust above an open magma chamber, bright white flash remnants, house debris floating in heat haze, euphoric trance-rave energy colliding with volcanic night, short-film impact frame, Grok Imagine style',
        geminiOmniPrompt:
          '5-second smash-cut video: white flash, then the duo on real lava crust above magma as a trance drop hits. Hard cut from house interior world to open volcanic night. Heat distortion, floating debris, dead-pan faces for one beat then lights strobe. Photoreal music-video punch.',
        promptVariations: [
          'Overhead impact frame of two figures on a glowing lava island, strobe highlights on leis, Grok Imagine.',
          'Profile silhouette against magma fountain, leis rim-lit neon, trance-drop atmosphere.',
        ],
      },
    ],
  },
  {
    id: 'spooky-telephone-poles',
    title: 'Spooky Telephone Poles',
    status: 'ready-to-generate',
    runtime: '~55 seconds',
    episode: 'Episode 03 / Dialog Cutaway',
    songId: 'spooky-telephone-poles-dialog',
    songTitle: 'Dialog only (ambient)',
    summary:
      'Halloween sidewalk pseudoscience lecture: Lillith, Rubella, and Scarlet explain why utility poles are spooky — rat electrocution, ground current, hydrogen sulfide, sewer-pipe bracing — then lean away in unison. Button line: “And that’s why you have to dodge phone poles!”',
    visualArc:
      'Wet Halloween sidewalk → crackle at utility pole → dead-pan lecture trio → synchronized dodge past the pole → keep walking.',
    tags: ['halloween', 'dialog', 'utility-poles', 'pseudoscience', 'lillith', 'rubella', 'scarlet', 'suburban'],
    segments: [
      {
        id: 'poles-a-whats-that',
        label: 'A — What\'s That?',
        start: '0:00',
        end: '0:08',
        durationSec: 8,
        onScreen:
          'Wide tracking shot on a wet Halloween suburban sidewalk. Lillith (left), Rubella (center), and Scarlet (right) in matching black lace. Lillith turns toward a faint electrical crackle near a utility pole ahead.',
        lyrics: 'LILLITH: What\'s that?',
        musicCue: 'Sparse night ambience, distant trick-or-treaters, faint electrical crackle',
        grokImaginePrompt:
          'Cinematic wide still of three glamorous women in matching black lace dresses walking a wet Halloween suburban sidewalk at night, jack-o\'-lanterns and string lights, one woman on the left turning her head toward a distant wooden utility pole, dead-pan faces, blood-red lipstick, trick-or-treaters far in background, filmic streetlight and moonlight, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          '8-second slow tracking video on a Halloween suburban sidewalk at night. Three women in matching black lace dresses walk in a loose line. The woman on the left stops slightly and turns her head toward a faint electrical crackle off-screen near a utility pole. Wet leaves, jack-o\'-lantern glow, string lights. Dead-pan faces, no panic. Photoreal cinematic short film.',
        promptVariations: [
          'Over-shoulder from Lillith toward the looming utility pole, two sisters blurred ahead, Halloween bokeh, Grok Imagine.',
          'Low angle of black lace hems on wet leaves, pole base and faint spark in background, Grok Imagine.',
        ],
      },
      {
        id: 'poles-b-spooky',
        label: 'B — Why Telephone Poles Are Spooky',
        start: '0:08',
        end: '0:18',
        durationSec: 10,
        onScreen:
          'Medium-wide toward the pole. Rubella announces the topic. Second crackle and tiny rat squeak at the pole base. Nobody speeds up.',
        lyrics: 'RUBELLA: Why telephone poles are spooky!',
        musicCue: 'Optional soft X-Files piano under dialogue, barely audible',
        grokImaginePrompt:
          'Cinematic medium-wide still of three women in black lace on a Halloween sidewalk facing a looming old wooden telephone pole, center woman speaking with clinical calm, faint blue-white electrical spark at the pole base, a tiny rat silhouette near the ground, dead-pan educational-horror comedy mood, orange pumpkin light mixing with cool streetlight, Grok Imagine style',
        geminiOmniPrompt:
          '10-second locked-off medium-wide video. Center woman in black lace delivers a dead-pan line about telephone poles being spooky. Faint electrical crackle and tiny squeak from the pole base. The other two listen without reacting. Halloween decorations, wet pavement reflections. No cuts. Photoreal cinematic.',
        promptVariations: [
          'Insert still of rat tail near pole base with electrical spark, lace hems at frame edge, Grok Imagine.',
          'Three-shot: Rubella mid-sentence, sisters flanking, pole dominating background, Grok Imagine.',
        ],
      },
      {
        id: 'poles-c-monologue',
        label: 'C — Rubella\'s Pseudoscience Monologue',
        start: '0:18',
        end: '0:35',
        durationSec: 17,
        onScreen:
          'Rubella delivers the hydrogen-sulfide lecture dead-pan. Subtle ground glow and faint vapor at ankle height near the pole.',
        lyrics:
          'RUBELLA: I thought about it and I guess I used my school knowledge that I have about it or something, and it turns out that nearby to where the phone pole electrocutes rats and sends current through the ground and stuff, it gives the dirt enough chemical equilibrium shift to bond hydrogen and sulfide to a secondary hydrogen atom hiding behind the old telephone pole and rise into the air as hydrogen sulfide gas — making us feel bad. Even though it\'s Halloween.',
        musicCue: 'Ambience continues; optional piano holds one quiet chord',
        grokImaginePrompt:
          'Cinematic close-medium still of a woman in black lace and red lipstick lecturing dead-pan on a Halloween night sidewalk, wooden utility pole behind her with subtle ground-current glow in the dirt, hydrogen-sulfide haze suggestion at ankle height, two identical women flanking her listening like a seminar, suburban horror-comedy educational tone, Grok Imagine style',
        geminiOmniPrompt:
          '17-second continuous video: center woman in black lace delivers a long dead-pan monologue about phone poles, rats, ground current, chemical equilibrium, and hydrogen sulfide gas. Lips barely move. Flanking women stare forward. Subtle heat shimmer or faint greenish vapor near the pole base. Halloween night ambience. Locked camera, photoreal short-film comedy tone.',
        promptVariations: [
          'Diagram-energy close-up of dirt glowing faintly around a pole guy-wire anchor, Grok Imagine.',
          'Seminar wide: three black-lace figures before a suburban pole like a museum tour stop, Grok Imagine.',
        ],
      },
      {
        id: 'poles-d-sewer',
        label: 'D — Sewer-Pipe Corollary',
        start: '0:35',
        end: '0:48',
        durationSec: 13,
        onScreen:
          'Lillith nods once and adds the sewer-pipe bracing theory. Scarlet still silent. Pole and curb infrastructure visible.',
        lyrics:
          'LILLITH: And there are sewer pipes everywhere that there are utility poles — to brace them, or else they\'d fall down — allowing there to be hydrogen sulfide around the pole.',
        musicCue: 'Ambience only',
        grokImaginePrompt:
          'Cinematic two-shot still of woman in black lace on the left nodding once and adding to a lecture, old utility pole and exposed sewer-pipe brace visible at the curb, third woman silent on the right, hydrogen-sulfide mist hugging the pole base, Halloween jack-o\'-lanterns in soft bokeh, dead-pan suburban pseudoscience mood, Grok Imagine style',
        geminiOmniPrompt:
          '13-second video: woman on the left completes the theory about sewer pipes bracing utility poles and hydrogen sulfide around poles. One small nod only. Silent woman on the right unchanged. Camera drifts slightly closer. Pole and curb infrastructure visible. Dead-pan delivery, photoreal cinematic.',
        promptVariations: [
          'Curb cutaway still: sewer pipe brace clamped to a utility pole foot, faint green vapor, Grok Imagine.',
          'Three-shot medium: Lillith speaking, Rubella listening, Scarlet blank, pole between them and camera, Grok Imagine.',
        ],
      },
      {
        id: 'poles-e-dodge',
        label: 'E — Dodge the Pole (Button)',
        start: '0:48',
        end: '0:55',
        durationSec: 7,
        onScreen:
          'All three lean away from the pole in synchronized etiquette, deliver the punchline, resume walking. Rat tail twitches at the base; nobody looks down.',
        lyrics: 'LILLITH / RUBELLA / SCARLET: And that\'s why you have to dodge phone poles!',
        musicCue: 'Ambience fades on cut to black',
        grokImaginePrompt:
          'Cinematic wide still of three women in matching black lace leaning away from a wooden telephone pole in perfect unison on a Halloween sidewalk, mouths barely open on a shared punchline, rat tail twitching at the pole base unnoticed, jack-o\'-lanterns and string lights, dead-pan comedy button shot, filmic night lighting, Grok Imagine style',
        geminiOmniPrompt:
          '7-second video: all three women lean away from the utility pole in synchronized etiquette—not quite running—while delivering the final line together. They resume walking past camera. Tiny rat tail twitch at pole base. Halloween night. Quick hold on their backs as they leave frame. Photoreal cinematic punchline.',
        promptVariations: [
          'Rear three-shot walking away from pole after the lean, lace backs and string lights, Grok Imagine.',
          'Wide punchline frame: synchronized lean, jack-o\'-lantern foreground, pole center, Grok Imagine.',
        ],
      },
    ],
  },
  {
    id: 'monster-mash-finale',
    title: 'Monster Mash Finale',
    status: 'ready-to-generate',
    runtime: '~3:00–3:30',
    episode: 'Episode 03',
    songId: 'monster-mash-finale',
    songTitle: 'The Monster Mash (Finale)',
    summary: `Rubella covers "The Monster Mash" on the post-snake-battle lawn while a cursed monster party erupts — Nixon, Furbies, knife-kittens, Skeksis and more. Amy and Alec return from the hiking sketch in full costume to dance, a Thriller-style werewolf moonwalks the perimeter, Lillith runs a parallel spy heist, and the hologram reveal tips into a Spy vs. Spy noir outro.`,
    visualArc: `Lawn aftermath → sing-us-out cold open → Rubella at silver mic → cursed party montage → Amy & Alec dance in hiking costume → Lillith bedroom heist → party escalation → Thriller werewolf moonwalk → hologram glitch → white/black spy stalk → gadget standoff → cut to black.`,
    tags: [
      'halloween',
      'monster-mash',
      'finale',
      'rubella',
      'lillith',
      'spy-vs-spy',
      'qing-rao',
      'justine',
      'madelin',
      'amy-alec-cameo',
      'thriller-werewolf',
      'long-form-prompts',
    ],
    segments: [
      {
        id: 'mm-0',
        label: `0 — Cold Open: Sing Us Out`,
        start: '0:00',
        end: '0:12',
        durationSec: 12,
        onScreen: `Wide lawn after snake battle. Core cast + silver mic. Chant "Sing us out!" Rubella: "Ok. You've got it." Tabby cat with orange bucket.`,
        lyrics: `LILLITH: After all of that we have to go out on a high note.\nMADELIN: That's right. If the show's ending and we're going home then you'll have to sing us out.\nLILLITH: Ya! Sing us out!\nALL + JACK-O'-LANTERN: Sing us out! Sing us out!\nRUBELLA: Ok. You've got it.`,
        musicCue: `Sparse Halloween ambience → Monster Mash intro sting`,
        grokImaginePrompt: `Cinematic wide production still of a foggy suburban Halloween lawn at dusk in the aftermath of a battle, thick coiled defeated giant snakes lying dead across the wet grass, warm string lights sagging between porch posts, a dozen carved jack-o'-lanterns glowing along the walkway, five women gathered in a loose semicircle around a large silver vintage broadcast microphone on a chrome stand, three of them in matching black lace dresses standing shoulder to shoulder, one younger dark-haired woman standing slightly apart with her arms crossed, one elegant woman cradling a glowing transparent crystal skull like a wine glass, one manic woman clutching an enormous beige tote bag with a huge 3D skull molded on the side, a brown-and-white tabby cat sitting at the base of the mic stand beside an orange plastic trick-or-treat bucket, every face completely dead-pan, low rolling ground fog, warm orange practical light against cool blue moonlight, 35mm anamorphic, shallow depth of field, film grain, short-film production still, Grok Imagine style`,
        geminiOmniPrompt: `12-second locked-off wide video on a suburban Halloween lawn at dusk. Defeated giant snake coils lie across the grass, still faintly steaming. Five women stand in a semicircle facing a silver vintage microphone on a chrome stand. Three in matching black lace chant "Sing us out!" in flat unison, a fourth younger woman mouths it a half-beat late, a fifth cradles a glowing crystal skull and does not join in. A carved jack-o'-lantern on the step appears to chant along, its mouth flickering in time. The center woman in lace steps to the mic, tilts her head, and says "Ok. You've got it." A brown-and-white tabby cat sits at the mic base beside an orange bucket and does not move. Sagging string lights, rolling fog, warm orange practical light versus cool moonlight, subtle handheld drift. Photoreal cinematic short film.`,
        promptVariations: [
          `Medium group shot: Madelin with skull tote, Qing Rao with crystal skull, lace trio shoulder to shoulder, Justine apart with arms crossed, silver mic in foreground, fog and string lights, Grok Imagine`,
        ],
      },
      {
        id: 'mm-1',
        label: `1 — Aftermath & Verse 1`,
        start: '0:12',
        end: '0:35',
        durationSec: 23,
        onScreen: `Low-angle push-in on Rubella at silver mic. Defeated snake coils. Tabby cat with orange bucket. Almost normal — one silhouette too tall in the deep fog.`,
        lyrics: `I was working in the lab, late one night\nWhen my eyes beheld an eerie sight\nFor my monster from his slab, began to rise\nAnd suddenly to my surprise`,
        musicCue: `Monster Mash Verse 1 — Rubella lead`,
        grokImaginePrompt: `Cinematic low-angle push-in still of a glamorous woman in a black lace dress singing into a large silver vintage broadcast microphone on a foggy suburban Halloween lawn, head tipped back, one hand wrapped around the mic stand, theatrical cabaret-spooky energy, enormous defeated snake coils lying on the grass behind her catching rim light, a brown-and-white tabby cat sitting at her feet guarding an orange plastic trick-or-treat bucket, carved jack-o'-lanterns glowing low in the foreground, string lights bokeh across the top of frame, drifting ground fog lit warm from below and cold blue from behind, the rest of the yard still and empty, no monsters visible yet, deliberately almost-normal composition, 35mm anamorphic, shallow depth of field, heavy filmic grain, warm-orange and teal grade, short-film production still, Grok Imagine style`,
        geminiOmniPrompt: `23-second slow push-in video. A woman sings Verse 1 of Monster Mash into a silver vintage microphone on a suburban Halloween lawn in the aftermath of a battle. Giant defeated snake coils lie on the grass behind her. A brown-and-white tabby cat sits at her feet beside an orange trick-or-treat bucket, blinking slowly. Drifting fog, sagging string lights, glowing jack-o'-lanterns. She performs with theatrical cabaret-spooky commitment, working the mic like a lounge act. The yard stays almost normal — no monsters yet, only one silhouette too tall in the deep background fog. Camera pushes in steadily from wide to medium over the full clip. Photoreal cinematic, warm practical light against cool moonlight.`,
        promptVariations: [
          `Close on tabby cat and orange bucket at the mic base, singer's legs and snake coils soft in background, low warm pumpkin light, Grok Imagine`,
        ],
      },
      {
        id: 'mm-2',
        label: `2 — Cursed Guest List / Chorus 1`,
        start: '0:35',
        end: '1:00',
        durationSec: 25,
        onScreen: `Chaotic lawn party: Nixon mash-dancing, Dracula-cape Furbies, knife-kittens, porcelain dolls, half-melted Stay-Puft with Nixon face. Neon fog, red strobe.`,
        lyrics: `He did the mash, he did the monster mash\nThe monster mash, it was a graveyard smash\nHe did the mash, it caught on in a flash\nHe did the mash, he did the monster mash`,
        musicCue: `Monster Mash Chorus 1`,
        grokImaginePrompt: `Chaotic cinematic wide still of a cursed suburban Halloween lawn party erupting mid-song, Richard Nixon in a tattered gray suit stiffly doing the Monster Mash with his arms locked at the elbows, a swarm of 1990s Furbies in tiny high-collared Dracula capes waddling aggressively across the grass in formation, feral sick kittens standing on their hind legs holding realistic tiny switchblades, cracked Victorian porcelain dolls with missing eyes performing rigid synchronized dance choreography in a row, a half-melted Stay-Puft Marshmallow Man slumping sideways with Nixon's face emerging from the sagging marshmallow, the singer still center frame at her silver vintage microphone unbothered, defeated giant snake coils on the grass, neon green and purple fog rolling knee-high, a red emergency light strobing from off-frame left, string lights and jack-o'-lanterns still warm in the background, deliberately mismatched render styles colliding in one frame, wide anamorphic lens, filmic grain, Grok Imagine style`,
        geminiOmniPrompt: `25-second unstable tracking shot moving left to right across a foggy suburban Halloween lawn. Richard Nixon in a tattered suit dances the Monster Mash with stiff locked elbows. A swarm of Furbies in tiny Dracula capes waddles aggressively through the foreground. Sick kittens on hind legs brandish switchblades at each other. Cracked porcelain dolls perform rigid synchronized choreography in a line. A half-melted Stay-Puft Marshmallow Man slumps in the background, Nixon's face surfacing in the marshmallow. The singer stays center at her silver mic delivering the Monster Mash chorus, entirely unbothered. Neon green and purple fog, occasional red emergency flash. Camera weaves and bobs like a handheld operator dodging dancers. Photoreal cursed collage energy with deliberately mismatched styles.`,
        promptVariations: [
          `Wide pan: Nixon mash center-left, Furbie swarm crossing foreground in cape formation, knife-kittens mid-ground, singer at silver mic in right third, snake coils along bottom edge, Grok Imagine`,
          `Close-medium on three cracked porcelain doll faces mid-choreography, missing eyes, hairline fractures catching neon green light, Nixon's stiff legs mashing in soft bokeh behind, Grok Imagine`,
        ],
      },
      {
        id: 'mm-2b',
        label: `2B — Amy & Alec Return / Chorus 1 Tag`,
        start: '1:00',
        end: '1:12',
        durationSec: 12,
        onScreen: `The two hikers from the rescue sketch walk out of the fog in full costume and dance. She flails frantically in loud REI gear with a lit headlamp and jingling carabiners; he barely moves — wool sweater, aviators at night, ranger hat, spear planted on the downbeat.`,
        lyrics: `(instrumental tag — no vocal)\nAMY: Gary?! Gary, is that you in the cape?!\nALEC: The mountain demands a steady heart, Brenda.`,
        musicCue: `Chorus 1 tag / eight-bar instrumental break — add carabiner jingle as percussion`,
        grokImaginePrompt: `Cinematic medium-wide still of two hikers crashing a cursed Halloween lawn party mid-dance, a frantic woman in head-to-toe loud REI technical gear — magenta and safety-orange shell jacket, teal zip-off convertible hiking pants, an enormous number of carabiners clipped to every loop, a headlamp still switched on and blazing a white beam sideways out of frame — mid-flail with both arms thrown too wide, mouth open, over-committed and slightly panicked, beside her a deadpan older man in a heavy oatmeal wool fisherman's sweater wearing aviator sunglasses at night and a battered park-ranger hat, holding a sharpened walking-stick spear upright like a ceremonial staff, dancing almost imperceptibly with tiny weight shifts and total conviction, Furbies in Dracula capes swirling around their ankles, Nixon mashing in the background, defeated snake coils, neon green fog, string lights, harsh headlamp flare across the lens, 35mm anamorphic, filmic grain, Grok Imagine style`,
        geminiOmniPrompt: `12-second video. Two hikers from an earlier scene walk out of the fog onto a cursed Halloween lawn party, still in full costume. The woman wears loud magenta and safety-orange REI gear, teal zip-off pants, a lit headlamp, and dozens of carabiners that jingle audibly on every beat — she dances frantically, arms too wide, over-committed, glancing over her shoulder mid-move as if still looking for someone. The man wears a heavy wool sweater, aviator sunglasses at night, and a park-ranger hat, and holds a sharpened walking-stick spear upright; he dances almost not at all — micro weight shifts, one slow nod, absolutely dead serious. Furbies in Dracula capes swarm their ankles. Nixon mashes in the background. Her headlamp beam sweeps the camera and blows out the frame for a beat. Photoreal comedic cinematic.`,
        promptVariations: [
          `Two-shot waist up: frantic REI hiker mid-flail with carabiners flying, deadpan sweater-and-aviators man beside her barely moving, spear upright, cursed lawn party bokeh, headlamp flare, Grok Imagine`,
          `Low-angle hero shot of the deadpan man in wool sweater and aviator sunglasses planting his sharpened walking stick into the lawn on the downbeat while monsters dance around him, neon fog, Grok Imagine`,
        ],
      },
      {
        id: 'mm-3',
        label: `3 — The Heist / Verse 2`,
        start: '1:12',
        end: '1:37',
        durationSec: 25,
        onScreen: `Cut to Lillith creeping into the bedroom-office. Black trenchcoat from the desk drawer, black circular spy hat from the chair cushion. Monster Mash muffled through the walls, rippling a glass of water.`,
        lyrics: `From my laboratory in the castle east\nTo the master bedroom where the vampires feast\nThe ghouls all came from their humble abodes\nTo get a jolt from my electrodes`,
        musicCue: `Monster Mash Verse 2 (continues muffled under the bedroom scene)`,
        grokImaginePrompt: `Noir cinematic still of a woman in a black lace dress creeping into a dim cluttered bedroom-office, caught mid-step looking back over her shoulder toward the door, approaching a massive scarred mahogany desk stacked with papers and dead houseplants, sliding open the deep bottom drawer and lifting out an oversized black trenchcoat, hard chiaroscuro lighting from a single slatted window casting venetian blind bars across her face and the wall, dust hanging in the light shaft, a half-full glass of water on the desk rippling from the muffled bass of a party outside, framed photos turned face down, cigarette smoke haze, deep crushed blacks, 1970s paranoid thriller aesthetic, 35mm lens, heavy grain, Grok Imagine style`,
        geminiOmniPrompt: `25-second suspense video, no dialogue. A woman in a black lace dress creeps into a dim cluttered bedroom-office and pauses, listening. She eases open the deep bottom drawer of a massive mahogany desk and lifts out an oversized black trenchcoat, draping it over her arm. She turns to a worn office chair, unzips the seat cushion, and pulls a large wide-brimmed black circular spy hat from inside it. Venetian blind bars of light slide across her as she moves. A glass of water on the desk trembles with muffled bass — Monster Mash plays clearly but distant, through the walls. Slow deliberate pan following her, then a hold on the hat. Photoreal noir thriller, crushed blacks, heavy grain.`,
        promptVariations: [
          `Medium still: woman unzipping the office chair cushion and drawing out a large black circular spy hat hidden in the foam, trenchcoat over her forearm, venetian blind light, Grok Imagine`,
        ],
      },
      {
        id: 'mm-4',
        label: `4 — Party Escalates / Chorus 2 + Verse 3`,
        start: '1:37',
        end: '2:22',
        durationSec: 45,
        onScreen: `Rapid cuts: Skeksis + Alice Cooper + South Park Satan (Karl Rove on shoulder), candy-corn jack-o'-lantern, cultist suits, Cthulhu tentacle, couch ensemble with crystal skull, floating pizza slice.`,
        lyrics: `The Zombies were having fun, the party had just begun\nThe guests included Wolfman, Dracula, and his son\n[...] They played the mash, they played the monster mash`,
        musicCue: `Monster Mash Chorus 2 + Verse 3`,
        grokImaginePrompt: `Maximum-density cinematic wide still of a cursed Halloween lawn party at full escalation, an animatronic Skeksis in ragged robes drinking punch beside 1970s Alice Cooper and a hyper-realistic grotesque three-dimensional South Park Satan with a tiny Karl Rove perched on his shoulder whispering strategy, a rotting jack-o'-lantern vomiting a stream of glowing green candy corn onto the grass, a ring of hollow rubber cultist suits with empty hoods dancing in a circle, a wet Cthulhu tentacle rising from an open manhole and tapping the beat on the lawn, a vintage velvet couch dragged onto the grass holding three women in black lace and a younger dark-haired woman with a glowing transparent crystal skull between them, a fluffy white dog at their feet, a giant beige tote bag with a 3D skull, a floating inflatable pizza slice whose pepperoni eyes stare directly at the lens, a low-poly PS1 zombie clipping through a lawn chair, string lights, neon fog, everything slightly too crowded and slightly wrong, colliding render styles, wide anamorphic, filmic grain, Grok Imagine style`,
        geminiOmniPrompt: `45-second rapid-cut video montage of a cursed Halloween lawn party at maximum escalation. Cuts every two to three seconds: a Skeksis mingling with Alice Cooper and a grotesque photoreal South Park Satan with tiny Karl Rove on his shoulder at the punch bowl; a rotting jack-o'-lantern vomiting glowing green candy corn; hollow rubber cultist suits dancing in a ring; a wet Cthulhu tentacle tapping the beat from an open manhole; the couch ensemble on the lawn passing a glowing crystal skull; the singer still center at her silver mic; an inflatable pizza slice drifting past with staring pepperoni eyes. Everything is too crowded and slightly wrong. Monster Mash chorus and verse three continue unbroken under the cuts. Photoreal chaotic collage with deliberately mismatched render styles.`,
        promptVariations: [
          `Skeksis, Alice Cooper, and grotesque photoreal South Park Satan in a three-shot at the punch bowl, tiny Karl Rove on Satan's shoulder mid-whisper, lawn chaos soft behind, Grok Imagine`,
          `Vintage velvet couch wide on the lawn: three women in black lace, younger dark-haired woman, glowing crystal skull, fluffy white dog, giant skull tote, snake coils behind, Grok Imagine`,
          `Low-poly PS1 zombie clipping halfway through a plastic lawn chair, textures stretching, photoreal Furbies in Dracula capes passing in sharp foreground, deliberate style clash, Grok Imagine`,
        ],
      },
      {
        id: 'mm-4b',
        label: `4B — Thriller Werewolf Moonwalk`,
        start: '2:22',
        end: '2:34',
        durationSec: 12,
        onScreen: `A Thriller-style werewolf in a red-and-black varsity jacket and one white sequined glove moonwalks backwards in a slow orbit around the mic stand, staring down the lens. The monster line behind him falls into loose choreography and loses it again.`,
        lyrics: `(instrumental vamp — no vocal)\nAMY (off, delighted): Oh he is GOOD.\nALEC (off, flat): He is stalling.`,
        musicCue: `Instrumental vamp / eight-bar break before the bridge — bass and handclaps only`,
        grokImaginePrompt: `Cinematic tracking still of a Thriller-style werewolf moonwalking backwards in a slow orbit around a silver vintage microphone stand on a cursed Halloween lawn, wearing a red-and-black leather varsity jacket with heavy shoulders and a single white sequined glove, muzzle caught mid-transformation with yellow lupine eyes staring directly down the lens, claws splayed, one foot gliding backwards across the wet grass leaving a smear in the dew, the singer at the mic in the near background continuing her number without acknowledging him, a line of monsters behind him falling into loose synchronized choreography — Nixon, cultist suits, porcelain dolls, a frantic hiker in loud REI gear and a deadpan man in a wool sweater and aviators — neon green fog rolling low, hard blue rim light from behind and warm jack-o'-lantern glow from below, slight slow-motion smear, anamorphic wide, filmic grain, Grok Imagine style`,
        geminiOmniPrompt: `12-second video, subtle slow motion. A Thriller-style werewolf in a red-and-black leather varsity jacket and a single white sequined glove moonwalks backwards in a slow arc around a silver microphone stand on a cursed Halloween lawn. His feet glide smoothly across wet grass, shoulders rolling, muzzle mid-transformation, yellow eyes locked on the camera and never blinking. The singer at the mic keeps performing and does not acknowledge him. Behind him a line of monsters — Nixon, hollow cultist suits, porcelain dolls, a frantic hiker in loud REI gear with a lit headlamp, a deadpan man in a wool sweater and aviator sunglasses — drifts into loose synchronized choreography and drops out of it again. Neon fog, blue rim light, warm pumpkin glow. Camera arcs opposite his direction. Photoreal cinematic.`,
        promptVariations: [
          `Close on the werewolf's feet gliding backwards across wet dewy grass in a moonwalk, sequined glove at frame edge, neon green fog, raking pumpkin light, Grok Imagine`,
          `Over-the-shoulder from behind the singer: Thriller werewolf moonwalking away toward a ragged line of monsters attempting the choreography and failing at different speeds, Grok Imagine`,
        ],
      },
      {
        id: 'mm-5',
        label: `5 — Hologram Reveal / Bridge`,
        start: '2:34',
        end: '3:09',
        durationSec: 35,
        onScreen: `Rubella at the mic glitches — hologram scan lines, RGB split, a beat of silence. Camera cranes under the stage: the real Rubella dons white trenchcoat + white circular spy hat.`,
        lyrics: `Out from the coffin, Drac's voice did ring\n[...] It's now the mash, it's now the monster mash`,
        musicCue: `Monster Mash Verse 4 + bridge; brief glitch/static dip at the hologram reveal`,
        grokImaginePrompt: `Cinematic medium still of a woman singing at a silver vintage microphone as her body begins to fail — volumetric hologram scan lines rolling up her torso, RGB channel split fringing her outline, digital static eating one shoulder, her expression unchanged and still performing — while below and behind her in the dark shadows under the stage platform the real woman climbs quietly down the scaffolding, reaching into a hidden duffel bag for a bright white trenchcoat and a large white wide-brimmed circular spy hat, half her face already shadowed under the hat brim, the cursed Halloween lawn party blurred and glowing far behind, projector haze in the air, cold cyan hologram light against warm orange party light, deep blacks under the platform, anamorphic, filmic grain, deliberate digital artifacting on the hologram layer only, Grok Imagine style`,
        geminiOmniPrompt: `35-second video. The singer at the silver microphone begins to glitch mid-lyric — hologram scan lines roll up her body, RGB split fringes her edges, her voice stutters and drops out for a beat while the band continues. She keeps performing as if nothing is wrong. The camera tilts and cranes down past the stage lip into the dark under-platform scaffolding, where the real woman climbs down quietly, opens a hidden duffel bag, pulls on a bright white trenchcoat and settles a large white wide-brimmed circular spy hat over her eyes. The party continues glowing behind her, out of focus. Monster Mash bridge lyrics play throughout. Photoreal, with deliberate digital artifacting applied only to the hologram layer.`,
        promptVariations: [
          `Split frame: glitching hologram singer above, real Rubella in under-stage shadows below reaching for the white hat in a duffel bag, cyan versus warm orange, Grok Imagine`,
        ],
      },
      {
        id: 'mm-6',
        label: `6 — Spy vs. Spy Outro`,
        start: '3:09',
        end: '3:54',
        durationSec: 45,
        onScreen: `B&W noir. Lillith (black spy) and Rubella (white spy) stalk each other around the lawn party — werewolf still moonwalking and a headlamp beam swinging in silhouette behind. Standoff at the tree, hard cut to black.`,
        lyrics: `Then you can mash, then you can monster mash\n[...] IGOR: Mash good! / MAD SCIENTIST: Easy, Igor, you impetuous— / IGOR: Mash good! Grrr!`,
        musicCue: `Final chorus + Igor outro → hard cut to silence or noir piano sting`,
        grokImaginePrompt: `High-contrast black-and-white noir still in the style of Spy vs. Spy comics, a woman in an oversized black trenchcoat and a large black circular wide-brimmed hat and a woman in a matching white trenchcoat and white circular hat stalking each other around the perimeter of an ongoing Halloween lawn party, both in exaggerated tiptoe stealth poses with knees high and shoulders hunched, ducking behind giant pumpkins and the melting Stay-Puft Marshmallow Man, oversized cartoon spy gadgets in their hands — a spring-loaded boxing glove and a net gun — the party still visible in the deep background as pure silhouette chaos with a moonwalking werewolf and a frantic hiker's headlamp beam cutting the fog, crushed blacks and blown highlights, hard single-source key, heavy fog, all color drained except absolute black coat and absolute white coat, filmic grain, Grok Imagine style`,
        geminiOmniPrompt: `45-second black-and-white noir video. A black-coated spy and a white-coated spy creep around the edges of a Halloween lawn party in exaggerated comic stealth poses, knees high, shoulders hunched. They duck behind giant pumpkins, defeated snake coils, and dancing hollow cultist suits, each just missing the other. In the deep background the party continues as silhouettes — a werewolf still moonwalking, a headlamp beam swinging through fog, a man in a ranger hat holding a spear perfectly still. Final beat: both spies step out from opposite sides of the same tree and aim oversized cartoon gadgets at each other, freeze. Hard cut to black. Monster Mash plays faintly and distant throughout. High-contrast Spy vs. Spy comic energy, crushed blacks.`,
        promptVariations: [
          `Black-coated spy crouched behind a giant pumpkin peering across the lawn at the white-coated spy, noir B&W, party chaos in deep-background silhouette, heavy fog, Grok Imagine`,
          `Final standoff: both spies emerging from opposite sides of one bare tree, oversized cartoon gadgets aimed, perfectly symmetrical composition, B&W, crushed blacks, Grok Imagine`,
        ],
      },
    ],
  },
];
