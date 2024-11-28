import { memo } from 'react';
import { motion } from 'framer-motion';
import { useAdsense } from '../hooks/useAdsense';
import { ADSENSE_CONFIG } from '../utils/constants';

interface AdUnitProps {
  slot?: string;
  layout?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

function AdUnit({
  slot = ADSENSE_CONFIG.slots.inArticle,
  layout = 'in-article',
  format = 'fluid',
  className = ''
}: AdUnitProps) {
  const adRef = useAdsense({
    client: ADSENSE_CONFIG.client,
    slot,
    layout,
    format,
    responsive: true
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-[280px] ${className}`}
    >
      <div 
        ref={adRef}
        className="w-full h-full"
        aria-label="Advertisement"
      />
    </motion.div>
  );
}

export default memo(AdUnit);