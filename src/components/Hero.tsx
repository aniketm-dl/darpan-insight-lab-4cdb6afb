import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";
import { analytics } from "@/lib/analytics";

const words = ["Evidence", "Insights", "Actions", "Results"];
const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const getRandomWord = (currentWord: string): string => {
  const availableWords = words.filter(word => word !== currentWord);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const currentWordRef = useRef(words[0]);
  
  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    
    const startTypingCycle = () => {
      currentIndex = 0;
      isTyping = true;
      setTypedText("");
      const currentWord = currentWordRef.current;
      
      const typingInterval = setInterval(() => {
        if (isTyping && currentIndex < currentWord.length) {
          setTypedText(currentWord.slice(0, currentIndex + 1));
          currentIndex++;
        } else if (isTyping) {
          isTyping = false;
          setTimeout(() => {
            const erasingInterval = setInterval(() => {
              if (currentIndex > 0) {
                currentIndex--;
                setTypedText(currentWord.slice(0, currentIndex));
              } else {
                clearInterval(erasingInterval);
                currentWordRef.current = getRandomWord(currentWord);
                setTimeout(startTypingCycle, 1000);
              }
            }, 100);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 150);
    };
    
    startTypingCycle();
    
    return () => {};
  }, []);

  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("hero");
    window.open(PLAYGROUND_URL, "_blank", "noopener,noreferrer");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "hero");
    const element = document.getElementById("book-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-background">
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
            <span className="text-primary">From Hunches</span>{" "}
            <span className="text-foreground">to</span>{" "}
            <span className="text-secondary">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-8 max-w-5xl mx-auto leading-[1.5]">
            Simulate real customers to test product, UX, and campaigns before you go live —
            <br className="hidden md:block" />
            evidence in hours, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={handleOpenPlayground}
              variant="hero" 
              size="xl"
              className="min-w-[200px]"
            >
              Open Playground
              <ExternalLink className="ml-2" size={20} />
            </Button>
            <Button 
              onClick={handleBookDemo}
              variant="outline" 
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
