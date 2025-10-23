import snqLogo from "@/assets/snq-logo.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img 
                src={snqLogo} 
                alt="SNQ Trade Logo" 
                className="h-20 w-20 object-contain brightness-0 invert"
              />
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
              <li>+7 707 505 6985</li>
              <li>+7 707 376 4556</li>
            </ul>
            <a 
              href="https://www.instagram.com/24ucargo?igsh=MTJmY2Vvd2o4M3lueA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@24ucargo</span>
            </a>
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
