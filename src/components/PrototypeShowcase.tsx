import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Calendar } from "lucide-react";

const PrototypeShowcase = () => {
  const [isVideoMode, setIsVideoMode] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (sectionId === "book-demo") {
        // Focus first form field after scrolling
        setTimeout(() => {
          const firstInput = element.querySelector('input, textarea');
          if (firstInput) {
            (firstInput as HTMLElement).focus();
          }
        }, 300);
      }
    }
  };

  return (
    <section id="prototype" className="py-8 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 animate-fade-in">
          <div className="text-sm text-primary font-medium mb-2">Prototype</div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Pain-Point Forecast: Checkout Flow
          </h2>
          <p className="text-muted-foreground">
            Audience: Prosumer (US) • Device: Mobile • Data: Figma prototype + session replays
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Mockup (65%) */}
          <div className="lg:col-span-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-card rounded-2xl card-shadow border border-border overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                {/* Risk Pill */}
                <div className="ml-auto">
                  <Badge variant="destructive" className="text-xs">
                    Highest risk: Payment step — Predicted drop-off 35% (±6%) • Severity High
                  </Badge>
                </div>
              </div>

              {/* Mockup Content */}
              <div className="aspect-[16/10] relative bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20">
                {!isVideoMode ? (
                  <>
                    {/* Placeholder for actual prototype image */}
                    <div className="absolute inset-4 bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Interactive Prototype
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                          Click to see the checkout flow pain-point analysis in action
                        </p>
                      </div>
                    </div>
                    
                    {/* Play Overlay */}
                    <button 
                      onClick={() => setIsVideoMode(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 group"
                      aria-label="Play prototype video"
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-6 h-6 text-card ml-1" />
                      </div>
                    </button>
                  </>
                ) : (
                  <div className="absolute inset-4 bg-white dark:bg-card rounded-lg shadow-sm border border-border/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-4">Video player would load here</div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsVideoMode(false)}
                      >
                        Back to Image
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Summary Cards (35%) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1 - Completion Forecast */}
            <div className="bg-card rounded-xl card-shadow p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold text-foreground mb-2">Completion Forecast</h4>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-bold text-muted-foreground">58%</span>
                <span className="text-sm text-muted-foreground">→</span>
                <span className="text-xl font-bold text-neon-green">66–70%</span>
                <span className="text-sm text-muted-foreground">after fixes</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Predicted uplift with simplified payment & clearer errors.
              </p>
            </div>

            {/* Card 2 - At-Risk Segments */}
            <div className="bg-card rounded-xl card-shadow p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold text-foreground mb-3">At-Risk Segments</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">New users (mobile)</span>
                  <Badge variant="destructive" className="text-xs">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">SMB EU</span>
                  <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600 dark:text-yellow-400">Medium</Badge>
                </div>
              </div>
            </div>

            {/* Card 3 - Screens Most at Risk */}
            <div className="bg-card rounded-xl card-shadow p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-foreground mb-3">Screens Most at Risk</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Payment step 3</span>
                  <span className="text-sm font-medium text-destructive">Friction 0.82</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Address step 2</span>
                  <span className="text-sm font-medium text-yellow-500">0.57</span>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 space-y-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => scrollToSection("book-demo")}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-200 group"
              >
                <Calendar className="w-4 h-4" />
                <span className="border-b border-transparent group-hover:border-primary-hover transition-colors duration-200">
                  Schedule live A/B
                </span>
              </button>
              
              <button
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="border-b border-transparent group-hover:border-foreground transition-colors duration-200">
                  Open evidence trace
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeShowcase;