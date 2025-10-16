import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import owlMascot from "@/assets/owl-mascot.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-background">
      {/* Header */}
      <header className="bg-header text-primary-foreground px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Screen1</h1>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-primary-foreground rounded-full" />
          <div className="w-1 h-1 bg-primary-foreground rounded-full" />
          <div className="w-1 h-1 bg-primary-foreground rounded-full" />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 bg-content flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8">
          <img
            src={owlMascot}
            alt="FINDR Owl Mascot"
            className="w-48 h-48 mx-auto mb-4"
          />
          
          <div>
            <h2 className="text-5xl font-bold text-primary-foreground mb-2 tracking-wider">
              FINDR
            </h2>
            <p className="text-primary-foreground text-lg font-semibold">
              YOUR RESEARCH PUPPY
            </p>
          </div>

          <Button
            variant="menu"
            onClick={() => navigate("/choice")}
            className="mt-8"
          >
            FIND RESEARCH NOW!
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
