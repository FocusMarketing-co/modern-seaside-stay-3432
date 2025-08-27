import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, Dumbbell, ChefHat, Flame } from "lucide-react";

export default function Amenities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const amenidades = [
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Mini Mercado",
      description: "Produtos e conveniências sem sair de casa."
    },
    {
      icon: <Dumbbell className="h-12 w-12" />,
      title: "Academia",
      description: "Espaço completo para manter a forma."
    },
    {
      icon: <ChefHat className="h-12 w-12" />,
      title: "Churrasqueira",
      description: "Terraço com área para churrascos e lazer ao ar livre."
    },
    {
      icon: <Flame className="h-12 w-12" />,
      title: "Espaço Lareira",
      description: "Ambiente acolhedor para relaxar e reunir amigos."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Amenidades Nurban Vila Buarque
              </h1>
              <p className="text-muted-foreground">
                Conheça os espaços exclusivos pensados para seu conforto e bem-estar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenidades.map((amenidade, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-xl text-center"
                >
                  <div className="mb-6 p-4 rounded-full bg-primary/10 text-primary inline-flex">
                    {amenidade.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{amenidade.title}</h3>
                  <p className="text-muted-foreground">{amenidade.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}