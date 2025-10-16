import { MobileLayout } from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SIPChoice = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout title="Choose Your SIP" showBack={true} showMenu={true}>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-foreground leading-tight">
            CHOOSE THE KIND OF<br />SIP YOU ARE<br />LOOKING FOR...
          </h2>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <Button
            variant="menu"
            onClick={() => navigate("/environmental-sips")}
          >
            Environmental SIPs
          </Button>
          
          <Button
            variant="menu"
            onClick={() => navigate("/technological-sips")}
          >
            Technological SIPs
          </Button>

          <Button
            variant="menu"
            onClick={() => navigate("/sip-compendium")}
          >
            SIP Compendium 2015-2023
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default SIPChoice;
