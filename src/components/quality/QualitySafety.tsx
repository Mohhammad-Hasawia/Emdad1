
import { useLanguage } from '@/hooks/useLanguage';
import { Shield, Wrench, Cpu, AlertTriangle, CheckCircle } from 'lucide-react';

export function QualitySafety() {
  const { t } = useLanguage();

  const safetyFeatures = [
    {
      icon: Shield,
      title: t('quality.safety.training.title'),
      description: t('quality.safety.training.description')
    },
    {
      icon: Wrench,
      title: t('quality.safety.maintenance.title'),
      description: t('quality.safety.maintenance.description')
    },
    {
      icon: Cpu,
      title: t('quality.safety.technology.title'),
      description: t('quality.safety.technology.description')
    },
    {
      icon: AlertTriangle,
      title: t('quality.safety.risk.title'),
      description: t('quality.safety.risk.description')
    },
    {
      icon: CheckCircle,
      title: t('quality.safety.compliance.title'),
      description: t('quality.safety.compliance.description')
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emdad-navy mb-6">
            {t('quality.safety.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 bg-emdad-gold/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emdad-gold" />
              </div>
              <h3 className="text-xl font-semibold text-emdad-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
