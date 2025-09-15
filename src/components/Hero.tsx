import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI-powered customer twins for{" "}
            <span className="text-gradient">instant insights</span> and{" "}
            <span className="text-gradient">faster decisions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Simulate real customers to test product, UX, and campaigns before you go live—
            <br className="hidden md:block" />
            evidence in hours, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={() => scrollToSection("book-demo")}
              variant="hero" 
              size="xl"
              className="min-w-[200px]"
            >
              Book a Demo
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              onClick={() => scrollToSection("prototype")}
              variant="outline" 
              size="xl"
              className="min-w-[200px]"
            >
              <Play className="mr-2" size={20} />
              See the Prototype
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Personality Match</div>
              <div className="text-xs text-muted-foreground">in 2 hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%+</div>
              <div className="text-sm text-muted-foreground">Survey Response</div>
              <div className="text-xs text-muted-foreground">decline rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6 weeks</div>
              <div className="text-sm text-muted-foreground">Traditional</div>
              <div className="text-xs text-muted-foreground">research time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$65K</div>
              <div className="text-sm text-muted-foreground">Average cost</div>
              <div className="text-xs text-muted-foreground">per study</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;