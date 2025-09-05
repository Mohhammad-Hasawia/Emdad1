import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Activity, 
  Users, 
  MapPin, 
  Award, 
  Truck,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export default function Activities() {
  const { language } = useLanguage();

  const achievements = [
    { icon: Truck, number: "12,000+", titleEn: "Successful Transport Operations", titleAr: "عملية نقل ناجحة" },
    { icon: MapPin, number: "6M+", titleEn: "Kilometers Driven", titleAr: "كيلومتر مقطوع" },
    { icon: Users, number: "40+", titleEn: "Professional Employees", titleAr: "موظف محترف" },
    { icon: Globe, number: "5", titleEn: "Countries Covered", titleAr: "دولة مغطاة" }
  ];

  const keyAchievements = [
    { titleEn: "Regional expansion to Lebanon, Jordan, Iraq, and Turkey", titleAr: "التوسع الإقليمي ليشمل لبنان، الأردن، العراق، وتركيا" },
    { titleEn: "Strategic partnerships with over 50 petroleum companies and service providers", titleAr: "شراكات استراتيجية مع أكثر من 50 شركة نفطية ومزود خدمة" },
    { titleEn: "Specialized transport services for hazardous petroleum cargo in compliance with top environmental and technical safety standards", titleAr: "تقديم خدمات نقل مخصصة للبضائع الخطرة وفقًا لأعلى معايير السلامة البيئية والتقنية" }
  ];

  const arabicContent = `منذ تأسيس شركة إمداد مباشر في عام 2019، ونحن نكرّس جهودنا لتقديم حلول نقل بري متخصصة وآمنة لمختلف المنتجات النفطية والنفط الخام داخل سوريا وفي المنطقة الإقليمية المحيطة. بفضل التزامنا الصارم بالجودة والكفاءة، أصبحت إمداد مباشر من أبرز الشركات العاملة في مجال النقل البري النفطي.

على مدار السنوات الماضية، نفّذنا أكثر من 12,000 عملية نقل ناجحة، شملت مشتقات نفطية متنوعة بما في ذلك النفط الخام، المازوت، البنزين، والزيوت الصناعية، ضمن بيئة تشغيلية تتطلب دقة عالية واحترافية في التعامل مع المواد الخطرة.

أسطولنا الحديث مجهز بصهاريج متطورة وأنظمة تتبّع ذكية تضمن أعلى مستويات السلامة خلال النقل، وتسمح بالمراقبة الفورية لمسار الشحنة. وقد قطع أسطولنا أكثر من 6 ملايين كيلومتر على الطرق البرية في ظروف تشغيلية متغيرة.

يضم فريقنا أكثر من 200 موظف من السائقين والفنيين والإداريين، يعملون وفق معايير السلامة المعتمدة وبتدريب مستمر لتلبية احتياجات عملائنا بكفاءة واحترافية.

في شركة إمداد مباشر، نؤمن أن النقل الآمن للمواد البترولية مسؤولية كبيرة، ولهذا نواصل الاستثمار في الأسطول والكوادر والتقنيات لضمان أعلى مستويات الأداء والثقة.`;

  const englishContent = `Since its founding in 2019, Emdad Mubasher has been dedicated to providing safe and specialized land transport solutions for a wide range of petroleum products and crude oil across Syria and the surrounding region. With a firm commitment to quality and efficiency, Emdad Mubasher has established itself as a leading name in the petroleum ground transport sector.

Over the years, we have successfully completed more than 12,000 transport operations, handling various petroleum products including crude oil, diesel, gasoline, and industrial lubricants. These operations demand high levels of precision, safety, and professionalism due to the hazardous nature of the cargo.

Our modern fleet is equipped with advanced tankers and real-time tracking systems, ensuring the highest safety standards and full visibility throughout the journey. Our vehicles have collectively covered more than 6 million kilometers across diverse terrains and logistical environments.

Our team includes over 200 professionals, including drivers, technicians, and administrative staff—all rigorously trained in safety protocols and best practices for petroleum transport.

At Emdad Mubasher, we understand that transporting petroleum products is a critical responsibility. That's why we continue to invest in our fleet, people, and technology to deliver performance and reliability that clients can trust.`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/activities.jpeg')` }}
      >
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Activity className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {language === 'ar' ? 'الأنشطة' : 'Activities'}
          </h1>
          <p className="text-xl text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'ar' ? 'التخصص هو مفتاح النجاح' : 'Specialization is the Key to Success'}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-emdad-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-emdad-gold" />
                    </div>
                    <div className="text-3xl font-bold text-emdad-navy mb-2">{achievement.number}</div>
                    <p className="text-gray-600 text-sm">
                      {language === 'ar' ? achievement.titleAr : achievement.titleEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                {language === 'ar'
                  ? arabicContent.split('\n\n').map((p, i) => (
                      <p key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>{p}</p>
                    ))
                  : englishContent.split('\n\n').map((p, i) => (
                      <p key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>{p}</p>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-emdad-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-gold mb-6">
                {language === 'ar' ? 'من أبرز إنجازاتنا' : 'Key Achievements'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>
            <div className="space-y-6">
              {keyAchievements.map((achievement, i) => (
                <div key={i} className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-emdad-gold rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {language === 'ar' ? achievement.titleAr : achievement.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'التغطية الإقليمية' : 'Regional Coverage'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Regional Map"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold text-emdad-navy mb-6">
                  {language === 'ar' ? 'نخدم المنطقة بأكملها' : 'Serving the Entire Region'}
                </h3>
                <div className="space-y-4">
                  {['Syria', 'Lebanon', 'Jordan', 'Iraq', 'Turkey'].map((country, i) => (
                    <div key={i} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <MapPin className="w-5 h-5 text-emdad-gold" />
                      <span className="text-gray-700 font-medium">
                        {language === 'ar' 
                          ? (country === 'Syria' ? 'سوريا' :
                             country === 'Lebanon' ? 'لبنان' :
                             country === 'Jordan' ? 'الأردن' :
                             country === 'Iraq' ? 'العراق' : 'تركيا') 
                          : country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
