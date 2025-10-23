import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import snqLogo from "@/assets/snq-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { name: "Услуги", id: "services" },
    { name: "Тарифы", id: "pricing" },
    { name: "Контакты", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-elegant' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 group"
          >
            <div className="relative">
              <img 
                src={snqLogo} 
                alt="SNQ Trade Logo" 
                className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                24ucargo
              </span>
              <p className="text-xs text-muted-foreground -mt-1">ТОО "SNQ Trade"</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary font-semibold transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a 
              href="https://wa.link/s3c10p"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-accent hover:opacity-90 text-white shadow-glow hover:shadow-[0_0_40px_hsl(var(--secondary)/0.5)] transition-all duration-300 hover:scale-105"
              >
                Связаться
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-foreground hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-elegant">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-4 text-foreground hover:bg-secondary/10 hover:text-secondary transition-all duration-300 font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 pt-4">
              <a 
                href="https://wa.link/s3c10p"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-gradient-accent hover:opacity-90 text-white shadow-glow"
                >
                  Связаться
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
