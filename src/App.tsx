import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PreviewSection } from '@/components/sections/preview-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { CTASection } from '@/components/sections/cta-section';

function App() {
  useEffect(() => {
    document.title = "LockIn - AI Productivity Assistant";
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <PreviewSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;