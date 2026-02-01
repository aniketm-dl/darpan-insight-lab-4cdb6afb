import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeEnable from "@/components/WhatWeEnable";
import HowItWorks from "@/components/HowItWorks";
import PlaygroundSection from "@/components/PlaygroundSection";
import UseCasesByRole from "@/components/UseCasesByRole";
import Outputs from "@/components/Outputs";
import FAQ from "@/components/FAQ";
import Founders from "@/components/Founders";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { initAnalytics } from "@/lib/analytics";

const Index = () => {
  useScrollRevealMultiple();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeEnable />
      <HowItWorks />
      <PlaygroundSection />
      <UseCasesByRole />
      <Outputs />
      <FAQ />
      <Founders />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default Index;
