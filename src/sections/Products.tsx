import { useState } from 'react';
import { Package, Check, ArrowRight, Ruler, Weight, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  diameter: string;
  class: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  standards: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Арматура А500С',
    diameter: '8-40 мм',
    class: 'A500C',
    price: 45000,
    image: '/rebar-1.jpg',
    description: 'Периодический профиль, класс прочности A500C. Используется для армирования железобетонных конструкций.',
    features: ['Высокая прочность', 'Хорошая свариваемость', 'Устойчивость к коррозии'],
    standards: ['ГОСТ 34028-2016', 'ГОСТ 5781-82'],
  },
  {
    id: 2,
    name: 'Арматура А400С',
    diameter: '6-40 мм',
    class: 'A400C',
    price: 42000,
    image: '/rebar-2.jpg',
    description: 'Гладкий или рифленый профиль, класс прочности A400C. Применяется в монолитном строительстве.',
    features: ['Оптимальное соотношение цена/качество', 'Широкий диапазон диаметров', 'Соответствие ГОСТ'],
    standards: ['ГОСТ 34028-2016', 'ГОСТ 10884-94'],
  },
  {
    id: 3,
    name: 'Арматура А600С',
    diameter: '10-40 мм',
    class: 'A600C',
    price: 52000,
    image: '/rebar-1.jpg',
    description: 'Повышенной прочности, класс A600C. Используется в ответственных конструкциях.',
    features: ['Повышенная прочность', 'Минимальный вес', 'Премиальное качество'],
    standards: ['ГОСТ 34028-2016', 'ГОСТ 10884-94'],
  },
  {
    id: 4,
    name: 'Арматура А800С',
    diameter: '12-32 мм',
    class: 'A800C',
    price: 68000,
    image: '/rebar-2.jpg',
    description: 'Высокопрочная арматура класса A800C для особо ответственных конструкций.',
    features: ['Максимальная прочность', 'Повышенная усталостная стойкость', 'Для крупных проектов'],
    standards: ['ГОСТ 34028-2016', 'ГОСТ 10884-94'],
  },
  {
    id: 5,
    name: 'Арматура А1000С',
    diameter: '16-32 мм',
    class: 'A1000C',
    price: 85000,
    image: '/rebar-1.jpg',
    description: 'Арматура высочайшей прочности класса A1000C для экстремальных нагрузок.',
    features: ['Экстремальная прочность', 'Для тяжелых конструкций', 'Премиум-класс'],
    standards: ['ГОСТ 34028-2016', 'ГОСТ 10884-94'],
  },
  {
    id: 6,
    name: 'Композитная арматура',
    diameter: '4-20 мм',
    class: 'АКП/АКБ',
    price: 35000,
    image: '/rebar-2.jpg',
    description: 'Композитная арматура на основе стеклопластика и базальтопластика.',
    features: ['Не ржавеет', 'Легкий вес', 'Теплоизоляция'],
    standards: ['ГОСТ 31938-2012', 'ГОСТ 31937-2012'],
  },
];

const Products = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.class.includes(filter));

  return (
    <section id="products" className="py-20 lg:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Package className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Наша продукция</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Каталог арматуры
            </h2>
            <p className="text-lg text-steel-400 max-w-2xl mx-auto">
              Широкий ассортимент сертифицированной арматуры всех классов прочности 
              от ведущих российских производителей
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['all', 'A500C', 'A400C', 'A600C', 'A800C', 'A1000C'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === item
                    ? 'bg-orange-500 text-white'
                    : 'bg-steel-800 text-steel-300 hover:bg-steel-700 hover:text-white'
                }`}
              >
                {item === 'all' ? 'Все марки' : `Класс ${item}`}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group bg-steel-900/50 border-steel-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold">
                      {product.class}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-steel-400">
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      <span>{product.diameter}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Weight className="w-4 h-4" />
                      <span>от {product.price.toLocaleString()} ₽/т</span>
                    </div>
                  </div>
                  
                  <p className="text-steel-400 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold group/btn"
                      >
                        Подробнее
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-steel-900 border-steel-800 text-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          {product.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-steel-400 mb-1">Диаметр</p>
                            <p className="font-semibold">{product.diameter}</p>
                          </div>
                          <div>
                            <p className="text-sm text-steel-400 mb-1">Класс прочности</p>
                            <p className="font-semibold">{product.class}</p>
                          </div>
                          <div>
                            <p className="text-sm text-steel-400 mb-1">Цена</p>
                            <p className="text-2xl font-bold text-orange-500">
                              от {product.price.toLocaleString()} ₽/тонна
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-steel-400 mb-2">Особенности</p>
                            <ul className="space-y-1">
                              {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-steel-400 mb-2">Стандарты</p>
                            <div className="flex flex-wrap gap-2">
                              {product.standards.map((std, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-steel-800 rounded text-xs"
                                >
                                  {std}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Button
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                          onClick={() => {
                            const contacts = document.querySelector('#contacts');
                            if (contacts) contacts.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <Factory className="w-4 h-4 mr-2" />
                          Заказать партию
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-steel-400 mb-4">
              Не нашли нужный диаметр или класс?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={() => {
                const contacts = document.querySelector('#contacts');
                if (contacts) contacts.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Запросить индивидуальный расчет
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
