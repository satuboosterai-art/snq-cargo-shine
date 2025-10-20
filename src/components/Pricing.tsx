import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Train, Package, Clock, TrendingDown, Zap, Sparkles, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            Прозрачные цены
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Тарифы на <span className="text-gradient">доставку</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Конкурентные цены без скрытых платежей. Гибкая система скидок на постоянной основе.
          </p>
        </div>

        {/* Aviation Pricing */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 bg-gradient-accent rounded-2xl shadow-glow animate-pulse-glow">
              <Plane className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground">Авиаперевозки</h3>
              <p className="text-muted-foreground">Быстрая доставка карго</p>
            </div>
          </div>
          
          <Card className="border-2 border-secondary/20 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift bg-gradient-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-accent">
                    <th className="px-8 py-5 text-left text-white font-bold text-lg">Направления</th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>20-50 кг</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>50-150 кг</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>150-300 кг</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>300+ кг</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Clock className="h-5 w-5 mb-1" />
                        <span>Срок</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b-2 border-border hover:bg-secondary/5 transition-all duration-300 group">
                    <td className="px-8 py-6 font-bold text-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Plane className="h-6 w-6 text-secondary" />
                        </div>
                        <span>ВЬЕТНАМ → АЛМАТЫ</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary">$11</div>
                      <div className="text-xs text-muted-foreground">за кг</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary">$10</div>
                      <div className="text-xs text-muted-foreground">за кг</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-secondary/10 rounded-lg py-2">$9</div>
                      <div className="text-xs text-secondary font-semibold mt-1 flex items-center justify-center gap-1">
                        <TrendingDown className="h-3 w-3" />
                        Выгодно
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-accent/10 rounded-lg py-2">$8.50</div>
                      <div className="text-xs text-accent font-semibold mt-1 flex items-center justify-center gap-1">
                        <Zap className="h-3 w-3" />
                        Лучшая цена
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold border-2 border-secondary/20">
                        <Clock className="h-4 w-4" />
                        10 дней
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary/5 transition-all duration-300 group">
                    <td className="px-8 py-6 font-bold text-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Plane className="h-6 w-6 text-secondary" />
                        </div>
                        <span>АВСТРАЛИЯ → АЛМАТЫ</span>
                      </div>
                    </td>
                    <td colSpan={4} className="px-6 py-6 text-center">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent rounded-full text-white font-semibold shadow-glow">
                        <Zap className="h-5 w-5" />
                        Цены по запросу
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold border-2 border-secondary/20">
                        <Clock className="h-4 w-4" />
                        10 дней
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Railway Pricing */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 bg-gradient-warm rounded-2xl shadow-glow animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Train className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground">Железнодорожные перевозки</h3>
              <p className="text-muted-foreground">Экономичная доставка контейнерами</p>
            </div>
          </div>
          
          <Card className="border-2 border-accent/20 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift bg-gradient-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-warm">
                    <th className="px-8 py-5 text-left text-white font-bold text-lg">Направления</th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>20 футов</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Package className="h-5 w-5 mb-1" />
                        <span>40 футов</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-white font-bold">
                      <div className="flex flex-col items-center">
                        <Clock className="h-5 w-5 mb-1" />
                        <span>Срок</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-accent/5 transition-all duration-300 group">
                    <td className="px-8 py-6 font-bold text-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Train className="h-6 w-6 text-accent" />
                        </div>
                        <span>ВЬЕТНАМ → АЛМАТЫ</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary">$5,250</div>
                      <div className="text-xs text-muted-foreground">за контейнер</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-accent/10 rounded-lg py-2">$7,400</div>
                      <div className="text-xs text-accent font-semibold mt-1 flex items-center justify-center gap-1">
                        <TrendingDown className="h-3 w-3" />
                        Оптимальный
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-bold border-2 border-accent/20">
                        <Clock className="h-4 w-4" />
                        25-30 дней
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500">
          <div className="relative p-12 bg-gradient-hero overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Индивидуальный подход</span>
              </div>
              <h4 className="text-4xl font-bold text-white mb-4">
                Нужна консультация специалиста?
              </h4>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для расчета стоимости и получения персонального коммерческого предложения
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-10 py-7 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
