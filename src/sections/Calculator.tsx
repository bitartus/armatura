import { useState } from 'react';
import { Calculator as CalculatorIcon, ArrowRight, Ruler, Weight, Coins, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface CalculationResult {
  weight: number;
  totalCost: number;
  deliveryCost: number;
  finalCost: number;
}

const rebarData = [
  { diameter: 6, weightPerMeter: 0.222, pricePerTon: 52000 },
  { diameter: 8, weightPerMeter: 0.395, pricePerTon: 48000 },
  { diameter: 10, weightPerMeter: 0.617, pricePerTon: 45000 },
  { diameter: 12, weightPerMeter: 0.888, pricePerTon: 45000 },
  { diameter: 14, weightPerMeter: 1.21, pricePerTon: 44000 },
  { diameter: 16, weightPerMeter: 1.58, pricePerTon: 44000 },
  { diameter: 18, weightPerMeter: 2.0, pricePerTon: 43000 },
  { diameter: 20, weightPerMeter: 2.47, pricePerTon: 43000 },
  { diameter: 22, weightPerMeter: 2.98, pricePerTon: 43000 },
  { diameter: 25, weightPerMeter: 3.85, pricePerTon: 42000 },
  { diameter: 28, weightPerMeter: 4.83, pricePerTon: 42000 },
  { diameter: 32, weightPerMeter: 6.31, pricePerTon: 41000 },
  { diameter: 36, weightPerMeter: 7.99, pricePerTon: 41000 },
  { diameter: 40, weightPerMeter: 9.87, pricePerTon: 40000 },
];

const deliveryRegions = [
  { name: 'Москва и МО', cost: 5000 },
  { name: 'Санкт-Петербург и ЛО', cost: 7000 },
  { name: 'Центральный ФО', cost: 8000 },
  { name: 'Северо-Западный ФО', cost: 10000 },
  { name: 'Южный ФО', cost: 12000 },
  { name: 'Приволжский ФО', cost: 9000 },
  { name: 'Уральский ФО', cost: 15000 },
  { name: 'Сибирский ФО', cost: 18000 },
  { name: 'Дальневосточный ФО', cost: 25000 },
];

const Calculator = () => {
  const [diameter, setDiameter] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    const diameterNum = parseFloat(diameter);
    const lengthNum = parseFloat(length);
    const quantityNum = parseInt(quantity);

    if (!diameterNum || !lengthNum || !quantityNum) return;

    const rebar = rebarData.find(r => r.diameter === diameterNum);
    if (!rebar) return;

    const totalLength = lengthNum * quantityNum;
    const weight = (totalLength * rebar.weightPerMeter) / 1000; // в тоннах
    const totalCost = weight * rebar.pricePerTon;
    
    const deliveryRegion = deliveryRegions.find(r => r.name === region);
    const deliveryCost = deliveryRegion?.cost || 0;
    
    const finalCost = totalCost + deliveryCost;

    setResult({
      weight: Math.round(weight * 100) / 100,
      totalCost: Math.round(totalCost),
      deliveryCost,
      finalCost: Math.round(finalCost),
    });
  };

  const resetCalculator = () => {
    setDiameter('');
    setLength('');
    setQuantity('');
    setRegion('');
    setResult(null);
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-steel-900/30 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <CalculatorIcon className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Онлайн калькулятор</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Рассчитайте стоимость арматуры
            </h2>
            <p className="text-lg text-steel-400 max-w-2xl mx-auto">
              Быстрый расчет веса и стоимости арматуры с учетом доставки в ваш регион
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="bg-steel-900/50 border-steel-800">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Diameter */}
                    <div className="space-y-2">
                      <Label htmlFor="diameter" className="text-steel-300 flex items-center gap-2">
                        <Ruler className="w-4 h-4" />
                        Диаметр арматуры (мм)
                      </Label>
                      <Select value={diameter} onValueChange={setDiameter}>
                        <SelectTrigger className="bg-steel-800 border-steel-700 text-white">
                          <SelectValue placeholder="Выберите диаметр" />
                        </SelectTrigger>
                        <SelectContent className="bg-steel-800 border-steel-700">
                          {rebarData.map((r) => (
                            <SelectItem key={r.diameter} value={r.diameter.toString()}>
                              {r.diameter} мм
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Length */}
                    <div className="space-y-2">
                      <Label htmlFor="length" className="text-steel-300 flex items-center gap-2">
                        <span className="w-4 h-4 text-orange-500 font-bold">L</span>
                        Длина прутка (м)
                      </Label>
                      <Input
                        id="length"
                        type="number"
                        placeholder="6, 9, 11.7"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-steel-300 flex items-center gap-2">
                        <span className="w-4 h-4 text-orange-500 font-bold">#</span>
                        Количество прутков
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="100"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500"
                      />
                    </div>

                    {/* Region */}
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-steel-300 flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        Регион доставки
                      </Label>
                      <Select value={region} onValueChange={setRegion}>
                        <SelectTrigger className="bg-steel-800 border-steel-700 text-white">
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent className="bg-steel-800 border-steel-700 max-h-[200px]">
                          {deliveryRegions.map((r) => (
                            <SelectItem key={r.name} value={r.name}>
                              {r.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button
                      size="lg"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                      onClick={calculate}
                      disabled={!diameter || !length || !quantity}
                    >
                      <CalculatorIcon className="w-5 h-5 mr-2" />
                      Рассчитать
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-steel-600 text-white hover:bg-white/5"
                      onClick={resetCalculator}
                    >
                      Очистить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <Card className="bg-steel-900/30 border-steel-800">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Weight className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-steel-400">Вес 1 метра</p>
                      <p className="text-sm font-semibold text-white">
                        {diameter ? `${rebarData.find(r => r.diameter === parseFloat(diameter))?.weightPerMeter || 0} кг` : '—'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-steel-900/30 border-steel-800">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Coins className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-steel-400">Цена за тонну</p>
                      <p className="text-sm font-semibold text-white">
                        {diameter ? `${rebarData.find(r => r.diameter === parseFloat(diameter))?.pricePerTon.toLocaleString() || 0} ₽` : '—'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-steel-900/30 border-steel-800">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Truck className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-steel-400">Доставка</p>
                      <p className="text-sm font-semibold text-white">
                        {region ? `${deliveryRegions.find(r => r.name === region)?.cost.toLocaleString() || 0} ₽` : '—'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Results */}
            <div>
              <Card className="bg-steel-900/50 border-steel-800 sticky top-24">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-orange-500" />
                    Результат расчета
                  </h3>

                  {result ? (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                        <p className="text-sm text-steel-400 mb-1">Общий вес</p>
                        <p className="text-3xl font-bold text-orange-500">{result.weight} т</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-steel-400">Стоимость арматуры:</span>
                          <span className="font-semibold text-white">{result.totalCost.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-steel-400">Доставка:</span>
                          <span className="font-semibold text-white">{result.deliveryCost.toLocaleString()} ₽</span>
                        </div>
                        <div className="pt-3 border-t border-steel-700">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-white">Итого:</span>
                            <span className="text-2xl font-bold text-orange-500">{result.finalCost.toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                        onClick={() => {
                          const contacts = document.querySelector('#contacts');
                          if (contacts) contacts.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Оформить заказ
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-steel-500 text-center">
                        Цены указаны с учетом НДС. Точную стоимость уточняйте у менеджера.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-steel-800 flex items-center justify-center mx-auto mb-4">
                        <CalculatorIcon className="w-8 h-8 text-steel-500" />
                      </div>
                      <p className="text-steel-400">
                        Заполните форму для расчета стоимости
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
