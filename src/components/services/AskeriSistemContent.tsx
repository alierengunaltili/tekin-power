'use client';

import Image from 'next/image';
import { askeri_sistem_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/askeri-sistem';

interface AskeriSistemContentProps {
  gradient: string;
}

const AskeriSistemContent = ({ gradient }: AskeriSistemContentProps) => {
  const contentSections = [
    {
      title: 'Askeri Sistem Uygulamalarında LiFEPO4 Batarya ve Enerji Çözümlerimiz',
      content: `
Modern savunma sistemlerinde enerji yönetimi kritik bir öneme sahiptir. Askeri araçlar ve platformlar, güvenilir ve uzun ömürlü enerji çözümlerine ihtiyaç duymaktadır. LiFePO4 (Lityum Demir Fosfat) batarya teknolojisi, geleneksel enerji kaynaklarına göre üstün avantajlar sunarak askeri uygulamalarda tercih edilmektedir. Tekin Power Energy, bu teknolojiyi savunma sanayisindeki helikopterler, savaş gemileri ve tanklar gibi platformlara entegre etmektedir.
      `,
      hasImage: false
    },
    {
      title: 'LiFePO4 Bataryaların Askeri Uygulamalardaki Avantajları',
      content: `
1. Güvenlik ve Stabilite: LiFePO4 bataryalar, yüksek sıcaklık ve zorlu çalışma koşullarında güvenli çalışma sağlar.

2. Uzun Ömür: 6.000-10.000 şarj döngüsü sunarak lojistik maliyetleri düşürür ve operasyonel sürekliliği sağlar.

3. Hafiflik ve Kompakt Tasarım: Platformların ağırlık yükünü azaltırken, daha fazla ekipman taşıma kapasitesi sunar.

4. Düşük Bakım Gereksinimi: Geleneksel bataryalara kıyasla daha az bakım gerektirerek operasyonel avantaj sağlar.
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Tekin Power Energy\'nin Savunma Sanayisine Katkıları',
      content: `
Tekin Power Energy, savunma sanayisindeki enerji ihtiyaçları için özelleştirilmiş LiFePO4 çözümleri sunmaktadır:

1. Helikopter Uygulamaları: Yüksek enerji yoğunluğuna sahip, hızlı şarj olabilen batarya sistemleri ile kritik elektronik sistemlerin kesintisiz çalışmasını sağlar.

2. Savaş Gemileri: Deniz koşullarına dayanıklı, yüksek kapasiteli bataryalar ile radar ve silah sistemlerinin enerji ihtiyacını karşılar.

3. Tank Sistemleri: Şok ve titreşime dayanıklı bataryalar ile motor çalıştırma, haberleşme ve elektronik savunma sistemleri için güvenilir enerji sağlar.
      `,
      hasImage: false
    },
    {
      title: 'Teknoloji ve İnovasyon',
      content: `
Tekin Power Energy, müşterilerine özel projelendirme ve entegrasyon hizmetleri sunmaktadır. Askeri standartlara uygun üretim süreçleri ve test prosedürleriyle, bataryaların güvenilirliği ve dayanıklılığı en üst düzeye çıkarılmaktadır.

Türkiye'nin yerli ve milli savunma sanayisine katkı sağlama misyonu doğrultusunda Ar-Ge çalışmalarına yatırım yapılmakta, ürünlerin saha şartlarına uygunluğu kapsamlı testlerle doğrulanmaktadır.
      `,
      hasImage: false
    },
    {
      title: 'Sürdürülebilir Savunma Çözümleri',
      content: `
LiFePO4 batarya teknolojisi, savunma sanayisinde enerji yönetimi ve sürdürülebilirlik açısından büyük potansiyel taşımaktadır. Tekin Power Energy, geniş bir yelpazede sunduğu çözümlerle operasyonel verimliliği artırırken, savunma sanayisinin geleceğine yön vermektedir.

Teknolojik bilgi birikimi ve alanında öncü projeleriyle, askeri uygulamalarda güvenilir, verimli ve çevreci enerji çözümleri sunulmaktadır.
      `,
      hasImage: false
    }
  ];

  return (
    <section className="content-section py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {contentSections.map((section, index) => (
            <div key={index} className="content-item bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Banner Header */}
              <div className={`bg-gradient-to-r ${gradient} py-8 px-6 lg:px-12`}>
                <div className="max-w-7xl mx-auto">
                  <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="py-12 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                  {/* Main Content */}
                  <div className="mb-10">
                    <p
                      className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                  
                  {/* Full Width Image Below Content */}
                  {section.hasImage && section.imageKey && (
                    <div className="w-full">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={askeri_sistem_photo_mapping[section.imageKey as keyof typeof askeri_sistem_photo_mapping]}
                          alt="Askeri Sistem LiFePO4 Batarya"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskeriSistemContent;
