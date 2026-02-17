import { Users, Zap, FileText } from "lucide-react";
import stepSelectSegment from "@/assets/step-select-segment.png";
import stepRunExperiment from "@/assets/step-run-experiment.png";
import stepInsightReport from "@/assets/step-insight-report.png";

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Select target segment",
    desc: "Choose demographics and psychographics for your study.",
    image: stepSelectSegment,
    imageAlt: "Persona selection interface showing digital twin segments",
  },
  {
    icon: Zap,
    step: "02",
    title: "Run experiment",
    desc: "Concept. Pricing. Messaging. UX.",
    image: stepRunExperiment,
    imageAlt: "Study setup interface with AI-generated research plan",
  },
  {
    icon: FileText,
    step: "03",
    title: "Receive structured insight report",
    desc: "Full evidence trail with quotes and analysis.",
    image: stepInsightReport,
    imageAlt: "Results dashboard with pricing insights and behavioral metrics",
  },
];

const BrandHowItWorks = () => (
  <section id="how-it-works" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-12 scroll-reveal">
        <p className="eyebrow">How It Works</p>
        <h2 className="section-heading">Three steps to insight</h2>
      </div>

      {/* Step cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
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

      {/* Screenshot journey */}
      <div className="space-y-8">
        {steps.map((s, i) => (
          <div key={i} className={`scroll-reveal stagger-${i + 1}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{s.step}</span>
              <span className="text-sm font-medium text-foreground">{s.title}</span>
            </div>
            <div className="premium-card overflow-hidden p-2">
              <img
                src={s.image}
                alt={s.imageAlt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandHowItWorks;
