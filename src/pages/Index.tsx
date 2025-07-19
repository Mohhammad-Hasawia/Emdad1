
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CardsSection } from '@/components/CardsSection';
import { InteractiveSlider } from '@/components/InteractiveSlider';
import { AboutSection } from '@/components/AboutSection';
import { WhatWeRepresentSection } from '@/components/WhatWeRepresentSection';
import { NumbersSection } from '@/components/NumbersSection';
import { WhyJotecSection } from '@/components/WhyJotecSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CardsSection />
      <InteractiveSlider />
      <AboutSection />
      <WhatWeRepresentSection />
      <NumbersSection />
      <WhyJotecSection />
      <Footer />
    </div>
  );
};

export default Index;
