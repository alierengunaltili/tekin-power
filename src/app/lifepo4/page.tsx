'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiFePO4NewHero from '@/components/lifepo4/LiFePO4NewHero';
import LiFePO4CatalogSection from '@/components/lifepo4/LiFePO4CatalogSection';

export default function LiFePO4Page() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        {/* New Combined Hero Section with all elements */}
        <LiFePO4NewHero />
        <LiFePO4CatalogSection />
      </main>
      
      <Footer />
    </div>
  );
}