import { useNavigate } from "react-router-dom";
import { analytics } from "@/lib/analytics";

const Footer = () => {
  const navigate = useNavigate();

  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("footer");
    navigate("/playground");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", "footer");
    const element = document.getElementById("book-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left - Logo and Tagline */}
          <div>
            <div className="flex items-baseline mb-2">
              <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
              <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
            </div>
            <p className="text-muted-foreground text-xs">
              AI-powered customer twins for instant insights and faster decisions
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col space-y-2">
            <button 
              onClick={handleOpenPlayground}
              className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
            >
              Playground
            </button>
            <button 
              onClick={handleBookDemo}
              className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left"
            >
              Book a Demo
            </button>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-xs"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-xs"
            >
              Terms
            </a>
          </div>

          {/* Right - Contact */}
          <div className="md:text-right">
            <p className="text-muted-foreground text-xs mb-1">Contact</p>
            <a 
              href="mailto:aniketm@darpanlabs.ai" 
              className="text-foreground hover:text-primary transition-colors text-xs"
            >
              aniketm@darpanlabs.ai
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Darpan Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
