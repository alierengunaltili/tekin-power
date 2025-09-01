'use client';

import Image from 'next/image';
import { mobil_solar_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/mobil-solar';

interface MobilSolarContentProps {
  gradient: string;
}

const MobilSolarContent = ({ gradient }: MobilSolarContentProps) => {
  const contentSections: Array<{
    title: string;
    content: string;
    hasImage?: boolean;
    imageKey?: string;
    hasImages?: boolean;
    multipleImages?: string[];
  }> = [
    {
      title: 'Mobil Solar Panel Çözümleri',
      content: `
Mobil enerji ihtiyacı gün geçtikçe artarken, enerji kaynaklarının taşınabilir, sürdürülebilir ve güvenilir olması artık bir zorunluluk haline geldi. Gerek karavanlarda, gerek off-grid yaşam alanlarında veya sahada çalışan ekiplerde, mobil enerji çözümleri hayati önem taşıyor.<br/><br/>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-orange-500">
  <p class="text-lg font-medium text-orange-800">
    <strong>Tekin Power Enerji</strong> olarak biz, LiFePO4 (Lityum Demir Fosfat) batarya ve güneş paneli çözümleriyle mobil kullanım için özel olarak geliştirilmiş sistemler sunuyoruz. Enerjiye bağımlılığınızı ortadan kaldırıyor, doğayla uyumlu ve kesintisiz güç sağlıyoruz.
  </p>
</div>
      `,
      hasImage: false
    },
    {
      title: 'Mobil Uygulamalarda LiFePO4 Bataryaların Avantajları',
      content: `
<div class="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
  <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
    <div class="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-blue-900 mb-3">Yüksek Enerji Yoğunluğu ve Verimlilik</h3>
    <p class="text-blue-800">LiFePO4 bataryalar, geleneksel batarya sistemlerine göre çok daha yüksek enerji yoğunluğuna sahiptir. Kompakt yapısıyla yerden tasarruf sağlar, aynı hacimde daha fazla enerji depolar. Bu, mobil sistemlerde sınırlı alanı maksimum verimle kullanmak isteyen kullanıcılar için büyük bir avantajdır.</p>
  </div>
  
  <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
    <div class="w-12 h-12 bg-green-600 rounded-full mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-green-900 mb-3">Uzun Ömür ve Dayanıklılık</h3>
    <p class="text-green-800">LiFePO4 bataryalar, 6000 – 10.000 şarj döngüsüne kadar dayanabilir. Bu uzun ömürlü yapı, mobil sistemlerde bakım ihtiyacını azaltır ve yıllar boyunca sorunsuz kullanım sağlar. Aynı zamanda zorlu dış ortam koşullarına karşı yüksek direnç gösterir.</p>
  </div>
  
  <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
    <div class="w-12 h-12 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-purple-900 mb-3">Güvenli ve Stabil Enerji</h3>
    <p class="text-purple-800">Termal kararlılığı yüksek olan LiFePO4 bataryalar, aşırı ısınma veya patlama riski olmadan güvenli kullanım sunar. Taşınabilir sistemlerde en önemli konulardan biri olan güvenlik, bu batarya teknolojisi sayesinde üst düzeye taşınır.</p>
  </div>
</div>
      `,
      hasImage: true,
      imageKey: 'photo1'
    },
    {
      title: 'Mobil Uygulamalar İçin Güneş Enerjisi Çözümleri',
      content: `
<div class="space-y-8">
  <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
         <h3 class="text-2xl font-bold text-orange-900 mb-4">
       Güneş Panelleriyle Özgür Enerji
     </h3>
    <p class="text-orange-800 text-lg leading-relaxed">
      Tekin Power Enerji, mobil sistemlerde enerji bağımsızlığı sağlayan taşınabilir güneş paneli çözümleri sunar. Katlanabilir, hafif ve yüksek verimli paneller sayesinde enerji üretimini dilediğiniz yere taşıyabilirsiniz. Güneşten elde edilen bu enerji, doğrudan sistemde depolanarak tüm cihazlarınızı çalıştırabilir.
    </p>
  </div>
  
  <div class="grid gap-6 md:grid-cols-2">
    <div class="bg-blue-50 p-6 rounded-xl">
      <h4 class="text-xl font-bold text-blue-900 mb-3">Taşınabilir ve Entegre Edilebilir Sistemler</h4>
      <p class="text-blue-800">Solar panellerimiz, mobil yaşam alanlarına, karavanlara, tiny house yapılara veya mobil ofis konteynerlerine kolayca entegre edilebilir. Tak-çalıştır özelliği sayesinde teknik bilgi gerektirmeden kurulabilir ve kullanılabilir.</p>
    </div>
    
    <div class="bg-green-50 p-6 rounded-xl">
      <h4 class="text-xl font-bold text-green-900 mb-3">Hibrit Sistemlerle Maksimum Verim</h4>
      <p class="text-green-800">LiFePO4 bataryalar ve solar paneller birlikte çalışarak gündüzleri güneşten enerji depolar, geceleri veya kapalı havalarda bu enerjiyi verimli şekilde kullanmanızı sağlar. Hibrit sistem yapısı sayesinde enerji kesintisi riski minimuma iner.</p>
    </div>
  </div>
  
     <div class="bg-green-600 p-8 rounded-2xl text-white">
     <h4 class="text-2xl font-bold mb-4">Çevre Dostu ve Ekonomik</h4>
     <p class="text-lg opacity-90">
       Fosil yakıt kullanımını sıfıra indiren bu sistemler, sıfır emisyon ile çevreye katkı sağlar. Aynı zamanda düşük işletme maliyeti sayesinde uzun vadede ciddi tasarruf sunar.
     </p>
   </div>
</div>
      `,
      hasImage: true,
      imageKey: 'photo2'
    },
    {
      title: 'Tekin Power Enerji\'nin Mobil Alandaki Çözümleri',
      content: `
<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  <div class="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl text-center border border-orange-200">
    <div class="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
      </svg>
    </div>
    <h4 class="font-bold text-orange-900 mb-3 text-lg">Özelleştirilebilir Sistem Tasarımı</h4>
    <p class="text-orange-800 text-sm leading-relaxed">Her mobil sistem farklıdır. Karavanınızın, mobil ofisinizin ya da kamp düzeninizin enerji ihtiyacına göre sistemlerimizi özelleştiriyoruz.</p>
  </div>
  
  <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl text-center border border-blue-200">
    <div class="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
    <h4 class="font-bold text-blue-900 mb-3 text-lg">Kolay Taşınabilirlik</h4>
    <p class="text-blue-800 text-sm leading-relaxed">Hafif ve kompakt tasarımlarımız sayesinde, sistemler rahatça taşınabilir. Katlanabilir güneş panelleri, dar alanlarda bile kolaylıkla kullanılabilir.</p>
  </div>
  
  <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center border border-green-200">
    <div class="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </div>
    <h4 class="font-bold text-green-900 mb-3 text-lg">Dayanıklılık ve Suya Dayanıklılık</h4>
    <p class="text-green-800 text-sm leading-relaxed">Ürünlerimiz, dış ortam koşullarına karşı dayanıklı olacak şekilde tasarlanmıştır. IP65 sertifikalı ürünlerimizle yağmur, toz ve darbelere karşı koruma sağlıyoruz.</p>
  </div>
  
  <div class="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl text-center border border-purple-200">
    <div class="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    </div>
    <h4 class="font-bold text-purple-900 mb-3 text-lg">Enerji Takibi ve Uzaktan Kontrol</h4>
    <p class="text-purple-800 text-sm leading-relaxed">Akıllı enerji yönetim sistemlerimiz sayesinde batarya doluluk durumu, enerji tüketimi ve sistem performansı uzaktan izlenebilir. Mobil sistemlerde maksimum kontrol sağlar.</p>
  </div>
</div>


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
                          src={mobil_solar_photo_mapping[section.imageKey as keyof typeof mobil_solar_photo_mapping]}
                          alt="Mobil Solar Panel Çözümleri"
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Images */}
                  {section.hasImages && section.multipleImages && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.multipleImages.map((imageKey, imgIndex) => (
                        <div key={imgIndex} className="w-full">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={mobil_solar_photo_mapping[imageKey as keyof typeof mobil_solar_photo_mapping]}
                              alt={`Mobil Solar ${imgIndex + 1}`}
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

export default MobilSolarContent;
