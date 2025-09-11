
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QualityHero } from '@/components/quality/QualityHero';
import { QualityEfficiency } from '@/components/quality/QualityEfficiency';
import { QualityStandards } from '@/components/quality/QualityStandards';
import { QualityProfessionalism } from '@/components/quality/QualityProfessionalism';
import { QualityPolicy } from '@/components/quality/QualityPolicy';
import { QualityCertifications } from '@/components/quality/QualityCertifications';
import { QualitySafety } from '@/components/quality/QualitySafety';
import { QualityNumbers } from '@/components/quality/QualityNumbers';
import { Breadcrumb } from '@/components/Breadcrumb';

const Quality = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <QualityHero />
        {/* Breadcrumb overlay on hero */}
        <div className="absolute top-20 left-0 right-0 z-20">
          <Breadcrumb className="py-4" />
        </div>
      </div>
      <QualityEfficiency />
      <QualityStandards />
      <QualityProfessionalism />
      <QualityPolicy />
      <QualityCertifications />
      <QualitySafety />
      <QualityNumbers />
      <Footer />
    </div>
  );
};

export default Quality;
