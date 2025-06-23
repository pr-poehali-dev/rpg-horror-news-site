import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Лента", icon: "Newspaper" },
    { path: "/popular", label: "Популярное", icon: "TrendingUp" },
    { path: "/search", label: "Поиск", icon: "Search" },
    { path: "/investigations", label: "Расследования", icon: "Eye" },
    { path: "/forum", label: "Форум", icon: "MessageSquare" },
  ];

  return (
    <nav className="horror-bg border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Skull" className="h-8 w-8 text-accent" />
            <span className="text-2xl font-horror font-bold text-primary">
              Бестиарий
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={
                    location.pathname === item.path ? "default" : "ghost"
                  }
                  className="flex items-center space-x-2 font-body"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={
                      location.pathname === item.path ? "default" : "ghost"
                    }
                    className="w-full justify-start space-x-2 font-body"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name={item.icon as any} size={16} />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
