import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Forum = () => {
  const forumPosts = [
    {
      id: "1",
      title: "Обсуждение: права зверолюдей в современном мире",
      author: "Защитник_Прав",
      replies: 45,
      lastActivity: "10 минут назад",
      category: "Общие вопросы",
    },
    {
      id: "2",
      title: "Личный опыт работы со звероподобными",
      author: "Рабочий123",
      replies: 23,
      lastActivity: "1 час назад",
      category: "Опыт",
    },
  ];

  return (
    <div className="min-h-screen horror-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-horror font-bold text-primary mb-2">
              Форум
            </h1>
            <p className="text-muted-foreground font-body">
              Обсуждения и мнения игроков
            </p>
          </div>

          <div className="space-y-4">
            {forumPosts.map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-lg p-6 border border-border hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-horror font-semibold">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-body">👤 {post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageSquare" size={14} />
                        <span className="font-body">
                          {post.replies} ответов
                        </span>
                      </div>
                      <span className="font-body">{post.lastActivity}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="font-body">
                    {post.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;
