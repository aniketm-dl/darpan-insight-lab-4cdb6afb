import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";
import { analytics } from "@/lib/analytics";

const words = ["Evidence", "Insights", "Actions", "Results"];

const getRandomWord = (currentWord: string): string => {
  const availableWords = words.filter(word => word !== currentWord);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const currentWordRef = useRef(words[0]);
  const navigate = useNavigate();
  
  useEffect(() => {
    let isMounted = true;
    let typingTimeout: NodeJS.Timeout;
    let erasingTimeout: NodeJS.Timeout;
    let nextCycleTimeout: NodeJS.Timeout;
    
    const typeWord = (word: string, index: number) => {
      if (!isMounted) return;
      
      if (index <= word.length) {
        setTypedText(word.slice(0, index));
        typingTimeout = setTimeout(() => typeWord(word, index + 1), 120);
      } else {
        // Pause then start erasing
        erasingTimeout = setTimeout(() => eraseWord(word, word.length), 1800);
      }
    };
    
    const eraseWord = (word: string, index: number) => {
      if (!isMounted) return;
      
      if (index >= 0) {
        setTypedText(word.slice(0, index));
        typingTimeout = setTimeout(() => eraseWord(word, index - 1), 80);
      } else {
        // Pick next word and start typing
        currentWordRef.current = getRandomWord(word);
        nextCycleTimeout = setTimeout(() => typeWord(currentWordRef.current, 0), 800);
      }
    };
    
    // Start the cycle
    typeWord(currentWordRef.current, 0);
    
    return () => {
      isMounted = false;
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(nextCycleTimeout);
    };
  }, []);

  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("hero");
    navigate("/playground");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "hero");
    const element = document.getElementById("book-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTakeSurvey = () => {
    analytics.ctaClick("Take Survey", "hero");
    navigate("/survey");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
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
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-primary">From Hunches</span>{" "}
            <span className="text-foreground">to</span>
            <br className="sm:hidden" />
            <span className="text-secondary inline-flex justify-center w-[200px] md:w-[260px] lg:w-[320px]">
              {typedText}
              <span className="animate-pulse opacity-60">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Simulate real customers to test product, UX, and campaigns before you go live — evidence in hours, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleOpenPlayground}
              size="lg"
              className="min-w-[180px] font-medium text-base py-6"
            >
              Open Playground
            </Button>
            <Button 
              onClick={handleBookDemo}
              variant="outline" 
              size="lg"
              className="min-w-[180px] font-medium text-base py-6"
            >
              Book a Demo
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* Survey nudge */}
          <div className="mt-10 pt-8 border-t border-border/30 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-3">
              Help us build better products for you
            </p>
            <Button 
              onClick={handleTakeSurvey}
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80 hover:bg-primary/5"
            >
              Take a quick survey
              <ArrowRight className="ml-1.5" size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
