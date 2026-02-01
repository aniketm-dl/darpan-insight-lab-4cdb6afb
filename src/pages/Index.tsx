import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Playground from "@/components/Playground";
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
      <Playground />
      <WhatWeDo />
      <Founders />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default Index;
