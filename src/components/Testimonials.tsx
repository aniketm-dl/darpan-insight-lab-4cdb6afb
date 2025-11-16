import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialMichael from "@/assets/testimonial-michael.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";

const testimonials = [
  {
    name: "Riya Mehta",
    role: "Product Manager",
    company: "PlayBuddy",
    image: testimonialSarah,
    content: "We used to wait 2–3 weeks for survey results before every product tweak. With Darpan, I can test a new flow on AI twins overnight and know exactly where users would drop off. It's changed how we prioritize features.",
  },
  {
    name: "Aarav Patel",
    role: "UX Research Lead",
    company: "NovaPay",
    image: testimonialMichael,
    content: "Traditional UX tests gave us what users *said*, not what they'd *do*. Darpan's simulations showed behavioral friction points we hadn't even spotted. Our checkout completion improved 18% after acting on those insights.",
  },
  {
    name: "Emily Roy",
    role: "Brand Strategy Lead",
    company: "Glimmer Cosmetics",
    image: testimonialPriya,
    content: "Before Darpan, we ran campaigns on gut feel. Now, we run them on evidence. Their AI twins gave us fast feedback on messaging that actually converts — it's like having a 24/7 focus group.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ TESTIMONIALS ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            From Teams That Rethink Research
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how teams replaced surveys with simulations — and turned hunches into evidence in hours.
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
      </div>
    </section>
  );
};

export default Testimonials;
