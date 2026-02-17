import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import PageHeader from "@/components/PageHeader";
import BrandHero from "@/components/brand/BrandHero";
import BrandProblem from "@/components/brand/BrandProblem";
import BrandShift from "@/components/brand/BrandShift";
import BrandHowItWorks from "@/components/brand/BrandHowItWorks";
import BrandUseCases from "@/components/brand/BrandUseCases";

import BrandAudience from "@/components/brand/BrandAudience";
import BrandPilotAccess from "@/components/brand/BrandPilotAccess";
import BrandFAQ from "@/components/brand/BrandFAQ";
import BrandFooter from "@/components/brand/BrandFooter";

const navLinks = [
  { label: "Problem", section: "brand-problem" },
  { label: "How It Works", section: "how-it-works" },
  { label: "Use Cases", section: "use-cases" },
  { label: "Audience", section: "brand-audience" },
  { label: "Pilot", section: "pilot-access" },
  { label: "FAQ", section: "brand-faq" },
];

const Brand = () => {
  useScrollRevealMultiple();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader navLinks={navLinks} showBack />

      <BrandHero />
      <BrandProblem />
      <BrandShift />
      <BrandHowItWorks />
      <BrandUseCases />
      
      <BrandAudience />
      <BrandPilotAccess />
      <BrandFAQ />
      <BrandFooter />
    </div>
  );
};

export default Brand;
