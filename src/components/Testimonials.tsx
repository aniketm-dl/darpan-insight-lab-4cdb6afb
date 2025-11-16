import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialMichael from "@/assets/testimonial-michael.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const timeToShipData = [
  { name: "Traditional Research", days: 21 },
  { name: "Darpan Labs", days: 3 },
];

const abTestData = [
  { week: "Week 1", simulated: 65, actual: 62 },
  { week: "Week 2", simulated: 72, actual: 70 },
  { week: "Week 3", simulated: 78, actual: 76 },
  { week: "Week 4", simulated: 85, actual: 83 },
  { week: "Week 5", simulated: 88, actual: 87 },
  { week: "Week 6", simulated: 91, actual: 90 },
];

const testimonials = [
  {
    name: "Riya Mehta",
    role: "Product Manager",
    company: "PlayBuddy",
    image: testimonialSarah,
    content:
      "We used to wait 2–3 weeks for survey results before every product tweak. With Darpan, I can test a new flow on AI twins overnight and know exactly where users would drop off. It's changed how we prioritize features.",
  },
  {
    name: "Aarav Patel",
    role: "UX Research Lead",
    company: "NovaPay",
    image: testimonialMichael,
    content:
      "Traditional UX tests gave us what users said, not what they'd do. Darpan's simulations showed behavioral friction points we hadn't even spotted. Our checkout completion improved 18% after acting on those insights.",
  },
  {
    name: "Emily Roy",
    role: "Brand Strategy Lead",
    company: "Glimmer Cosmetics",
    image: testimonialPriya,
    content:
      "Before Darpan, we ran campaigns on gut feel. Now, we run them on evidence. Their AI twins gave us fast feedback on messaging that actually converts — it's like having a 24/7 focus group.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-background" id="proofs">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 scroll-reveal">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">[ PROOFS ]</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            From Teams That Rethink Research
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Evidence from early teams using AI twins — faster validation, higher predictive accuracy.
          </p>
          <p className="text-primary text-sm md:text-base max-w-2xl mx-auto italic">
            When behaviour is simulated, decisions get validated — not delayed.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20">
          {/* Time to Ship Chart */}
          <div
            className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col"
            style={{ boxShadow: "0px 0px 15px rgba(198, 255, 62, 0.06)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary"></span>
              Time to Ship New Features
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={timeToShipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(198, 255, 62, 0.08)" strokeOpacity={0.3} />
                <XAxis dataKey="name" stroke="#A0A0A0" tick={{ fill: "#A0A0A0", fontSize: 12 }} />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{ value: "Days", angle: -90, position: "insideLeft", fill: "#A0A0A0" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar dataKey="days" radius={[8, 8, 0, 0]}>
                  {timeToShipData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === "Darpan Labs" ? "#C6FF3E" : "#4A90E2"}
                      stroke={entry.name === "Darpan Labs" ? "#C6FF3E" : "#4A90E2"}
                      strokeWidth={2}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs font-mono text-center" style={{ color: "#C6FF3E" }}>
                7× faster feature validation
              </p>
            </div>
          </div>

          {/* A/B Test Response Chart */}
          <div
            className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col"
            style={{ boxShadow: "0px 0px 15px rgba(198, 255, 62, 0.06)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary"></span>
              A/B Test Response Accuracy
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={abTestData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(198, 255, 62, 0.08)" strokeOpacity={0.3} />
                <XAxis dataKey="week" stroke="#A0A0A0" tick={{ fill: "#A0A0A0", fontSize: 12 }} />
                <YAxis
                  stroke="#A0A0A0"
                  tick={{ fill: "#A0A0A0" }}
                  label={{
                    value: "Behavioural Match (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#A0A0A0",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend wrapperStyle={{ color: "#A0A0A0" }} />
                <Line
                  type="monotone"
                  dataKey="simulated"
                  stroke="#C6FF3E"
                  strokeWidth={3}
                  dot={{ fill: "#C6FF3E", r: 5 }}
                  name="Simulated"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#4A90E2"
                  strokeWidth={3}
                  dot={{ fill: "#4A90E2", r: 5 }}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs font-mono text-center" style={{ color: "#C6FF3E" }}>
                95%+ correlation between simulated and real user behaviour after 6 weeks
              </p>
            </div>
          </div>
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
                <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
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
