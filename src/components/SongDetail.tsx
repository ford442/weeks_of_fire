import { Check, Copy, FileText, Music2, Tags } from 'lucide-react';
import type { Song } from '../data/songs';

interface SongDetailProps {
  song: Song;
  copiedKey: string | null;
  onCopy: (text: string, label: string, key: string) => void;
}

export default function SongDetail({ song, copiedKey, onCopy }: SongDetailProps) {
  return (
    <aside className="flex min-h-0 flex-col gap-5 rounded-lg border border-zinc-800 bg-zinc-950/95 p-5 shadow-2xl shadow-black/30">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
          {song.episode}
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-white">{song.title}</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{song.description}</p>
      </div>

      <div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
        <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Music2 size={16} />
            <span>Genre</span>
          </div>
          <p className="mt-2 font-medium text-zinc-100">{song.genre}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {song.instrumental ? 'Instrumental' : 'Vocals'}
          </p>
        </div>
        <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Tags size={16} />
            <span>Tags</span>
          </div>
          <p className="mt-2 font-medium text-zinc-100">{song.tags.join(', ')}</p>
          <p className="mt-1 text-xs text-zinc-500">{song.sourceFile}</p>
        </div>
      </div>

      <section className="min-h-0">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Minimax Style Prompt
          </h3>
          <CopyButton
            copied={copiedKey === `${song.id}:style`}
            label="Copy Style"
            onClick={() => onCopy(song.stylePrompt, 'Style prompt', `${song.id}:style`)}
          />
        </div>
        <pre className="max-h-52 overflow-auto rounded-md border border-zinc-800 bg-black/80 p-4 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
          {song.stylePrompt}
        </pre>
      </section>

      {song.lyrics && (
        <section className="min-h-0">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Lyrics
            </h3>
            <CopyButton
              copied={copiedKey === `${song.id}:lyrics`}
              label="Copy Lyrics"
              onClick={() => onCopy(song.lyrics!, 'Lyrics', `${song.id}:lyrics`)}
            />
          </div>
          <pre className="max-h-52 overflow-auto rounded-md border border-zinc-800 bg-black/80 p-4 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
            {song.lyrics}
          </pre>
        </section>
      )}

      {song.notes && (
        <section>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            <FileText size={14} />
            Notes
          </div>
          <p className="rounded-md border border-zinc-800 bg-zinc-900/70 p-3 text-sm leading-6 text-zinc-400">
            {song.notes}
          </p>
        </section>
      )}
    </aside>
  );
}

interface CopyButtonProps {
  copied: boolean;
  label: string;
  onClick: () => void;
}

function CopyButton({ copied, label, onClick }: CopyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-orange-400 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Copied' : label}
    </button>
  );
}
