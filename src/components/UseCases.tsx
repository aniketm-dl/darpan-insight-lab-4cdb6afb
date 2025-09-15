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
    <section id="use-cases" className="py-24 bg-background">
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
                className="group bg-card rounded-2xl p-6 card-shadow hover:shadow-elegant hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 card-shadow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Market Research Revolution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The market research industry is at a crossroad. We, at Darpan Labs, believe customer 
              digital twins will form the heart of market research. Traditional methods are slow and 
              costly, but with AI-powered synthetic twins, we can deliver instant, affordable insights 
              that scale with your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;