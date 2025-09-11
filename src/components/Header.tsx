import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);

      // ScrollSpy functionality
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentScrollY >= sectionTop - 200 && currentScrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (href: string) => {
    switch (href) {
      case "about":
      case "quality":
      case "services":
      case "activities":
      case "safety":
      case "sustainability":
      case "corporate-governance":
      case "contact":
      case "faq":
        navigate(`/${href}`);
        setTimeout(() => window.scrollTo(0, 0), 100);
        break;
      default:
        navigate("/");
        setTimeout(() => {
          if (href && document.getElementById(href)) {
            document
              .getElementById(href)
              ?.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const isActiveLink = (href: string) => {
    if (href === '') {
      return location.pathname === '/';
    }
    return location.pathname === `/${href}` || activeSection === href;
  };

  const navItems = [
    { key: "nav.home", href: "" },
    { key: "nav.about", href: "about" },
    { key: "nav.quality", href: "quality" },
    { key: "nav.sustainability", href: "sustainability" },
    { key: "nav.corporateGovernance", href: "corporate-governance" },
    { key: "nav.contact", href: "contact" },
    { key: "nav.faq", href: "faq" },
  ];

  const aboutDropdownItems = [
    { key: "nav.activities", href: "activities" },
    { key: "nav.services", href: "services" },
    { key: "nav.safety", href: "safety" },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-emdad-navy/95 backdrop-blur-lg shadow-xl border-b border-emdad-gold/20"
            : "bg-transparent"
        } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo + Text */}
            <div
              className={`flex items-center cursor-pointer gap-3 ${
                language === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
              onClick={handleLogoClick}
            >
              <img
                src="/img/EMDAD just.png"
                alt="EMDAD Direct Logistics"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
              />
              <span
                className="text-lg md:text-xl lg:text-2xl font-bold text-emdad-gold italic tracking-wide hidden sm:inline bg-gradient-to-r from-emdad-gold to-yellow-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {language === "ar" ? "إمداد مباشر" : "Emdad Mubasher"}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Home Button */}
              <button
                onClick={() => handleNavigation("")}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActiveLink("")
                    ? "text-emdad-gold bg-emdad-gold/10 shadow-lg"
                    : "text-white hover:text-emdad-gold hover:bg-white/5"
                } after:content-[''] after:absolute after:w-0 after:h-[3px]
                after:bg-gradient-to-r after:from-emdad-gold after:to-yellow-400
                after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300 ${
                  language === "ar" ? "ml-6" : ""
                }`}
              >
                {t("nav.home")}
              </button>

              {/* About Dropdown */}
              <div className={`relative group ${language === "ar" ? "ml-6" : ""}`}>
                <button
                  onClick={() => handleNavigation("about")}
                  className={`relative px-3 py-2 rounded-lg font-medium flex items-center gap-1 transition-all duration-300 transform hover:scale-105 ${
                    isActiveLink("about") || aboutDropdownItems.some(item => isActiveLink(item.href))
                      ? "text-emdad-gold bg-emdad-gold/10 shadow-lg"
                      : "text-white hover:text-emdad-gold hover:bg-white/5"
                  } after:content-[''] after:absolute after:w-0 after:h-[3px]
                  after:bg-gradient-to-r after:from-emdad-gold after:to-yellow-400
                  after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300`}
                >
                  {t("nav.about")}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full ${
                    language === "ar" ? "right-0" : "left-0"
                  } mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50`}
                >
                  <div className="py-3">
                    {aboutDropdownItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => handleNavigation(item.href)}
                        className={`relative block w-full text-left px-4 py-3 font-medium transition-all duration-200 hover:bg-emdad-gold/10 hover:translate-x-1 ${
                          isActiveLink(item.href)
                            ? "text-emdad-gold bg-emdad-gold/5 border-r-2 border-emdad-gold"
                            : "text-gray-700 hover:text-emdad-gold"
                        }`}
                      >
                        {t(item.key)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Navigation Items */}
              {navItems.slice(2).map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActiveLink(item.href)
                      ? "text-emdad-gold bg-emdad-gold/10 shadow-lg"
                      : "text-white hover:text-emdad-gold hover:bg-white/5"
                  } after:content-[''] after:absolute after:w-0 after:h-[3px]
                  after:bg-gradient-to-r after:from-emdad-gold after:to-yellow-400
                  after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300 ${
                    language === "ar" ? "ml-6" : ""
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>

            {/* Language toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg font-medium text-white hover:text-emdad-gold hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-emdad-gold/50"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:text-emdad-gold hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-emdad-gold/30 animate-slideDown bg-emdad-navy/95 backdrop-blur-lg rounded-b-xl shadow-2xl">
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <button
                  onClick={() => handleNavigation("")}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                    isActiveLink("")
                      ? "text-emdad-gold bg-emdad-gold/10"
                      : "text-white hover:text-emdad-gold hover:bg-white/5"
                  }`}
                >
                  {t("nav.home")}
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                    isActiveLink("about")
                      ? "text-emdad-gold bg-emdad-gold/10"
                      : "text-white hover:text-emdad-gold hover:bg-white/5"
                  }`}
                >
                  {t("nav.about")}
                </button>
                <div className="pl-4 space-y-1 border-l-2 border-emdad-gold/30 ml-4">
                  {aboutDropdownItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.href)}
                      className={`block w-full px-4 py-2 rounded-lg font-medium text-left transition-all duration-200 ${
                        isActiveLink(item.href)
                          ? "text-emdad-gold bg-emdad-gold/10"
                          : "text-white/80 hover:text-emdad-gold hover:bg-white/5"
                      }`}
                    >
                      {t(item.key)}
                    </button>
                  ))}
                </div>
                {navItems.slice(2).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
                    className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                      isActiveLink(item.href)
                        ? "text-emdad-gold bg-emdad-gold/10"
                        : "text-white hover:text-emdad-gold hover:bg-white/5"
                    }`}
                  >
                    {t(item.key)}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

    </>
  );
}
