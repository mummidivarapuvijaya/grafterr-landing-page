import { useState, useEffect, useCallback } from 'react';
import {
  fetchHeroContent,
  fetchFeaturesContent,
  resetContentCache,
  FALLBACK_UI,
} from '../services/api';

export function useContent() {
  const [status, setStatus] = useState('loading');
  const [heroBundle, setHeroBundle] = useState(null);
  const [features, setFeatures] = useState(null);

  const load = useCallback(async () => {
    setStatus('loading');
    try {
      const [heroData, featuresData] = await Promise.all([
        fetchHeroContent(),
        fetchFeaturesContent(),
      ]);
      setHeroBundle(heroData);
      setFeatures(featuresData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const retry = useCallback(() => {
    resetContentCache();
    load();
  }, [load]);

  const ui = heroBundle?.ui ?? FALLBACK_UI;

  return { status, heroBundle, features, retry, ui };
}
