import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Shield, Users, Heart, Award, Star } from "lucide-react";

export default function OurValues() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Shield,
      titleEn: "Safety",
      titleAr: "السلامة",
      contentEn:
        "Safety is an integral part of Emdad's cultural legacy. The company has always been committed to providing a safe work environment grounded in mutual respect, with proper safety policies and procedures implemented both on and off the job site.",
      contentAr:
        "السلامة جزء لا يتجزأ من الإرث الثقافي لإمداد مباشر. لطالما التزمت الشركة بتوفير بيئة عمل آمنة قائمة على الاحترام المتبادل، مع تطبيق سياسات وإجراءات السلامة المناسبة داخل وخارج موقع العمل.",
      color: "from-red-600 to-red-800",
    },
    {
      icon: Users,
      titleEn: "Citizenship",
      titleAr: "المواطنة",
      contentEn:
        "Emdad Mubasher is dedicated to building a positive reputation wherever it operates around the world by honoring its duties as a corporate citizen and making a meaningful impact in communities. As a global company headquartered in Saudi Arabia, Emdad Mubasher takes this role seriously and without compromise.",
      contentAr:
        "تلتزم إمداد مباشر ببناء سمعة إيجابية أينما تعمل حول العالم من خلال الوفاء بواجباتها كمواطن مؤسسي وإحداث تأثير ذي معنى في المجتمعات. كشركة عالمية مقرها في المملكة العربية السعودية، تأخذ إمداد مباشر هذا الدور على محمل الجد وبدون تنازلات.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Heart,
      titleEn: "Integrity",
      titleAr: "النزاهة",
      contentEn:
        "Emdad Mubasher's integrity is built on the ethical standards its employees uphold in every aspect of their work. Integrity is one of the company's most valuable assets and a reflection of its reputation — and the integrity of any organization begins with the integrity of its people.",
      contentAr:
        "تُبنى نزاهة إمداد مباشر على المعايير الأخلاقية التي يلتزم بها موظفوها في كل جانب من جوانب عملهم. النزاهة هي واحدة من أثمن أصول الشركة وانعكاس لسمعتها - ونزاهة أي منظمة تبدأ بنزاهة أفرادها.",
      color: "from-green-600 to-green-800",
    },
    {
      icon: Award,
      titleEn: "Responsibility",
      titleAr: "المسؤولية",
      contentEn:
        "Every Emdad Mubasher employee is accountable for their actions and for contributing to the achievement of the company's goals. This responsibility starts with the company's president and CEO and extends across all business sectors.",
      contentAr:
        "كل موظف في إمداد مباشر مسؤول عن أفعاله وعن المساهمة في تحقيق أهداف الشركة. هذه المسؤولية تبدأ من رئيس الشركة والرئيس التنفيذي وتمتد عبر جميع القطاعات التجارية.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: Star,
      titleEn: "Excellence",
      titleAr: "التميز",
      contentEn:
        "Excellence is a hallmark of Emdad Mubasher's work environment. It reflects the individual and collective commitment to fulfilling responsibilities, delivering superior results, and remaining agile in the face of new challenges.",
      contentAr:
        "التميز هو سمة مميزة لبيئة العمل في إمداد مباشر. إنه يعكس الالتزام الفردي والجماعي بالوفاء بالمسؤوليات وتحقيق نتائج متفوقة والبقاء رشيقاً في مواجهة التحديات الجديدة.",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/value.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Star className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {language === "ar" ? "قيمنا" : "Our Values"}
          </h1>
          <p
            className="text-xl text-white animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {language === "ar"
              ? "سلوك إمداد مباشر - كشركة وكموظفين وكمواطنين - هو ما يميزها"
              : "Emdad Mubasher's conduct — as a company, as employees, and as citizens — is what sets it apart."}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                <p className="animate-fade-in-up text-lg">
                  {language === "ar"
                    ? "كل ما تقوم به إمداد مباشر يسترشد بقيمها المؤسسية الأساسية: السلامة والمواطنة والنزاهة والمسؤولية والتميز."
                    : "Everything Emdad Mubasher does is guided by its core corporate values: Safety, Citizenship, Integrity, Responsibility, and Excellence."}
                </p>

                <p
                  className="animate-fade-in-up text-lg"
                  style={{ animationDelay: "0.1s" }}
                >
                  {language === "ar"
                    ? "من خلال تطبيق هذه القيم والالتزام بممارسات الأعمال السليمة، تحقق إمداد مباشر باستمرار مستويات عالية من الأداء والكفاءة، مما يخلق قيمة أكبر للشركة وعملائها وشركائها والمجتمعات التي تخدمها."
                    : "By applying these values and adhering to sound business practices, Emdad Mubasher consistently achieves high levels of performance and efficiency, creating greater value for the company, its customers, its partners, and the communities it serves."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 rtl:space-x-reverse">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-emdad-navy mb-4">
                        {language === "ar" ? value.titleAr : value.titleEn}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {language === "ar" ? value.contentAr : value.contentEn}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
