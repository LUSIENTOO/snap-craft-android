import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

interface MobileLayoutProps {
  title: string;
  children: ReactNode;
  showBack?: boolean;
  showMenu?: boolean;
}

export const MobileLayout = ({ title, children, showBack = true, showMenu = false }: MobileLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-background">
      {/* Header */}
      <header className="bg-header text-primary-foreground px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        {showMenu && (
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        )}
      </header>

      {/* Content */}
      <main className="flex-1 bg-content p-6 overflow-y-auto">
        {children}
      </main>

      {/* Back Button */}
      {showBack && (
        <div className="bg-content pb-6 px-6">
          <Button
            variant="action"
            onClick={() => navigate(-1)}
            className="w-full"
          >
            Back
          </Button>
        </div>
      )}
    </div>
  );
};
