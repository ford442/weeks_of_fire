const audioModules = import.meta.glob<string>('../../songs/*.mp3', {
  import: 'default',
});

export async function loadSongAudioUrl(filename: string): Promise<string | undefined> {
  const loader = audioModules[`../../songs/${filename}`];
  if (!loader) return undefined;
  return loader();
}

export function listAudioFilenames(): string[] {
  return Object.keys(audioModules).map((path) => path.split('/').pop() ?? '');
}

function decodeAudioFilename(filename: string): string {
  return filename
    .replace(/\.mp3$/i, '')
    .replace(/\+/g, ' ')
    .replace(/_/g, ' ');
}

export interface UnlistedTrack {
  id: string;
  title: string;
  filename: string;
}

export function getUnlistedTracks(linkedFilenames: Set<string>): UnlistedTrack[] {
  return listAudioFilenames()
    .filter((filename) => !linkedFilenames.has(filename))
    .map((filename) => ({
      id: filename,
      title: decodeAudioFilename(filename),
      filename,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}
