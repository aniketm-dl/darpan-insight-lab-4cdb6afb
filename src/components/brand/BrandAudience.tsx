import { Check } from "lucide-react";

const checks = [
  "If you iterate fast.",
  "If you test before scaling.",
  "If you value evidence over instinct.",
];

const BrandAudience = () => (
  <section className="section-padding bg-muted/30">
    <div className="section-container">
      <div className="max-w-2xl mx-auto scroll-reveal">
        <p className="eyebrow text-center">Audience</p>
        <h2 className="section-heading text-center mb-2">Who this is for</h2>
        <p className="body-text text-center mt-4 mb-8">
          For firms building the future of their category
        </p>
        <ul className="space-y-3 mb-8">
          {checks.map((item, i) => (
            <li key={i} className={`flex items-center gap-3 scroll-reveal stagger-${i + 1}`}>
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-muted-foreground text-base">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold text-base text-center">
          This infrastructure is built for you.
        </p>
      </div>
    </div>
  </section>
);

export default BrandAudience;
