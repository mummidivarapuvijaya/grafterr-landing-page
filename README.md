# Grafterr landing page

Front-end technical assessment implementation: a responsive, JSON-driven landing page for Grafterr (restaurant technology), built with **Create React App** (React 18+), **CSS Modules**, and **no CSS frameworks**.

## Stack

- React (functional components + hooks)
- Create React App (`react-scripts`)
- CSS Modules + shared design tokens (`src/styles/variables.css`)
- Content loaded at runtime from `public/data/content.json` via a simulated API layer (`src/services/api.js`)

## Setup

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

## Approach

- **Data / API**: `fetchHeroContent()` and `fetchFeaturesContent()` read `public/data/content.json`, share one in-memory promise cache, and apply a random **1000–1500ms** delay before resolving. `resetContentCache()` clears the cache when the user taps **Retry** after an error.
- **JSON shape (assessment)**: `navigation` (logo, links, CTA), `hero` (`headlinePrefix`, `headlineGradient`, `subheadline`, `cta`, `decorativeShapes`), `featuresSection` (`title`, `titleAccent`, `subtitle`, `products`, `carousel` with `itemsPerView`, `showArrows`, `transitionMs`, arrow `aria-label` strings). Inline emphasis in strings uses `**bold**` and is parsed at runtime (still fully data-driven).
- **Hooks**: `useContent` loads hero + features in parallel, manages loading / success / error, and exposes `retry`. `useCarousel` tracks slide index, responsive `itemsPerView` (mobile 1 / tablet 2 / desktop 3), and boundary-aware prev/next.
- **UI**: Composable pieces (`GradientText`, `GradientButton`, `EmphasisText`, `FloatingShape`, `ProductCard`, `Carousel`, skeletons) plus `HeroSection` / `FeaturesSection`. Copy and labels come from JSON (fallback UI strings in `api.js` only when JSON cannot be loaded).
- **Carousel**: `ResizeObserver` + `useLayoutEffect` measure the viewport and set slide width / `translate3d` on the track. **300ms** transition, arrows disabled at boundaries, touch swipe on mobile.
- **Visuals**: Brand gradient `linear-gradient(90deg, #3B82F6, #F97316)` for CTA and gradient text; Inter from Google Fonts.
- **Entry**: `src/index.js` (standard CRA bootstrap).

## Deployment

Build output is in `build/`. Deploy the `build` folder to **Vercel**, **Netlify**, or **GitHub Pages** (CRA works best with a static host; set the site root to `build`).

## Assumptions

- Figma was not queried programmatically; spacing, type scale, and radii are tuned to match the reference and a **max content width of 1200px**. Product imagery uses high-quality stock photos via URLs in JSON (replace with brand assets if required).
- Screenshots for “implementation vs Figma” and a live URL should be added before submission per the brief.

## Screenshots

Add screenshots of the hero and features sections here before submitting (as required by the assessment).
