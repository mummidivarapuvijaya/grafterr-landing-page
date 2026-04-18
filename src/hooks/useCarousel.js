import { useState, useEffect, useCallback } from 'react';

const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

function resolveVisible(width, config) {
  if (width < BREAKPOINT_TABLET) return config.mobile;
  if (width < BREAKPOINT_DESKTOP) return config.tablet;
  return config.desktop;
}

export function useCarousel(itemCount, itemsPerViewConfig) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(() =>
    resolveVisible(
      typeof window !== 'undefined' ? window.innerWidth : BREAKPOINT_DESKTOP,
      itemsPerViewConfig
    )
  );

  useEffect(() => {
    const onResize = () => {
      setVisible(resolveVisible(window.innerWidth, itemsPerViewConfig));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [itemsPerViewConfig]);

  const maxIndex = Math.max(0, itemCount - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const canNext = index < maxIndex;
  const canPrev = index > 0;

  return {
    index,
    visible,
    next,
    prev,
    canNext,
    canPrev,
  };
}
