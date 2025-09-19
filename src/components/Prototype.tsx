import chatInterface from "@/assets/chat-interface.jpg";
import dashboardPrototype from "@/assets/dashboard-prototype.jpg";

const Prototype = () => {
  return (
    <section id="demo-gallery" className="pt-24 pb-12 bg-muted/30 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how Darpan Labs transforms customer research with AI-powered digital twins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Twin Interaction */}
          <div className="space-y-6 scroll-reveal-left stagger-2">
            <div className="bg-card rounded-3xl p-4 card-shadow overflow-hidden">
              <img 
                src={chatInterface}
                alt="Twin interaction chat interface"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Twin Interaction
              </h3>
              <p className="text-muted-foreground">
                Chat with your audience twin to probe attitudes and 'why' behind behavior. 
                Get nuanced insights that traditional surveys can't capture.
              </p>
            </div>
          </div>

          {/* Experiment Dashboard */}
          <div className="space-y-6 scroll-reveal-right stagger-3">
            <div className="bg-card rounded-3xl p-4 card-shadow overflow-hidden">
              <img 
                src={dashboardPrototype}
                alt="Experiment dashboard interface"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Experiment Dashboard
              </h3>
              <p className="text-muted-foreground">
                Run aggregated experiments; compare scenarios before you commit. 
                Get actionable insights with statistical confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Results Sample */}
        <div className="mt-16 bg-card rounded-3xl p-8 card-shadow border-2 border-primary/10 hover:border-primary/30 hover:neon-glow-blue transition-all duration-300 scroll-reveal-scale stagger-4">
          <h4 className="text-xl font-bold text-gradient mb-4">Sample Results</h4>
          <div className="bg-gradient-primary/10 rounded-2xl p-6 border-l-4 border-primary">
            <p className="text-foreground font-medium mb-2">Profile Page Redesign Test</p>
            <p className="text-muted-foreground">
              With the redesigned profile page, the model predicts that <span className="font-semibold text-neon-green">54% of users</span> will use at least one advanced feature — an improvement from the current 33%, representing a <span className="font-semibold text-neon-blue">21% uplift</span> in adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;