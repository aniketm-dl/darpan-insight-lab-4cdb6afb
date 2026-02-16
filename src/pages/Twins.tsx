import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { z } from "zod";
import { cn } from "@/lib/utils";
import TwinsVisionPanels from "@/components/twins/TwinsVisionPanels";

const twinSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
});

const faqs = [
  { q: "Who owns my twin?", a: "You do. Your twin is your property. You control what data goes in and can delete it at any time." },
  { q: "How is my data used?", a: "Only for building your digital twin. Brands interact with a simulation, never your raw data." },
  { q: "Can I delete my twin?", a: "Yes. You can delete your twin and all associated data at any time. No questions asked." },
  { q: "How accurate are simulations?", a: "Accuracy improves with data quality. The more you share, the more nuanced your twin becomes." },
  { q: "When will decision simulations launch?", a: "We are building toward personal decision tools. Founding members will get early access." },
];

const Twins = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useScrollRevealMultiple();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = twinSchema.safeParse({ name, email });
    if (!result.success) {
      toast({ title: "Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("twin_applications" as any).insert({
      name: result.data.name,
      email: result.data.email,
      referral_code: referralCode.trim() || null,
    } as any);

    setIsSubmitting(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
    }
  };

  const scrollToHow = () => {
    document.getElementById("what-we-collect")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    document.getElementById("join-early")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
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

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="section-container">
          <div className="max-w-2xl scroll-reveal">
            <p className="eyebrow">For Individuals</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Build your digital twin.<br />
              Own it. <span className="text-gradient">Earn from it.</span>
            </h1>
            <p className="body-text mb-10 max-w-lg">
              We help you model how you think, decide, and behave. You own your twin and brands pay to run research on it — meaning you earn from every interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={scrollToForm} size="xl" className="font-medium">
                Build My Twin
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              <Button onClick={scrollToHow} variant="outline" size="lg" className="font-medium">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU SHARE */}
      <section id="what-we-collect" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="scroll-reveal">
            <p className="eyebrow">What You Share</p>
            <h2 className="section-heading mb-6">What you share</h2>
          </div>
          <div className="max-w-2xl scroll-reveal stagger-1">
            <p className="body-text mb-8">
              We interview you using structured AI conversations to map how you think, what you value, and how you make trade-offs. We capture your preferences, motivations, and decision patterns — all through consented, intentional inputs.
            </p>
            <ul className="space-y-2 mb-8">
              {["Lifestyle preferences", "Spending behavior", "Risk tolerance", "Career aspirations", "Social tendencies", "Decision logic"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">
              No passive tracking. No hidden data scraping. Everything is consented.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOUR TWIN BECOMES */}
      <section className="section-padding">
        <div className="section-container">
          <div className="scroll-reveal">
            <p className="eyebrow">Your Twin</p>
            <h2 className="section-heading mb-6">What your digital twin becomes</h2>
          </div>
          <div className="max-w-2xl scroll-reveal stagger-1">
            <p className="body-text mb-8">
              Your twin is a structured behavioral model of you. It reflects how you evaluate options and improves as you update it. The more nuanced it becomes, the more valuable it is.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Represents your decision patterns",
                "Simulates likely responses to scenarios",
                "Updates as your life evolves",
                "Earns when brands interact with it",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm">Better twins earn more.</p>
          </div>
        </div>
      </section>

      {/* HOW YOU EARN */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="scroll-reveal">
            <p className="eyebrow">Earnings</p>
            <h2 className="section-heading mb-6">Earn from your thinking</h2>
          </div>
          <div className="max-w-2xl scroll-reveal stagger-1">
            <p className="body-text mb-8">
              Brands run simulations instead of recruiting panels. When your twin is selected for a study, you earn. You also earn for participating in new interviews and keeping your twin up to date.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Paid per research interaction",
                "Paid for updating your twin",
                "Higher-quality twins receive more usage",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm italic">Your perspective has value.</p>
          </div>
        </div>
      </section>

      {/* VISION — Interactive panels */}
      <TwinsVisionPanels />

      {/* WHY JOIN EARLY */}
      <section id="join-early" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="scroll-reveal text-center mb-8">
            <p className="eyebrow">Early Access</p>
            <h2 className="section-heading mb-4">Why build now</h2>
            <p className="body-text max-w-lg mx-auto mb-6">
              The earlier you build your twin, the more it learns. Founding members shape the future of the platform and early twins gain higher visibility and usage.
            </p>
            <ul className="space-y-2 mb-8 inline-block text-left">
              {["Priority access", "Higher earning potential", "Influence roadmap direction"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="premium-card text-center scroll-reveal p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">You're on the list.</h3>
                <p className="text-muted-foreground text-sm">We'll reach out when your spot opens up.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 scroll-reveal stagger-1">
                <Input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} className="bg-card border-border" />
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} className="bg-card border-border" />
                <Input placeholder="Referral code (optional)" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} maxLength={50} className="bg-card border-border" />
                <Button type="submit" className="w-full font-medium" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Become a Founding Twin"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 scroll-reveal">
              <p className="eyebrow">FAQ</p>
              <h2 className="section-heading">Common questions</h2>
            </div>
            <div className="lg:col-span-8 scroll-reveal stagger-1">
              <div className="divide-y divide-border/50">
                {faqs.map((f, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-start justify-between gap-4 py-4 text-left transition-colors hover:text-primary"
                    >
                      <span className="text-foreground font-medium text-[15px] leading-snug pr-4">{f.q}</span>
                      <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-1", openFaq === i && "rotate-180 text-primary")} />
                    </button>
                    <div className={cn("grid transition-all duration-200 ease-out", openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground text-sm leading-relaxed pb-4 pr-8">{f.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding-lg bg-muted/30">
        <div className="section-container text-center">
          <div className="scroll-reveal max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Your mind, modeled and <span className="text-gradient">amplified.</span>
            </h2>
            <Button onClick={scrollToForm} size="xl" className="font-medium">
              Build My Twin
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
};

export default Twins;
