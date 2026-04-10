import HeaderNew from "@/components/HeaderNew";
import HeroNew from "@/components/HeroNew";
import DigitalTwins from "@/components/DigitalTwins";
import FlowDemo from "@/components/FlowDemo";
import BrandPilotAccess from "@/components/brand/BrandPilotAccess";
import Founders from "@/components/Founders";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const Home = () => {
  useScrollRevealMultiple();

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />
      <HeroNew />
      <DigitalTwins />
      <FlowDemo />
      <BrandPilotAccess />
      <Founders />

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1A1A1A", background: "#0C0C0C" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: "clamp(28px, 5vw, 48px)", paddingBottom: "clamp(20px, 4vw, 32px)" }}>
          {/* Main row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 scroll-reveal" style={{ marginBottom: 32 }}>
            {/* Brand */}
            <div>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#F0F0F0", letterSpacing: "-0.01em" }}>
                DARPAN<span style={{ color: "#B6E52A" }}>LABS</span>
              </span>
              <p style={{ fontSize: 13, color: "#555", marginTop: 8, maxWidth: 280, lineHeight: 1.5 }}>
                AI-powered customer twins for instant market research and faster product decisions.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Product</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Digital Twins", id: "digital-twins" },
                    { label: "How It Works", id: "how-it-works" },
                    { label: "Pilot Access", id: "pilot-access" },
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                      style={{ fontSize: 13, color: "#777", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", transition: "color 0.15s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E5E5")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Contact</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:aniketm@darpanlabs.ai"
                    style={{ fontSize: 13, color: "#777", textDecoration: "none", transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#B6E52A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
                  >
                    aniketm@darpanlabs.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: 20 }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <p style={{ fontSize: 12, color: "#444" }}>
                &copy; {new Date().getFullYear()} DarpanLabs. All rights reserved.
              </p>
              <p style={{ fontSize: 12, color: "#333" }}>
                Built in India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
