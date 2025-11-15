import { Database, Bot, Zap, Route, Send, TrendingUp, ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const capabilities = [
    {
      icon: Database,
      title: "Connect Your Data",
      description: "Plug in analytics, CRM, or survey data — no setup headaches. Darpan automatically aligns signals across sources."
    },
    {
      icon: Bot,
      title: "Build AI Customer Twins", 
      description: "Generate data-driven personas that think and act like your real users — fully controllable by traits and context."
    },
    {
      icon: Zap,
      title: "Run Instant Simulations",
      description: "Test campaigns, flows, or pricing in hours — not weeks. See which ideas drive engagement, conversion, and sentiment."
    },
    {
      icon: Route,
      title: "Analyze User Journeys",
      description: "Identify friction, predict drop-offs, and uncover evidence behind every customer decision."
    },
    {
      icon: Send,
      title: "Take Action Effortlessly", 
      description: "Turn insights into tasks — one-click export to Jira, Figma, or CSV summaries."
    },
    {
      icon: TrendingUp,
      title: "Scale Your Insights",
      description: "Save and reuse cohorts by geography, device, or lifecycle to compare audiences and improve decisions over time."
    }
  ];


  return (
    <section id="what-we-do" className="py-24 bg-background scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Explainer */}
        <div className="text-center mb-20 scroll-reveal stagger-1">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ HOW IT WORKS ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            From Data to Evidence
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-white leading-[1.5]">
              Ingest your existing data, create AI customer twins, and run simulations to predict real customer reactions — before you go live.
            </p>
          </div>

          {/* Flow Visual */}
          <div className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-mono text-primary/80 mb-4 flex-wrap">
            <span>Data</span>
            <ArrowRight className="w-4 h-4" />
            <span>Twins</span>
            <ArrowRight className="w-4 h-4" />
            <span>Simulation</span>
            <ArrowRight className="w-4 h-4" />
            <span>Evidence</span>
            <ArrowRight className="w-4 h-4" />
            <span>Action</span>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-[1200px] mx-auto mb-12">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            
            return (
              <div 
                key={index}
                className="text-left p-6 md:p-7 bg-[#181A1B] rounded-[20px] border border-white/[0.06] hover:border-white/[0.14] shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] group focus:outline-none focus:ring-2 focus:ring-[#9AE66E] focus:ring-offset-2 focus:ring-offset-background cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                tabIndex={0}
                role="button"
              >
                {/* Icon with subtle pill background */}
                <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center mb-3 transition-colors duration-200 group-hover:bg-white/[0.06]">
                  <IconComponent className="w-7 h-7 text-neon-green transition-transform duration-200 group-hover:scale-110" />
                </div>
                
                <h3 className="text-[21px] font-semibold text-neon-green mb-2 tracking-[0.1px] leading-tight max-w-[36ch]">
                  {capability.title}
                </h3>
                <p className="text-base text-[#D6D6D6] leading-[1.65] max-w-[44ch]">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;