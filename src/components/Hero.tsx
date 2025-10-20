import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cargo logistics" 
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 glass-effect rounded-full text-white animate-fade-in text-xs sm:text-sm">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span className="font-medium">Надежные международные грузоперевозки</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up px-2">
            Международные
            <br />
            <span className="bg-gradient-to-r from-secondary via-white to-accent bg-clip-text text-transparent">
              грузоперевозки
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Быстрая и надежная доставка грузов из Вьетнама и Австралии в Казахстан. 
            Профессиональный сервис мирового уровня.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_100px_hsl(var(--accent)/0.5)]"
              onClick={() => scrollToSection('pricing')}
            >
              Узнать стоимость
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto glass-effect text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 border-2 border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
