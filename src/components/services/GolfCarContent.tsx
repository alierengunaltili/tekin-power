'use client';

import Image from 'next/image';
import { golfaraclari_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/golfaraclari';

interface GolfCarContentProps {
  gradient: string;
}

const GolfCarContent = ({ gradient }: GolfCarContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'Golf Araçları için LiFEPO4 Batarya Çözümleri',
      content: `
Tekin Power Energy, LiFePO4 batarya teknolojisi ile golf araçlarına devrim niteliğinde enerji çözümleri sunmaktadır. Uzun ömürlülük, yüksek verimlilik, sessiz ve bakımsız kullanım özellikleriyle öne çıkan bu bataryalar, golf araçlarının performansını en üst seviyeye taşır. Tekin Power Energy'nin geliştirdiği LiFePO4 bataryalar, klasik batarya sistemlerine göre çok daha uzun ömürlü olup, maliyet avantajı sunar.<br/><br/>

Golf araçları için tasarlanan bu enerji çözümleri, minimum bakım gereksinimi ve güçlü performansı ile kullanıcılara kesintisiz bir sürüş deneyimi sağlar. Hem çevre dostu hem de sürdürülebilir yapısıyla öne çıkan Tekin Power Energy bataryaları, golf sahalarında sessiz çalışma imkanı sunarken, uzun mesafelerde dahi aynı yüksek performansı korur.
      `,
      hasImage: false
    },
    {
      title: 'Öne Çıkan Avantajlar',
      content: `
<b>• Uzun Ömür:</b><br/>
LiFePO4 bataryalar, klasik bataryalara kıyasla 3 kat daha uzun bir kullanım ömrüne sahiptir.<br/><br/>

<b>• Yüksek Verimlilik:</b><br/>
Düşük enerji kaybı ve yüksek dönüşüm oranları sayesinde şarj döngüleri daha verimli hale gelir.<br/><br/>

<b>• Bakım Gerektirmeyen Kullanım:</b><br/>
LiFePO4 teknolojisi, geleneksel bataryalar gibi düzenli bakım gerektirmez, böylece zaman ve maliyet tasarrufu sağlar.<br/><br/>

<b>• Güçlü Performans:</b><br/>
Zorlu koşullarda dahi maksimum performans sunarak golf araçlarının gücünü artırır.<br/><br/>

<b>• Sessiz Çalışma:</b><br/>
Saha boyunca sessiz ve kesintisiz sürüş deneyimi ile konforu artırır.
      `,
      hasImages: true,
      multipleImages: ['photo1', 'photo2', 'photo3', 'photo4']
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
                          src={golfaraclari_photo_mapping[section.imageKey as keyof typeof golfaraclari_photo_mapping]}
                          alt="Golf Car LiFePO4 Batarya Çözümleri"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Images */}
                  {section.hasImages && section.multipleImages && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.multipleImages.map((imageKey, imgIndex) => (
                        <div key={imgIndex} className="w-full">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={golfaraclari_photo_mapping[imageKey as keyof typeof golfaraclari_photo_mapping]}
                              alt={`Golf Car ${imgIndex + 1}`}
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

export default GolfCarContent;
