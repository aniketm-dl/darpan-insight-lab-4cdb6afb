import { Zap, FileCheck, TrendingUp } from "lucide-react";
import CTARow from "./CTARow";

const WhatWeEnable = () => {
  const cards = [
    {
      icon: Zap,
      title: "Faster decisions",
      description: "Test ideas, campaigns, and UX flows with AI customer twins before spending engineering or budget.",
    },
    {
      icon: FileCheck,
      title: "Evidence, not opinions",
      description: "Each recommendation should be backed by an evidence trail and assumptions used.",
    },
    {
      icon: TrendingUp,
      title: "Reusable customer intelligence",
      description: "Build a persistent understanding of segments and behaviors that compounds over time.",
    },
  ];

  return (
    <section id="what-we-enable" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Darpan Labs enables
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <CTARow sectionName="what-we-enable" />
      </div>
    </section>
  );
};

export default WhatWeEnable;
