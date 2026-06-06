import episode03Image from '../../episodes/episode-03/image.jpg';
import episode03Image004 from '../../episodes/episode-03/image_004.jpg';
import episode03Image005 from '../../episodes/episode-03/image_005.jpg';
import episode03Image006 from '../../episodes/episode-03/image_006.jpg';
import episode03Image007 from '../../episodes/episode-03/image_007.jpg';
import characterOne from '../../characters/image_001.webp';
import characterTwo from '../../characters/image_002.jpg';

export type MediaType = 'image' | 'video';

export interface FilmScene {
  id: string;
  episode: string;
  title: string;
  prompt: string;
  promptVariations: string[];
  imageUrl: string;
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
];
