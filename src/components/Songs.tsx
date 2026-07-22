import { useMemo, useState } from 'react';
import { Copy, Music2, Search, SlidersHorizontal } from 'lucide-react';
import { songs, type Song } from '../data/songs';
import SongDetail from './SongDetail';

const allValue = 'All';

export default function Songs() {
  const [selected, setSelected] = useState<Song>(songs[0]);
  const [query, setQuery] = useState('');
  const [episode, setEpisode] = useState(allValue);
  const [genre, setGenre] = useState(allValue);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filters = useMemo(
    () => ({
      episodes: uniqueValues(songs.map((song) => song.episode)),
      genres: uniqueValues(songs.map((song) => song.genre)),
    }),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return songs.filter((song) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          song.title,
          song.genre,
          song.description,
          song.episode,
          song.stylePrompt,
          song.lyrics ?? '',
          song.tags.join(' '),
        ]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return (
        matchesSearch &&
        (episode === allValue || song.episode === episode) &&
        (genre === allValue || song.genre === genre)
      );
    });
  }, [episode, genre, query]);

  const copyToClipboard = async (text: string, label: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1600);
    } catch {
      window.prompt(`Copy ${label}`, text);
    }
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
      <div className="space-y-5">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(220px,1fr)_180px_220px]">
            <label className="relative block">
              <span className="sr-only">Search songs, lyrics, and tags</span>
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search songs, lyrics, genres..."
                className="h-11 w-full rounded-md border border-zinc-800 bg-black/70 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
              />
            </label>
            <FilterSelect label="Episode" value={episode} options={filters.episodes} onChange={setEpisode} />
            <FilterSelect label="Genre" value={genre} options={filters.genres} onChange={setGenre} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((song) => (
            <article
              key={song.id}
              className={`overflow-hidden rounded-lg border bg-zinc-950 transition hover:-translate-y-0.5 ${
                selected.id === song.id
                  ? 'border-orange-500/70 ring-1 ring-orange-500/30'
                  : 'border-zinc-800 hover:border-orange-500/50'
              }`}
            >
              <button
                type="button"
                onClick={() => setSelected(song)}
                className="block w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-orange-500/20 bg-orange-500/10 text-orange-200">
                    <Music2 size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                      {song.episode}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold leading-tight text-white">{song.title}</h2>
                    <p className="mt-2 text-sm text-zinc-400">{song.genre}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{song.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {song.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {song.instrumental && (
                        <span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-400">
                          instrumental
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
              <div className="grid grid-cols-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => copyToClipboard(song.stylePrompt, 'Style prompt', `${song.id}:card-style`)}
                  className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-200"
                >
                  <Copy size={16} />
                  {copiedKey === `${song.id}:card-style` ? 'Copied' : 'Style'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    song.lyrics
                      ? copyToClipboard(song.lyrics, 'Lyrics', `${song.id}:card-lyrics`)
                      : copyToClipboard(song.stylePrompt, 'Style prompt', `${song.id}:card-style-fallback`)
                  }
                  className="border-l border-zinc-800 px-3 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-200"
                  disabled={!song.lyrics}
                >
                  {copiedKey === `${song.id}:card-lyrics`
                    ? 'Copied'
                    : song.lyrics
                      ? 'Lyrics'
                      : 'No lyrics'}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-10 text-center text-zinc-400">
            No songs match the current filters.
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-20 lg:self-start">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-400">
          <SlidersHorizontal size={17} />
          Song Workspace
        </div>
        <SongDetail song={selected} copiedKey={copiedKey} onCopy={copyToClipboard} />
      </div>
    </section>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-md border border-zinc-800 bg-black/70 px-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
      >
        <option value={allValue}>{label}: All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function uniqueValues(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}
