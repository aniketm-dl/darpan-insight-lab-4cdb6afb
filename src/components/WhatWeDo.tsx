import { Database, Users, FlaskConical, GitBranch, Share, Filter } from "lucide-react";

const WhatWeDo = () => {
  const capabilities = [
    {
      icon: Database,
      title: "Data Ingestion & Connectors",
      description: "Plug in product analytics, CRM, CX, surveys, and public signals. CSV/Parquet supported."
    },
    {
      icon: Users,
      title: "Twin Building", 
      description: "Generate audience-true digital twins. Control priors, traits, and sample sizes."
    },
    {
      icon: FlaskConical,
      title: "Experimentation & Simulation",
      description: "Test content, UX, pricing, and messaging. Compare scenarios before you ship."
    },
    {
      icon: GitBranch,
      title: "Journey & Screen Analysis",
      description: "Predict friction and completion, pinpoint high-risk steps across flows."
    },
    {
      icon: Share,
      title: "Actions & Handoffs", 
      description: "Create Jira tasks, one-click summaries, and export to Figma, Slides, or CSV."
    },
    {
      icon: Filter,
      title: "Segment & Cohort Targeting",
      description: "Filter by geo, device, lifecycle, or ICP—and save reusable cohorts."
    }
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
              We build AI customer twins from your data so teams can test ideas, campaigns, and UX in hours and ship with confidence.
            </p>
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