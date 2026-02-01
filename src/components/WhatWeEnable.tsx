import { Zap, FileCheck, TrendingUp } from "lucide-react";

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
    <section id="what-we-enable" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-heading">
            What Darpan Labs enables
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="premium-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeEnable;
