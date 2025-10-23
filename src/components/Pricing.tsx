import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Train, Package, Clock, TrendingDown, Zap, Sparkles, ArrowRight, MessageCircle } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Прозрачные цены
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Тарифы на <span className="text-gradient">доставку</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Конкурентные цены без скрытых платежей. Гибкая система скидок на постоянной основе.
          </p>
        </div>

        {/* Aviation Pricing */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <div className="p-3 sm:p-4 bg-gradient-accent rounded-xl sm:rounded-2xl shadow-glow animate-pulse-glow">
              <Plane className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Авиаперевозки</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Быстрая доставка карго</p>
            </div>
          </div>
          
          {/* Desktop Table */}
          <Card className="hidden md:block border-2 border-secondary/20 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift bg-gradient-card">
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
                      <div className="font-bold text-2xl text-primary">от $11</div>
                      <div className="text-xs text-muted-foreground">за кг</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary">от $10</div>
                      <div className="text-xs text-muted-foreground">за кг</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-secondary/10 rounded-lg py-2">от $9</div>
                      <div className="text-xs text-secondary font-semibold mt-1 flex items-center justify-center gap-1">
                        <TrendingDown className="h-3 w-3" />
                        Выгодно
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-accent/10 rounded-lg py-2">от $8.50</div>
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

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <Card className="border-2 border-secondary/20 overflow-hidden shadow-card bg-gradient-card p-4">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-secondary/20">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Plane className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">ВЬЕТНАМ → АЛМАТЫ</h4>
                  <p className="text-xs text-muted-foreground">Астана</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">20-50 кг</p>
                  <p className="text-xl font-bold text-primary">от $11</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">50-150 кг</p>
                  <p className="text-xl font-bold text-primary">от $10</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-xs text-muted-foreground mb-1">150-300 кг</p>
                  <p className="text-xl font-bold text-primary">от $9</p>
                  <p className="text-xs text-secondary font-semibold flex items-center gap-1 mt-1">
                    <TrendingDown className="h-3 w-3" />
                    Выгодно
                  </p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-xs text-muted-foreground mb-1">300+ кг</p>
                  <p className="text-xl font-bold text-primary">от $8.50</p>
                  <p className="text-xs text-accent font-semibold flex items-center gap-1 mt-1">
                    <Zap className="h-3 w-3" />
                    Лучшая
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm font-bold text-secondary">Срок: до 10 дней</span>
              </div>
            </Card>

            <Card className="border-2 border-secondary/20 overflow-hidden shadow-card bg-gradient-card p-4">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-secondary/20">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Plane className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">АВСТРАЛИЯ → АЛМАТЫ</h4>
                  <p className="text-xs text-muted-foreground">Астана</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-accent rounded-lg text-center mb-4">
                <Zap className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Цены по запросу</p>
              </div>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm font-bold text-secondary">Срок: до 10 дней</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Railway Pricing */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <div className="p-3 sm:p-4 bg-gradient-warm rounded-xl sm:rounded-2xl shadow-glow animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Train className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Железнодорожные перевозки</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Экономичная доставка контейнерами</p>
            </div>
          </div>
          
          {/* Desktop Table */}
          <Card className="hidden md:block border-2 border-accent/20 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift bg-gradient-card">
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
                      <div className="font-bold text-2xl text-primary">от $5,250</div>
                      <div className="text-xs text-muted-foreground">за контейнер</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="font-bold text-2xl text-primary bg-accent/10 rounded-lg py-2">от $7,400</div>
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

          {/* Mobile Card */}
          <Card className="md:hidden border-2 border-accent/20 overflow-hidden shadow-card bg-gradient-card p-4">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-accent/20">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Train className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg">ВЬЕТНАМ → АЛМАТЫ</h4>
                <p className="text-xs text-muted-foreground">Астана</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">20 футов</p>
                <p className="text-xl font-bold text-primary">от $5,250</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-xs text-muted-foreground mb-1">40 футов</p>
                <p className="text-xl font-bold text-primary">от $7,400</p>
                <p className="text-xs text-accent font-semibold flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3" />
                  Оптимальный
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold text-accent">Срок: 25-30 дней</span>
            </div>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500">
          <div className="relative p-8 sm:p-10 md:p-12 bg-gradient-hero overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm mb-4 sm:mb-6">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Индивидуальный подход</span>
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
                Нужна консультация специалиста?
              </h4>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Свяжитесь с нами для расчета стоимости и получения персонального коммерческого предложения
              </p>
              <a 
                href="https://wa.link/s3c10p"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Узнать больше
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
