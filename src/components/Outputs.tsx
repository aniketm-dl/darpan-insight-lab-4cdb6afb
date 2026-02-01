import { FileText, GitBranch, Gauge, Lightbulb } from "lucide-react";
import CTARow from "./CTARow";

const Outputs = () => {
  const outputs = [
    {
      icon: FileText,
      title: "Experiment summary",
    },
    {
      icon: GitBranch,
      title: "Evidence trace",
    },
    {
      icon: Gauge,
      title: "Confidence signals",
    },
    {
      icon: Lightbulb,
      title: "Recommended actions",
    },
  ];

  return (
    <section id="outputs" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Outputs you can ship with
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {outputs.map((output, index) => {
            const IconComponent = output.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {output.title}
                </h3>
              </div>
            );
          })}
        </div>

        <CTARow sectionName="outputs" />
      </div>
    </section>
  );
};

export default Outputs;
