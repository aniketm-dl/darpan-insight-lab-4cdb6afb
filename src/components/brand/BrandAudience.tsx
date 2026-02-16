import { Rocket, ShoppingBag, Building2, Landmark } from "lucide-react";

const segments = [
  { icon: Rocket, title: "Startups", desc: "Validate before launch" },
  { icon: ShoppingBag, title: "D2C Brands", desc: "Optimize campaigns" },
  { icon: Building2, title: "Agencies", desc: "Accelerate validation" },
  { icon: Landmark, title: "Enterprises", desc: "Supplement existing workflows" },
];

const BrandAudience = () => (
  <section className="section-padding bg-muted/30">
    <div className="section-container">
      <div className="text-center mb-10 scroll-reveal">
        <p className="eyebrow">Audience</p>
        <h2 className="section-heading">Who this is for</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {segments.map((s, i) => (
          <div key={i} className={`premium-card p-6 text-center scroll-reveal stagger-${(i % 4) + 1}`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold text-sm mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandAudience;
