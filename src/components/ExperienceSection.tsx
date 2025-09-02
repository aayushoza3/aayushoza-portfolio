import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "One World Quest",
      role: "Software Engineer Intern",
      duration: "May–Aug 2025",
      logo: "🌍",
      achievements: [
        "Developed scalable learning platform on AWS with Next.js, TypeScript, Node.js; reduced load times by 70%",
        "Integrated real-time sync with Google Classroom API (Python, PostgreSQL, Redis); boosted completion by 30%",
        "Optimized Node.js APIs with indexed Postgres and pooling; 95th percentile latency at 210ms"
      ],
      skills: ["Next.js", "AWS EC2", "Terraform", "GitHub Actions", "Redis", "PostgreSQL", "Node.js", "TypeScript", "CI/CD", "Kubernetes"]
    },
    {
      company: "Amaranth Tech",
      role: "Software Engineer Intern",
      duration: "Jan–May 2025",
      logo: "🔮",
      achievements: [
        "Built LLM workflow automation reducing manual prompt engineering by 85%",
        "Revamped React dashboard with modern UI/UX, improving user engagement by 40%",
        "Implemented advanced prompt optimization algorithms using Python and FastAPI"
      ],
      skills: ["React", "Python", "FastAPI", "LLM", "Prompt Engineering", "UI/UX", "Automation"]
    },
    {
      company: "VR Lab, ASU",
      role: "Software Engineer Intern",
      duration: "Sep–Dec 2024",
      logo: "🥽",
      achievements: [
        "Developed Unity VR applications for medical training simulations",
        "Built .NET backend systems for data collection and analytics",
        "Created immersive C# scripts for realistic medical procedure training"
      ],
      skills: ["Unity", "C#", ".NET", "VR Development", "Medical Simulations", "Analytics"]
    },
    {
      company: "Camus Pharma",
      role: "Software Engineer Intern",
      duration: "May–Aug 2024",
      logo: "💊",
      achievements: [
        "Implemented Java/C++ batch processing systems for pharmaceutical data",
        "Built comprehensive data visualization dashboards",
        "Developed real-time alerting systems for critical process monitoring"
      ],
      skills: ["Java", "C++", "Data Visualization", "Batch Processing", "Monitoring", "Alerting"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 high-impact software engineering internships across diverse industries, 
            from AI/ML platforms to VR simulations and pharmaceutical systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden lg:block z-10"></div>

                {/* Content */}
                <div className="flex-1 lg:ml-20">
                  <Card className="glass-card p-8 hover-lift group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold gradient-accent-text group-hover:gradient-text transition-all duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-muted-foreground">{exp.role}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>

                    <div className="space-y-4 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-muted/20 hover:bg-primary/20 transition-colors duration-300"
                          style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Floating Elements */}
                <div className="hidden lg:block relative w-32">
                  <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-16 h-16 rounded-lg glass-card flex items-center justify-center animate-floating`}>
                    <span className="text-2xl">{exp.logo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};