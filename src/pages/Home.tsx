import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          The Customer Intelligence
          <br />
          <span className="text-primary">Marketplace</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          Where consumers build AI twins and brands run instant market research.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/brand")}
            size="xl"
            className="min-w-[180px] font-medium"
          >
            I'm a Brand
          </Button>
          <Button
            onClick={() => navigate("/twins")}
            variant="outline"
            size="xl"
            className="min-w-[180px] font-medium"
          >
            Build My Twin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
