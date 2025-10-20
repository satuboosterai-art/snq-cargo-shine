import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-secondary rounded-lg">
                <Plane className="h-6 w-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold">24ucargo</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Международные грузоперевозки из Вьетнама и Австралии в Казахстан
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Авиаперевозки</li>
              <li>Железнодорожные перевозки</li>
              <li>Таможенное оформление</li>
              <li>Складское хранение</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>г. Алматы, ул. Кабдолова 2, 12 офис</li>
              <li>info@24ucargo.kz</li>
              <li>+7 (700) 000-00-00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} ТОО "SNQ Trade". Все права защищены. | БИН: 230240001408
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
