import { 
  Truck, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Wallet,
  CheckCircle2,
  Wrench
} from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Оперативная доставка по всей России собственным транспортом. Отгрузка в день заказа при наличии на складе.',
      stats: '48 часов',
      statsLabel: 'среднее время доставки',
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Вся продукция сертифицирована и соответствует ГОСТ. Предоставляем паспорта качества на каждую партию.',
      stats: '100%',
      statsLabel: 'сертифицировано',
    },
    {
      icon: Wallet,
      title: 'Оптимальные цены',
      description: 'Работаем напрямую с заводами-изготовителями. Предлагаем гибкую систему скидок для постоянных клиентов.',
      stats: 'до 15%',
      statsLabel: 'экономия для опта',
    },
    {
      icon: Clock,
      title: 'Круглосуточный прием заказов',
      description: 'Принимаем заявки 24/7 через сайт и по телефону. Менеджеры всегда на связи для консультаций.',
      stats: '24/7',
      statsLabel: 'работаем для вас',
    },
    {
      icon: Users,
      title: 'Индивидуальный подход',
      description: 'Персональный менеджер для каждого клиента. Помогаем с расчетами и подбором необходимой арматуры.',
      stats: '500+',
      statsLabel: 'постоянных клиентов',
    },
    {
      icon: Award,
      title: 'Опыт и надежность',
      description: 'Более 15 лет на рынке металлопроката. Зарекомендовали себя как надежный поставщик арматуры.',
      stats: '15+ лет',
      statsLabel: 'на рынке',
    },
  ];

  const whyUs = [
    'Прямые поставки с заводов',
    'Собственный автопарк',
    'Складской запас 5000+ тонн',
    'Работа с НДС и без НДС',
    'Гибкие условия оплаты',
    'Техническая поддержка',
  ];

  return (
    <section id="advantages" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/5 blur-3xl" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Почему выбирают нас</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Преимущества работы с нами
            </h2>
            <p className="text-lg text-steel-400 max-w-2xl mx-auto">
              Мы предлагаем не just арматуру, а комплексное решение для вашего строительного проекта
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative p-6 lg:p-8 rounded-2xl bg-steel-900/50 border border-steel-800 hover:border-orange-500/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-orange-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-steel-400 mb-4 text-sm leading-relaxed">
                  {advantage.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-steel-800">
                  <p className="text-2xl font-bold text-orange-500">{advantage.stats}</p>
                  <p className="text-xs text-steel-500">{advantage.statsLabel}</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Why Us Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="/construction-worker.jpg"
                alt="Строительная арматура в работе"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 glass rounded-xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">5000+</p>
                    <p className="text-sm text-steel-400">тонн на складе</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Что делает нас лучшими
              </h3>
              <p className="text-steel-400 mb-8 leading-relaxed">
                Мы понимаем, что на стройке каждый день простоя стоит денег. 
                Поэтому мы организовали логистику так, чтобы вы получали арматуру 
                вовремя и в нужном количестве.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-steel-800/50 border border-steel-700/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-steel-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20">
                <p className="text-orange-400 font-semibold mb-2">
                  Готовы к сотрудничеству?
                </p>
                <p className="text-steel-400 text-sm">
                  Оставьте заявку и получите персональное предложение в течение 15 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
