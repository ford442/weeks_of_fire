import chooseYourBasaltRaw from '../../songs/Choose_Your_Basalt.md?raw';
import halloweenSnakeBattleRaw from '../../songs/Halloween_Snake_Battle_001.md?raw';
import lesOndesCourtesRaw from '../../songs/Les_Ondes_Courtes.md?raw';
import monsterMashFinaleRaw from '../../songs/The_Monster_Mash_Finale.md?raw';
import mysteriumRaw from '../../songs/Mysterium.md?raw';
import mysteriumAcappellaRaw from '../../songs/Mysterium_A_Cappella.md?raw';
import neonExitSignRaw from '../../songs/Neon_Exit_Sign.md?raw';
import pepperoniOrMargheritaRaw from '../../songs/Pepperoni_or_Margherita.md?raw';
import quarterToSeventyFiveRaw from '../../songs/Quarter_to_Seventy-Five.md?raw';
import rinseCycleRaw from '../../songs/Rinse_Cycle.md?raw';
import twilightTimeRaw from '../../songs/Twilight_Time.md?raw';
import whateverLetsUsBeRaw from '../../songs/Whatever_Lets_Us_Be.md?raw';

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
}

const songSources: SongSource[] = [
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
    id: 'halloween-snake-battle',
    title: 'Halloween Snake Battle',
    sourceFile: 'Halloween_Snake_Battle_001.md',
    raw: halloweenSnakeBattleRaw,
    genre: 'Comedic thrash metal',
    description: 'Short instrumental battle cue for the laser-snake Halloween showdown.',
    episode: 'Episode 03',
    tags: ['metal', 'instrumental', 'halloween', 'battle'],
    instrumental: true,
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
    instrumental: false,
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
    id: 'twilight-time',
    title: 'Twilight Time',
    sourceFile: 'Twilight_Time.md',
    raw: twilightTimeRaw,
    genre: '90s rave / eurodance',
    description: 'Euphoric warehouse-party anthem used as a recurring character motif.',
    episode: 'Character Archive',
    tags: ['rave', 'eurodance', 'trance', 'romantic'],
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
  },
  {
    id: 'neon-exit-sign',
    title: 'Neon Exit Sign',
    sourceFile: 'Neon_Exit_Sign.md',
    raw: neonExitSignRaw,
    genre: '80s dark synth-pop / neon noir',
    description:
      'Series signature cutaway — Rubella cool-girl anthem; “don’t smudge the mascara” callback; wet alley of EXIT signs that never lead outside.',
    episode: 'Episode 01 reprise / series cutaway',
    tags: ['synth-pop', 'neon', 'rubella', 'the-two', 'signature', 'mascara'],
  },
  {
    id: 'quarter-to-seventy-five',
    title: 'Quarter to Seventy-Five',
    sourceFile: 'Quarter_to_Seventy-Five.md',
    raw: quarterToSeventyFiveRaw,
    genre: 'Slow ambient lullaby / detuned soft rock',
    description:
      'Ep2 nocturnal drive theme — half-whispered Radio Voice lullaby; clock stuck at 3:44; no big chorus, only the title hook.',
    episode: 'Episode 02',
    tags: ['ambient', 'lullaby', 'night-drive', 'radio', 'ep2', 'static'],
  },
  {
    id: 'pepperoni-or-margherita',
    title: 'Pepperoni or Margherita',
    sourceFile: 'Pepperoni_or_Margherita.md',
    raw: pepperoniOrMargheritaRaw,
    genre: 'Jingle → minor-key piano ballad',
    description:
      'Pizza Guy theme: 15s cheesy commercial jingle that hard-cuts into a deadpan ballad about always arriving when chaos peaks.',
    episode: 'Episode 03 / recurring',
    tags: ['pizza-guy', 'jingle', 'ballad', 'comedy', 'ep3', 'crossover'],
  },
  {
    id: 'rinse-cycle',
    title: 'Rinse Cycle (Fifteen Minutes, Do Not Blink)',
    sourceFile: 'Rinse_Cycle.md',
    raw: rinseCycleRaw,
    genre: 'Institutional soft rock / late-night TV theme',
    description:
      'EyeWash Station sign-off — Continuity Voice, faux-sponsor break, please-stand-by outro that loops; comfort that curdles on repeat.',
    episode: 'EyeWash Station / between cutaways',
    tags: ['eyewash', 'sign-off', 'continuity-voice', 'institutional', 'ident'],
  },
];

function parseSongSections(raw: string) {
  const styleMatch = raw.match(/STYLE:\s*\n+([\s\S]*?)(?=\n+LYRICS:|\n+NOTES:|$)/);
  const lyricsMatch = raw.match(/LYRICS:\s*\n+([\s\S]*?)(?=\n+NOTES:|$)/);
  const notesMatch = raw.match(/NOTES:\s*\n+([\s\S]*?)$/);

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
  };
});
