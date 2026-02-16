import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mic, Brain, MessageSquare, DollarSign } from "lucide-react";
import { useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { z } from "zod";

const twinSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
});

const steps = [
  { icon: Mic, label: "10-minute AI interview" },
  { icon: Brain, label: "Your digital twin is created" },
  { icon: MessageSquare, label: "Brands interact with it" },
  { icon: DollarSign, label: "You earn per study" },
];

const Twins = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
            <p className="eyebrow">For Consumers</p>
            <h1 className="section-heading text-5xl md:text-6xl mb-6">
              Build your AI twin.<br />
              <span className="text-gradient">Earn when brands use it.</span>
            </h1>
            <p className="body-text max-w-lg mx-auto mb-10">
              Represent yourself in market research studies and get paid per interaction.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="section-container">
          <p className="eyebrow text-center scroll-reveal">How It Works</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {steps.map((step, i) => (
              <div key={i} className={`premium-card text-center scroll-reveal stagger-${i + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Cohort + Form */}
      <section className="section-padding-lg">
        <div className="section-container max-w-md mx-auto">
          <div className="scroll-reveal text-center mb-8">
            <p className="eyebrow">Founding Cohort</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              We're onboarding the first 500 founding twins.
            </h2>
            <p className="text-sm text-muted-foreground">
              Priority access if you refer 3 friends.
            </p>
          </div>

          {submitted ? (
            <div className="premium-card text-center scroll-reveal p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">You're on the list.</h3>
              <p className="text-muted-foreground text-sm">We'll reach out when your spot opens up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 scroll-reveal stagger-1">
              <Input
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="bg-card border-border"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="bg-card border-border"
              />
              <Input
                placeholder="Referral code (optional)"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                maxLength={50}
                className="bg-card border-border"
              />
              <Button type="submit" className="w-full font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Apply as Founding Twin"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Twins;
