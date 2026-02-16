import { Users, Cpu, BarChart3, ArrowRight, ArrowLeft } from "lucide-react";

const BrandShift = () => (
  <section className="section-padding bg-muted/30">
    <div className="section-container">
      <div className="text-center mb-12 scroll-reveal">
        <p className="eyebrow">The Shift</p>
        <h2 className="section-heading">A new research infrastructure</h2>
        <p className="body-text max-w-xl mx-auto mt-4">
          Darpan builds AI-powered digital twins of consumers.
          Brands run simulations instantly.
          No recruiting. No waiting. No agency overhead.
        </p>
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
