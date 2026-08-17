import { getSongAudioUrl } from '../lib/songAudio';

/** Visual treatment for Daisy Bell keyframes. */
export type DaisyFrameTreatment = 'color' | 'period';

export const daisyTreatmentMeta: Record<
  DaisyFrameTreatment,
  { label: string; short: string; accent: string; description: string }
> = {
  color: {
    label: 'Full color HD',
    short: 'Color',
    accent: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
    description:
      'Crisp modern photography — wildflower field chroma, or Victorian London snapped into full HD while the street stays period.',
  },
  period: {
    label: 'Scratchy period film',
    short: 'Period',
    accent: 'border-stone-400/40 bg-stone-500/10 text-stone-200',
    description:
      'Intentional nitrate decay: grain, vertical scratches, flicker, soft focus, black-and-white or heavy sepia. The flower bike should still feel wrong — too alive for the century.',
  },
};

export interface DaisyBellFrame {
  id: string;
  order: number;
  title: string;
  treatment: DaisyFrameTreatment;
  /** Optional lyric / sequence beat label */
  beat: string;
  description: string;
  prompt: string;
  /** When a still is generated, drop it under images/daisy-bell/ and import here. */
  imageUrl?: string;
  tags: string[];
}

export interface DaisyBellSight {
  id: string;
  lyricCue: string | null;
  title: string;
  description: string;
}

export interface DaisyBellSequenceBeat {
  id: string;
  step: number;
  title: string;
  treatment: DaisyFrameTreatment | 'flip';
  summary: string;
}

export const daisyBellMeta = {
  id: 'daisy-bell',
  title: 'Daisy Bell',
  subtitle: 'A bicycle built for two — into old London',
  duo: 'Rubella & Lillith',
  audioFile: 'Daisy+Bell.mp3',
  conceptFile: 'ideas/daisy-bell-cutaway.md',
  pitch:
    'Rubella and Lillith ride a living flower bicycle from a modern wildflower field straight into period London. The joke is the bike. The experiment is the cut: scratchy black-and-white film grain flipping into crisp HD color and back, as if the century cannot settle.',
  constant:
    'The flower bike never leaves frame. Black lace against chaotic color (or wrong brightness against monochrome). Period London stares; they do not explain.',
} as const;

export const daisyBellAudioUrl = getSongAudioUrl(daisyBellMeta.audioFile);

export const daisyBellSequence: DaisyBellSequenceBeat[] = [
  {
    id: 'seq-field',
    step: 1,
    title: 'Color field',
    treatment: 'color',
    summary:
      'Modern wildflower sea, golden hour. Flower bike half-swallowed by blooms. Soft backlight, pollen in the air.',
  },
  {
    id: 'seq-grain',
    step: 2,
    title: 'First grain',
    treatment: 'period',
    summary:
      'On “Daisy, Daisy…” — vertical scratches, flicker, color draining. Field begins to dissolve toward Fleet Street.',
  },
  {
    id: 'seq-fleet',
    step: 3,
    title: 'Scratched Fleet Street',
    treatment: 'period',
    summary:
      'Postcard energy toward St. Paul’s. Horse traffic, bowlers. Flower bike cuts the crowd — too bright at the edges for B&W.',
  },
  {
    id: 'seq-hd-victorian',
    step: 4,
    title: 'Victorian in full HD',
    treatment: 'color',
    summary:
      'Scratches clear; color snaps back. Street stays 1890s–1910s. Living floral bicycle in crisp modern photography of old London.',
  },
  {
    id: 'seq-flips',
    step: 5,
    title: 'Unstable flips',
    treatment: 'flip',
    summary:
      'On “bicycle built for two,” B&W ↔ HD a few more times — each transition less stable.',
  },
  {
    id: 'seq-return',
    step: 6,
    title: 'Soft return',
    treatment: 'color',
    summary: 'Modern field again as the last line lands. Fog of petals; London gone.',
  },
];

