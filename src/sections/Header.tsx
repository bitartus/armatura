import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Главная', href: '#hero' },
    { name: 'Продукция', href: '#products' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-steel-900/95 backdrop-blur-lg shadow-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-white">
                АрмСтрой
              </h1>
              <p className="text-xs text-steel-400">Арматура оптом</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-steel-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a
                href="tel:+78001234567"
                className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">8 (800) 123-45-67</span>
              </a>
              <p className="text-xs text-steel-400 mt-0.5">Звоните с 8:00 до 20:00</p>
            </div>
            <Button
              onClick={() => scrollToSection('#contacts')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6"
            >
              Заказать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-steel-900/98 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-steel-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 mt-4 space-y-3">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-3 px-4 py-2 text-white"
            >
              <Phone className="w-5 h-5 text-orange-500" />
              <span>8 (800) 123-45-67</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contacts')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Заказать арматуру
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
