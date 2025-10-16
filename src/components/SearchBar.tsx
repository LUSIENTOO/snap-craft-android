import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const SearchBar = ({ value, onChange, onClear }: SearchBarProps) => {
  return (
    <div className="flex gap-2 mb-4">
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-background border-2 border-primary text-foreground placeholder:text-muted-foreground"
      />
      <Button variant="action" onClick={() => {/* Search logic */}}>
        Search
      </Button>
      <Button variant="action" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};
