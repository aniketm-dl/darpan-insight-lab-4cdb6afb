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
    <section id="prototype" className="py-0 bg-background scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Interface */}
        <div className="bg-card rounded-2xl card-shadow border border-border overflow-hidden scroll-reveal-scale stagger-1" style={{ backgroundColor: 'hsl(0 0% 8%)' }}>
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center px-6 py-4 bg-black/20 border-b border-border/30">
            <div className="flex gap-8">
              <button 
                onClick={() => setActiveTab("journeys")}
                className={`text-sm pb-3 border-b-2 transition-all duration-200 ${
                  activeTab === "journeys" 
                    ? "text-neon-green border-neon-green font-medium" 
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
                }`}
              >
                Journeys (24)
              </button>
              <button 
                onClick={() => setActiveTab("screens")}
                className={`text-sm pb-3 border-b-2 transition-all duration-200 ${
                  activeTab === "screens" 
                    ? "text-neon-green border-neon-green font-medium" 
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
                }`}
              >
                Screens (58)
              </button>
              <button 
                onClick={() => setActiveTab("evidence")}
                className={`text-sm pb-3 border-b-2 transition-all duration-200 ${
                  activeTab === "evidence" 
                    ? "text-neon-green border-neon-green font-medium" 
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
                }`}
              >
                Evidence (156)
              </button>
              <button 
                onClick={() => setActiveTab("twins")}
                className={`text-sm pb-3 border-b-2 transition-all duration-200 ${
                  activeTab === "twins" 
                    ? "text-neon-green border-neon-green font-medium" 
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
                }`}
              >
                All Twins
              </button>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid lg:grid-cols-12 gap-8 p-6" style={{ backgroundColor: 'hsl(0 0% 8%)' }}>
            {/* Left Column - Main Analysis */}
            <div className="lg:col-span-8 space-y-6">
              {/* Title and Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Pain-Point Forecast: Checkout Flow
                </h2>
                <p className="text-neon-green text-sm font-medium">
                  Audience: Prosumer (US) • Device: Mobile • Data sources: Figma prototype, session replays
                </p>
              </div>

              {/* Flow Visualization */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-white mb-4">Flow</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="px-4 py-2.5 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">Cart</div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="px-4 py-2.5 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">Address</div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="px-4 py-2.5 bg-neon-green text-black rounded-lg text-sm font-semibold shadow-lg">Payment</div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="px-4 py-2.5 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">Review</div>
                </div>
              </div>

              {/* Risk Alert */}
              <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4 flex items-start gap-3 mb-8">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-300 font-medium">
                    Highest risk: Payment step — Predicted drop-off 35% (±6%); Severity High
                  </p>
                </div>
              </div>

              {/* Pain Drivers & Evidence */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Pain drivers & evidence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neon-green text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <p className="text-sm text-gray-300 leading-relaxed">Payment form appears complex with too many required fields</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neon-green text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <p className="text-sm text-gray-300 leading-relaxed">Error messages lack clarity and recovery guidance</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neon-green text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <p className="text-sm text-gray-300 leading-relaxed">Additional costs not transparent until final step</p>
                  </div>
                </div>

                {/* User Quote */}
                <div className="mt-8 pl-4 border-l-4 border-neon-green/40 bg-gray-900/50 p-4 rounded-r-lg">
                  <p className="text-white italic mb-2 text-base">"Too many fields to fill out, I gave up halfway."</p>
                  <p className="text-xs text-gray-400">— New users mobile</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-8">
                <Button className="bg-neon-green hover:bg-neon-green/90 text-black font-semibold px-6 py-2.5 shadow-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Jira Tasks
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-2.5"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share to Figma
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white hover:bg-gray-800 px-6 py-2.5"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy summary
                </Button>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-6 text-lg">Summary</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Baseline completion</span>
                    <span className="text-lg font-bold text-white">58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Predicted after fixes</span>
                    <span className="text-lg font-bold text-neon-green">66–70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Severity</span>
                    <span className="text-sm font-semibold text-red-400 bg-red-900/30 px-2 py-1 rounded">High</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="font-medium text-white mb-4">At-risk segments</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">New users mobile</span>
                      <span className="text-xs font-semibold text-red-300 bg-red-900/40 px-2 py-1 rounded">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">SMB EU</span>
                      <span className="text-xs font-semibold text-yellow-300 bg-yellow-900/40 px-2 py-1 rounded">Medium</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Enterprise US</span>
                      <span className="text-xs font-semibold text-blue-300 bg-blue-900/40 px-2 py-1 rounded">Low</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="font-medium text-white mb-4">Screens most at risk</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Payment step 3</span>
                      <span className="text-sm font-semibold text-red-400">Friction 0.82</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Address step 2</span>
                      <span className="text-sm font-semibold text-yellow-400">0.57</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="font-medium text-white mb-4">Design principles affected</h5>
                  <p className="text-sm text-gray-400 leading-relaxed">Cost transparency, Error recovery, Form complexity</p>
                </div>

                <div>
                  <h5 className="font-medium text-white mb-4">Recommended actions</h5>
                  <div className="space-y-3">
                    <button
                      onClick={() => scrollToSection("book-demo")}
                      className="block text-sm text-neon-green hover:text-neon-green/80 transition-colors duration-200 hover:underline font-medium"
                    >
                      Schedule live A/B
                    </button>
                    <button
                      className="block text-sm text-neon-green hover:text-neon-green/80 transition-colors duration-200 hover:underline font-medium"
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