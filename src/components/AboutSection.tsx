import { Card } from '@/components/ui/card';
import { MapPin, Code, Brain, Cloud } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tempe, Arizona",
      description: "Based in the heart of tech innovation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-stack SWE",
      description: "End-to-end application development"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Builder",
      description: "Intelligent systems and automation"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infra Enthusiast",
      description: "Scalable and resilient architectures"
    }
  ];

  const skills = {
    "Languages": [
      "Python", "TypeScript", "JavaScript", "Java", "C++", "Rust", "Go", "Kotlin", "Swift", "C#", "SQL"
    ],
    "Frameworks & Libraries": [
      "Next.js", "React.js", "FastAPI", "Flask", "Spring Boot", "Node.js", "PyTorch", "TensorFlow", ".NET", "Angular"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, Lambda, S3)", "Docker", "GitHub Actions", "Terraform", "Kubernetes", "Vercel", "Jenkins", "GCP"
    ],
    "Tools & Infrastructure": [
      "PostgreSQL", "Redis", "MongoDB", "Git", "Celery", "Firebase", "Unity", "CI/CD", "REST APIs", "OAuth2"
    ],
    "Current Focus (2025)": [
      "LLM Integration", "Prompt Engineering", "Kubernetes Scaling", "Infrastructure as Code", "Observability & Tracing"
    ]
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with deep experience across full-stack development, 
            AI/ML systems, and cloud infrastructure. Currently pursuing my BSc in Computer Science 
            at Arizona State University, graduating May 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education & Summary */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-accent-text">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">BSc in Computer Science</h4>
                  <p className="text-muted-foreground">Arizona State University (2022–2026)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Relevant courses: Machine Learning, AI, Data Structures, DBMS, 
                    Software Engineering, Human-Computer Interaction
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Strengths</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  3 software engineering internships with high-impact deliverables
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  Expertise in AI/ML systems and backend architecture
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  Full-stack & DevOps proficiency (CI/CD, Docker, Kubernetes)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Passion for developer velocity and performance optimization
                </li>
              </ul>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={category} className="glass-card p-6 hover-lift">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-muted/20 rounded-full border border-border/50 hover:border-primary/50 transition-colors duration-300"
                        style={{ animationDelay: `${(index * skillList.length + skillIndex) * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};