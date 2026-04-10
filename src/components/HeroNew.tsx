import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BarChart3, Tag, MessageCircle } from "lucide-react";
import { analytics } from "@/lib/analytics";

// ────────────────────────────────────────────
// Left-side: Twin Persona Cards
// ────────────────────────────────────────────

const twinPersonas = [
  { photo: "https://randomuser.me/api/portraits/women/65.jpg", label: "Health-Conscious" },
  { photo: "https://randomuser.me/api/portraits/women/68.jpg", label: "Young Professional" },
  { photo: "https://randomuser.me/api/portraits/men/75.jpg", label: "Value Seeker" },
];

const CARD_STYLE = "rounded-[14px] bg-card border border-border/40 overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)]";
const CARD_SIZE = { width: 170, height: 150 };

const TwinPersonaCard = ({ index }: { index: number }) => {
  const persona = twinPersonas[index];
  return (
    <div className={`hero-card ${CARD_STYLE} flex flex-col items-center justify-center gap-2.5`} style={{ width: CARD_SIZE.width, height: CARD_SIZE.height, padding: 18 }}>
      <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-border/30 shrink-0">
        <img src={persona.photo} alt={persona.label} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <span className="px-3 py-0.5 rounded-full text-[12px] font-medium bg-muted/50 text-muted-foreground text-center">
        {persona.label}
      </span>
    </div>
  );
};

// ────────────────────────────────────────────
// Right-side: Research Node Cards
// ────────────────────────────────────────────

const ConceptTestingCard = () => (
  <div className={`hero-card ${CARD_STYLE} flex flex-col`} style={{ width: CARD_SIZE.width, height: CARD_SIZE.height, padding: 16 }}>
    <div className="flex items-center gap-2 mb-2">
      <BarChart3 size={16} className="text-[#B6E52A] shrink-0" />
      <p style={{ fontSize: 13, fontWeight: 600, color: "#E5E5E5" }}>Concept Testing</p>
    </div>
    <div className="flex items-end gap-1.5 px-1" style={{ height: 48 }}>
      {[38, 55, 44, 65, 80].map((h, i) => (
        <div key={i} style={{
          flex: 1,
          height: `${h}%`,
          borderRadius: 3,
          background: i === 4 ? "#B6E52A" : i === 3 ? "rgba(182,229,42,0.4)" : "#3A3A3A",
        }} />
      ))}
    </div>
    <div className="flex justify-between px-1 mt-1.5">
      <span style={{ fontSize: 9, color: "#555" }}>A</span>
      <span style={{ fontSize: 9, color: "#555" }}>B</span>
      <span style={{ fontSize: 9, color: "#555" }}>C</span>
      <span style={{ fontSize: 9, color: "#555" }}>D</span>
      <span style={{ fontSize: 9, color: "#B6E52A" }}>E</span>
    </div>
  </div>
);

const PricingSensitivityCard = () => (
  <div className={`hero-card ${CARD_STYLE} flex flex-col`} style={{ width: CARD_SIZE.width, height: CARD_SIZE.height, padding: 16 }}>
    <div className="flex items-center gap-2 mb-2">
      <Tag size={16} className="text-[#B6E52A] shrink-0" />
      <p style={{ fontSize: 13, fontWeight: 600, color: "#E5E5E5" }}>Pricing Sensitivity</p>
    </div>
    <div style={{ padding: "0 4px" }}>
      <svg width="100%" height="50" viewBox="0 0 130 50" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        <line x1="0" y1="12" x2="130" y2="12" stroke="#2A2A2A" strokeWidth="0.5" />
        <line x1="0" y1="25" x2="130" y2="25" stroke="#2A2A2A" strokeWidth="0.5" />
        <line x1="0" y1="38" x2="130" y2="38" stroke="#2A2A2A" strokeWidth="0.5" />
        {/* Area fill */}
        <path d="M10,40 L35,32 L65,18 L95,10 L120,6 L120,48 L10,48 Z" fill="rgba(182,229,42,0.08)" />
        {/* Line */}
        <polyline points="10,40 35,32 65,18 95,10 120,6" stroke="#B6E52A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots */}
        <circle cx="10" cy="40" r="3" fill="#B6E52A" />
        <circle cx="65" cy="18" r="3" fill="#B6E52A" />
        <circle cx="120" cy="6" r="3" fill="#B6E52A" />
      </svg>
    </div>
  </div>
);

