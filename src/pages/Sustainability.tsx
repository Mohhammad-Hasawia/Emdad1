import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Leaf, 
  Users, 
  Shield, 
  Droplets, 
  Wind, 
  Recycle,
  CheckCircle,
  Globe,
  Heart,
  Scale
} from 'lucide-react';

export default function Sustainability() {
  const { language } = useLanguage();

  const environmentalPolicies = [
    {
      titleEn: "Environmental Compliance",
      titleAr: "الامتثال البيئي",
      descriptionEn: "Full compliance with all applicable environmental laws and regulations, as well as the adoption of international standards in all transport activities.",
      descriptionAr: "الامتثال لجميع القوانين واللوائح المعمول بها وتطبيق المعايير الدولية المتعلقة بحماية البيئة خلال جميع مراحل النقل البري للنفط."
    },
    {
      titleEn: "Energy Efficiency",
      titleAr: "كفاءة الطاقة",
      descriptionEn: "Reduction of conventional energy consumption in our fleet through improved vehicle efficiency and upgrades, aiming to lower emissions.",
      descriptionAr: "تقليل استهلاك الطاقة التقليدية في عمليات النقل من خلال الاستخدام الأمثل للمركبات وتحديث أسطول النقل بما يضمن كفاءة أعلى وانبعاثات أقل."
    },
    {
      titleEn: "Emergency Response",
      titleAr: "الاستجابة للطوارئ",
      descriptionEn: "Rapid and effective emergency response to minimize environmental impact in the event of incidents such as leaks or road accidents.",
      descriptionAr: "الاستجابة لحالات الطوارئ (مثل التسرب أو الحوادث المرورية) بسرعة وكفاءة لتقليل الآثار البيئية المحتملة."
    },
    {
      titleEn: "Emission Reduction",
      titleAr: "تقليل الانبعاثات",
      descriptionEn: "Reduction or elimination of emissions, waste, and residues associated with the operation of our transportation fleet.",
      descriptionAr: "إزالة أو تقليل الانبعاثات والمخلفات المرتبطة بتشغيل المركبات خلال عمليات النقل."
    },
    {
      titleEn: "Spill Prevention",
      titleAr: "منع التسرب",
      descriptionEn: "Prevention of spills and contamination of air, soil, and water during oil loading, transportation, and unloading.",
      descriptionAr: "منع الانسكابات وتلوث الهواء والتربة والمياه أثناء تحميل ونقل وتفريغ النفط."
    },
    {
      titleEn: "Pollution Control",
      titleAr: "مكافحة التلوث",
      descriptionEn: "Control of odor and vapor-related pollution throughout the transport process.",
      descriptionAr: "منع التلوث الناتج عن  تسرب المواد في أي مرحلة من مراحل النقل."
    }
  ];

  const socialPolicies = [
    {
      titleEn: "Safety Compliance",
      titleAr: "الامتثال للسلامة",
      descriptionEn: "Compliance with all applicable health, safety, and security regulations, as well as international best practices.",
      descriptionAr: "الامتثال لجميع القوانين واللوائح المعمول بها وتطبيق المعايير الدولية المتعلقة بالصحة والسلامة والأمن في مجال النقل."
    },
    {
      titleEn: "Safe Work Environment",
      titleAr: "بيئة عمل آمنة",
      descriptionEn: "Providing a safe and healthy working environment for all employees, drivers, and contractors along transport routes.",
      descriptionAr: "توفير بيئة عمل آمنة وصحية لجميع الموظفين والسائقين والمقاولين في جميع مواقع العمل وعلى الطرق."
    },
    {
      titleEn: "Protective Equipment",
      titleAr: "معدات الحماية",
      descriptionEn: "Equipping personnel with appropriate personal protective equipment (PPE), especially drivers and field support teams.",
      descriptionAr: "توفير معدات الحماية الشخصية المناسبة للعاملين في الميدان، بما في ذلك سائقي الصهاريج وفرق الدعم."
    },
    {
      titleEn: "Continuous Training",
      titleAr: "التدريب المستمر",
      descriptionEn: "Delivering continuous training and capacity-building supported by up-to-date internal procedures and guidelines.",
      descriptionAr: "تقديم التدريب المستمر وتعزيز الكفاءة التشغيلية للموظفين بدعم من إجراءات وتعليمات واضحة ومحدثة."
    },
    {
      titleEn: "Accident Prevention",
      titleAr: "منع الحوادث",
      descriptionEn: "Striving to prevent incidents related to occupational safety and ensuring accident-free transportation operations.",
      descriptionAr: "السعي إلى منع الحوادث المرتبطة بالأمن والسلامة المهنية وتحقيق عمليات نقل خالية من الحوادث."
    },
    {
      titleEn: "Security Monitoring",
      titleAr: "المراقبة الأمنية",
      descriptionEn: "Preventing theft, vandalism, and security threats through continuous threat assessment and proactive monitoring.",
      descriptionAr: "منع حوادث السرقة أو التخريب أو التهديدات الأمنية من خلال تحليل التهديدات ومراقبتها بشكل مستمر."
    }
  ];

  const governancePolicies = [
    {
      titleEn: "HSSEQ Culture",
      titleAr: "ثقافة HSSEQ",
      descriptionEn: "Promoting a culture of HSSEQ throughout all transportation operations and managing it as a core business function.",
      descriptionAr: "تعزيز ثقافة الصحة والسلامة والأمن والبيئة والجودة ضمن جميع عمليات النقل البري وإدارتها كأنشطة أساسية."
    },
    {
      titleEn: "Performance Monitoring",
      titleAr: "مراقبة الأداء",
      descriptionEn: "Defining clear KPIs to measure target achievement and conducting regular reviews to evaluate compliance with policies.",
      descriptionAr: "تحديد مؤشرات أداء رئيسية لقياس تحقيق الأهداف بانتظام، وإجراء مراجعات دورية لتقييم مدى الامتثال لسياساتنا."
    },
    {
      titleEn: "Incident Reporting",
      titleAr: "الإبلاغ عن الحوادث",
      descriptionEn: "Enhancing the reporting culture for HSSEQ incidents and ensuring all reports are investigated thoroughly.",
      descriptionAr: "تحسين ثقافة الإبلاغ عن الحوادث والمخاطر البيئية والأمنية، وضمان التحقيق الكامل في جميع الحالات."
    },
    {
      titleEn: "Employee Engagement",
      titleAr: "مشاركة الموظفين",
      descriptionEn: "Maintaining an effective HSSEQ culture through proactive engagement of all company personnel.",
      descriptionAr: "الحفاظ على ثقافة HSSEQ فعالة وحية من خلال المشاركة الفعالة والاستباقية لجميع العاملين في الشركة."
    }
  ];

  const arabicContent = `في إمداد مباشر، نعتبر الصحة والسلامة والأمن والبيئة والجودة (HSSEQ) أمورًا أساسية؛ هذه ليست مجرد سياسات، ولكنها رسالة نوايا والتزام، تضمن صحة وسلامة جميع الأشخاص المشاركين في عمليات النقل، وتقديم خدمات نقل عالية الجودة للعملاء، وتقليل الأثر البيئي في صميم عملياتنا.

نحن ملتزمون باستكشاف طرق لتسهيل عمليات النقل في جميع مراحلها وجعلها آمنة وفعالة، بهدف منع الحوادث والإصابات والأمراض المهنية، والتركيز على الحوكمة والحفاظ على سلامة الناس والبيئة.

تتضمن خطتنا الاستراتيجية منظور الاستدامة مع الأهداف التالية:`;

  const englishContent = `At Emdad Mubasher, we consider Health, Safety, Security, Environment, and Quality (HSSEQ) as fundamental pillars of our operations. These are not just policies—they represent our intentions and commitment to ensuring the health and safety of all involved, delivering high-quality oil transportation services, and minimizing environmental impact at the core of our operations.

We are committed to exploring ways to streamline our transport operations across all routes and make them safer and more efficient to prevent accidents, injuries, and occupational illnesses, with a strong focus on governance, people, and environmental protection.

Our strategic plan incorporates a sustainability perspective with the following objectives:`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Leaf className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {language === 'ar' ? 'الاستدامة' : 'Sustainability'}
          </h1>
          <p className="text-xl text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'ar' ? 'نقل مسؤول من أجل مستقبل مستدام' : 'Responsible Transport for a Sustainable Future'}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                {language === 'ar' ? (
                  arabicContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  englishContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      {paragraph}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emdad-navy mb-4">
                    {language === 'ar' ? 'البيئة' : 'Environment'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'نعمل على نقل الطاقة التي يحتاجها العالم بطريقة مسؤولة تساهم في حماية البيئة.'
                      : 'We are committed to delivering the energy the world needs—responsibly and with a strong focus on protecting the environment.'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emdad-navy mb-4">
                    {language === 'ar' ? 'اجتماعي' : 'Social'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'نضع الأشخاص والمجتمعات في قلب كل أعمالنا ومهامنا التشغيلية اليومية.'
                      : 'We place people and communities at the heart of everything we do, every day, across our transport network.'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emdad-navy mb-4">
                    {language === 'ar' ? 'الحوكمة' : 'Governance'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'نزرع ثقافة النزاهة ونلتزم بأداء الأعمال بالطريقة الصحيحة، وفق أعلى معايير المهنية والشفافية.'
                      : 'We foster a culture of integrity and commit to doing things the right way, with professionalism, transparency, and accountability.'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'سياساتنا البيئية' : 'Our Environmental Policies'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {environmentalPolicies.map((policy, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emdad-navy mb-2">
                          {language === 'ar' ? policy.titleAr : policy.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? policy.descriptionAr : policy.descriptionEn}
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

      {/* Social Policies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'سياساتنا الاجتماعية' : 'Our Social Policies'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialPolicies.map((policy, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emdad-navy mb-2">
                          {language === 'ar' ? policy.titleAr : policy.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? policy.descriptionAr : policy.descriptionEn}
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

      {/* Governance Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emdad-navy mb-6">
                {language === 'ar' ? 'سياسات الحوكمة لدينا' : 'Our Governance Policies'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {governancePolicies.map((policy, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emdad-navy mb-2">
                          {language === 'ar' ? policy.titleAr : policy.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'ar' ? policy.descriptionAr : policy.descriptionEn}
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

      <Footer />
    </div>
  );
}