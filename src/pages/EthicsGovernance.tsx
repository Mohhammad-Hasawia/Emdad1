import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Shield, 
  Users, 
  FileText, 
  Phone, 
  Handshake,
  CheckCircle
} from 'lucide-react';

export default function EthicsGovernance() {
  const { language } = useLanguage();

  const sections = [
    {
      icon: Shield,
      titleEn: "Compliance Program",
      titleAr: "برنامج الامتثال",
      contentEn: "The company's Compliance Department is responsible for further developing, supporting, and monitoring the Compliance Program, while tracking relevant external legal and regulatory developments.",
      contentAr: "قسم الامتثال في الشركة مسؤول عن تطوير ودعم ومراقبة برنامج الامتثال، مع تتبع التطورات القانونية والتنظيمية الخارجية ذات الصلة."
    },
    {
      icon: Users,
      titleEn: "Conflict of Interest and Business Ethics Policies",
      titleAr: "سياسات تضارب المصالح وأخلاقيات العمل",
      contentEn: "Employees are regularly briefed on the company's Conflict of Interest and Business Ethics Policy to ensure its consistent implementation. Company staff and external parties can raise concerns or questions regarding ethics through established company reporting and communication channels.",
      contentAr: "يتم إطلاع الموظفين بانتظام على سياسة تضارب المصالح وأخلاقيات العمل في الشركة لضمان تطبيقها المتسق. يمكن لموظفي الشركة والأطراف الخارجية إثارة المخاوف أو الأسئلة المتعلقة بالأخلاق من خلال قنوات الإبلاغ والتواصل المعتمدة في الشركة."
    },
    {
      icon: FileText,
      titleEn: "Code of Business Conduct",
      titleAr: "مدونة قواعد السلوك التجاري",
      contentEn: "Our behavior distinguishes us as a company, as employees, and as citizens. Everything we do is rooted in our core values: Integrity, Excellence, Safety, Responsibility, and Citizenship. These values form the foundation of our Code of Business Conduct and decision-making approach. The purpose of this Code is to help us fulfill our ethical obligations to each other, to the company, to stakeholders, and to ourselves.",
      contentAr: "سلوكنا يميزنا كشركة وكموظفين وكمواطنين. كل ما نقوم به متجذر في قيمنا الأساسية: النزاهة والتميز والسلامة والمسؤولية والمواطنة. هذه القيم تشكل أساس مدونة قواعد السلوك التجاري ونهج اتخاذ القرارات لدينا. الغرض من هذه المدونة هو مساعدتنا في الوفاء بالتزاماتنا الأخلاقية تجاه بعضنا البعض وتجاه الشركة وأصحاب المصلحة وأنفسنا."
    },
    {
      icon: Handshake,
      titleEn: "Supplier Code of Conduct",
      titleAr: "مدونة قواعد السلوك للموردين",
      contentEn: "The company's Supplier Code of Conduct includes mandatory policies on: Environmental, Health & Safety issues, Fair business practices, Ethical sourcing, Conflict of interest, Bribery and illicit commissions, Gifts, fraud, monitoring, and compliance. It reinforces the company's value system, instills its ethical standards among its supplier network, and ensures long-term, mutually beneficial partnerships.",
      contentAr: "تتضمن مدونة قواعد السلوك للموردين في الشركة سياسات إلزامية حول: قضايا البيئة والصحة والسلامة، ممارسات الأعمال العادلة، المصادر الأخلاقية، تضارب المصالح، الرشوة والعمولات غير المشروعة، الهدايا والاحتيال والمراقبة والامتثال. إنها تعزز نظام قيم الشركة وتغرس معاييرها الأخلاقية بين شبكة مورديها وتضمن شراكات طويلة الأمد ومفيدة للطرفين."
    }
  ];

  const supplierPolicies = [
    "Environmental, Health & Safety issues",
    "Fair business practices",
    "Ethical sourcing",
    "Conflict of interest",
    "Bribery and illicit commissions",
    "Gifts, fraud, monitoring, and compliance"
  ];

  const supplierPoliciesAr = [
    "قضايا البيئة والصحة والسلامة",
    "ممارسات الأعمال العادلة",
    "المصادر الأخلاقية",
    "تضارب المصالح",
    "الرشوة والعمولات غير المشروعة",
    "الهدايا والاحتيال والمراقبة والامتثال"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
<section 
  className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('/img/ethics.jpg')`
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <Shield className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
    <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
      {language === 'ar' ? 'الأخلاق والحوكمة' : 'Ethics and Governance'}
    </h1>
  </div>
</section>


      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                <p className="animate-fade-in-up text-lg">
                  {language === 'ar' 
                    ? 'تحقق الشركة أعلى معايير الأعمال من خلال الالتزام بأعلى المبادئ الشخصية والمهنية.'
                    : 'The company achieves the highest standards of business by adhering to the highest personal and professional principles.'
                  }
                </p>
                
                <p className="animate-fade-in-up text-lg" style={{ animationDelay: '0.1s' }}>
                  {language === 'ar'
                    ? 'مبادئ الأخلاق والامتثال التي تتبناها الشركة متجذرة بعمق في ثقافتها. إنها تشكل الأساس القوي لمجموعة من السياسات والضوابط والمبادئ التوجيهية التي توجه الموظفين في تنفيذ استراتيجية أعمال الشركة.'
                    : 'The ethics and compliance principles embraced by the company are deeply rooted in its culture. They form the strong foundation for a set of policies, controls, and guidelines that guide employees in implementing the company\'s business strategy.'
                  }
                </p>

                <p className="animate-fade-in-up text-lg" style={{ animationDelay: '0.2s' }}>
                  {language === 'ar'
                    ? 'هذه المبادئ نفسها تشكل العمود الفقري لبرامج الامتثال في الشركة، والتي تعمل كمعيار لقياس الأداء - داخلياً وعبر شركائها بما في ذلك المقاولين والاستشاريين والموردين والشركات التابعة والمشاريع المشتركة، محلياً وعالمياً.'
                    : 'These same principles form the backbone of the company\'s compliance programs, which serve as a benchmark for measuring performance — both internally and across its partners including contractors, consultants, suppliers, affiliates, and joint ventures, domestically and globally.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6 rtl:space-x-reverse">
                      <div className="w-16 h-16 bg-emdad-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-8 h-8 text-emdad-gold" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-emdad-navy mb-4">
                          {language === 'ar' ? section.titleAr : section.titleEn}
                        </h2>
                        <div className="text-gray-700 leading-relaxed">
                          {section.titleEn === "Supplier Code of Conduct" ? (
                            <div>
                              <p className="mb-4">
                                {language === 'ar' 
                                  ? 'تتضمن مدونة قواعد السلوك للموردين في الشركة سياسات إلزامية حول:'
                                  : 'The company\'s Supplier Code of Conduct includes mandatory policies on:'
                                }
                              </p>
                              <ul className="space-y-2 mb-4">
                                {(language === 'ar' ? supplierPoliciesAr : supplierPolicies).map((policy, idx) => (
                                  <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <CheckCircle className="w-4 h-4 text-emdad-gold flex-shrink-0" />
                                    <span>{policy}</span>
                                  </li>
                                ))}
                              </ul>
                              <p>
                                {language === 'ar'
                                  ? 'إنها تعزز نظام قيم الشركة وتغرس معاييرها الأخلاقية بين شبكة مورديها وتضمن شراكات طويلة الأمد ومفيدة للطرفين.'
                                  : 'It reinforces the company\'s value system, instills its ethical standards among its supplier network, and ensures long-term, mutually beneficial partnerships.'
                                }
                              </p>
                            </div>
                          ) : (
                            <p>{language === 'ar' ? section.contentAr : section.contentEn}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}