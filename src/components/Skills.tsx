import React, { useState, useEffect } from 'react';
import { Zap, Cloud, Code, Settings, Database, Globe } from 'lucide-react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const Skills = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, prefersReducedMotion } = useDeviceDetection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "Automation & Orchestration",
      skills: ["N8n (project experience)", "Make.com (familiar)", "Zapier (familiar)"]
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "AI / LLM & APIs",
      skills: ["Gemini API", "OpenAI API", "Prompt Engineering", "Workflow Integration"]
    },
    {
      icon: <Cloud className="text-green-400" size={24} />,
      title: "Cloud Platforms",
      skills: ["Google Cloud Platform", "AWS", "Deployment", "Storage & Compute Services"]
    },
    {
      icon: <Settings className="text-orange-400" size={24} />,
      title: "DevOps & Tools",
      skills: ["Docker", "Jenkins", "Git", "Linux", "Terraform"]
    },
    {
      icon: <Globe className="text-cyan-400" size={24} />,
      title: "Languages & Web",
      skills: ["Python", "REST APIs", "Webhooks", "JSON", "Data Mapping"]
    },
    {
      icon: <Database className="text-pink-400" size={24} />,
      title: "Other",
      skills: ["CI/CD Pipelines", "API Integration", "Testing", "Documentation"]
    }
  ];

  const proficiencyLevels = [
    { skill: "N8n Automation", level: 90 },
    { skill: "AI/LLM APIs", level: 88 },
    { skill: "Cloud Platforms", level: 85 },
    { skill: "DevOps Tools", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for AI automation, cloud infrastructure, and DevOps excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-4 sm:p-6 rounded-xl bg-white/5 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'} border border-white/10 hover:bg-white/10 transition-all duration-300 will-change-transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-white ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out will-change-transform"
                    style={{ 
                      width: (isVisible && !prefersReducedMotion) ? `${item.level}%` : '0%',
                      transform: 'translateZ(0)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;