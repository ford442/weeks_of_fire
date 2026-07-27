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
];
