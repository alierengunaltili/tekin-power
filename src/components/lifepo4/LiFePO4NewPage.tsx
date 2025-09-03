'use client';

import React from 'react';
import LiFePO4IntroSection from './LiFePO4IntroSection';
import LiFePO4BatterySection from './LiFePO4BatterySection';

const LiFePO4NewPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Introduction Section with Dynamic Background */}
      <LiFePO4IntroSection />

      {/* Battery Sections */}
      <LiFePO4BatterySection />
    </div>
  );
};

export default LiFePO4NewPage;
