const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
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