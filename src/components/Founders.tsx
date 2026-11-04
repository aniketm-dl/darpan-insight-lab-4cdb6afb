import aniketGudadheImg from "@/assets/aniket-gudadhe.png";
import aniketMishraImg from "@/assets/aniket-mishra.png";
import manavJainImg from "@/assets/manav-jain.png";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Founders = () => {
  const founders = [
    {
      name: "Aniket Gudadhe",
      companies: ["Oracle", "Amazon"],
      education: "IIM Ahmedabad, IIT Guwahati",
      image: aniketGudadheImg,
      linkedin: "https://www.linkedin.com/in/aniket-g-a19644113/",
    },
    {
      name: "Aniket Niranjan Mishra",
      companies: ["American Express", "Citi Bank", "MyShubhLife"],
      education: "IIM Ahmedabad, IIT Kharagpur",
      image: aniketMishraImg,
      linkedin: "https://www.linkedin.com/in/aniket-niranjan-mishra-1203/",
    },
    {
      name: "Manav Jain",
      companies: ["Google", "WinZO Games", "Rupifi"],
      education: "IIM Ahmedabad, BITS Pilani",
      image: manavJainImg,
      linkedin: "https://www.linkedin.com/in/manav-jain-784176173/",
    },
  ];

  return (
    <section id="founders" className="relative overflow-hidden" style={{ padding: "clamp(48px, 8vw, 80px) 0 clamp(40px, 6vw, 60px)", background: "#0F0F0F" }}>
      {/* Subtle radial glow behind cards */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "radial-gradient(ellipse at 50% 60%, rgba(182,229,42,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-reveal" style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#B6E52A",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            Team
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-[32px]"
            style={{
              fontWeight: 700,
              color: "#F5F5F5",
              letterSpacing: "-0.025em",
              marginBottom: 8,
            }}
          >
            Meet the founders
          </h2>
          <p style={{ fontSize: 14, color: "#666", maxWidth: 400, margin: "0 auto" }}>
            Building the future of customer research with AI-powered digital twins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {founders.map((founder, index) => (
            <a
              key={index}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-reveal-scale stagger-${index + 1} group block`}
              style={{
                background: "linear-gradient(180deg, #1A1A1A 0%, #141414 100%)",
                border: "1px solid #252525",
                borderRadius: 20,
                padding: "clamp(20px, 4vw, 32px) clamp(16px, 3vw, 28px) clamp(16px, 3vw, 28px)",
                textAlign: "center",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(182,229,42,0.2)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(182,229,42,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#252525";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Avatar with ring */}
              <div style={{ marginBottom: 20, position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    padding: 3,
                    background: "linear-gradient(135deg, rgba(182,229,42,0.3), rgba(182,229,42,0.05))",
                  }}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #141414",
                    }}
                  />
                </div>
              </div>

              {/* Name + role */}
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#F5F5F5", marginBottom: 4 }}>
                {founder.name}
              </h3>
              <p style={{ fontSize: 12, color: "#B6E52A", fontWeight: 600, letterSpacing: 0.5, marginBottom: 16 }}>Co-founder</p>

              {/* Divider */}
              <div style={{ width: 32, height: 1, background: "#2A2A2A", margin: "0 auto 16px" }} />

              {/* Companies */}
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1" style={{ marginBottom: 8 }}>
                {founder.companies.map((company, i) => (
                  <span key={company} style={{ fontSize: 13, color: "#999" }}>
                    {company}{i < founder.companies.length - 1 && <span style={{ color: "#333", marginLeft: 8 }}>·</span>}
                  </span>
                ))}
              </div>

              {/* Education */}
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 18, flex: 1 }}>
                {founder.education}
              </p>

              {/* LinkedIn indicator */}
              <div
                className="inline-flex items-center gap-2 transition-all"
                style={{
                  fontSize: 12,
                  color: "#555",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid #2A2A2A",
                  borderRadius: 8,
                  padding: "6px 14px",
                }}
              >
                <LinkedInIcon />
                <span>Connect</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
