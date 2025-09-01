'use client';

import Image from 'next/image';
import { telekomunikasyon_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/telekominukasyon';

interface TelekomunikasyonContentProps {
  gradient: string;
}

const TelekomunikasyonContent = ({ gradient }: TelekomunikasyonContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'İletişimde Tekin Power Energy Çözümleri',
      content: `
<b>LiFePO4 Batarya Teknolojisinin Telekomünikasyon Baz İstasyonlarında Kullanımı Tekin Power Energy'nin Katkıları</b><br/><br/>

Telekomünikasyon sektörü, modern iletişim ağlarının temel yapı taşlarından biridir. Baz istasyonları, mobil veri akışını, sesli iletişimi ve dijital bağlantıyı sürdürülebilir kılan kritik altyapı unsurlarıdır. Ancak bu istasyonların kesintisiz çalışması, enerji güvenliğine doğrudan bağlıdır.<br/><br/>

Geleneksel enerji depolama çözümleri, sınırlı performansları ve yüksek bakım maliyetleri nedeniyle sektörde yerini daha yenilikçi teknolojilere bırakmaktadır. Bu bağlamda, LiFePO4 (Lityum Demir Fosfat) batarya teknolojisi, telekomünikasyon sektörüne güvenilir, verimli ve çevreci bir çözüm sunmaktadır.<br/><br/>

Tekin Power Energy, enerji depolama alanındaki uzmanlığıyla, LiFePO4 teknolojisini baz istasyonlarına uyarlayan öncü çalışmalara imza atmakta ve sektöre yenilikçi çözümler sunmaktadır.
      `,
      hasImage: false
    },
    {
      title: 'Baz İstasyonları ve Enerji İhtiyacı',
      content: `
Baz istasyonları, 7/24 kesintisiz hizmet sağlamak için sürekli bir enerji kaynağına ihtiyaç duyar. Elektrik şebekesine bağlı olan bu sistemler, şebeke kesintileri veya elektrik dalgalanmaları durumunda devreye girecek güvenilir bir yedek enerji kaynağı gerektirir. Ayrıca kırsal bölgelerde, uzak veya şebeke elektriğinin sınırlı olduğu yerlerde baz istasyonlarının enerji yönetimi daha büyük bir zorluk oluşturur.<br/><br/>

LiFePO4 bataryalar, bu zorluklara karşı geliştirilmiş bir çözüm sunar. Telekomünikasyon altyapılarında sağladıkları avantajlar, hem operasyonel maliyetleri düşürür hem de hizmet sürekliliğini artırır.
      `,
      hasImage: false
    },
    {
      title: 'LiFePO4 Bataryaların Telekomünikasyon Baz İstasyonlarındaki Avantajları',
      content: `
<b>1. Yüksek Güvenlik ve Kararlılık</b><br/>
LiFePO4 bataryaların termal stabilitesi, yüksek sıcaklık koşullarında bile güvenilir çalışmasını sağlar. Baz istasyonlarının genellikle zorlu çevresel koşullarda çalıştığı göz önüne alındığında, bu özellik büyük bir avantajdır.<br/><br/>

<b>2. Uzun Ömür</b><br/>
LiFePO4 bataryalar, 3.000-10.000 şarj-deşarj döngüsüne sahiptir ve geleneksel kurşun-asit bataryalara kıyasla çok daha uzun bir kullanım ömrü sunar. Bu, telekomünikasyon altyapılarında batarya değişim sıklığını azaltır ve uzun vadede maliyet tasarrufu sağlar.<br/><br/>

<b>3. Yüksek Enerji Yoğunluğu</b><br/>
Bu bataryalar, kompakt boyutlarına rağmen yüksek enerji depolama kapasitesine sahiptir. Bu da baz istasyonlarının daha az alan kaplayan batarya modülleri ile enerji ihtiyaçlarını karşılamasına olanak tanır.<br/><br/>

<b>4. Düşük Bakım Gereksinimi</b><br/>
Kurşun-asit bataryaların aksine, LiFePO4 bataryalar düzenli bakım gerektirmez. Bu durum, özellikle uzak veya erişimi zor bölgelerdeki baz istasyonları için büyük bir avantajdır.<br/><br/>

<b>5. Çevre Dostu</b><br/>
LiFePO4 bataryaların kimyasal yapısı, toksik ve zararlı maddeler içermez. Bu, telekomünikasyon şirketlerinin karbon ayak izini azaltmasına ve çevresel sürdürülebilirlik hedeflerine ulaşmasına katkı sağlar.
      `,
      hasImage: false
    },
    {
      title: 'Tekin Power Energy\'nin Telekomünikasyon Alanındaki Çözümleri',
      content: `
Tekin Power Energy, LiFePO4 batarya teknolojisini telekomünikasyon baz istasyonlarına entegre etmek için kapsamlı çözümler sunmaktadır. Şirketin bu alandaki çalışmaları şunları içerir:<br/><br/>

<b>1. Yüksek Performanslı Batarya Modülleri</b><br/>
Tekin Power Energy, telekomünikasyon sektörüne özel olarak tasarlanmış, yüksek kapasiteli ve dayanıklı LiFePO4 batarya sistemleri sunar. Bu bataryalar, sürekli enerji akışı sağlayarak kesintisiz iletişim altyapısının sürdürülebilirliğini garanti eder.<br/><br/>

<b>2. Özelleştirilmiş Enerji Depolama Çözümleri</b><br/>
Telekomünikasyon baz istasyonlarının enerji ihtiyaçları, coğrafi ve çevresel faktörlere bağlı olarak değişiklik gösterir. Tekin Power Energy, bu farklılıklara uyum sağlayan özelleştirilmiş batarya çözümleri tasarlayarak, müşterilerine esnek ve verimli bir hizmet sunar.<br/><br/>

<b>3. Entegre Solar Enerji Çözümleri</b><br/>
Tekin Power Energy, LiFePO4 bataryaları güneş enerjisi sistemleriyle entegre ederek, özellikle kırsal alanlarda şebeke dışı çalışan baz istasyonları için sürdürülebilir bir enerji kaynağı oluşturur. Bu, yenilenebilir enerji kullanımını artırırken işletme maliyetlerini de azaltır.<br/><br/>

<b>4. Akıllı Yönetim ve İzleme Sistemleri</b><br/>
Tekin Power Energy, batarya sistemlerine entegre ettiği IoT tabanlı izleme ve yönetim çözümleriyle, bataryaların durumu, performansı ve enerji tüketimi hakkında gerçek zamanlı bilgi sunar. Bu, telekomünikasyon operatörlerinin batarya performansını optimize etmesini ve olası arızaların önüne geçmesini sağlar.
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Kırsal ve Zorlu Bölgeler için Çözümler',
      content: `
Baz istasyonlarının enerji yönetimi, kırsal bölgelerde daha büyük bir zorluk haline gelir. Şebeke elektriğine erişimin olmadığı veya kesintilerin sık yaşandığı bu bölgelerde, Tekin Power Energy'nin LiFePO4 batarya çözümleri şunları sağlar:<br/><br/>

<b>• Kesintisiz Bağlantı:</b> Güvenilir bir yedek enerji kaynağı sunarak, iletişim kesintilerini önler.<br/><br/>

<b>• Hibrit Enerji Kullanımı:</b> Güneş ve rüzgar gibi yenilenebilir enerji kaynaklarıyla uyumlu çalışarak, şebekeden bağımsız bir enerji çözümü sağlar.<br/><br/>

<b>• Hızlı Kurulum ve Kolay Bakım:</b> Modüler yapısıyla hızlı bir şekilde kurulabilir ve uzun süre bakım gerektirmeden çalışır.
      `,
      hasImage: false
    },
    {
      title: 'Tekin Power Energy\'nin Telekomünikasyon Sektöründeki Hedefleri',
      content: `
Tekin Power Energy, LiFePO4 teknolojisinin baz istasyonlarında kullanımını yaygınlaştırarak, sektörün enerji güvenliği ve sürdürülebilirlik hedeflerine katkıda bulunmayı amaçlamaktadır. Şirket, bu doğrultuda:<br/><br/>

• Ar-Ge çalışmalarına yatırım yaparak batarya performansını ve verimliliğini artırmaktadır.<br/>
• Uluslararası projelere katılarak küresel telekomünikasyon altyapılarına entegre olmayı hedeflemektedir.<br/>
• Yerli ve milli enerji çözümleriyle, Türkiye'nin dijitalleşme süreçlerine destek olmaktadır.<br/><br/>

<b>Sonuç</b><br/>
Telekomünikasyon baz istasyonlarında enerji yönetimi, kesintisiz iletişim ve sürdürülebilirlik açısından kritik bir öneme sahiptir. LiFePO4 batarya teknolojisi, uzun ömrü, yüksek performansı ve çevreci yapısıyla sektöre değer katan bir çözüm sunmaktadır. Tekin Power Energy, bu alandaki yenilikçi projeleriyle telekomünikasyon sektörünün enerji ihtiyaçlarını karşılamakta ve geleceğin enerji teknolojilerini bugünden hayata geçirmektedir.
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
                  
                  {/* Single Image */}
                  {section.hasImage && 'imageKey' in section && section.imageKey && (
                    <div className="w-full">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={telekomunikasyon_photo_mapping[section.imageKey as keyof typeof telekomunikasyon_photo_mapping]}
                          alt="Telekomünikasyon Baz İstasyonu LiFePO4 Batarya"
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
                              src={telekomunikasyon_photo_mapping[imageKey as keyof typeof telekomunikasyon_photo_mapping]}
                              alt={`Telekomünikasyon ${imgIndex + 1}`}
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

export default TelekomunikasyonContent;
