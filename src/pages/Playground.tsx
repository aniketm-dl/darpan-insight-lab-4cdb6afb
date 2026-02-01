import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

const PLAYGROUND_URL = "https://frontend-production-128f.up.railway.app";

const Playground = () => {
  useEffect(() => {
    // Log analytics event
    analytics.track("playground_open");
    
    // Redirect to external playground
    window.location.href = PLAYGROUND_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to Playground...</p>
    </div>
  );
};

export default Playground;
