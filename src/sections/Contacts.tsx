import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '8 (800) 123-45-67',
      subContent: 'Бесплатно по РФ',
      href: 'tel:+78001234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@armstroi.ru',
      subContent: 'Ответим в течение часа',
      href: 'mailto:info@armstroi.ru',
    },
    {
      icon: MapPin,
      title: 'Офис',
      content: 'г. Москва, ул. Строителей, 15',
      subContent: 'офис 302',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 8:00 - 20:00',
      subContent: 'Сб-Вс: 9:00 - 18:00',
      href: '#',
    },
  ];

  const messengers = [
    { name: 'WhatsApp', color: 'text-green-500', href: '#' },
    { name: 'Telegram', color: 'text-blue-400', href: '#' },
  ];

  return (
    <section id="contacts" className="py-20 lg:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MessageSquare className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Свяжитесь с нами</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-lg text-steel-400 max-w-2xl mx-auto">
              Оставьте заявку и получите персональное предложение в течение 15 минут
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Контактная информация
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group p-6 rounded-xl bg-steel-900/50 border border-steel-800 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-sm text-steel-400 mb-1">{item.title}</p>
                    <p className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {item.content}
                    </p>
                    <p className="text-xs text-steel-500 mt-1">{item.subContent}</p>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-steel-900/50 border border-steel-800">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Напишите нам в мессенджер
                </h4>
                <div className="flex gap-4">
                  {messengers.map((messenger, index) => (
                    <a
                      key={index}
                      href={messenger.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-steel-800 hover:bg-steel-700 transition-colors group`}
                    >
                      <MessageSquare className={`w-6 h-6 ${messenger.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-white font-medium">{messenger.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-steel-800 h-64 relative">
                <div className="absolute inset-0 bg-steel-900 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                    <p className="text-white font-semibold">г. Москва, ул. Строителей, 15</p>
                    <p className="text-steel-400 text-sm">офис 302</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-steel-900/50 border-steel-800">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Оформить заявку
                  </h3>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <p className="text-xl font-semibold text-white mb-2">Спасибо за заявку!</p>
                      <p className="text-steel-400">
                        Наш менеджер свяжется с вами в течение 15 минут
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-steel-300">
                            Ваше имя
                          </Label>
                          <Input
                            id="name"
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-steel-300">
                            Телефон
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-steel-300">
                          Email (опционально)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@mail.ru"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-steel-300">
                          Сообщение
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Укажите диаметр, класс и объем арматуры, который вам нужен..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-steel-800 border-steel-700 text-white placeholder:text-steel-500 min-h-[120px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Отправить заявку
                      </Button>

                      <p className="text-xs text-steel-500 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Срочно нужна арматура?
                </h4>
                <p className="text-steel-400 text-sm mb-4">
                  Позвоните прямо сейчас и получите мгновенную консультацию
                </p>
                <a
                  href="tel:+78001234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  8 (800) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
