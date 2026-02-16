import { useState, useEffect, useCallback } from "react";

const MIDDLE_TRADITIONAL = "RECRUIT → SURVEY → ANALYSIS";
const MIDDLE_DARPAN = "SIMULATE";

const ComparisonPanel = () => {
  const [middleText, setMiddleText] = useState(MIDDLE_TRADITIONAL);
  const [phase, setPhase] = useState<"traditional" | "deleting" | "typing" | "darpan" | "deleting-back" | "typing-back">("traditional");
  const [labelPhase, setLabelPhase] = useState<"traditional" | "darpan">("traditional");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const runCycle = useCallback(async () => {
    // Hold traditional
    await sleep(2500);

    // Backspace middle text
    setPhase("deleting");
    const trad = MIDDLE_TRADITIONAL;
    for (let i = trad.length; i >= 0; i--) {
      setMiddleText(trad.slice(0, i));
      await sleep(30);
    }

    // Switch label
    setLabelPhase("darpan");

    // Type darpan text
    setPhase("typing");
    const darp = MIDDLE_DARPAN;
    for (let i = 0; i <= darp.length; i++) {
      setMiddleText(darp.slice(0, i));
      await sleep(60);
    }

    setPhase("darpan");

    // Hold darpan
    await sleep(2500);

    // Backspace darpan text
    setPhase("deleting-back");
    for (let i = darp.length; i >= 0; i--) {
      setMiddleText(darp.slice(0, i));
      await sleep(30);
    }

    // Switch label back
    setLabelPhase("traditional");

    // Type traditional text back
    setPhase("typing-back");
    for (let i = 0; i <= trad.length; i++) {
      setMiddleText(trad.slice(0, i));
      await sleep(25);
    }

    setPhase("traditional");
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        await runCycle();
      }
    };
    loop();
    return () => { cancelled = true; };
  }, [runCycle]);

  const isDarpan = labelPhase === "darpan";
  const middleActive = phase === "typing" || phase === "darpan" || phase === "deleting-back";

  return (
    <div className="premium-card p-6 md:p-8 border-border/50 max-w-xl mx-auto">
      {/* Process flow */}
      <div className="flex items-center justify-center mb-6 min-h-[48px]">
        {/* SELECT */}
        <Step label="SELECT" active={isDarpan} />
        <Connector active={isDarpan} />

        {/* Middle — typewriter area */}
        <div
          className={`flex-shrink-0 rounded-md px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-colors duration-300 min-w-[40px] text-center ${
            middleActive
              ? "border-primary/60 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.15)]"
              : "border-border/60 text-muted-foreground"
          }`}
        >
          {middleText}
          <span className="inline-block w-px h-3 ml-0.5 bg-current animate-pulse align-middle" />
        </div>

        <Connector active={isDarpan} />
        {/* INSIGHTS */}
        <Step label="INSIGHTS" active={isDarpan} />
      </div>

      {/* Label */}
      <div className="text-center text-xs font-medium tracking-wide min-h-[20px]">
        {isDarpan ? (
          <span className="transition-opacity duration-300">
            <span className="text-muted-foreground line-through mr-2">Traditional Market Research</span>
            <span className="text-primary">Darpan Labs</span>
          </span>
        ) : (
          <span className="text-muted-foreground transition-opacity duration-300">
            Traditional Market Research
          </span>
        )}
      </div>
    </div>
  );
};

const Step = ({ label, active }: { label: string; active: boolean }) => (
  <div
    className={`flex-shrink-0 rounded-md px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all duration-300 ${
      active
        ? "border-primary/60 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.15)]"
        : "border-border/60 text-muted-foreground"
    }`}
  >
    {label}
  </div>
);

const Connector = ({ active }: { active: boolean }) => (
  <div
    className={`flex-shrink-0 transition-all duration-300 ${
      active ? "w-6 md:w-10 h-[2px] bg-primary/50" : "w-4 md:w-6 h-px bg-border/60"
    }`}
  />
);

export default ComparisonPanel;
