'use client';

import React from 'react';
import { MapPin, Check } from 'lucide-react';
import LiFePO4Modal from './LiFePO4Modal';

interface LiFePO4WhereModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiFePO4WhereModal = ({ isOpen, onClose }: LiFePO4WhereModalProps) => {
  return (
    <LiFePO4Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Kullanım Alanları"
      description="LiFePO4 bataryaların kullanıldığı sektörler ve uygulamalar."
      gradient="from-blue-600 to-cyan-600"
      icon={<MapPin className="w-8 h-8 text-white" />}
    >
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          LiFePO4 bataryalar, güvenlik, uzun ömür ve yüksek performans özellikleri sayesinde birçok 
          farklı sektörde ve uygulamada tercih edilmektedir.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-800 text-lg mb-3">Yenilenebilir Enerji</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Güneş enerjisi depolama sistemleri</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Rüzgar enerjisi depolama</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Mikro şebekeler ve ada tipi sistemler</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-800 text-lg mb-3">Elektrikli Araçlar</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Elektrikli otomobiller ve otobüsler</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Golf arabaları ve forkliftler</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Elektrikli bisikletler ve scooterlar</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-800 text-lg mb-3">Denizcilik Uygulamaları</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Tekne ve yat güç sistemleri</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Deniz fenerleri ve şamandıralar</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Deniz taşıtları için yedek güç sistemleri</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-800 text-lg mb-3">Telekomünikasyon ve UPS</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Baz istasyonları için yedek güç</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Kesintisiz güç kaynakları (UPS)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">Veri merkezleri için enerji depolama</span>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          LiFePO4 bataryalar, özellikle uzun ömür ve yüksek güvenlik gerektiren kritik uygulamalarda 
          tercih edilmektedir. Tekin Power olarak, tüm bu sektörlere özel çözümler sunmaktayız.
        </p>
      </div>
    </LiFePO4Modal>
  );
};

export default LiFePO4WhereModal;
