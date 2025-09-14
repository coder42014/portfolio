import React, { Suspense, memo } from 'react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

// Lazy load Spline only when needed
const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface OptimizedSplineProps {
  scene: string;
  className?: string;
}

const SplineFallback = memo(() => (
  <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/10 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
  </div>
));

SplineFallback.displayName = 'SplineFallback';

const MobileSplineFallback = memo(() => (
  <div className="w-full h-full relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/20"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.3),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_70%)]"></div>
    
    {/* Floating particles */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-float"></div>
    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float-slow"></div>
  </div>
));

MobileSplineFallback.displayName = 'MobileSplineFallback';

const OptimizedSpline = memo<OptimizedSplineProps>(({ scene, className = '' }) => {
  const { isMobile, prefersReducedMotion } = useDeviceDetection();

  // Use static fallback on mobile or when user prefers reduced motion
  if (isMobile || prefersReducedMotion) {
    return <MobileSplineFallback />;
  }

  return (
    <Suspense fallback={<SplineFallback />}>
      <Spline 
        scene={scene}
        className={className}
        style={{ width: '100%', height: '100%' }}
      />
    </Suspense>
  );
});

OptimizedSpline.displayName = 'OptimizedSpline';

export default OptimizedSpline;