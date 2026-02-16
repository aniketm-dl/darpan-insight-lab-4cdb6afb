import { useNavigate } from "react-router-dom";

const BrandFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-baseline mb-2">
              <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
              <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
            </div>
            <p className="text-muted-foreground text-xs">Customer Intelligence Marketplace</p>
          </div>

          <div className="flex flex-col space-y-2">
            <button onClick={() => navigate("/brand")} className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left">Brands</button>
            <button onClick={() => navigate("/twins")} className="text-muted-foreground hover:text-foreground transition-colors text-xs text-left">Twins</button>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Terms</a>
            <a href="mailto:aniketm@darpanlabs.ai" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Contact</a>
          </div>

          <div className="md:text-right">
            <p className="text-muted-foreground text-xs">Built by founders from IIM Ahmedabad.</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Darpan Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default BrandFooter;
