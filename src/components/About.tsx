import React from 'react';
import { Code, Cloud, Cpu, Zap } from 'lucide-react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const About = React.memo(() => {
  const { isMobile } = useDeviceDetection();

  const highlights = [
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "AI Automation",
      description: "Expertise in N8n workflows and LLM API integration"
    },
    {
      icon: <Cloud className="text-purple-400" size={24} />,
      title: "Cloud & DevOps",
      description: "AWS, GCP, Docker, and CI/CD pipeline optimization"
    },
    {
      icon: <Cpu className="text-green-400" size={24} />,
      title: "LLM Integration",
      description: "OpenAI, Gemini API integration and prompt engineering"
    },
    {
      icon: <Code className="text-orange-400" size={24} />,
      title: "Technical Leadership",
      description: "Leading tech clubs and mentoring 100+ students"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about contributing to AI agent development and process automation, 
            bringing innovative solutions to complex technical challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl bg-white/5 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'} border border-white/10 hover:bg-white/10 transition-all duration-300 will-change-transform hover:scale-105`}>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a graduated AI Automation Engineer with a strong foundation in DevOps and Cloud Technologies. 
                My journey began with a passion for automation and has evolved into expertise in AI-powered workflows 
                and cloud infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through internships at DesiredSoft and leadership roles in multiple tech clubs, I've gained 
                practical experience in building scalable solutions and mentoring the next generation of developers.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl bg-white/5 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'} border border-white/10 hover:bg-white/10 transition-all duration-300 will-change-transform hover:scale-105`}>
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in creating intelligent automation workflows that bridge the gap between AI capabilities 
                and real-world business processes. My work focuses on making complex technologies accessible and 
                practical for everyday use.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`p-4 sm:p-6 rounded-xl bg-white/5 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'} border border-white/10 hover:bg-white/10 transition-all duration-300 will-change-transform hover:scale-105`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className={`inline-flex flex-wrap items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'} border border-white/10 will-change-transform hover:scale-105 transition-transform duration-300`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Students Mentored</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-sm text-gray-400">Leadership Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;