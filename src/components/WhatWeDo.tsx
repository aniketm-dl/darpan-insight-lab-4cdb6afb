import { Clock, DollarSign, Target } from "lucide-react";

const WhatWeDo = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster",
      description: "Decisions in hours, not weeks"
    },
    {
      icon: DollarSign,
      title: "Lower Cost",
      description: "Cut research overhead and rework"
    },
    {
      icon: Target,
      title: "Closer to Reality",
      description: "Twins reflect your audience using your data"
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What we do
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Darpan Labs builds AI customer digital twins from your existing data (product analytics, 
              CRM, CX, surveys, public signals). Teams can instantly test concepts, campaigns, 
              and pricing—then ship with confidence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card card-shadow hover:neon-glow-green transition-all duration-300 hover:-translate-y-2 group border border-border/20"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:neon-glow-green">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-neon-green mb-3 group-hover:brightness-110 transition-all">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
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