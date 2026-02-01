import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a customer twin?",
      answer: "A customer twin is an AI representation of your customer segments, built from your data. It can respond to questions and simulate how real customers might react to product changes, messaging, or UX variations.",
    },
    {
      question: "What data do I need to start?",
      answer: "You can start with structured data like CSV or Parquet files containing customer attributes, behaviors, or survey responses. The more context you provide, the more accurate the twins become.",
    },
    {
      question: "Is the Playground a real product environment?",
      answer: "Yes. The Playground is connected to our production backend. You can run actual experiments and see real outputs — it's not a demo or mockup.",
    },
    {
      question: "What do you mean by evidence trace?",
      answer: "Every output from Darpan Labs includes an evidence trace that shows the reasoning, data points, and assumptions used to reach a conclusion. This helps you understand and trust the recommendations.",
    },
    {
      question: "Can I use this for UX testing and messaging?",
      answer: "Yes. Common use cases include testing onboarding flows, validating messaging angles, comparing UX variations, and exploring pricing sensitivity — all before building or launching.",
    },
    {
      question: "How do you handle data privacy?",
      answer: "We follow data minimization principles, collecting only what's needed for experiments. You retain control over your data, including the ability to delete it. We do not share your data with third parties.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-12">
          <p className="eyebrow">Questions</p>
          <h2 className="section-heading">
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="premium-card px-5 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-foreground text-sm font-medium py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
