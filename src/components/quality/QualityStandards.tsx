
import { useLanguage } from '@/hooks/useLanguage';
import { CheckCircle, Search, FileText, MessageSquare } from 'lucide-react';

export function QualityStandards() {
  const { t } = useLanguage();

  const points = [
    { icon: CheckCircle, text: t('quality.quality.point1') },
    { icon: Search, text: t('quality.quality.point2') },
    { icon: FileText, text: t('quality.quality.point3') },
    { icon: MessageSquare, text: t('quality.quality.point4') },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <img 
              src="/img/2.jpg" 
              alt="Quality Work and Excellence"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-emdad-navy mb-6">
              {t('quality.quality.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('quality.quality.subtitle')}
            </p>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 flex-1">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg font-medium text-green-600 bg-green-100 px-6 py-3 rounded-lg inline-block">
                {t('quality.quality.footer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
