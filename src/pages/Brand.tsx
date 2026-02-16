import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Clock, DollarSign, BarChart3, Users, Zap, FileText } from "lucide-react";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { z } from "zod";

const brandSchema = z.object({
  company: z.string().trim().min(1, "Company is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  monthly_research_spend: z.string().min(1, "Required"),
  biggest_bottleneck: z.string().trim().min(1, "Required").max(500),
  email: z.string().trim().email("Invalid email").max(255),
});

const painPoints = [
  { icon: Clock, title: "Traditional research is slow", desc: "Weeks of planning, recruiting, and waiting for results." },
  { icon: DollarSign, title: "Panels are expensive", desc: "High per-respondent costs eat into research budgets." },
  { icon: BarChart3, title: "Surveys lack depth", desc: "Multiple-choice answers miss the nuance you need." },
];

const howSteps = [
  { icon: Users, label: "Select segment", desc: "Choose demographics and psychographics for your study." },
  { icon: Zap, label: "Run experiment", desc: "AI twins respond to your questions in real time." },
  { icon: FileText, label: "Get insight report", desc: "Full evidence trail with quotes and analysis." },
];

const Brand = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState({
    company: "",
    industry: "",
    monthly_research_spend: "",
    biggest_bottleneck: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useScrollRevealMultiple();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = brandSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("brand_applications" as any).insert(result.data as any);
    setIsSubmitting(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft size={16} />
            Back
          </button>
          <div className="flex items-baseline ml-auto">
            <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
            <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center">
          <div className="scroll-reveal max-w-2xl mx-auto">
            <p className="eyebrow">For Brands</p>
            <h1 className="section-heading text-5xl md:text-6xl mb-6">
              Run market research in<br />
              <span className="text-gradient">minutes, not months.</span>
            </h1>
            <p className="body-text max-w-lg mx-auto">
              Access AI-powered digital twins of real consumers and test ideas instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className={`premium-card scroll-reveal stagger-${i + 1}`}>
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-foreground font-semibold mb-2 text-sm">{point.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="section-container">
          <p className="eyebrow text-center scroll-reveal">How It Works</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {howSteps.map((step, i) => (
              <div key={i} className={`premium-card text-center scroll-reveal stagger-${i + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-1 text-sm">{step.label}</h3>
                <p className="text-muted-foreground text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="section-padding-lg">
        <div className="section-container max-w-md mx-auto">
          <div className="scroll-reveal text-center mb-8">
            <p className="eyebrow">Apply for Pilot Access</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Get early access to AI-powered research.
            </h2>
          </div>

          {submitted ? (
            <div className="premium-card text-center scroll-reveal p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Application received.</h3>
              <p className="text-muted-foreground text-sm">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 scroll-reveal stagger-1">
              <Input
                placeholder="Company name"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                required
                maxLength={100}
                className="bg-card border-border"
              />
              <Input
                placeholder="Industry"
                value={form.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
                required
                maxLength={100}
                className="bg-card border-border"
              />
              <Select onValueChange={(v) => handleChange("monthly_research_spend", v)}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Monthly research spend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<$5k">Less than $5k</SelectItem>
                  <SelectItem value="$5k-$25k">$5k – $25k</SelectItem>
                  <SelectItem value="$25k-$100k">$25k – $100k</SelectItem>
                  <SelectItem value=">$100k">More than $100k</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Biggest research bottleneck"
                value={form.biggest_bottleneck}
                onChange={(e) => handleChange("biggest_bottleneck", e.target.value)}
                required
                maxLength={500}
                className="bg-card border-border min-h-[80px]"
              />
              <Input
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                maxLength={255}
                className="bg-card border-border"
              />
              <Button type="submit" className="w-full font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Apply for Pilot Access"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Brand;
