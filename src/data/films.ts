import episode03Image from '../../episodes/episode-03/image.jpg';
import episode03Image004 from '../../episodes/episode-03/image_004.jpg';
import episode03Image005 from '../../episodes/episode-03/image_005.jpg';
import episode03Image006 from '../../episodes/episode-03/image_006.jpg';
import episode03Image007 from '../../episodes/episode-03/image_007.jpg';
import characterOne from '../../characters/image_001.webp';
import characterTwo from '../../characters/image_002.jpg';
import ideaComputerRoom from '../../ideas/computer_room.jpg';
import ideaHologram from '../../ideas/hologram.webp';
import gyreHover from '../../ideas/soft-gyre/shot-a-hover.jpg';
import gyreWeather from '../../ideas/soft-gyre/shot-b-weather.jpg';
import gyreInterior from '../../ideas/soft-gyre/shot-c-interior.jpg';
import gyreAnswer from '../../ideas/soft-gyre/shot-d-answer.jpg';
import gyreSoftSet from '../../ideas/soft-gyre/shot-e-soft-set.jpg';

export type MediaType = 'image' | 'video';

/** Production stills vs cutaway prompts vs raw experiments vs character refs. */
export type ImageKind = 'scene' | 'suggestion' | 'test' | 'character';

export const imageKindMeta: Record<
  ImageKind,
  { label: string; description: string; accent: string }
> = {
  scene: {
    label: 'Scene',
    description: 'Locked production stills tied to episode beats.',
    accent: 'border-orange-500/40 bg-orange-500/10 text-orange-200',
  },
  suggestion: {
    label: 'Suggestion',
    description: 'Cutaway / gag prompts ready to generate — image optional.',
    accent: 'border-violet-500/40 bg-violet-500/10 text-violet-200',
  },
  test: {
    label: 'Test Idea',
    description: 'Visual experiments and mood boards from ideas/.',
    accent: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200',
  },
  character: {
    label: 'Character',
    description: 'Casting and continuity reference frames.',
    accent: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  },
};

export interface FilmScene {
  id: string;
  imageKind: ImageKind;
  episode: string;
  title: string;
  prompt: string;
  promptVariations: string[];
  imageUrl?: string;
  mediaType: MediaType;
  musicCue: string;
  musicStyle: string;
  description: string;
  theme: string;
  tags: string[];
}

