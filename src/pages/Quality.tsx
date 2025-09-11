
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

const Quality = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <QualityHero />
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
