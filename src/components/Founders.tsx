import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founders = () => {
  const founders = [
    {
      name: "Aniket Gudadhe",
      role: "Co-founder",
      bio: "Product & engineering. Ex-Oracle. IIT Guwahati. Built data-heavy SaaS and automation systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Aniket Niranjan Mishra", 
      role: "Co-founder",
      bio: "BTech+MTech IIT Kharagpur; ex-AmEx Data Science; Markets intern @ Citi; CFA L2",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Manav Jain",
      role: "Co-founder", 
      bio: "B.E. CSE BITS Pilani; ex-Google SWE; Strategy intern @ WinZO; ACM ICPC regionalist",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
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
                <div className="absolute -bottom-2 -right-2 bg-gradient-primary rounded-full p-2 neon-glow-green">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
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