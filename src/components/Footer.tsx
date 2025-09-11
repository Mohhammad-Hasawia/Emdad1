import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();

  const footerLinks = [
    { key: 'footer.home', href: '/' },
    { key: 'footer.about', href: '/about' },
    { key: 'footer.services', href: '/services' },
    { key: 'footer.activities', href: '/activities' },
    { key: 'footer.safety', href: '/safety' },
    { key: 'footer.quality', href: '/quality' },
    { key: 'footer.sustainability', href: '/sustainability' },
    { key: 'footer.contact', href: '/contact' },
    { key: 'footer.faq', href: '/faq' },
  ];

  return (
    <>
      {/* Footer Separator - Visual break from content above */}
      <div className="h-8 bg-gradient-to-b from-gray-50 to-emdad-navy"></div>
      
      <footer className="bg-emdad-navy pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className={`grid gap-8 mb-12 ${language === 'ar' ? 'md:grid-cols-4 lg:grid-cols-4' : 'md:grid-cols-4'}`}>
              {/* Logo and Description - Responsive adjustments */}
              <div className={`${language === 'ar' ? 'md:col-span-4 lg:col-span-2 order-1' : 'md:col-span-2'}`}>
                <div className={`flex items-center justify-center md:justify-start mb-6`}>
                  <img 
                    src="/img/EMDAD just.png" 
                    alt="Emdad Mubasher Direct Logistics" 
                    className="h-16 w-auto object-contain"
                  />
                  <span className="text-white font-bold text-lg md:text-xl ml-3">{language === 'ar' ? 'إمداد مباشر' : 'Emdad Mubasher'}</span>

                </div>
                
                <p className={`text-gray-300 leading-relaxed mb-6 arabic-text ${language === 'ar' ? 'text-center md:text-right' : ''}`}>
                  {t('footer.description')}
                </p>
                
                <div className={`flex space-x-3 md:space-x-4 ${language === 'ar' ? 'justify-center md:justify-start' : ''}`}>
                  <a 
                    href="https://facebook.com/emdadmubasher-syria" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-emdad-gold rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Facebook className="text-white" size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/company/emdadmubasher-syria" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-emdad-gold rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/emdadmubasher_syria" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-emdad-gold rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Twitter className="text-white" size={20} />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className={`${language === 'ar' ? 'order-2 text-center md:text-right' : ''} mt-8 md:mt-0`}>
                <h3 className="text-emdad-gold font-semibold text-lg mb-6">{t('footer.quickLinks')}</h3>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.key}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {t(link.key)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className={`${language === 'ar' ? 'order-3 text-center md:text-right' : ''} mt-8 md:mt-0`}>
                <h3 className="text-emdad-gold font-semibold text-lg mb-6">{t('footer.contactInfo')}</h3>
                <div className="space-y-4">
                  <div className={`flex items-center space-x-3 ${language === 'ar' ? 'justify-center md:justify-end' : ''}`}>
                    <Mail className="text-emdad-gold" size={20} />
                    <span className="text-gray-300">info@emdadmubasher.sy</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${language === 'ar' ? 'justify-center md:justify-end' : ''}`}>
                    <Phone className="text-emdad-gold" size={20} />
                    <span className="text-gray-300">+963 938882888</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  {t('footer.copyright')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}