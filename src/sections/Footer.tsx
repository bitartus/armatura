import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    products: [
      { name: 'Арматура А500С', href: '#products' },
      { name: 'Арматура А400С', href: '#products' },
      { name: 'Арматура А600С', href: '#products' },
      { name: 'Арматура А800С', href: '#products' },
      { name: 'Арматура А1000С', href: '#products' },
      { name: 'Композитная арматура', href: '#products' },
    ],
    company: [
      { name: 'О компании', href: '#advantages' },
      { name: 'Преимущества', href: '#advantages' },
      { name: 'Калькулятор', href: '#calculator' },
      { name: 'Контакты', href: '#contacts' },
    ],
    services: [
      { name: 'Доставка', href: '#advantages' },
      { name: 'Расчет стоимости', href: '#calculator' },
      { name: 'Оптовые поставки', href: '#products' },
      { name: 'Сертификаты качества', href: '#advantages' },
    ],
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-steel-800">
      {/* Background */}
      <div className="absolute inset-0 bg-steel-900/50" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">АрмСтрой</h3>
                  <p className="text-xs text-steel-400">Арматура оптом</p>
                </div>
              </div>
              <p className="text-steel-400 text-sm leading-relaxed mb-6">
                Поставляем сертифицированную арматуру напрямую с завода. 
                Более 15 лет на рынке металлопроката.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+78001234567"
                  className="flex items-center gap-3 text-steel-300 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">8 (800) 123-45-67</span>
                </a>
                <a
                  href="mailto:info@armstroi.ru"
                  className="flex items-center gap-3 text-steel-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@armstroi.ru</span>
                </a>
                <div className="flex items-start gap-3 text-steel-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">г. Москва, ул. Строителей, 15</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-steel-400 mb-4">
                Получайте актуальные цены и специальные предложения
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 rounded-lg bg-steel-800 border border-steel-700 text-white text-sm placeholder:text-steel-500 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-steel-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-steel-500">
              © 2025 АрмСтрой. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-steel-500 hover:text-steel-300 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-steel-500 hover:text-steel-300 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
