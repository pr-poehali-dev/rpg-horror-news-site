import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import PopularSection from "@/components/PopularSection";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockNews = [
    {
      id: "1",
      title: "Массовые протесты зверолюдей в столице: требуют равных прав",
      excerpt:
        "Тысячи звероподобных существ вышли на улицы, протестуя против эксплуатации в промышленности. Власти пока молчат.",
      author: "Анна Дворецкая",
      publishedAt: "2 часа назад",
      category: "Происшествия",
      commentCount: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      isHot: true,
    },
    {
      id: "2",
      title: "Новый закон о минимальной зарплате для зверорабочих",
      excerpt:
        "Парламент рассматривает законопроект о минимальных стандартах оплаты труда звероподобных в опасных отраслях.",
      author: "Михаил Кровский",
      publishedAt: "4 часа назад",
      category: "Политика",
      commentCount: 23,
      imageUrl:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
    },
    {
      id: "3",
      title: "Расследование: тайные лаборатории по созданию гибридов",
      excerpt:
        "Наша редакция получила доступ к секретным документам о незаконных экспериментах над звероподобными.",
      author: "Елена Теневая",
      publishedAt: "6 часов назад",
      category: "Расследование",
      commentCount: 89,
      imageUrl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
      isHot: true,
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // В реальном приложении здесь был бы API-запрос
    console.log("Поиск:", query);
  };

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-3 space-y-8">
            {/* Заголовок и поиск */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-horror font-bold text-primary mb-2">
                  Хроники Бестиария
                </h1>
                <p className="text-muted-foreground font-body text-lg">
                  Правда о мире, где звери служат людям
                </p>
              </div>

              <div className="max-w-md mx-auto lg:mx-0">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>

            {/* Новостная лента */}
            <div className="space-y-6">
              <h2 className="text-2xl font-horror font-semibold flex items-center space-x-2">
                <span>Последние новости</span>
                {searchQuery && (
                  <span className="text-sm text-muted-foreground font-body">
                    по запросу "{searchQuery}"
                  </span>
                )}
              </h2>

              <div className="space-y-6">
                {mockNews.map((news) => (
                  <NewsCard key={news.id} {...news} />
                ))}
              </div>
            </div>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1 space-y-6">
            <PopularSection />

            {/* Категории */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-horror font-semibold mb-4">
                Категории
              </h3>
              <div className="space-y-2">
                {[
                  "Происшествия",
                  "Политика",
                  "Расследования",
                  "Экономика",
                  "Общество",
                ].map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 text-sm font-body hover:bg-muted/30 rounded transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
