import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Heart, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={20} />,
      label: "Email",
      value: "theyashsisodiya@gmail.com",
      href: "mailto:theyashsisodiya@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={20} />,
      label: "Phone",
      value: "+91-7389022061",
      href: "tel:+917389022061"
    },
    {
      icon: <Github className="text-purple-400" size={20} />,
      label: "GitHub",
      value: "github.com/theyashsisodiya",
      href: "https://github.com/theyashsisodiya"
    },
    {
      icon: <Linkedin className="text-cyan-400" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/theyashsisodiya",
      href: "https://linkedin.com/in/theyashsisodiya"
    }
  ];

  const specializations = [
    "• AI Automation & N8n",
    "• Cloud Platforms (GCP, AWS)",
    "• DevOps & CI/CD",
    "• LLM API Integration",
    "• Technical Leadership"
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Leadership", href: "#leadership" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on AI automation, DevOps, or cloud projects? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation 
                about technology and innovation. Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">{contact.icon}</div>
                    <div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-gray-400 text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-4">
                Whether it's AI automation, cloud architecture, or DevOps optimization, 
                I'm excited to bring innovative solutions to your next project.
              </p>
              <p className="text-white font-medium">Let's start the conversation!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Technical Discussion">Technical Discussion</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Yashraj Singh Sisodiya</h4>
              <p className="text-gray-400 mb-4">
                AI Automation Engineer passionate about DevOps, Cloud Technologies, 
                and building innovative solutions that make a difference.
              </p>
              <p className="text-blue-400 font-medium">
                Building the future, one automation at a time
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Specializations</h4>
              <div className="space-y-1">
                {specializations.map((spec, index) => (
                  <p key={index} className="text-gray-400 text-sm">{spec}</p>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-1">
                  <strong>Location:</strong> Indore, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Yashraj Singh Sisodiya. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500" />{' '}
              and lots of{' '}
              <Coffee className="inline w-4 h-4 text-orange-500" />
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-blue-400 text-sm mt-2">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;