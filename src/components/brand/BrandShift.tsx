import { Users, Cpu, BarChart3, ArrowRight, ArrowLeft } from "lucide-react";

const BrandShift = () => (
  <section className="section-padding bg-muted/30">
    <div className="section-container">
      <div className="text-center mb-12 scroll-reveal">
        <p className="eyebrow">The Shift</p>
        <h2 className="section-heading">How Darpan Labs works</h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-4">
          <p className="body-text">
            Darpan Labs collects structured qualitative data through AI interviews. We model preferences, reasoning patterns, and decision behavior. All inputs are consented and intentionally structured.
          </p>
          <p className="body-text">
            Each digital twin represents how a specific person thinks and chooses. It is trained on real inputs, not synthetic assumptions.
          </p>
          <p className="body-text">
            Brands use these twins to simulate surveys, product tests, and pricing scenarios. This replaces repetitive panel recruitment with continuous simulation.
          </p>
        </div>
      </div>

      {/* Ecosystem diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 scroll-reveal stagger-1">
        <div className="premium-card p-6 text-center min-w-[160px]">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
            <Users className="w-7 h-7 text-secondary" />
          </div>
          <p className="text-foreground font-semibold text-sm">Consumers</p>
        </div>

        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <ArrowRight className="w-5 h-5 hidden md:block" />
          <ArrowLeft className="w-5 h-5 hidden md:block" />
          <span className="text-[10px] uppercase tracking-wider">data</span>
        </div>

        <div className="premium-card p-6 text-center min-w-[160px] border-primary/20">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Cpu className="w-7 h-7 text-primary" />
          </div>
          <p className="text-foreground font-semibold text-sm">Digital Twins</p>
        </div>

        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <ArrowRight className="w-5 h-5 hidden md:block" />
          <ArrowLeft className="w-5 h-5 hidden md:block" />
          <span className="text-[10px] uppercase tracking-wider">insights</span>
        </div>

        <div className="premium-card p-6 text-center min-w-[160px]">
          <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-3">
            <BarChart3 className="w-7 h-7 text-foreground" />
          </div>
          <p className="text-foreground font-semibold text-sm">Brand Dashboard</p>
        </div>
      </div>
    </div>
  </section>
);

export default BrandShift;
