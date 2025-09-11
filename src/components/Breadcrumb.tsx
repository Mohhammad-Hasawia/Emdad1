import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
  const location = useLocation();
  const { t, language } = useLanguage();

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const getBreadcrumbName = (pathname: string) => {
    const breadcrumbMap: { [key: string]: string } = {
      'about': t('nav.about'),
      'services': t('nav.services'),
      'activities': t('nav.activities'),
      'safety': t('nav.safety'),
      'quality': t('nav.quality'),
      'sustainability': t('nav.sustainability'),
      'corporate-governance': t('nav.corporateGovernance'),
      'ethics-governance': language === 'ar' ? 'الأخلاق والحوكمة' : 'Ethics and Governance',
      'our-values': language === 'ar' ? 'قيمنا' : 'Our Values',
      'contact': t('nav.contact'),
      'faq': t('nav.faq'),
    };
    
    return breadcrumbMap[pathname] || pathname;
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200/50 mt-16 lg:mt-20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-600 hover:text-emdad-gold transition-colors duration-200 font-medium"
          >
            <Home className="w-4 h-4" />
            <span>{t('nav.home')}</span>
          </Link>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <div key={pathname} className="flex items-center space-x-2 rtl:space-x-reverse">
                <ChevronRight 
                  className={`w-4 h-4 text-gray-400 ${language === 'ar' ? 'rotate-180' : ''}`} 
                />
                {isLast ? (
                  <span className="text-emdad-gold font-semibold bg-emdad-gold/10 px-3 py-1 rounded-full">
                    {getBreadcrumbName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-emdad-gold transition-colors duration-200 font-medium hover:underline"
                  >
                    {getBreadcrumbName(pathname)}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}