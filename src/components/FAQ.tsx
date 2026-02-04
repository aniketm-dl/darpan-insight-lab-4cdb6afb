import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      answer: "Yes. The Playground is connected to our production backend. You can run actual experiments and see real outputs.",
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
      question: "How is this different from traditional focus groups?",
      answer: "10x faster, 10x cheaper. No recruitment delays, no panel bias. Get directional insights in hours to de-risk decisions before investing in full-scale research.",
    },
    {
      question: "How do you handle data privacy?",
      answer: "We follow data minimization principles, collecting only what's needed for experiments. You retain control over your data, including the ability to delete it. We do not share your data with third parties.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Header */}
          <div className="lg:col-span-4 scroll-reveal-left">
            <p className="eyebrow">Support</p>
            <h2 className="section-heading mb-3">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Everything you need to know about customer twins and running experiments.
            </p>
          </div>

          {/* Right column - Accordion */}
          <div className="lg:col-span-8 scroll-reveal-right stagger-1">
            <div className="divide-y divide-border/50">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between gap-4 py-4 text-left transition-colors hover:text-primary"
                  >
                    <span className="text-foreground font-medium text-[15px] leading-snug pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-1",
                        openIndex === index && "rotate-180 text-primary"
                      )} 
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200 ease-out",
                      openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground text-sm leading-relaxed pb-4 pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
