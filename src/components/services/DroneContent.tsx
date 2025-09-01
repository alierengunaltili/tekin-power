'use client';

import Image from 'next/image';
import { drone_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/drone';

interface DroneContentProps {
  gradient: string;
}

const DroneContent = ({ gradient }: DroneContentProps) => {
  const contentSections = [
    {
      title: 'VTOL Drone Batarya Çözümleri',
      content: `
Tekin Power Energy, hızla gelişen drone teknolojisi alanında kritik bir öneme sahip enerji çözümleri sunarak, özellikle VTOL (Vertical Take-Off and Landing) dronlar için en verimli bataryaları ithal ediyor. VTOL dronlar, dikey kalkış ve iniş yeteneğiyle sabit kanatlı ve döner kanatlı dronların en iyi özelliklerini bir araya getirir. Bu çok yönlülük, özellikle uzun süreli operasyonlar ve zorlu görevler için daha gelişmiş ve güvenilir enerji çözümlerine olan ihtiyacı artırıyor.<br/><br/>

Tekin Power Energy olarak, Lithium Polimer (Li-Po), Lithium İyon (Li-ion) ve Lityum Demir Fosfat (LiFePO4) gibi çeşitli batarya teknolojileriyle VTOL dronlara uygun enerji çözümleri sunuyoruz. Bu bataryalar, VTOL dronların enerji verimliliğini artırırken, performans ve güvenilirlik açısından mükemmel sonuçlar verir.
      `,
      hasImage: false
    },
    {
      title: 'VTOL Dronlar ve Enerji İhtiyaçları',
      content: `
VTOL dronlar, özellikle endüstriyel uygulamalarda ve askeri operasyonlarda tercih edilen ileri teknoloji araçlardır. Dikey kalkış ve iniş yeteneği, bu dronları dar alanlarda kullanımı kolay hale getirirken, uzun uçuş süreleri için sabit kanatları devreye sokar. VTOL dronların enerji gereksinimi, hem kalkış ve iniş sırasında yüksek ani güç ihtiyacı hem de sabit uçuşta uzun süreli stabil enerji kaynağı ihtiyacını dengelemelidir.<br/><br/>

VTOL dronların enerji kaynakları, bataryaların hafif ve yüksek enerji yoğunluğuna sahip olmasını gerektirir. Ayrıca, bataryaların zorlu çevresel koşullarda dayanıklı, güvenli ve uzun ömürlü olması beklenir. İşte bu noktada, Tekin Power Energy'nin sunduğu batarya teknolojileri, tüm bu ihtiyaçlara yanıt verecek şekilde tasarlanmıştır.
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Tekin Power Energy\'nin Batarya Çözümleri',
      content: `
<b>1. Lithium Polimer (Li-Po) Bataryalar</b><br/>
Li-Po bataryalar, VTOL dronlar için yüksek enerji yoğunluğu sağlayan ve hafiflikleriyle operasyonel avantaj sunan çözümlerden biridir. Bu bataryalar, hızlı şarj olma yetenekleri ve yüksek güç çıkışı ile özellikle kısa sürede büyük enerji gereksinimi duyan VTOL dronların kalkış ve iniş aşamalarında ideal performans sağlar.<br/><br/>

• <b>Yüksek Enerji Yoğunluğu:</b> Daha az ağırlıkla daha fazla enerji depolar, bu da VTOL dronların daha uzun süre uçmasını sağlar.<br/>
• <b>Hızlı Şarj:</b> Dronlar, operasyonlar arasında kısa sürede şarj edilebilir, böylece görev sürekliliği sağlanır.<br/>
• <b>Esneklik:</b> Li-Po bataryalar, VTOL dronların tasarımına ve ağırlık dağılımına uygun şekilde şekillendirilebilir.<br/><br/>

<b>2. Lithium İyon (Li-ion) Bataryalar</b><br/>
Li-ion bataryalar, VTOL dronlar için uzun uçuş süreleri ve yüksek çevrim ömrü sağlayan çözümlerdir. Sabit ve güvenilir enerji sağlayarak, özellikle keşif ve haritalama gibi uzun süreli uçuşlar için idealdir.<br/><br/>

• <b>Uzun Ömür:</b> Yüksek çevrim ömrü ile birçok kez şarj edilip boşaltılabilir, bu da maliyetleri azaltır.<br/>
• <b>Güvenilir Güç Çıkışı:</b> Sabit enerji çıkışı sağlayarak dronların uzun süreli uçuşlarına güvenilir destek sağlar.<br/>
• <b>Daha Yüksek Güvenlik:</b> Isınma riskini azaltan tasarımı ile güvenli operasyonlar sunar.<br/><br/>

<b>3. Lityum Demir Fosfat (LiFePO4) Bataryalar</b><br/>
LiFePO4 bataryalar, VTOL dronlar için güvenlik ve dayanıklılık sunan enerji çözümleridir. Yüksek termal kararlılığa sahip bu bataryalar, aşırı ısınma ve güvenlik risklerini minimize ederken, çevre dostu yapısıyla da dikkat çeker.<br/><br/>

• <b>Yüksek Güvenlik:</b> LiFePO4 bataryalar, termal olarak stabildir ve patlama riskine karşı oldukça güvenlidir.<br/>
• <b>Uzun Çevrim Ömrü:</b> Bu bataryalar uzun süreli kullanım ve birçok şarj döngüsüne dayanıklıdır.<br/>
• <b>Çevre Dostu:</b> Diğer lityum bazlı bataryalara göre daha az toksik bileşen içerir, bu da çevresel sürdürülebilirliği artırır.
      `,
      hasImage: true,
      imageKey: 'photo2'
    },
    {
      title: 'VTOL Dron Teknolojisinde Güvenilir Enerji Kaynağı',
      content: `
Tekin Power Energy, VTOL dronların enerji gereksinimlerini karşılamak için hassas ve özel çözümler sunar. Müşterilerimizin ihtiyaçlarına göre özelleştirilmiş batarya sistemleri, dronların yüksek performans sergilemesini ve operasyonel verimliliği artırmasını sağlar. İthal ettiğimiz Li-Po, Li-ion ve LiFePO4 bataryalar, güvenilir enerji depolama sağlayarak VTOL dronların uçuş sürelerini ve görev verimliliğini maksimize eder.
      `,
      hasImage: false
    },
    {
      title: 'VTOL Dronların Kullanım Alanları',
      content: `
<b>Keşif ve Haritalama:</b><br/>
Uzun uçuş süreleri gerektiren görevlerde VTOL dronlar, geniş alanları tarayarak haritalama yapabilir. Bu tür görevlerde, güvenilir ve uzun süreli güç kaynağı sağlayan Li-ion ve LiFePO4 bataryalar öne çıkar.<br/><br/>

<b>Güvenlik ve Gözetim:</b><br/>
VTOL dronlar, güvenlik ve izleme görevlerinde kritik öneme sahiptir. Yüksek çözünürlüklü kamera sistemleri ile entegre çalışan bu dronlar, sürekli gözetim sağlayarak güvenlik güçlerine yardımcı olur. Li-Po bataryalar, bu görevlerde kısa süreli yüksek enerji ihtiyaçlarını karşılarken, Li-ion bataryalar uzun süreli sabit enerji sağlar.<br/><br/>

<b>Tarım:</b><br/>
Hassas tarım uygulamalarında VTOL dronlar, ekin sağlığını izleyebilir, sulama analizleri yapabilir ve tarım arazilerini detaylı bir şekilde haritalayabilir. Bu tür görevlerde dayanıklı ve çevre dostu LiFePO4 bataryalar kullanılır.<br/><br/>

<b>Lojistik:</b><br/>
VTOL dronlar, özellikle zor ulaşılabilir bölgelerde kargo ve lojistik operasyonlarında önemli bir rol oynar. Hafif, uzun ömürlü ve hızlı şarj olabilen Li-Po bataryalar, lojistik operasyonlarının kesintisiz devam etmesini sağlar.
      `,
      hasImage: true,
      imageKey: 'photo3'
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
                          src={drone_photo_mapping[section.imageKey as keyof typeof drone_photo_mapping]}
                          alt="VTOL Drone Batarya Çözümleri"
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

export default DroneContent;
