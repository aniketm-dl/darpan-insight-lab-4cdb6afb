import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founders = () => {
  const founders = [
    {
      name: "Aniket Gudadhe",
      role: "Co-founder",
      bio: "Product & engineering. Ex-Oracle. IIT Guwahati. Built data-heavy SaaS and automation systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Aniket Mishra", 
      role: "Co-founder",
      bio: "Data science & experimentation. Ex-American Express. IIT Kharagpur. Modeling, measurement, and analytics.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Manav Jain",
      role: "Co-founder", 
      bio: "Platform & infra. Ex-Google SWE. BITS Pilani. Scalable backends and secure APIs.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  return (
    <section id="founders" className="py-24 bg-background scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building the future of customer research with AI-powered customer twins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {founders.map((founder, index) => {
            const animationClass = index === 0 ? 'scroll-reveal-left' : index === 2 ? 'scroll-reveal-right' : 'scroll-reveal';
            const staggerClass = `stagger-${index + 2}`;
            
            return (
              <div 
                key={index}
                className={`bg-white dark:bg-card rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center ${animationClass} ${staggerClass}`}
              >
                <div className="mb-6">
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-100 dark:border-border"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-foreground mb-2">
                  {founder.name}
                </h3>
                
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {founder.role}
                </p>
                
                <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>
                
                <button
                  onClick={() => window.open(founder.linkedin, '_blank')}
                  className="w-10 h-10 bg-gray-900 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 mx-auto"
                  aria-label={`${founder.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Advisory tagline */}
        <div className="text-center scroll-reveal stagger-5">
          <p className="text-muted-foreground italic">
            Advised by experts in consumer psychology and applied AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founders;