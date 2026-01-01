import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoffeeSection } from '@/components/CoffeeSection';
import { StrengthsSection } from '@/components/StrengthsSection';
import { OperationsSection } from '@/components/OperationsSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { ProgressSection } from '@/components/ProgressSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoffeeSection />
        <StrengthsSection />
        <OperationsSection />
        <SustainabilitySection />
        <ProgressSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
