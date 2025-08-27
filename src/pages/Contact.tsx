import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contato
              </h1>
              <p className="text-muted-foreground">
                Entre em contato conosco para mais informações sobre o Nurban Vila Buarque
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl">
              <div className="space-y-6">
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}