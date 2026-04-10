import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────
type DemoState = "setup" | "loading" | "results";

// ─── Sidebar Icons (simple SVG) ──────────────────
const SidebarIcons = ({ active }: { active: number }) => {
  const icons = [
    // Home
    <path d="M3 12l9-8 9 8v9a1 1 0 01-1 1h-5v-5h-4v5H6a1 1 0 01-1-1v-9z" />,
    // Studies (flask)
    <><path d="M9 3h6v5l4 8H5l4-8V3z" /><line x1="9" y1="3" x2="15" y2="3" /></>,
    // People
    <><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0113 0" /></>,
    // Settings
    <><circle cx="12" cy="12" r="3" /><path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.2-6.8l-1.4 1.4M6.6 17.4l-1.4 1.4m0-11.6l1.4 1.4m10.8 10.8l1.4 1.4" /></>,
  ];

  return (
    <div className="flex flex-col gap-1 mt-3">
      {icons.map((path, i) => (
        <div key={i} className="relative flex items-center">
          {i === active && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r" style={{ background: "#B6E52A" }} />
          )}
          <div className="w-full flex justify-center py-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={i === active ? "#B6E52A" : "#666"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {path}
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Concept Card ────────────────────────────────
const ConceptCard = ({ name, desc, color }: { name: string; desc: string; color: string }) => (
  <div
    className="flex items-start gap-3"
    style={{
      background: "#222222",
      border: "1px solid #2E2E2E",
      borderRadius: 10,
      padding: "14px 16px",
    }}
  >
    <div
      className="shrink-0 mt-1"
      style={{ width: 8, height: 8, borderRadius: "50%", background: color }}
    />
    <div>
      <p style={{ fontSize: 14, fontWeight: 600, color: "#E5E5E5", lineHeight: 1.3 }}>{name}</p>
      <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{desc}</p>
    </div>
  </div>
);

// ─── Metric Row ──────────────────────────────────
const MetricRow = ({
  name,
  priority,
  icon,
}: {
  name: string;
  priority: "High" | "Medium";
  icon: React.ReactNode;
}) => {
  const isHigh = priority === "High";
  return (
    <div
      className="flex items-center justify-between"
      style={{
        background: "#222222",
        border: "1px solid #2E2E2E",
        borderRadius: 8,
        padding: "10px 16px",
      }}
    >
      <div className="flex items-center gap-2.5">
        {icon}
        <span style={{ fontSize: 14, fontWeight: 500, color: "#DDD" }}>{name}</span>
      </div>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 6,
          background: isHigh ? "rgba(182,229,42,0.15)" : "rgba(234,179,8,0.12)",
          color: isHigh ? "#B6E52A" : "#EAB308",
        }}
      >
        {priority}
      </span>
    </div>
  );
};

// ─── Metric Icons ────────────────────────────────
const MetricIcon = ({ type }: { type: string }) => {
  const props = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "#888", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "cart":
      return <svg {...props}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>;
    case "star":
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    case "target":
      return <svg {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
    case "dollar":
      return <svg {...props}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>;
    default:
      return null;
  }
};

// ─── Audience Row ────────────────────────────────
const AudienceRow = ({ icon, text, sub }: { icon: React.ReactNode; text: string; sub?: boolean }) => (
  <div className="flex items-center gap-2.5">
    {icon}
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? "#888" : "#DDD" }}>{text}</span>
  </div>
);

const PeopleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
  </svg>
);
const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const CartIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
);

// ─── Score Pill ──────────────────────────────────
const ScorePill = ({ value }: { value: number }) => {
  const bg = value >= 80 ? "rgba(34,197,94,0.15)" : value >= 70 ? "rgba(234,179,8,0.12)" : "rgba(239,68,68,0.12)";
  const color = value >= 80 ? "#4ADE80" : value >= 70 ? "#FACC15" : "#F87171";
  return (
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        padding: "3px 12px",
        borderRadius: 6,
        background: bg,
        color,
      }}
    >
      {value}%
    </span>
  );
};

