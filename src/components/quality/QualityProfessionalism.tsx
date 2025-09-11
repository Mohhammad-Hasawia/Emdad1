
import { useLanguage } from '@/hooks/useLanguage';
import { Phone, Clock, Shield, Heart } from 'lucide-react';

export function QualityProfessionalism() {
  const { t } = useLanguage();

  const points = [
    { icon: Phone, text: t('quality.professionalism.point1') },
    { icon: Clock, text: t('quality.professionalism.point2') },
    { icon: Shield, text: t('quality.professionalism.point3') },
    { icon: Heart, text: t('quality.professionalism.point4') },
  ];

  return (
    <section className="py-20 bg-emdad-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emdad-gold mb-6">
            {t('quality.professionalism.title')}
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto mb-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-12 h-12 bg-emdad-gold/20 rounded-lg flex items-center justify-center">
                <point.icon className="w-6 h-6 text-emdad-gold" />
              </div>
              <p className="text-white/90 flex-1">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-emdad-gold bg-emdad-gold/10 px-6 py-3 rounded-lg inline-block">
            {t('quality.professionalism.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}
