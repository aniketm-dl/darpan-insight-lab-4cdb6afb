import { Clock, DollarSign, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: "Faster Decisions",
      description: "Evidence in hours, not weeks.",
      anchor: "prototype"
    },
    {
      icon: DollarSign,
      title: "Lower Cost",
      description: "Replace repeat research and rework.",
      anchor: "book-demo"
    },
    {
      icon: Target,
      title: "Closer to Reality",
      description: "Twins mirror your audience using your data.",
      anchor: "prototype"
    }
  ];

  const proofStats = [
    "Setup: under 1 hour",
    "Pilot in 2 weeks", 
    "Works with your data stack"
  ];

  return (
    <section id="what-we-do" className="py-24 bg-background scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Explainer */}
        <div className="text-center mb-20 scroll-reveal stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            What we do
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-white leading-[1.5]">
              We build AI customer twins from your data so teams can test ideas, campaigns, and UX in hours—and ship with confidence.
            </p>
          </div>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const animationClass = index === 0 ? 'scroll-reveal-left' : index === 2 ? 'scroll-reveal-right' : 'scroll-reveal';
            const staggerClass = `stagger-${index + 2}`;
            
            return (
              <div 
                key={index}
                onClick={() => scrollToSection(benefit.anchor)}
                className={`text-left p-8 rounded-2xl bg-card card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-neon-green/50 group border border-border/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-green/50 ${animationClass} ${staggerClass}`}
              >
                {/* Icon with background accent */}
                <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-neon-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-neon-green mb-3 group-hover:brightness-110 transition-all">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proof Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 scroll-reveal stagger-5">
          {proofStats.map((stat, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground"
            >
              {stat}
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="text-center space-y-4 scroll-reveal stagger-6">
          <Button 
            onClick={() => scrollToSection("prototype")}
            variant="outline" 
            size="lg"
            className="min-w-[180px] border-neon-green/30 text-neon-green hover:bg-neon-green/10"
          >
            See the Prototype
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <button 
              onClick={() => scrollToSection("book-demo")}
              className="text-muted-foreground hover:text-neon-blue transition-colors underline underline-offset-4"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;