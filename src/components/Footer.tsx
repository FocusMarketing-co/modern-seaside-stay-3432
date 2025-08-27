import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">Nurban Vila Buarque</h4>
            <p className="text-muted-foreground mb-4">
              #AondeTudoAcontece
            </p>
            <p className="text-muted-foreground">
              Condomínio de apartamentos compactos no coração da Vila Buarque.
            </p>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Rua Dr. Cesário Mota Júnior, 542<br />
                  Vila Buarque, São Paulo/SP
                </span>
              </li>
              <li className="flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                <a 
                  href="https://nurbanvilabuarque.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  nurbanvilabuarque.com.br
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">Créditos</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Vendas:</strong> Vita Vendas</p>
              <p><strong>Construção:</strong> RMR Engenharia</p>
              <p><strong>Realização:</strong> Vita Urbana</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Nurban Vila Buarque. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}