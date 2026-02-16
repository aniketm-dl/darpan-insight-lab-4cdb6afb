import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap } from "lucide-react";

const BrandHero = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    document.getElementById("pilot-access")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHow = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="scroll-reveal">
            <p className="eyebrow mb-4">For Brands</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Market research,{" "}
              <span className="text-gradient">re-engineered for speed.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Run fast, affordable research without agencies or panels.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={scrollToForm} size="xl" className="font-medium">
                Join Brand Waitlist
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              <Button onClick={scrollToHow} variant="outline" size="lg" className="font-medium">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right — Animated Infographic */}
          <div className="scroll-reveal stagger-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Traditional */}
              <div className="premium-card p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Traditional</p>
                <div className="w-full space-y-2">
                  {[100, 80, 55, 30].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-destructive/20 overflow-hidden"
                    >
                      <div
                        className="h-full bg-destructive/50 rounded-full animate-[pulse_3s_ease-in-out_infinite]"
                        style={{ width: `${w}%`, animationDelay: `${i * 0.4}s` }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">4–8 weeks</p>
              </div>

              {/* Darpan */}
              <div className="premium-card p-6 flex flex-col items-center text-center border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Darpan</p>
                <div className="w-full space-y-2">
                  {[100, 100, 100, 100].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-primary/20 overflow-hidden"
                    >
                      <div
                        className="h-full bg-primary/60 rounded-full transition-all duration-700"
                        style={{ width: `${w}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-primary mt-3">Instant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
