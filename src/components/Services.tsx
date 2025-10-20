import { Card } from "@/components/ui/card";
import { Plane, Train, Clock, Shield } from "lucide-react";
import aviationImage from "@/assets/aviation-service.jpg";
import railwayImage from "@/assets/railway-service.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по международным грузоперевозкам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 border-2 hover:border-secondary">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={aviationImage} 
                alt="Авиаперевозки" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Plane className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Авиаперевозки</h3>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-muted-foreground">
                Быстрая доставка грузов из Вьетнама и Австралии авиатранспортом. 
                Оптимальные сроки и конкурентные цены.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary font-semibold">
                <Clock className="h-4 w-4" />
                <span>Срок доставки: до 10 дней</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 border-2 hover:border-secondary">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={railwayImage} 
                alt="Железнодорожные перевозки" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Train className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ж/Д перевозки</h3>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-muted-foreground">
                Экономичная доставка крупногабаритных грузов железнодорожным транспортом 
                из Вьетнама в Казахстан.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary font-semibold">
                <Clock className="h-4 w-4" />
                <span>Срок доставки: 25-30 дней</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Надежность",
              description: "Гарантируем сохранность груза на всех этапах доставки"
            },
            {
              icon: Clock,
              title: "Пунктуальность",
              description: "Соблюдаем оговоренные сроки доставки"
            },
            {
              icon: Plane,
              title: "Профессионализм",
              description: "Опытная команда логистов к вашим услугам"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50">
              <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
