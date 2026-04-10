import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  company: z.string().trim().min(1, "Company is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  monthly_research_spend: z.string().min(1, "Required"),
  current_research_tools: z.string().trim().max(500).optional(),
  biggest_bottleneck: z.string().trim().min(1, "Required").max(500),
  email: z.string().trim().email("Invalid email").max(255),
});

const BrandPilotAccess = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    company: "",
    industry: "",
    monthly_research_spend: "",
    current_research_tools: "",
    biggest_bottleneck: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
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

  const perks = [
    { title: "Direct Founder Access", desc: "Work 1-on-1 with our founding team" },
    { title: "Custom Simulations", desc: "Tailored twin panels for your audience" },
    { title: "Roadmap Influence", desc: "Shape the product based on your needs" },
    { title: "Priority Support", desc: "Dedicated onboarding and research design" },
  ];

  return (
    <section id="pilot-access" className="relative overflow-hidden" style={{ padding: "clamp(60px, 10vw, 100px) 0 clamp(40px, 8vw, 80px)", background: "#0F0F0F" }}>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div className="scroll-reveal">
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#B6E52A",
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 16,
              }}
            >
              Pilot Program
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: 16,
              }}
            >
              Become a founding brand partner
            </h2>
            <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, marginBottom: 36, maxWidth: 420 }}>
              We're onboarding pilot brands. Early partners get direct founder collaboration, custom simulation design, and priority roadmap influence.
            </p>

            {/* Perks grid — hidden on mobile */}
            <div className="hidden md:grid grid-cols-2 gap-3">
              {perks.map((perk, i) => (
                <div
                  key={perk.title}
                  className={`scroll-reveal stagger-${i + 1}`}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "16px 18px",
                  }}
                >
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#E5E5E5", marginBottom: 4 }}>{perk.title}</p>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.4 }}>{perk.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right — Form */}
          <div className="scroll-reveal stagger-1">
            {submitted ? (
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(182,229,42,0.15)",
                  borderRadius: 16,
                  padding: "48px 32px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(182,229,42,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B6E52A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#F5F5F5", marginBottom: 8 }}>Application received</h3>
                <p style={{ fontSize: 14, color: "#888" }}>We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #222",
                  borderRadius: 16,
                  padding: "clamp(20px, 4vw, 32px) clamp(16px, 3vw, 28px)",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: 600, color: "#E5E5E5", marginBottom: 4 }}>Apply for pilot access</p>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 24 }}>Takes less than 2 minutes</p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input placeholder="Company name" value={form.company} onChange={(e) => set("company", e.target.value)} required maxLength={100} className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 h-11" />
                    <Input placeholder="Industry" value={form.industry} onChange={(e) => set("industry", e.target.value)} required maxLength={100} className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 h-11" />
                  </div>
                  <Select onValueChange={(v) => set("monthly_research_spend", v)}>
                    <SelectTrigger className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 h-11">
                      <SelectValue placeholder="Monthly research spend" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<$5k">Less than $5k</SelectItem>
                      <SelectItem value="$5k-$25k">$5k – $25k</SelectItem>
                      <SelectItem value="$25k-$100k">$25k – $100k</SelectItem>
                      <SelectItem value=">$100k">More than $100k</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Current research tools (optional)" value={form.current_research_tools} onChange={(e) => set("current_research_tools", e.target.value)} maxLength={500} className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 h-11" />
                  <Textarea placeholder="What's your biggest research bottleneck?" value={form.biggest_bottleneck} onChange={(e) => set("biggest_bottleneck", e.target.value)} required maxLength={500} className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 min-h-[80px] resize-none" />
                  <Input type="email" placeholder="Work email" value={form.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} className="bg-[#141414] border-[#2A2A2A] focus:border-[#B6E52A]/40 h-11" />
                  <Button
                    type="submit"
                    className="w-full font-semibold h-11 text-[14px]"
                    disabled={isSubmitting}
                    style={{
                      boxShadow: "0 2px 16px rgba(182,229,42,0.25)",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Apply for Pilot Access"}
                  </Button>
                </form>

                <p style={{ fontSize: 11, color: "#555", textAlign: "center", marginTop: 16 }}>
                  No commitment required. We'll reach out to schedule a call.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPilotAccess;
