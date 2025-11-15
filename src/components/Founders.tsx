import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      experience: ["American Express, Citi Bank", "IIM Ahmedabad, IIT Kharagpur"],
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
    <section id="founders" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ TEAM ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Meet The Founders
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of customer research with AI-powered customer twins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <a
              key={index}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-3xl p-6 card-shadow hover:neon-glow-green transition-all duration-300 hover:-translate-y-2 text-center border-2 border-transparent hover:border-primary/20 block cursor-pointer"
            >
              <div className="relative mb-4">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-primary/20"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">{founder.name}</h3>

              <ul className="text-muted-foreground text-base leading-relaxed space-y-2">
                {founder.experience.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Advisors section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Advised by experts in consumer psychology and applied AI.</p>
        </div>
      </div>
    </section>
  );
};

export default Founders;
