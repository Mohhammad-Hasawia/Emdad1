
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';

export function AboutSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <section id="about" className="py-20 bg-emdad-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-8 animate-fade-in-up arabic-text">
            {t('about.title')}
          </h2>
          
          <p className="text-xl text-white leading-relaxed mb-8 animate-fade-in-up arabic-text" style={{ animationDelay: '0.2s' }}>
            {t('about.description')}
          </p>
          
          <Button 
            className="bg-emdad-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
            onClick={handleAboutClick}
          >
            {t('about.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
