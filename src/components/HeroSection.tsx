
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/7.png')`
      }}
    >
      {/* Strong Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        
        <Button 
          onClick={scrollToAbout}
          className="bg-emdad-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
