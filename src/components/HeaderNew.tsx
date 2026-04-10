import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { analytics } from "@/lib/analytics";

const navLinks = [
  { label: "Digital Twins", section: "digital-twins" },
  { label: "How It Works", section: "how-it-works" },
  { label: "Pilot Access", section: "pilot-access" },
  { label: "Team", section: "founders" },
];

const HeaderNew = () => {
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

  const handleNavClick = (link: typeof navLinks[number]) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(link.section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    analytics.ctaClick("Get Started", "header");
    const element = document.getElementById("pilot-access");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_12px_-4px_hsl(0_0%_0%/0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-baseline hover:opacity-80 transition-opacity"
          >
            <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
            <span className="text-lg font-bold text-primary tracking-tight ml-1">LABS</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm px-3.5 py-2 rounded-lg hover:bg-muted/40"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={handleGetStarted}
              size="sm"
              className="font-semibold gap-1.5 group"
            >
              Get Started
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-b border-border/60 bg-background/98 backdrop-blur-xl"
            >
              <div className="px-2 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.section}
                    onClick={() => handleNavClick(link)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors py-2.5 px-3 text-sm rounded-lg"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 px-1">
                  <Button
                    onClick={handleGetStarted}
                    size="sm"
                    className="w-full font-semibold gap-1.5"
                  >
                    Get Started
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default HeaderNew;
