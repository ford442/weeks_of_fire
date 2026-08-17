import afterIsAFloorRaw from '../../songs/After_Is_a_Floor.md?raw';
import caffeinatedMelonRaw from '../../songs/Caffeinated_Melon.md?raw';
import chooseYourBasaltRaw from '../../songs/Choose_Your_Basalt.md?raw';
import closedForCosmicReasonsRaw from '../../songs/Closed_for_Cosmic_Reasons.md?raw';
import conditionReportRaw from '../../songs/Condition_Report.md?raw';
import deepSpaceDriftRaw from '../../songs/Deep_Space_Drift.md?raw';
import desertRoseHorizonRaw from '../../songs/Desert_Rose_Horizon.md?raw';
import emptyParkingLotWaltzRaw from '../../songs/Empty_Parking_Lot_Waltz.md?raw';
import firstLightSaltFlatsRaw from '../../songs/First_Light_Salt_Flats.md?raw';
import ghostInTheReverbRaw from '../../songs/Ghost_In_The_Reverb.md?raw';
import hauntedOrUnscheduledRaw from '../../songs/Haunted_or_Unscheduled.md?raw';
import halloweenSnakeBattleRaw from '../../songs/Halloween_Snake_Battle_001.md?raw';
import iSecondPeggyBabcockRaw from '../../songs/I_Second_Peggy_Babcock.md?raw';
import lesOndesCourtesRaw from '../../songs/Les_Ondes_Courtes.md?raw';
import monsterMashFinaleRaw from '../../songs/The_Monster_Mash_Finale.md?raw';
import mysteriumRaw from '../../songs/Mysterium.md?raw';
import mysteriumAcappellaRaw from '../../songs/Mysterium_A_Cappella.md?raw';
import neonExitSignRaw from '../../songs/Neon_Exit_Sign.md?raw';
import padKidPouredCurdRaw from '../../songs/Pad_Kid_Poured_Curd.md?raw';
import pearlsInTheAshtrayRaw from '../../songs/Pearls_In_The_Ashtray.md?raw';
import pepperoniOrMargheritaRaw from '../../songs/Pepperoni_or_Margherita.md?raw';
import porchLightMeridianRaw from '../../songs/Porch_Light_Meridian.md?raw';
import quarterToSeventyFiveRaw from '../../songs/Quarter_to_Seventy-Five.md?raw';
import recyclingBinRebellionRaw from '../../songs/Recycling_Bin_Rebellion.md?raw';
import rinseCycleRaw from '../../songs/Rinse_Cycle.md?raw';
import staticBetweenStationsRaw from '../../songs/Static_Between_Stations.md?raw';
import strangeLightRaw from '../../songs/Strange_Light.md?raw';
import tattarrattatRaw from '../../songs/Tattarrattat.md?raw';
import triphthongTableRaw from '../../songs/Triphthong_Table.md?raw';
import theLaundromatSaintsRaw from '../../songs/The_Laundromat_Saints.md?raw';
import theLongGoodbyeRaw from '../../songs/The_Long_Goodbye.md?raw';
import theMoonIsCollectRaw from '../../songs/The_Moon_Is_Collect.md?raw';
import thePourRaw from '../../songs/The_Pour.md?raw';
import thirdShiftPorcelainRaw from '../../songs/Third_Shift_Porcelain.md?raw';
import twilightTimeRaw from '../../songs/Twilight_Time.md?raw';
import ultraScreechRaw from '../../songs/Glam_Sham_Poo_Ultra_Screech.md?raw';
import whateverLetsUsBeRaw from '../../songs/Whatever_Lets_Us_Be.md?raw';

import { getSongAudioUrl } from '../lib/songAudio';

export interface Song {
  id: string;
  title: string;
  genre: string;
  description: string;
  episode: string;
  stylePrompt: string;
  lyrics: string | null;
  notes: string | null;
  instrumental: boolean;
  tags: string[];
  sourceFile: string;
  audioUrl?: string;
}

interface SongSource {
  id: string;
  title: string;
  sourceFile: string;
  raw: string;
  genre: string;
  description: string;
  episode: string;
  tags: string[];
  instrumental?: boolean;
  audioFile?: string;
}

