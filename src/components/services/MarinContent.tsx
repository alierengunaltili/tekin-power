'use client';

import Image from 'next/image';
import { marin_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/marin';

interface MarinContentProps {
  gradient: string;
}

const MarinContent = ({ gradient }: MarinContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'Marin LiFEPO4 Batarya Çözümleri',
      content: `
Marin sektörü, enerji verimliliği, sürdürülebilirlik ve performans açısından büyük dönüşüm geçiriyor. Geleneksel enerji kaynaklarının sınırlı kalması ve çevresel etkiler göz önüne alındığında, yenilenebilir enerji teknolojileri denizcilikte daha önemli hale geliyor. Bu bağlamda, Tekin Power Energy olarak LiFePO4 (Lityum Demir Fosfat) batarya ve solar çözümler ile marin sektörüne yönelik yenilikçi ve çevreci enerji çözümleri sunuyoruz.
      `,
      hasImage: false
    },
    {
      title: 'Marin Sektöründe LiFePO4 Bataryaların Avantajları',
      content: `
<div class="space-y-8">
  <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Yüksek Enerji Yoğunluğu ve Verimlilik</h3>
    <p class="text-gray-700">LiFePO4 bataryalar, geleneksel kurşun asit bataryalara kıyasla daha yüksek enerji yoğunluğuna sahiptir. Bu, daha az yer kaplayarak daha fazla enerji depolanması anlamına gelir. Marin sektöründe sınırlı alanlarda yüksek enerji ihtiyacını karşılamak için bu özellik büyük bir avantaj sağlar.</p>
  </div>
  
  <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Uzun Ömür ve Dayanıklılık</h3>
    <p class="text-gray-700">LiFePO4 bataryalar, döngü sayısı bakımından oldukça dayanıklıdır. Ortalama 6000-10000 şarj döngüsüne kadar dayanabilen bu bataryalar, uzun ömürlü kullanım imkânı sunar. Deniz ortamı gibi zorlu koşullarda dayanıklılık, marin sektöründe enerji çözümlerinde hayati önem taşır.</p>
  </div>
</div>
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Marin Uygulamaları İçin Solar Çözümler',
      content: `
TEKİN POWER ENERJİ olarak marin sektöründe güneş enerjisi çözümleri ile de fark yaratıyoruz. Özellikle deniz araçlarının bağımsız enerji kaynaklarına olan ihtiyacı, güneş enerjisinin ideal bir çözüm olarak öne çıkmasını sağlamıştır.<br/><br/>

<div class="space-y-6">
  <div class="bg-blue-50 p-6 rounded-xl">
    <h3 class="text-xl font-bold text-blue-900 mb-3">Deniz Araçlarında Solar Panellerin Kullanımı</h3>
    <p class="text-blue-800">Deniz araçlarının enerji ihtiyaçları, motor, elektronik cihazlar ve yaşam alanları için gerekli elektrik enerjisini içerebilir. Güneş panelleri, deniz araçlarına entegre edilerek bu ihtiyaçları karşılamak için sürdürülebilir bir enerji kaynağı sağlar. Özellikle seyir halinde veya demirli durumda güneş enerjisinden faydalanmak, fosil yakıtlara bağımlılığı önemli ölçüde azaltır.</p>
  </div>
  
  <div class="bg-green-50 p-6 rounded-xl">
    <h3 class="text-xl font-bold text-green-900 mb-3">Hibrit Sistemlerle Optimum Verimlilik</h3>
    <p class="text-green-800">Solar enerji ve LiFePO4 bataryaların birlikte kullanıldığı hibrit enerji sistemleri, marin araçlarda en yüksek verimliliği sağlar. Güneş enerjisi gündüzleri depolanarak, gece boyunca veya güneşin olmadığı zamanlarda LiFePO4 bataryalar aracılığıyla kullanılabilir. Bu sistemler, denizcilikte enerji kesintisi riskini minimuma indirir.</p>
  </div>
  
  <div class="bg-yellow-50 p-6 rounded-xl">
    <h3 class="text-xl font-bold text-yellow-900 mb-3">Çevresel Sürdürülebilirlik ve Maliyet Avantajı</h3>
    <p class="text-yellow-800">Güneş enerjisi ve LiFePO4 batarya çözümleri, uzun vadede maliyet avantajı sunar. Fosil yakıtlara kıyasla düşük bakım ve işletme maliyetleri ile dikkat çeken bu sistemler, marin sektörünün çevresel ayak izini azaltmada kritik rol oynar. Ayrıca, güneş enerjisi tamamen ücretsiz bir kaynak olduğundan, denizcilikte enerji maliyetlerini önemli ölçüde düşürmek mümkündür.</p>
  </div>
</div>
      `,
      hasImages: true,
      multipleImages: ['photo2', 'photo3', 'photo4', 'photo5']
    },
    {
      title: 'Tekin Power Enerji\'nin Marin Sektörüne Sağladığı Çözümler',
      content: `
Tekin Power Enerji olarak, marin sektörüne yönelik özel olarak geliştirdiğimiz LiFePO4 batarya ve solar çözümler ile müşterilerimize şu avantajları sunuyoruz:<br/><br/>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
    <div class="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
      </svg>
    </div>
    <h4 class="font-bold text-blue-900 mb-2">Özelleştirilebilir Sistemler</h4>
    <p class="text-blue-800 text-sm">Deniz aracınızın enerji ihtiyaçlarına uygun çözümler sunuyoruz. Güneş paneli ve batarya sistemleri, aracınızın boyutuna ve kullanım amacına göre optimize edilebilir.</p>
  </div>
  
  <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
    <div class="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <h4 class="font-bold text-green-900 mb-2">Dayanıklı ve Su Geçirmez Tasarım</h4>
    <p class="text-green-800 text-sm">Marin sektörü için özel olarak tasarlanan ürünlerimiz, zorlu deniz koşullarına karşı dayanıklıdır ve su geçirmez yapıdadır.</p>
  </div>
  
  <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
    <div class="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    </div>
    <h4 class="font-bold text-purple-900 mb-2">Enerji Yönetimi ve Uzaktan İzleme</h4>
    <p class="text-purple-800 text-sm">Gelişmiş enerji yönetim sistemleri sayesinde, deniz araçlarının enerji kullanımını optimize etmek ve uzaktan izlemek mümkündür.</p>
  </div>
</div>
      `,
      hasImage: false
    },
    {
      title: 'Neden Bizi Tercih Etmelisiniz?',
      content: `
Tekin Power Enerji olarak marin sektöründe yenilikçi, güvenilir ve çevreci enerji çözümleri sunmaya devam ediyoruz. LiFePO4 bataryalarımız ve solar sistemlerimizle deniz araçlarına sürdürülebilir enerji sağlarken, aynı zamanda operasyonel maliyetleri azaltmayı hedefliyoruz. Geleceğin enerjisi olarak görülen bu çözümler, marin sektörü için hem çevresel hem de ekonomik açıdan büyük avantajlar sunmaktadır.<br/><br/>
Marin sektörüne yönelik LiFePO4 batarya ve solar çözümlerimiz hakkında daha fazla bilgi almak ve size en uygun çözümü bulmak için bizimle iletişime geçin.


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
                    <div
                      className="text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                  
                  {/* Single Image */}
                  {section.hasImage && 'imageKey' in section && section.imageKey && (
                    <div className="w-full">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={marin_photo_mapping[section.imageKey as keyof typeof marin_photo_mapping]}
                          alt="Marin LiFePO4 Batarya Çözümleri"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                        {/* LiFePO4 Link Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a 
                            href="/lifepo4" 
                            className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-blue-600 font-semibold hover:bg-white transition-all duration-300 shadow-lg"
                          >
                            LiFePO4 Hakkında Daha Fazla →
                          </a>
                        </div>
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
                              src={marin_photo_mapping[imageKey as keyof typeof marin_photo_mapping]}
                              alt={`Marin Solar Çözümleri ${imgIndex + 1}`}
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

export default MarinContent;
