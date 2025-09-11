import { useLanguage } from '@/hooks/useLanguage';
import { Award } from 'lucide-react';

export function QualityCertifications() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emdad-navy mb-6">
            {t('quality.certifications.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('quality.certifications.subtitle')}
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* ISO 9001 Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 animate-fade-in-up">
            <img
              src="/img/ISO9001.jpg"
              alt="ISO 9001"
              className="w-full h-64 object-contain bg-gray-100 p-4"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emdad-gold/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-emdad-gold" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">{t('quality.certifications.iso9001')}</p>
            </div>
          </div>

          {/* ISO 29001 Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img
              src="/img/ISO29001.jpg"
              alt="ISO 29001"
              className="w-full h-64 object-contain bg-gray-100 p-4"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-emdad-gold/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-emdad-gold" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">{t('quality.certifications.iso29001')}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('quality.certifications.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}
