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
    <section id="founders" style={{ padding: "80px 0 60px", background: "#0F0F0F" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
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
            style={{
              fontSize: 32,
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

        <div className="grid md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`scroll-reveal-scale stagger-${index + 1}`}
              style={{
                background: "#161616",
                border: "1px solid #222",
                borderRadius: 16,
                padding: "28px 24px 24px",
                textAlign: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#222";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div style={{ marginBottom: 20, position: "relative", display: "inline-block" }}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #2A2A2A",
                  }}
                />
              </div>

              {/* Name */}
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#F0F0F0", marginBottom: 4 }}>
                {founder.name}
              </h3>
              <p style={{ fontSize: 12, color: "#B6E52A", fontWeight: 500, marginBottom: 12 }}>Co-founder</p>

              {/* Experience */}
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, marginBottom: 4 }}>
                {founder.companies.join(" · ")}
              </p>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.4, marginBottom: 16 }}>
                {founder.education}
              </p>

              {/* LinkedIn */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors"
                style={{ fontSize: 12, color: "#666" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B6E52A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
