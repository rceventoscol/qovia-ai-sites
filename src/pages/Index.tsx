
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import AIBusinessSection from '@/components/AIBusinessSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import PlansSection from '@/components/PlansSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <AIBusinessSection />
        <ProcessSection />
        <PortfolioSection />
        <PlansSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
