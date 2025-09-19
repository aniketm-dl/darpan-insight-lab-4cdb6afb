import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-neon-green">From Hunches</span>{" "}
            <span className="text-foreground">to</span>{" "}
            <span className="text-neon-blue">Evidence</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-5xl mx-auto leading-[1.5]">
            Simulate real customers to test product, UX, and campaigns before you go live.
            <br className="hidden md:block" />
            Evidence in hours, not weeks.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;