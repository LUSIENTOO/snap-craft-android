import { Button } from "@/components/ui/button";

interface ResearchItem {
  title: string;
  pdfUrl?: string;
}

interface ResearchListProps {
  items: ResearchItem[];
  searchTerm: string;
}

export const ResearchList = ({ items, searchTerm }: ResearchListProps) => {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (pdfUrl?: string) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <div className="space-y-3">
      {filteredItems.map((item, index) => (
        <Button
          key={index}
          variant="menu"
          className="w-full text-sm h-auto py-4 whitespace-normal"
          onClick={() => handleClick(item.pdfUrl)}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
