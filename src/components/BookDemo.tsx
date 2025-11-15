import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const demoSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(200, "Company must be less than 200 characters"),
  role: z.string().trim().min(1, "Role is required").max(100, "Role must be less than 100 characters"),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional().or(z.literal("")),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional().or(z.literal("")),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted")
});

const BookDemo = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    message: "",
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = demoSchema.safeParse(formData);
    
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    // Save to database with validated data
    const { error } = await supabase
      .from('demo_submissions')
      .insert({
        name: result.data.name,
        email: result.data.email,
        company: result.data.company,
        role: result.data.role,
        phone: result.data.phone || null,
        message: result.data.message || null,
      });

    if (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="book-demo" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-12 card-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Thank you!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We'll reach out shortly.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-demo" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ NEED CONVINCING? ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Tell Your CTO About Darpan Labs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Need to convince your company to get Darpan Labs? We can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Work Email:
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="you@company.com"
                  className="h-14 bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Your Name:
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="John Doe"
                  className="h-14 bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Company:
                </Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Acme Inc."
                  className="h-14 bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Your Role:
                </Label>
                <Input
                  id="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  placeholder="Product Manager"
                  className="h-14 bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Phone (Optional):
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="h-14 bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Message:
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[100px] bg-background/50 border-border/50"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground font-light">
                  I agree to be contacted about my request and understand that Darpan Labs 
                  will process my information according to their privacy policy.
                </Label>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                disabled={!formData.consent}
              >
                Submit Demo Request
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-muted/30 text-muted-foreground uppercase tracking-wider font-mono text-xs">
                    or
                  </span>
                </div>
              </div>

              <Button 
                type="button"
                variant="outline"
                size="lg"
                className="w-full h-14 border-primary/50 text-primary hover:bg-primary/10 font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore More →
              </Button>

              <p className="text-center text-sm text-muted-foreground pt-2">
                No credit card required · Quick setup
              </p>
            </form>
          </div>

          {/* Right side - Visual Preview */}
          <div className="hidden lg:block">
            <div className="bg-muted/20 rounded-3xl p-8 border border-border/50 min-h-[600px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative">
                <div className="mb-6 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground font-mono">
                  <p className="text-foreground font-semibold">Dear [CTO],</p>
                  <p className="leading-relaxed">
                    I wanted to share an exciting tool that could significantly improve our customer research process.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-primary font-medium">Darpan Labs</span> uses AI-powered customer twins to help teams understand their users better and build products that truly resonate.
                  </p>
                  <p className="leading-relaxed">
                    With Darpan Labs, we can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Get instant insights from AI customer twins</li>
                    <li>Validate ideas before building</li>
                    <li>Reduce time spent on traditional research</li>
                    <li>Make data-driven product decisions</li>
                  </ul>
                  <p className="leading-relaxed pt-4">
                    I think this could be a game-changer for our team.
                  </p>
                  <p className="pt-4">
                    Best regards,<br />
                    <span className="text-foreground">[Your Name]</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;