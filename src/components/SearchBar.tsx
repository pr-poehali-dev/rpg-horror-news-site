import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Поиск новостей...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-12 font-body bg-input border-border focus:border-primary"
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
        >
          <Icon name="Search" size={16} />
        </Button>
      </div>

      {query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-10">
          <div className="p-4">
            <p className="text-sm text-muted-foreground font-body">
              Поиск по запросу:{" "}
              <span className="text-foreground font-medium">"{query}"</span>
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
