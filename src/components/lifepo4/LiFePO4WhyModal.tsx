'use client';

import React from 'react';
import { HelpCircle, Shield, Clock, Zap, Recycle } from 'lucide-react';
import LiFePO4Modal from './LiFePO4Modal';

interface LiFePO4WhyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiFePO4WhyModal = ({ isOpen, onClose }: LiFePO4WhyModalProps) => {
  return (
    <LiFePO4Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Neden LiFePO4?"
      description="LiFePO4 bataryaların avantajları ve diğer teknolojilere göre üstünlükleri."
      gradient="from-cyan-600 to-blue-600"
      icon={<HelpCircle className="w-8 h-8 text-white" />}
    >
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          LiFePO4 bataryalar, birçok enerji depolama uygulaması için ideal seçenektir. Özellikle güneş 
          enerjisi sistemleri, elektrikli araçlar ve yedek güç sistemleri için tercih edilmelerinin 
          önemli nedenleri vardır.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                <Shield className="text-cyan-600" size={20} />
              </div>
              <h4 className="font-bold text-cyan-800">Yüksek Güvenlik</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Termal kararlılık ve yanma riskinin düşük olması sayesinde diğer lityum bataryalara göre 
              çok daha güvenlidir.
            </p>
          </div>
          
          <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                <Clock className="text-cyan-600" size={20} />
              </div>
              <h4 className="font-bold text-cyan-800">Uzun Ömür</h4>
            </div>
            <p className="text-gray-700 text-sm">
              2000-5000 şarj döngüsü ile diğer bataryalara göre 2-4 kat daha uzun kullanım ömrü sunar.
            </p>
          </div>
          
          <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                <Zap className="text-cyan-600" size={20} />
              </div>
              <h4 className="font-bold text-cyan-800">Hızlı Şarj</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Yüksek akım kapasitesi sayesinde hızlı şarj olabilir ve yüksek deşarj akımlarını destekler.
            </p>
          </div>
          
          <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                <Recycle className="text-cyan-600" size={20} />
              </div>
              <h4 className="font-bold text-cyan-800">Çevre Dostu</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Kobalt içermez, daha az toksik malzeme kullanır ve geri dönüştürülebilir yapıdadır.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 text-gray-700">
          <h4 className="font-bold text-blue-800 mb-3">Diğer Batarya Teknolojilerine Göre Karşılaştırma:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-blue-200">
                  <th className="py-2 text-left text-blue-700">Özellik</th>
                  <th className="py-2 text-left text-blue-700">LiFePO4</th>
                  <th className="py-2 text-left text-blue-700">Li-ion (NMC)</th>
                  <th className="py-2 text-left text-blue-700">Kurşun Asit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="py-2 font-medium">Döngü Ömrü</td>
                  <td className="py-2 text-green-600">2000-5000</td>
                  <td className="py-2">500-1500</td>
                  <td className="py-2">200-500</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2 font-medium">Güvenlik</td>
                  <td className="py-2 text-green-600">Çok Yüksek</td>
                  <td className="py-2">Orta</td>
                  <td className="py-2">Yüksek</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2 font-medium">Enerji Yoğunluğu</td>
                  <td className="py-2">90-160 Wh/kg</td>
                  <td className="py-2 text-green-600">150-250 Wh/kg</td>
                  <td className="py-2">30-50 Wh/kg</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Maliyet</td>
                  <td className="py-2">Orta-Yüksek</td>
                  <td className="py-2">Yüksek</td>
                  <td className="py-2 text-green-600">Düşük</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LiFePO4Modal>
  );
};

export default LiFePO4WhyModal;
