import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Shield, 
  Users, 
  CheckCircle, 
  Award,
  Wrench,
  FileText,
} from 'lucide-react';

export default function Safety() {
  const { language } = useLanguage();

  const safetyMeasures = [
    {
      icon: Wrench,
      titleEn: "Technical Vehicle Inspections",
      titleAr: "الفحص الفني للمركبات",
      descriptionEn: "Comprehensive pre-trip inspections ensure all vehicles meet safety standards",
      descriptionAr: "فحص شامل قبل الرحلة لضمان مطابقة جميع المركبات لمعايير السلامة"
    },
    {
      icon: Users,
      titleEn: "Driver Preparedness Checks",
      titleAr: "فحص جاهزية السائقين",
      descriptionEn: "Regular assessment of driver readiness and safety protocol compliance",
      descriptionAr: "تقييم منتظم لجاهزية السائقين والالتزام ببروتوكولات السلامة"
    },
    {
      icon: FileText,
      titleEn: "Emergency Response Plans",
      titleAr: "خطط الاستجابة للطوارئ",
      descriptionEn: "Pre-defined emergency procedures for various incident scenarios",
      descriptionAr: "إجراءات طوارئ محددة مسبقاً لمختلف سيناريوهات الحوادث"
    },
    {
      icon: Shield,
      titleEn: "Advanced Monitoring Systems",
      titleAr: "أنظمة المراقبة المتقدمة",
      descriptionEn: "Real-time fleet monitoring with GPS tracking and safety alerts",
      descriptionAr: "مراقبة الأسطول في الوقت الفعلي مع تتبع GPS وتنبيهات السلامة"
    }
  ];

  const trainingPrograms = [
    { titleEn: "Emergency Response Training", titleAr: "تدريب الاستجابة للطوارئ" },
    { titleEn: "Hazardous Materials Handling", titleAr: "التعامل مع المواد الخطرة" },
    { titleEn: "Incident Prevention Protocols", titleAr: "بروتوكولات منع الحوادث" },
    { titleEn: "Safety Equipment Usage", titleAr: "استخدام معدات السلامة" }
  ];

  const arabicContent = `على مدى السنوات، نمت شركة إمداد مباشر لتصبح واحدة من أبرز شركات النقل البري المتخصصة في نقل النفط ومشتقاته في سوريا والمنطقة الإقليمية. ومع هذا النمو، تزداد مسؤوليتنا تجاه السلامة، ونحن ملتزمون بالكامل بالحفاظ على أعلى معايير الأمان في جميع عملياتنا.

نلتزم في إمداد مباشر بتطبيق وتجاوز المعايير المعترف بها محليًا ودوليًا فيما يتعلق بسلامة النقل البري، خاصة عند التعامل مع المواد القابلة للاشتعال والخطرة. كل عملية نقل تخضع لإجراءات دقيقة تشمل الفحص الفني للمركبات، والتأكد من جاهزية السائقين، وتنفيذ خطط طوارئ مسبقة.

نستثمر باستمرار في تطوير منظومة السلامة لدينا، سواء عبر تحديث الأسطول بأحدث تقنيات المراقبة والوقاية، أو من خلال التدريب الدوري لأكثر من 200 موظف على استجابات الطوارئ وإدارة الحوادث المحتملة.

جميع عملياتنا تتم وفقًا لتعليمات صارمة تصدر عن الجهات التنظيمية في سوريا والدول الإقليمية، إلى جانب التزامنا بالمعايير الدولية لنقل المواد الخطرة مثل إرشادات ADR الأوروبية.

كفاءة فرقنا ظهرت بوضوح في عدد من الحوادث الطارئة، حيث تم التعامل مع تسرب محدود في إحدى الشحنات عام 2023 دون أي إصابات، وتمت إعادة توجيه الحمولة بأمان إلى موقعها البديل خلال أقل من 6 ساعات.

في إمداد مباشر، السلامة ليست خيارًا، بل هي أساس استمراريتنا وسمعتنا في هذا القطاع الحساس.`;

  const englishContent = `Over the years, Emdad Mubasher has grown to become one of the leading land transport companies specializing in petroleum and crude oil logistics in Syria and the regional market. With that growth comes great responsibility—and we are fully committed to maintaining the highest safety standards across every operation.

At Emdad Mubasher, we believe in meeting and exceeding all recognized safety and performance standards, particularly in the handling and transport of flammable and hazardous materials. Every single shipment undergoes strict procedures, including technical inspections, driver preparedness checks, and pre-defined emergency response plans.

We continue to invest heavily in our safety systems, equipping our fleet with the latest monitoring and prevention technologies, and training over 200 employees in emergency handling and incident prevention on a regular basis.

All our operations are conducted in compliance with the regulations set by national authorities and regional agencies, along with adherence to international best practices such as the European ADR framework for road transport of dangerous goods.

Our team's capabilities were clearly demonstrated during a minor incident in 2023, where a small leak was contained without injury, and the shipment was safely redirected to an alternative location within 6 hours.

At Emdad Mubasher, safety is not optional—it is the foundation of our reliability and reputation in the field of petroleum transport.`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/safty.webp')` }}
      >
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Shield className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {language === 'ar' ? 'السلامة' : 'Safety'}
          </h1>
          <p className="text-xl text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'ar' ? 'الأداء والسلامة هما أولويتنا' : 'Performance & Safety Are Our Priorities'}
          </p>
        </div>
      </section>

      {/* Main Content */}
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

      {/* Safety Measures */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'إجراءات السلامة اليومية' : 'Daily Safety Measures'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {safetyMeasures.map((measure, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-emdad-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <measure.icon className="w-6 h-6 text-emdad-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emdad-navy mb-2">
                          {language === 'ar' ? measure.titleAr : measure.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? measure.descriptionAr : measure.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                  {language === 'ar' ? 'برامج التدريب' : 'Training Programs'}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {language === 'ar'
                    ? 'نستثمر في تدريب أكثر من 200 موظف على أحدث معايير السلامة'
                    : 'We invest in training over 200 employees on the latest safety standards'}
                </p>
                <div className="space-y-4">
                  {trainingPrograms.map((program, i) => (
                    <div key={i} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-emdad-gold flex-shrink-0" />
                      <span className="text-gray-700">
                        {language === 'ar' ? program.titleAr : program.titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Safety Training"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emdad-navy mb-6">
              {language === 'ar' ? 'الشهادات والمعايير' : 'Certifications & Standards'}
            </h2>
            <div className="w-24 h-1 bg-emdad-gold mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-emdad-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-emdad-navy mb-4">
                    {language === 'ar' ? 'المعايير المحلية' : 'National Standards'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'الامتثال الكامل للوائح السلامة الصادرة عن الجهات التنظيمية في سوريا والدول الإقليمية'
                      : 'Full compliance with safety regulations from Syrian and regional regulatory authorities'}
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-emdad-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-emdad-navy mb-4">
                    {language === 'ar' ? 'المعايير الدولية' : 'International Standards'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'الالتزام بالمعايير الدولية لنقل المواد الخطرة مثل إرشادات ADR الأوروبية'
                      : 'Adherence to international standards such as European ADR guidelines for dangerous goods transport'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
