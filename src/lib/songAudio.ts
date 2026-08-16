const audioModules = import.meta.glob<string>('../../songs/*.mp3', {
  eager: true,
  import: 'default',
});

export function getSongAudioUrl(filename: string): string | undefined {
  return audioModules[`../../songs/${filename}`];
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
  audioUrl: string;
  filename: string;
}

export function getUnlistedTracks(linkedFilenames: Set<string>): UnlistedTrack[] {
  return Object.entries(audioModules)
    .filter(([path]) => {
      const filename = path.split('/').pop() ?? '';
      return !linkedFilenames.has(filename);
    })
    .map(([path, audioUrl]) => {
      const filename = path.split('/').pop() ?? '';
      const title = decodeAudioFilename(filename);

      return {
        id: filename,
        title,
        audioUrl,
        filename,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
