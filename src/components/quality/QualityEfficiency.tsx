
import { useLanguage } from '@/hooks/useLanguage';
import { Zap, BarChart3, Users, TrendingUp } from 'lucide-react';

export function QualityEfficiency() {
  const { t } = useLanguage();

  const points = [
    { icon: BarChart3, text: t('quality.efficiency.point1') },
    { icon: TrendingUp, text: t('quality.efficiency.point2') },
    { icon: Users, text: t('quality.efficiency.point3') },
    { icon: Zap, text: t('quality.efficiency.point4') },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emdad-navy mb-6">
            {t('quality.efficiency.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('quality.efficiency.subtitle')}
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-12 h-12 bg-emdad-gold/10 rounded-lg flex items-center justify-center">
                <point.icon className="w-6 h-6 text-emdad-gold" />
              </div>
              <p className="text-gray-700 flex-1">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-emdad-gold bg-emdad-gold/10 px-6 py-3 rounded-lg inline-block">
            {t('quality.efficiency.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}
