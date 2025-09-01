'use client';

import Image from 'next/image';
import { konutcozumleri_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/konut-cozumleri';

interface HomeSolarSystemContentProps {
  gradient: string;
}

const HomeSolarSystemContent = ({ gradient }: HomeSolarSystemContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'Ev Uygulamaları için LiFEPO4 Batarya ve Enerji Çözümlerimiz',
      content: `
Tekin Power Energy olarak sunduğumuz ev uygulamaları için LiFePO4 batarya ve enerji çözümleri, modern evlerin enerji ihtiyaçlarını karşılamak üzere tasarlanmış güvenilir, uzun ömürlü ve verimli bir enerji kaynağıdır. Geleneksel bataryalara göre çok daha uzun bir kullanım ömrüne sahip olan LiFePO4 bataryalar, 15 yılı aşan dayanıklılığı ile evlerde kesintisiz güç sağlamada mükemmel bir tercih sunmaktadır.<br/><br/>

Bu bataryalar, yüksek verimliliği ve dayanıklılığı sayesinde sık sık değişim gerektirmez, bu da ev sahiplerine hem maliyet hem de zaman açısından büyük avantajlar sunar. Bakım gerektirmeyen yapısı, kullanıcılar için büyük kolaylık sağlarken, sürekli bakım veya izleme gerektiren diğer batarya türlerine kıyasla büyük bir fark yaratır. Yani, evinizi enerji verimliliğine ve maliyet tasarrufuna yönlendiren bir sistem kurmuş olursunuz.<br/><br/>

LiFePO4 bataryaların bir diğer önemli avantajı, enerji tasarrufu sağlamasıdır. Güneş enerjisi sistemleri ile entegre çalışabilen bu bataryalar, gündüz güneş panelleri aracılığıyla üretilen enerjiyi depolayarak gece boyunca veya güneşin olmadığı dönemlerde kullanmanızı sağlar. Bu sayede dış enerji kaynaklarına bağımlılığı en aza indirirken, aynı zamanda elektrik faturalarınızda da kayda değer bir düşüş sağlar.
      `,
      hasImages: true,
      multipleImages: ['photo1', 'photo2', 'photo3', 'photo4']
    },
    {
      title: 'Çevre Dostu ve Sürdürülebilir Enerji Çözümleri',
      content: `
Çevre dostu bir çözüm olarak LiFePO4 bataryalar, karbon ayak izini azaltmak ve yenilenebilir enerjiye geçiş yapmak isteyen ev sahipleri için ideal bir seçenektir. Geri dönüştürülebilir yapısı ve çevreye zarar vermeyen üretim süreçleri ile LiFePO4 bataryalar, doğa dostu bir enerji kaynağı olarak öne çıkar. Geleneksel fosil yakıtlarla çalışan enerji sistemlerine kıyasla çok daha sürdürülebilir bir alternatiftir.<br/><br/>

Bu bataryaların güvenilirliği ve verimliliği, aynı zamanda elektrik kesintileri sırasında evinizi koruma altına alır. Depoladığı enerjiyi gerektiğinde devreye sokarak elektrik kesintilerinde bile hayatınızı kesintisiz sürdürebilmenizi sağlar. Bu, özellikle sık sık enerji kesintileri yaşanan bölgelerde büyük bir avantajdır.
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
                          src={konutcozumleri_photo_mapping[section.imageKey as keyof typeof konutcozumleri_photo_mapping]}
                          alt="Home Solar System LiFePO4 Batarya"
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
                              src={konutcozumleri_photo_mapping[imageKey as keyof typeof konutcozumleri_photo_mapping]}
                              alt={`Home Solar System ${imgIndex + 1}`}
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

export default HomeSolarSystemContent;
