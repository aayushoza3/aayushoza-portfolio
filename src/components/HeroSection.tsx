import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'AWS', 
    'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'PyTorch'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow"></div>
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-floating"></div>
      <div className="absolute top-40 right-32 w-16 h-16 rounded-lg bg-accent/20 blur-lg animate-floating-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-secondary/20 blur-xl floating"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 animate-slide-in-left">
              <p className="text-xl text-muted-foreground mb-2">Hi, I am</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Aayush Oza</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-foreground/80 mb-6">
                <span className="block">Engineering Scalable Solutions in</span>
                <span className="gradient-accent-text">AI, Cloud, and Full-Stack Tech</span>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Senior CS student at ASU with 3 software engineering internships. 
                Passionate about building high-impact systems that scale. Let's build something impactful 🚀
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-slide-in-up">
              <Button 
                className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="btn-3d border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
                onClick={() => window.open('https://jumpshare.com/share/BT1XZsXVl4Ly2YGz4OVK', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              <Button 
                variant="outline" 
                className="btn-3d border-accent/50 hover:bg-accent/10 px-8 py-6 text-lg"
                onClick={() => window.open('https://github.com/aayushoza3', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-slide-in-up">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover-lift w-12 h-12"
                onClick={() => window.open('https://github.com/aayushoza3', '_blank')}
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover-lift w-12 h-12"
                onClick={() => window.open('https://www.linkedin.com/in/aayush-oza-a63b58235', '_blank')}
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* 3D Visual Section */}
          <div className="flex-1 relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full glass-card p-8 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl animate-rotate-3d">⚡</div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg glass-card flex items-center justify-center animate-floating">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg glass-card flex items-center justify-center animate-floating-delayed">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-full glass-card flex items-center justify-center animate-particles">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center animate-particles">
                <span className="text-xl">☁️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mt-16 animate-slide-in-up">
          <p className="text-center text-muted-foreground mb-6 text-lg">Powered by cutting-edge technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-4 py-2 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};