import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const InsightsPage = () => {
  const posts = [
    {
      title: "Why Most User Research Fails (And What We Learned From It)",
      preview: "Most research fails not because teams don't try, but because people behave differently when they know they're being watched. Here's what we discovered after years of building products.",
      link: "/insights/why-research-fails",
      date: "November 15, 2025",
      category: "Research",
      isPublished: true,
    },
    {
      title: "Coming Soon",
      preview: "More deep dives into product thinking, AI innovation, and research stories from our team.",
      link: "#",
      date: "Coming Soon",
      category: "Product",
      isPublished: false,
    },
    {
      title: "Coming Soon",
      preview: "Stay tuned for insights on building better products with evidence-based decisions.",
      link: "#",
      date: "Coming Soon",
      category: "AI",
      isPublished: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <header className="text-center mb-16">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ INSIGHTS ]
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Latest Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives, product thinking, and research stories from the Darpan Labs team.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className={`group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                !post.isPublished ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={(e) => !post.isPublished && e.preventDefault()}
            >
              <div className="mb-4">
                <span className="text-primary text-xs font-mono tracking-wider">
                  [ {post.category.toUpperCase()} ]
                </span>
                <p className="text-muted-foreground text-xs mt-2">{post.date}</p>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {post.preview}
              </p>
              
              {post.isPublished && (
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Want to stay updated with our latest insights?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-full px-8"
          >
            <Link to="/demo">
              Book a Demo
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InsightsPage;
