
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';
import { Truck, Droplet, Globe, Clock, Users, Award } from 'lucide-react';

export function QualityNumbers() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    distance: 0,
    volume: 0,
    earth: 0,
    delay: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
  {
  value: '800K',
  target: 800000,
  label: t('quality.numbers.distance'),
  icon: Truck,
  suffix: 'كم',
  color: 'from-blue-600 to-blue-800'
}
,

  {
  value: '218K',
  target: 218000,
  label: t('quality.numbers.volume'),
  icon: Droplet,
  suffix: 'm³',
  color: 'from-amber-600 to-yellow-700'
}
,
    { 
      value: '20', 
      target: 20,
      label: t('quality.numbers.earth'),
      icon: Globe,
      suffix: '',
      color: 'from-green-600 to-emerald-700'
    },
    { 
      value: '99.8%', 
      target: 99.8,
      label: t('quality.numbers.delay'),
      icon: Clock,
      suffix: '%',
      color: 'from-purple-600 to-indigo-700'
    },
    { 
      value: '98%', 
      target: 98,
      label: t('quality.numbers.satisfaction'),
      icon: Users,
      suffix: '%',
      color: 'from-red-600 to-rose-700'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat.target / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.target) {
          currentValue = stat.target;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [Object.keys(prev)[index]]: Math.floor(currentValue)
        }));
      }, interval);
    });
  };

  const formatNumber = (value: number, suffix: string, originalValue: string): string => {
    if (originalValue.includes('M')) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (originalValue.includes('K')) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    if (suffix === '%') {
      return `${value.toFixed(1)}`;
    }
    return value.toString();
  };

  return (
    <section 
      ref={sectionRef}
      id="quality-numbers" 
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='4'/%3E%3Ccircle cx='10' cy='10' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emdad-gold to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emdad-gold to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emdad-gold to-yellow-600 rounded-full mb-6 shadow-2xl">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('quality.numbers.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emdad-gold to-yellow-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed arabic-text">
            أرقام موثقة تعكس التزامنا بالتميز والجودة في قطاع النقل والخدمات اللوجستية - البيانات للعام 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = Object.values(animatedValues)[index] || 0;
            const displayValue = formatNumber(animatedValue, stat.suffix, stat.value);
            
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emdad-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white block leading-none">
                    {isVisible ? displayValue : '0'}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl font-semibold text-emdad-gold ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-gray-300 text-base font-medium leading-relaxed group-hover:text-white transition-colors duration-300 arabic-text">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emdad-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-emdad-gold rounded-full animate-pulse" />
            <span className="arabic-text">بيانات محدثة للعام 2024</span>
            <div className="w-2 h-2 bg-emdad-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
