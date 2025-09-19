import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import PrototypeShowcase from "@/components/PrototypeShowcase";
import Prototype from "@/components/Prototype";
import UseCases from "@/components/UseCases";
import Founders from "@/components/Founders";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PrototypeShowcase />
      <WhatWeDo />
      <Prototype />
      <UseCases />
      <Founders />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default Index;
