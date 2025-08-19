'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiFePO4Hero from '@/components/lifepo4/LiFePO4Hero';
import LiFePO4PhotoSwiper from '@/components/lifepo4/LiFePO4PhotoSwiper';

export default function LiFePO4Page() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with Info Buttons */}
        <LiFePO4Hero />
        
        {/* Kullanım Alanları PhotoSwiper */}
        <LiFePO4PhotoSwiper />
      </main>
      
      <Footer />
    </div>
  );
}