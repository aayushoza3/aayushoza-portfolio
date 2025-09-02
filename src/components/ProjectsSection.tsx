import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, Zap } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Course Builder",
      timeline: "May–July 2025",
      description: "Turned LLM prompts into auto-generated full curricula in 45s with 99.9% reliability. Hardened system with FastAPI, Celery, Redis, PostgreSQL, and Docker.",
      features: [
        "Auto-curriculum generation with 99.9% reliability",
        "45-second generation time with LLM optimization",
        "Zero-downtime deployments with CI/CD pipelines",
        "Scalable architecture with Redis and PostgreSQL"
      ],
      skills: ["Python", "FastAPI", "Celery", "Redis", "NLP", "GitHub Actions", "Docker", "Next.js", "PostgreSQL"],
      icon: "🤖",
      category: "AI/ML",
      github: "https://github.com/aayushoza3/ai-course-builder",
      demo: "https://ai-course-builder-pi.vercel.app/",
      featured: true
    },
    {
      title: "Outdoors Mobile App",
      timeline: "Dec 2023–Oct 2024",
      description: "Native Kotlin + Swift apps with SpringBoot AWS backend and AWS CloudWatch. CI/CD with Jenkins, real-time text-to-speech playback, and analytics dashboard.",
      features: [
        "Cross-platform native mobile applications",
        "Real-time text-to-speech functionality",
        "Comprehensive analytics dashboard",
        "AWS CloudWatch integration for monitoring"
      ],
      skills: ["Kotlin", "Swift", "Java", "AWS EC2", "Spring Boot", "Jenkins", "TTS", "UX Design"],
      icon: "📱",
      category: "Mobile",
      github: "https://github.com/aayushoza3",
      demo: "#",
      featured: true
    },
    {
      title: "Personal Finance Assistant",
      timeline: "Sept–Nov 2024",
      description: "Intelligent personal finance management application with automated expense tracking, budget optimization, and financial insights.",
      features: [
        "Smart expense categorization with ML",
        "Real-time budget tracking and alerts",
        "Interactive financial charts and reports",
        "Secure data encryption and privacy protection"
      ],
      skills: ["React", "Python", "FastAPI", "PostgreSQL", "ML", "Chart.js", "Plaid API"],
      icon: "💰",
      category: "Frontend",
      github: "https://github.com/aayushoza3/Personal-Finance-Assistant",
      demo: "#",
      featured: false
    },
    {
      title: "Crypto Price Tracker",
      timeline: "Aug–Sept 2024",
      description: "Real-time cryptocurrency price monitoring application with advanced charting, portfolio tracking, and market analysis features.",
      features: [
        "Live price updates from multiple exchanges",
        "Interactive candlestick charts with technical indicators",
        "Portfolio management and P&L tracking",
        "Price alerts and notification system"
      ],
      skills: ["React", "TypeScript", "WebSocket", "CoinGecko API", "Chart.js", "Local Storage"],
      icon: "₿",
      category: "Frontend",
      github: "https://github.com/aayushoza3/Crypto-Price-Tracker",
      demo: "#",
      featured: false
    },
    {
      title: "VR Medical Training Suite",
      timeline: "Sep–Dec 2024",
      description: "Immersive VR application for medical procedure training with haptic feedback and real-time assessment. Built with Unity and C# for medical education.",
      features: [
        "Immersive VR medical simulations",
        "Real-time performance assessment",
        "Haptic feedback integration",
        "Progress tracking and analytics"
      ],
      skills: ["Unity", "C#", "VR Development", "3D Modeling", "Medical Simulation"],
      icon: "🥽",
      category: "VR/AR",
      github: "https://github.com/aayushoza3",
      demo: "#",
      featured: false
    }
  ];

  const categories = ["All", "AI/ML", "Frontend", "Mobile", "Backend", "VR/AR"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative solutions spanning AI/ML, mobile development, 
            backend systems, and immersive technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`btn-3d ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary/50 hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-card p-8 hover-lift group relative overflow-hidden ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent-glow text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Featured
                </div>
              )}

              <div className={`${project.featured ? "grid lg:grid-cols-2 gap-8 items-start" : ""}`}>
                {/* Project Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-accent-text group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.timeline}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-3d"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    {project.demo !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="btn-3d"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Visual (for featured projects) */}
                {project.featured && (
                  <div className="relative">
                    <div className="w-full h-64 rounded-lg glass-card flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-8xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        {project.icon}
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 animate-floating"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/20 animate-floating-delayed"></div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
          <Button 
            className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            onClick={() => window.open('https://github.com/aayushoza3', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};