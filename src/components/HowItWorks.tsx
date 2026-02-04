import { Database, Users, FlaskConical, FileOutput, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      step: "01",
      title: "Connect data",
      description: "Import CSV/Parquet or connect sources.",
      detail: "Your data stays private. We never train on it.",
    },
    {
      icon: Users,
      step: "02",
      title: "Build customer twins",
      description: "Generate segment-aware AI twins based on your data + constraints.",
      detail: "Each twin inherits behavioral patterns from real segments.",
    },
    {
      icon: FlaskConical,
      step: "03",
      title: "Run experiments",
      description: "Test messaging, UX variations, pricing hypotheses, and scenario questions.",
      detail: "No code required. Results in minutes.",
    },
    {
      icon: FileOutput,
      step: "04",
      title: "Get decision outputs",
      description: "Evidence trace, confidence signals, and recommended actions.",
      detail: "Every recommendation links back to source data.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 scroll-reveal">
          <p className="eyebrow">Process</p>
          <h2 className="section-heading">
            How it works
          </h2>
        </div>

        {/* Timeline layout */}
        <div className="relative mt-8">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[80px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent scroll-reveal-fade" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className={`relative group scroll-reveal stagger-${index + 1}`}>
                  {/* Step number - floating */}
                  <div className="flex items-center gap-5 lg:flex-col lg:items-center mb-6">
                    <div className="relative">
                      <div className="w-[140px] h-[140px] rounded-2xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                        <IconComponent className="w-12 h-12 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      {/* Step badge */}
                      <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/20">
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Arrow connector - mobile */}
                    {!isLast && (
                      <ArrowRight className="lg:hidden w-6 h-6 text-muted-foreground/50" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="lg:text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-foreground/60 italic">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
