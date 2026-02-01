import { Database, Clock, Shield, FileSearch, Trash2 } from "lucide-react";
import CTARow from "./CTARow";

const TrustSection = () => {
  const trustItems = [
    {
      icon: Database,
      label: "Data minimization",
      description: "We only collect what is needed to run experiments.",
    },
    {
      icon: Clock,
      label: "Retention controls",
      description: "Data retention can be configured.",
    },
    {
      icon: Shield,
      label: "Access controls",
      description: "Role-based access patterns.",
    },
    {
      icon: FileSearch,
      label: "Auditability",
      description: "Evidence trace for outputs.",
    },
    {
      icon: Trash2,
      label: "Deletion",
      description: "Ability to delete workspace data.",
    },
  ];

  return (
    <section id="trust" className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trust and data handling
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border mb-16">
          <ul className="space-y-6">
            {trustItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{item.label}:</span>
                    <span className="text-muted-foreground ml-2">{item.description}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <CTARow sectionName="trust" />
      </div>
    </section>
  );
};

export default TrustSection;
