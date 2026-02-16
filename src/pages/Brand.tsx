import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import BrandHero from "@/components/brand/BrandHero";
import BrandProblem from "@/components/brand/BrandProblem";
import BrandShift from "@/components/brand/BrandShift";
import BrandHowItWorks from "@/components/brand/BrandHowItWorks";
import BrandUseCases from "@/components/brand/BrandUseCases";
import BrandWhyNow from "@/components/brand/BrandWhyNow";
import BrandAudience from "@/components/brand/BrandAudience";
import BrandPilotAccess from "@/components/brand/BrandPilotAccess";
import BrandFAQ from "@/components/brand/BrandFAQ";
import BrandFooter from "@/components/brand/BrandFooter";

const Brand = () => {
  const navigate = useNavigate();
  useScrollRevealMultiple();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} />
            Back
          </button>
          <div className="flex items-baseline ml-auto">
            <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
            <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
          </div>
        </div>
      </header>

      <BrandHero />
      <BrandProblem />
      <BrandShift />
      <BrandHowItWorks />
      <BrandUseCases />
      <BrandWhyNow />
      <BrandAudience />
      <BrandPilotAccess />
      <BrandFAQ />
      <BrandFooter />
    </div>
  );
};

export default Brand;
