import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <Link to="/insights" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </Button>

        <header className="mb-12">
          <p className="text-primary text-sm font-mono mb-4 tracking-wider">
            [ RESEARCH ]
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Most User Research Fails (And What We Learned From It)
          </h1>
          <p className="text-muted-foreground text-lg">
            Published on November 15, 2025
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Most research fails not because teams don't try, but because people behave 
            differently when they know they're being watched. Here's what we discovered 
            after years of building products and running countless user studies.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            The Observer Effect Problem
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The moment someone knows they're being studied, their behavior changes. It's 
            not intentional—it's human nature. In focus groups, users tell you what they 
            think you want to hear. In surveys, they report their best intentions rather 
            than actual behaviors. And in usability tests, they're hyper-aware of being 
            watched, leading to unnatural interactions.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            Intentions vs. Actions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ask someone if they'd pay for a feature, and they'll say yes. Launch it, and 
            the conversion rate tells a different story. The gap between what people say 
            they'll do and what they actually do is massive—and it's costing companies 
            millions in misguided product decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Traditional research methods capture intentions beautifully. But intentions 
            don't pay the bills. Actions do. And when your product roadmap is built on 
            intentions, you're essentially guessing.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            The Real World Doesn't Wait
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            By the time you've recruited participants, run your studies, analyzed results, 
            and implemented changes, the market has moved. Your competitor has shipped. 
            User expectations have evolved. The insights you spent months gathering are 
            already outdated.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            What We Built Instead
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is why we built Darpan. We needed a way to understand user behavior 
            without the observer effect. To predict actions, not just capture intentions. 
            To move at the speed of modern product development.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI customer twins trained on real behavioral data don't have social anxiety. 
            They don't give the "right" answer. They respond based on patterns from 
            thousands of real interactions—revealing what users actually do, not what 
            they say they'll do.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            The Path Forward
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Traditional research isn't dead—it's just not enough anymore. The future is 
            combining the best of human insight with the scale and speed of AI simulation. 
            It's about building products based on evidence, not guesswork.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Because when you understand what users actually do—not just what they say—
            everything changes.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-full"
          >
            <Link to="/demo">
              See How Darpan Works
            </Link>
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
