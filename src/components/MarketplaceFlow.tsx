import marketplaceFlowImg from "@/assets/marketplace-flow.png";

const MarketplaceFlow = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <img
        src={marketplaceFlowImg}
        alt="Darpan Labs marketplace flow — consumers share insights, brands get research, both earn value"
        className="w-full h-auto rounded-xl"
        loading="lazy"
      />
    </div>
  );
};

export default MarketplaceFlow;
