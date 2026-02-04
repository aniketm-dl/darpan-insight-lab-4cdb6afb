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
      <section id="book-demo" className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-lg mx-auto text-center scroll-reveal">
            <div className="premium-card p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Thank you!
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                We'll reach out shortly.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="sm"
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
    <section id="book-demo" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8 scroll-reveal">
            <p className="eyebrow">Get started</p>
            <h2 className="section-heading mb-2">
              Book a Demo
            </h2>
            <p className="text-muted-foreground text-sm">
              Tell us a bit about you and we'll set up a tailored walk-through.
            </p>
          </div>

          <div className="premium-card scroll-reveal stagger-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-10"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm">Company *</Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm">Role *</Label>
                  <Input
                    id="role"
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="h-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific needs or questions..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
                />
                <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I agree to be contacted about my request and understand that Darpan Labs 
                  will process my information according to their privacy policy.
                </Label>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full"
                disabled={!formData.consent}
              >
                Submit Demo Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
