import { Card } from "@/components/ui/card";
import { Building2, MapPin, CreditCard } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контактная информация
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-6">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Компания</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">ТОО "SNQ Trade"</p>
              <p><span className="font-medium">БИН:</span> 230240001408</p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Адреса</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <p className="font-medium text-foreground mb-1">Юридический адрес:</p>
                <p>Казахстан, г. Алматы, Ауэзовский район, Мкр1, 6 дом, 1 кв</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Офис:</p>
                <p>РК, г. Алматы, Ауэзовский район, ул. Кабдолова 2, 12 офис</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-6">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Банковские реквизиты</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p><span className="font-medium text-foreground">ИИК:</span> KZ42601A861012479261</p>
              <p><span className="font-medium text-foreground">БИК:</span> HSBKKZKX</p>
              <p className="text-xs pt-2">АО «Народный Банк Казахстан»</p>
            </div>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-10 bg-gradient-hero border-0 shadow-elegant text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Готовы начать работу?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами для получения консультации и расчета стоимости доставки вашего груза
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+77000000000" 
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-glow transition-all hover:scale-105"
            >
              Позвонить
            </a>
            <a 
              href="mailto:info@24ucargo.kz" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white hover:text-primary text-white font-semibold rounded-lg border-2 border-white backdrop-blur-sm transition-all hover:scale-105"
            >
              Написать
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompanyInfo;