const MessageTestingCard = () => (
  <div className={`hero-card ${CARD_STYLE} flex flex-col`} style={{ width: CARD_SIZE.width, height: CARD_SIZE.height, padding: 16 }}>
    <div className="flex items-center gap-2 mb-2">
      <MessageCircle size={16} className="text-[#B6E52A] shrink-0" />
      <p style={{ fontSize: 13, fontWeight: 600, color: "#E5E5E5" }}>Message Testing</p>
    </div>
    <div className="flex items-center gap-3 px-1">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#2E2E2E" strokeWidth="5" fill="none" />
        <circle cx="24" cy="24" r="20" stroke="#B6E52A" strokeWidth="5" fill="none"
          strokeDasharray={`${0.73 * 2 * Math.PI * 20} ${2 * Math.PI * 20}`}
          strokeLinecap="round" transform="rotate(-90 24 24)" />
        <text x="24" y="25" textAnchor="middle" dominantBaseline="middle" fill="#B6E52A" fontSize="12" fontWeight="700">73%</text>
      </svg>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B6E52A" }} />
          <span style={{ fontSize: 10, color: "#888" }}>Positive</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2E2E2E" }} />
          <span style={{ fontSize: 10, color: "#555" }}>Neutral</span>
        </div>
      </div>
    </div>
  </div>
);

// ────────────────────────────────────────────
// Dynamic Connection Lines
// ────────────────────────────────────────────

interface Point { x: number; y: number }
interface LineData { card: Point; hub: Point }

const ConnectionLines = ({ lineData }: { lineData: LineData[] }) => {
  const getDotsAlongLine = (a: Point, b: Point, count: number): Point[] => {
    const dots: Point[] = [];
    for (let i = 1; i <= count; i++) {
      const t = i / (count + 1);
      dots.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    }
    return dots;
  };

  const getPathId = (i: number) => `conn-path-${i}`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        {lineData.map((ld, i) => (
          <path
            key={`def-${i}`}
            id={getPathId(i)}
            d={`M${ld.card.x},${ld.card.y} L${ld.hub.x},${ld.hub.y}`}
            fill="none"
          />
        ))}
      </defs>

      {lineData.map((ld, i) => {
        const dots = getDotsAlongLine(ld.card, ld.hub, 4);
        return (
          <g key={i}>
            <line
              x1={ld.card.x} y1={ld.card.y}
              x2={ld.hub.x} y2={ld.hub.y}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
            {/* Dot at card edge */}
            <circle cx={ld.card.x} cy={ld.card.y} r="4" fill="rgba(182, 229, 42, 0.3)" />
            <circle cx={ld.card.x} cy={ld.card.y} r="2" fill="rgba(182, 229, 42, 0.6)" />
            {dots.map((d, j) => (
              <circle key={j} cx={d.x} cy={d.y} r="2" fill="rgba(182, 229, 42, 0.15)" />
            ))}
            <circle r="3" fill="rgba(182, 229, 42, 0.5)">
              <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`}>
                <mpath href={`#${getPathId(i)}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.7;0.7;0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="r" values="2;3.5;2" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          </g>
        );
      })}

      {lineData.length >= 6 && [lineData[0].hub, lineData[3].hub].map((h, i) => (
        <g key={`hub-${i}`}>
          <circle cx={h.x} cy={h.y} r="14" fill="rgba(182, 229, 42, 0.03)">
            <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={h.x} cy={h.y} r="6" fill="none" stroke="rgba(182, 229, 42, 0.12)" strokeWidth="1" />
          <circle cx={h.x} cy={h.y} r="3" fill="rgba(182, 229, 42, 0.45)" />
          <circle cx={h.x} cy={h.y} r="1.5" fill="rgba(182, 229, 42, 0.8)" />
        </g>
      ))}
    </svg>
  );
};

// ────────────────────────────────────────────
// Trust Bar
// ────────────────────────────────────────────

const trustItems = [
  { value: "10K+", label: "AI Twins" },
  { value: "50+", label: "Brand Partners" },
  { value: "<2min", label: "Avg. Insight" },
];

const TrustBar = () => (
  <motion.div
    className="flex items-center justify-center gap-6"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.9 }}
    style={{
      marginTop: 40,
      paddingTop: 24,
      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      maxWidth: 500,
      width: "100%",
    }}
  >
    {trustItems.map((item, i) => (
      <div key={item.label} className="flex items-center gap-6">
        {i > 0 && <span style={{ color: "#555", fontSize: 18 }}>&middot;</span>}
        <div className="text-center">
          <p style={{ fontSize: 18, fontWeight: 700, color: "#F5F5F5" }}>{item.value}</p>
          <p style={{ fontSize: 13, color: "#888" }}>{item.label}</p>
        </div>
      </div>
    ))}
  </motion.div>
);

// ────────────────────────────────────────────
// Main Hero
// ────────────────────────────────────────────

