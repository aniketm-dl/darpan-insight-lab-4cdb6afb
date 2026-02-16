import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ComparisonPanel from "./ComparisonPanel";

const BrandHero = () => {
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

          {/* Right — Comparison Panel */}
          <div className="scroll-reveal stagger-2">
            <ComparisonPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
