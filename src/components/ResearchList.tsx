import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ResearchItem {
  title: string;
  pdfUrl?: string;
}

interface ResearchListProps {
  items: ResearchItem[];
  searchTerm: string;
}

export const ResearchList = ({ items, searchTerm }: ResearchListProps) => {
  const navigate = useNavigate();
  
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (item: ResearchItem) => {
    if (item.pdfUrl) {
      navigate(`/pdf-viewer?url=${encodeURIComponent(item.pdfUrl)}&title=${encodeURIComponent(item.title)}`);
    }
  };

  return (
    <div className="space-y-3">
      {filteredItems.map((item, index) => (
        <Button
          key={index}
          variant="menu"
          className="w-full text-sm h-auto py-4 whitespace-normal"
          onClick={() => handleClick(item)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
