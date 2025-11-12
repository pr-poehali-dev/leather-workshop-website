import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  {
    id: 1,
    title: 'Классический кошелёк',
    image: 'https://cdn.poehali.dev/projects/ba4ea8a6-5930-4c8d-a0e1-245fd36b2c79/files/af935e45-1378-4cb0-8877-68342ea795aa.jpg',
    description: 'Кошелёк ручной работы из натуральной кожи'
  },
  {
    id: 2,
    title: 'Дорожная сумка',
    image: 'https://cdn.poehali.dev/projects/ba4ea8a6-5930-4c8d-a0e1-245fd36b2c79/files/197d7ba4-59b2-4783-a06c-73c964ace85a.jpg',
    description: 'Вместительная сумка с латунной фурнитурой'
  },
  {
    id: 3,
    title: 'Мастерская',
    image: 'https://cdn.poehali.dev/projects/ba4ea8a6-5930-4c8d-a0e1-245fd36b2c79/files/63025821-07d7-4289-90f8-360b0af2696e.jpg',
    description: 'Инструменты и материалы нашей мастерской'
  }
];

const catalogItems = [
  { name: 'Кошельки', price: 'от 3 500 ₽', icon: 'Wallet' },
  { name: 'Сумки', price: 'от 8 000 ₽', icon: 'ShoppingBag' },
  { name: 'Ремни', price: 'от 2 500 ₽', icon: 'Minus' },
  { name: 'Аксессуары', price: 'от 1 500 ₽', icon: 'Briefcase' }
];

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary tracking-tight">
            Кожаный Скрип
          </h1>
          <div className="flex gap-6">
            {['about', 'catalog', 'portfolio', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-colors capitalize font-medium"
              >
                {section === 'about' && 'О нас'}
                {section === 'catalog' && 'Каталог'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-primary mb-6 tracking-tight">
            Кожаный Скрип
          </h2>
          <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Мастерская изделий из натуральной кожи с 1987 года
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Icon name="Scissors" size={32} className="text-accent" />
            <span className="text-lg text-muted-foreground">Ручная работа</span>
            <span className="text-muted-foreground">•</span>
            <Icon name="Heart" size={32} className="text-accent" />
            <span className="text-lg text-muted-foreground">С любовью к ремеслу</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-primary mb-8 text-center">
            О Мастерской
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon name="Award" size={48} className="text-accent mb-4" />
                <h4 className="text-2xl font-bold mb-3 text-primary">История</h4>
                <p className="text-foreground leading-relaxed">
                  Более 35 лет мы храним традиции кожевенного мастерства. 
                  Каждое изделие создаётся вручную с соблюдением старинных техник 
                  обработки кожи.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon name="Hammer" size={48} className="text-accent mb-4" />
                <h4 className="text-2xl font-bold mb-3 text-primary">Качество</h4>
                <p className="text-foreground leading-relaxed">
                  Используем только натуральную кожу растительного дубления. 
                  Каждый шов прошит вручную вощёной нитью, что гарантирует 
                  долговечность изделия.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-primary mb-12 text-center">
            Каталог Изделий
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogItems.map((item) => (
              <Card 
                key={item.name} 
                className="border-2 border-border hover:border-accent hover:shadow-xl transition-all cursor-pointer group"
              >
                <CardContent className="p-8 text-center">
                  <Icon 
                    name={item.icon as any} 
                    size={56} 
                    className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" 
                  />
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.name}</h4>
                  <p className="text-muted-foreground font-medium">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-primary mb-12 text-center">
            Портфолио Работ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id} 
                className="border-2 border-border overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 sepia-[0.2]"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold text-primary mb-8">
            Контакты
          </h3>
          <Card className="border-2 border-border">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                  <p className="text-lg text-foreground">г. Москва, ул. Мастеровая, 15</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Phone" size={32} className="text-accent" />
                  <p className="text-lg text-foreground">+7 (495) 123-45-67</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Mail" size={32} className="text-accent" />
                  <p className="text-lg text-foreground">info@kozhanyskrip.ru</p>
                </div>
                <Button 
                  size="lg" 
                  className="mt-8 text-lg px-8 py-6 bg-primary hover:bg-accent transition-colors"
                >
                  Заказать изделие
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 1987-2025 Кожаный Скрип. Традиции кожевенного мастерства.</p>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <img 
            src={selectedImage || ''} 
            alt="Увеличенное изображение"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
