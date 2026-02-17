import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Founders from "@/components/Founders";
import MarketplaceFlow from "@/components/MarketplaceFlow";
import PageHeader from "@/components/PageHeader";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const navLinks = [
  { label: "Marketplace", section: "marketplace-flow" },
  { label: "Team", section: "founders" },
];

const Home = () => {
  const navigate = useNavigate();
  useScrollRevealMultiple();

  const headerCta = (
    <>
      <Button onClick={() => navigate("/brand")} size="sm" className="font-medium">
        I'm a Brand
      </Button>
      <Button onClick={() => navigate("/twins")} size="sm" className="font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90">
        Build My Twin
      </Button>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <PageHeader navLinks={navLinks} cta={headerCta} />

      <section className="h-screen flex items-center justify-center pt-16">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            The Customer Intelligence
            <br />
            <span className="text-primary">Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Where consumers build AI twins and brands run instant market research.
          </p>

          <div id="marketplace-flow" className="mb-12 scroll-reveal">
            <MarketplaceFlow />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/brand")}
              size="xl"
              className="min-w-[180px] font-medium"
            >
              I'm a Brand
            </Button>
            <Button
              onClick={() => navigate("/twins")}
              size="xl"
              className="min-w-[180px] font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Build My Twin
            </Button>
          </div>
        </div>
      </section>
      <Founders />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="section-container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="text-foreground font-bold text-lg tracking-tight">
                DARPAN<span className="text-primary">LABS</span>
              </span>
              <p className="text-muted-foreground text-sm mt-3 max-w-xs">
                AI-powered customer twins for instant insights and faster decisions
              </p>
            </div>
            <div>
              <a href="mailto:aniketm@darpanlabs.ai" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Book a Demo
              </a>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground text-sm font-medium mb-2">Contact</p>
              <a href="mailto:aniketm@darpanlabs.ai" className="text-foreground text-sm hover:text-primary transition-colors">
                aniketm@darpanlabs.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
