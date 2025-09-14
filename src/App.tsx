import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Leadership = lazy(() => import('./components/Leadership'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Leadership />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;