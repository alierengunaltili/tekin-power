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
<b>LiFePO4 Batarya Teknolojisinin Askeri Uygulamalardaki Önemi ve Tekin Power Energy'nin Katkıları</b><br/><br/>

Gelişen teknoloji, modern savunma sistemlerinde enerji yönetimini kritik bir öncelik haline getirmiştir. Askeri araçlar, sistemler ve platformlar, güvenilir, verimli ve uzun ömürlü enerji çözümlerine olan ihtiyaç doğrultusunda dönüşüm geçirmektedir. Bu bağlamda LiFePO4 (Lityum Demir Fosfat) batarya teknolojisi, geleneksel enerji kaynaklarına göre üstün avantajlar sunarak askeri uygulamalarda devrim yaratmaktadır. Tekin Power Energy, Türkiye merkezli bir enerji çözüm şirketi olarak, bu teknolojiyi savunma sanayisindeki kritik araçlar olan helikopterler, savaş gemileri ve tanklar gibi platformlara entegre etmeye yönelik yenilikçi çalışmalar yürütmektedir.
      `,
      hasImage: false
    },
    {
      title: 'LiFePO4 Bataryaların Askeri Uygulamalardaki Avantajları',
      content: `
<b>1. Güvenlik ve Stabilite:</b><br/>
LiFePO4 bataryalar, termal kararlılıkları ve kimyasal yapıları sayesinde, yüksek sıcaklık ve zorlu çalışma koşullarında bile güvenli bir şekilde çalışır. Bu özellik, özellikle savaş gemileri, helikopterler ve tanklar gibi yoğun operasyonel gereksinimlere sahip platformlarda kritik bir öneme sahiptir.<br/><br/>

<b>2. Uzun Ömür ve Dayanıklılık:</b><br/>
LiFePO4 bataryalar, 6.000 ila 10.000 şarj-deşarj döngüsü sunarak uzun süreli kullanım sağlar. Askeri operasyonlarda bu, lojistik maliyetlerin düşürülmesi ve operasyonel sürekliliğin sağlanması anlamına gelir.<br/><br/>

<b>3. Hafiflik ve Kompakt Tasarım:</b><br/>
LiFePO4 bataryaların hafif ve kompakt yapısı, platformların ağırlık yükünü azaltırken, daha fazla ekipman veya mühimmat taşıma kapasitesi sunar.<br/><br/>

<b>4. Çevresel Uyum ve Düşük Bakım Gereksinimi:</b><br/>
Geleneksel kurşun-asit bataryalara kıyasla daha çevreci olan LiFePO4, uzun süre bakım gerektirmemesiyle de askeri operasyonlar için büyük bir avantaj oluşturur.
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Tekin Power Energy\'nin Savunma Sanayisine Katkıları',
      content: `
Tekin Power Energy, savunma sanayisindeki enerji ihtiyaçlarını karşılamak üzere LiFePO4 teknolojisini özelleştirilmiş çözümler halinde sunmaktadır. Şirketin bu alandaki başlıca çalışmaları şunlardır:<br/><br/>

<b>1. Helikopterlerde Kullanım:</b><br/>
Askeri helikopterler, zorlu hava ve arazi koşullarında enerjiye bağımlıdır. Tekin Power Energy, helikopterler için yüksek enerji yoğunluğuna sahip, hızlı şarj olabilen ve uzun süreli güç sağlayan batarya sistemleri geliştirmektedir. Bu bataryalar, uçuş sırasında kritik elektronik sistemlerin kesintisiz çalışmasını sağlarken, bakım süreçlerini de kolaylaştırmaktadır.<br/><br/>

<b>2. Savaş Gemilerinde Kullanım:</b><br/>
Savaş gemileri, denizlerde operasyonel üstünlük sağlamak için radar sistemlerinden silah sistemlerine kadar yüksek enerji gereksinimleri duyar. Tekin Power Energy, gemilerin enerji sistemlerinde kullanılmak üzere deniz koşullarına dayanıklı, yüksek kapasiteli ve uzun ömürlü LiFePO4 bataryalar tasarlamaktadır. Ayrıca, bu bataryalar enerji verimliliğini artırarak gemilerin görev sürekliliğine katkı sağlar.<br/><br/>

<b>3. Tanklarda Kullanım:</b><br/>
Tanklar, kara savaşlarında zorlu çevre koşullarında üstün performans göstermelidir. LiFePO4 bataryalar, tankların motor çalıştırma sistemleri, haberleşme ekipmanları ve elektronik savunma sistemleri için güvenilir enerji kaynağı sunar. Tekin Power Energy, tanklar için geliştirdiği bataryalarda şok ve titreşim direncine özel önem vermektedir.
      `,
      hasImage: false
    },
    {
      title: 'Tekin Power Energy\'nin Yenilikçi Yaklaşımı',
      content: `
Tekin Power Energy, sadece batarya tedariki ile sınırlı kalmayıp, müşterilerine özel projelendirme ve entegrasyon hizmetleri sunmaktadır. Askeri standartlara uygun üretim süreçleri ve test prosedürleriyle, LiFePO4 bataryaların güvenilirliği ve dayanıklılığı en üst düzeye çıkarılmaktadır. Şirket, bu alanda global yatırımlar yaparak, uluslararası savunma sanayisi projelerine de katkı sağlamayı hedeflemektedir.<br/><br/>

Ayrıca Tekin Power Energy, Türkiye'nin yerli ve milli savunma sanayisine katkı sağlama misyonu doğrultusunda, Ar-Ge çalışmalarına ciddi yatırımlar yapmaktadır. LiFePO4 bataryaların askeri araçlarda kullanımına yönelik test ve simülasyon merkezleriyle, ürünlerin saha şartlarına uygunluğu en ince detayına kadar analiz edilmektedir.
      `,
      hasImage: false
    },
    {
      title: 'Sonuç ve Gelecek Perspektifi',
      content: `
LiFePO4 batarya teknolojisi, savunma sanayisinde enerji yönetimi ve sürdürülebilirlik açısından büyük bir potansiyele sahiptir. Tekin Power Energy, yenilikçi yaklaşımları ve özelleştirilmiş çözümleriyle bu alanda lider bir konuma ulaşmayı hedeflemektedir. Helikopterlerden savaş gemilerine, tanklardan diğer askeri platformlara kadar geniş bir yelpazede LiFePO4 bataryaların kullanımı, operasyonel verimliliği artırırken, savunma sanayisinin geleceğine yön verecek bir adım olarak öne çıkmaktadır.<br/><br/>

Tekin Power Energy, teknolojik bilgi birikimi ve alanında öncü projeleriyle, askeri uygulamalarda güvenilir, verimli ve çevreci enerji çözümleri sunmaya devam edecektir.
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
              <div className={`bg-gradient-to-r ${gradient} py-12 px-8 lg:px-16`}>
                <div className="max-w-7xl mx-auto">
                  <div className="w-20 h-1 bg-white/30 rounded-full mb-6"></div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="py-16 px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                  {/* Main Content */}
                  <div className="mb-12">
                    <p
                      className="text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
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
