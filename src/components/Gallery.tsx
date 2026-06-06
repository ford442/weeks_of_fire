import { useMemo, useState } from 'react';
import { Copy, Film, Search, SlidersHorizontal } from 'lucide-react';
import { filmScenes, type FilmScene } from '../data/films';
import Lightbox from './Lightbox';
import PromptCard from './PromptCard';

const allValue = 'All';

export default function Gallery() {
  const [selected, setSelected] = useState<FilmScene>(filmScenes[0]);
  const [lightboxScene, setLightboxScene] = useState<FilmScene | null>(null);
  const [query, setQuery] = useState('');
  const [episode, setEpisode] = useState(allValue);
  const [theme, setTheme] = useState(allValue);
  const [musicStyle, setMusicStyle] = useState(allValue);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filters = useMemo(
    () => ({
      episodes: uniqueValues(filmScenes.map((scene) => scene.episode)),
      themes: uniqueValues(filmScenes.map((scene) => scene.theme)),
      musicStyles: uniqueValues(filmScenes.map((scene) => scene.musicStyle)),
    }),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return filmScenes.filter((scene) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          scene.title,
          scene.episode,
          scene.prompt,
          scene.description,
          scene.theme,
          scene.musicCue,
          scene.musicStyle,
          scene.tags.join(' '),
        ]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return (
        matchesSearch &&
        (episode === allValue || scene.episode === episode) &&
        (theme === allValue || scene.theme === theme) &&
        (musicStyle === allValue || scene.musicStyle === musicStyle)
      );
    });
  }, [episode, musicStyle, query, theme]);

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
    <main className="min-h-screen bg-[#090909] text-white">
      <section className="border-b border-zinc-850 bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.18),_transparent_34%),linear-gradient(135deg,_#121212_0%,_#090909_58%,_#1b1010_100%)]">
        <div className="mx-auto flex min-h-[36vh] max-w-7xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
              <Film size={15} />
              Grok Imagine Archive
            </p>
            <h1 className="text-5xl font-semibold leading-none text-white sm:text-7xl">
              Weeks on Fire
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              A copy-ready production gallery for short-film stills, prompt variations, scene
              notes, and Minimax music cues.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
        <div className="space-y-5">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
            <div className="grid gap-3 lg:grid-cols-[minmax(220px,1fr)_180px_180px_210px]">
              <label className="relative block">
                <span className="sr-only">Search prompts, titles, and tags</span>
                <Search
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search prompts, scenes, music..."
                  className="h-11 w-full rounded-md border border-zinc-800 bg-black/70 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
                />
              </label>
              <FilterSelect label="Episode" value={episode} options={filters.episodes} onChange={setEpisode} />
              <FilterSelect label="Theme" value={theme} options={filters.themes} onChange={setTheme} />
              <FilterSelect
                label="Music Style"
                value={musicStyle}
                options={filters.musicStyles}
                onChange={setMusicStyle}
              />
            </div>
          </div>

          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {filtered.map((scene) => (
              <article
                key={scene.id}
                className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 transition hover:-translate-y-0.5 hover:border-orange-500/70"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelected(scene);
                    setLightboxScene(scene);
                  }}
                  className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
                >
                  <img src={scene.imageUrl} alt={scene.title} className="w-full object-cover" />
                  <div className="space-y-3 p-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                        {scene.episode}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold leading-tight text-white">
                        {scene.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-6 text-zinc-400">{scene.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {scene.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
                <div className="grid grid-cols-2 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(scene.prompt, 'Prompt', `${scene.id}:card-prompt`)}
                    className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-200"
                  >
                    <Copy size={16} />
                    {copiedKey === `${scene.id}:card-prompt` ? 'Copied' : 'Prompt'}
                  </button>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(scene.imageUrl, 'Image URL', `${scene.id}:card-url`)}
                    className="border-l border-zinc-800 px-3 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-200"
                  >
                    {copiedKey === `${scene.id}:card-url` ? 'Copied' : 'Image URL'}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-10 text-center text-zinc-400">
              No scenes match the current filters.
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-400">
            <SlidersHorizontal size={17} />
            Prompt Workspace
          </div>
          <PromptCard scene={selected} copiedKey={copiedKey} onCopy={copyToClipboard} />
        </div>
      </section>

      {lightboxScene && (
        <Lightbox
          scene={lightboxScene}
          copiedKey={copiedKey}
          onClose={() => setLightboxScene(null)}
          onCopy={copyToClipboard}
        />
      )}
    </main>
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
