import { MobileLayout } from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout title="ChoiceScreen" showBack={true} showMenu={true}>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground leading-tight">
            WHAT ARE YOU<br />LOOKING FOR TODAY?
          </h2>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <Button
            variant="menu"
            onClick={() => navigate("/sip-choice")}
          >
            SCIENCE INVESTIGATORY PROJECTS
          </Button>
          
          <Button
            variant="menu"
            onClick={() => navigate("/research-papers")}
          >
            RESEARCH PAPERS
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Choice;
