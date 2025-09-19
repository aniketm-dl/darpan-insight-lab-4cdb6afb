import { Database, Users, FlaskConical, GitBranch, Share, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = [
    {
      icon: Database,
      title: "Data Ingestion & Connectors",
      description: "Product analytics, CRM, CX, surveys, public signals; CSV/Parquet upload."
    },
    {
      icon: Users,
      title: "Twin Building", 
      description: "Create audience-true digital twins; control priors, traits, and sample sizes."
    },
    {
      icon: FlaskConical,
      title: "Experimentation & Simulation",
      description: "Test content, UX, pricing, and messaging; compare scenario outcomes."
    },
    {
      icon: GitBranch,
      title: "Journey & Screen Analysis",
      description: "Predict friction, completion, and step-level risk across flows."
    },
    {
      icon: Share,
      title: "Actions & Handoffs", 
      description: "Create Jira tasks, copy summaries, export to Figma/Slides/CSV."
    },
    {
      icon: Filter,
      title: "Segment & Cohort Targeting",
      description: "Filter by geo, device, lifecycle, ICP; save reusable cohorts."
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

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            const animationClass = index % 3 === 0 ? 'scroll-reveal-left' : index % 3 === 2 ? 'scroll-reveal-right' : 'scroll-reveal';
            const staggerClass = `stagger-${index + 2}`;
            
            return (
              <div 
                key={index}
                className={`text-left p-8 rounded-2xl bg-card card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-neon-green/50 group border border-border/20 focus:outline-none focus:ring-2 focus:ring-neon-green/50 ${animationClass} ${staggerClass}`}
                tabIndex={0}
              >
                {/* Icon with background accent */}
                <div className="w-7 h-7 mb-6">
                  <IconComponent className="w-7 h-7 text-neon-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-neon-green mb-3 group-hover:brightness-110 transition-all">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
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

        {/* CTA Row */}
        <div className="text-center space-y-4 scroll-reveal stagger-8">
          <Button 
            onClick={() => scrollToSection("book-demo")}
            variant="outline" 
            size="lg"
            className="min-w-[220px] border-neon-green/30 text-neon-green hover:bg-neon-green/10"
          >
            See a Live Capability Walkthrough
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <button 
              onClick={() => scrollToSection("prototype")}
              className="text-muted-foreground hover:text-neon-blue transition-colors underline underline-offset-4"
            >
              Open evidence example
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;