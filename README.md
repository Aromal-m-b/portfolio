# Aromal MB — React Portfolio

A React + Vite portfolio with a full-width introduction, filterable project cards, a resume timeline, an inline resume preview, and contact links. Preserves the original charcoal / amber palette and interactive WebGL2 retro terminal. No personal photographs are displayed.

## Run locally

Requires Node.js 22.12+ or 24+.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The generated `dist/` directory can be served by any static host. Asset URLs use a relative base to support GitHub Pages project paths.

## Source

- `src/App.jsx`: landing page sections, mobile navigation, project filters, resume preview, and terminal toggle.
- `src/projects.js`: six project descriptions and repository links.
- `src/retro/createRetroTerminal.js`: original WebGL renderer adapted to a disposable React lifecycle, including terminal commands and project shortcuts.
- `src/styles.css`: desktop and mobile layouts in the original color palette.
- `public/`: original audio, downloadable resume, and a rendered resume preview. The preview image should be regenerated when the PDF changes.

Use the arrow button to switch views. In the terminal, type `help`, `ls`, `start about.txt`, or `cd projects` followed by `ls`. Tab completes commands; Shift+Tab moves keyboard focus out of the terminal.

## Credits and license

Original visual design, WebGL renderer, model, and audio: [Charlie Ashton / LuckeyDuckey](https://github.com/LuckeyDuckey/luckeyduckey.github.io). Adapted into React and personalized for Aromal MB. The original MIT copyright notice is retained in `LICENSE`.

This repository uses a fresh history. The initial commit preserves the personalized static version; the following commit contains the React conversion. Attribution does not add the original authors as Git commit contributors or repository collaborators.

## Landing page design

The section-based layout and paired experience/education timeline are inspired by [Ajnas Thayyil’s portfolio](https://github.com/Ajnasthayyil/myportfolio). The landing page is implemented in React with original CSS and photo-free project artwork; no assets or template source from that repository are shipped. The computer renderer is unchanged from the preceding React version.
