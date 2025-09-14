import React, { Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import ParallaxSection from './components/ParallaxSection';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Leadership = lazy(() => import('./components/Leadership'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none will-change-transform">
        <ParallaxSection speed={0.2} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <ParallaxSection speed={0.4} direction="down" className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <ParallaxSection speed={0.1} className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ParallaxSection speed={0.2}>
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.1}>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.4}>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <Suspense fallback={<LoadingSpinner />}>
            <Education />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <Suspense fallback={<LoadingSpinner />}>
            <Leadership />
          </Suspense>
        </ParallaxSection>
        <ParallaxSection speed={0.1}>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </ParallaxSection>
      </div>
    </div>
  );
}

export default App;