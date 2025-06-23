import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  commentCount: number;
  imageUrl?: string;
  isHot?: boolean;
}

const NewsCard = ({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  category,
  commentCount,
  imageUrl,
  isHot,
}: NewsCardProps) => {
  return (
    <article className="news-card group cursor-pointer">
      <Link to={`/article/${id}`}>
        <div className="flex flex-col md:flex-row gap-4">
          {imageUrl && (
            <div className="md:w-48 md:h-32 w-full h-48 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="font-body text-xs">
                  {category}
                </Badge>
                {isHot && (
                  <Badge
                    variant="destructive"
                    className="font-body text-xs animate-horror-glow"
                  >
                    🔥 Горячее
                  </Badge>
                )}
              </div>
              <time className="text-xs text-muted-foreground font-body">
                {publishedAt}
              </time>
            </div>

            <h3 className="text-xl font-horror font-semibold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <span className="font-body">👤 {author}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageSquare" size={14} />
                  <span className="font-body">{commentCount}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-primary">
                <span className="font-body text-xs">Читать далее</span>
                <Icon name="ArrowRight" size={12} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
