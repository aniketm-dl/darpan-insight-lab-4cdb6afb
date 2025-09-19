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
      bio: "Product & engineering. Ex-Oracle. IIT Guwahati. Built data-heavy SaaS and automation systems.",
      image: aniketGudadheImg,
      linkedin: "#"
    },
    {
      name: "Aniket Niranjan Mishra", 
      role: "Co-founder",
      bio: "Data science & experimentation. Ex-American Express. IIT Kharagpur. Modeling, measurement, and analytics.",
      image: aniketMishraImg,
      linkedin: "#"
    },
    {
      name: "Manav Jain",
      role: "Co-founder", 
      bio: "Platform & infra. Ex-Google SWE. BITS Pilani. Scalable backends and secure APIs.",
      image: manavJainImg,
      linkedin: "#"
    }
  ];

  return (
    <section id="founders" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet the founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MBA students at IIM Ahmedabad, with undergrads from IITs/BITS, and prior work 
            experience in tech, ML & product fields
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-6 card-shadow hover:neon-glow-green transition-all duration-300 hover:-translate-y-2 text-center border-2 border-transparent hover:border-primary/20"
            >
              <div className="relative mb-6">
                <img 
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20"
                />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {founder.name}
              </h3>
              
              <p className="text-neon-green font-medium mb-3">
                {founder.role}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {founder.bio}
              </p>
              
              <Button 
                variant="neon" 
                size="sm"
                className="w-full"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          ))}
        </div>

        {/* Advisors section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Advisors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-card rounded-full px-4 py-2 card-shadow">
              <span className="text-sm font-medium text-foreground">Dr. Priya Sharma</span>
              <span className="text-xs text-muted-foreground ml-2">• AI Research, IIT Delhi</span>
            </div>
            <div className="bg-card rounded-full px-4 py-2 card-shadow">
              <span className="text-sm font-medium text-foreground">Rajesh Kumar</span>
              <span className="text-xs text-muted-foreground ml-2">• Ex-VP Product, Flipkart</span>
            </div>
            <div className="bg-card rounded-full px-4 py-2 card-shadow">
              <span className="text-sm font-medium text-foreground">Sarah Chen</span>
              <span className="text-xs text-muted-foreground ml-2">• Market Research Director, McKinsey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;