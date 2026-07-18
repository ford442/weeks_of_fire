import type { ReactNode } from 'react';
import { Film, Music2 } from 'lucide-react';

export type SiteView = 'gallery' | 'songs';

interface SiteHeaderProps {
  view: SiteView;
  onViewChange: (view: SiteView) => void;
}

export default function SiteHeader({ view, onViewChange }: SiteHeaderProps) {
  const isGallery = view === 'gallery';

  return (
    <section className="border-b border-zinc-850 bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.18),_transparent_34%),linear-gradient(135deg,_#121212_0%,_#090909_58%,_#1b1010_100%)]">
      <div className="mx-auto flex min-h-[36vh] max-w-7xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
            {isGallery ? <Film size={15} /> : <Music2 size={15} />}
            {isGallery ? 'Grok Imagine Archive' : 'Minimax Music Catalog'}
          </p>
          <h1 className="text-5xl font-semibold leading-none text-white sm:text-7xl">Weeks on Fire</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            {isGallery
              ? 'A copy-ready production gallery for short-film stills, prompt variations, scene notes, and Minimax music cues.'
              : 'Browse the series soundtrack — Minimax style prompts, lyrics, episode ties, and copy-ready generation notes.'}
          </p>

          <nav
            aria-label="Site sections"
            className="mt-8 inline-flex rounded-lg border border-zinc-800 bg-black/40 p-1"
          >
            <TabButton active={isGallery} onClick={() => onViewChange('gallery')}>
              <Film size={16} />
              Visual Archive
            </TabButton>
            <TabButton active={!isGallery} onClick={() => onViewChange('songs')}>
              <Music2 size={16} />
              Songs
            </TabButton>
          </nav>
        </div>
      </div>
    </section>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${
        active
          ? 'bg-orange-600 text-white shadow-sm shadow-orange-900/40'
          : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