export const daisyBellSights: DaisyBellSight[] = [
  {
    id: 'sight-hansom',
    lyricCue: 'I can’t afford a carriage',
    title: 'Broken hansom',
    description:
      'One wheel missing in the gutter; the horse still standing, resigned. They pedal past without slowing.',
  },
  {
    id: 'sight-beggar-daisy',
    lyricCue: 'I can’t afford a carriage',
    title: 'Wilted daisy',
    description:
      'Beggars on the curb. One holds up a single wilted daisy — deadpan, almost an offering or a receipt.',
  },
  {
    id: 'sight-closed-carriage',
    lyricCue: 'I can’t afford a carriage',
    title: 'Fancy closed carriage',
    description:
      'Opposite direction; curtains part half a second. Pure confusion at the flower bike. Curtains shut.',
  },
  {
    id: 'sight-stylish-glance',
    lyricCue: 'You’ll look sweet upon the seat',
    title: 'Stylish glance',
    description:
      'Women in feathered hats and walking suits (or black period bicycles). One long, amused, slightly admiring look. No dialogue.',
  },
  {
    id: 'sight-landau',
    lyricCue: 'You’ll look sweet upon the seat',
    title: 'Landau lean',
    description:
      'Society ladies in an open landau lean the same way at once to track the flower bicycle. Hats almost as ridiculous as the bike.',
  },
  {
    id: 'sight-flower-girl',
    lyricCue: null,
    title: 'Flower girl freezes',
    description: 'Kneeling with her basket; freezes when she sees their bike *is* the flowers.',
  },
  {
    id: 'sight-news-boy',
    lyricCue: null,
    title: 'On-the-nose headline',
    description: 'Newspaper boy shouting “Bicycle Built for Two Causes Sensation!” — impossible, perfect.',
  },
  {
    id: 'sight-sweep',
    lyricCue: null,
    title: 'Chimney-sweep petal',
    description: 'Tips his cap; a single white daisy petal drifts out of the brush.',
  },
  {
    id: 'sight-monkey',
    lyricCue: null,
    title: 'Lace-collar monkey',
    description: 'Street organ monkey in a miniature black lace collar matching their dresses.',
  },
  {
    id: 'sight-hopscotch',
    lyricCue: null,
    title: 'Daisy hopscotch',
    description: 'Children chalk hopscotch on cobbles; each square a drawn daisy face.',
  },
  {
    id: 'sight-wedding',
    lyricCue: null,
    title: 'Wedding lean',
    description:
      'Bride’s ordinary bouquet; as they pass, a few flowers lean toward the bike.',
  },
  {
    id: 'sight-bobby',
    lyricCue: null,
    title: 'Policeman double-take',
    description: 'Full double-take, then pretends he saw nothing.',
  },
  {
    id: 'sight-fog-dome',
    lyricCue: null,
    title: 'St. Paul’s in fog',
    description: 'Thick fog parts long enough for the dome, then closes behind them.',
  },
];

/**
 * Keyframe board — prompts ready for generation.
 * Drop finished stills into images/daisy-bell/ and wire imageUrl imports here.
 */
