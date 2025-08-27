import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Flame, ShoppingCart, Dumbbell, ChefHat, ExternalLink } from "lucide-react";

export default function Index() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Amenidades
  const amenidades = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Mini Mercado",
      description: "Produtos e conveniências sem sair de casa.",
      image: "/images/mini_mercado.png"
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Academia",
      description: "Espaço completo para manter a forma.",
      image: "/images/academia.png"
    },
    {
      icon: <ChefHat className="h-8 w-8 text-primary" />,
      title: "Churrasqueira",
      description: "Terraço com área para churrascos e lazer ao ar livre.",
      image: "/images/churrasqueira.png"
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Espaço Lareira",
      description: "Ambiente acolhedor para relaxar e reunir amigos.",
      image: "/images/entrance.png"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Sobre Section */}
        <section id="sobre" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-secondary font-medium uppercase tracking-wider">
                  Vila Buarque
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Localização Privilegiada
                </h2>
                <p className="text-muted-foreground mb-6">
                  O Nurban Vila Buarque está localizado na Rua Dr. Cesário Mota Júnior, 542, 
                  no coração do bairro Vila Buarque, uma das regiões mais valorizadas de São Paulo.
                </p>
                <p className="text-muted-foreground mb-8">
                  Próximo à Santa Casa, Largo do Arouche, Praça da República, Universidade Mackenzie 
                  e aos metrôs Higienópolis-Mackenzie e República. Aqui, você está no centro de tudo 
                  o que acontece na cidade. <strong>Agende sua visita e conheça sua nova casa!</strong>
                </p>
                <Button 
                  onClick={() => scrollToSection('#plantas')}
                  className="btn-primary bg-secondary hover:bg-secondary/90"
                >
                  Conheça as Plantas <Building2 className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/entrance.png"
                    alt="Fachada do Nurban Vila Buarque" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/map.png"
                    alt="Mapa da localização do empreendimento" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plantas Section */}
        <section id="plantas" className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-secondary font-medium uppercase tracking-wider">
                Plantas dos Pavimentos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Conheça os Espaços
              </h2>
              <p className="text-muted-foreground">
                Explore a distribuição inteligente dos ambientes do Nurban Vila Buarque
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Pavimento Térreo */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">Pavimento Térreo</h3>
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/images/pavimento_terreo.png"
                      alt="Planta do Pavimento Térreo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Acesso e lockers
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Hall de entrada
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Terraço
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Espaço lareira
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Mini mercado
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Lavanderia
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Academia
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Bicicletário
                    </div>
                    <div className="flex items-center col-span-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Lojas comerciais
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1º Pavimento */}
              <div className="animate-fade-in [animation-delay:200ms]">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">1º Pavimento</h3>
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/images/pavimento_primeiro.png"
                      alt="Planta do 1º Pavimento" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground text-center">
                    Jirau das lojas comerciais 1 e 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Amenidades Section */}
        <section id="amenidades" className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-secondary font-medium uppercase tracking-wider">
                Comodidades
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Amenidades Exclusivas
              </h2>
              <p className="text-muted-foreground">
                Desfrute de espaços pensados para seu conforto e bem-estar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenidades.map((amenidade, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-square w-full rounded-lg overflow-hidden mb-4">
                    <img 
                      src={amenidade.image}
                      alt={amenidade.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {amenidade.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenidade.title}</h3>
                  <p className="text-muted-foreground">{amenidade.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contato Section */}
        <section id="contato" className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fale com um Consultor
              </h2>
              <p className="text-muted-foreground mb-8">
                Agende uma visita e garante seu apartamento no Nurban Vila Buarque
              </p>
              
              <div className="glass-card p-8 rounded-xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-secondary" />
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Rua Dr. Cesário Mota Júnior, 542<br />
                      Vila Buarque, São Paulo/SP
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ExternalLink className="h-5 w-5 mr-2 text-secondary" />
                      Site Oficial
                    </h3>
                    <a 
                      href="https://nurbanvilabuarque.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      nurbanvilabuarque.com.br
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Vendas:</strong> Vita Vendas</p>
                <p><strong>Construção:</strong> RMR Engenharia</p>
                <p><strong>Realização e Incorporação:</strong> Vita Urbana</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button asChild size="lg" className="min-w-[250px] rounded-full bg-nurban-pink hover:bg-nurban-pink-light text-white font-semibold">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Agende sua visita pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px] rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <a href="https://nurbanvilabuarque.com.br" target="_blank" rel="noopener noreferrer">
                    Site Oficial
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}