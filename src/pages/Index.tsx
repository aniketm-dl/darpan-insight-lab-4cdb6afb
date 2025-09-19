import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import PrototypeShowcase from "@/components/PrototypeShowcase";
import UseCases from "@/components/UseCases";
import Founders from "@/components/Founders";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollRevealMultiple();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PrototypeShowcase />
      <WhatWeDo />
      <UseCases />
      <Founders />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default Index;
