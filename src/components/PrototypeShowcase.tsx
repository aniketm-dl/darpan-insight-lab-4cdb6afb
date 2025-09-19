import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, AlertTriangle, Share2, Copy, Plus } from "lucide-react";

const PrototypeShowcase = () => {
  const [activeTab, setActiveTab] = useState("journeys");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (sectionId === "book-demo") {
        setTimeout(() => {
          const firstInput = element.querySelector('input, textarea');
          if (firstInput) {
            (firstInput as HTMLElement).focus();
          }
        }, 300);
      }
    }
  };

  return (
    <section id="prototype" className="py-8 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Interface */}
        <div className="bg-card rounded-2xl card-shadow border border-border overflow-hidden animate-fade-in">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center px-6 py-4 bg-card border-b border-border">
            <div className="flex gap-8">
              <button 
                onClick={() => setActiveTab("journeys")}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  activeTab === "journeys" 
                    ? "text-primary border-primary font-medium" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Journeys (24)
              </button>
              <button 
                onClick={() => setActiveTab("screens")}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  activeTab === "screens" 
                    ? "text-primary border-primary font-medium" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Screens (58)
              </button>
              <button 
                onClick={() => setActiveTab("evidence")}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  activeTab === "evidence" 
                    ? "text-primary border-primary font-medium" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Evidence (156)
              </button>
              <button 
                onClick={() => setActiveTab("twins")}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  activeTab === "twins" 
                    ? "text-primary border-primary font-medium" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                All Twins
              </button>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid lg:grid-cols-12 gap-8 p-6">
            {/* Left Column - Main Analysis */}
            <div className="lg:col-span-8 space-y-6">
              {/* Title and Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Pain-Point Forecast: Checkout Flow
                </h2>
                <p className="text-primary text-sm">
                  Audience: Prosumer (US) • Device: Mobile • Data sources: Figma prototype, session replays
                </p>
              </div>

              {/* Flow Visualization */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-4">Flow</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground">Cart</div>
                  <div className="w-4 h-0.5 bg-border"></div>
                  <div className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground">Address</div>
                  <div className="w-4 h-0.5 bg-border"></div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Payment</div>
                  <div className="w-4 h-0.5 bg-border"></div>
                  <div className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground">Review</div>
                </div>
              </div>

              {/* Risk Alert */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-destructive font-medium">
                    Highest risk: Payment step — Predicted drop-off 35% (±6%); Severity High
                  </p>
                </div>
              </div>

              {/* Pain Drivers & Evidence */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Pain drivers & evidence</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">1</div>
                    <p className="text-sm text-foreground">Payment form appears complex with too many required fields</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">2</div>
                    <p className="text-sm text-foreground">Error messages lack clarity and recovery guidance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">3</div>
                    <p className="text-sm text-foreground">Additional costs not transparent until final step</p>
                  </div>
                </div>

                {/* User Quote */}
                <div className="mt-6 pl-4 border-l-4 border-primary/30">
                  <p className="text-foreground italic mb-1">"Too many fields to fill out, I gave up halfway."</p>
                  <p className="text-xs text-muted-foreground">— New users mobile</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Jira Tasks
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share to Figma
                </Button>
                <Button variant="ghost">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy summary
                </Button>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-4">Summary</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Baseline completion</span>
                    <span className="text-sm font-medium text-foreground">58%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Predicted after fixes</span>
                    <span className="text-sm font-medium text-neon-green">66–70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Severity</span>
                    <span className="text-sm font-medium text-destructive">High</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-foreground mb-3">At-risk segments</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">New users mobile</span>
                      <Badge variant="destructive" className="text-xs">High</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">SMB EU</span>
                      <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600 dark:text-yellow-400">Medium</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Enterprise US</span>
                      <Badge variant="secondary" className="text-xs">Low</Badge>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-foreground mb-3">Screens most at risk</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Payment step 3</span>
                      <span className="text-sm font-medium text-destructive">Friction 0.82</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Address step 2</span>
                      <span className="text-sm font-medium text-yellow-500">0.57</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-foreground mb-3">Design principles affected</h5>
                  <p className="text-sm text-muted-foreground">Cost transparency, Error recovery, Form complexity</p>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-3">Recommended actions</h5>
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection("book-demo")}
                      className="block text-sm text-primary hover:text-primary-hover transition-colors duration-200 hover:underline"
                    >
                      Schedule live A/B
                    </button>
                    <button
                      className="block text-sm text-primary hover:text-primary-hover transition-colors duration-200 hover:underline"
                    >
                      Open evidence trace
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeShowcase;