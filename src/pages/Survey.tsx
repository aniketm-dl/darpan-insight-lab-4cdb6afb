import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const surveySchema = z.object({
  q1: z.string().min(1, "Please answer this question"),
  q2: z.string().min(1, "Please answer this question"),
  q3: z.string().min(1, "Please answer this question"),
  q4: z.string().min(1, "Please answer this question"),
  q5: z.string().min(1, "Please answer this question"),
  q6: z.string().min(1, "Please answer this question"),
  q7: z.string().min(1, "Please answer this question"),
  q8: z.string().min(1, "Please answer this question"),
  q9: z.string().min(1, "Please answer this question"),
  q10: z.string().min(1, "Please answer this question"),
  q11: z.string().min(1, "Please answer this question"),
  q12: z.string().min(1, "Please answer this question"),
  q13: z.string().min(1, "Please answer this question"),
  q14: z.string().min(1, "Please answer this question"),
  q15: z.string().min(1, "Please answer this question"),
  q16: z.string().min(1, "Please answer this question"),
  q17: z.string().min(1, "Please answer this question"),
  q18: z.string().min(1, "Please answer this question"),
  q19: z.string().min(1, "Please answer this question"),
  q20: z.string().min(1, "Please answer this question"),
  q21: z.string().min(1, "Please answer this question"),
  q22: z.string().min(1, "Please answer this question"),
  q23: z.string().min(1, "Please answer this question"),
  q24: z.string().min(1, "Please answer this question"),
  q25: z.string().min(1, "Please answer this question"),
});

const questions = [
  "I enjoy trying completely new cuisines.",
  "I like exploring unfamiliar menus instead of reordering the usual.",
  "Photos of unique dishes make me more likely to pick that restaurant.",
  "I follow food trends and limited-time specials.",
  "I compare ratings and reviews carefully before choosing.",
  "I check multiple restaurants and narrow down with filters.",
  "I stick to my plan even if I see a tempting discount elsewhere.",
  "I read recent reviews to avoid unpleasant surprises.",
  '"Popular/500+ ordered" signals attract me.',
  "I prefer places that friends or influencers talk about.",
  'I like lively, "buzzing" restaurants over quiet ones.',
  'I\'m excited by discovery feeds like "For you".',
  "I'm happy to go with whatever my group prefers.",
  "Friendly-service mentions in reviews matter to me.",
  "I tolerate minor delays if everything else looks good.",
  "I'm flexible with cuisine if others want something else.",
  "I worry I'll regret my restaurant choice.",
  "Long or uncertain delivery ETAs make me anxious.",
  "A few negative reviews can put me off completely.",
  "I second-guess my choice until the order arrives.",
];

