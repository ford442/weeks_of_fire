export function parseSongSections(raw: string) {
  const styleMatch = raw.match(/STYLE:\s*\n+([\s\S]*?)(?=\n+LYRICS:|\n+NOTES:|\n+## |$)/);
  const lyricsMatch = raw.match(/LYRICS:\s*\n+([\s\S]*?)(?=\n+NOTES:|\n+## |$)/);
  const notesMatch = raw.match(/NOTES:\s*\n+([\s\S]*?)(?=\n+## |$)/);

  return {
    stylePrompt: styleMatch?.[1]?.trim() ?? raw.trim(),
    lyrics: lyricsMatch?.[1]?.trim() ?? null,
    notes: notesMatch?.[1]?.trim() ?? null,
  };
}
