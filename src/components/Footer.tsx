import { ExternalLink } from "lucide-react";
import { analytics } from "@/lib/analytics";

const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const Footer = () => {
  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick("footer");
    window.open(PLAYGROUND_URL, "_blank", "noopener,noreferrer");
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left - Logo and Tagline */}
          <div>
            <div className="flex items-baseline mb-3">
              <span className="text-xl font-bold text-foreground tracking-tight">DARPAN</span>
              <span className="text-xl font-bold text-primary tracking-tight ml-0.5">LABS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered customer twins for instant insights and faster decisions
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col space-y-3">
            <button 
              onClick={handleOpenPlayground}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left flex items-center gap-2"
            >
              Playground
              <ExternalLink className="w-3 h-3" />
            </button>
            <button 
              onClick={handleBookDemo}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
            >
              Book a Demo
            </button>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms
            </a>
          </div>

          {/* Right - Contact */}
          <div className="md:text-right">
            <p className="text-muted-foreground text-sm mb-2">Contact</p>
            <a 
              href="mailto:hello@darpanlabs.ai" 
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              hello@darpanlabs.ai
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Darpan Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
