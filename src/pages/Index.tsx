import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyWeBuild from "@/components/WhyWeBuild";
import WhatWeDo from "@/components/WhatWeDo";
import PrototypeShowcase from "@/components/PrototypeShowcase";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const Index = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  useScrollRevealMultiple();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {!hasScrolled && <div className="h-screen" />}
      {hasScrolled && (
        <>
          <WhyWeBuild />
          <PrototypeShowcase />
          <WhatWeDo />
          <Founders />
          <Testimonials />
          <Insights />
          <BookDemo />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
