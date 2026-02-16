import { DollarSign, Clock, Ban } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    title: "Cost",
    line1: "Typical study costs $15,000 to $100,000.",
    line2: "Agencies dominate enterprise budgets.",
    color: "destructive",
  },
  {
    icon: Clock,
    title: "Speed",
    line1: "Studies take four to eight weeks.",
    line2: "Recruitment delays insights further.",
    color: "destructive",
  },
  {
    icon: Ban,
    title: "Access",
    line1: "70% of startups skip formal research.",
    line2: "Most decisions rely on intuition.",
    color: "destructive",
  },
];

const BrandProblem = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <div className="text-center mb-12 scroll-reveal">
        <p className="eyebrow">The Problem</p>
        <h2 className="section-heading">Why research fails most companies</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className={`premium-card p-8 scroll-reveal stagger-${i + 1}`}>
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
              <card.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-3">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-1">{card.line1}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.line2}</p>
          </div>
        ))}
      </div>

      {/* Minimal comparison bar */}
      <div className="mt-12 max-w-lg mx-auto scroll-reveal stagger-3">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs text-muted-foreground w-24 text-right">Enterprise</span>
          <div className="flex-1 h-3 rounded-full bg-destructive/10 overflow-hidden">
            <div className="h-full w-[85%] bg-destructive/40 rounded-full" />
          </div>
          <span className="text-xs text-muted-foreground">$100k</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground w-24 text-right">Darpan</span>
          <div className="flex-1 h-3 rounded-full bg-primary/10 overflow-hidden">
            <div className="h-full w-[12%] bg-primary/60 rounded-full" />
          </div>
          <span className="text-xs text-primary">Fraction</span>
        </div>
      </div>
    </div>
  </section>
);

export default BrandProblem;
