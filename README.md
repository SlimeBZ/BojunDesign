# Bojun Design — TouchDesigner visuals

Minimal, monochrome portfolio built with Vite + React + TypeScript, React Router, Tailwind CSS, and Framer Motion. Configured for GitHub Pages deployment at `https://slimebz.github.io/bojundesign/`.

## Commands

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm run preview # preview the build
npm run deploy  # publish dist to GitHub Pages
```

## Notes
- Router uses `BrowserRouter` with `basename="/bojundesign"`.
- Tailwind is configured for IBM Plex Mono and a black/white aesthetic.
- No binary media is stored in the repo; project thumbnails use dynamic dummyimage.com placeholders and demo loops stream from Coverr. Empty `public/media` and `public/thumbs` directories remain for future assets.
