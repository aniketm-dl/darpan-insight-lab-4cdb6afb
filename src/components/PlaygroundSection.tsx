import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, FlaskConical, Users, FileText, Copy } from "lucide-react";
import { analytics } from "@/lib/analytics";

const PlaygroundSection = () => {
  const navigate = useNavigate();

  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("playground-section");
    navigate("/playground");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "playground-section");
    const element = document.getElementById("book-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testItems = [
    { icon: FlaskConical, text: "Run a sample experiment" },
    { icon: Users, text: "Compare responses across segments" },
    { icon: FileText, text: "Review evidence trace outputs" },
    { icon: Copy, text: "Copy results" },
  ];

  return (
    <section id="playground" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="eyebrow">Try it now</p>
          <h2 className="section-heading">
            Playground
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text */}
          <div>
            <p className="text-base text-foreground mb-3 leading-relaxed">
              Try a live environment connected to our backend. No mock screens.
            </p>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Use it to explore how AI customer twins answer questions and produce evidence-backed outputs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={handleOpenPlayground}
              >
                <Play className="w-4 h-4 mr-2" />
                Open Playground
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookDemo}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Column - What you can test */}
          <div className="premium-card">
            <h3 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">
              What you can test
            </h3>
            <ul className="space-y-4">
              {testItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
