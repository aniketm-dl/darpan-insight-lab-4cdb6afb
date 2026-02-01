import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { analytics } from "@/lib/analytics";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate("/playground");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "header");
    scrollToSection("book-demo");
  };

  const navLinks = [
    { label: "Product", section: "what-we-enable" },
    { label: "How it works", section: "how-it-works" },
    { label: "Playground", section: "playground" },
    { label: "Use cases", section: "use-cases" },
    { label: "Team", section: "founders" },
    { label: "FAQ", section: "faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-baseline hover:opacity-80 transition-opacity"
            >
              <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
              <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button 
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm px-3 py-2"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={handleBookDemo}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm px-3 py-2"
            >
              Book a Demo
            </button>
            <Button 
              onClick={handleOpenPlayground}
              size="sm"
              className="font-medium"
            >
              Open Playground
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button 
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <button 
                  onClick={handleBookDemo}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                >
                  Book a Demo
                </button>
                <Button 
                  onClick={handleOpenPlayground}
                  size="sm"
                  className="w-full font-medium"
                >
                  Open Playground
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
