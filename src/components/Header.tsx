import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
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
              <span className="text-xl font-bold text-white tracking-tight">DARPAN</span>
              <span className="text-xl font-bold text-neon-green tracking-tight ml-0.5">LABS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("what-we-do")}
              className="text-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection("founders")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Founders
            </button>
            <Button 
              onClick={() => scrollToSection("book-demo")}
              variant="hero" 
              size="lg"
            >
              Book a Demo
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
                onClick={() => scrollToSection("what-we-do")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                What We Do
              </button>
              <button 
                onClick={() => scrollToSection("founders")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Founders
              </button>
              <Button 
                onClick={() => scrollToSection("book-demo")}
                variant="hero" 
                size="lg"
                className="w-full"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;