// ─── Setup State ─────────────────────────────────
const SetupContent = () => (
  <div className="flex-1 overflow-auto" style={{ background: "#1A1A1A" }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      {/* Left column */}
      <div className="flex flex-col gap-5">
        {/* Research Question */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Research Question
          </p>
          <div
            style={{
              background: "#222222",
              border: "1px solid #2E2E2E",
              borderRadius: 10,
              padding: 16,
              color: "#E0E0E0",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            Which body wash concept resonates most with urban women aged 22-38?
          </div>
        </div>

        {/* Concepts */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Concepts
          </p>
          <div className="flex flex-col gap-2">
            <ConceptCard name="Herbal Fresh" desc="Natural herbs with tea tree & eucalyptus" color="#4ADE80" />
            <ConceptCard name="Ocean Mist" desc="Marine minerals with sea salt fragrance" color="#60A5FA" />
            <ConceptCard name="Citrus Grove" desc="Citrus blend with vitamin C complex" color="#FB923C" />
            <ConceptCard name="Lavender Dream" desc="Calming lavender with chamomile" color="#A78BFA" />
            <ConceptCard name="Charcoal Clean" desc="Activated charcoal deep cleanse" color="#9CA3AF" />
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-5">
        {/* Metrics */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Metrics
          </p>
          <div className="flex flex-col gap-2">
            <MetricRow name="Purchase Intent" priority="High" icon={<MetricIcon type="cart" />} />
            <MetricRow name="Uniqueness" priority="Medium" icon={<MetricIcon type="star" />} />
            <MetricRow name="Relevance" priority="High" icon={<MetricIcon type="target" />} />
            <MetricRow name="Price Sensitivity" priority="Medium" icon={<MetricIcon type="dollar" />} />
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Target Audience
          </p>
          <div
            style={{
              background: "#222222",
              border: "1px solid #2E2E2E",
              borderRadius: 10,
              padding: 16,
            }}
          >
            <div className="flex flex-col gap-2">
              <AudienceRow icon={<PeopleIcon />} text="Women 22-38" />
              <AudienceRow icon={<PinIcon />} text="Urban India" sub />
              <AudienceRow icon={<CartIcon />} text="Shopped for body wash in last 3 months" sub />
            </div>
            <div className="flex justify-end mt-3">
              <span style={{ fontSize: 13, color: "#B6E52A", fontWeight: 500 }}>250 matched twins</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="flex items-center justify-between px-5 py-4"
      style={{ borderTop: "1px solid #2A2A2A" }}
    >
      <span style={{ fontSize: 13, color: "#666" }}>Estimated time: ~3 minutes</span>
      <button
        style={{
          background: "#B6E52A",
          color: "#1A1A1A",
          borderRadius: 10,
          padding: "14px 36px",
          fontWeight: 600,
          fontSize: 14,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 12px rgba(182,229,42,0.3)",
        }}
      >
        Start Study
      </button>
    </div>
  </div>
);

// ─── Loading State ───────────────────────────────
const LoadingContent = ({ progress }: { progress: number }) => {
  const steps = [
    { label: "Matching AI twins to audience profile", threshold: 20 },
    { label: "Presenting concepts to 250 twins", threshold: 45 },
    { label: "Collecting preference data & reasoning", threshold: 70 },
    { label: "Analyzing patterns & generating insights", threshold: 90 },
    { label: "Compiling final report", threshold: 100 },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center" style={{ background: "#1A1A1A" }}>
      <div className="w-full max-w-md px-8">
        <p style={{ fontSize: 18, fontWeight: 600, color: "#DDD", marginBottom: 32, textAlign: "center" }}>
          Running study…
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {steps.map((s, i) => {
            const done = progress >= s.threshold;
            const active = !done && (i === 0 || progress >= steps[i - 1].threshold);
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="shrink-0">
                  {done ? (
                    <div
                      className="flex items-center justify-center"
                      style={{ width: 22, height: 22, borderRadius: "50%", background: "#B6E52A" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  ) : active ? (
                    <div
                      className="animate-pulse"
                      style={{ width: 22, height: 22, borderRadius: "50%", background: "#B6E52A", opacity: 0.6 }}
                    />
                  ) : (
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#3A3A3A" }} />
                  )}
                </div>
                <span style={{ fontSize: 14, color: done || active ? "#DDD" : "#555" }}>{s.label}</span>
              </div>
            );
          })}
        </div>
        {/* Progress bar */}
        <div style={{ height: 4, borderRadius: 2, background: "#2A2A2A", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", borderRadius: 2, background: "#B6E52A" }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <p style={{ fontSize: 12, color: "#555", textAlign: "center", marginTop: 12 }}>{progress}% complete</p>
      </div>
    </div>
  );
};

// ─── Results State ───────────────────────────────
const ResultsContent = () => {
  const rows = [
    { name: "Citrus Grove", purchase: 87, unique: 74, relevance: 82, price: 68, winner: true },
    { name: "Herbal Fresh", purchase: 79, unique: 81, relevance: 75, price: 72, winner: false },
    { name: "Ocean Mist", purchase: 73, unique: 69, relevance: 71, price: 77, winner: false },
    { name: "Lavender Dream", purchase: 68, unique: 72, relevance: 66, price: 81, winner: false },
    { name: "Charcoal Clean", purchase: 64, unique: 84, relevance: 61, price: 65, winner: false },
  ];

  return (
    <div className="flex-1 overflow-auto" style={{ background: "#1A1A1A" }}>
      {/* Stats bar */}
      <div
        className="flex flex-wrap items-center gap-4 px-5 py-3"
        style={{ background: "#222222" }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: 6,
            background: "rgba(182,229,42,0.12)",
            color: "#B6E52A",
            border: "1px solid rgba(182,229,42,0.2)",
          }}
        >
          Study Complete
        </span>
        <div className="flex gap-6 ml-auto">
          {[
            ["Responses", "250"],
            ["Avg. Confidence", "87%"],
            ["Duration", "2m 47s"],
          ].map(([label, val]) => (
            <div key={label} className="text-center">
              <p style={{ fontSize: 11, color: "#888" }}>{label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#EEE" }}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results table */}
      <div className="px-5 pt-4">
        <table className="w-full text-left" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#1E1E1E" }}>
              {["Concept", "Purchase", "Unique", "Relevance", "Price"].map((h) => (
                <th
                  key={h}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#888",
                    textTransform: "uppercase",
                    padding: "10px 14px",
                    letterSpacing: 0.5,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.name}
                style={{
                  background: i % 2 === 0 ? "#1A1A1A" : "#1F1F1F",
                  borderLeft: r.winner ? "3px solid #B6E52A" : "3px solid transparent",
                }}
              >
                <td style={{ padding: "10px 14px", fontSize: 14, fontWeight: 500, color: "#E5E5E5" }}>
                  {r.name}
                </td>
                <td style={{ padding: "10px 14px" }}><ScorePill value={r.purchase} /></td>
                <td style={{ padding: "10px 14px" }}><ScorePill value={r.unique} /></td>
                <td style={{ padding: "10px 14px" }}><ScorePill value={r.relevance} /></td>
                <td style={{ padding: "10px 14px" }}><ScorePill value={r.price} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quote & AI Recommendation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 pt-4 pb-2">
        {/* Quote card */}
        <div
          style={{
            background: "#222222",
            border: "1px solid #2E2E2E",
            borderRadius: 10,
            padding: 16,
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
            Top Quote
          </p>
          <p style={{ fontSize: 13, color: "#CCC", lineHeight: 1.6, fontStyle: "italic" }}>
            "Citrus Grove feels fresh and energizing — exactly what I want in a morning body wash. The vitamin C angle makes it feel premium without being pretentious."
          </p>
          <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>— Twin #127, F/26, Mumbai</p>
        </div>

        {/* AI Recommendation */}
        <div
          style={{
            background: "#1E2210",
            border: "1px solid rgba(182,229,42,0.15)",
            borderRadius: 10,
            padding: 16,
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, color: "#B6E52A", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
            AI Recommendation
          </p>
          <p style={{ fontSize: 13, color: "#CCC", lineHeight: 1.6 }}>
            Lead with <strong style={{ color: "#E5E5E5" }}>Citrus Grove</strong> as primary SKU. Its purchase intent (87%) and relevance (82%) significantly outperform alternatives. Consider <strong style={{ color: "#E5E5E5" }}>Herbal Fresh</strong> as secondary variant for the naturals segment.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-3 px-5 py-4">
        <button
          style={{
            background: "#B6E52A",
            color: "#1A1A1A",
            borderRadius: 10,
            padding: "12px 28px",
            fontWeight: 600,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
          }}
        >
          Download Full Report
        </button>
        <button
          style={{
            background: "#222222",
            border: "1px solid #3A3A3A",
            color: "#DDD",
            borderRadius: 10,
            padding: "12px 28px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Run Follow-up Study
        </button>
      </div>
    </div>
  );
};

// ─── Browser Window ──────────────────────────────
const BrowserWindow = ({
  state,
  loadingProgress,
}: {
  state: DemoState;
  loadingProgress: number;
}) => (
  <div
    className="w-full max-w-[960px] mx-auto flex flex-col overflow-hidden"
    style={{
      borderRadius: 12,
      background: "#1A1A1A",
      boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.05)",
    }}
  >
    {/* Title bar */}
    <div className="flex items-center px-4 py-2.5 gap-3" style={{ background: "#1E1E1E" }}>
      <div className="flex gap-2">
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
      </div>
      <div
        className="flex-1 mx-6 text-center"
        style={{
          background: "#2A2A2A",
          border: "1px solid #3A3A3A",
          borderRadius: 6,
          padding: "5px 12px",
          fontSize: 12,
          color: "#888",
        }}
      >
        app.darpanlabs.com
      </div>
    </div>

    {/* Body: sidebar + main */}
    <div className="flex flex-1" style={{ minHeight: 480 }}>
      {/* Sidebar */}
      <div
        className="hidden sm:flex flex-col justify-between py-3"
        style={{
          width: 52,
          background: "#141414",
          borderRight: "1px solid #2A2A2A",
        }}
      >
        <div>
          {/* DL logo */}
          <div className="flex justify-center mb-2">
            <div
              className="flex items-center justify-center"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#B6E52A",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, color: "#1A1A1A" }}>DL</span>
            </div>
          </div>
          <SidebarIcons active={1} />
        </div>
        {/* Avatar */}
        <div className="flex justify-center">
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#222",
              border: "1px solid #3A3A3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              color: "#888",
              fontWeight: 600,
            }}
          >
            A
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 px-5 py-2.5"
          style={{
            background: "#1A1A1A",
            borderBottom: "1px solid #2A2A2A",
            fontSize: 13,
          }}
        >
          <span style={{ color: "#666" }}>Studies</span>
          <span style={{ color: "#444" }}>/</span>
          <span style={{ color: "#666" }}>New Study</span>
          <span
            className="ml-2"
            style={{
              fontSize: 11,
              color: "#CCC",
              background: "#2A2A2A",
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            Draft
          </span>
        </div>

        {/* State content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {state === "setup" && <SetupContent />}
            {state === "loading" && <LoadingContent progress={loadingProgress} />}
            {state === "results" && <ResultsContent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
);

// ─── Step Selector ───────────────────────────────
const StepSelector = ({
  state,
  onStateChange,
}: {
  state: DemoState;
  onStateChange: (s: DemoState) => void;
}) => {
  const steps: { key: DemoState; label: string; num: string }[] = [
    { key: "setup", label: "Setup", num: "01" },
    { key: "loading", label: "Loading", num: "02" },
    { key: "results", label: "Results", num: "03" },
  ];

  return (
    <div className="flex justify-center gap-2 mb-8">
      {steps.map((s) => {
        const active = state === s.key;
        return (
          <button
            key={s.key}
            onClick={() => onStateChange(s.key)}
            className="transition-all duration-200"
            style={{
              padding: "10px 24px",
              borderRadius: 10,
              border: active ? "1px solid rgba(182,229,42,0.3)" : "1px solid #2A2A2A",
              background: active ? "rgba(182,229,42,0.08)" : "transparent",
              color: active ? "#B6E52A" : "#888",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 11, opacity: 0.6, marginRight: 6 }}>{s.num}</span>
            {s.label}
          </button>
        );
      })}
    </div>
  );
};

// ─── Main Component ──────────────────────────────
const HowItWorks = () => {
  const [state, setState] = useState<DemoState>("setup");
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleStateChange = useCallback((s: DemoState) => {
    if (s === "loading") setLoadingProgress(0);
    setState(s);
  }, []);

  // Animate progress when in loading state
  useEffect(() => {
    if (state !== "loading") return;
    const interval = setInterval(() => {
      setLoadingProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(p + 2, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [state]);

  // Auto-transition from loading → results
  useEffect(() => {
    if (state === "loading" && loadingProgress >= 100) {
      const t = setTimeout(() => setState("results"), 600);
      return () => clearTimeout(t);
    }
  }, [state, loadingProgress]);

  // Auto-play: setup → loading after 4s
  useEffect(() => {
    if (state === "setup") {
      const t = setTimeout(() => handleStateChange("loading"), 4000);
      return () => clearTimeout(t);
    }
  }, [state, handleStateChange]);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden"
      style={{ padding: "80px 0" }}
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
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow">Process</p>
          <h2 className="section-heading">How it works</h2>
        </div>

        <StepSelector state={state} onStateChange={handleStateChange} />

        <BrowserWindow state={state} loadingProgress={loadingProgress} />
      </div>
    </section>
  );
};

export default HowItWorks;
