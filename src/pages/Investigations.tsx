import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";

const Investigations = () => {
  const investigations = [
    {
      id: "1",
      title: "Тайные лаборатории по созданию гибридов",
      excerpt:
        "Эксклюзивное расследование о незаконных экспериментах над звероподобными. Документы, свидетельства, факты.",
      author: "Елена Теневая",
      publishedAt: "3 дня назад",
      category: "Расследование",
      commentCount: 89,
      imageUrl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
      isHot: true,
    },
  ];

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-horror font-bold text-primary mb-2">
              Расследования
            </h1>
            <p className="text-muted-foreground font-body">
              Глубокие материалы о скрытых фактах
            </p>
          </div>

          <div className="space-y-6">
            {investigations.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investigations;
