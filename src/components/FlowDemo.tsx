import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  Users,
  MapPin,
  ShoppingCart,
  Play,
  Download,
  RotateCcw,
  LayoutGrid,
  FlaskConical,
  BarChart3,
  Settings,
  Star,
  Crosshair,
  DollarSign,
  Pencil,
  Quote,
  ArrowUp,
  Plus,
  Send,
} from "lucide-react";

// ────────────────────────────────────────────
// Types & Data
// ────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4;

const RESEARCH_QUESTION =
  "Which body wash concept resonates most with urban women aged 22-38?";


const conceptsData = [
  { name: "Herbal Fresh", desc: "Natural herbs with tea tree & eucalyptus blend", color: "#4ADE80", tint: "rgba(74, 222, 128, 0.04)", tintHover: "rgba(74, 222, 128, 0.08)" },
  { name: "Ocean Mist", desc: "Marine minerals with sea salt fragrance", color: "#38BDF8", tint: "rgba(56, 189, 248, 0.04)", tintHover: "rgba(56, 189, 248, 0.08)" },
  { name: "Citrus Grove", desc: "Citrus blend with vitamin C complex", color: "#FB923C", tint: "rgba(251, 146, 60, 0.04)", tintHover: "rgba(251, 146, 60, 0.08)" },
  { name: "Lavender Dream", desc: "Calming lavender with chamomile infusion", color: "#A78BFA", tint: "rgba(167, 139, 250, 0.04)", tintHover: "rgba(167, 139, 250, 0.08)" },
  { name: "Charcoal Clean", desc: "Activated charcoal deep cleanse formula", color: "#94A3B8", tint: "rgba(148, 163, 184, 0.04)", tintHover: "rgba(148, 163, 184, 0.08)" },
];

const metricsData = [
  { name: "Purchase Intent", priority: "High" as const },
  { name: "Uniqueness", priority: "Medium" as const },
  { name: "Relevance", priority: "High" as const },
  { name: "Price Sensitivity", priority: "Medium" as const },
];

const loadingSteps = [
  "Matching 250 AI twins to your audience",
  "Running concept evaluations",
  "Analyzing responses and scoring",
  "Generating recommendations",
];

const resultsConcepts = [
  { name: "Citrus Grove", purchase: 91, unique: 77, relevance: 88, price: 74, composite: 85, winner: true },
  { name: "Charcoal Clean", purchase: 85, unique: 91, relevance: 70, price: 58, composite: 79, winner: false },
  { name: "Herbal Fresh", purchase: 82, unique: 68, relevance: 79, price: 71, composite: 76, winner: false },
  { name: "Ocean Mist", purchase: 76, unique: 84, relevance: 72, price: 65, composite: 74, winner: false },
  { name: "Lavender Dream", purchase: 69, unique: 72, relevance: 81, price: 82, composite: 73, winner: false },
];


// ────────────────────────────────────────────
// Score pill color helper
// ────────────────────────────────────────────

const scorePill = (v: number) => {
  if (v >= 80) return { bg: "rgba(34,197,94,0.18)", color: "#4ADE80" };
  if (v >= 70) return { bg: "rgba(234,179,8,0.15)", color: "#FACC15" };
  return { bg: "rgba(239,68,68,0.15)", color: "#F87171" };
};

// ────────────────────────────────────────────
// useInView hook
// ────────────────────────────────────────────

const useInView = (ref: React.RefObject<HTMLElement | null>, threshold = 0.4) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
};

// ────────────────────────────────────────────
// Sidebar
// ────────────────────────────────────────────