const songSources: SongSource[] = [
  {
    id: 'after-is-a-floor',
    title: 'After Is a Floor',
    sourceFile: 'After_Is_a_Floor.md',
    raw: afterIsAFloorRaw,
    genre: 'Art Deco noir pop',
    description:
      'Destinations as manners. The unmarked button. Lillith whispered in a small elevator; one extra ding after the last line.',
    episode: 'EyeWash station-break',
    tags: ['noir', 'lillith', 'elevator', 'eyewash-station', 'the-two'],
  },
  {
    id: 'caffeinated-melon',
    title: 'Caffeinated Melon',
    sourceFile: 'Caffeinated_Melon.md',
    raw: caffeinatedMelonRaw,
    genre: 'Absurdist chamber pop',
    description:
      'Gallery fog as truth serum. Spoken verses over a polite quartet that goes a quarter-tone flat, then one clap.',
    episode: 'Gallery Fog cutaway',
    tags: ['chamber-pop', 'gallery', 'comedy', 'justine', 'spoken-word'],
  },
  {
    id: 'choose-your-basalt',
    title: 'Choose Your Basalt',
    sourceFile: 'Choose_Your_Basalt.md',
    raw: chooseYourBasaltRaw,
    genre: 'Educational cabaret duet',
    description:
      'Dead-pan Lillith & Rubella lava-classification jingle (~55s) that starts in their house and cracks open to magma — button line: “That’s nature for us.”',
    episode: 'Musical Cutaway',
    tags: ['cabaret', 'duet', 'lava', 'basalt', 'comedy', 'lillith', 'rubella'],
  },
  {
    id: 'closed-for-cosmic-reasons',
    title: 'Closed for Cosmic Reasons',
    sourceFile: 'Closed_for_Cosmic_Reasons.md',
    raw: closedForCosmicReasonsRaw,
    genre: 'Hotel-lobby downtempo',
    description:
      'A posted notice that becomes a lullaby. Rubella under a hovering pool; Continuity Voice on the title, always a half-step flat.',
    episode: 'One-panel gag / any closed facility',
    tags: ['downtempo', 'rubella', 'continuity-voice', 'gag', 'vivienne'],
  },
  {
    id: 'condition-report',
    title: 'Condition Report',
    sourceFile: 'Condition_Report.md',
    raw: conditionReportRaw,
    genre: 'Museum-hushed chamber noir',
    description:
      'Rubella recites inventory like a vow. Clause four never arrives. Solo cello, una corda piano, no drums until the last line. Pairing for The Overnight Conservator.',
    episode: 'One-panel gag / gallery after hours',
    tags: ['chamber', 'rubella', 'gag', 'museum', 'conservator', 'cello'],
  },
  {
    id: 'deep-space-drift',
    title: 'Deep Space Drift',
    sourceFile: 'Deep_Space_Drift.md',
    raw: deepSpaceDriftRaw,
    genre: 'Weightless ambient pedal-steel',
    description: 'Lanois-processed pedal steel as an orbiting universe — the most weightless entry in the series.',
    episode: 'Series cutaway',
    tags: ['ambient', 'pedal-steel', 'lanois', 'instrumental', 'space'],
    instrumental: true,
  },
  {
    id: 'desert-rose-horizon',
    title: 'Desert Rose Horizon',
    sourceFile: 'Desert_Rose_Horizon.md',
    raw: desertRoseHorizonRaw,
    genre: 'Atmospheric pedal-steel',
    description: 'Anchor track of the Lanois-style ambient pedal-steel series — dusk horizon, steel as a human voice.',
    episode: 'Series cutaway',
    tags: ['ambient', 'pedal-steel', 'lanois', 'instrumental', 'dusk'],
    instrumental: true,
  },
  {
    id: 'empty-parking-lot-waltz',
    title: 'Empty Parking Lot Waltz',
    sourceFile: 'Empty_Parking_Lot_Waltz.md',
    raw: emptyParkingLotWaltzRaw,
    genre: 'Slow cinematic waltz / dark cabaret',
    description:
      'Last two people in a vast wet lot. 3/4, detuned piano, unresolved last chord. They do not decide.',
    episode: 'Post-party cutaway',
    tags: ['waltz', 'cabaret', 'rubella', 'afterparty', 'unresolved'],
  },
  {
    id: 'first-light-salt-flats',
    title: 'First Light Salt Flats',
    sourceFile: 'First_Light_Salt_Flats.md',
    raw: firstLightSaltFlatsRaw,
    genre: 'Luminous dawn pedal-steel',
    description: 'Dawn counterpart to the dusk Lanois tracks — first light across empty salt flats.',
    episode: 'Series cutaway',
    tags: ['ambient', 'pedal-steel', 'lanois', 'instrumental', 'dawn'],
    instrumental: true,
  },
  {
    id: 'haunted-or-unscheduled',
    title: 'Haunted or Unscheduled',
    sourceFile: 'Haunted_or_Unscheduled.md',
    raw: hauntedOrUnscheduledRaw,
    genre: 'Sparse institutional electro-lounge',
    description:
      'Master Control 4 AM bed — Rhodes four-note loop that never develops, 3:44 clock motif twice identically, optional Continuity Voice. Not a second sign-off.',
    episode: 'EyeWash Station / Master Control',
    tags: ['eyewash-station', 'instrumental', 'continuity-voice', 'oz', '4am', 'underscore'],
    instrumental: true,
  },
  {
    id: 'ghost-in-the-reverb',
    title: 'Ghost in the Reverb',
    sourceFile: 'Ghost_In_The_Reverb.md',
    raw: ghostInTheReverbRaw,
    genre: 'Spectral slide-steel nocturne',
    description: 'The darkest Lanois entry — a ghost story told entirely in reverb. No vocals.',
    episode: 'Series cutaway',
    tags: ['ambient', 'pedal-steel', 'lanois', 'instrumental', 'nocturne'],
    instrumental: true,
  },
  {
    id: 'halloween-snake-battle',
    title: 'Halloween Snake Battle',
    sourceFile: 'Halloween_Snake_Battle_001.md',
    raw: halloweenSnakeBattleRaw,
    genre: 'Comedic thrash metal',
    description: 'Short instrumental battle cue for the laser-snake Halloween showdown.',
    episode: 'Episode 03',
    tags: ['metal', 'instrumental', 'halloween', 'battle'],
    instrumental: true,
    audioFile: 'Halloween+Snake+Battle+001.mp3',
  },
  {
    id: 'i-second-peggy-babcock',
    title: 'I Second Peggy Babcock',
    sourceFile: 'I_Second_Peggy_Babcock.md',
    raw: iSecondPeggyBabcockRaw,
    genre: 'Parliamentary patter / clubhouse organ',
    description:
      'HOA recording secretary has the floor. The motion is thistle and shrub. Nobody can second Peggy Babcock. She re-reads the whole thing anyway.',
    episode: 'Episode 04 / HOA',
    tags: ['hoa', 'patter', 'comedy', 'peggy-babcock', 'ep4'],
  },
  {
    id: 'les-ondes-courtes',
    title: 'Les Ondes Courtes',
    sourceFile: 'Les_Ondes_Courtes.md',
    raw: lesOndesCourtesRaw,
    genre: 'French electro-chanson',
    description: 'Hypnagogic night-drive lullaby for the static altar sequence.',
    episode: 'Episode 03',
    tags: ['french', 'jazz', 'night-drive', 'lullaby'],
    audioFile: 'Les+Ondes+Courtes.mp3',
  },
  {
    id: 'monster-mash-finale',
    title: 'The Monster Mash (Finale)',
    sourceFile: 'The_Monster_Mash_Finale.md',
    raw: monsterMashFinaleRaw,
    genre: 'Halloween novelty-rock cover',
    description:
      'Rubella covers Bobby Pickett\'s "Monster Mash" on the post-snake-battle lawn — cursed guest list, hologram reveal, Spy vs. Spy outro.',
    episode: 'Episode 03',
    tags: ['halloween', 'cover', 'monster-mash', 'rubella', 'spy-vs-spy', 'finale'],
    audioFile: 'The+Monster+Mash+(Finale).mp3',
  },
  {
    id: 'mysterium',
    title: 'Mysterium',
    sourceFile: 'Mysterium.md',
    raw: mysteriumRaw,
    genre: 'Bubblegum Italo-pop',
    description: 'Festive Italian bubblegum pop with Latin chorus hooks.',
    episode: 'Series cutaway',
    tags: ['italian', 'pop', 'christmas', 'choir'],
  },
  {
    id: 'mysterium-a-cappella',
    title: 'Mysterium (A Cappella)',
    sourceFile: 'Mysterium_A_Cappella.md',
    raw: mysteriumAcappellaRaw,
    genre: 'A cappella bubblegum pop',
    description: 'Vocal-only variant of Mysterium for Minimax generation without instruments.',
    episode: 'Series cutaway',
    tags: ['a-cappella', 'italian', 'pop', 'vocal-group'],
  },
  {
    id: 'pad-kid-poured-curd',
    title: 'Pad Kid Poured Curd (Pulled Cold)',
    sourceFile: 'Pad_Kid_Poured_Curd.md',
    raw: padKidPouredCurdRaw,
    genre: 'Cold patter electro / recall bulletin',
    description:
      'EyeWash late correction at 3:44. A pad kid poured curd that should have been pulled cold; Continuity Voice reads the form while the health department adds clauses and the tempo does not slow.',
    episode: 'EyeWash Station / late correction',
    tags: ['continuity-voice', 'eyewash-station', 'patter', 'recall', 'comedy'],
  },
  {
    id: 'tattarrattat',
    title: 'Tattarrattat',
    sourceFile: 'Tattarrattat.md',
    raw: tattarrattatRaw,
    genre: 'Smoked midnight jazz / locked-door',
    description:
      'After-gala hallway. The knock is the same from both sides of the wood. Rubella does not open. She counts the seals.',
    episode: 'After-gala / hallway liminal',
    tags: ['rubella', 'jazz', 'hallway', 'locked-door'],
  },
  {
    id: 'triphthong-table',
    title: 'Triphthong Table',
    sourceFile: 'Triphthong_Table.md',
    raw: triphthongTableRaw,
    genre: 'Educational cabaret duet',
    description:
      'Flour-hire-coir and hvirvle-spurv-færge in one deadpan phonetics lesson. Lillith & Rubella; pronunciation guide always one vowel glide behind the melody.',
    episode: 'Musical cutaway',
    tags: ['triphthong', 'cabaret', 'duet', 'lillith', 'rubella', 'phonetics', 'shibboleth'],
  },
  {
    id: 'neon-exit-sign',
    title: 'Neon Exit Sign',
    sourceFile: 'Neon_Exit_Sign.md',
    raw: neonExitSignRaw,
    genre: '80s dark synth-pop / neon noir',
    description:
      'Series signature cutaway — “don’t smudge the mascara” as a glamour-apocalypse anthem, sung by a woman who has tried every exit twice.',
    episode: 'Episode 01 reprise',
    tags: ['synthwave', 'neon-noir', '80s', 'the-two', 'rubella', 'signature'],
  },
  {
    id: 'pearls-in-the-ashtray',
    title: 'Pearls in the Ashtray',
    sourceFile: 'Pearls_In_The_Ashtray.md',
    raw: pearlsInTheAshtrayRaw,
    genre: 'Smoked midnight jazz',
    description:
      'Residue as jewelry. Rubella inventories what burned. Trumpet answers a beat late and a half-step low.',
    episode: 'After-gala cutaway',
    tags: ['jazz', 'rubella', 'gag', 'the-two', 'afterparty'],
  },
  {
    id: 'pepperoni-or-margherita',
    title: 'Pepperoni or Margherita',
    sourceFile: 'Pepperoni_or_Margherita.md',
    raw: pepperoniOrMargheritaRaw,
    genre: 'Commercial jingle → minor-key piano ballad',
    description:
      'The Pizza Guy theme: fifteen seconds of cheerful ad music, a hard cut, then ninety seconds about always arriving when chaos peaks.',
    episode: 'Episode 03 / any crossover',
    tags: ['jingle', 'ballad', 'deadpan', 'pizza-guy', 'comedy', 'eyewash-station'],
  },
  {
    id: 'porch-light-meridian',
    title: 'Porch Light Meridian',
    sourceFile: 'Porch_Light_Meridian.md',
    raw: porchLightMeridianRaw,
    genre: 'Progressive downtempo',
    description:
      'Episode 3 crane reveal as music — porch bulb in the foreground, meridian logic overhead. Rubella, spare, unresolved.',
    episode: 'Episode 03',
    tags: ['downtempo', 'rubella', 'ep3', 'porch', 'celestial'],
  },
  {
    id: 'quarter-to-seventy-five',
    title: 'Quarter to Seventy-Five',
    sourceFile: 'Quarter_to_Seventy-Five.md',
    raw: quarterToSeventyFiveRaw,
    genre: 'Ambient lullaby / detuned soft rock',
    description:
      'Episode 2 nocturnal drive as a song — no chorus, just the title phrase, a clock stuck at 3:44, and an FM needle drifting left.',
    episode: 'Episode 02',
    tags: ['ambient', 'night-drive', 'lullaby', 'radio-voice', 'rubella'],
  },
  {
    id: 'recycling-bin-rebellion',
    title: 'Recycling Bin Rebellion',
    sourceFile: 'Recycling_Bin_Rebellion.md',
    raw: recyclingBinRebellionRaw,
    genre: 'Absurd punk-ska',
    description:
      'HOA protest anthem about the wrong shade of democratic blue. Cheap horns, gavel snare, one flat trumpet, no wink.',
    episode: 'Episode 04 / HOA',
    tags: ['ska', 'punk', 'hoa', 'comedy', 'karen', 'ep4'],
  },
  {
    id: 'rinse-cycle',
    title: 'Rinse Cycle (Fifteen Minutes, Do Not Blink)',
    sourceFile: 'Rinse_Cycle.md',
    raw: rinseCycleRaw,
    genre: 'Institutional soft rock / sign-off theme',
    description:
      'EyeWash Station sign-off — warm, over-rehearsed, and structurally wrong: nine-bar phrases, late resolutions, and a “please stand by” outro that loops.',
    episode: 'Series framing device',
    tags: ['eyewash-station', 'sign-off', 'continuity-voice', 'loopable', 'ident'],
  },
  {
    id: 'static-between-stations',
    title: 'Static Between Stations',
    sourceFile: 'Static_Between_Stations.md',
    raw: staticBetweenStationsRaw,
    genre: 'Nocturnal electro-indie',
    description:
      'Leave the dial between two songs on purpose. Lillith close; Rubella as a distant station ghost. Sister to Les Ondes Courtes.',
    episode: 'Episode 02 / Laundromat',
    tags: ['trip-hop', 'lillith', 'night-drive', 'laundromat', 'ep2'],
  },
  {
    id: 'strange-light',
    title: 'Strange Light',
    sourceFile: 'Strange_Light.md',
    raw: strangeLightRaw,
    genre: 'Celestial downtempo electro',
    description:
      'Sun and moon sharing one sky. One witness. Quiet cosmic lawbreaking. Sine bass as an orbit, not a bounce.',
    episode: 'Episode 03 sky',
    tags: ['electro', 'celestial', 'lillith', 'rubella', 'ep3'],
  },
  {
    id: 'the-laundromat-saints',
    title: 'The Laundromat Saints',
    sourceFile: 'The_Laundromat_Saints.md',
    raw: theLaundromatSaintsRaw,
    genre: 'Slow liminal waltz',
    description:
      'Two breathy voices alternate like strangers who accidentally agree. Dryer thumps on bar 5, not bar 1. Diegetic EyeWash TV, then full score for the 2 AM slow dance.',
    episode: '2AM Laundromat Slow Dance',
    tags: ['waltz', 'laundromat', 'duet', 'liminal', 'eyewash-station', 'ep2'],
  },
  {
    id: 'the-long-goodbye',
    title: 'The Long Goodbye',
    sourceFile: 'The_Long_Goodbye.md',
    raw: theLongGoodbyeRaw,
    genre: 'Sentimental pedal-steel ballad',
    description: 'Wordless farewell — the emotional peak of the Lanois pedal-steel series.',
    episode: 'Series cutaway',
    tags: ['ambient', 'pedal-steel', 'lanois', 'instrumental', 'farewell'],
    instrumental: true,
  },
  {
    id: 'the-moon-is-collect',
    title: 'The Moon Is Collect',
    sourceFile: 'The_Moon_Is_Collect.md',
    raw: theMoonIsCollectRaw,
    genre: 'Nocturnal torch song',
    description:
      'A red phone whose cord is tied to the moon. Last lines missing their final word. Quietest of the gag songs.',
    episode: 'One-panel gag / penthouse',
    tags: ['torch', 'rubella', 'gag', 'liliane', 'night'],
  },
  {
    id: 'the-pour',
    title: 'The Pour',
    sourceFile: 'The_Pour.md',
    raw: thePourRaw,
    genre: 'Industrial cabaret',
    description:
      'They hired a climate. Cello in 5 against the song in 4. Lillith deadpan; Rubella only on “dress warm.”',
    episode: 'One-panel gag / foundry gala',
    tags: ['cabaret', 'lillith', 'gag', 'vivienne', 'foundry'],
  },
  {
    id: 'third-shift-porcelain',
    title: 'Third Shift Porcelain',
    sourceFile: 'Third_Shift_Porcelain.md',
    raw: thirdShiftPorcelainRaw,
    genre: 'Heel-click electro / cold disco',
    description:
      'Beauty as hourly work. Unison deadpan, marble-stamp kick, bar-5 downbeat always late. The Two do not clock out.',
    episode: 'One-panel gag / after hours',
    tags: ['electro', 'disco', 'labor', 'gag', 'lillith', 'rubella'],
  },
  {
    id: 'twilight-time',
    title: 'Twilight Time',
    sourceFile: 'Twilight_Time.md',
    raw: twilightTimeRaw,
    genre: '90s rave / eurodance',
    description: 'Euphoric warehouse-party anthem used as a recurring character motif.',
    episode: 'Character Archive',
    tags: ['rave', 'eurodance', 'trance', 'romantic'],
    audioFile: 'Twilight+Time.mp3',
  },
  {
    id: 'ultra-screech',
    title: 'Ultra Screech (Glam-Sham-Poo)',
    sourceFile: 'Glam_Sham_Poo_Ultra_Screech.md',
    raw: ultraScreechRaw,
    genre: 'Glam metal joke commercial',
    description:
      'Screeching glam-metal shampoo anthem from Glamora. Rubella exhausted, Lillith committed, Kenji still selling. Gang vocals on GLAM-SHAM-POO.',
    episode: 'Musical Cutaway / EyeWash',
    tags: ['glam-metal', 'commercial', 'lillith', 'rubella', 'kenji', 'eyewash-station'],
    audioFile: 'glam-sham-poo.mp3',
  },
  {
    id: 'whatever-lets-us-be',
    title: 'Whatever Lets Us Be',
    sourceFile: 'Whatever_Lets_Us_Be.md',
    raw: whateverLetsUsBeRaw,
    genre: 'Dark cabaret piano ballad',
    description: 'Haunting Rubella-voice refrain for the fireline exit and open-hearted beats.',
    episode: 'Episode 01 / 03',
    tags: ['piano', 'cabaret', 'ballad', 'halloween'],
    audioFile: 'Whatever+Lets+Us+Be.mp3',
  },
];

