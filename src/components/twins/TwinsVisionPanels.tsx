import { useState } from "react";
import visionDecision from "@/assets/vision-decision.jpg";
import visionSocial from "@/assets/vision-social.jpg";
import visionConversations from "@/assets/vision-conversations.jpg";

const visions = [
  {
    num: "01",
    title: "Life Decision Simulation",
    short: "Test major life choices before committing.",
    detail:
      "Imagine choosing between two colleges, two cities, or two career paths. Your twin simulates the next few years of your life for each available option so you decide with clarity, not anxiety.",
    image: visionDecision,
  },
  {
    num: "02",
    title: "Social Discovery",
    short: "Find people you're likely to connect with.",
    detail:
      "Your twin understands your social tendencies, interests, and communication style. It can simulate your initial few conversations with other digital twins and help you find the right people faster.",
    image: visionSocial,
  },
  {
    num: "03",
    title: "Train for Important Conversations",
    short: "Prepare for interviews, negotiations, or difficult talks.",
    detail:
      "Prepare for an important conversation like a salary negotiation, a founder pitch, or a difficult personal conversation. Rehearse with twins of the counter party before the real moment.",
    image: visionConversations,
  },
];

const TwinsVisionPanels = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — headline + reasons list */}
          <div className="scroll-reveal">
            <p className="eyebrow">Vision</p>
            <h2 className="section-heading mb-4">The future of your digital twin</h2>
            <p className="body-text mb-12">
              Today, your twin earns from research. Tomorrow, it helps you navigate the decisions that shape your life.
            </p>

            <div className="flex flex-col">
              {visions.map((v, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`group cursor-pointer border-b border-border py-6 transition-all duration-300 ${
                    active === i ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-medium text-primary">{v.num}</span>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-200 ${
                        active === i ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active === i ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground pl-7">{v.short}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked cards carousel */}
          <div className="scroll-reveal stagger-2 hidden lg:flex items-stretch gap-1.5 h-[520px]">
            {visions.map((v, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  active === i ? "flex-[4]" : "flex-[0.4]"
                }`}
              >
                <img src={v.image} alt={v.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Collapsed */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    active === i ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span
                    className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    {v.title}
                  </span>
                </div>

                {/* Expanded */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-[80px] font-bold text-primary/30 leading-none mb-2">{v.num}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-sm">{v.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden flex flex-col gap-4">
            {visions.map((v, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden h-64">
                <img src={v.image} alt={v.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-primary mb-1">{v.num}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{v.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwinsVisionPanels;
