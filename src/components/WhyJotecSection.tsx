
import { useLanguage } from '@/hooks/useLanguage';

export function WhyJotecSection() {
  const { t, language } = useLanguage();

  const features = [
    {
      title: t('whyEmdad.safety.title'),
      description: t('whyEmdad.safety.description')
    },
    {
      title: t('whyEmdad.expertise.title'),
      description: t('whyEmdad.expertise.description')
    },
    {
      title: t('whyEmdad.neutral.title'),
      description: t('whyEmdad.neutral.description')
    },
    {
      title: t('whyEmdad.government.title'),
      description: t('whyEmdad.government.description')
    },
    {
      title: t('whyEmdad.innovation.title'),
      description: t('whyEmdad.innovation.description')
    },
    {
      title: t('whyEmdad.customer.title'),
      description: t('whyEmdad.customer.description')
    }
  ];

  return (
    <section className="py-20 bg-emdad-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-emdad-gold mb-16 text-center animate-fade-in-up ${
              language === 'ar' ? 'font-[\'Cairo\',\'Tajawal\',\'GE_SS_Unique\',\'DIN_Next_Arabic\',sans-serif]' : ''
            }`}
          >
            {t('whyEmdad.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-fade-in-up bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-3 h-3 bg-emdad-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 
                      className={`text-xl font-semibold text-white mb-3 ${
                        language === 'ar' ? 'font-[\'Cairo\',\'Tajawal\',\'GE_SS_Unique\',\'DIN_Next_Arabic\',sans-serif] text-right' : 'text-left'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className={`text-gray-300 leading-relaxed ${
                        language === 'ar' ? 'font-[\'Cairo\',\'Tajawal\',\'GE_SS_Unique\',\'DIN_Next_Arabic\',sans-serif] text-right' : 'text-left'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
