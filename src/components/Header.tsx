import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { analytics } from "@/lib/analytics";

const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("header");
    window.open(PLAYGROUND_URL, "_blank", "noopener,noreferrer");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "header");
    scrollToSection("book-demo");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-baseline hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold text-foreground tracking-tight">DARPAN</span>
              <span className="text-xl font-bold text-primary tracking-tight ml-0.5">LABS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("what-we-enable")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              What We Enable
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("use-cases")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              FAQ
            </button>
            
            {/* Secondary CTA - Text */}
            <button 
              onClick={handleBookDemo}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Book a Demo
            </button>
            
            {/* Primary CTA - Button */}
            <Button 
              onClick={handleOpenPlayground}
              variant="hero" 
              size="default"
            >
              Open Playground
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection("what-we-enable")}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                What We Enable
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("use-cases")}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                FAQ
              </button>
              <button 
                onClick={handleBookDemo}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Book a Demo
              </button>
              <Button 
                onClick={handleOpenPlayground}
                variant="hero" 
                size="lg"
                className="w-full"
              >
                Open Playground
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
