import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
}