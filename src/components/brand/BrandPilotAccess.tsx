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

  return (
    <section id="pilot-access" className="section-padding-lg">
      <div className="section-container max-w-md mx-auto">
        <div className="text-center mb-8 scroll-reveal">
          <p className="eyebrow">Pilot Program</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Founding Brand Access</h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            We are onboarding ten pilot brands. Early partners receive direct founder collaboration, custom simulation design support, and priority roadmap influence.
          </p>
        </div>

        {submitted ? (
          <div className="premium-card text-center p-8 scroll-reveal">
            <h3 className="text-xl font-bold text-foreground mb-2">Application received.</h3>
            <p className="text-muted-foreground text-sm">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 scroll-reveal stagger-1">
            <Input placeholder="Company name" value={form.company} onChange={(e) => set("company", e.target.value)} required maxLength={100} className="bg-card border-border" />
            <Input placeholder="Industry" value={form.industry} onChange={(e) => set("industry", e.target.value)} required maxLength={100} className="bg-card border-border" />
            <Select onValueChange={(v) => set("monthly_research_spend", v)}>
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
            <Input placeholder="Current research tools" value={form.current_research_tools} onChange={(e) => set("current_research_tools", e.target.value)} maxLength={500} className="bg-card border-border" />
            <Textarea placeholder="Biggest research bottleneck" value={form.biggest_bottleneck} onChange={(e) => set("biggest_bottleneck", e.target.value)} required maxLength={500} className="bg-card border-border min-h-[80px]" />
            <Input type="email" placeholder="Work email" value={form.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} className="bg-card border-border" />
            <Button type="submit" className="w-full font-medium" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Apply for Pilot Access"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BrandPilotAccess;
