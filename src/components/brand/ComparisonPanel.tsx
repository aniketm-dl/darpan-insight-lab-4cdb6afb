import { useState, useEffect } from "react";

const ComparisonPanel = () => {
  const [isDarpan, setIsDarpan] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDarpan((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="premium-card p-6 md:p-8 border-border/50 max-w-xl mx-auto">
      {/* Process flow */}
      <div className="flex items-center justify-center gap-0 mb-6 min-h-[48px]">
        {/* SELECT */}
        <Step label="SELECT" active={isDarpan} />
        <Connector active={isDarpan} />

        {/* RECRUIT - fades out in Darpan */}
        <div
          className="flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarpan ? 0 : 1,
            width: isDarpan ? 0 : undefined,
            overflow: "hidden",
          }}
        >
          <Step label="RECRUIT" active={false} />
          <Connector active={false} />
        </div>

        {/* SURVEY - fades out in Darpan */}
        <div
          className="flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarpan ? 0 : 1,
            width: isDarpan ? 0 : undefined,
            overflow: "hidden",
          }}
        >
          <Step label="SURVEY" active={false} />
          <Connector active={false} />
        </div>

        {/* SIMULATE - fades in for Darpan */}
        <div
          className="flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarpan ? 1 : 0,
            width: isDarpan ? undefined : 0,
            overflow: "hidden",
          }}
        >
          <Step label="SIMULATE" active={true} />
          <Connector active={true} />
        </div>

        {/* ANALYSIS - fades out in Darpan */}
        <div
          className="flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: isDarpan ? 0 : 1,
            width: isDarpan ? 0 : undefined,
            overflow: "hidden",
          }}
        >
          <Step label="ANALYSIS" active={false} />
          <Connector active={false} />
        </div>

        {/* INSIGHTS */}
        <Step label="INSIGHTS" active={isDarpan} />
      </div>

      {/* Summary text */}
      <p
        className={`text-center text-xs font-medium tracking-wide transition-colors duration-300 ${
          isDarpan ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {isDarpan ? "Darpan. Minutes." : "Traditional research. 4–8 weeks."}
      </p>
    </div>
  );
};

const Step = ({ label, active }: { label: string; active: boolean }) => (
  <div
    className={`flex-shrink-0 rounded-md px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all duration-300 ${
      active
        ? "border-primary/60 text-primary scale-105 shadow-[0_0_10px_hsl(var(--primary)/0.15)]"
        : "border-border/60 text-muted-foreground scale-100"
    }`}
  >
    {label}
  </div>
);

const Connector = ({ active }: { active: boolean }) => (
  <div
    className={`flex-shrink-0 transition-all duration-300 ${
      active ? "w-6 md:w-8 h-[2px] bg-primary/50" : "w-4 md:w-6 h-px bg-border/60"
    }`}
  />
);

export default ComparisonPanel;
