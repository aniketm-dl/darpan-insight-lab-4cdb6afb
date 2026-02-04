import { useNavigate } from "react-router-dom";
import { Lightbulb, MessageSquare, Library, ArrowRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

const WhatWeEnable = () => {
  const navigate = useNavigate();

  const outcomes = [
    {
      icon: Lightbulb,
      title: "Validate before you build",
      bullets: [
        "Test onboarding flows, feature concepts, and pricing hypotheses",
        "Compare responses across key segments",
        "Identify the top friction points in minutes",
      ],
    },
    {
      icon: MessageSquare,
      title: "Message-market fit, faster",
      bullets: [
        "Try multiple value props and creative angles",
        "Predict which objections will block conversion",
        "Generate segment-wise positioning notes",
      ],
    },
    {
      icon: Library,
      title: "Reusable customer intelligence",
      bullets: [
        "Save learnings as repeatable \"experiment templates\"",
        "Build a living library of segment behavior",
        "Use results across Product, Growth, and Research",
      ],
    },
  ];

  const handlePlaygroundClick = () => {
    analytics.playgroundOpenClick("outcomes_section");
    navigate("/playground");
  };

  return (
    <section id="what-we-enable" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-10 scroll-reveal">
          <p className="eyebrow">Why Teams Use Darpan Labs</p>
          <h2 className="section-heading">
            Decide with evidence, not debates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Run fast experiments on AI customer twins and capture an evidence trail for every recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div
                key={index}
                className={`premium-card group scroll-reveal stagger-${index + 1}`}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <ul className="space-y-2">
                  {outcome.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 scroll-reveal stagger-4">
          <button
            onClick={handlePlaygroundClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            Try it in the Playground
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeEnable;
