import { useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';

import Characters from './components/Characters';
import DaisyBell from './components/DaisyBell';
import Gallery from './components/Gallery';
import SceneTimeline from './components/SceneTimeline';
import SceneEditorModal from './components/SceneEditorModal';
import SiteHeader, { type SiteView } from './components/SiteHeader';
import Songs from './components/Songs';
import Staff from './components/Staff';
import Suggestions from './components/Suggestions';

import type { EpisodeProduction, ProductionScene } from './data/production';
import { createEmptyScene } from './data/production';

// Static import of production data (works great with Vite + GitHub Pages)
import ep01Raw from '../episodes/episode-01/scenes.json';

const INITIAL_EP01: EpisodeProduction = ep01Raw as EpisodeProduction;

export default function App() {
  const [view, setView] = useState<SiteView>('gallery');
  const [production, setProduction] = useState<EpisodeProduction>(INITIAL_EP01);
  const [editingScene, setEditingScene] = useState<ProductionScene | null>(null);
  const [isNewScene, setIsNewScene] = useState(false);

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

  const handleResetToFile = () => {
    setProduction(INITIAL_EP01);
  };

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
      <SiteHeader view={view} onViewChange={setView} />

      {view === 'gallery' && <Gallery />}

      {view === 'timeline' && (
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-sm text-zinc-400">
                Track scene creation, prompt evolution, media links, and status changes. All edits here
                are local — use <strong>Export JSON</strong> to save back into{' '}
                <code>episodes/episode-01/scenes.json</code> and commit.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={handleResetToFile}
                className="flex items-center gap-1.5 rounded border border-zinc-800 px-2.5 py-1 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-200"
                title="Reset to committed scenes.json"
              >
                <RefreshCw size={14} /> Reset
              </button>
              <button
                type="button"
                onClick={handleExportToClipStacker}
                className="flex items-center gap-1.5 rounded border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-orange-300 transition hover:bg-zinc-900"
                title="Export starter data for clip_stacker"
              >
                <Download size={14} /> Export to clip_stacker
              </button>
            </div>
          </div>

          <SceneTimeline
            production={production}
            onEditScene={handleEditScene}
            onAddScene={handleAddScene}
            onExport={handleExportJSON}
          />
        </div>
      )}

      {view === 'songs' && <Songs />}
      {view === 'daisy-bell' && <DaisyBell />}
      {view === 'suggestions' && <Suggestions />}
      {view === 'characters' && <Characters />}
      {view === 'staff' && <Staff />}

      <SceneEditorModal
        scene={editingScene}
        isNew={isNewScene}
        onClose={handleCloseEditor}
        onSave={handleSaveScene}
      />
    </main>
  );
}
