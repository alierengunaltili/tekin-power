'use client';

import Image from 'next/image';
import { forklift_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/forklift';

interface ForkliftContentProps {
  gradient: string;
}

const ForkliftContent = ({ gradient }: ForkliftContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'Forklift\'ler için LiFEPO4 Batarya Çözümleri',
      content: `
Lojistik sektörü, hızla büyüyen global tedarik zincirleri ve depolama ihtiyaçlarıyla birlikte enerji verimliliği ve operasyonel sürdürülebilirlik konularında sürekli yeniliklere ihtiyaç duymaktadır. Forkliftler, bu sektörün omurgasını oluşturan kritik iş makineleri arasında yer alır. Ancak, yoğun ve sürekli kullanımları, enerji yönetimi açısından ciddi zorluklar yaratır.<br/><br/>

Tekin Power Enerji olarak, lojistik sektörünün bu ihtiyaçlarına uygun LiFePO4 (Lityum Demir Fosfat) batarya ve solar çözümler sunarak, forkliftlerin tam zamanlı kesintisiz çalışmasını sağlayan yenilikçi ve çevreci bir çözüm sunuyoruz.
      `,
      hasImage: false
    },
    {
      title: 'LiFePO4 Bataryaların Lojistik Sektöründeki Avantajları',
      content: `
<b>Uzun Ömürlü ve Dayanıklı Kullanım</b><br/>
Forkliftlerin lojistik operasyonlarında sürekli kullanılması, enerji sistemlerinin dayanıklılığı ve uzun ömürlü olması gerektiği anlamına gelir. LiFePO4 bataryalar, geleneksel kurşun-asit bataryalara kıyasla çok daha uzun ömürlüdür ve 6000 – 10000 şarj döngüsüne kadar dayanabilir. Bu, forkliftlerin kesintisiz şekilde uzun yıllar hizmet vermesini sağlar.<br/><br/>

<b>Yüksek Verimlilik ve Enerji Yoğunluğu</b><br/>
LiFePO4 bataryalar, enerji yoğunluğu açısından oldukça verimlidir. Bu sayede daha küçük batarya kapasiteleri ile daha uzun süre enerji sağlayabilirler. Lojistik sektöründe forkliftlerin sürekli hareket halinde olması gerektiğinden, bu bataryalar forkliftlerin daha az şarj edilerek daha uzun süre çalışabilmesini sağlar.<br/><br/>

<b>Hızlı Şarj İmkânı</b><br/>
Forkliftlerin durmaksızın çalışması gerektiği durumlarda, LiFePO4 bataryalar hızla şarj edilebilme özelliği ile öne çıkar. Geleneksel bataryaların saatler süren şarj süreçlerine karşılık LiFePO4 bataryalar, forkliftlerin birkaç saat içinde tam kapasiteye ulaşmasını sağlar. Böylece iş gücü kaybı en aza indirilir ve operasyonlar kesintisiz bir şekilde devam eder.<br/><br/>

<b>Güvenli ve Çevre Dostu</b><br/>
Lojistik operasyonlarının büyük bir kısmı kapalı depo ve lojistik merkezlerinde gerçekleşir. LiFePO4 bataryaların sunduğu güvenlik özellikleri, bu kapalı alanlarda çalışan forkliftler için kritik bir avantajdır. Lityum Demir Fosfat teknolojisi, termal kaçak riskini minimize ederek patlama veya yangın tehlikesini ortadan kaldırır. Aynı zamanda bu bataryalar çevreye zarar vermeyen yapısı ile sektörde çevreci bir alternatif sunar.
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Solar Enerji İle Tam Zamanlı Kesintisiz Enerji',
      content: `
Tekin Power Enerji olarak, forkliftlerin sürekli ve kesintisiz çalışması için sadece LiFePO4 bataryaları değil, aynı zamanda solar enerji çözümleri de sunuyoruz. Solar enerji, forkliftler ve diğer lojistik ekipmanların enerji ihtiyacını karşılayarak operasyonel maliyetleri önemli ölçüde azaltır.<br/><br/>

<b>Solar Enerji ile Kesintisiz Enerji Sağlama</b><br/>
Forkliftler gün boyu sürekli çalışmak zorunda olduğunda, enerji maliyetleri ve kesinti riskleri önemli bir sorun haline gelebilir. Güneş enerjisiyle desteklenen şarj istasyonları, forkliftlerin sürekli olarak kesintisiz çalışmasını sağlayabilir. Güneş panelleri gün boyunca enerji üretir ve bu enerji LiFePO4 bataryalar aracılığıyla depolanarak forkliftlerin gece ve güneşin olmadığı saatlerde de enerji ihtiyacını karşılar.<br/><br/>

<b>Operasyonel Maliyetlerin Azaltılması</b><br/>
Güneş enerjisi tamamen ücretsiz bir kaynak olduğundan, uzun vadede enerji maliyetlerinde büyük bir düşüş sağlar. Lojistik sektöründe özellikle büyük depolarda çok sayıda forkliftin kullanıldığı düşünüldüğünde, solar enerjili şarj istasyonlarıyla maliyetler önemli ölçüde azalır. Böylece işletmeler hem çevre dostu bir enerji kaynağı kullanırken hem de uzun vadede büyük tasarruflar elde edebilir.<br/><br/>

<b>Çevreci ve Sürdürülebilir Çözümler</b><br/>
Lojistik sektöründe kullanılan enerji miktarı oldukça yüksektir. Fosil yakıtlı veya geleneksel enerji kaynaklarına dayalı çözümler, çevreye olumsuz etkiler bırakırken, güneş enerjisi kullanımı çevresel ayak izini minimize eder. Tekin Power Enerji'nin sunduğu güneş enerjisi ve LiFePO4 batarya çözümleri, lojistik sektörünü daha çevre dostu ve sürdürülebilir bir hale getirir.
      `,
      hasImages: true,
      multipleImages: ['photo2', 'photo3', 'photo4']
    },
    {
      title: 'Forkliftler İçin Özelleştirilebilir LiFePO4 Batarya Çözümleri',
      content: `
Forkliftlerin farklı yük kapasiteleri, kullanım süreleri ve enerji ihtiyaçlarına göre özelleştirilebilir batarya çözümleri sunuyoruz. Bu sayede her forklift modeline ve lojistik operasyonuna uygun enerji çözümleri sağlanabilir.<br/><br/>

<b>Yüksek Kapasiteli Batarya Sistemleri</b><br/>
LiFePO4 bataryaların yüksek enerji yoğunluğu, forkliftlerin gün boyu kesintisiz çalışabilmesini sağlar. Özellikle büyük ölçekli lojistik operasyonları için geliştirilen yüksek kapasiteli batarya sistemlerimiz, forkliftlerin sürekli kullanımını destekler.<br/><br/>

<b>Modüler Tasarımlar ve Kolay Entegrasyon</b><br/>
Tekin Power Enerji olarak sunduğumuz batarya sistemleri, forkliftlere kolayca entegre edilebilir ve modüler yapıları sayesinde genişletilebilir. Bu da işletmelerin büyüyen enerji ihtiyaçlarına hızlı ve etkili çözümler sunmamıza olanak tanır.<br/><br/>

<b>Akıllı Enerji Yönetim Sistemleri</b><br/>
LiFePO4 batarya çözümlerimiz, gelişmiş enerji yönetim sistemleri ile donatılmıştır. Bu sistemler, forkliftlerin enerji kullanımını optimize eder, pil ömrünü uzatır ve enerji kesintilerini önlemek için kritik durumlarda uyarılar sağlar.<br/><br/>

<b>Sonuç</b><br/>
Tekin Power Enerji olarak lojistik sektörüne özel LiFePO4 batarya ve solar çözümlerimiz, forkliftlerin tam zamanlı kesintisiz çalışmasını sağlayarak operasyonel verimliliği artırıyor. Hızlı şarj olabilen, uzun ömürlü ve çevre dostu LiFePO4 bataryalarımız, işletmelere maliyet tasarrufu sağlarken, solar enerji çözümlerimiz ile birlikte enerjiyi sürdürülebilir bir şekilde kullanma fırsatı sunuyoruz.<br/><br/>

Lojistik operasyonlarınıza uygun LiFePO4 batarya ve solar enerji çözümleri için Tekin Power Enerji ile iletişime geçin ve işinizi kesintisiz enerjiyle güçlendirin.
      `,
      hasImage: true,
      imageKey: 'photo5'
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
                  
                  {/* Single Image */}
                  {section.hasImage && 'imageKey' in section && section.imageKey && (
                    <div className="w-full">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={forklift_photo_mapping[section.imageKey as keyof typeof forklift_photo_mapping]}
                          alt="Forklift LiFePO4 Batarya Çözümleri"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Images */}
                  {section.hasImages && section.multipleImages && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {section.multipleImages.map((imageKey, imgIndex) => (
                        <div key={imgIndex} className="w-full">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={forklift_photo_mapping[imageKey as keyof typeof forklift_photo_mapping]}
                              alt={`Forklift Solar Enerji ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                          </div>
                        </div>
                      ))}
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

export default ForkliftContent;
