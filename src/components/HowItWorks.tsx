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
    <section id="how-it-works" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
        </div>

        {/* Stepper */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
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