const scenarioQuestions = [
  {
    question: "Rating vs Popularity (quality vs social proof)",
    scenarios: [
      "Scenario A: High rating (4.7). Suggested for you.",
      "Scenario B: Moderate rating (4.1). Chosen by 500+ others today.",
    ],
    options: [
      "Click A — I trust high ratings/personal relevance.",
      "Click B — Many people choosing it is a strong signal.",
      "Click A — Quality cues matter more than crowd trends.",
      "Click B — Popularity reduces my risk.",
      "Neither — I’d keep browsing for more options.",
    ],
  },
  {
    question: "Discount vs No Discount (value vs perceived quality)",
    scenarios: [
      "Scenario A: Rating 4.6, no discount. Similar cuisine and delivery time.",
      "Scenario B: Rating 4.2, 30% OFF. Similar cuisine and delivery time.",
    ],
    options: [
      "Click A — Higher rating is worth paying more.",
      "Click B — The discount matters most to me.",
      "Click A — I avoid discounts if quality seems lower.",
      "Click B — Same convenience, better value wins.",
      "Neither — I’d compare more restaurants first.",
    ],
  },
  {
    question: "Speed vs Quality (convenience vs taste assurance)",
    scenarios: [
      "Scenario A: Rating 4.7, delivery in 50–55 minutes.",
      "Scenario B: Rating 4.3, delivery in 20–25 minutes.",
    ],
    options: [
      "Click A — I’m okay waiting for better quality.",
      "Click B — Faster delivery fits my schedule.",
      "Click A — High rating reduces regret even if slower.",
      "Click B — Speed outweighs a small rating gap.",
      "Neither — I’d look for a fast and high-rated option.",
    ],
  },
  {
    question: "Familiar vs New (routine vs exploration)",
    scenarios: ["Scenario A: Your usual cuisine, rating 4.4.", "Scenario B: New/unfamiliar cuisine, rating 4.6."],
    options: [
      "Click A — I stick to what I know I like.",
      "Click B — I enjoy trying something new.",
      "Click A — Familiarity beats a small rating gap.",
      "Click B — Higher rating plus novelty is appealing.",
      "Neither — I’d check more options before deciding.",
    ],
  },
  {
    question: "Sponsored Label (trust cues)",
    scenarios: [
      "Scenario A: Sponsored label shown. Similar rating and delivery time.",
      "Scenario B: No sponsored label. Similar rating and delivery time.",
    ],
    options: [
      "Click A — Sponsorship doesn’t affect my choice.",
      "Click B — I prefer organic results.",
      "Click A — I assume sponsored picks are vetted.",
      "Click B — I avoid ads on principle.",
      "Neither — I need more information (e.g., reviews/photos).",
    ],
  },
];

const likertOptions = ["A) Strongly disagree", "B) Disagree", "C) Neither", "D) Agree", "E) Strongly agree"];

const Survey = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
    q16: "",
    q17: "",
    q18: "",
    q19: "",
    q20: "",
    q21: "",
    q22: "",
    q23: "",
    q24: "",
    q25: "",
  });

  const handleAnswerChange = (value: string) => {
    const questionKey = `q${currentQuestion + 1}`;
    setFormData((prev) => ({ ...prev, [questionKey]: value }));
  };

  const handleNext = () => {
    const totalQuestions = questions.length + scenarioQuestions.length;
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const validatedData = surveySchema.parse(formData);

      const { error } = await supabase.from("survey_responses").insert([
        {
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
        },
      ]);

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

  const questionKey = `q${currentQuestion + 1}`;
  const currentAnswer = formData[questionKey as keyof typeof formData];
  const totalQuestions = questions.length + scenarioQuestions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const isScenarioQuestion = currentQuestion >= questions.length;
  const scenarioIndex = currentQuestion - questions.length;

  const currentQuestionText = isScenarioQuestion
    ? scenarioQuestions[scenarioIndex].question
    : questions[currentQuestion];

  const currentOptions = isScenarioQuestion ? scenarioQuestions[scenarioIndex].options : likertOptions;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            ← Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-2">Customer Survey</h1>
          <p className="text-muted-foreground">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6 bg-card p-8 rounded-lg border">
            <Label className="text-xl font-semibold block">{currentQuestionText}</Label>

            {isScenarioQuestion && (
              <div className="space-y-4 mb-6">
                {scenarioQuestions[scenarioIndex].scenarios.map((scenario, idx) => (
                  <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm">{scenario}</p>
                  </div>
                ))}
              </div>
            )}

            <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
              {currentOptions.map((option, optIndex) => (
                <div
                  key={optIndex}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <RadioGroupItem value={option} id={`option-${optIndex}`} />
                  <Label htmlFor={`option-${optIndex}`} className="font-normal cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              Previous
            </Button>
            {!isLastQuestion ? (
              <Button type="button" onClick={handleNext} disabled={!currentAnswer} className="flex-1">
                Next
              </Button>
            ) : (
              <Button type="button" onClick={handleSubmit} disabled={!currentAnswer || isSubmitting} className="flex-1">
                {isSubmitting ? "Submitting..." : "Submit Survey"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
