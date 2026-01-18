import { useEffect, useRef } from 'react';
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      hero.style.setProperty('--mouse-x', `${x * 100}%`);
      hero.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Truck, text: 'Доставка по всей России' },
    { icon: Shield, text: 'Гарантия качества' },
    { icon: Clock, text: 'Оперативная отгрузка' },
    { icon: Award, text: 'Сертифицированная продукция' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(249, 115, 22, 0.15) 0%,
            transparent 50%
          ),
          linear-gradient(180deg, hsl(220 14% 8%) 0%, hsl(220 14% 12%) 100%)
        `,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm text-orange-400 font-medium">Оптовые поставки с 2010 года</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Арматура
                <span className="text-gradient block mt-2">оптом от производителя</span>
              </h1>

              <p className="text-lg sm:text-xl text-steel-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Поставляем сертифицированную арматуру А500С, А400С, А600С и другие марки 
                напрямую с завода. Доставка по всей России в сжатые сроки.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#products')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-6 group animate-pulse-glow"
                >
                  Каталог продукции
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#calculator')}
                  className="border-steel-600 text-white hover:bg-white/5 font-semibold text-base px-8 py-6"
                >
                  Рассчитать стоимость
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-steel-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-sm text-left">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Main Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-3xl" />
                <img
                  src="/hero-rebar.jpg"
                  alt="Арматура строительная"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 lg:-left-12 glass rounded-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">15+</p>
                      <p className="text-xs text-steel-400">лет на рынке</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -top-4 -right-4 lg:-right-8 glass rounded-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">100%</p>
                      <p className="text-xs text-steel-400">сертифицировано</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
