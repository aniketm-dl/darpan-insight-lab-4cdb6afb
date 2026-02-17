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

  return (
    <div className="min-h-screen bg-background">
      <PageHeader navLinks={navLinks} />

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
              variant="outline"
              size="xl"
              className="min-w-[180px] font-medium"
            >
              Build My Twin
            </Button>
          </div>
        </div>
      </section>
      <Founders />
    </div>
  );
};

export default Home;
