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

      {/* Steps with inline labels + images */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {steps.map((s, i) => (
          <div key={i} className={`flex flex-col scroll-reveal stagger-${i + 1}`}>
            {/* Step label */}
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{s.step}</span>
                <span className="text-sm font-semibold text-foreground">{s.title}</span>
              </div>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
            {/* Image - no card wrapper, fills available height */}
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={s.image}
                alt={s.imageAlt}
                className="w-full h-full object-cover object-top rounded-lg"
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
