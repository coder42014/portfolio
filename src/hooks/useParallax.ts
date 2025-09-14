import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', disabled = false } = options;
  const elementRef = useRef<HTMLElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    rootMargin: '100px 0px',
  });

  useEffect(() => {
    if (disabled || !inView) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      const yPos = direction === 'up' ? -rate : rate;
      
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, disabled, inView]);

  return { ref: elementRef, inViewRef };
};