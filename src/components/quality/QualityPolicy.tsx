
import { useLanguage } from '@/hooks/useLanguage';
import { Award, Leaf, Shield } from 'lucide-react';

export function QualityPolicy() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emdad-navy mb-6">
            {t('quality.policy.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-emdad-navy mb-4">
              {t('quality.policy.quality.title')}
            </h3>
            <p className="text-gray-600">
              {t('quality.policy.quality.description')}
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-emdad-navy mb-4">
              {t('quality.policy.environment.title')}
            </h3>
            <p className="text-gray-600">
              {t('quality.policy.environment.description')}
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-emdad-navy mb-4">
              {t('quality.policy.safety.title')}
            </h3>
            <div className="text-gray-600 text-left rtl:text-right">
              <ul className="space-y-2">
                <li>• {t('quality.policy.safety.point1')}</li>
                <li>• {t('quality.policy.safety.point2')}</li>
                <li>• {t('quality.policy.safety.point3')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Environment Image */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Environmental Responsibility"
            className="rounded-lg shadow-lg w-full max-w-4xl mx-auto h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
