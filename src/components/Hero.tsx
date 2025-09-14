import React, { Suspense } from 'react';
import OptimizedSpline from './OptimizedSpline';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const Hero = () => {
  const { isMobile } = useDeviceDetection();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedSpline 
          scene="https://prod.spline.design/9rsQUxKv5dSR7-Lt/scene.splinecode"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 z-10 ${isMobile ? 'bg-black/60' : 'bg-black/40'}`}></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-blue-400 text-lg font-medium">Hi, I'm</div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Yashraj Singh
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Sisodiya
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Graduated AI Automation Engineer | DevOps & Cloud Enthusiast | B.Tech CSE, SVVV Indore
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  I specialize in designing AI-powered workflows using N8n, integrating LLM APIs (Gemini, OpenAI) 
                  with cloud platforms (Google Cloud, AWS), and have a strong foundation in DevOps and automation logic. 
                  My experience includes internships at DesiredSoft and leadership roles in tech clubs.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToAbout}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl will-change-transform hover:scale-105"
                >
                  Let's Connect
                </button>
                <button 
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-white/20 text-white px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 will-change-transform hover:scale-105"
                >
                  View Projects
                </button>
              </div>

              <div className="flex items-center gap-6">
                <a href="mailto:theyashsisodiya@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 will-change-transform hover:scale-110">
                  <Mail size={20} />
                </a>
                <a href="tel:+917389022061" className="text-gray-400 hover:text-white transition-colors duration-300 will-change-transform hover:scale-110">
                  <Phone size={20} />
                </a>
                <a href="https://github.com/theyashsisodiya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 will-change-transform hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/theyashsisodiya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 will-change-transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="lg:flex hidden items-center justify-center">
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 will-change-transform hover:scale-105 transition-transform duration-300">
                  <div className="text-green-400 text-sm mb-2">
                    &gt; Initializing AI Automation Systems...
                  </div>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>&gt; Cloud Infrastructure: Ready ✓</div>
                    <div>&gt; DevOps Pipeline: Active ✓</div>
                    <div>&gt; LLM APIs: Connected ✓</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-center will-change-transform hover:scale-105 transition-transform duration-300">
                    <div className="text-blue-400 text-sm font-medium">AI Automation</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-center will-change-transform hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-400 text-sm font-medium">Cloud & DevOps</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-center col-span-2 will-change-transform hover:scale-105 transition-transform duration-300">
                    <div className="text-green-400 text-sm font-medium">LLM Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToAbout}
          className="text-white/60 hover:text-white animate-bounce transition-colors duration-300 will-change-transform hover:scale-110"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;