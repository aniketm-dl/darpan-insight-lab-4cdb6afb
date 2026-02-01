import { Box, TrendingUp, Search } from "lucide-react";

const UseCasesByRole = () => {
  const roles = [
    {
      icon: Box,
      role: "Product",
      description: "Validate feature hypotheses, onboarding flows, pricing assumptions.",
    },
    {
      icon: TrendingUp,
      role: "Growth",
      description: "Test messaging, creative angles, segmentation, funnel hypotheses.",
    },
    {
      icon: Search,
      role: "Research",
      description: "Rapid directional insight, concept tests, qualitative probing at scale.",
    },
  ];

  return (
    <section id="use-cases" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="eyebrow">Applications</p>
          <h2 className="section-heading">
            Use cases
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="premium-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.role}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesByRole;
