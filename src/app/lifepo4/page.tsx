'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiFePO4NewPage from '@/components/lifepo4/LiFePO4NewPage';

export default function LiFePO4Page() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <LiFePO4NewPage />
      </main>
      
      <Footer />
    </div>
  );
}