export const filmScenes: FilmScene[] = [
  {
    id: 'ep03-laser-serpent-awakening',
    imageKind: 'scene',
    episode: 'Episode 03',
    title: 'Laser Serpent Awakening',
    prompt:
      'Cinematic night desert scene, massive glowing laser serpent rising from dark dunes under a starry sky, charged red-orange energy waves, dramatic volumetric lighting, epic wide shot, surreal short-film still, Grok Imagine style.',
    promptVariations: [
      'Low-angle desert shot of a luminous serpent made of coherent laser light, sand lifting in rings, distant figures silhouetted by red plasma glow, 35mm anamorphic film frame.',
      'Wide cinematic tableau of neon serpents breaking through dunes during a midnight storm, electric haze, practical dust, high contrast firelight and cold moonlight.',
    ],
    imageUrl: episode03Image,
    mediaType: 'image',
    musicCue: 'Minimax Music - Halloween Snake Battle drop',
    musicStyle: 'Dark trap build',
    description: 'Opening energy surge for the snake-battle sequence.',
    theme: 'Laser Snakes',
    tags: ['serpent', 'desert', 'laser', 'night'],
  },
  {
    id: 'ep03-rubella-signal',
    imageKind: 'scene',
    episode: 'Episode 03',
    title: 'Rubella Signal',
    prompt:
      'Close cinematic portrait of a defiant character lit by pulsing red scanner light, dust and sparks in the air, fractured desert horizon behind them, intense short-film color grade, Grok Imagine realism.',
    promptVariations: [
      'Hero portrait with red laser reflections in the eyes, shallow depth of field, smoky desert battlefield atmosphere, urgent musical cutaway energy.',
      'Medium shot of a survivor listening to a haunted signal through static, orange firelight and cyan edge light, cinematic grain.',
    ],
    imageUrl: episode03Image004,
    mediaType: 'image',
    musicCue: 'MiniMax 2026-05-07 - Rubella',
    musicStyle: 'Haunted synth cutaway',
    description: 'Character beat where the music cue turns from discovery into warning.',
    theme: 'Signal Fire',
    tags: ['portrait', 'signal', 'rubella', 'firelight'],
  },
  {
    id: 'ep03-snake-battle-canyon',
    imageKind: 'scene',
    episode: 'Episode 03',
    title: 'Snake Battle Canyon',
    prompt:
      'High-energy canyon battle with multiple laser snakes weaving through smoke, glowing trails reflecting on stone walls, explosive practical sparks, dynamic camera motion, epic music-video scene, Grok Imagine.',
    promptVariations: [
      'Fast tracking shot through a canyon as laser serpents cross overhead, red plasma ribbons, dust vortex, cinematic impact frames.',
      'Overhead battle map view of luminous snakes circling a small crew in a canyon basin, firelight pools, midnight blue shadows.',
    ],
    imageUrl: episode03Image005,
    mediaType: 'image',
    musicCue: 'Minimax Music - Seismic Impact dark trap build',
    musicStyle: 'Percussive battle cue',
    description: 'Main action tableau for a cutaway-driven battle section.',
    theme: 'Laser Snakes',
    tags: ['battle', 'canyon', 'serpent', 'music-video'],
  },
  {
    id: 'ep03-static-altar',
    imageKind: 'scene',
    episode: 'Episode 03',
    title: 'Static Altar',
    prompt:
      'Surreal desert altar made from old broadcast equipment and glowing cables, two characters framed by laser haze, ritualistic sci-fi mood, warm embers and cold blue static, detailed cinematic still.',
    promptVariations: [
      'Ancient technology altar in a burned-out desert set, analog screens showing snake-wave patterns, mystical sci-fi lighting.',
      'Two-person standoff at a glowing broadcast altar, red laser dust, handmade props, practical film texture.',
    ],
    imageUrl: episode03Image006,
    mediaType: 'image',
    musicCue: 'Les Ondes Courtes - shortwave swell',
    musicStyle: 'Analog synth pulse',
    description: 'A ritual tech image for the moment the shortwave signal becomes visual.',
    theme: 'Shortwave Ritual',
    tags: ['altar', 'shortwave', 'ritual', 'static'],
  },
  {
    id: 'ep03-fireline-exit',
    imageKind: 'scene',
    episode: 'Episode 03',
    title: 'Fireline Exit',
    prompt:
      'Final shot of two figures walking along a thin line of fire at dawn, laser-serpent smoke fading behind them, hopeful but strange tone, warm sunrise, cinematic wide composition.',
    promptVariations: [
      'Quiet dawn aftermath after a surreal laser snake battle, two silhouettes crossing scorched sand, orange-pink horizon, music fades out.',
      'Wide ending frame with smoke ribbons, ember trails, distant canyon, characters small against an enormous sky.',
    ],
    imageUrl: episode03Image007,
    mediaType: 'image',
    musicCue: 'Whatever Lets Us Be - final refrain',
    musicStyle: 'Melancholy anthem',
    description: 'Closing image that resolves the chaos into a human-scale walkout.',
    theme: 'Aftermath',
    tags: ['ending', 'dawn', 'fireline', 'aftermath'],
  },
  {
    id: 'character-reference-two',
    imageKind: 'character',
    episode: 'Character Archive',
    title: 'The Two',
    prompt:
      'Reference portrait for two recurring Weeks on Fire leads, emotionally grounded, cinematic wardrobe, natural imperfections, ready for reuse across Grok Imagine scene prompts.',
    promptVariations: [
      'Two-person character reference sheet, neutral background, consistent faces, production still lighting.',
      'Cinematic duo portrait for a surreal short-film series, grounded expressions, warm practical light.',
    ],
    imageUrl: characterOne,
    mediaType: 'image',
    musicCue: 'Twilight Time - character motif',
    musicStyle: 'Nocturnal pop ballad',
    description: 'Reusable character anchor for keeping faces and tone consistent.',
    theme: 'Characters',
    tags: ['characters', 'reference', 'duo', 'portrait'],
  },
  {
    id: 'character-reference-alt',
    imageKind: 'character',
    episode: 'Character Archive',
    title: 'The Two - Alternate Frame',
    prompt:
      'Alternate cinematic reference for the two recurring leads, closer crop, expressive lighting, usable as a face and mood anchor for future scene generations.',
    promptVariations: [
      'Close portrait of the recurring duo with warm key light and dark neutral background, consistent character reference.',
      'Production reference image for two short-film characters, expressive faces, cinematic skin tones.',
    ],
    imageUrl: characterTwo,
    mediaType: 'image',
    musicCue: 'Twilight Time - reprise',
    musicStyle: 'Soft synth reprise',
    description: 'Second reference image for prompt iteration and casting continuity.',
    theme: 'Characters',
    tags: ['characters', 'reference', 'alternate', 'portrait'],
  },
  {
    id: 'test-computer-room',
    imageKind: 'test',
    episode: 'Ideas / Meta',
    title: 'Computer Room — Broadcast Control',
    prompt:
      'Dim retro broadcast control room with stacked CRT monitors, tangled cables, and a single operator silhouette lit by scan lines — meta-studio energy, 480p grain, Weeks on Fire production still, Grok Imagine style.',
    promptVariations: [
      'Wide still of a cluttered server-and-CRT room at night, blue monitor glow on dust, analog switchboard, cinematic short-film grain.',
      'Over-shoulder at a control desk buried in cables, multiple feeds showing the same lace-clad duo, paranoid thriller lighting.',
    ],
    imageUrl: ideaComputerRoom,
    mediaType: 'image',
    musicCue: 'Rinse Cycle — sign-off hum',
    musicStyle: 'Institutional soft rock',
    description: 'Early mood board for the Meta-Studio / 480p feed huddle aesthetic.',
    theme: 'Meta Studio',
    tags: ['test', 'broadcast', 'crt', 'meta-studio', '480p'],
  },
  {
    id: 'test-hologram-glitch',
    imageKind: 'test',
    episode: 'Episode 03 / Ideas',
    title: 'Hologram Glitch — Rubella Double',
    prompt:
      'Cinematic medium still of a glamorous woman at a silver vintage microphone as her body begins to fail — volumetric hologram scan lines, RGB channel split, digital static eating one shoulder, Monster Mash finale reveal energy, Grok Imagine style.',
    promptVariations: [
      'Split frame: glitching hologram singer above, real performer in white spy gear in under-stage shadows below.',
      'Close on RGB-fringed hologram face still performing mid-lyric, projector haze, cold cyan versus warm party light.',
    ],
    imageUrl: ideaHologram,
    mediaType: 'image',
    musicCue: 'The Monster Mash (Finale) — bridge glitch',
    musicStyle: 'Halloween novelty-rock',
    description: 'Visual experiment for the hologram reveal beat in the Monster Mash finale.',
    theme: 'Hologram Reveal',
    tags: ['test', 'hologram', 'glitch', 'monster-mash', 'rubella'],
  },
  {
    id: 'suggestion-molten-silver-sphere',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway',
    title: 'Molten Silver Sphere — Beat-Sync Pulse',
    prompt:
      'Cinematic 8K still of a glossy molten silver liquid-metal sphere hovering dead-center in a vast pitch-black cave, mercury-chrome skin with capillary ripples pulsating to a deep musical kick, cavern walls mid-flash between razor-sharp black-and-white checkerboard and electric neon line grids, chromatic specular ribbons racing across the chrome, Grok Imagine style.',
    promptVariations: [
      'Orbital still: neon veins crawl along cave fault lines like circuitry, checkerboard afterimages ghost on wet stone.',
      'Extreme macro dive into chrome surface — warped checkerboard and neon ribbons reflected in liquid metal.',
    ],
    mediaType: 'image',
    musicCue: 'Twilight Time — warehouse pulse',
    musicStyle: '90s rave / beat-sync visual',
    description:
      'Prompt-only cutaway suggestion — pure visual experiment synced to Twilight Time. Generate stills before locking video.',
    theme: 'Visual Experiment',
    tags: ['suggestion', 'liquid-metal', 'chrome', 'cave', 'neon', 'abstract'],
  },
  {
    id: 'suggestion-glam-sham-poo',
    imageKind: 'suggestion',
    episode: 'EyeWash Station',
    title: 'Glam-Sham-Poo — Commercial Still Package',
    prompt:
      'Cinematic still of exhausted glam-metal shampoo commercial energy: chrome bathroom set, screeching product bottle center frame, two women in black lace dead-pan behind a fog machine, Gang vocals on GLAM-SHAM-POO spelled in neon, joke-commercial short-film still, Grok Imagine style.',
    promptVariations: [
      'Product hero: oversized chrome shampoo bottle with GLAM-SHAM-POO label, stage fog, ring light, 80s commercial parody.',
      'Two-shot: Lillith committed, Rubella exhausted, both mouthing an impossible high note in a fogged glam set.',
    ],
    mediaType: 'image',
    musicCue: 'Ultra Screech (Glam-Sham-Poo)',
    musicStyle: 'Glam metal joke commercial',
    description:
      'Stills-first package for the Ultra Screech cutaway — see ideas/glam-sham-poo-commercial.md for full beat sheet.',
    theme: 'Commercial Parody',
    tags: ['suggestion', 'glam-metal', 'commercial', 'kenji', 'eyewash-station'],
  },
  {
    id: 'suggestion-soft-gyre-hover',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway / Visual Experiment',
    title: 'The Soft Gyre — A Hover',
    prompt:
      'Cinematic 8K photoreal 3D still of a house-sized hovering blob of glowing amorphous translucent gel floating a few hundred meters above a continuous floor of anvil thunderheads at golden-violet dusk, internal lava-lamp lobes and a slow gold-glass helix readable through the skin, oil-slick meniscus ridges gathering at the equator, three gold-white sparks just peeling off the limb, warm undersun lighting the cloud bottoms from below while the stratosphere above is crushed violet with a few hard stars, ultraviolet rim light on the gel, no ground no city no people, anamorphic 2.39:1, Arri Alexa look, short-film production still, Grok Imagine style',
    promptVariations: [
      'Low angle from inside the cloud deck looking up at the gel gyre, ultraviolet rim, Grok Imagine',
      'Hero lock: full body centered, three sparks just leaving the equator, Grok Imagine',
    ],
    imageUrl: gyreHover,
    mediaType: 'image',
    musicCue: 'Porch Light Meridian / Strange Light — instrumental lean',
    musicStyle: 'Celestial downtempo, 64–72 BPM',
    description:
      'Shot A (0:00–0:06). Identity lock for the 30s psychedelic cutaway — spin starts, three sparks peel off.',
    theme: 'The Soft Gyre',
    tags: ['suggestion', 'soft-gyre', 'gel', 'clouds', 'abstract', 'hover'],
  },
  {
    id: 'suggestion-soft-gyre-weather',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway / Visual Experiment',
    title: 'The Soft Gyre — B Weather',
    prompt:
      'Cinematic 8K photoreal 3D still, three-quarter view: the same hovering translucent gel gyre left of frame above anvil thunderheads, clockwise skin spin implied by stretched meniscus, two wet ejecta already in the air — a raspberry gelatin cube tumbling and an electric-lime ribbon stretching downward — one memory-foam dent already in the nearest cloud, warm undersun from below, ultraviolet rim, gold-glass helix visible inside, sparks counter-rotating against the body, no people, 2.39:1 anamorphic, Grok Imagine style',
    promptVariations: [
      'Macro on the tumbling raspberry cube with the gyre soft in the background, Grok Imagine',
      'Cloud dent close-up holding the cube\'s shape for one beat, Grok Imagine',
    ],
    imageUrl: gyreWeather,
    mediaType: 'image',
    musicCue: 'Porch Light Meridian — first THROW / FLOOR exchange',
    musicStyle: 'Celestial downtempo, 64–72 BPM',
    description:
      'Shot B (0:06–0:12). Raspberry cube and lime ribbon hit the deck; one cloud takes a memory-foam dent.',
    theme: 'The Soft Gyre',
    tags: ['suggestion', 'soft-gyre', 'gel', 'jello', 'lightning', 'weather'],
  },
  {
    id: 'suggestion-soft-gyre-interior',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway / Visual Experiment',
    title: 'The Soft Gyre — C Interior',
    prompt:
      'Extreme cinematic 8K macro still looking into a translucent glowing amorphous gel body, skin filling most of the frame with oil-slick meniscus and a melting icosahedral facet, nested raspberry and lime lava-lamp lobes, a gold-glass double helix turning through the middle, two trapped bubbles each containing a tiny anvil-cloud lit from below, a phosphor-gold spark forming in a convection cell near camera, dusk cloud floor softly blurred far below the lower limb, ultraviolet rim, photoreal 3D, Grok Imagine style',
    promptVariations: [
      'Single bubble close-up: miniature anvil-cloud inside gel, Grok Imagine',
      'Helix only, lobes out of focus, spark nucleating, Grok Imagine',
    ],
    imageUrl: gyreInterior,
    mediaType: 'image',
    musicCue: 'Porch Light Meridian — intimate mid-section',
    musicStyle: 'Celestial downtempo, 64–72 BPM',
    description:
      'Shot C (0:12–0:18). Push through the skin: helix, cloud-bubbles, a spark born inside.',
    theme: 'The Soft Gyre',
    tags: ['suggestion', 'soft-gyre', 'gel', 'macro', 'helix', 'interior'],
  },
  {
    id: 'suggestion-soft-gyre-answer',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway / Visual Experiment',
    title: 'The Soft Gyre — D Answer',
    prompt:
      'Cinematic 8K photoreal 3D still of the hovering gel gyre above anvil clouds, a single pale vapor tendril rising from a lime-glowing lantern cloud toward the blob\'s underside, not yet touching, glass-flower crystal already blooming on a neighboring anvil where a spark planted, ejecta ribbons in the air counter-rotating, body slightly off-axis as if about to wobble, warm undersun, violet stratosphere, 2.39:1, Grok Imagine style',
    promptVariations: [
      'Tendril almost touching the gel underside, lime glow from below, Grok Imagine',
      'Glass flower only on a dark anvil cloud, gyre small in the sky, Grok Imagine',
    ],
    imageUrl: gyreAnswer,
    mediaType: 'image',
    musicCue: 'Porch Light Meridian — the cloud answers',
    musicStyle: 'Celestial downtempo, 64–72 BPM',
    description:
      'Shot D (0:18–0:24). Lime-lantern cloud sends a vapor tendril up. Glass flower on the next anvil.',
    theme: 'The Soft Gyre',
    tags: ['suggestion', 'soft-gyre', 'gel', 'tendril', 'glass-flower', 'answer'],
  },
  {
    id: 'suggestion-soft-gyre-soft-set',
    imageKind: 'suggestion',
    episode: 'Musical Cutaway / Visual Experiment',
    title: 'The Soft Gyre — E Soft set',
    prompt:
      'Cinematic 8K photoreal wide still of the same gel gyre now smaller in frame above a vast anvil-cloud sea, spin almost spent, a faint gold spark-halo ringing the body, one glass flower catching light on the nearest cloud, a hole in the deck letting a single warm undersun flare up, crushed-violet sky with hard stars, ultraviolet remnant rim on the gel, quiet after-chaos, 2.39:1 anamorphic, Grok Imagine style',
    promptVariations: [
      'Wide only: tiny gyre, one flare, one flower, Grok Imagine',
      'Undersun flare through a hole, gyre as silhouette, Grok Imagine',
    ],
    imageUrl: gyreSoftSet,
    mediaType: 'image',
    musicCue: 'Porch Light Meridian — flare is the last note',
    musicStyle: 'Celestial downtempo, 64–72 BPM',
    description:
      'Shot E (0:24–0:30). Pull-back: spark-halo, glass flower, undersun through a hole in the deck.',
    theme: 'The Soft Gyre',
    tags: ['suggestion', 'soft-gyre', 'gel', 'halo', 'undersun', 'wide'],
  },
];