const Sidebar = () => {
  const icons = [
    { Icon: LayoutGrid, active: false },
    { Icon: FlaskConical, active: true },
    { Icon: BarChart3, active: false },
    { Icon: Settings, active: false },
  ];

  return (
    <div
      className="hidden md:flex flex-col items-center shrink-0"
      style={{
        width: 52,
        background: "#131313",
        borderRight: "1px solid #1E1E1E",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      {/* DL Logo */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#B6E52A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 800,
          color: "#1A1A1A",
          marginBottom: 24,
          flexShrink: 0,
        }}
      >
        DL
      </div>

      {/* Nav icons */}
      <div className="flex flex-col items-center gap-0" style={{ flex: 1 }}>
        {icons.map(({ Icon, active }, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center transition-colors duration-200"
            style={{
              width: 52,
              height: 40,
              cursor: "pointer",
              color: active ? "#B6E52A" : "#555",
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = "#888";
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = "#555";
            }}
          >
            {active && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 3,
                  height: 20,
                  background: "#B6E52A",
                  borderRadius: "0 2px 2px 0",
                }}
              />
            )}
            <Icon size={20} />
          </div>
        ))}
      </div>

      {/* Bottom avatar */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1px solid #3A3A3A",
          background: "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          fontWeight: 600,
          color: "#888",
          flexShrink: 0,
        }}
      >
        AM
      </div>
    </div>
  );
};

// ────────────────────────────────────────────
// Breadcrumb Bar
// ────────────────────────────────────────────

const Breadcrumb = () => (
  <div
    className="flex items-center justify-between px-5"
    style={{
      height: 42,
      background: "#161616",
      borderBottom: "1px solid #1E1E1E",
    }}
  >
    <div className="flex items-center gap-1.5 text-[12px]">
      <span style={{ color: "#555" }}>Studies</span>
      <span style={{ color: "#555" }}>/</span>
      <span style={{ color: "#555" }}>New Study</span>
      <span style={{ color: "#555" }}>/</span>
      <span style={{ color: "#CCC" }}>Draft</span>
    </div>
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid #3A3A3A",
        background: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 600,
        color: "#888",
      }}
    >
      AM
    </div>
  </div>
);

// ────────────────────────────────────────────
// Content wrapper with graph-paper grid bg
// ────────────────────────────────────────────

const GridContent = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      minHeight: 0,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Subtle dot grid background */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundColor: "#181818",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    {/* Subtle center vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, rgba(182,229,42,0.02) 0%, transparent 60%)",
      }}
    />
    <div style={{ position: "relative", height: "100%" }}>
      {children}
    </div>
  </div>
);

// ────────────────────────────────────────────
// Inner app layout (sidebar + breadcrumb + stepper + content)
// ────────────────────────────────────────────

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex" style={{ height: 780 }}>
    <Sidebar />
    <div className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
      <Breadcrumb />
      <div style={{ height: 1, background: "#1E1E1E", flexShrink: 0 }} />
      <GridContent>{children}</GridContent>
    </div>
  </div>
);

// ────────────────────────────────────────────
// Browser Chrome (Dark)
// ────────────────────────────────────────────

const BrowserChrome = ({
  children,
  onMouseMove,
  onMouseLeave,
  style,
}: {
  children: React.ReactNode;
  onMouseMove?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}) => (
  <div
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
    className="rounded-xl overflow-hidden"
    style={{
      border: "1px solid rgba(255,255,255,0.05)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)",
      borderRadius: 14,
      ...style,
    }}
  >
    {/* Title bar */}
    <div
      className="flex items-center px-4 relative"
      style={{ height: 44, background: "#161616", borderBottom: "1px solid #1E1E1E" }}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full" style={{ width: 12, height: 12, background: "#FF5F57", opacity: 0.85 }} />
        <div className="rounded-full" style={{ width: 12, height: 12, background: "#FFBD2E", opacity: 0.85 }} />
        <div className="rounded-full" style={{ width: 12, height: 12, background: "#28C840", opacity: 0.85 }} />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex items-center gap-1.5 px-4 py-1 text-[11px] font-mono select-none"
          style={{
            background: "#222",
            borderRadius: 8,
            color: "#666",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
          app.darpanlabs.com/study
        </div>
      </div>
    </div>
    {/* Content */}
    <div style={{ background: "#1A1A1A", position: "relative" }}>
      {children}
    </div>
  </div>
);

// ────────────────────────────────────────────
// Slide transitions
// ────────────────────────────────────────────

const slideLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.25, ease: "easeOut" as const },
};

