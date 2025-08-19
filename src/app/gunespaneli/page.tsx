'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolarPhotoSwiper from '@/components/solar/SolarPhotoSwiper';
import SolarTypesSection from '@/components/solar/SolarTypesSection';

export default function GunesPaneliPage() {
  return (
    <div className="relative   min-h-screen">
      <Navbar />
      
      <main className="">
        {/* Photo Swiper Section with Integrated Info */}
        <SolarPhotoSwiper />

        {/* Solar Types & Description */}
        <SolarTypesSection />
      </main>
      
      <Footer />
    </div>
  );
}
