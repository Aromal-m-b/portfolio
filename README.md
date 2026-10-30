# Aromal MB — React Portfolio

A React + Vite portfolio preserving the original charcoal / amber palette and interactive WebGL2 retro terminal. Includes six projects, experience, education, contact links, and a downloadable resume. No personal photographs are displayed.

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

- `src/App.jsx`: React sections, navigation, scroll state, and terminal toggle.
- `src/retro/createRetroTerminal.js`: original WebGL renderer adapted to a disposable React lifecycle, including terminal commands and project shortcuts.
- `src/styles.css`: desktop and mobile layouts in the original color palette.
- `public/`: social icons, audio, and the downloadable resume.

Use the arrow button to switch views. In the terminal, type `help`, `ls`, `start about.txt`, or `cd projects` followed by `ls`. Tab completes commands; Shift+Tab moves keyboard focus out of the terminal.

## Credits and license

Original visual design, WebGL renderer, model, and audio: [Charlie Ashton / LuckeyDuckey](https://github.com/LuckeyDuckey/luckeyduckey.github.io). Adapted into React and personalized for Aromal MB. The original MIT copyright notice is retained in `LICENSE`.

This repository uses a fresh history. The initial commit preserves the personalized static version; the following commit contains the React conversion. Attribution does not add the original authors as Git commit contributors or repository collaborators.
