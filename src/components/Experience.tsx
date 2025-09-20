import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const Experience = React.memo(() => {
  const { count: count50, elementRef: ref50 } = useCountUp({ end: 50 });
  const { count: count25, elementRef: ref25 } = useCountUp({ end: 25 });
  const { count: count100, elementRef: ref100 } = useCountUp({ end: 100 });

  const achievements = [
    { value: "50%", label: "Reduction in deployment time through CI/CD optimization", count: count50, ref: ref50 },
    { value: "25%", label: "Improvement in system reliability through containerization", count: count25, ref: ref25 },
    { value: "100%", label: "Successful completion of real-world cloud projects", count: count100, ref: ref100 }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world experience in cloud infrastructure, DevOps practices, and automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">AWS Cloud & DevOps Intern</h3>
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        Current
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-blue-400 font-medium mb-4">
                      DesiredSoft Internet & Software Solution Pvt. Ltd.
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Feb 2025 – May 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Remote</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300">
                        Assisted in building and optimizing CI/CD pipelines for application deployment on AWS
                      </p>
                      <p className="text-gray-300">
                        Troubleshooting Docker container issues, improving build stability and reducing deployment errors
                      </p>
                      <p className="text-gray-300">
                        Collaborated with the DevOps team to manage AWS services and ensure smooth workflow integration
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["AWS", "CI/CD", "Docker", "DevOps", "Pipeline Optimization"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                ref={achievement.ref}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {achievement.count}%
                </div>
                <p className="text-gray-400 text-sm">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;