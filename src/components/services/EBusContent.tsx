'use client';

import Image from 'next/image';
import { ebus_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/ebus';

interface EBusContentProps {
  gradient: string;
}

const EBusContent = ({ gradient }: EBusContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'e-Bus Projemizle Elektrikli Ulaşımda Yeni Bir Çağ',
      content: `
Tekin Power Energy olarak, temiz ve sürdürülebilir enerji çözümlerini ulaşım sektörüne entegre etmek için devrim niteliğinde bir adım atıyoruz. e-Bus Projesi kapsamında elektrikli otobüsler için yüksek verimlilik sağlayan lifepo4 (lityum demir fosfat) bataryalar geliştiriyoruz. Amacımız, toplu taşımayı daha konforlu, sessiz ve çevre dostu hale getirirken, emisyonları sıfırlayarak sürdürülebilir bir gelecek inşa etmek.
      `,
      hasImage: false
    },
    {
      title: 'Elektrikli Otobüslerde Lifepo4 Batarya Devrimi',
      content: `
Lifepo4 bataryalar, elektrikli araç teknolojisinde öne çıkan çözümlerden biri olarak enerji yoğunluğu, güvenlik ve uzun ömür gibi özellikleriyle dikkat çeker. Tekin Power Energy olarak, bu gelişmiş bataryaları e-Bus projemiz ile elektrikli otobüslere entegre ediyoruz. Bu bataryalar, şu avantajları sunuyor:<br/><br/>

<b>• Yüksek Verimlilik:</b> Lifepo4 bataryalar, uzun süreli kullanım ve daha az şarj sıklığı ile toplu taşıma sistemlerinin verimliliğini artırır. Bu, otobüslerin gün içinde daha uzun süre kesintisiz çalışmasını sağlar.<br/><br/>

<b>Uzun Ömür ve Düşük Bakım Maliyeti</b><br/>
Lifepo4 bataryaların uzun ömürlü yapısı sayesinde otobüslerin batarya değişim maliyetleri minimize edilir. Ayrıca bakım maliyetlerinin de düşük olması, toplam işletim maliyetlerini azaltır.<br/><br/>

<b>Güvenlik</b><br/>
Bataryalar, yüksek sıcaklıklara karşı dayanıklı olup, yangın veya patlama riskini minimize eder, böylece güvenli bir ulaşım sistemi sağlar.
      `,
      hasImage: false
    },
    {
      title: 'Sessiz ve Konforlu Bir Yolculuk',
      content: `
Elektrikli otobüslerin en büyük avantajlarından biri, motorlarının sessiz çalışmasıdır. Geleneksel dizel motorların yarattığı yüksek ses seviyesi, özellikle yoğun şehir içi trafiğinde hem yolcular hem de çevredekiler için bir gürültü kirliliği kaynağıdır. Ancak elektrikli otobüsler, sessiz motorlarıyla bu sorunu ortadan kaldırır ve daha huzurlu bir yolculuk deneyimi sunar.<br/><br/>

Daha az titreşim ve gürültü, yolcular için konforlu bir ortam sağlarken, toplu taşıma ile seyahat etmek daha cazip hale gelir. Sessiz çalışmaları sayesinde, otobüsler gece saatlerinde dahi rahatsızlık vermeden hizmet verebilir.
      `,
      hasImage: false
    },
    {
      title: 'Dönüşüm ile Sıfır Emisyon',
      content: `
Tekin Power Energy'nin e-Bus projesi sadece yeni elektrikli otobüs üretmekle sınırlı değil. Aynı zamanda mevcut fosil yakıtla çalışan otobüslerinizi elektrikli sisteme dönüştürme hizmeti de sunuyoruz. Bu dönüşüm sayesinde eski otobüsler, hem çevre dostu bir yapıya kavuşuyor hem de karbon emisyonları sıfırlanıyor.<br/><br/>

Bu, kentlerin sürdürülebilir ulaşım hedeflerine ulaşmasında önemli bir adım. Elektrikli sisteme dönüştürülen otobüsler, fosil yakıt tüketimini tamamen ortadan kaldırarak, hava kirliliğine ve küresel ısınmaya karşı etkili bir çözüm sunar. Bu sayede şehirler, daha temiz hava kalitesine ve yeşil enerji kaynaklarına dayalı bir ulaşım sistemine sahip olur.
      `,
      hasImage: false
    },
    {
      title: 'Ekonomik Avantajlar ve Düşük Maliyetli Yeni Sürüş Deneyimi',
      content: `
Geleneksel içten yanmalı motorlu otobüslerin işletme maliyetleri, yakıt fiyatlarının artışıyla birlikte ciddi boyutlara ulaşabilmektedir. Ancak elektrikli otobüsler, hem yakıt hem de bakım maliyetleri açısından önemli avantajlar sunar.<br/><br/>

<b>Yakıt Tasarrufu</b><br/>
Elektrikli otobüslerin enerji tüketimi, fosil yakıtlara göre çok daha düşük maliyetlidir. Lifepo4 bataryaların enerji verimliliği sayesinde otobüsler, daha az enerji harcar ve bu da yakıt maliyetlerinin ciddi oranda azalmasını sağlar.<br/><br/>

<b>Bakım Maliyetlerinde Azalma</b><br/>
Elektrikli motorlar, geleneksel dizel motorlara göre çok daha az bakım gerektirir. Daha az mekanik parça ve aşınma, bakım sürecini basitleştirir ve maliyetleri düşürür. Bu ekonomik avantajlar, şehirlerin ulaşım bütçelerini hafifletirken, daha düşük maliyetlerle çevreye duyarlı bir toplu taşıma ağı kurulmasına olanak tanır.<br/><br/>

Ayrıca, otobüslerin daha uzun ömürlü olması ve yüksek verimli bataryalar ile işletme sürelerinin artması, hem kamusal hem de özel sektörde maliyet avantajı sağlar.
      `,
      hasImage: false
    },
    {
      title: 'Çevresel Etkiler: Daha Temiz Bir Gelecek',
      content: `
Dünyanın dört bir yanında şehirler, karbon salınımını azaltmak ve iklim değişikliği ile mücadele etmek için elektrikli ulaşım çözümlerine yöneliyor. Tekin Power Energy'nin e-Bus projesi, bu hedefe ulaşmak için etkili bir çözüm sunar.<br/><br/>

Elektrikli otobüsler, sıfır emisyon ile çalışarak hava kirliliğini minimuma indirir. Bu sayede şehirler, çevre dostu ulaşım sistemlerine sahip olurken, aynı zamanda toplu taşımayı daha cazip hale getirir.
      `,
      hasImages: true,
      multipleImages: ['photo1', 'photo2', 'photo3']
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
                          src={ebus_photo_mapping[section.imageKey as keyof typeof ebus_photo_mapping]}
                          alt="e-Bus Elektrikli Otobüs Çözümleri"
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
                              src={ebus_photo_mapping[imageKey as keyof typeof ebus_photo_mapping]}
                              alt={`e-Bus Elektrikli Otobüs ${imgIndex + 1}`}
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

export default EBusContent;
