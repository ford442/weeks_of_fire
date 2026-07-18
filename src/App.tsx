import { useState } from 'react';
import Gallery from './components/Gallery';
import SiteHeader, { type SiteView } from './components/SiteHeader';
import Songs from './components/Songs';

export default function App() {
  const [view, setView] = useState<SiteView>('gallery');

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <SiteHeader view={view} onViewChange={setView} />
      {view === 'gallery' ? <Gallery /> : <Songs />}
    </main>
  );
}
