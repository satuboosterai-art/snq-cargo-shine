import { Card } from "@/components/ui/card";
import { Building2, MapPin, CreditCard, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyInfo = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Свяжитесь с нами
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Контактная <span className="text-gradient">информация</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь с вашими грузоперевозками
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group p-10 border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover-lift shadow-card bg-gradient-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-5 bg-gradient-accent rounded-2xl mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Компания</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="font-bold text-xl text-foreground">ТОО "SNQ Trade"</p>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">БИН:</span>
                  <span>230240001408</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="group p-10 border-2 border-transparent hover:border-secondary/20 transition-all duration-500 hover-lift shadow-card bg-gradient-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-5 bg-gradient-accent rounded-2xl mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Адрес офиса</h3>
              <div className="space-y-4 text-muted-foreground text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Офис:
                  </p>
                  <p className="ml-4">РК, г. Алматы, Ауэзовский район, ул. Кабдолова 2, 12 офис</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="group p-10 border-2 border-transparent hover:border-accent/20 transition-all duration-500 hover-lift shadow-card bg-gradient-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-5 bg-gradient-warm rounded-2xl mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Реквизиты</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground text-xs mb-1">ИИК</p>
                  <p className="font-mono text-xs">KZ42601A861012479261</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground text-xs mb-1">БИК</p>
                  <p className="font-mono text-xs">HSBKKZKX</p>
                </div>
                <p className="text-xs pt-2 text-center">АО «Народный Банк Казахстан»</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="max-w-5xl mx-auto overflow-hidden border-0 shadow-elegant">
          <div className="relative p-12 md:p-16 bg-gradient-hero overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Готовы начать сотрудничество?
              </h3>
              <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Свяжитесь с нами удобным способом для получения консультации и расчета стоимости доставки вашего груза
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+77075056985"
                >
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-10 py-7 w-full sm:w-auto hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +7 707 505 6985
                  </Button>
                </a>
                
                <a 
                  href="tel:+77073764556"
                >
                  <Button 
                    size="lg"
                    className="glass-effect text-white hover:bg-white/20 text-lg px-10 py-7 border-2 border-white/30 hover:border-white/50 w-full sm:w-auto hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +7 707 376 4556
                  </Button>
                </a>
                
                <a 
                  href="https://wa.link/s3c10p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="glass-effect text-white hover:bg-white/20 text-lg px-10 py-7 border-2 border-white/30 hover:border-white/50 w-full sm:w-auto hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompanyInfo;
