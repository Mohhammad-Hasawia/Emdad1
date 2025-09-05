
import { useLanguage } from '@/hooks/useLanguage';

export function QualityHero() {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/img/bg-masthead.jpg')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F3B73] opacity-80"></div> {/* Changed color from #1A1F2B to #1F3B73 (Royal Blue) */}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-emdad-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-emdad-gold/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-emdad-gold mb-6 leading-tight arabic-text">
            {t('quality.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed arabic-text">
            {t('quality.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
