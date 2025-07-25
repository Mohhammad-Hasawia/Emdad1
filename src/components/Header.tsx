import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // لتغيير خلفية النافبار عند التمرير أكثر من 50 بكسل
      setIsScrolled(currentScrollY > 50);

      // إخفاء النافبار عند النزول، وإظهارها عند الصعود
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // اختفاء
      } else {
        setShowHeader(true);  // ظهور
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (href: string) => {
    switch (href) {
      case 'about':
        navigate('/about');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'quality':
        navigate('/quality');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'services':
        navigate('/services');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'activities':
        navigate('/activities');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'safety':
        navigate('/safety');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'contact':
        navigate('/contact');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      case 'faq':
        navigate('/faq');
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      default:
        navigate('/');
        setTimeout(() => {
          if (href && document.getElementById(href)) {
            document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const navItems = [
    { key: 'nav.about', href: 'about' },
    { key: 'nav.services', href: 'services' },
    { key: 'nav.activities', href: 'activities' },
    { key: 'nav.safety', href: 'safety' },
    { key: 'nav.quality', href: 'quality' },
    { key: 'nav.contact', href: 'contact' },
    { key: 'nav.faq', href: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? 'bg-emdad-navy shadow-lg' : 'bg-transparent'
      } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/img/emdadlogo.png"
              alt="EMDAD Direct Logistics"
              className="h-12 w-auto object-contain"
            />
            <span className="text-white font-bold text-xl">EMDAD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-emdad-gold transition-colors duration-200"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-emdad-gold transition-colors duration-200 font-medium"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* CTA Button */}
            <Button
              className="bg-emdad-gold hover:bg-yellow-500 text-white hidden sm:inline-flex"
              size="sm"
            >
              {t('nav.cta')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-emdad-gold transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-emdad-gold transition-colors duration-200 text-left"
                >
                  {t(item.key)}
                </button>
              ))}
              <Button
                className="bg-emdad-gold hover:bg-yellow-500 text-white mt-4 w-full sm:hidden"
                size="sm"
              >
                {t('nav.cta')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
