import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Aayush Oza</h3>
            <p className="text-muted-foreground">
              Engineering the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-lift"
              onClick={() => window.open('https://github.com/aayushoza3', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-lift"
              onClick={() => window.open('https://www.linkedin.com/in/aayush-oza-a63b58235', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-lift"
              onClick={() => window.open('mailto:aoza4@asu.edu', '_blank')}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border/10">
          <p className="text-muted-foreground">
            © {currentYear} Aayush Oza. Built using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 animate-floating"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-accent/10 animate-floating-delayed"></div>
    </footer>
  );
};