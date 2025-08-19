'use client';

import React from 'react';
import { Battery, Check } from 'lucide-react';
import LiFePO4Modal from './LiFePO4Modal';

interface LiFePO4WhatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiFePO4WhatModal = ({ isOpen, onClose }: LiFePO4WhatModalProps) => {
  return (
    <LiFePO4Modal
      isOpen={isOpen}
      onClose={onClose}
      title="LiFePO4 Nedir?"
      description="Lityum Demir Fosfat (LiFePO4) batarya teknolojisi hakkında detaylı bilgi."
      gradient="from-blue-600 to-cyan-600"
      icon={<Battery className="w-8 h-8 text-white" />}
    >
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Lityum Demir Fosfat (LiFePO4) bataryalar, lityum-iyon batarya ailesinin bir üyesidir. 
          Katot malzemesi olarak lityum demir fosfat kullanan bu bataryalar, yüksek güvenlik, 
          uzun ömür ve termal kararlılık özellikleriyle öne çıkar.
        </p>
        
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-gray-700">
          <h4 className="font-bold text-blue-800 mb-3">Teknik Özellikler:</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="text-blue-600 mr-2 flex-shrink-0" size={18} />
              <span>Nominal Voltaj: 3.2V/hücre</span>
            </li>
            <li className="flex items-center">
              <Check className="text-blue-600 mr-2 flex-shrink-0" size={18} />
              <span>Enerji Yoğunluğu: 90-160 Wh/kg</span>
            </li>
            <li className="flex items-center">
              <Check className="text-blue-600 mr-2 flex-shrink-0" size={18} />
              <span>Döngü Ömrü: 2000-5000 döngü</span>
            </li>
            <li className="flex items-center">
              <Check className="text-blue-600 mr-2 flex-shrink-0" size={18} />
              <span>Çalışma Sıcaklığı: -20°C ile 60°C arası</span>
            </li>
            <li className="flex items-center">
              <Check className="text-blue-600 mr-2 flex-shrink-0" size={18} />
              <span>Kendi Kendine Deşarj: Aylık %3&apos;ten az</span>
            </li>
          </ul>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          LiFePO4 bataryalar, kimyasal yapıları sayesinde termal kaçak riskini minimize eder ve 
          diğer lityum-iyon bataryalara göre daha yüksek güvenlik profili sunar. Ayrıca, yüksek 
          akım kapasitesi ve hızlı şarj özellikleri ile güneş enerjisi depolama sistemleri için 
          ideal bir seçenektir.
        </p>
      </div>
    </LiFePO4Modal>
  );
};

export default LiFePO4WhatModal;
