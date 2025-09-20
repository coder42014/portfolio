import React, { useMemo } from 'react';
import { ExternalLink, Github, Zap, BarChart3, FileText, Newspaper, FileCheck } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const Projects = React.memo(() => {
  const { count: count50, elementRef: ref50 } = useCountUp({ end: 50 });
  const { count: count25, elementRef: ref25 } = useCountUp({ end: 25 });
  const { count: count100, elementRef: ref100 } = useCountUp({ end: 100 });

  const projects = useMemo(() => [
    {
      icon: <Newspaper className="text-blue-400" size={32} />,
      title: "AI News & Job Automation",
      category: "N8n Automation Workflow",
      status: "Active",
      description: "Automated daily collection of latest AI news (past 24h) and India-based job postings for 'DevOps Intern' and 'AI Automation Intern.' Complete workflow with Cron trigger, Perplexity AI API integration, HTML email formatting with CSS, and automated delivery.",
      features: [
        "Cron trigger for daily automation",
        "Perplexity AI API integration",
        "HTML email with CSS formatting",
        "Automated job posting collection",
        "Daily AI news aggregation"
      ],
      technologies: ["N8n", "Perplexity AI API", "HTML/CSS", "Email Services", "Cron Jobs"],
      demoLink: "https://n8n.io/workflows/8346-daily-ai-news-digest-with-perplexity-ai-and-gmail-automation/",
      sourceLink: "https://n8n.io/workflows/8346-daily-ai-news-digest-with-perplexity-ai-and-gmail-automation/"
    },
    {
      icon: <FileCheck className="text-emerald-400" size={32} />,
      title: "Invoice Data Extraction & Automation System",
      category: "N8n Automation Workflow",
      status: "Active",
      description: "Developed an intelligent workflow to extract, validate, and store invoice data from uploaded invoice images/PDFs. The system ensures structured JSON formatting, prevents duplicate entries, and automates storage in Google Sheets, with integrated email notifications for success, duplicates, or errors.",
      features: [
        "AI-powered invoice data extraction using Google Gemini (Vision + LLM)",
        "Automatic JSON structuring with mandatory field validation",
        "Duplicate detection in Google Sheets with conditional logic",
        "Secure invoice file archiving in Google Drive",
        "Automated Gmail alerts for successful entries, duplicates, and missing fields"
      ],
      technologies: ["N8n", "Google Gemini API", "Google Sheets API", "Google Drive API", "Gmail API", "CustomJS (Data Validation & Transformation)", "Automation Triggers"],
      demoLink: "https://n8n.io/workflows/8548-extract-and-process-invoices-with-gemini-ai-google-sheets-and-gmail-notifications/",
      sourceLink: "https://n8n.io/workflows/8548-extract-and-process-invoices-with-gemini-ai-google-sheets-and-gmail-notifications/"
    },
    {
      icon: <FileText className="text-purple-400" size={32} />,
      title: "YouTube Video Summarizer & Transcriber",
      category: "N8n Automation Workflow",
      status: "Active",
      description: "Built an automation that accepts YouTube video links (max 30 mins), generates both summaries and full transcripts in English, and automatically logs results into Google Sheets.",
      features: [
        "Form-triggered YouTube link submission",
        "AI-based transcription & summarization (English-only)",
        "Dual output: structured summary + full transcript",
        "Automated storage in Google Sheets"
      ],
      technologies: ["N8n", "Google Gemini API", "Google Sheets API", "Automation Triggers"],
      demoLink: "https://n8n.io/workflows/8670-youtube-video-summarizer-with-gemini-ai-to-whatsapp-telegram-and-google-sheets/",
      sourceLink: "https://n8n.io/workflows/8670-youtube-video-summarizer-with-gemini-ai-to-whatsapp-telegram-and-google-sheets/"
    },
    {
      icon: <BarChart3 className="text-green-400" size={32} />,
      title: "Bakery Data Analytics Assistant",
      category: "N8n Automation Workflow",
      status: "Active",
      description: "Created an intelligent workflow for bakery sales analytics using Google Sheets. The workflow analyzes sales data via AI, generates structured insights, and provides decision-ready summaries for inventory and trends.",
      features: [
        "Automated retrieval of bakery sales data from Google Sheets",
        "AI-powered analytics with Azure OpenAI",
        "Clear, concise responses with structured breakdowns",
        "Supports trend identification, stock insights, and anomaly detection"
      ],
      technologies: ["N8n", "Google Sheets API", "Azure OpenAI API", "AI Agent Orchestration"],
      demoLink: "https://n8n.io/workflows/8344-analyze-bakery-sales-and-inventory-with-google-sheets-and-azure-gpt-chat-assistant/",
      sourceLink: "https://n8n.io/workflows/8344-analyze-bakery-sales-and-inventory-with-google-sheets-and-azure-gpt-chat-assistant/"
    },
    {
      icon: <FileCheck className="text-orange-400" size={32} />,
      title: "ATS-Friendly Resume Maker",
      category: "N8n Automation Workflow",
      status: "Active",
      description: "Developed a workflow that tailors resumes according to job descriptions and outputs ATS-optimized resumes in both HTML and PDF. Users upload their resume and job description (JD), and the workflow merges, customizes, and stores the final version in Google Drive.",
      features: [
        "Form-triggered resume + JD upload (PDF/Text)",
        "Automated PDF text extraction & content merging",
        "AI-powered resume tailoring with ATS optimization",
        "Clean HTML formatting with inline CSS",
        "Conversion to PDF and automatic upload to Google Drive"
      ],
      technologies: ["N8n", "Perplexity AI", "Google Drive API", "CustomJS (HTML-to-PDF)", "Automation Triggers"],
      demoLink: "https://n8n.io/workflows/7637-generate-job-specific-ats-resumes-with-perplexity-ai-and-pdf-export/",
      sourceLink: "https://n8n.io/workflows/7637-generate-job-specific-ats-resumes-with-perplexity-ai-and-pdf-export/"
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "CI/CD & Deployment Pipeline",
      category: "Infrastructure Project",
      status: "Completed",
      description: "Built comprehensive CI/CD pipeline using Jenkins, Docker, GitHub, and AWS for Node.js applications. Implemented automated build, test, and deployment steps with GitHub webhooks, achieving 50% reduction in deployment time and 25% improvement in system reliability.",
      features: [
        "Automated build and test processes",
        "GitHub webhooks integration",
        "Docker containerization",
        "AWS deployment automation",
        "Performance monitoring"
      ],
      technologies: ["Jenkins", "Docker", "GitHub", "AWS", "Node.js", "CI/CD"],
      demoLink: "#",
      sourceLink: "#"
    }
  ], []);

  const stats = useMemo(() => [
    { value: "50%", label: "Deployment Time Reduction", count: count50, ref: ref50 },
    { value: "25%", label: "System Reliability Improvement", count: count25, ref: ref25 },
    { value: "100%", label: "Automation Success Rate", count: count100, ref: ref100 }
  ], []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world applications demonstrating AI automation, DevOps excellence, and cloud infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 will-change-transform"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {project.icon}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 text-white rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  View Details
                </a>
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Project Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                ref={stat.ref}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.count}%
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;