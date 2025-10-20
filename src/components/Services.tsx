import { Card } from "@/components/ui/card";
import { Plane, Train, Clock, Shield, Target, Zap } from "lucide-react";
import aviationImage from "@/assets/aviation-service.jpg";
import railwayImage from "@/assets/railway-service.jpg";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Что мы предлагаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Предоставляем полный спектр услуг по международным грузоперевозкам с индивидуальным подходом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">{/* Aviation Card */}
          {/* Aviation Card */}
          <Card className="overflow-hidden group border-2 border-transparent hover:border-secondary/30 transition-all duration-500 hover-lift shadow-card bg-gradient-card">
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
              <img 
                src={aviationImage} 
                alt="Авиаперевозки" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-accent rounded-xl sm:rounded-2xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Plane className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">Авиаперевозки</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Быстро и надежно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Быстрая доставка грузов из Вьетнама и Австралии авиатранспортом. 
                Оптимальные сроки и конкурентные цены для вашего бизнеса.
              </p>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Срок доставки</p>
                  <p className="text-sm sm:text-base text-secondary font-bold">до 10 дней</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Railway Card */}
          <Card className="overflow-hidden group border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover-lift shadow-card bg-gradient-card">
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
              <img 
                src={railwayImage} 
                alt="Железнодорожные перевозки" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-warm rounded-xl sm:rounded-2xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Train className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">Ж/Д перевозки</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Экономично и масштабно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Экономичная доставка крупногабаритных грузов железнодорожным транспортом 
                из Вьетнама в Казахстан. Идеально для больших объемов.
              </p>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-accent/10 rounded-xl border border-accent/20">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Срок доставки</p>
                  <p className="text-sm sm:text-base text-accent font-bold">25-30 дней</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: Shield,
              title: "Надежность",
              description: "Гарантируем сохранность груза на всех этапах доставки с полным страхованием",
              color: "secondary"
            },
            {
              icon: Target,
              title: "Пунктуальность",
              description: "Строго соблюдаем оговоренные сроки доставки. Ваш груз всегда вовремя",
              color: "accent"
            },
            {
              icon: Zap,
              title: "Профессионализм",
              description: "Опытная команда логистов обеспечивает первоклассный сервис 24/7",
              color: "secondary"
            }
          ].map((feature, index) => (
            <Card 
              key={index} 
              className="group p-5 sm:p-6 md:p-8 text-center border-2 border-transparent hover:border-secondary/20 transition-all duration-500 hover-lift shadow-card bg-gradient-card relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-flex p-3 sm:p-4 md:p-5 bg-gradient-accent rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{feature.title}</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
