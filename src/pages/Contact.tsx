import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Smartphone,
  FileText,
  Printer,
} from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/contact.jfif')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Mail className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 animate-fade-in-up">
            {t("contact.hero.title")}
          </h1>
          <p
            className="text-xl text-white animate-fade-in-up arabic-text"
            style={{ animationDelay: "0.2s" }}
          >
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-emdad-navy mb-6 text-center arabic-text">
                  {t("contact.info.title")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Smartphone className="w-6 h-6 text-emdad-gold" />
                      <span
                        className="text-gray-700 font-medium text-center"
                        dir="ltr"
                      >
                        {t("contact.info.mobile")}
                      </span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Printer className="w-6 h-6 text-emdad-gold" />
                      <div className="text-center">
                        <p className="text-gray-700" dir="ltr">
                          {t("contact.info.fax1")}
                        </p>
                        <p className="text-gray-700" dir="ltr">
                          {t("contact.info.fax2")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                      <PhoneCall className="w-6 h-6 text-emdad-gold" />
                      <span
                        className="text-gray-700 font-medium text-center"
                        dir="ltr"
                      >
                        {t("contact.info.landline")}
                      </span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Mail className="w-6 h-6 text-emdad-gold" />
                      <span className="text-gray-700 text-center">
                        {t("contact.info.email")}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-emdad-navy mb-6 arabic-text">
                  <Clock className="w-6 h-6 text-emdad-gold inline mr-2" />
                  {t("contact.hours.title")}
                </h3>
                <div className="space-y-2 text-gray-700 arabic-text">
                  <p>{t("contact.hours.weekdays")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-emdad-navy mb-6 text-center arabic-text">
                  <MapPin className="w-6 h-6 text-emdad-gold inline mr-2" />
                  {t("contact.location.title")}
                </h2>

                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.194048980515!2d36.2567677!3d33.3813401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151921890b06c501%3A0x15b99d45ef042d28!2zQWxhYmlkIGZ1ZWwgc3RhdGlvbiDigJMg2YjZhiDYp9mE2YHZitmF2Kkg2KfZhNiz2LPYqSDYp9mE2YbZiiDZhNmE2KfZhA!5e0!3m2!1sar!2s!4v1721385104721!5m2!1sar!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("contact.map.title")}
                    className="rounded-lg shadow-md"
                  />
                  <div className="text-center mt-4">
                    <a
                      href="https://www.google.com/maps/place/Alabid+fuel+station+%D9%83%D8%A7%D8%B2%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D8%A7%D8%A8%D8%AF%E2%80%AD/@33.3883283,36.26063,16.5z/data=!4m6!3m5!1s0x151921890b06c501:0x15b99d45ef042d28!8m2!3d33.3813401!4d36.2567677!16s%2Fg%2F11h81j0w14?hl=ar&entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emdad-gold hover:text-yellow-500 text-lg font-medium underline inline-flex items-center"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      {t("contact.map.viewLarger")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
