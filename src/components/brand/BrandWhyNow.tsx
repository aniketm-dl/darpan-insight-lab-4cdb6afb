const points = [
  "AI models can simulate decision patterns.",
  "Digital twins are computationally viable.",
  "Traditional research remains unchanged.",
];

const BrandWhyNow = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <div className="max-w-2xl mx-auto text-center scroll-reveal">
        <p className="eyebrow">Timing</p>
        <h2 className="section-heading mb-8">Why now</h2>
        <ul className="space-y-3 mb-8">
          {points.map((p, i) => (
            <li key={i} className="text-muted-foreground text-base leading-relaxed">{p}</li>
          ))}
        </ul>
        <p className="text-foreground font-medium text-lg italic">
          The infrastructure for insight is shifting.
        </p>
      </div>

      {/* Subtle animated dots/network */}
      <div className="mt-12 flex justify-center scroll-reveal stagger-2">
        <div className="relative w-64 h-32">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30 animate-[pulse_3s_ease-in-out_infinite]"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 35}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 128">
            {[
              [30, 20, 90, 55], [90, 55, 160, 20], [160, 20, 220, 55],
              [30, 55, 90, 90], [90, 90, 160, 55], [160, 55, 220, 90],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default BrandWhyNow;