const HeroNew = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const [lineData, setLineData] = useState<LineData[]>([]);

  const measure = useCallback(() => {
    const section = sectionRef.current;
    const center = centerRef.current;
    const leftEls = [l0.current, l1.current, l2.current];
    const rightEls = [r0.current, r1.current, r2.current];

    if (!section || !center) return;
    if (leftEls.some(e => !e) || rightEls.some(e => !e)) return;

    const sRect = section.getBoundingClientRect();
    const cRect = center.getBoundingClientRect();

    const hubLx = cRect.left - sRect.left + 40;
    const hubRx = cRect.right - sRect.left - 40;
    const hubY = sRect.height / 2;

    const newData: LineData[] = [];

    leftEls.forEach((el) => {
      if (!el) return;
      const card = el.querySelector('.hero-card') || el;
      const r = card.getBoundingClientRect();
      newData.push({
        card: { x: r.right - sRect.left, y: r.top - sRect.top + r.height / 2 },
        hub: { x: hubLx, y: hubY },
      });
    });

    rightEls.forEach((el) => {
      if (!el) return;
      const card = el.querySelector('.hero-card') || el;
      const r = card.getBoundingClientRect();
      newData.push({
        card: { x: r.left - sRect.left, y: r.top - sRect.top + r.height / 2 },
        hub: { x: hubRx, y: hubY },
      });
    });

    setLineData(newData);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(measure, 600),
      setTimeout(measure, 1300),
      setTimeout(measure, 2200),
    ];
    window.addEventListener("resize", measure);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const handleGetStarted = () => {
    analytics.ctaClick("Get Started", "hero");
    const el = document.getElementById("pilot-access");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleHowItWorks = () => {
    analytics.ctaClick("See How It Works", "hero");
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-background py-16 lg:py-20">
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient blurs */}
      <div className="absolute top-[-10%] left-[20%] w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-primary/[0.02] blur-[140px] z-0" />
      <div className="absolute bottom-[-10%] right-[20%] w-[min(400px,70vw)] h-[min(400px,70vw)] rounded-full bg-secondary/[0.015] blur-[120px] z-0" />

      {/* SVG lines — hidden on mobile */}
      {lineData.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{ zIndex: 1 }}
        >
          <ConnectionLines lineData={lineData} />
        </motion.div>
      )}

      {/* Main grid */}
      <div ref={containerRef} className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_180px] items-center" style={{ columnGap: "clamp(40px, 8vw, 120px)" }}>

          {/* LEFT COLUMN — Twin Persona Cards (staggered zigzag) */}
          <div className="hidden lg:flex flex-col items-end gap-[120px]">
            <motion.div ref={l0}
              style={{ marginRight: 40 }}
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <TwinPersonaCard index={0} />
            </motion.div>
            <motion.div ref={l1}
              style={{ marginRight: 0 }}
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <TwinPersonaCard index={1} />
            </motion.div>
            <motion.div ref={l2}
              style={{ marginRight: 40 }}
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <TwinPersonaCard index={2} />
            </motion.div>
          </div>

          {/* CENTER COLUMN */}
          <div ref={centerRef} className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/[0.08] text-primary text-[12px] font-semibold tracking-[2px] uppercase">
                <Sparkles size={12} />
                AI-Powered Customer Intelligence
              </span>
            </motion.div>

            <motion.h1
              className="text-[44px] sm:text-6xl md:text-[68px] lg:text-[76px] font-bold leading-[1.06] tracking-[-0.025em] text-foreground mt-7"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              The Customer
              <br />
              Intelligence
              <br />
              <span className="text-gradient">Platform</span>
            </motion.h1>

            <motion.p
              className="text-[16px] md:text-[18px] text-muted-foreground max-w-[420px] leading-relaxed mt-5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Where consumers build AI twins and brands run instant market research.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="min-w-[160px] font-semibold text-[14px] h-11 gap-2 group"
              >
                Get Started
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <button
                onClick={handleHowItWorks}
                className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium flex items-center gap-1.5 py-2 px-1"
              >
                See How It Works
                <ArrowRight size={13} className="opacity-40" />
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN — Research Node Cards (staggered, mirrored) */}
          <div className="hidden lg:flex flex-col items-start gap-[120px]">
            <motion.div ref={r0}
              style={{ marginLeft: 40 }}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <ConceptTestingCard />
            </motion.div>
            <motion.div ref={r1}
              style={{ marginLeft: 0 }}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <PricingSensitivityCard />
            </motion.div>
            <motion.div ref={r2}
              style={{ marginLeft: 40 }}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <MessageTestingCard />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroNew;
