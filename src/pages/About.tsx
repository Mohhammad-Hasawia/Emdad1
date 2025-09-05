
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Building2, 
  Eye, 
  Calendar, 
  Network, 
  Settings, 
  TrendingUp, 
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const foundationItems = [
    {
      icon: Building2,
      title: t('aboutPage.foundation.title'),
      description: t('aboutPage.foundation.description')
    },
    {
      icon: Eye,
      title: t('aboutPage.vision.title'),
      description: t('aboutPage.vision.description')
    }
  ];

  const timelineEvents = [
    {
      year: '2020',
      title: t('aboutPage.partnerships.ebla.title'),
      description: t('aboutPage.partnerships.ebla.2020')
    },
    {
      year: '2022',
      title: t('aboutPage.partnerships.ebla.title'),
      description: t('aboutPage.partnerships.ebla.2022')
    },
    {
      year: '2025',
      title: t('aboutPage.partnerships.ebla.title'),
      description: t('aboutPage.partnerships.ebla.2025')
    }
  ];

  const partnerships = [
    t('aboutPage.partnerships.syriatel'),
    t('aboutPage.partnerships.mtn'),
    t('aboutPage.partnerships.mahroukat')
  ];

  const ambitionItems = [
    {
      icon: Network,
      title: t('aboutPage.ambition.network.title'),
      description: t('aboutPage.ambition.network.description')
    },
    {
      icon: Settings,
      title: t('aboutPage.ambition.service.title'),
      description: t('aboutPage.ambition.service.description')
    },
    {
      icon: TrendingUp,
      title: t('aboutPage.ambition.efficiency.title'),
      description: t('aboutPage.ambition.efficiency.description')
    },
    {
      icon: Award,
      title: t('aboutPage.ambition.leadership.title'),
      description: t('aboutPage.ambition.leadership.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `url('/img/about.avif')`
}}
      >
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {t('aboutPage.hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('aboutPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Company Text Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-8 animate-fade-in-up arabic-text">
                  {t('aboutPage.company.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up arabic-text" style={{ animationDelay: '0.2s' }}>
                  {t('aboutPage.company.description')}
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <img 
                  src="/img/bg.jpg"
                  alt="Oil Transport"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {foundationItems.map((item, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="pt-6">
                    <item.icon className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-emdad-gold mb-4 arabic-text">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed arabic-text">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Timeline Section */}
      <section className="py-20 bg-emdad-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-emdad-gold text-center mb-16 animate-fade-in-up">
              {t('aboutPage.partnerships.title')}
            </h2>
            
            {/* Timeline */}
            <div className="relative mb-16 hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emdad-gold" style={{ height: 'calc(100% - 2rem)' }}></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-emdad-gold font-bold text-lg mb-2 arabic-balanced-text">{event.year}</div>
                      <h3 className="text-emdad-navy font-semibold mb-2 arabic-text">{event.title}</h3>
                      <p className="text-gray-600 arabic-text leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emdad-gold rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden mb-16">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emdad-gold"></div>
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start mb-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="absolute left-2 w-4 h-4 bg-emdad-gold rounded-full transform -translate-x-1/2 mt-6"></div>
                    <div className="ml-12 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-emdad-gold font-bold text-lg mb-2 arabic-balanced-text">{event.year}</div>
                        <h3 className="text-emdad-navy font-semibold mb-2 arabic-text">{event.title}</h3>
                        <p className="text-gray-600 arabic-text leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership List */}
            <div className="grid md:grid-cols-3 gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="bg-white p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 0.2}s` }}>
                  <CardContent className="pt-4">
                    <CheckCircle className="w-12 h-12 text-emdad-gold mx-auto mb-4" />
                    <p className="text-gray-700 font-medium arabic-text leading-relaxed">{partnership}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambition for Regional Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-emdad-gold text-center mb-16 animate-fade-in-up">
              {t('aboutPage.ambition.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ambitionItems.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="pt-6">
                    <item.icon className="w-12 h-12 text-emdad-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-emdad-navy mb-3 arabic-text">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed arabic-text">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
