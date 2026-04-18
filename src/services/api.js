const PUBLIC_URL = process.env.PUBLIC_URL || '';

export const FALLBACK_UI = {
  errorMessage:
    'We couldn’t load the page content. Check your connection and try again.',
  retryLabel: 'Retry',
};

function randomDelayMs() {
  return 1000 + Math.random() * 500;
}

function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, randomDelayMs());
  });
}

let contentPromise = null;

export function resetContentCache() {
  contentPromise = null;
}

function loadContentJson() {
  if (!contentPromise) {
    contentPromise = (async () => {
      await delay();
      const res = await fetch(`${PUBLIC_URL}/data/content.json`);
      if (!res.ok) {
        throw new Error('Failed to load content');
      }
      return res.json();
    })();
  }
  return contentPromise;
}

export async function fetchHeroContent() {
  const data = await loadContentJson();
  return {
    navigation: data.navigation,
    hero: data.hero,
    ui: data.ui,
  };
}

export async function fetchFeaturesContent() {
  const data = await loadContentJson();
  return data.featuresSection;
}
