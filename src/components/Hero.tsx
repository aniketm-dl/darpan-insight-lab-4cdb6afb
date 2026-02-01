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
                setTimeout(startTypingCycle, 800);
              }
            }, 80);
          }, 1800);
          clearInterval(typingInterval);
        }
      }, 120);
    };
    
    startTypingCycle();
    
    return () => {};
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
            <span className="text-secondary">
              {typedText}
              <span className="animate-pulse opacity-60">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Simulate real customers to test product, UX, and campaigns before you go live —
            <br className="hidden md:block" />
            evidence in hours, not weeks.
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
