import marketplaceFlowImg from "@/assets/marketplace-flow.png";

const MarketplaceFlow = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 relative">
      {/* Blend edges into background with gradient overlays */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={marketplaceFlowImg}
          alt="Darpan Labs marketplace flow — consumers share insights, brands get research, both earn value"
          className="w-full h-auto mix-blend-lighten"
          loading="lazy"
        />
        {/* Fade edges into background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, hsl(var(--background)) 0%, transparent 8%, transparent 92%, hsl(var(--background)) 100%),
              linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)
            `
          }}
        />
      </div>
    </div>
  );
};

export default MarketplaceFlow;
