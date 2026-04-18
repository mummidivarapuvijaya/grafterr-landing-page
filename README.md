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

## Screenshots

Add screenshots of the hero and features sections here before submitting (as required by the assessment).

<img width="1885" height="974" alt="image" src="https://github.com/user-attachments/assets/23d48d85-26e8-4907-826a-ff956d8215f9" />

<img width="1895" height="965" alt="image" src="https://github.com/user-attachments/assets/6a831f81-2895-4473-be58-b4e4426d3d8f" />