// ────────────────────────────────────────────
// Step 1 — Research Question
// ────────────────────────────────────────────

const Step1 = ({ onNext, active }: { onNext: () => void; active: boolean }) => {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!active) return;
    const startTimer = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(startTimer);
  }, [active]);

  useEffect(() => {
    if (!started) return;
    if (typed.length >= RESEARCH_QUESTION.length) {
      setDone(true);
      return;
    }
    const delay = 35 + Math.random() * 20;
    const timer = setTimeout(() => {
      setTyped(RESEARCH_QUESTION.slice(0, typed.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [typed, started]);

  const handleSubmit = () => {
    if (!done || submitted) return;
    setSubmitted(true);
    setTimeout(onNext, 400);
  };

  const recentStudies = [
    { name: "Snack packaging preference — Women 18-30", time: "2h ago" },
    { name: "Premium skincare pricing tiers — Urban metros", time: "1d ago" },
    { name: "Ad creative A/B test — Instagram reels", time: "3d ago" },
  ];

  return (
    <motion.div
      {...slideLeft}
      className="flex flex-col items-center justify-center px-6 md:px-12"
      style={{ height: "100%", position: "relative" }}
    >
      {/* Heading */}
      <h3 style={{ fontSize: 28, fontWeight: 600, color: "#F5F5F5", textAlign: "center", marginBottom: 8, letterSpacing: "-0.025em", lineHeight: 1.3 }}>
        What do you want to research today?
      </h3>
      <p style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 32, fontWeight: 400 }}>
        Our AI-powered digital twins will run the study for you
      </p>

      {/* Chat-style input container */}
      <div
        className="transition-all duration-300"
        style={{
          width: "75%",
          maxWidth: 620,
          background: "#1C1C1C",
          border: "1px solid #2A2A2A",
          borderRadius: 16,
          padding: "18px 22px",
          cursor: "text",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.02)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#383838";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#2A2A2A";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.02)";
        }}
      >
        {/* Row 1 — Text area */}
        <div style={{ minHeight: 44, fontSize: 15, lineHeight: 1.6, color: "#D0D0D0", marginBottom: 10 }}>
          {typed}
          {!submitted && (
            <span
              className="inline-block"
              style={{
                width: 2,
                height: 18,
                background: "#B6E52A",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: "cursor-blink 0.8s step-end infinite",
              }}
            />
          )}
          {typed.length === 0 && !started && (
            <span style={{ color: "#444" }}>Type your research question...</span>
          )}
        </div>

        {/* Row 2 — Toolbar */}
        <div className="flex items-center justify-between" style={{ marginTop: 4 }}>
          {/* Attach button (decorative) */}
          <div
            className="flex items-center justify-center transition-colors duration-200"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#252525",
              border: "1px solid #333",
              color: "#555",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            <Plus size={16} />
          </div>

          {/* Run button */}
          <motion.button
            onClick={handleSubmit}
            disabled={!done || submitted}
            className="flex items-center justify-center gap-1.5"
            style={{
              height: 34,
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 9,
              background: done && !submitted ? "#B6E52A" : "#2A2A2A",
              border: "none",
              cursor: done && !submitted ? "pointer" : "default",
              fontSize: 13,
              fontWeight: 600,
              color: done && !submitted ? "#1A1A1A" : "#555",
              letterSpacing: "0.01em",
              transition: "all 0.2s ease",
              boxShadow: done && !submitted ? "0 2px 16px rgba(182,229,42,0.25)" : "none",
            }}
            whileHover={done && !submitted ? { scale: 1.03 } : {}}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center gap-1.5"
              >
                <Check size={14} strokeWidth={3} />
                <span>Done</span>
              </motion.div>
            ) : (
              <>
                <Play size={12} style={{ fill: done ? "#1A1A1A" : "#555" }} />
                <span>Run</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Recent studies */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ marginTop: 36, width: "75%", maxWidth: 620 }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: 1.5, display: "block", marginBottom: 10 }}>
          Recent Studies
        </span>
        <div className="flex flex-col gap-1.5">
          {recentStudies.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between"
              style={{
                padding: "9px 14px",
                borderRadius: 8,
                cursor: "default",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div className="flex items-center gap-2.5">
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B6E52A", opacity: 0.5 }} />
                <span style={{ fontSize: 12, color: "#666" }}>{s.name}</span>
              </div>
              <span style={{ fontSize: 11, color: "#444", flexShrink: 0, marginLeft: 12 }}>{s.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Step 2 — Configure Study
// ────────────────────────────────────────────

const metricIcons: Record<string, React.ReactNode> = {
  "Purchase Intent": <BarChart3 size={14} style={{ color: "#888" }} />,
  "Uniqueness": <Star size={14} style={{ color: "#888" }} />,
  "Relevance": <Crosshair size={14} style={{ color: "#888" }} />,
  "Price Sensitivity": <DollarSign size={14} style={{ color: "#888" }} />,
};

const Step2 = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [visible, setVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setBtnVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.div
      {...slideLeft}
      style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}
    >
      {/* Content */}
      <div style={{ flex: 1, padding: "0 28px", overflow: "hidden" }}>
        {/* Question summary bar */}
        <div
          className="flex items-center gap-3"
          style={{
            background: "rgba(182, 229, 42, 0.03)",
            border: "1px solid #2A2A2A",
            borderRadius: 8,
            padding: "10px 16px",
            marginBottom: 20,
          }}
        >
          <Quote size={14} style={{ color: "#555", flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "#888", fontStyle: "italic", flex: 1 }}>
            {RESEARCH_QUESTION}
          </span>
          <Pencil
            size={14}
            className="transition-colors duration-200"
            style={{ color: "#777", flexShrink: 0, cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#AAA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
          />
        </div>

        {/* Section A — Concepts */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ marginBottom: 20 }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: 1.5 }}>
                  Concepts to Test
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#B6E52A", background: "rgba(182,229,42,0.12)", padding: "3px 10px", borderRadius: 4 }}>5 selected</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {conceptsData.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                    className="relative group"
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid #2A2A2A",
                      borderRadius: 12,
                      padding: "20px 18px",
                      minWidth: 0,
                      cursor: "default",
                      transition: "all 0.25s ease",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = c.tintHover;
                      e.currentTarget.style.borderColor = c.color + "4D";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${c.color}18, 0 2px 8px rgba(0,0,0,0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1A1A1A";
                      e.currentTarget.style.borderColor = "#2A2A2A";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
                    }}
                  >
                    {/* Top row: color dot + checkmark */}
                    <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.color, boxShadow: `0 0 8px ${c.color}60` }} />
                      <Check size={14} style={{ color: "#B6E52A" }} />
                    </div>
                    {/* Name */}
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#F0F0F0", letterSpacing: "-0.01em", marginBottom: 6, lineHeight: 1.2 }}>{c.name}</p>
                    {/* Description */}
                    <p style={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>{c.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section B — Evaluation Metrics */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              style={{ marginBottom: 20 }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, display: "block", marginBottom: 12 }}>
                Evaluation Metrics
              </span>
              <div className="flex flex-wrap gap-2">
                {metricsData.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.15 + i * 0.06 }}
                    className="flex items-center gap-2"
                    style={{
                      background: "#222222",
                      border: "1px solid #2E2E2E",
                      borderRadius: 8,
                      padding: "10px 18px",
                    }}
                  >
                    {metricIcons[m.name]}
                    <span style={{ fontSize: 13, color: "#DDD" }}>{m.name}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: 4,
                        marginLeft: 4,
                        background: m.priority === "High" ? "rgba(182,229,42,0.15)" : "rgba(234,179,8,0.12)",
                        color: m.priority === "High" ? "#B6E52A" : "#EAB308",
                      }}
                    >
                      {m.priority}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section C — Target Audience */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, display: "block", marginBottom: 12 }}>
                Target Audience
              </span>
              <div
                style={{
                  background: "#222222",
                  border: "1px solid #2E2E2E",
                  borderLeft: "3px solid #B6E52A",
                  borderRadius: 10,
                  padding: "16px 20px",
                }}
              >
                <div className="flex flex-wrap items-center" style={{ gap: 0 }}>
                  <div className="flex items-center gap-2" style={{ padding: "4px 16px 4px 0" }}>
                    <Users size={16} style={{ color: "#666" }} />
                    <span style={{ fontSize: 13, color: "#DDD" }}>Women 22-38</span>
                  </div>
                  <div style={{ width: 1, height: 20, background: "#2E2E2E", margin: "0 8px" }} className="hidden sm:block" />
                  <div className="flex items-center gap-2" style={{ padding: "4px 16px 4px 0" }}>
                    <MapPin size={16} style={{ color: "#666" }} />
                    <span style={{ fontSize: 13, color: "#DDD" }}>Urban India</span>
                  </div>
                  <div style={{ width: 1, height: 20, background: "#2E2E2E", margin: "0 8px" }} className="hidden sm:block" />
                  <div className="flex items-center gap-2" style={{ padding: "4px 16px 4px 0" }}>
                    <ShoppingCart size={16} style={{ color: "#666" }} />
                    <span style={{ fontSize: 13, color: "#DDD" }}>Last 3 months</span>
                  </div>
                  <span
                    className="ml-auto"
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#B6E52A",
                      animation: "twin-pulse 2.5s ease-in-out infinite",
                    }}
                  >
                    250 matched twins
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Study Summary Card */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              style={{ marginTop: 20 }}
            >
              <div
                className="flex items-center justify-between"
                style={{
                  background: "rgba(182, 229, 42, 0.03)",
                  border: "1px solid #2A2A2A",
                  borderRadius: 10,
                  padding: "14px 20px",
                }}
              >
                <span style={{ fontSize: 13, color: "#888" }}>
                  Ready to run · ~3 min · <span style={{ fontWeight: 700, color: "#B6E52A" }}>5,000 data points</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom bar — pinned */}
      <div style={{ borderTop: "1px solid #2A2A2A", padding: "16px 24px", flexShrink: 0 }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-[13px] transition-colors"
              style={{ color: "#666", background: "none", border: "none", cursor: "pointer", padding: "8px 12px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#AAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              <ArrowLeft size={14} />
              Back
            </button>
            <span style={{ fontSize: 12, color: "#555" }}>Estimated time: ~3 minutes</span>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: btnVisible ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={btnVisible ? onNext : undefined}
            disabled={!btnVisible}
            className="inline-flex items-center gap-2 text-[15px] font-semibold"
            style={{
              background: btnVisible ? "#B6E52A" : "#333",
              color: btnVisible ? "#1A1A1A" : "#666",
              borderRadius: 10,
              padding: "12px 40px",
              border: "none",
              cursor: btnVisible ? "pointer" : "default",
              boxShadow: btnVisible ? "0 2px 16px rgba(182, 229, 42, 0.25)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            Run Study
            <Play size={14} fill="currentColor" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Step 3 — Processing
// ────────────────────────────────────────────

const Step3 = ({ onNext }: { onNext: () => void }) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 875;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const startTime = Date.now();
    const totalDuration = stepDuration * 4;
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 30);

    loadingSteps.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), i * stepDuration + 200));
      timers.push(setTimeout(() => setCompletedSteps((prev) => [...prev, i]), (i + 1) * stepDuration));
    });

    timers.push(setTimeout(onNext, totalDuration + 500));
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [onNext]);

  const twinsProcessed = Math.round((progress / 100) * 250);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center"
      style={{ height: "100%", padding: "0 32px" }}
    >
      {/* Central card container */}
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#1C1C1C",
          border: "1px solid #262626",
          borderRadius: 16,
          padding: "36px 32px 32px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header with live counter */}
        <div className="flex items-center justify-between" style={{ marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#E5E5E5", marginBottom: 4 }}>
              Running study...
            </p>
            <p style={{ fontSize: 13, color: "#555" }}>
              Evaluating 5 concepts across 250 twins
            </p>
          </div>
          <div
            style={{
              background: "rgba(182,229,42,0.08)",
              border: "1px solid rgba(182,229,42,0.15)",
              borderRadius: 10,
              padding: "8px 14px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 22, fontWeight: 700, color: "#B6E52A", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
              {twinsProcessed}
            </p>
            <p style={{ fontSize: 10, color: "#666", marginTop: 2 }}>twins</p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0" style={{ marginBottom: 28 }}>
          {loadingSteps.map((step, i) => {
            const isCompleted = completedSteps.includes(i);
            const isActive = activeStep === i && !isCompleted;
            const isLast = i === loadingSteps.length - 1;
            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                  style={{ padding: "10px 0" }}
                >
                  <div
                    className="shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: 24,
                      height: 24,
                      transition: "all 0.3s ease",
                      ...(isCompleted
                        ? { background: "#B6E52A" }
                        : isActive
                        ? { background: "#B6E52A", animation: "pulse-dot 1.5s ease-in-out infinite" }
                        : { background: "transparent", border: "2px solid #333" }),
                    }}
                  >
                    {isCompleted && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: isActive ? 500 : 400,
                      color: isCompleted ? "#AAA" : isActive ? "#E5E5E5" : "#444",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step}
                  </span>
                </motion.div>
                {/* Connector line */}
                {!isLast && (
                  <div style={{ marginLeft: 11, width: 2, height: 8, background: isCompleted ? "rgba(182,229,42,0.3)" : "#2A2A2A", borderRadius: 1 }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#555" }}>Progress</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#B6E52A", fontVariantNumeric: "tabular-nums" }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: "#2A2A2A", overflow: "hidden" }}>
            <motion.div
              style={{
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(90deg, #B6E52A, #8BBF1A)",
                width: `${progress}%`,
                transition: "width 0.05s linear",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Step 4 — Results
// ────────────────────────────────────────────

const twinQuotes = [
  { initials: "AS", bg: "#4ADE80", name: "Ananya S., 22", persona: "Gen Z Trendsetter · Delhi", quote: "Citrus Grove feels fresh and energizing — exactly what I want in a morning routine." },
  { initials: "PR", bg: "#38BDF8", name: "Priya R., 28", persona: "Health-Conscious · Mumbai", quote: "Charcoal Clean sounds effective, but I'd want to see it's gentle enough for daily use." },
  { initials: "RK", bg: "#A78BFA", name: "Rahul K., 35", persona: "Value Seeker · Bangalore", quote: "Lavender Dream has the best price point for what you get — I'd repurchase this one." },
];

const TwinCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % twinQuotes.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const q = twinQuotes[active];

  return (
    <div className="flex flex-col" style={{ height: "100%" }}>
      <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
        <Quote size={13} style={{ color: "#666" }} />
        <span style={{ fontSize: 10, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: 1.5 }}>
          What Twins Are Saying
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
          style={{ flex: 1 }}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: q.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#1A1A1A" }}>
              {q.initials}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#DDD", lineHeight: 1.2 }}>{q.name}</p>
              <p style={{ fontSize: 10, color: "#B6E52A" }}>{q.persona}</p>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#999", lineHeight: 1.55, fontStyle: "italic" }}>"{q.quote}"</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-1.5" style={{ marginTop: 6 }}>
        {twinQuotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 14 : 6,
              height: 6,
              borderRadius: 3,
              background: i === active ? "#B6E52A" : "#333",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Step4 = ({ onReset }: { onReset: () => void }) => {
  const winner = resultsConcepts[0]; // Citrus Grove

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col"
      style={{ padding: "16px 24px 16px", height: "100%" }}
    >
      {/* Top bar: badge + stats + CTAs */}
      <div className="flex items-center justify-between" style={{ marginBottom: 14, flexShrink: 0 }}>
        <div className="flex items-center gap-4">
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 20,
              background: "rgba(182,229,42,0.1)",
              color: "#B6E52A",
              border: "1px solid rgba(182,229,42,0.18)",
            }}
          >
            Study Complete
          </span>
          <div className="flex items-center gap-4">
            {[
              ["Responses", "250"],
              ["Confidence", "91%"],
              ["Duration", "2m 34s"],
            ].map(([label, val]) => (
              <div key={label} className="text-center">
                <p style={{ fontSize: 9, color: "#666", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#E5E5E5", fontVariantNumeric: "tabular-nums" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            style={{
              background: "#B6E52A",
              color: "#1A1A1A",
              borderRadius: 8,
              padding: "7px 18px",
              fontWeight: 600,
              fontSize: 12,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 16px rgba(182,229,42,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Download size={12} />
              Download Report
            </span>
          </button>
          <button
            onClick={onReset}
            style={{
              background: "#1C1C1C",
              border: "1px solid #333",
              color: "#BBB",
              borderRadius: 8,
              padding: "7px 14px",
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span className="inline-flex items-center gap-1.5">
              <RotateCcw size={12} />
              New Study
            </span>
          </button>
        </div>
      </div>

      {/* Winner card — horizontal compact */}
      <div
        style={{
          background: "rgba(182,229,42,0.04)",
          border: "1px solid rgba(182,229,42,0.12)",
          borderRadius: 12,
          padding: "14px 20px",
          marginBottom: 12,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: 180,
            height: 180,
            top: -60,
            right: -40,
            background: "radial-gradient(circle, rgba(182,229,42,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="flex items-center gap-6">
          {/* Left: winner label + name */}
          <div className="flex items-center gap-3" style={{ minWidth: 0 }}>
            <div>
              <div className="flex items-center gap-1.5" style={{ marginBottom: 4 }}>
                <ArrowUp size={12} style={{ color: "#B6E52A" }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "#B6E52A", textTransform: "uppercase", letterSpacing: 1 }}>Top Performer</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FB923C", boxShadow: "0 0 6px rgba(251,146,60,0.4)" }} />
                <span style={{ fontSize: 18, fontWeight: 700, color: "#F5F5F5", letterSpacing: "-0.02em" }}>{winner.name}</span>
              </div>
            </div>
          </div>
          {/* Right: scores */}
          <div className="flex items-center gap-2 ml-auto">
            {(["purchase", "unique", "relevance", "price"] as const).map((key) => {
              const labels: Record<string, string> = { purchase: "Purchase", unique: "Unique", relevance: "Relevance", price: "Price" };
              const val = winner[key];
              const pill = scorePill(val);
              return (
                <div key={key} className="text-center" style={{ background: "#1A1A1A", borderRadius: 6, padding: "6px 10px", minWidth: 56 }}>
                  <p style={{ fontSize: 9, color: "#666", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 2 }}>{labels[key]}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: pill.color, fontVariantNumeric: "tabular-nums" }}>{val}%</span>
                </div>
              );
            })}
            <div className="text-center" style={{ background: "rgba(182,229,42,0.12)", borderRadius: 6, padding: "6px 12px", minWidth: 60 }}>
              <p style={{ fontSize: 9, color: "#888", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 2 }}>Score</p>
              <span style={{ fontSize: 15, fontWeight: 800, color: "#B6E52A", fontVariantNumeric: "tabular-nums" }}>{winner.composite}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings table — compact */}
      <div
        style={{
          background: "#1C1C1C",
          border: "1px solid #262626",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 12,
          flexShrink: 0,
        }}
      >
        <table className="w-full text-left" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #262626" }}>
              <th style={{ fontSize: 9, fontWeight: 600, color: "#555", textTransform: "uppercase", padding: "7px 16px", letterSpacing: 1 }}>#</th>
              <th style={{ fontSize: 9, fontWeight: 600, color: "#555", textTransform: "uppercase", padding: "7px 12px", letterSpacing: 1 }}>Concept</th>
              {["Purchase", "Unique", "Relevance", "Price", "Score"].map((h) => (
                <th key={h} style={{ fontSize: 9, fontWeight: 600, color: "#555", textTransform: "uppercase", padding: "7px 8px", letterSpacing: 1, textAlign: "center" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resultsConcepts.slice(1).map((r, i) => {
              const vals = [r.purchase, r.unique, r.relevance, r.price, r.composite];
              return (
                <tr
                  key={r.name}
                  style={{
                    borderBottom: i < resultsConcepts.length - 2 ? "1px solid #222" : "none",
                  }}
                >
                  <td style={{ padding: "7px 16px", fontSize: 11, fontWeight: 600, color: "#555" }}>
                    {i + 2}
                  </td>
                  <td style={{ padding: "7px 12px" }}>
                    <span style={{ fontSize: 12, fontWeight: 400, color: "#AAA" }}>{r.name}</span>
                  </td>
                  {vals.map((v, j) => {
                    const isComposite = j === vals.length - 1;
                    const pill = scorePill(v);
                    return (
                      <td key={j} style={{ padding: "7px 8px", textAlign: "center" }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: isComposite ? 700 : 500,
                            padding: isComposite ? "2px 8px" : 0,
                            borderRadius: 4,
                            background: isComposite ? pill.bg : "transparent",
                            color: isComposite ? pill.color : v >= 80 ? "#4ADE80" : v >= 70 ? "#FACC15" : "#F87171",
                          }}
                        >
                          {v}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom row: AI Recommendation + Twin Quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ flex: 1, minHeight: 0 }}>
        {/* AI Recommendation */}
        <div
          style={{
            background: "#1C1C1C",
            border: "1px solid #262626",
            borderRadius: 12,
            padding: "14px 18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
            <Sparkles size={13} style={{ color: "#B6E52A" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#B6E52A", textTransform: "uppercase", letterSpacing: 1.5 }}>
              AI Recommendation
            </span>
          </div>
          <p style={{ fontSize: 12, color: "#BBB", lineHeight: 1.6, flex: 1 }}>
            Lead with <span style={{ color: "#F5F5F5", fontWeight: 600 }}>Citrus Grove</span> as primary SKU — strongest composite with highest purchase intent (91%). Consider <span style={{ color: "#F5F5F5", fontWeight: 600 }}>Charcoal Clean</span> as secondary for the uniqueness segment.
          </p>
          <div className="flex items-center gap-2" style={{ marginTop: 8 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#B6E52A", opacity: 0.5 }} />
            <span style={{ fontSize: 10, color: "#555" }}>Based on 250 responses · 91% confidence</span>
          </div>
        </div>

        {/* Twin Quote */}
        <div
          style={{
            background: "#1C1C1C",
            border: "1px solid #262626",
            borderRadius: 12,
            padding: "14px 18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TwinCarousel />
        </div>
      </div>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────

const FlowDemo = () => {
  const [step, setStep] = useState<Step>(1);
  const browserRef = useRef<HTMLDivElement>(null);
  const inView = useInView(browserRef, 0.3);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const goTo = useCallback((s: Step) => setStep(s), []);


  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    setTilt({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden"
      style={{ padding: "140px 0 80px" }}
    >
      {/* Graph-paper grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#0F0F0F",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(182,229,42,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <p className="eyebrow" style={{ color: "#B6E52A" }}>See it in Action</p>
          <h2 className="section-heading">
            From question to insight in <span className="text-gradient">minutes</span>
          </h2>
          <p className="body-text max-w-lg mx-auto">
            Set up a study, let AI twins evaluate your concepts, and get actionable results — all in one flow.
          </p>
        </div>

        {/* Browser Chrome */}
        <div
          ref={browserRef}
          className="mx-auto scroll-reveal stagger-2"
          style={{
            maxWidth: "min(1300px, 92vw)",
            perspective: 1000,
          }}
        >
          <div
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <BrowserChrome
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <AppLayout>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <Step1
                      key="s1"
                      onNext={() => goTo(2)}
                      active={inView}
                    />
                  )}
                  {step === 2 && (
                    <Step2
                      key="s2"
                      onNext={() => goTo(3)}
                      onBack={() => goTo(1)}
                    />
                  )}
                  {step === 3 && (
                    <Step3
                      key="s3"
                      onNext={() => goTo(4)}
                    />
                  )}
                  {step === 4 && (
                    <Step4
                      key="s4"
                      onReset={() => goTo(1)}
                    />
                  )}
                </AnimatePresence>
              </AppLayout>
            </BrowserChrome>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes twin-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default FlowDemo;
