import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insights = () => {
  const posts = [
    {
      title: "Why Most User Research Fails (And What We Learned From It)",
      preview: "Most research fails not because teams don't try, but because people behave differently when they know they're being watched. Here's what we discovered.",
      link: "/insights/why-research-fails",
      isPublished: true,
    },
    {
      title: "Coming Soon",
      preview: "Stay tuned for more deep dives into product thinking and research innovation.",
      link: "#",
      isPublished: false,
    },
    {
      title: "Coming Soon",
      preview: "More insights and stories from the Darpan Labs team are on the way.",
      link: "#",
      isPublished: false,
    },
  ];

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm md:text-base font-mono mb-4 tracking-wider">
            [ INSIGHTS ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives, product thinking, and research stories from the Darpan Labs team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className={`group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 block ${
                !post.isPublished ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={(e) => !post.isPublished && e.preventDefault()}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-full px-8"
          >
            <Link to="/insights">
              Explore More Insights
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
