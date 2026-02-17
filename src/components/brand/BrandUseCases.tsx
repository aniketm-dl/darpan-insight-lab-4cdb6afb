import { Lightbulb, DollarSign, Package, MessageSquare, ListChecks, Globe } from "lucide-react";

const cases = [
  { icon: Lightbulb, label: "Concept validation" },
  { icon: DollarSign, label: "Pricing sensitivity" },
  { icon: Package, label: "Packaging feedback" },
  { icon: MessageSquare, label: "Message testing" },
  { icon: ListChecks, label: "Feature prioritization" },
  { icon: Globe, label: "Market entry scenarios" },
];

const BrandUseCases = () => (
  <section id="use-cases" className="section-padding bg-card/50">
    <div className="section-container">
      <div className="text-center mb-10 scroll-reveal">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-heading">What you can test</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cases.map((c, i) => (
          <div key={i} className={`premium-card p-6 flex items-center gap-4 scroll-reveal stagger-${(i % 3) + 1}`}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium text-sm">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandUseCases;
