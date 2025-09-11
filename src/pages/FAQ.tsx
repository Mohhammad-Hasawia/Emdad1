
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    },
    {
      question: t('faq.question6'),
      answer: t('faq.answer6')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-emdad-navy">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <HelpCircle className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
         <h1 className="heading-page font-bold 
  bg-gradient-to-r from-emdad-gold via-yellow-400 to-emdad-gold 
  bg-clip-text text-transparent 
  mb-4 md:mb-6 leading-tight arabic-text">
            {t('faq.hero.title')}
          </h1>
          <p className="body-large text-white animate-fade-in-up arabic-text leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('faq.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="heading-card font-semibold text-emdad-navy pr-4 arabic-text">
                        {item.question}
                      </h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-emdad-gold flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emdad-gold flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed arabic-text body-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <Card className="bg-emdad-navy text-white p-8">
                <CardContent className="pt-0">
                  <h3 className="heading-subsection font-bold text-emdad-gold mb-4 arabic-text">
                    {t('faq.stillQuestions')}
                  </h3>
                  <p className="body-base mb-6 arabic-text">
                    {t('faq.contactUs')}
                  </p>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-emdad-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 body-base"
                  >
                    {t('faq.contactButton')}
                  </button>
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
