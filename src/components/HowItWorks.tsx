import { Database, Users, FlaskConical, FileOutput } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      step: "1",
      title: "Connect data",
      description: "Import CSV/Parquet or connect sources.",
    },
    {
      icon: Users,
      step: "2",
      title: "Build customer twins",
      description: "Generate segment-aware AI twins based on your data + constraints.",
    },
    {
      icon: FlaskConical,
      step: "3",
      title: "Run experiments",
      description: "Test messaging, UX variations, pricing hypotheses, and scenario questions.",
    },
    {
      icon: FileOutput,
      step: "4",
      title: "Get decision outputs",
      description: "Evidence trace, confidence signals, and recommended actions.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="eyebrow">Process</p>
          <h2 className="section-heading">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative">
                <div className="premium-card text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
