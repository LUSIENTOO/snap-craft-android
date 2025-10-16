import { MobileLayout } from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResearchPapers = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout title="Research Papers" showBack={true} showMenu={true}>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-foreground leading-tight">
            CHOOSE THE KIND OF<br />RESEARCH...
          </h2>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <Button
            variant="menu"
            onClick={() => navigate("/quantitative")}
          >
            QUANTITATIVE RESEARCHES
          </Button>
          
          <Button
            variant="menu"
            onClick={() => navigate("/qualitative")}
          >
            QUALITATIVE RESEARCHES
          </Button>

          <Button
            variant="menu"
            onClick={() => navigate("/mixed-method")}
          >
            MIXED METHOD RESEARCHES
          </Button>

          <Button
            variant="menu"
            onClick={() => navigate("/experimental")}
          >
            EXPERIMENTAL RESEARCHES
          </Button>

          <Button
            variant="menu"
            onClick={() => navigate("/sheshata")}
          >
            SHESHATA Research Compendium
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ResearchPapers;
