import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Truck, 
  Warehouse, 
  MapPin, 
  Clock, 
  Gauge, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Truck,
      titleEn: "Oil Transport (Local & Regional)",
      titleAr: "نقل النفط (محلي وإقليمي)",
      descriptionEn: "Emdad Mubasher offers professional and secure crude oil and petroleum product transportation services within Syria and across the regional market.",
      descriptionAr: "تقدم شركة إمداد مباشر خدمات نقل النفط الخام ومشتقاته داخل سوريا وفي المحيط الإقليمي، باحترافية وأمان.",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Warehouse,
      titleEn: "Smart Warehouse Management & Transport Solutions",
      titleAr: "إدارة المخازن الذكية وحلول النقل",
      descriptionEn: "Emdad Mubasher provides full-scale warehouse management solutions. We receive the entire storage site, audit quantities, identify transport needs, and carry out the logistics—all while the client enjoys full hands-off convenience.",
      descriptionAr: "لدى إمداد مباشر خدمة متقدمة لإدارة المخازن، حيث تستلم الشركة المخزن بالكامل، تقوم بإحصاء الكميات وتحديد الاحتياجات اللوجستية، وتتكفل بعملية النقل دون تدخل مباشر من صاحب المخزن.",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const capabilities = [
    {
      icon: Gauge,
      titleEn: "Transport capacity exceeding 1.5 million liters per month",
      titleAr: "قدرة نقل تتجاوز 13 مليون لتر شهريًا"
    },
    {
      icon: Clock,
      titleEn: "Fast response time: under 12 hours for domestic shipments",
      titleAr: "زمن استجابة سريع: أقل من 12 ساعة للشحنات داخل سوريا"
    },
    {
      icon: Shield,
      titleEn: "Fleet equipped with real-time GPS tracking and smart safety systems",
      titleAr: "أسطول مزوّد بأنظمة تتبع وحماية ذكية"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
<section 
  className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('/img/car2.png')`
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <Truck className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
    <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
      {language === 'ar' ? 'خدماتنا' : 'Our Services'}
    </h1>
    <p className="text-xl text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      {language === 'ar' 
        ? 'حلول نقل متخصصة وآمنة للمنتجات النفطية' 
        : 'Specialized and secure transport solutions for petroleum products'}
    </p>
  </div>
</section>


      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emdad-navy mb-4">
                      {language === 'ar' ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'القدرات التشغيلية' : 'Operational Capabilities'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 bg-emdad-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-10 h-10 text-emdad-gold" />
                  </div>
                  <p className="text-lg font-semibold text-emdad-navy">
                    {language === 'ar' ? capability.titleAr : capability.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-emdad-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emdad-gold mb-6">
              {language === 'ar' ? 'هل تحتاج خدماتنا؟' : 'Need Our Services?'}
            </h2>
            <p className="text-xl text-white mb-8">
              {language === 'ar' 
                ? 'تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك'
                : 'Contact us for a customized quote tailored to your needs'
              }
            </p>
            <Button 
              className="bg-emdad-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              {language === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}