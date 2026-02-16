import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "What is a digital twin?", a: "An AI model trained on consumer data that simulates how real people respond to questions, products, and messaging." },
  { q: "Is this a replacement for agencies?", a: "Not necessarily. Darpan augments existing research workflows by providing faster, cheaper directional insights before committing to full-scale studies." },
  { q: "How accurate are simulations?", a: "Accuracy improves with data quality. Early benchmarks show strong directional alignment with traditional panel results at a fraction of the cost and time." },
  { q: "What industries are supported?", a: "We support consumer-facing industries including D2C, fintech, FMCG, health & wellness, and SaaS. Custom segments can be configured." },
  { q: "When is full launch?", a: "We are currently onboarding pilot brands. General availability is planned for later this year." },
];

const BrandFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 scroll-reveal">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-heading mb-3">Common questions</h2>
          </div>
          <div className="lg:col-span-8 scroll-reveal stagger-1">
            <div className="divide-y divide-border/50">
              {faqs.map((f, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-4 text-left transition-colors hover:text-primary"
                  >
                    <span className="text-foreground font-medium text-[15px] leading-snug pr-4">{f.q}</span>
                    <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-1", open === i && "rotate-180 text-primary")} />
                  </button>
                  <div className={cn("grid transition-all duration-200 ease-out", open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground text-sm leading-relaxed pb-4 pr-8">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandFAQ;
