import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";

const Popular = () => {
  const popularNews = [
    {
      id: "1",
      title: "Новый вид эксплуатации: звероподобные как рабочая сила",
      excerpt:
        "Подробное расследование условий труда зверолюдей в промышленности. Шокирующие факты о современном рабстве.",
      author: "Игорь Следопыт",
      publishedAt: "1 день назад",
      category: "Расследование",
      commentCount: 234,
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      isHot: true,
    },
    {
      id: "2",
      title: "Восстание в Восточных шахтах: звери отказываются работать",
      excerpt:
        "Крупнейший протест за последние годы. Тысячи зверорабочих требуют человеческих условий труда.",
      author: "Мария Правдина",
      publishedAt: "2 дня назад",
      category: "Происшествия",
      commentCount: 156,
      imageUrl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    },
  ];

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-horror font-bold text-primary mb-2">
              Популярные новости
            </h1>
            <p className="text-muted-foreground font-body">
              Самые обсуждаемые материалы недели
            </p>
          </div>

          <div className="space-y-6">
            {popularNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Popular;
