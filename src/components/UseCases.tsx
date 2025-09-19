import { 
  MessageSquare, 
  Smartphone, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  AlertTriangle 
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Campaign simulation",
      description: "Test marketing messages and creative before launch"
    },
    {
      icon: Smartphone,
      title: "Product & UX testing",
      description: "Validate features and user flows with synthetic users"
    },
    {
      icon: DollarSign,
      title: "Pricing sensitivity",
      description: "Optimize pricing strategies with market simulation"
    },
    {
      icon: TrendingUp,
      title: "Market-entry scenario testing",
      description: "Model market response to new product launches"
    },
    {
      icon: Shield,
      title: "Competitive reaction modeling",
      description: "Predict and prepare for competitor responses"
    },
    {
      icon: AlertTriangle,
      title: "Crisis & regulatory impact drills",
      description: "Simulate customer response to crisis scenarios"
    }
  ];

  return (
    <section id="use-cases" className="-mt-12 pt-16 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sky is the limit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Once twins and customers become equivalent, imagination of the researchers 
            becomes the only constraint in experimentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 card-shadow hover:neon-glow-blue hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:neon-glow-green transition-all">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-neon-green transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;