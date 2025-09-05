
import { useLanguage } from '@/hooks/useLanguage';
import { Award, Eye, HandHeart } from 'lucide-react';

const items = [
  {
    key: 'quality',
    icon: Award,
  },
  {
    key: 'vision',
    icon: Eye,
  },
  {
    key: 'support',
    icon: HandHeart,
  },
];

export function WhatWeRepresentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-emdad-navy text-center mb-16 animate-fade-in-up arabic-text">
            {t('represent.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.key}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emdad-gold rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-200">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-emdad-navy mb-4 arabic-text">
                    {t(`represent.${item.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed arabic-text">
                    {t(`represent.${item.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
