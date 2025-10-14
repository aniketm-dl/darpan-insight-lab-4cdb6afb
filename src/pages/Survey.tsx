import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const surveySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  q1: z.string().min(1, "Please answer question 1"),
  q2: z.string().min(1, "Please answer question 2"),
  q3: z.string().min(1, "Please answer question 3"),
  q4: z.string().min(1, "Please answer question 4"),
  q5: z.string().min(1, "Please answer question 5"),
  q6: z.string().min(1, "Please answer question 6"),
  q7: z.string().min(1, "Please answer question 7"),
  q8: z.string().min(1, "Please answer question 8"),
  q9: z.string().min(1, "Please answer question 9"),
  q10: z.string().min(1, "Please answer question 10"),
  q11: z.string().min(1, "Please answer question 11"),
  q12: z.string().min(1, "Please answer question 12"),
  q13: z.string().min(1, "Please answer question 13"),
  q14: z.string().min(1, "Please answer question 14"),
  q15: z.string().min(1, "Please answer question 15"),
  q16: z.string().min(1, "Please answer question 16"),
  q17: z.string().min(1, "Please answer question 17"),
  q18: z.string().min(1, "Please answer question 18"),
  q19: z.string().min(1, "Please answer question 19"),
  q20: z.string().min(1, "Please answer question 20"),
  q21: z.string().min(1, "Please answer question 21"),
  q22: z.string().min(1, "Please answer question 22"),
  q23: z.string().min(1, "Please answer question 23"),
  q24: z.string().min(1, "Please answer question 24"),
  q25: z.string().min(1, "Please answer question 25"),
});

const questions = [
  "Question 1: How satisfied are you with our service?",
  "Question 2: How likely are you to recommend us?",
  "Question 3: How would you rate the product quality?",
  "Question 4: How easy was it to use our platform?",
  "Question 5: How responsive was our customer support?",
  "Question 6: How clear was our communication?",
  "Question 7: How valuable do you find our features?",
  "Question 8: How satisfied are you with pricing?",
  "Question 9: How well do we meet your needs?",
  "Question 10: How professional is our team?",
  "Question 11: How reliable is our service?",
  "Question 12: How innovative are our solutions?",
  "Question 13: How user-friendly is our interface?",
  "Question 14: How timely are our deliveries?",
  "Question 15: How comprehensive is our documentation?",
  "Question 16: How secure do you feel using our platform?",
  "Question 17: How satisfied are you with updates?",
  "Question 18: How effective is our onboarding?",
  "Question 19: How well do we handle feedback?",
  "Question 20: How competitive are we in the market?",
  "Question 21: How consistent is our service quality?",
  "Question 22: How transparent are our processes?",
  "Question 23: How accessible are our resources?",
  "Question 24: How satisfied are you overall?",
  "Question 25: How likely are you to continue using our service?",
];

const options = [
  "Very Dissatisfied",
  "Dissatisfied",
  "Neutral",
  "Satisfied",
  "Very Satisfied",
];

const Survey = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    q1: "", q2: "", q3: "", q4: "", q5: "",
    q6: "", q7: "", q8: "", q9: "", q10: "",
    q11: "", q12: "", q13: "", q14: "", q15: "",
    q16: "", q17: "", q18: "", q19: "", q20: "",
    q21: "", q22: "", q23: "", q24: "", q25: "",
  });

  const handleAnswerChange = (questionKey: string, value: string) => {
    setFormData(prev => ({ ...prev, [questionKey]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = surveySchema.parse(formData);

      const { error } = await supabase
        .from("survey_responses")
        .insert([{
          name: validatedData.name,
          email: validatedData.email || null,
          q1: validatedData.q1,
          q2: validatedData.q2,
          q3: validatedData.q3,
          q4: validatedData.q4,
          q5: validatedData.q5,
          q6: validatedData.q6,
          q7: validatedData.q7,
          q8: validatedData.q8,
          q9: validatedData.q9,
          q10: validatedData.q10,
          q11: validatedData.q11,
          q12: validatedData.q12,
          q13: validatedData.q13,
          q14: validatedData.q14,
          q15: validatedData.q15,
          q16: validatedData.q16,
          q17: validatedData.q17,
          q18: validatedData.q18,
          q19: validatedData.q19,
          q20: validatedData.q20,
          q21: validatedData.q21,
          q22: validatedData.q22,
          q23: validatedData.q23,
          q24: validatedData.q24,
          q25: validatedData.q25,
        }]);

      if (error) throw error;

      toast({
        title: "Survey submitted!",
        description: "Thank you for your valuable feedback.",
      });

      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit survey. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            ← Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-2">Customer Survey</h1>
          <p className="text-muted-foreground">
            Please take a few minutes to share your feedback with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4 bg-card p-6 rounded-lg border">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>
          </div>

          {questions.map((question, index) => {
            const questionKey = `q${index + 1}`;
            return (
              <div key={questionKey} className="space-y-3 bg-card p-6 rounded-lg border">
                <Label className="text-base font-semibold">{question}</Label>
                <RadioGroup
                  value={formData[questionKey as keyof typeof formData]}
                  onValueChange={(value) => handleAnswerChange(questionKey, value)}
                  required
                >
                  {options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${questionKey}-${optIndex}`} />
                      <Label
                        htmlFor={`${questionKey}-${optIndex}`}
                        className="font-normal cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Submit Survey"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
