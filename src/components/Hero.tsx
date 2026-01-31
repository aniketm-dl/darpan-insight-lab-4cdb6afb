import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";

const words = ["Evidence", "Insights", "Actions", "Results"];

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
          // Finished typing, wait a bit then start erasing
          isTyping = false;
          setTimeout(() => {
            const erasingInterval = setInterval(() => {
              if (currentIndex > 0) {
                currentIndex--;
                setTypedText(currentWord.slice(0, currentIndex));
              } else {
                clearInterval(erasingInterval);
                // Pick a new random word different from current
                currentWordRef.current = getRandomWord(currentWord);
                // Wait before starting next cycle
                setTimeout(startTypingCycle, 1000);
              }
            }, 100);
          }, 2000); // Wait 2 seconds after typing completes
          clearInterval(typingInterval);
        }
      }, 150); // 150ms delay between each character
    };
    
    startTypingCycle();
    
    return () => {
      // Cleanup handled by intervals themselves
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
            <span className="text-neon-green">From Hunches</span>{" "}
            <span className="text-foreground">to</span>{" "}
            <span className="text-neon-blue">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-5xl mx-auto leading-[1.5]">
            Simulate real customers to test product, UX, and campaigns before you go live —
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
              onClick={() => window.location.href = "/survey"}
              variant="glass" 
              size="xl"
              className="min-w-[200px]"
            >
              Take a Survey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;