import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import NewsCard from "@/components/NewsCard";
import { useState } from "react";

const Search = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Имитация поиска
    setTimeout(() => {
      const mockResults = [
        {
          id: "1",
          title: `Результат поиска: ${query}`,
          excerpt: "Описание найденной новости по вашему запросу...",
          author: "Поисковик",
          publishedAt: "1 час назад",
          category: "Поиск",
          commentCount: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
        },
      ];
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-horror font-bold text-primary mb-4">
              Поиск новостей
            </h1>
            <div className="max-w-md mx-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          {isLoading && (
            <div className="text-center py-8">
              <p className="font-body text-muted-foreground">Поиск...</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-horror font-semibold">
                Результаты поиска
              </h2>
              {searchResults.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
