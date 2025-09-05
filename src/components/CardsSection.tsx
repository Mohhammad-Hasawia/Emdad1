
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Award, HelpCircle, Mail } from 'lucide-react';

const cards = [
  {
    key: 'quality',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/quality'
  },
  {
    key: 'faq',
    icon: HelpCircle,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/faq'
  },
  {
    key: 'contact',
    icon: Mail,
    image: '/img/contactcard.jfif',
    href: '/contact'
  },
];

export function CardsSection() {
  const { t } = useLanguage();

  const getButtonText = (cardKey: string) => {
    switch (cardKey) {
      case 'quality':
        return t('cards.learnMore');
      case 'faq':
        return t('cards.viewFaqs');
      case 'contact':
        return t('cards.contactUs');
      default:
        return t('cards.learnMore');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={card.key}
                className="bg-emdad-navy border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="relative p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={card.image} 
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-emdad-navy bg-opacity-40 flex items-center justify-center">
                      <IconComponent className="text-emdad-gold" size={48} />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="text-emdad-gold text-xl font-bold mb-3 arabic-text">
                    {t(`cards.${card.key}.title`)}
                  </CardTitle>
                  
                  <CardDescription className="text-white text-base leading-relaxed mb-6 arabic-text">
                    {t(`cards.${card.key}.description`)}
                  </CardDescription>
                  
                  <Button 
                    className="bg-emdad-gold hover:bg-yellow-500 text-white w-full transition-all duration-200 text-sm md:text-base"
                    onClick={() => window.location.href = card.href}
                  >
                    {getButtonText(card.key)}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
