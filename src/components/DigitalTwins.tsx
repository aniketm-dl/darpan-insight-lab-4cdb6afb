import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ────────────────────────────────────────────
// Twin Persona Data
// ────────────────────────────────────────────

interface TwinPersona {
  name: string;
  age: number;
  location: string;
  persona: string;
  photo: string;
  quote: string;
}

const CENTER_INDEX = 3;

const twins: TwinPersona[] = [
  {
    name: "Emily R",
    age: 24,
    location: "Los Angeles",
    persona: "Gen Z Trendsetter",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I research every ingredient before buying anything that touches my skin",
  },
  {
    name: "Tyler P",
    age: 22,
    location: "Seattle",
    persona: "Tech Enthusiast",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I won't pay more than $15 for personal care unless it solves a specific problem",
  },
  {
    name: "Jake M",
    age: 31,
    location: "Chicago",
    persona: "Young Professional",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "I only buy products my coworkers or LinkedIn network have personally recommended",
  },
  {
    name: "Sarah W",
    age: 28,
    location: "Austin",
    persona: "Health-Conscious",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "I switch body wash brands every few months just to try what's trending on Instagram Reels",
  },
  {
    name: "Marcus D",
    age: 35,
    location: "Houston",
    persona: "Value Seeker",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "I compare prices across three apps before adding anything to cart",
  },
  {
    name: "Rachel K",
    age: 40,
    location: "Atlanta",
    persona: "Social Shopper",
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    quote: "My family's preferences drive every household purchase I make",
  },
  {
    name: "Robert T",
    age: 48,
    location: "Denver",
    persona: "Brand Loyalist",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "I've used the same soap brand for 8 years and I see no reason to change",
  },
];

// ────────────────────────────────────────────
// Fan transform for each card based on index
// ────────────────────────────────────────────

const getFanTransform = (index: number, isActive: boolean) => {
  const center = 3;
  const offset = index - center;
  const absOffset = Math.abs(offset);

  // Tighter rotation — feels like a hand of cards
  const rotate = offset * 8;

  // Arc: center high, edges dip down following a circle-like curve
  // 0: 0, 1: 10, 2: 35, 3: 72
  const translateY = absOffset === 0 ? 0 : absOffset * absOffset * 10 + absOffset * 3;

  return {
    rotate,
    // Active card pops up significantly
    y: isActive ? translateY - 28 : translateY,
    scale: isActive ? 1.12 : 1,
  };
};

// ────────────────────────────────────────────
// Twin Avatar Card
// ────────────────────────────────────────────

const TwinCard = ({
  twin,
  index,
  isActive,
  onActivate,
}: {
  twin: TwinPersona;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const fan = getFanTransform(index, isActive);
  // Active card always on top, otherwise center cards higher
  const zIndex = isActive ? 20 : 7 - Math.abs(index - 3);

  return (
    <motion.button
      className="relative flex flex-col items-center outline-none group shrink-0"
      style={{ zIndex }}
      animate={{
        rotate: fan.rotate,
        y: fan.y,
        scale: fan.scale,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      tabIndex={0}
    >
      {/* Card */}
      <div
        className={`w-[150px] md:w-[180px] rounded-2xl border p-5 pb-4 flex flex-col items-center transition-all duration-300 ${
          isActive
            ? "bg-card border-primary/30 shadow-[0_12px_40px_-4px_rgba(182,229,42,0.2),0_4px_16px_-2px_rgba(0,0,0,0.3)]"
            : "bg-card/70 border-border/40 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* Avatar photo */}
        <div
          className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-2 transition-all duration-300 ring-2 ${
            isActive ? "scale-110 ring-primary/30" : "ring-border/30"
          }`}
        >
          <img
            src={twin.photo}
            alt={twin.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Persona tag */}
        <span className={`mt-2 px-3 py-1 rounded-full text-[10px] font-medium transition-colors duration-300 ${
          isActive
            ? "bg-primary/15 text-primary"
            : "bg-muted/50 text-muted-foreground"
        }`}>
          {twin.persona}
        </span>
      </div>
    </motion.button>
  );
};

// ────────────────────────────────────────────
// Quote Block
// ────────────────────────────────────────────

const QuoteBlock = ({ twin }: { twin: TwinPersona }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={twin.name}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-2xl mx-auto"
    >
      {/* Quote */}
      <p className="text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground/75 leading-relaxed px-6">
        <span className="text-3xl md:text-4xl lg:text-5xl align-top leading-none">"</span>{twin.quote}<span className="text-3xl md:text-4xl lg:text-5xl align-top leading-none">"</span>
      </p>

      {/* Attribution */}
      <p className="mt-4 text-sm text-primary-foreground/60 font-medium">
        {twin.name}, {twin.age} &middot; {twin.location} &middot; {twin.persona}
      </p>
    </motion.div>
  </AnimatePresence>
);

// ────────────────────────────────────────────
// Main Section
// ────────────────────────────────────────────

const DigitalTwins = () => {
  const [activeIndex, setActiveIndex] = useState(CENTER_INDEX);

  return (
    <section id="digital-twins" className="relative overflow-hidden">
      {/* ── Dark zone: heading + fan ── */}
      <div className="bg-background pt-20 pb-44 md:pt-28 md:pb-52">
        <div className="section-container">
          {/* Heading */}
          <div className="text-center mb-14 md:mb-20 scroll-reveal">
            <p className="eyebrow" style={{ color: "#B6E52A" }}>Digital Twins</p>
            <h2 className="section-heading mb-4">
              Create Digital Twins of{" "}
              <span className="text-gradient">Your Audience</span>
            </h2>
            <p className="body-text max-w-lg mx-auto">
              Hyper-realistic customer models that interact, provide feedback, and reveal insights in real-time.
            </p>
          </div>

          {/* Fan of cards — desktop: centered arc, mobile: show center 3 only */}
          <div
            className="flex justify-center items-end -space-x-2 md:-space-x-3 overflow-hidden md:overflow-visible pb-4 px-4 md:px-0 scroll-reveal stagger-2"
            onMouseLeave={() => setActiveIndex(CENTER_INDEX)}
          >
            {twins.map((twin, i) => {
              // On mobile, only show center 3 cards (index 2, 3, 4)
              const mobileHidden = i < 2 || i > 4 ? "hidden md:block" : "";
              return (
                <div key={twin.name} className={mobileHidden}>
                  <TwinCard
                    twin={twin}
                    index={i}
                    isActive={activeIndex === i}
                    onActivate={() => setActiveIndex(i)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Lime/green gradient zone: quote ── */}
      <div className="bg-primary relative -mt-8 pt-16 pb-16 md:pb-20">
        {/* Curved top edge */}
        <div className="absolute top-0 left-0 right-0 -translate-y-full">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0 80L0 40C240 80 480 0 720 40C960 80 1200 0 1440 40L1440 80Z" fill="hsl(var(--primary))" />
          </svg>
        </div>

        <div className="section-container scroll-reveal stagger-3">
          <QuoteBlock twin={twins[activeIndex]} />
        </div>
      </div>
    </section>
  );
};

export default DigitalTwins;
