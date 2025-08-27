
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Plantas", href: "#plantas" },
    { name: "Amenidades", href: "#amenidades" },
    { name: "Contato", href: "#contato" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-5")}>
      <nav className="container flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-primary">Nurban Vila Buarque</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => <li key={link.name} className="relative">
              <button 
                onClick={() => scrollToSection(link.href)}
                className="font-medium transition-colors hover:text-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            </li>)}
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="rounded-full bg-nurban-pink hover:bg-nurban-pink-light text-white font-semibold px-6">
            <a href="https://nurbanvilabuarque.com.br" target="_blank" rel="noopener noreferrer">
              Site Oficial
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {navLinks.map(link => <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-lg font-medium transition-colors hover:text-secondary w-full text-left"
                    >
                      {link.name}
                    </button>
                  </li>)}
              </ul>
            </div>
            
            <Button asChild className="w-full rounded-full bg-nurban-pink hover:bg-nurban-pink-light text-white font-semibold mt-6">
              <a href="https://nurbanvilabuarque.com.br" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                Site Oficial
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>;
}
