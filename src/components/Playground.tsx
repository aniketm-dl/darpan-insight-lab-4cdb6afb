import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Playground = () => {
  const playgroundUrl = "https://frontend-production-128f.up.railway.app";

  return (
    <section id="playground" className="py-24 bg-background scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try the Playground
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Darpan Labs firsthand. Interact with our live product environment — no signup required.
          </p>
        </div>

        {/* Playground Card */}
        <div className="bg-card rounded-2xl card-shadow border border-border overflow-hidden scroll-reveal-scale stagger-2">
          {/* Iframe Container */}
          <div className="relative w-full" style={{ height: '600px' }}>
            <iframe
              src={playgroundUrl}
              title="Darpan Labs Playground"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* Footer with CTA */}
          <div className="px-6 py-5 bg-muted/30 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Test a live version of Darpan Labs. This is a functional playground connected to our production backend.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(playgroundUrl, '_blank')}
              className="flex-shrink-0"
            >
              <Play className="w-4 h-4 mr-2" />
              Open Playground
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
