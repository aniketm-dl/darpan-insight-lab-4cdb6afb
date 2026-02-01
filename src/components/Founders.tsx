import aniketGudadheImg from "@/assets/aniket-gudadhe.png";
import aniketMishraImg from "@/assets/aniket-mishra.png";
import manavJainImg from "@/assets/manav-jain.png";

const Founders = () => {
  const founders = [
    {
      name: "Aniket Gudadhe",
      role: "Co-founder",
      experience: ["Oracle, Amazon", "IIM Ahmedabad, IIT Guwahati"],
      image: aniketGudadheImg,
      linkedin: "https://www.linkedin.com/in/aniket-g-a19644113/",
    },
    {
      name: "Aniket Niranjan Mishra",
      role: "Co-founder",
      experience: ["American Express, Citi Bank, MyShubhLife", "IIM Ahmedabad, IIT Kharagpur"],
      image: aniketMishraImg,
      linkedin: "https://www.linkedin.com/in/aniket-niranjan-mishra-1203/",
    },
    {
      name: "Manav Jain",
      role: "Co-founder",
      experience: ["Google, WinZO Games, Rupifi", "IIM Ahmedabad, BITS Pilani"],
      image: manavJainImg,
      linkedin: "https://www.linkedin.com/in/manav-jain-784176173/",
    },
  ];

  return (
    <section id="founders" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="eyebrow">Leadership</p>
          <h2 className="section-heading mb-4">Meet the founders</h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Building the future of customer research with AI-powered customer twins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <a
              key={index}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card text-center hover:border-primary/20 cursor-pointer"
            >
              <div className="relative mb-4">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border border-border"
                />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">{founder.name}</h3>

              <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                {founder.experience.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">Advised by experts in consumer psychology and applied AI.</p>
        </div>
      </div>
    </section>
  );
};

export default Founders;
