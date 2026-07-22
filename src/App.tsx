import { useState } from 'react';
import { Film, Clock, Download, RefreshCw } from 'lucide-react';

import Gallery from './components/Gallery';
import SceneTimeline from './components/SceneTimeline';
import SceneEditorModal from './components/SceneEditorModal';

import type { EpisodeProduction, ProductionScene } from './data/production';
import { createEmptyScene } from './data/production';

// Static import of production data (works great with Vite + GitHub Pages)
import ep01Raw from '../episodes/episode-01/scenes.json';

const INITIAL_EP01: EpisodeProduction = ep01Raw as EpisodeProduction;

type View = 'gallery' | 'timeline' | 'episodes';

export default function App() {
  const [view, setView] = useState<View>('timeline'); // Default to the new production view
  const [production, setProduction] = useState<EpisodeProduction>(INITIAL_EP01);
  const [editingScene, setEditingScene] = useState<ProductionScene | null>(null);
  const [isNewScene, setIsNewScene] = useState(false);

  // --- Editing handlers (in-memory + export to persist) ---
  const handleEditScene = (scene: ProductionScene) => {
    setIsNewScene(false);
    setEditingScene(scene);
  };

  const handleAddScene = () => {
    const nextOrder = Math.max(0, ...production.scenes.map((s) => s.order)) + 1;
    const newScene = createEmptyScene(nextOrder);
    setIsNewScene(true);
    setEditingScene(newScene);
  };

  const handleSaveScene = (updated: ProductionScene) => {
    setProduction((prev) => {
      const exists = prev.scenes.some((s) => s.id === updated.id);

      let newScenes: ProductionScene[];
      if (exists) {
        newScenes = prev.scenes.map((s) => (s.id === updated.id ? updated : s));
      } else {
        newScenes = [...prev.scenes, updated].sort((a, b) => a.order - b.order);
      }

      return {
        ...prev,
        scenes: newScenes,
        lastUpdated: new Date().toISOString(),
      };
    });
    setEditingScene(null);
    setIsNewScene(false);
  };

  const handleCloseEditor = () => {
    setEditingScene(null);
    setIsNewScene(false);
  };

  // Export current production state as downloadable scenes.json
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(production, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `episode-${production.episode}-scenes.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Reset to the committed file data (useful after testing edits)
  const handleResetToFile = () => {
    setProduction(INITIAL_EP01);
  };

  // Simple "Export to clip_stacker" stub
  const handleExportToClipStacker = () => {
    const clipStackerPayload = {
      project: production.title,
      version: 'weeks_on_fire_v1',
      exportedAt: new Date().toISOString(),
      clips: production.scenes.map((s) => ({
        id: s.id,
        title: s.title,
        timestamp: s.timestamp,
        order: s.order,
        status: s.status,
        mediaUrl: s.mediaUrl || null,
        description: s.description,
        // clip_stacker can later use in/out + trim data
      })),
      episodeHistory: production.episodeHistory,
    };

    const blob = new Blob([JSON.stringify(clipStackerPayload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clip-stacker-${production.episode}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Top Nav / Production Hub Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#090909]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-orange-400">
              <Film size={20} />
              <span className="font-semibold tracking-wide">WEEKS ON FIRE</span>
            </div>
            <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">PRODUCTION HUB</span>
          </div>

          <nav className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1 text-sm">
            <TabButton active={view === 'gallery'} onClick={() => setView('gallery')}>
              Gallery
            </TabButton>
            <TabButton active={view === 'timeline'} onClick={() => setView('timeline')}>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} /> Timeline
              </span>
            </TabButton>
            <TabButton active={view === 'episodes'} onClick={() => setView('episodes')}>
              Episodes
            </TabButton>
          </nav>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleResetToFile}
              className="flex items-center gap-1.5 rounded border border-zinc-800 px-2.5 py-1 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-200"
              title="Reset to committed scenes.json"
            >
              <RefreshCw size={14} /> Reset
            </button>
            <button
              onClick={handleExportToClipStacker}
              className="flex items-center gap-1.5 rounded border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-orange-300 transition hover:bg-zinc-900"
              title="Export starter data for clip_stacker"
            >
              <Download size={14} /> Export to clip_stacker
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {view === 'gallery' && <Gallery />}

        {view === 'timeline' && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm text-zinc-400">
                Track scene creation, prompt evolution, media links, and status changes. All edits here are local — use <strong>Export JSON</strong> to save back into <code>episodes/episode-01/scenes.json</code> and commit.
              </p>
            </div>

            <SceneTimeline
              production={production}
              onEditScene={handleEditScene}
              onAddScene={handleAddScene}
              onExport={handleExportJSON}
            />
          </div>
        )}

        {view === 'episodes' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Episodes</h2>
              <p className="mt-1 text-sm text-zinc-400">Production metadata &amp; timeline data (scenes.json driven)</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <EpisodeCard
                episode="01"
                title="Episode 01 — The Burning Town"
                status="Active"
                scenesCount={production.scenes.length}
                lastUpdated={production.lastUpdated}
                onViewTimeline={() => setView('timeline')}
              />
              <EpisodeCard
                episode="02"
                title="Episode 02"
                status="Synopsis"
                scenesCount={0}
                lastUpdated="—"
                onViewTimeline={() => alert('scenes.json not yet created for Episode 02')}
              />
              <EpisodeCard
                episode="03"
                title="Episode 03 — Laser Snakes"
                status="In Progress"
                scenesCount={5}
                lastUpdated="2026-05"
                onViewTimeline={() => alert('Migrate episode-03/scenes.md → scenes.json to enable full timeline')}
              />
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-sm text-zinc-400">
              Future: clicking an episode will load its <code>scenes.json</code> and switch the Timeline to that episode.
              For now Episode 01 is fully wired with editable production history.
            </div>
          </div>
        )}
      </div>

      {/* Editor Modal */}
      <SceneEditorModal
        scene={editingScene}
        isNew={isNewScene}
        onClose={handleCloseEditor}
        onSave={handleSaveScene}
      />
    </main>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
        active
          ? 'bg-orange-600 text-white'
          : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

interface EpisodeCardProps {
  episode: string;
  title: string;
  status: string;
  scenesCount: number;
  lastUpdated: string;
  onViewTimeline: () => void;
}

function EpisodeCard({ episode, title, status, scenesCount, lastUpdated, onViewTimeline }: EpisodeCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            Episode {episode}
          </div>
          <div className="mt-1 text-xl font-semibold">{title}</div>
        </div>
        <span className="rounded bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">{status}</span>
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm text-zinc-400">
        <div>{scenesCount} scenes</div>
        <div>Last: {lastUpdated}</div>
      </div>

      <button
        onClick={onViewTimeline}
        className="mt-4 w-full rounded-md border border-zinc-700 py-2 text-sm font-semibold transition hover:bg-zinc-900 hover:text-orange-200"
      >
        View Production Timeline
      </button>
    </div>
  );
}
