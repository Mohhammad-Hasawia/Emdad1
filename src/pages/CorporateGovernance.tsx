import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Building2, Users, FileText, ArrowRight } from "lucide-react";

export default function CorporateGovernance() {
  const { language } = useLanguage();

  const governanceCards = [
    {
      icon: Building2,
      titleEn: "Ethics and Governance",
      titleAr: "الأخلاق والحوكمة",
      descriptionEn:
        "The company upholds the highest business standards by adhering to the highest personal and professional principles.",
      descriptionAr:
        "تلتزم الشركة بأعلى معايير الأعمال من خلال الالتزام بأعلى المبادئ الشخصية والمهنية.",
      href: "/ethics-governance",
    },
    {
      icon: Users,
      titleEn: "Our Values",
      titleAr: "قيمنا",
      descriptionEn:
        "Emdad's conduct — as a company, as employees, and as citizens — is what sets it apart.",
      descriptionAr: "سلوك امداد - كشركة وكموظفين وكمواطنين - هو ما يميزها.",
      href: "/our-values",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {language === "ar" ? "الحوكمة المؤسسية" : "Corporate Governance"}
          </h1>

          <p
            className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {language === "ar"
              ? "معايير استثنائية .. أداء استثنائي"
              : "Exceptional Standards .. Exceptional Performance."}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                <p className="animate-fade-in-up text-lg">
                  {language === "ar"
                    ? "يحدد إطار الحوكمة الشامل والواسع للشركة هويتنا وكيف ينظر إلينا العالم الخارجي. إنه بمثابة البوصلة التي توجه عمليات الشركة وتضمن التزامنا بأعلى المعايير المهنية والأخلاقية."
                    : "The company's comprehensive and overarching governance framework defines our identity and how the outside world views us. It serves as the compass that guides the company's operations and ensures our commitment to the highest professional and ethical standards."}
                </p>

                <p
                  className="animate-fade-in-up text-lg"
                  style={{ animationDelay: "0.2s" }}
                >
                  {language === "ar"
                    ? "يضمن هيكل الحوكمة القوي الشفافية والرقابة الفعالة والمساءلة عبر جميع مستويات عملياتنا - من الخبرات المتنوعة لمجلس إدارتنا وفريق الإدارة العليا إلى إجراءات التقارير الروتينية والمراجعات المستقلة."
                    : "A strong governance structure ensures transparency, effective oversight, and accountability across all levels of our operations — from the diverse expertise of our Board of Directors and senior management team to routine reporting procedures and independent audits."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {governanceCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-emdad-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <card.icon className="w-8 h-8 text-emdad-gold" />
                    </div>

                    <h3 className="text-2xl font-bold text-emdad-navy text-center mb-4">
                      {language === "ar" ? card.titleAr : card.titleEn}
                    </h3>

                    <p className="text-gray-600 text-center leading-relaxed mb-6">
                      {language === "ar"
                        ? card.descriptionAr
                        : card.descriptionEn}
                    </p>

                    <div className="text-center">
                      <Button
                        className="bg-emdad-gold hover:bg-yellow-500 text-white transition-all duration-200 inline-flex items-center"
                        onClick={() => (window.location.href = card.href)}
                      >
                        {language === "ar" ? "اقرأ المزيد" : "Read More"}
                        <ArrowRight
                          className={`w-4 h-4 ${
                            language === "ar" ? "mr-2 rotate-180" : "ml-2"
                          }`}
                        />
                      </Button>
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
