import { RefObject } from 'react';

let adsInitialized = false;

export const initializeAdsense = (
  adRef: RefObject<HTMLDivElement>,
  config: {
    client: string;
    slot: string;
    layout?: string;
    format?: string;
    responsive?: boolean;
  }
): void => {
  if (!adRef.current || !config.client || !config.slot || adsInitialized) return;

  try {
    // Clean up existing content
    adRef.current.innerHTML = '';
    
    const adElement = document.createElement('ins');
    adElement.className = 'adsbygoogle';
    adElement.style.display = 'block';
    adElement.style.minHeight = '280px';
    
    adElement.dataset.adClient = config.client;
    adElement.dataset.adSlot = config.slot;
    
    if (config.layout) {
      adElement.dataset.adLayout = config.layout;
    }
    
    if (config.format) {
      adElement.dataset.adFormat = config.format;
    }
    
    if (config.responsive) {
      adElement.dataset.fullWidthResponsive = 'true';
    }

    adRef.current.appendChild(adElement);

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      adsInitialized = true;
    } catch (error) {
      console.error('AdSense push error:', error);
    }
  } catch (error) {
    console.error('AdSense initialization error:', error);
  }
};

export const destroyAdsense = (): void => {
  adsInitialized = false;
};