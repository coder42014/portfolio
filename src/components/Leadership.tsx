import React from 'react';
import { Users, Trophy, Target, Calendar, MapPin } from 'lucide-react';

const Leadership = () => {
  const roles = [
    {
      title: "Club Head",
      organization: "MLSA Club",
      period: "Jan 15, 2024 - Present",
      status: "Current",
      description: "Organize workshops and events on Microsoft tools & cloud technologies",
      achievements: [
        "Organized 10+ workshops on Microsoft Azure and cloud technologies",
        "Led a team of 15+ members in technical initiatives",
        "Increased club engagement by 300% through innovative events",
        "Established partnerships with local tech companies"
      ],
      icon: <Users className="text-blue-400" size={24} />
    },
    {
      title: "Technical Lead → Club Secretary",
      organization: "Abhyudaya Coding Club",
      period: "Dec 2023 - May 2025",
      status: "Completed",
      description: "Led technical projects, hackathons, and mentored juniors",
      achievements: [
        "Developed College NOT App for student notifications",
        "Created Bus Tracking App for campus transportation",
        "Built College Jagat App for campus information",
        "Mentored 50+ junior students in programming"
      ],
      icon: <Target className="text-purple-400" size={24} />
    },
    {
      title: "Cloud Lead",
      organization: "GDSC Club",
      period: "Jun 2023 - Aug 2024",
      status: "Completed",
      description: "Hosted hands-on GCP sessions, delivered Google Cloud & AI talks",
      achievements: [
        "Conducted 20+ hands-on Google Cloud Platform sessions",
        "Delivered technical talks on AI and machine learning",
        "Organized Google Developer events and workshops",
        "Built community of 100+ cloud enthusiasts"
      ],
      icon: <Trophy className="text-green-400" size={24} />
    }
  ];

  const projects = [
    {
      title: "College NOTE App",
      description: "Student notification system for college announcements",
      impact: "500+ active users"
    },
    {
      title: "Bus Tracking App",
      description: "Real-time campus transportation tracking",
      impact: "80% reduction in wait times"
    },
    {
      title: "College Jagat App",
      description: "Comprehensive campus information platform",
      impact: "90% student adoption rate"
    }
  ];

  const stats = [
    { value: "100+", label: "Students Mentored" },
    { value: "10+", label: "Events Organized" },
    { value: "3", label: "Major Apps Developed" }
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Leadership & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leading technical communities, organizing impactful events, and mentoring the next generation of developers
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-8">
              {roles.map((role, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {role.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{role.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          role.status === 'Current' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {role.status}
                        </div>
                      </div>
                      
                      <h4 className="text-lg text-blue-400 font-medium mb-2">{role.organization}</h4>
                      <p className="text-gray-300 mb-4">{role.description}</p>
                      
                      <div className="flex items-center gap-2 text-gray-400 mb-6">
                        <Calendar size={16} />
                        <span>{role.period}</span>
                      </div>

                      <div>
                        <h5 className="text-white font-medium mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {role.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-gray-400 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Projects Delivered</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Leadership Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;