export const daisyBellFrames: DaisyBellFrame[] = [
  {
    id: 'db-01-field-tandem',
    order: 1,
    title: 'Wildflower field — tandem',
    treatment: 'color',
    beat: 'Open / soft return',
    description:
      'Wide sea of flowers; flower bicycle half-swallowed by blooms. Rubella and Lillith in black lace — one looking back at the other, or walking the bike slowly through petals.',
    prompt:
      'Cinematic photoreal 16:9 still, golden-hour wildflower meadow, vast chaotic field of daisies and mixed blooms, a tandem bicycle built entirely of living flowers and vines half-swallowed by the petals, two glamorous women in matching black lace dresses with long dark hair and blood-red lipstick — Rubella dry and wry looking back, Lillith brighter slightly ahead — soft backlight, pollen and motes in the air, gothic softness against saturated color, shallow depth, 35mm anamorphic, fine grain, Weeks on Fire short-film still',
    tags: ['field', 'tandem', 'rubella', 'lillith', 'open'],
  },
  {
    id: 'db-02-first-grain',
    order: 2,
    title: 'First grain on the field',
    treatment: 'period',
    beat: 'Daisy, Daisy…',
    description:
      'Same composition begins to degrade: vertical scratches, flicker, color draining toward monochrome while the flower bike still holds a little life.',
    prompt:
      'Same wildflower meadow and living flower tandem bicycle with two women in black lace, but as early 1900s nitrate film: heavy film grain, vertical emulsion scratches, slight gate weave and flicker, color almost drained to monochrome with a faint warm tint only on the flower bike, soft focus, damaged leader aesthetics, photoreal figures under period film decay, 16:9 cinematic still',
    tags: ['transition', 'grain', 'field'],
  },
  {
    id: 'db-03-fleet-street',
    order: 3,
    title: 'Fleet Street — scratched',
    treatment: 'period',
    beat: 'Full period London',
    description:
      'Fleet Street looking toward St. Paul’s, horse traffic, bowlers. Flower bike cutting through; blooms edge-glow wrong against pure B&W.',
    prompt:
      'Scratched black-and-white 1900s film still of Fleet Street looking toward the dome of St. Paul\'s Cathedral, dense horse-drawn traffic, bowler hats, period shop fronts, a tandem bicycle made of living white flowers cutting through the crowd ridden by two women in black lace dresses, the flower bike slightly too sharp and faintly luminous against pure monochrome, heavy grain, vertical scratches, flicker, soft period lens, 16:9',
    tags: ['london', 'fleet-street', 'st-pauls'],
  },
  {
    id: 'db-04-victorian-hd',
    order: 4,
    title: 'Victorian London — full HD color',
    treatment: 'color',
    beat: 'Color snap, street stays period',
    description:
      'Identical street geometry in crisp modern color photography; living floral bicycle still the constant.',
    prompt:
      'Crisp modern 8K photoreal color photograph of the same Victorian Fleet Street toward St. Paul\'s, 1890s–1910s architecture and horse traffic fully period, but shot with contemporary cinema lenses and full natural color, two women in black lace on a tandem bicycle built of living multicolored flowers riding through the crowd, pollen and petal fragments in the air, high dynamic range, no film scratches, surreal time-slip, 16:9 anamorphic',
    tags: ['london', 'hd', 'time-slip'],
  },
  {
    id: 'db-05-carriage-lyric',
    order: 5,
    title: 'Can’t afford a carriage',
    treatment: 'period',
    beat: 'I can’t afford a carriage',
    description:
      'Broken hansom one wheel missing; resigned horse; flower bike rolling past in scratched B&W.',
    prompt:
      'Black-and-white scratched period film still, London gutter, broken hansom cab missing one wheel, resigned horse still harnessed, two women in black lace pedaling a luminous living-flower tandem bicycle past in the foreground, soft focus background of period street, grain and vertical scratches, deadpan comedy, 16:9',
    tags: ['lyric', 'carriage', 'hansom'],
  },
  {
    id: 'db-06-wilted-daisy',
    order: 6,
    title: 'Wilted daisy offering',
    treatment: 'period',
    beat: 'I can’t afford a carriage',
    description: 'Curb line of beggars; one holds a single wilted daisy as they pass.',
    prompt:
      'Early film black-and-white still, cobbled London curb, poor beggars seated, one figure holding up a single wilted daisy toward camera, midground a flower-built tandem bicycle with two black-lace women rolling past, heavy grain, scratches, soft emulsion, melancholic deadpan, 16:9',
    tags: ['lyric', 'beggar', 'daisy'],
  },
  {
    id: 'db-07-stylish-glance',
    order: 7,
    title: 'You’ll look sweet — glance',
    treatment: 'color',
    beat: 'You’ll look sweet upon the seat',
    description:
      'Stylish period women (feathered hats); one long amused admiring look at Rubella and Lillith on the flower bike — full HD color Victorian street.',
    prompt:
      'Full-color photoreal cinema still, Victorian London sidewalk, three stylishly dressed women in large feathered hats and tailored walking suits, one turning her head with a long amused admiring glance, background two women in black lace on a living flower tandem bicycle, crisp modern HD of period fashion and street, shallow depth on the glance, 16:9',
    tags: ['lyric', 'glance', 'society'],
  },
  {
    id: 'db-08-landau',
    order: 8,
    title: 'Landau lean',
    treatment: 'color',
    beat: 'You’ll look sweet upon the seat',
    description: 'Open landau; society ladies lean the same way at once toward the flower bicycle.',
    prompt:
      'Photoreal color still, open landau carriage full of society ladies in enormous hats all leaning the same direction at once to watch a flower-built tandem bicycle, two black-lace riders, Victorian London avenue, crisp HD, gentle motion implied, comic elegance, 16:9',
    tags: ['lyric', 'landau', 'hats'],
  },
  {
    id: 'db-09-fog-dome',
    order: 9,
    title: 'St. Paul’s in fog',
    treatment: 'period',
    beat: 'Bridge / atmosphere',
    description: 'Fog parts on the dome; flower bike silhouette; scratches and soft focus.',
    prompt:
      'Heavily scratched fog-bound black-and-white film still, London, the dome of St. Paul\'s briefly visible through parting fog, silhouette of a tandem bicycle made of flowers with two riders, fog closing behind, soft focus, nitrate grain, vertical scratches, 16:9 atmospheric',
    tags: ['london', 'fog', 'st-pauls'],
  },
  {
    id: 'db-10-field-return',
    order: 10,
    title: 'Soft return to the field',
    treatment: 'color',
    beat: 'Button',
    description: 'Modern meadow again; London gone; last line lands in pollen light.',
    prompt:
      'Soft photoreal color still, golden-hour wildflower field again, living flower tandem bicycle with Rubella and Lillith in black lace slowing as if the ride is ending, no London, only meadow and sky, pollen haze, gentle backlight, gothic softness, 16:9 cinematic still',
    tags: ['field', 'button', 'return'],
  },
];

export function daisyFramesByTreatment(treatment: DaisyFrameTreatment | 'all'): DaisyBellFrame[] {
  const sorted = [...daisyBellFrames].sort((a, b) => a.order - b.order);
  if (treatment === 'all') return sorted;
  return sorted.filter((frame) => frame.treatment === treatment);
}
