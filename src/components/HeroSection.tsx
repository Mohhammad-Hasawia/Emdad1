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
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/12.png')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emdad-navy/90 via-emdad-navy/70 to-emdad-navy/90"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 md:px-6 py-10">
        <h1
          className="heading-hero font-extrabold mb-4 md:mb-6 
          text-emdad-gold 
          md:bg-gradient-to-r md:from-emdad-gold md:via-yellow-400 md:to-emdad-gold 
          md:bg-clip-text md:text-transparent 
          animate-pulse arabic-text leading-tight"
        >
          {t('hero.title')}
        </h1>

        <p className="body-base text-white/80 mb-2 md:mb-3 animate-fade-in-up arabic-text arabic-balanced-text leading-relaxed">
          {t('hero.company')}
        </p>

        <p className="body-large text-white leading-relaxed mb-6 md:mb-8 animate-fade-in-up arabic-text">
          {t('hero.subtitle')}
        </p>

        <Button
          onClick={scrollToAbout}
          className="relative bg-emdad-gold hover:bg-yellow-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 body-base font-semibold rounded-xl shadow-lg transition duration-300 hover:scale-105
          before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-yellow-400/50 before:opacity-0 hover:before:opacity-100 before:animate-ping"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
