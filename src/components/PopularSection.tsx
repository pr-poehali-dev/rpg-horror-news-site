import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const PopularSection = () => {
  const popularNews = [
    {
      id: "1",
      title: "Новый вид эксплуатации: звероподобные как рабочая сила",
      commentCount: 234,
      category: "Расследование",
    },
    {
      id: "2",
      title: "Восстание в Восточных шахтах: звери отказываются работать",
      commentCount: 156,
      category: "Происшествия",
    },
    {
      id: "3",
      title: "Новые законы о правах зверолюдей: что изменится?",
      commentCount: 89,
      category: "Политика",
    },
  ];

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="TrendingUp" className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-horror font-semibold">Популярное</h2>
      </div>

      <div className="space-y-4">
        {popularNews.map((news, index) => (
          <Link key={news.id} to={`/article/${news.id}`}>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors group">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="font-body font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {news.category}
                  </Badge>

                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="MessageSquare" size={12} />
                    <span>{news.commentCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
