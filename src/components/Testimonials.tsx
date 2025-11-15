import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialMichael from "@/assets/testimonial-michael.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";
import companyTechcorp from "@/assets/company-techcorp.png";
import companyShopnow from "@/assets/company-shopnow.png";
import companyFintech from "@/assets/company-fintech.png";
import companyHealthtech from "@/assets/company-healthtech.png";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Director of Marketing",
    company: "TechVision Inc.",
    image: testimonialSarah,
    content: "Darpan Labs transformed how we approach user research. The AI twins provided insights we never could have gotten from traditional methods. Our conversion rate improved by 40% after implementing their recommendations.",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "ShopNow",
    image: testimonialMichael,
    content: "The speed and accuracy of Darpan's digital twins are incredible. We can now test dozens of design variations in days instead of months. It's like having an instant focus group available 24/7.",
  },
  {
    name: "Priya Sharma",
    role: "UX Research Lead",
    company: "FinTech Solutions",
    image: testimonialPriya,
    content: "What impressed me most is how the AI twins capture nuanced user behaviors. The insights go beyond surface-level feedback to reveal underlying motivations and pain points. This has been a game-changer for our product strategy.",
  },
];

const companies = [
  { name: "TechCorp", logo: companyTechcorp },
  { name: "ShopNow", logo: companyShopnow },
  { name: "FinTech Pro", logo: companyFintech },
  { name: "HealthTech Plus", logo: companyHealthtech },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            From Our Users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders are saying about Darpan Labs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="scroll-reveal-scale bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground/70">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Companies Section */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              Join companies transforming their user research
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
