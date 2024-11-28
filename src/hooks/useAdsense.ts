import { useEffect, useRef } from 'react';
import { initializeAdsense, destroyAdsense } from '../utils/adsense';

interface UseAdsenseProps {
  client: string;
  slot: string;
  layout?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

export function useAdsense({
  client,
  slot,
  layout,
  format,
  responsive
}: UseAdsenseProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for content to load before initializing ads
    const timeoutId = setTimeout(() => {
      initializeAdsense(adRef, {
        client,
        slot,
        layout,
        format,
        responsive
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (adRef.current) {
        adRef.current.innerHTML = '';
        destroyAdsense();
      }
    };
  }, [client, slot, layout, format, responsive]);

  return adRef;
}