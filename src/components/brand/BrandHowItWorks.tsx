import { Users, Zap, FileText } from "lucide-react";

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Select target segment",
    desc: "Choose demographics and psychographics for your study.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Run experiment",
    desc: "Concept. Pricing. Messaging. UX.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Receive structured insight report",
    desc: "Full evidence trail with quotes and analysis.",
  },
];

const BrandHowItWorks = () => (
  <section id="how-it-works" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-12 scroll-reveal">
        <p className="eyebrow">How It Works</p>
        <h2 className="section-heading">Three steps to insight</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className={`premium-card p-8 text-center scroll-reveal stagger-${i + 1}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{s.step}</span>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto my-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandHowItWorks;
