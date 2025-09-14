import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      period: "2021 - June 2025",
      status: "Graduated",
      icon: <GraduationCap className="text-blue-400" size={24} />
    },
    {
      degree: "Higher Secondary",
      field: "Science",
      institution: "Ascent Public High School",
      period: "2021",
      status: "Completed",
      icon: <BookOpen className="text-purple-400" size={24} />
    },
    {
      degree: "Secondary School",
      field: "All Subjects",
      institution: "Ascent Public High School",
      period: "2019",
      status: "Completed",
      icon: <Award className="text-green-400" size={24} />
    }
  ];

  const highlights = [
    "Technical Leadership",
    "Project Excellence",
    "Industry Experience"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Educational <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'Graduated' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                      
                      <h4 className="text-lg text-blue-400 font-medium mb-2">{item.field}</h4>
                      <p className="text-gray-300 mb-4">{item.institution}</p>
                      
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-bold text-white mb-2">{highlight}</h3>
              <p className="text-gray-400 text-sm">
                {index === 0 && "Led multiple technical clubs and organized tech events"}
                {index === 1 && "Developed real-world applications and automation systems"}
                {index === 2 && "Completed internships at leading tech companies"}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Learning Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              "Education is not just about acquiring knowledge, but about developing the ability to think critically, 
              solve complex problems, and continuously adapt to emerging technologies. My journey has been focused 
              on building a strong foundation while staying current with industry trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;