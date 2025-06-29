
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PainPointSection } from '../components/PainPointSection';
import { SolutionSection } from '../components/SolutionSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { OfferSection } from '../components/OfferSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-landing-bg font-poppins">
      <HeroSection />
      <PainPointSection />
      <SolutionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Index;
