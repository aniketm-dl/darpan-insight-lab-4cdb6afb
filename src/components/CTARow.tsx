import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface CTARowProps {
  sectionName?: string;
  className?: string;
}

const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const CTARow = ({ sectionName, className = "" }: CTARowProps) => {
  const handleOpenPlayground = () => {
    analytics.playgroundOpenClick(sectionName);
    window.open(PLAYGROUND_URL, "_blank", "noopener,noreferrer");
  };

  const handleBookDemo = () => {
    analytics.ctaClick("Book a Demo", sectionName);
    const element = document.getElementById("book-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      <Button
        variant="hero"
        size="lg"
        onClick={handleOpenPlayground}
        className="min-w-[180px]"
      >
        Open Playground
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={handleBookDemo}
        className="min-w-[180px]"
      >
        Book a Demo
      </Button>
    </div>
  );
};

export default CTARow;
