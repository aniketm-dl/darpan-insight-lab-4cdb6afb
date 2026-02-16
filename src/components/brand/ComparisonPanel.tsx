import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const traditionalSteps = [
  "Define Scope",
  "Find Vendor",
  "Recruit Panel",
  "Screen Participants",
  "Design Survey",
  "Launch Fieldwork",
  "Wait for Responses",
  "Clean Data",
  "Analyze Results",
  "Generate Report",
];

const darpanSteps = [
  "Select Segment",
  "Define Scenario",
  "Run Simulation",
  "Receive Insights",
];

const ComparisonPanel = () => {
  const [mode, setMode] = useState<"traditional" | "darpan">("darpan");
  const isDarpan = mode === "darpan";
  const steps = isDarpan ? darpanSteps : traditionalSteps;

  return (
    <TooltipProvider delayDuration={100}>
      <div className="premium-card p-6 md:p-8 border-border/50 max-w-xl mx-auto">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-1 mb-8 p-1 rounded-lg bg-muted/30 w-fit mx-auto">
          <button
            onClick={() => setMode("traditional")}
            className={`px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              !isDarpan
                ? "bg-destructive/20 text-destructive"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Traditional
          </button>
          <button
            onClick={() => setMode("darpan")}
            className={`px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              isDarpan
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Darpan
          </button>
        </div>

        {/* Nodes */}
        <div className="flex items-center justify-center gap-0 mb-6 min-h-[40px]">
          {steps.map((label, i) => (
            <div key={`${mode}-${i}`} className="flex items-center animate-fade-in" style={{ animationDelay: `${i * 30}ms` }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`rounded-full transition-all duration-200 cursor-default ${
                      isDarpan
                        ? "w-4 h-4 bg-primary/70 shadow-[0_0_8px_hsl(var(--primary)/0.3)]"
                        : "w-3 h-3 bg-muted-foreground/40"
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {label}
                </TooltipContent>
              </Tooltip>
              {i < steps.length - 1 && (
                <div
                  className={`h-px transition-all duration-200 ${
                    isDarpan
                      ? "w-8 md:w-12 bg-primary/40"
                      : "w-3 md:w-4 bg-muted-foreground/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <p className={`text-center text-xs transition-colors duration-200 ${
          isDarpan ? "text-primary" : "text-muted-foreground"
        }`}>
          {isDarpan
            ? "4 steps. Fully controlled. Minutes."
            : "10 steps. Multiple dependencies. 4–8 weeks."}
        </p>
      </div>
    </TooltipProvider>
  );
};

export default ComparisonPanel;
