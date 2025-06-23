import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Article = () => {
  const { id } = useParams();

  const mockArticle = {
    title: "Массовые протесты зверолюдей в столице: требуют равных прав",
    content: `
      <p>Тысячи звероподобных существ вышли на улицы столицы, протестуя против систематической эксплуатации в промышленности. Это крупнейшее выступление за последние десятилетия.</p>
      
      <p>Протестующие требуют:</p>
      <ul>
        <li>Равной оплаты за равный труд</li>
        <li>Безопасных условий работы</li>
        <li>Права на медицинское обслуживание</li>
        <li>Признания за полноценных граждан</li>
      </ul>
      
      <p>Власти пока не дали официальных комментариев по поводу происходящего.</p>
    `,
    author: "Анна Дворецкая",
    publishedAt: "2 часа назад",
    category: "Происшествия",
    commentCount: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
  };

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{mockArticle.category}</Badge>
                  <time className="text-sm text-muted-foreground font-body">
                    {mockArticle.publishedAt}
                  </time>
                </div>

                <h1 className="text-3xl lg:text-4xl font-horror font-bold leading-tight">
                  {mockArticle.title}
                </h1>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-body">👤 {mockArticle.author}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={16} />
                    <span className="font-body">
                      {mockArticle.commentCount} комментариев
                    </span>
                  </div>
                </div>
              </div>

              {mockArticle.imageUrl && (
                <div className="w-full h-64 lg:h-96 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={mockArticle.imageUrl}
                    alt={mockArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className="prose prose-invert max-w-none font-body"
                dangerouslySetInnerHTML={{ __html: mockArticle.content }}
              />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;
