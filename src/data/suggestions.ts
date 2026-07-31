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
    runtime: '~2:30–3:00',
    episode: 'Episode 03',
    songId: 'monster-mash-finale',
    songTitle: 'The Monster Mash (Finale)',
    summary:
      'Rubella covers "The Monster Mash" on the post-snake-battle lawn while a cursed monster party erupts — Nixon, Khomeini, Furbies, knife-kittens, Skeksis, and more. Optional SNL silver-glitter bump. Parallel Lillith spy-heist; hologram reveal; Spy vs. Spy noir outro.',
    visualArc:
      'Optional SNL glitter bump → lawn aftermath → sing-us-out cold open → Rubella at silver mic → cursed party montage → Lillith bedroom heist → hologram glitch → white/black spy stalk → gadget standoff → cut to black.',
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
    ],
    segments: [
      {
        id: 'mm-glitter',
        label: '−1 — SNL Glitter Transition (optional)',
        start: '0:00',
        end: '0:05',
        durationSec: 5,
        onScreen:
          'SNL-style broadcast bump on pure black. Rubella and Lillith portraits assemble from photo-realistic silver glitter particles. Hard cut to black.',
        lyrics: '',
        musicCue: 'Silence or single broadcast sting',
        grokImaginePrompt:
          'Saturday Night Live-style broadcast title card on pure black background, two glamorous women with long dark hair and blood-red lipstick rendered entirely in photo-realistic silver glitter particles — one woman center-left, one center-right, matching black lace dress silhouettes suggested in glitter density, hyper-detailed glitter texture catching light like metallic confetti, high contrast, sharp focus on glitter grain, broadcast graphic design, no text, cinematic, Grok Imagine style',
        geminiOmniPrompt:
          '4-second SNL-style title-card video on pure black. Two women\'s faces and shoulders materialize from swirling silver glitter particles assembling into photo-realistic portraits — long dark hair, red lipstick, black lace suggested in glitter outline. Brief sparkle sweep across glitter surface. Hard cut to black. Broadcast bumper energy, no text, photoreal glitter simulation.',
        promptVariations: [
          'SNL-style title card, pure black, silver glitter portraits flanking chrome text MONSTER MASH in Art Deco broadcast font, Grok Imagine',
        ],
      },
      {
        id: 'mm-0',
        label: '0 — Cold Open: Sing Us Out',
        start: '0:00',
        end: '0:12',
        durationSec: 12,
        onScreen:
          'Wide lawn after snake battle. Core cast + silver mic. Chant "Sing us out!" Rubella: "Ok. You\'ve got it." Tabby cat with orange bucket.',
        lyrics:
          'LILLITH: After all of that we have to go out on a high note.\nMADELIN: That\'s right. If the show\'s ending and we\'re going home then you\'ll have to sing us out.\nLILLITH: Ya! Sing us out!\nALL + JACK-O\'-LANTERN: Sing us out! Sing us out!\nRUBELLA: Ok. You\'ve got it.',
        musicCue: 'Sparse Halloween ambience → Monster Mash intro sting',
        grokImaginePrompt:
          'Cinematic wide still of a foggy suburban Halloween lawn at dusk after a battle — thick coiled defeated giant snakes on the grass, warm string lights and jack-o\'-lanterns, five women gathered around a large silver vintage microphone on a stand, matching black lace dresses on three of them, one younger dark-haired woman slightly apart, one elegant woman cradling a glowing transparent crystal skull, manic woman with giant beige tote bag with 3D skull, brown-and-white tabby cat with orange trick-or-treat bucket at the mic base, dead-pan faces, filmic Halloween lighting, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          '12-second locked wide video on a Halloween suburban lawn at dusk. Defeated giant snake coils on the grass. Five women face a silver vintage microphone. Three in matching black lace chant "Sing us out!" A jack-o\'-lantern seems to join the chant. Center woman in lace steps toward mic and says "Ok. You\'ve got it." Tabby cat sits at mic base with orange bucket. String lights, fog, warm orange and cool moonlight. Photoreal cinematic short film.',
        promptVariations: [
          'Medium group shot: Madelin with skull tote, Qing Rao with crystal skull, lace trio, Justine apart, silver mic foreground, Grok Imagine',
        ],
      },
      {
        id: 'mm-1',
        label: '1 — Aftermath & Verse 1',
        start: '0:12',
        end: '0:35',
        durationSec: 23,
        onScreen:
          'Low-angle push-in on Rubella at silver mic. Defeated snake coils. Tabby cat with orange bucket. Almost normal — monsters arrive at chorus.',
        lyrics:
          'I was working in the lab, late one night\nWhen my eyes beheld an eerie sight\nFor my monster from his slab, began to rise\nAnd suddenly to my surprise',
        musicCue: 'Monster Mash Verse 1 — Rubella lead',
        grokImaginePrompt:
          'Cinematic low-angle still of a woman singing at a silver vintage microphone on a foggy Halloween lawn, theatrical spooky energy, defeated giant snake coils on grass behind her, brown-and-white tabby cat with orange trick-or-treat bucket at her feet, warm jack-o\'-lantern glow and string lights, slow push-in composition, filmic, Grok Imagine style',
        geminiOmniPrompt:
          '23-second slow push-in video. Woman sings at silver vintage mic on Halloween lawn after a snake battle. Giant defeated snake coils on grass. Tabby cat with orange bucket at her feet. Fog, string lights, jack-o\'-lanterns. She delivers Verse 1 of Monster Mash with cabaret-spooky energy. Photoreal cinematic. No monsters yet — almost normal until the chorus hits.',
        promptVariations: [
          'Close on tabby cat and orange bucket at mic base, singer legs and snake coils soft background, Grok Imagine',
        ],
      },
      {
        id: 'mm-2',
        label: '2 — Cursed Guest List / Chorus 1',
        start: '0:35',
        end: '1:00',
        durationSec: 25,
        onScreen:
          'Chaotic lawn party: Nixon and Khomeini mash-dancing, Dracula-cape Furbies, knife-kittens, porcelain dolls, half-melted Stay-Puft with Nixon face. Neon fog.',
        lyrics:
          'He did the mash, he did the monster mash\nThe monster mash, it was a graveyard smash\nHe did the mash, it caught on in a flash\nHe did the mash, he did the monster mash',
        musicCue: 'Monster Mash Chorus 1',
        grokImaginePrompt:
          'Chaotic wide still of a cursed Halloween lawn party — Richard Nixon in tattered suit stiffly doing the Monster Mash, Ayatollah Khomeini in traditional robes stern and unmoved also stiffly doing the Monster Mash, swarm of 1990s Furbies in tiny Dracula capes, feral sick kittens on hind legs holding tiny switchblades, cracked Victorian porcelain dolls in rigid dance poses, half-melted Stay-Puft Marshmallow Man with Nixon\'s face emerging, neon green and purple fog, red emergency light flashes, silver microphone and singer still center, defeated snake coils, Grok Imagine style',
        geminiOmniPrompt:
          '25-second unstable tracking shot across foggy Halloween lawn. Nixon dances the Monster Mash stiffly. Ayatollah Khomeini beside him, stern and rigid, also doing the Monster Mash without expression. Furbies in Dracula capes waddle aggressively. Sick kittens on hind legs with switchblades. Porcelain dolls perform rigid choreography. Half-melted Stay-Puft with Nixon face. Singer at silver mic continues Monster Mash chorus. Neon fog, occasional red flash. Photoreal cursed collage energy.',
        promptVariations: [
          'Wide pan: Nixon mash center-left, Furbie swarm foreground, knife-kittens mid-ground, singer at mic right third, Grok Imagine',
          'Close-medium on porcelain dolls\' cracked faces while Nixon\'s legs mash in soft bokeh, Grok Imagine',
        ],
      },
      {
        id: 'mm-3',
        label: '3 — The Heist / Verse 2',
        start: '1:00',
        end: '1:25',
        durationSec: 25,
        onScreen:
          'Cut to Lillith creeping into bedroom-office. Pulls black trenchcoat from desk drawer, black circular spy hat from chair cushion. Monster Mash muffled through walls.',
        lyrics:
          'From my laboratory in the castle east\nTo the master bedroom where the vampires feast\nThe ghouls all came from their humble abodes\nTo get a jolt from my electrodes',
        musicCue: 'Monster Mash Verse 2 (continues under bedroom scene)',
        grokImaginePrompt:
          'Noir cinematic still of a woman creeping into a dim cluttered bedroom-office, looking over shoulder, approaching a massive mahogany desk, pulling an oversized black trenchcoat from a large bottom drawer, suspenseful chiaroscuro lighting, Monster Mash muffled through walls suggested by subtle bass vibration in a glass of water, thriller aesthetic, Grok Imagine style',
        geminiOmniPrompt:
          '25-second suspense video. Woman creeps into dim bedroom-office. Opens massive desk drawer — lifts oversized black trenchcoat. Turns to office chair, unzips seat cushion, pulls out large wide-brimmed black circular spy hat. Slow pan, noir lighting. Monster Mash audible muffled from outside. No dialogue. Photoreal thriller tone.',
        promptVariations: [
          'Medium still: woman unzipping office chair cushion revealing black circular spy hat, trenchcoat on arm, noir lighting, Grok Imagine',
        ],
      },
      {
        id: 'mm-4',
        label: '4 — Party Escalates / Chorus 2 + Verse 3',
        start: '1:25',
        end: '2:10',
        durationSec: 45,
        onScreen:
          'Rapid cuts: Skeksis + Alice Cooper + South Park Satan (Karl Rove on shoulder), candy-corn jack-o\'-lantern, cultist suits, Cthulhu tentacle, couch ensemble with crystal skull.',
        lyrics:
          'The Zombies were having fun, the party had just begun\nThe guests included Wolfman, Dracula, and his son\n[...] They played the mash, they played the monster mash',
        musicCue: 'Monster Mash Chorus 2 + Verse 3',
        grokImaginePrompt:
          'Rapid-cut collage still of maximum cursed Halloween lawn party — animatronic Skeksis drinking punch with 1970s Alice Cooper and hyper-realistic grotesque South Park Satan with tiny Karl Rove on his shoulder, rotting jack-o\'-lantern vomiting glowing green candy corn, hollow rubber cultist suits dancing in circle, wet Cthulhu tentacle rising from manhole tapping beat, vintage couch on lawn with three women in black lace and younger dark-haired woman, glowing crystal skull, fluffy white dog, giant skull tote bag, floating inflatable pizza slice with staring pepperoni eyes, Grok Imagine style',
        geminiOmniPrompt:
          '45-second rapid-cut video montage. Skeksis mingles with Alice Cooper and grotesque 3D South Park Satan (Karl Rove on shoulder). Jack-o\'-lantern vomits candy corn. Cultist hollow suits dance. Cthulhu tentacle taps beat from manhole. Couch ensemble on lawn. Singer at silver mic. Inflatable pizza slice floats. Everything too crowded and slightly wrong. Monster Mash chorus and verse 3 continue. Photoreal chaotic collage.',
        promptVariations: [
          'Skeksis + Alice Cooper + Satan punch bowl two-shot, lawn chaos soft background, Grok Imagine',
          'Vintage couch wide: three lace women, younger dark-haired woman, crystal skull, white dog, skull tote, Grok Imagine',
        ],
      },
      {
        id: 'mm-5',
        label: '5 — Hologram Reveal / Bridge',
        start: '2:10',
        end: '2:45',
        durationSec: 35,
        onScreen:
          'Rubella at mic glitches — hologram. Real Rubella climbs down under stage, dons white trenchcoat + white circular spy hat.',
        lyrics:
          'Out from the coffin\', Drac\'s voice did ring\n[...] It\'s now the mash, it\'s now the monster mash',
        musicCue: 'Monster Mash Verse 4 + bridge; brief glitch/static dip at hologram reveal',
        grokImaginePrompt:
          'Cinematic medium still of woman singing at silver microphone beginning to glitch — volumetric hologram scan lines, RGB split, digital static — while in dark shadows under stage platform the real woman climbs down scaffolding reaching for white trenchcoat and white circular spy hat in hidden duffel bag, half her face shadowed by white hat brim, Halloween lawn party blurred behind, Grok Imagine style',
        geminiOmniPrompt:
          '35-second video. Singer at mic glitches heavily — hologram reveal with static and stutter. Camera tilts down to under-stage shadows. Real singer climbs down quietly, opens duffel, dons bright white trenchcoat and white wide-brimmed circular spy hat. Party continues behind her. Monster Mash bridge lyrics. Photoreal with deliberate digital artifacting on hologram layer only.',
        promptVariations: [
          'Split frame: glitching hologram singer top, real Rubella in shadows below reaching for white hat, Grok Imagine',
        ],
      },
      {
        id: 'mm-6',
        label: '6 — Spy vs. Spy Outro',
        start: '2:45',
        end: '3:30',
        durationSec: 45,
        onScreen:
          'B&W noir. Lillith (black spy) and Rubella (white spy) stalk each other around lawn party. Final standoff behind tree with oversized gadgets. Hard cut to black.',
        lyrics:
          'Then you can mash, then you can monster mash\n[...] IGOR: Mash good! / MAD SCIENTIST: Easy, Igor, you impetuous— / IGOR: Mash good! Grrr!',
        musicCue: 'Final chorus + Igor outro → hard cut to silence or noir piano sting',
        grokImaginePrompt:
          'High-contrast black-and-white noir still inspired by Spy vs. Spy comics — woman in oversized black trenchcoat and black circular hat and woman in white trenchcoat and white circular hat stalking each other around perimeter of ongoing Halloween lawn party, ducking behind giant pumpkins and melting Stay-Puft Marshmallow Man, exaggerated stealth poses, oversized cartoon spy gadgets drawn in hands, Monster Mash faint in distance, Grok Imagine style',
        geminiOmniPrompt:
          '45-second black-and-white noir video. Black spy and white spy creep around lawn party edges. Duck behind pumpkins, snake coils, cultist suits. Stalk each other in exaggerated poses. Final beat: both step from opposite sides of same tree, aim oversized cartoon gadgets at each other. Monster Mash continues faintly. Hard cut to black on standoff. Spy vs. Spy comic energy, high contrast.',
        promptVariations: [
          'Black spy behind pumpkin peering at white spy across lawn, noir B&W, party chaos deep background, Grok Imagine',
          'Final standoff: both spies emerge from tree, gadgets aimed, symmetrical composition, B&W, Grok Imagine',
        ],
      },
    ],
  },
];
