import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";
import { analytics } from "@/lib/analytics";

const Hero = () => {
  const navigate = useNavigate();

  const handleBrand = () => {
    analytics.ctaClick("I'm a Brand", "hero");
    navigate("/brand");
  };

  const handleTwin = () => {
    analytics.ctaClick("Build My Twin", "hero");
    navigate("/twins");
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight scroll-reveal">
            <span className="text-foreground">The Customer Intelligence</span>
            <br />
            <span className="text-gradient">Marketplace</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed scroll-reveal stagger-1">
            Where consumers build AI twins and brands run instant market research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-reveal stagger-2">
            <Button 
              onClick={handleBrand}
              size="lg"
              className="min-w-[180px] font-medium text-base py-6"
            >
              I'm a Brand
              <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button 
              onClick={handleTwin}
              variant="outline" 
              size="lg"
              className="min-w-[180px] font-medium text-base py-6"
            >
              Build My Twin
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
