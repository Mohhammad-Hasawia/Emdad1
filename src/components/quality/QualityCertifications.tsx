
import { useLanguage } from '@/hooks/useLanguage';
import { Award, CheckCircle } from 'lucide-react';

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

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 bg-emdad-gold/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-emdad-gold" />
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-700 font-medium">{t('quality.certifications.iso9001')}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 bg-emdad-gold/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-emdad-gold" />
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-700 font-medium">{t('quality.certifications.iso29001')}</p>
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
