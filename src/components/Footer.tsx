import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Tagline */}
          <div>
            <div className="flex items-baseline mb-3">
              <span className="text-xl font-bold text-white tracking-tight">DARPAN</span>
              <span className="text-xl font-bold text-neon-green tracking-tight ml-0.5">LABS</span>
            </div>
            <p className="text-muted-foreground">
              AI-powered customer twins for instant insights and faster decisions
            </p>
          </div>

          {/* Middle - Contact */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:hello@darpanlabs.ai" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@darpanlabs.ai
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <div className="text-muted-foreground text-sm">
                  <div>+91-7432090337</div>
                  <div>+91-6290782830</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Links */}
          <div className="text-center md:text-right">
            <div className="space-x-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Darpan Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;