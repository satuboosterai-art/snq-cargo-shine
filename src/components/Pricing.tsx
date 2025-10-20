import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Train, Package, Clock } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Тарифы на доставку
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Конкурентные цены и прозрачные условия доставки
          </p>
        </div>

        {/* Aviation Pricing */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-accent rounded-lg">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Авиаперевозки (Карго)</h3>
          </div>
          
          <div className="overflow-x-auto">
            <Card className="border-2 border-secondary/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-accent">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Направления</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">20-50 кг</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">50-150 кг</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">150-300 кг</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">300+ кг</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Срок доставки</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-secondary" />
                          <span>ВЬЕТНАМ - АЛМАТЫ (АСТАНА)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$11,00</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$10,00</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$9,00</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$8,50</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          <Clock className="h-4 w-4" />
                          до 10 дней
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-secondary" />
                          <span>АВСТРАЛИЯ - АЛМАТЫ (АСТАНА)</span>
                        </div>
                      </td>
                      <td colSpan={4} className="px-6 py-4 text-center font-medium text-muted-foreground">
                        по запросу
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          <Clock className="h-4 w-4" />
                          до 10 дней
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Railway Pricing */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-warm rounded-lg">
              <Train className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Железнодорожные перевозки (Ж/Д)</h3>
          </div>
          
          <div className="overflow-x-auto">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-warm">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Направления</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">20 футов</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">40 футов</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Срок доставки</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-accent" />
                          <span>ВЬЕТНАМ - АЛМАТЫ (АСТАНА)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$5 250,00</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">$7 400,00</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
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
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-hero border-0 shadow-elegant">
            <h4 className="text-2xl font-bold text-white mb-3">
              Нужна индивидуальная консультация?
            </h4>
            <p className="text-white/90 mb-6">
              Свяжитесь с нами для расчета стоимости доставки вашего груза
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-8"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться с нами
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
