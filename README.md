# Weeks on Fire

**AI-generated short-film series** blending musical cutaways (Minimax Music) with visuals from **Grok Imagine / xAI** — plus an open production hub for stills, prompts, screenplays, and soundtrack notes.

## Live production hub

**https://ford442.github.io/weeks_on_fire**

React + Vite gallery with four views:

| View | What you get |
|------|----------------|
| **Visual Archive** | Grok Imagine stills, prompt variations, music cues |
| **Production Timeline** | Scene status, exportable production JSON |
| **Songs** | Minimax catalog — style prompts, lyrics, episode ties |
| **Staff** | Fictional series crew bios |

Agent-friendly files on the live site: [`/llms.txt`](https://ford442.github.io/weeks_on_fire/llms.txt) · [`/llms-full.txt`](https://ford442.github.io/weeks_on_fire/llms-full.txt) · [`/sitemap.xml`](https://ford442.github.io/weeks_on_fire/sitemap.xml)

## Episodes

All episode content lives in `episodes/`:

| Episode | Status | Files |
|---------|--------|-------|
| **Episode 1** | Synopsis + screenplay + scenes JSON | [`synopsis.md`](episodes/episode-01/synopsis.md) · [`screenplay.md`](episodes/episode-01/screenplay.md) · [`scenes.json`](episodes/episode-01/scenes.json) |
| **Episode 2** | Synopsis ready, SRT placeholder | [`synopsis.md`](episodes/episode-02/synopsis.md) · [`subtitles.srt`](episodes/episode-02/subtitles.srt) |
| **Episode 3** | Laser Snakes — most developed visuals | [`synopsis.md`](episodes/episode-03/synopsis.md) · [`scenes.md`](episodes/episode-03/scenes.md) · [`screenplay.md`](episodes/episode-03/screenplay.md) |

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # typecheck + vite build → dist/
npm run preview      # preview production build
```

Do **not** open root `index.html` with a plain static server — it is the Vite entry. Use `npm run dev` or serve `dist/` after build.

### Deploy

- **GitHub Pages**: push to `main` runs [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) (`npm ci && npm run build`, deploys `dist/`).  
  One-time: **Settings → Pages → Source = GitHub Actions**.
- **Contabo / storage**: `npm run build && python deploy.py` (uploads `dist/` as project `weeks-on-fire`).

`vite.config.ts` uses `base: './'` so the build works on project Pages (`/weeks_on_fire/`) and subdirectory hosts.

## Assets & repo size

- Prefer **external hosting** (Drive / Imgur / etc.) for large video and batch images.
- Small references, cast portraits, and selected stills may live in-repo for the gallery bundle.
- Agents and collaborators: see [`AGENTS.md`](AGENTS.md) (technical) and [`grok.md`](grok.md) (creative direction).

## Keywords

short film · AI-generated · Grok Imagine · Minimax Music · cinematic · production hub · screenplay · prompt engineering

---

Made with Grok Imagine magic ✨
