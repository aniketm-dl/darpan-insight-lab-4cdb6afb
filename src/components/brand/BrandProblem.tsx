import { useState } from "react";
import problemSpeed from "@/assets/problem-speed.jpg";
import problemCost from "@/assets/problem-cost.jpg";
import problemCatchup from "@/assets/problem-catchup.jpg";

const reasons = [
  {
    num: "01",
    title: "Cost",
    short: "Typical study costs $15,000 to $100,000.",
    detail:
      "Typical study costs $15,000 to $100,000. Agencies dominate enterprise budgets. Most companies can't justify the spend, so they skip research entirely and rely on gut feeling.",
    image: problemCost,
  },
  {
    num: "02",
    title: "Speed",
    short: "Studies take 4-8 weeks.",
    detail:
      "Studies take 4-8 weeks. Recruitment delays insights further. By the time results arrive, the market has already moved on and decisions have been made without data.",
    image: problemSpeed,
  },
  {
    num: "03",
    title: "Access",
    short: "70% of startups skip formal research.",
    detail:
      "70% of startups skip formal research. Most decisions rely on intuition. The tools that exist are built for enterprises, leaving everyone else without proper customer intelligence.",
    image: problemCatchup,
  },
];

const BrandProblem = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — headline + reasons list */}
          <div className="scroll-reveal">
            <h2 className="section-heading mb-12">
              What is wrong with traditional methods?
            </h2>

            <div className="flex flex-col">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`group cursor-pointer border-b border-border py-6 transition-all duration-300 ${
                    active === i ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-medium text-primary">{r.num}</span>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-200 ${
                        active === i ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {r.title}
                    </h3>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === i ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground pl-7">{r.short}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked cards carousel */}
          <div className="scroll-reveal stagger-2 hidden lg:flex items-stretch gap-1.5 h-[520px]">
            {reasons.map((r, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  active === i ? "flex-[4]" : "flex-[0.4]"
                }`}
              >
                {/* Background image */}
                <img
                  src={r.image}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Collapsed state — vertical text */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    active === i ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span
                    className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    {r.title}
                  </span>
                </div>

                {/* Expanded state — content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-[80px] font-bold text-primary/30 leading-none mb-2">
                    {r.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{r.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-sm">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile fallback — simple cards */}
          <div className="lg:hidden flex flex-col gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden h-64">
                <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-primary mb-1">{r.num}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandProblem;
