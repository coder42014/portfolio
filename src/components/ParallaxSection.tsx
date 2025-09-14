import React, { memo, ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxSection = memo<ParallaxSectionProps>(({ 
  children, 
  speed = 0.3, 
  direction = 'up', 
  className = '' 
}) => {
  const { isMobile, prefersReducedMotion } = useDeviceDetection();
  const { ref, inViewRef } = useParallax({ 
    speed, 
    direction, 
    disabled: isMobile || prefersReducedMotion 
  });

  return (
    <div 
      ref={(node) => {
        if (node) {
          ref.current = node;
          inViewRef(node);
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
});

ParallaxSection.displayName = 'ParallaxSection';

export default ParallaxSection;