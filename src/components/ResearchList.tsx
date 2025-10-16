import { Button } from "@/components/ui/button";

interface ResearchListProps {
  items: string[];
  searchTerm: string;
}

export const ResearchList = ({ items, searchTerm }: ResearchListProps) => {
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filteredItems.map((item, index) => (
        <Button
          key={index}
          variant="menu"
          className="w-full text-sm h-auto py-4 whitespace-normal"
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
