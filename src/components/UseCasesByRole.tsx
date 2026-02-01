import { Box, TrendingUp, Search } from "lucide-react";
import CTARow from "./CTARow";

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
    <section id="use-cases" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use cases
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.role}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <CTARow sectionName="use-cases" />
      </div>
    </section>
  );
};

export default UseCasesByRole;
