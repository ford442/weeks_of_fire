import { gagCutaways } from './gagCutaways';
import { sceneCutaways } from './sceneCutaways';
import { songCutaways } from './songCutaways';

import gyreHover from '../../ideas/soft-gyre/shot-a-hover.jpg';
import gyreWeather from '../../ideas/soft-gyre/shot-b-weather.jpg';
import gyreInterior from '../../ideas/soft-gyre/shot-c-interior.jpg';
import gyreAnswer from '../../ideas/soft-gyre/shot-d-answer.jpg';
import gyreSoftSet from '../../ideas/soft-gyre/shot-e-soft-set.jpg';

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
  stillUrl?: string;
}

export type SuggestionKind = 'musical' | 'gag' | 'scene';

export interface CutawaySuggestion {
  id: string;
  kind: SuggestionKind;
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

const coreCutaways: CutawaySuggestion[] = [
  {
    id: 'choose-your-basalt',
    kind: 'musical',
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
    kind: 'scene',
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
    kind: 'musical',
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
  {
    id: 'molten-silver-sphere',
    kind: 'musical',
    title: 'Molten Silver Sphere',
    status: 'ready-to-generate',
    runtime: '~12–15 seconds each',
    episode: 'Musical Cutaway / Visual Experiment',
    songId: 'twilight-time',
    songTitle: 'Twilight Time (beat sync)',
    summary:
      'Pure visual cutaway: a glossy molten silver liquid-metal sphere hovers in a pitch-black cave, pulsating to an unseen deep beat while cavern walls snap between high-contrast checkerboard and electric neon line grids. Three maxed-detail video prompt variations — slow zoom, orbital neon veins, and macro chromium dive.',
    visualArc:
      'Black cavern void → hovering chrome sphere → checkerboard ↔ neon wall flashes → chromatic reflections on liquid metal → camera closes in (zoom / orbit / macro).',
    tags: [
      'liquid-metal',
      'chrome-sphere',
      'cave',
      'neon',
      'checkerboard',
      'abstract',
      'long-form-prompts',
      'visual-experiment',
      'beat-sync',
    ],
    segments: [
      {
        id: 'sphere-v1-pulse',
        label: 'V1 — Beat-Synced Checkerboard Pulse',
        start: '0:00',
        end: '0:15',
        durationSec: 15,
        onScreen:
          'Medium-wide to tight slow zoom on a hovering molten silver sphere in a pitch-black cave. Walls snap between B&W checkerboard and multi-colored neon line grids. Capillary ripples and chromatic caustics race across chrome on each beat.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Deep sub-bass kick under Twilight Time warehouse pulse; wall flashes on off-beat strobes',
        grokImaginePrompt:
          'Cinematic 8K still of a glossy molten silver liquid-metal sphere hovering dead-center in a vast pitch-black cave, mercury-chrome skin with capillary ripples, meniscus ridges, and subsurface convection cells mid-pulse as if locked to a deep musical kick, cavern walls mid-flash between a razor-sharp black-and-white checkerboard projection and a lattice of electric-blue magenta and neon-green glowing line grids, chromatic specular ribbons racing across the chrome curvature, wet basalt stalactites barely visible in crushed blacks, volumetric dust motes catching strobe edges, anamorphic bokeh, Arri Alexa look, extreme micro-contrast on metal, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          'A detailed cinematic 8K photoreal video of a glossy molten silver sphere of liquid metal hovering precisely in the center of a pitch-black cave. The sphere shows intricate fluid dynamics: capillary waves, rolling mercury folds, meniscus ridges, and subsurface convection cells rhythmically morphing and pulsating as if reacting to an unseen deep musical beat — each kick softens then re-tensions the chrome skin. Surrounding cavern walls of dark wet basalt transform through abrupt dramatic lighting shifts, snapping instantly between a stark high-contrast black-and-white checkerboard grid and vibrant glowing multi-colored neon line grids in electric blues, vivid magentas, and neon greens before collapsing back into void. Each flash casts high-contrast colorful caustic reflections that ripple, shear, and dance across the fluid chrome surface with physically accurate specular delay. Tiny sparks of reflected neon crawl into micro-dents and filament seams on the metal. Seamless camera slow zoom steadily approaches the sphere from medium-wide to tight close-up, emphasizing complex liquid-metal textures and the dramatic play of strobing light in the dark space. Continuous single shot, no cuts, photoreal short film, ~12–15 seconds.',
        promptVariations: [
          'Macro still: chrome sphere surface only, checkerboard and neon grids warped in reflection, capillary ripples mid-beat, Grok Imagine',
          'Wide cavern establishing: tiny molten sphere centered in crushed-black void, walls mid-checkerboard snap, Grok Imagine',
        ],
      },
      {
        id: 'sphere-v2-orbit',
        label: 'V2 — Neon-Vein Orbit',
        start: '0:00',
        end: '0:15',
        durationSec: 15,
        onScreen:
          'Slow lateral orbit around the molten silver sphere. Neon veins crawl along cave fault lines like circuitry. Checkerboard afterimages ghost on wet stone; chrome shows delayed specular trails.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Same deep beat; orbit tempo locked so one flash cycle completes per half-turn',
        grokImaginePrompt:
          'Cinematic 8K orbital still of a hovering molten silver liquid-metal orb in a lightless cave, chrome surface fracturing into slow liquid petals then resealing, cavern rock etched with crawling neon vein circuitry in electric blue magenta and acid green that pulses along fault lines, residual black-and-white checkerboard afterimage ghosting across wet stone, elongated chromatic reflections streaking the sphere like oil-slick aurora, floating mica dust, anamorphic flare from neon edges, deep crushed blacks, hyper-detailed fluid chrome, short-film still, Grok Imagine style',
        geminiOmniPrompt:
          'Detailed cinematic 8K photoreal video: a glossy molten silver liquid-metal sphere hovers at the exact center of a pitch-black cave while the camera performs a seamless slow lateral orbit. The sphere exhibits denser fluid dynamics than a simple pulse — mercury petals peel outward on the beat, filament threads of liquid chrome stretch and snap back, and concentric shock-rings travel across the surface synced to an unseen sub-bass. Cave walls begin as dark basalt then ignite with abrupt lighting modes: first a hard black-and-white checkerboard that tiles around the full 360° cavern, then a living lattice of neon veins (electric blue, vivid magenta, neon green) that crawl like circuitry along cracks and stalactites before snapping to black. Mode switches are instantaneous and rhythmic. Neon and checkerboard flashes leave lingering afterimage trails that smear across the chrome as elongated caustics, aurora-like ribbons, and delayed specular ghosts. Micro-sparks of color sink into temporary dimples then resurface as the sphere reseals. Continuous orbiting shot, no cuts, dramatic high-contrast reflections, photoreal short film, ~12–15 seconds.',
        promptVariations: [
          'Three-quarter orbit frame: sphere left-third, neon-vein cavern wall right, checkerboard ghost on rock, Grok Imagine',
          'Top-down still looking down on molten silver sphere, neon veins radiating on cave floor, Grok Imagine',
        ],
      },
      {
        id: 'sphere-v3-macro',
        label: 'V3 — Macro Chromium Heart',
        start: '0:00',
        end: '0:15',
        durationSec: 15,
        onScreen:
          'Aggressive slow zoom that becomes an extreme macro dive into the chrome surface. Wall flashes warp into abstract architectures inside the metal; final third is almost entirely liquid-metal texture and light.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Beat intensifies as macro fills frame; final kicks felt as surface shock-rings toward lens',
        grokImaginePrompt:
          'Extreme macro cinematic 8K still diving into a molten silver liquid-metal sphere surface inside a pitch-black cave, chrome skin filling frame with capillary valleys, mercury whirlpools, and mirror-perfect micro-facets reflecting a warped black-and-white checkerboard colliding with electric-blue magenta and neon-green line grids, environment readable only as distorted light architecture inside the metal, shallow depth of field, anamorphic micro-flare, Arri Alexa photoreal, short-film still, Grok Imagine style',
        geminiOmniPrompt:
          'Detailed cinematic 8K photoreal video beginning on a hovering molten silver liquid-metal sphere centered in a pitch-black cave, then executing a seamless aggressive slow zoom that becomes an extreme macro journey into the chrome surface. Early frames establish the full object and the cavern: walls slamming between stark black-and-white checkerboard grids and vibrant neon line lattices in electric blues, vivid magentas, and neon greens, then void. As the lens closes in, the sphere\'s intricate fluid dynamics dominate — viscous mercury folds, capillary turbulence, pulsing subsurface cells, and beat-locked morph waves that swell toward camera then recede. Environmental flashes no longer read as walls; they become abstract architectures warped across the curved mirror: checkerboard tiles stretch into trapezoids and fractal edge-bleeds, neon lines ribbon into spirals and knife-edge caustics racing through micro-ridges. High-contrast colorful reflections ripple and dance with physically delayed specular response. Final third of the shot is almost entirely liquid metal texture and light, cave implied only by darkness beyond the sphere\'s limb. Continuous single-shot push-in, no cuts, photoreal short film, ~12–15 seconds.',
        promptVariations: [
          'Abstract reflection landscape inside chrome: warped checkerboard colliding with neon ribbons, no full sphere visible, Grok Imagine',
          'Limb of the sphere only: thin crescent of molten silver against pure black, neon caustic crawling the edge, Grok Imagine',
        ],
      },
    ],
  },
  {
    id: 'studio-huddle',
    kind: 'scene',
    title: 'The 480p Studio Huddle',
    status: 'ready-to-generate',
    runtime: '~2:00–2:15',
    episode: 'Episode 02 / Meta Dialog',
    songId: 'studio-huddle-dialog',
    songTitle: 'Dialog + chromatic synth bass',
    summary:
      'Grainy 480p feed into the Meta-Studio: Rubella, Lillith, and writer Mara argue cereal bowls, barista informants, and Ep2 pacing under one harsh softbox — until Mara seeds the HOA Meeting and a one-octave synth bass conspiracy cue.',
    visualArc:
      'Warehouse + camera crane → softbox folding-chair huddle → cereal storyboard slap → barista print point → Mara scribbling → 480p static / standby.',
    tags: [
      'meta-studio',
      'dialog',
      'mara',
      'lillith',
      'rubella',
      'cereal',
      'barista',
      'hoa-seed',
      '480p',
      'episode-02',
    ],
    segments: [
      {
        id: 'huddle-a-feed-up',
        label: 'A — Feed Up / Warehouse Establish',
        start: '0:00',
        end: '0:12',
        durationSec: 12,
        onScreen:
          '480p feed flickers on. Wide gold-mining warehouse studio; massive camera crane sweeps chaotic set; push toward folding chairs under one softbox. Neon WEEK ON FIRE in the deep background.',
        lyrics: '[No dialogue — tape hiss / set rumble]',
        musicCue: 'Tape hiss + distant set rumble; no underscore',
        grokImaginePrompt:
          'Cinematic wide still inside a cavernous retrofitted historical gold-mining warehouse film studio at night, grainy 480p retro-modern look, massive camera crane sweeping across a chaotic active set in the deep background, scaffolding and softboxes, distant neon sign reading WEEK ON FIRE with WEEK in blue and ON FIRE in red, high contrast overhead lighting into crushed blacks, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          '12-second video: grainy 480p feed flickers to life inside a vast dark warehouse film studio. Slow push toward a distant huddle of folding chairs under one harsh softbox while a massive camera crane sweeps across the active set behind. Scan lines, soft tape hiss, neon WEEK ON FIRE sign glowing blue and red on a far wall. Photoreal cinematic short film, retro broadcast texture.',
        promptVariations: [
          'Low angle under the camera crane boom looking down toward the distant softbox huddle, warehouse scale, Grok Imagine',
          'Detail still: neon WEEK ON FIRE sign (WEEK blue, ON FIRE red) on dark warehouse wall, grainy 480p, Grok Imagine',
        ],
      },
      {
        id: 'huddle-b-hot-seats',
        label: 'B — Hot Seats',
        start: '0:12',
        end: '0:28',
        durationSec: 16,
        onScreen:
          'Tight huddle under harsh softbox. Mara with clipboard opposite Rubella and Lillith in lace remnants. Cereal box on the cluttered table. Mara opens on Ep2 pacing / Comet Lounge → morning.',
        lyrics:
          'MARA: Okay. Let\'s talk about the pacing in episode two. The transition from the Comet Lounge to the morning sequence.\nRUBELLA: We can talk about pacing after we talk about what I put in my mouth for seven hours.',
        musicCue: 'Softbox hum; sparse room tone',
        grokImaginePrompt:
          'Cinematic medium still of an intense production huddle under a single harsh overhead softbox in a dark warehouse studio, writer Mara with wild black hair and oversized black knit sweater clutching an annotated clipboard across from two exhausted women in black lace dresses at a cluttered folding table covered in script pages, blue-and-orange cereal box on the table, grainy 480p texture, high contrast faces, Grok Imagine style',
        geminiOmniPrompt:
          '16-second locked medium video under one softbox. Writer with glasses adjusts frames and speaks about episode pacing while two women in black lace lean in, listening hard. Folding chairs, cluttered papers, cereal box on the table. Background warehouse stays dark with a crane silhouette. Grainy 480p, photoreal, no cuts.',
        promptVariations: [
          'Close-up Mara adjusting glasses, clipboard edge sharp, softbox bloom, Grok Imagine',
          'Two-shot Rubella and Lillith exhausted in black lace across the table, cereal box between them, Grok Imagine',
        ],
      },
      {
        id: 'huddle-c-cereal',
        label: 'C — Cereal Shoot Complaint',
        start: '0:28',
        end: '0:58',
        durationSec: 30,
        onScreen:
          'Rubella slaps cereal storyboard print (gothic estate / Lamborghini / lace). Seventeen bowls of Weeks on Fire cereal. Mara defends surreal corporate branding.',
        lyrics:
          'RUBELLA: Can we talk about this cereal shoot first? ... seventeen bowls of "Weeks on Fire" cereal ... tasted like cinnamon and battery acid.\nLILLITH: Brand consistency.\nMARA: The world sells the apocalypse in breakfast form.',
        musicCue: 'Optional ironic sting when cereal box is framed',
        grokImaginePrompt:
          'Cinematic close-medium still of a glamorous exhausted woman in black lace slamming a printed storyboard onto a folding table, storyboard shows gothic estate sports car and black lace cereal commercial, blue-and-orange Weeks on Fire cereal box beside her hand, writer with clipboard opposite, second lace-clad woman arms crossed smirking, harsh softbox key, grainy 480p film set huddle, Grok Imagine style',
        geminiOmniPrompt:
          '30-second continuous video: woman in black lace leans forward tapping a cereal-commercial storyboard print, complaining intensely while gesturing at a prop cereal box. Writer scribbles defensively. Second woman in matching lace smirks with arms crossed. Softbox overhead, papers everywhere, warehouse dark behind. Grainy 480p photoreal comedy-drama tone.',
        promptVariations: [
          'Insert: Weeks on Fire cereal box hero prop under softbox, storyboard edge in frame, Grok Imagine',
          'Bonus still: surreal gothic cereal commercial outside castle with Lamborghini and black lace, Grok Imagine',
        ],
      },
      {
        id: 'huddle-d-barista',
        label: 'D — Barista Safehouse Note',
        start: '0:58',
        end: '1:28',
        durationSec: 30,
        onScreen:
          'Lillith points at glossy coffee-bar print. Staff look too normal — need informant threat. Quiet reads empty, not coded.',
        lyrics:
          'LILLITH: Look at the safehouse location... The staff here... they look too normal. ... We need to establish that they are the informants.\nMARA: You want menace in the pour-over.\nLILLITH: Someone says "regular" and means "you\'re being watched."',
        musicCue: 'One-octave chromatic synth bass enters — low, driving, dialogue-forward',
        grokImaginePrompt:
          'Cinematic three-shot still at a warehouse set table, woman in black lace pointing at a glossy photo print of a dimly lit moody coffee bar safehouse, writer Mara mid-listen with pen raised, other lace-clad lead watching the print, tense analytical energy, harsh overhead softbox, cereal box and neon fixture on table, grainy 480p, Grok Imagine style',
        geminiOmniPrompt:
          '30-second video: analytical woman in black lace points at a coffee-bar location still and argues the baristas look too normal — they should read as informants. Low synth bass begins under dialogue. Writer nods and starts scribbling. Softbox flicker once. Grainy 480p, photoreal, locked medium shot with tiny push-in.',
        promptVariations: [
          'Insert: dimly lit barista safehouse interior, moody informants behind the counter, Grok Imagine',
          'Over-shoulder Lillith toward coffee-bar print on the table, Mara soft in background, Grok Imagine',
        ],
      },
      {
        id: 'huddle-e-hoa-seed',
        label: 'E — Mara Bridges / HOA Seed',
        start: '1:28',
        end: '1:55',
        durationSec: 27,
        onScreen:
          'Mara scribbles furiously: coded HOA exchange for the safehouse; bass stays tense; Ep3 bridges; Ep4 is the HOA Meeting.',
        lyrics:
          'MARA: We add dialogue there. A coded exchange about the upcoming HOA Meeting. ... A synth bassline. ... The crunch stays diegetic. The bass is the conspiracy. ... Episode four is the HOA Meeting.',
        musicCue: 'Bass holds; clipboard scribble as percussion',
        grokImaginePrompt:
          'Cinematic close-up still of writer Mara Vell scribbling furiously on a heavily annotated clipboard under a harsh softbox, wild black hair, chunky black knit, glasses reflecting set lights, two blurred black-lace leads across the table, Weeks on Fire cereal box soft in foreground, warehouse neon WEEK ON FIRE glowing behind, grainy 480p intensity, Grok Imagine style',
        geminiOmniPrompt:
          '27-second video: writer speaks fast while scribbling — coded HOA Meeting dialogue for the barista scene, tense one-octave chromatic synth bass under, dialogue stays clear. Leads react with dry asides. Clipboard pages flip. Softbox bloom on lens. Grainy 480p photoreal short film.',
        promptVariations: [
          'Macro clipboard: handwritten HOA / INFORMANTS / BASS notes, softbox shadow, Grok Imagine',
          'Wide huddle with Mara mid-gesture, neon WEEK ON FIRE sharp in background, Grok Imagine',
        ],
      },
      {
        id: 'huddle-f-button',
        label: 'F — Button / Feed Drop',
        start: '1:55',
        end: '2:10',
        durationSec: 15,
        onScreen:
          'Oatmeal rebrand button. Crane resets. Softbox flickers. 480p feed dissolves to static. Optional Continuity Voice.',
        lyrics:
          'RUBELLA: Fine. But next cereal take: oatmeal. Human oatmeal.\nLILLITH: Brand it "Weeks on Fire Overnight Oats" and she\'ll do twelve bowls.\nRUBELLA: Eight. Tops.\nMARA: I\'ll put it in the draft.\nCONTINUITY VOICE (V.O.): We\'ll return to your program. We always do.',
        musicCue: 'Bass cuts; tape hiss swells; optional EyeWash Continuity Voice',
        grokImaginePrompt:
          'Cinematic wide-to-medium still of the studio huddle under softbox as the harsh light flickers, three figures at the folding table mid-laugh mid-argument, massive camera crane resetting in background, neon WEEK ON FIRE sign, image beginning to dissolve into 480p static and scan lines, standby broadcast energy, Grok Imagine style',
        geminiOmniPrompt:
          '15-second video: dry button jokes about oatmeal rebrand, writer says she\'ll put it in the draft without looking up, warehouse crane whines, softbox flickers, feed softens into grainy static. Optional distant continuity voice. Hold on static. Photoreal then broadcast decay.',
        promptVariations: [
          'Full-frame 480p static / scan-line standby card energy after the huddle, Grok Imagine',
          'Softbox flicker freeze-frame on three faces mid-reaction, cereal box still on table, Grok Imagine',
        ],
      },
    ],
  },
  {
    id: 'the-soft-gyre',
    kind: 'musical',
    title: 'The Soft Gyre',
    status: 'in-production',
    runtime: '30 seconds (5 × 6s)',
    episode: 'Musical Cutaway / Visual Experiment',
    songId: 'porch-light-meridian',
    songTitle: 'Porch Light Meridian (instrumental lean)',
    summary:
      'A house-sized translucent gel blob hovers above anvil thunderheads, spins, and throws sparks and jello at the weather. Clouds dent, lantern, and grow glass flowers. The gyre spins clockwise; every ejecta counter-rotates. Five locked stills, ready to animate.',
    visualArc:
      'Hover above the deck → jello weather + dented cloud → interior helix and cloud-bubbles → vapor tendril answers → pull-back, halo, glass flower, undersun flare.',
    tags: [
      'soft-gyre',
      'abstract',
      'gel',
      'clouds',
      'psychedelic',
      'jello',
      'visual-experiment',
      'long-form-prompts',
    ],
    segments: [
      {
        id: 'gyre-a-hover',
        label: 'A — Hover',
        start: '0:00',
        end: '0:06',
        durationSec: 6,
        onScreen:
          'Camera rises from the anvil-cloud floor. The gel body begins a lazy clockwise spin. Three gold-white sparks peel off the equator and die as rings.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: '64–72 BPM celestial downtempo; no vocal. Spin against ejecta is the structural flaw.',
        grokImaginePrompt:
          'Cinematic 8K photoreal 3D still of a house-sized hovering blob of glowing amorphous translucent gel floating a few hundred meters above a continuous floor of anvil thunderheads at golden-violet dusk, internal lava-lamp lobes and a slow gold-glass helix readable through the skin, oil-slick meniscus ridges gathering at the equator, three gold-white sparks just peeling off the limb, warm undersun lighting the cloud bottoms from below while the stratosphere above is crushed violet with a few hard stars, ultraviolet rim light on the gel, no ground no city no people, anamorphic 2.39:1, Arri Alexa look, short-film production still, Grok Imagine style',
        geminiOmniPrompt:
          'Photoreal cinematic 8K video, 6 seconds. A house-sized translucent glowing amorphous gel blob hovers above anvil thunderheads at dusk. Camera rises slowly from the cloud floor until the body fills the upper third. The blob begins a lazy clockwise spin on a tilted axis. Internal gold-glass helix turns slower than the skin. Three gold-white sparks peel from the equator, write short fading rings, and die. Cloud undersides lit by a sun that is below the deck. No new objects enter. Continuous shot, no cuts.',
        promptVariations: [
          'Low angle from inside the cloud deck looking up at the gel gyre, ultraviolet rim, Grok Imagine',
          'Hero lock: full body centered, three sparks just leaving the equator, Grok Imagine',
        ],
        stillUrl: gyreHover,
      },
      {
        id: 'gyre-b-weather',
        label: 'B — Weather',
        start: '0:06',
        end: '0:12',
        durationSec: 6,
        onScreen:
          'Gentle orbit. Raspberry gelatin cube flung at the deck; lime ribbon as slow lightning. One cloud takes a memory-foam dent. Sparks curve against the spin.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'First THROW / FLOOR exchange; lime ribbon can lock to a filter sweep',
        grokImaginePrompt:
          'Cinematic 8K photoreal 3D still, three-quarter view: the same hovering translucent gel gyre left of frame above anvil thunderheads, clockwise skin spin implied by stretched meniscus, two wet ejecta already in the air — a raspberry gelatin cube tumbling and an electric-lime ribbon stretching downward — one memory-foam dent already in the nearest cloud, warm undersun from below, ultraviolet rim, gold-glass helix visible inside, sparks counter-rotating against the body, no people, 2.39:1 anamorphic, Grok Imagine style',
        geminiOmniPrompt:
          'Photoreal cinematic 8K video, 6 seconds. Gentle lateral orbit around a spinning translucent gel blob above thunderheads. Raspberry gelatin cube and electric-lime ribbon leave the equator, rotating against the body\'s clockwise spin. The cube hits a cloud, dents it like memory foam, bounces once. The lime ribbon is swallowed; that cloud lanterns lime from inside. One extra gold spark writes a cursive loop and goes out. Continuous orbit, no cuts.',
        promptVariations: [
          'Macro on the tumbling raspberry cube with the gyre soft in the background, Grok Imagine',
          'Cloud dent close-up holding the cube\'s shape for one beat, Grok Imagine',
        ],
        stillUrl: gyreWeather,
      },
      {
        id: 'gyre-c-interior',
        label: 'C — Interior',
        start: '0:12',
        end: '0:18',
        durationSec: 6,
        onScreen:
          'Push through the skin. Nested raspberry and lime lobes, gold-glass helix, two bubbles holding miniature cloudscapes. A phosphor spark is born inside and tunnels out.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Intimate mid-section; helix turn is the only clock',
        grokImaginePrompt:
          'Extreme cinematic 8K macro still looking into a translucent glowing amorphous gel body, skin filling most of the frame with oil-slick meniscus and a melting icosahedral facet, nested raspberry and lime lava-lamp lobes, a gold-glass double helix turning through the middle, two trapped bubbles each containing a tiny anvil-cloud lit from below, a phosphor-gold spark forming in a convection cell near camera, dusk cloud floor softly blurred far below the lower limb, ultraviolet rim, photoreal 3D, Grok Imagine style',
        geminiOmniPrompt:
          'Photoreal cinematic 8K video, 6 seconds. Continuous slow push through the translucent skin of a hovering gel gyre. Nested lava-lamp lobes rise against the spin. Gold-glass helix turns. Two bubbles hold miniature cloudscapes. A phosphor-gold spark nucleates in a bright convection cell, tunnels through the gel, and breaks the skin at the end of the shot. Cloud floor only as a soft band at the bottom of frame. No orbit. No new camera moves.',
        promptVariations: [
          'Single bubble close-up: miniature anvil-cloud inside gel, Grok Imagine',
          'Helix only, lobes out of focus, spark nucleating, Grok Imagine',
        ],
        stillUrl: gyreInterior,
      },
      {
        id: 'gyre-d-answer',
        label: 'D — Answer',
        start: '0:18',
        end: '0:24',
        durationSec: 6,
        onScreen:
          'Lock-off. A lime-lantern cloud sends a vapor tendril up to kiss the underside. Glass flower on the neighboring anvil. The gyre wobbles once.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Cloud answers; one wobble, no crash',
        grokImaginePrompt:
          'Cinematic 8K photoreal 3D still of the hovering gel gyre above anvil clouds, a single pale vapor tendril rising from a lime-glowing lantern cloud toward the blob\'s underside, not yet touching, glass-flower crystal already blooming on a neighboring anvil where a spark planted, ejecta ribbons in the air counter-rotating, body slightly off-axis as if about to wobble, warm undersun, violet stratosphere, 2.39:1, Grok Imagine style',
        geminiOmniPrompt:
          'Photoreal cinematic 8K video, 6 seconds. Locked-off wide-medium. A lime-lantern thunderhead sends one vapor tendril up. It touches the underside of the spinning gel gyre. The body wobbles a few degrees off its axis and recovers. Raspberry and gold ejecta keep counter-rotating. A glass flower on the next cloud catches undersun. No camera move. Continuous shot.',
        promptVariations: [
          'Tendril almost touching the gel underside, lime glow from below, Grok Imagine',
          'Glass flower only on a dark anvil cloud, gyre small in the sky, Grok Imagine',
        ],
        stillUrl: gyreAnswer,
      },
      {
        id: 'gyre-e-soft-set',
        label: 'E — Soft set',
        start: '0:24',
        end: '0:30',
        durationSec: 6,
        onScreen:
          'Slow pull-back. Spark-halo around a spent spin. Glass flower on a stone-anvil table in the cloud sea. Hidden sun flares once through a hole in the deck.',
        lyrics: '[Instrumental — no vocal]',
        musicCue: 'Resolution without a cadence; flare is the last note',
        grokImaginePrompt:
          'Cinematic 8K photoreal wide still of the same gel gyre now smaller in frame above a vast anvil-cloud sea, spin almost spent, a faint gold spark-halo ringing the body, one glass flower catching light on the nearest cloud, a hole in the deck letting a single warm undersun flare up, crushed-violet sky with hard stars, ultraviolet remnant rim on the gel, quiet after-chaos, 2.39:1 anamorphic, Grok Imagine style',
        geminiOmniPrompt:
          'Photoreal cinematic 8K video, 6 seconds. Slow pull-back. The gel gyre eases its clockwise spin. Remaining sparks complete one fading halo and go out. A hole in the anvil deck lets the hidden sun flare once from below. The glass flower stays. No new ejecta. Quiet end. Continuous shot.',
        promptVariations: [
          'Wide only: tiny gyre, one flare, one flower, Grok Imagine',
          'Undersun flare through a hole, gyre as silhouette, Grok Imagine',
        ],
        stillUrl: gyreSoftSet,
      },
    ],
  },
];

export const cutawaySuggestions: CutawaySuggestion[] = [
  ...coreCutaways,
  ...gagCutaways,
  ...songCutaways,
  ...sceneCutaways,
];