export const linkedAudioFilenames = new Set(
  songSources.map((source) => source.audioFile).filter((filename): filename is string => Boolean(filename)),
);

function parseSongSections(raw: string) {
  const styleMatch = raw.match(/STYLE:\s*\n+([\s\S]*?)(?=\n+LYRICS:|\n+NOTES:|\n+## |$)/);
  const lyricsMatch = raw.match(/LYRICS:\s*\n+([\s\S]*?)(?=\n+NOTES:|\n+## |$)/);
  const notesMatch = raw.match(/NOTES:\s*\n+([\s\S]*?)(?=\n+## |$)/);

  return {
    stylePrompt: styleMatch?.[1]?.trim() ?? raw.trim(),
    lyrics: lyricsMatch?.[1]?.trim() ?? null,
    notes: notesMatch?.[1]?.trim() ?? null,
  };
}

export const songs: Song[] = songSources.map((source) => {
  const sections = parseSongSections(source.raw);

  return {
    id: source.id,
    title: source.title,
    genre: source.genre,
    description: source.description,
    episode: source.episode,
    stylePrompt: sections.stylePrompt,
    lyrics: sections.lyrics,
    notes: sections.notes,
    instrumental: source.instrumental ?? sections.lyrics === null,
    tags: source.tags,
    sourceFile: source.sourceFile,
    audioUrl: source.audioFile ? getSongAudioUrl(source.audioFile) : undefined,
  };
});
