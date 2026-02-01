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

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-background pt-16">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-primary">From Hunches</span>{" "}
            <span className="text-foreground">to</span>{" "}
            <span className="text-secondary inline-block min-w-[140px] md:min-w-[180px] lg:min-w-[220px] text-left">
              {typedText}
              <span className="animate-pulse opacity-60">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Simulate real customers to test product, UX, and campaigns before you go live — evidence in hours, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up">
            <Button 
              onClick={handleOpenPlayground}
              size="lg"
              className="min-w-[180px] font-medium"
            >
              Open Playground
            </Button>
            <Button 
              onClick={handleBookDemo}
              variant="outline" 
              size="lg"
              className="min-w-[180px] font-medium"
            >
              Book a Demo
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
