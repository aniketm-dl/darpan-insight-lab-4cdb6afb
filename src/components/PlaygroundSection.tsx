import { Button } from "@/components/ui/button";
import { ExternalLink, Play, FlaskConical, Users, FileText, Copy } from "lucide-react";
import { analytics } from "@/lib/analytics";

const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const PlaygroundSection = () => {
  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("playground-section");
    window.open(PLAYGROUND_URL, "_blank", "noopener,noreferrer");
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
    <section id="playground" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Playground
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Try a live environment connected to our backend. No mock screens.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use it to explore how AI customer twins answer questions and produce evidence-backed outputs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={handleOpenPlayground}
              >
                <Play className="w-4 h-4 mr-2" />
                Open Playground
                <ExternalLink className="w-4 h-4 ml-2" />
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
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              What you can test
            </h3>
            <ul className="space-y-4">
              {testItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
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
