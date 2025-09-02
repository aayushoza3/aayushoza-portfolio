import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aoza4@asu.edu",
      href: "mailto:aoza4@asu.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 602-849-8711",
      href: "tel:+16028498711"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/aayush-oza-a63b58235",
      href: "https://linkedin.com/in/aayush-oza-a63b58235"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/aayushoza3",
      href: "https://github.com/aayushoza3"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Tempe, Arizona, USA",
      href: "#"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_7f7vt5r', // Service ID
        'template_pl7kbrt', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Aayush Oza',
        },
        'FDY-RhAQ0ERDuvUbG' // Public key
      );
      
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? I'm always excited to discuss new opportunities, 
            innovative projects, and potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold gradient-accent-text mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently open to full-time opportunities starting May 2026, 
                as well as internships and freelance projects. Let's discuss how we can work together!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass-card p-6 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow"></div>
                <h4 className="font-semibold">Availability Status</h4>
              </div>
              <p className="text-muted-foreground mb-2">
                🎓 <strong>Graduating:</strong> May 2026
              </p>
              <p className="text-muted-foreground mb-2">
                💼 <strong>Seeking:</strong> Full-time SWE roles (2026), Internships, Projects
              </p>
              <p className="text-muted-foreground">
                🌍 <strong>Location:</strong> Open to remote, hybrid, or relocation
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/20 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/20 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    required
                    rows={6}
                    className="bg-muted/20 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-3d bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-in-up">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-accent-text">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a cutting-edge AI project, scalable web application, or innovative mobile solution, 
              I'm excited to bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('mailto:aoza4@asu.edu', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button 
                variant="outline" 
                className="btn-3d border-accent/50 hover:bg-accent/10"
                onClick={() => window.open('https://www.linkedin.com/in/aayush-oza-a63b58235', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};