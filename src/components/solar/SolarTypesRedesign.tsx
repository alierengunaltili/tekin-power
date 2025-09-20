'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  Info,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolarType {
  id: string;
  title: string;
  image: string;
  gradient: string;
  description: string;
  advantages: string[];
  usageAreas: string[];
}

const SolarTypesRedesign = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      // Animate each type section
      const typeSections = document.querySelectorAll('.solar-type-section');
      typeSections.forEach((section, index) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 60 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Listen for expand events from swiper
  useEffect(() => {
    const handleExpandSolarDetail = (event: CustomEvent) => {
      const { typeId } = event.detail;
      const element = document.getElementById(`detail-${typeId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('expandSolarDetail', handleExpandSolarDetail as EventListener);
    
    return () => {
      window.removeEventListener('expandSolarDetail', handleExpandSolarDetail as EventListener);
    };
  }, []);

  const solarTypes: SolarType[] = [
    {
      id: 'esnek-paneller',
      title: 'Esnek Paneller',
      image: '/gunespaneli-redesign/esnekgunespaneli.jpg',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Esnek güneş panelleri, bir ya da birden fazla ince film tabakasının plastik, metal, seramik ya da cam gibi yüzeylere entegre edilmesiyle üretilir. Bu yapıları sayesinde klasik panellere göre çok daha ince, hafif ve kıvrılabilir hale gelirler. Yüzeyleri cam yerine genellikle ETFE adlı özel bir polimerle kaplanır.',
      advantages: [
        'Hafif ve Taşınabilir: Standart panellere göre yaklaşık %60 daha hafiftir',
        'Bükülebilir Yapı: 240 dereceye kadar esneyebilir',
        'Cam İçermez: Kırılma riski düşüktür, darbelere karşı daha dayanıklıdır',
        'Kurulumu Kolay: Delme, vida veya ağır montaj elemanlarına ihtiyaç duymaz'
      ],
      usageAreas: [
        'Teknelerde ve Yatlarda: Tuzlu suya ve darbelere karşı dayanıklı yapısı sayesinde ideal çözümdür',
        'Karavanlar ve Kamplar: Mobil yaşamda hafiflik ve taşınabilirlik ön planda olduğundan sıkça tercih edilir',
        'Askeri ve Geçici Alanlar: Hızlı kurulum gerektiğinde, enerjiye ihtiyaç duyulan sahada kullanılır',
        'Eğimli veya Kıvrımlı Yüzeyler: Çatısı düz olmayan yapılar için uygundur'
      ]
    },
    {
      id: 'half-cut',
      title: 'Half-cut Güneş Panelleri',
      image: '/gunespaneli-redesign/half-cut solar panel.jpg',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Yarım kesim güneş panelleri, standart güneş panellerinden farklı olarak her bir hücrenin ortadan ikiye kesilmesiyle oluşturulur. Yani bir paneldeki hücre sayısı iki katına çıkar, ancak bu hücreler daha küçüktür. Bu tasarım, panelin elektrik üretim şekli üzerinde önemli farklar yaratır.',
      advantages: [
        'Daha Az Enerji Kaybı: Küçük hücreler daha az elektrik akımı taşıdığı için ısı kaybı düşer',
        'Gölgeye Karşı Daha Dayanıklı: Panelin sadece bir kısmı gölgede kaldığında daha az performans kaybı yaşanır',
        'Uzun Ömür ve Dayanıklılık: Düşük ısı üretimi sayesinde hücreler daha az zorlanır',
        'Daha Yüksek Verim: Aynı alanda, klasik panellere göre daha fazla enerji üretme potansiyeli vardır'
      ],
      usageAreas: [
        'Kısıtlı Çatı Alanları: Daha fazla verim istendiğinde ideal çözümdür',
        'Gölgeleme Riski Olan Yerler: Ağaç, baca veya anten gibi engellerin olduğu çatılarda performans kaybını en aza indirir',
        'Ticari ve Endüstriyel Projeler: Büyük alanlarda verimi maksimize etmek için kullanılır',
        'Tarım Arazileri ve Seralar: Güneşten maksimum yararlanmak istenen yerlerde tercih edilir'
      ]
    },
    {
      id: 'monokristal',
      title: 'Monokristal Güneş Panelleri',
      image: '/gunespaneli-redesign/monokristal solar panel.jpg',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Monokristal güneş panelleri, tek tip ve saf kristal yapıya sahip silikon hücrelerden üretilen panellerdir. Bu panellerin yüzeyi genellikle koyu siyah renkte olur ve hücreler arasındaki kenarlar net bir şekilde ayırt edilebilir. Uzun yıllardır güneş enerjisi alanında en yaygın ve verimli panel türlerinden biri olarak kullanılır.',
      advantages: [
        'Yüksek Verim: Aynı alan içinde diğer panel türlerine göre daha fazla enerji üretir',
        'Uzun Ömürlü: Dayanıklı yapısı sayesinde 25 yıl ve üzeri performans sunabilir',
        'Az Işıkta Bile Çalışabilir: Bulutlu havalarda ya da sabah-akşam saatlerinde bile enerji üretimini sürdürebilir',
        'Estetik Görünüm: Düzgün ve siyah yüzeyi sayesinde çatılarda daha şık bir görünüm sağlar'
      ],
      usageAreas: [
        'Ev Çatılarında: Alan sınırlıysa ve maksimum verim isteniyorsa idealdir',
        'Ticari Binalar ve İşletmeler: Yüksek enerji ihtiyacını karşılamak için uygundur',
        'Tarım ve Sulama Sistemlerinde: Güneşten yüksek verim alınmak istenen tarımsal uygulamalarda kullanılır',
        'Güneş Tarlalarında: Büyük ölçekli enerji üretim projelerinde tercih edilen panel türlerinden biridir'
      ]
    },
    {
      id: 'polikristal',
      title: 'Polikristal Güneş Panelleri',
      image: '/gunespaneli-redesign/polikristal gunespaneli.jpg',
      gradient: 'from-orange-500 to-yellow-500',
      description: 'Polikristal güneş panelleri, birden fazla silikon kristalinin bir araya gelmesiyle oluşturulan hücrelerden meydana gelir. Bu yapısı sayesinde üretimi daha kolay ve maliyeti daha düşüktür. Genellikle mavi tonlarda görünürler ve yüzeylerinde kristal parçacıkları belli belirsiz fark edilir.',
      advantages: [
        'Daha Ekonomik: Üretim süreci daha basit olduğu için, maliyet açısından monokristal panellere göre daha uygundur',
        'Güvenilir Performans: Güneş ışığını verimli bir şekilde enerjiye çevirir ve uzun süreli kullanımda istikrarlı çalışır',
        'Çevreye Duyarlı Üretim: Üretim aşamasında daha az atık malzeme oluşur',
        'Geniş Kullanım Alanı: Farklı iklim koşullarında da sorunsuz çalışabilir'
      ],
      usageAreas: [
        'Müstakil Evlerde: Geniş çatıya sahip evlerde maliyet/verim dengesini sağlamak için uygundur',
        'Çiftlikler ve Köy Evleri: Elektrik şebekesinin sınırlı olduğu kırsal alanlarda kullanışlıdır',
        'Sanayi ve Tarım Alanlarında: Geniş alanlara kurulabilen projelerde ekonomik olması sayesinde öne çıkar',
        'Küçük Ölçekli Projelerde: Sulama sistemleri, bahçe aydınlatmaları gibi yerlerde tercih edilir'
      ]
    },
    {
      id: 'solar-kiremit',
      title: 'Solar Kiremit',
      image: '/gunespaneli-redesign/kiremitgunespaneli.png',
      gradient: 'from-red-500 to-pink-500',
      description: 'Solar kiremit, geleneksel çatı kiremitlerinin yerine geçebilen ve aynı zamanda güneş enerjisi üretebilen özel bir çatı kaplama malzemesidir. Görünüm olarak klasik kiremitlere benzese de içine yerleştirilen ince fotovoltaik hücreler sayesinde elektrik üretme özelliğine sahiptir. Böylece çatının hem estetik hem de işlevsel bir parçası haline gelir.',
      advantages: [
        'Estetik Görünüm: Dışarıdan bakıldığında geleneksel bir çatı gibi görünür',
        'İki İşlev Tek Malzemede: Hem çatı kaplaması işlevi görür hem de enerji üretir',
        'Uzun Ömürlü ve Dayanıklı: Genellikle darbelere, UV ışınlarına ve hava koşullarına dayanıklı malzemelerden üretilir',
        'Temiz Enerji Üretimi: Görünmez bir şekilde sürdürülebilir enerji sağlar, çevreye zarar vermez'
      ],
      usageAreas: [
        'Yeni Konut Projelerinde: Baştan çatı yapımı planlanan evlerde enerji üretimini çatıya entegre etmek isteyenler için uygundur',
        'Tarihi Binalar ve Koruma Alanları: Görüntü bozulmadan enerji üretimi sağlanmak istenen yerlerde tercih edilir',
        'Müstakil Evler: Görünümü bozmadan güneş enerjisinden faydalanmak isteyen ev sahipleri tarafından sıkça kullanılır',
        'Tasarım Odaklı Yapılar: Modern mimaride estetik kaygıları olan yapılarda çözüm sunar'
      ]
    },
    {
      id: 'bifacial',
      title: 'Çift Yüzlü (Bifacial) Güneş Panelleri',
      image: '/gunespaneli-redesign/cifttarafligunespaneli.png',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Çift yüzlü (Bifacial) güneş panelleri, hem ön yüzeyinden hem de arka yüzeyinden güneş ışığını toplayarak elektrik üretebilen çift taraflı panellerdir. Geleneksel paneller sadece üst yüzeyden enerji üretirken, bifacial paneller yere yansıyan ışığı da kullanarak verimi artırır. Bu sayede aynı alanda daha fazla enerji elde etmek mümkündür.',
      advantages: [
        'İki Yüzeyden Enerji Üretimi: Arka yüzey, zeminden yansıyan ışığı da toplayarak ekstra üretim sağlar',
        'Daha Yüksek Verim: Uygun kurulum koşullarında klasik panellere göre %10–30\'a kadar daha fazla enerji üretebilir',
        'Uzun Ömür ve Dayanıklılık: Genellikle iki tarafı camla kaplı olarak üretilir, bu da yapıyı daha sağlam ve uzun ömürlü kılar',
        'Düşük Bakım İhtiyacı: Cam kaplama kir tutmaz, kolay temizlenir ve daha az bakım gerektirir'
      ],
      usageAreas: [
        'Arazi Kurulumlarında: Yerden gelen yansımanın yüksek olduğu açık arazilerde daha verimli çalışır',
        'Yükseltilmiş Sistemlerde: Panelin altının açık bırakıldığı zemin üstü sistemlerde verim artar',
        'Karla Kaplı veya Açık Renkli Zeminlerde: Işık yansıması yüksek olduğu için çift taraflı üretim daha etkili olur',
        'Ticari ve Endüstriyel Projelerde: Alanın daha verimli kullanılması gereken büyük ölçekli sistemlerde tercih edilir'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Title */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-200/50 rounded-full mb-6 sm:mb-8">
            <span className="text-blue-700 font-semibold text-sm sm:text-base">Güneş Paneli Teknolojileri</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
              Güneş Paneli
            </span>
            <span className="block text-gray-800 text-xl sm:text-2xl lg:text-3xl mt-2">
              Çeşitlerimiz
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
            Her ihtiyaca özel tasarlanmış, teknolojinin en ileri seviyesindeki güneş paneli çeşitlerimizi keşfedin.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {solarTypes.map((type) => (
            <div key={`detail-${type.id}`} id={`detail-${type.id}`} className="solar-type-section bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              {/* Header */}
              <div className="p-5 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        {type.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {type.description}
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                      <Image 
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-20`}></div>
                    </div>
                  </div>

                  {/* Info Sections */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Nedir? */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2 sm:p-2.5 mr-2 sm:mr-3">
                          <Info className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">Nedir?</h4>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    {/* Avantajları */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2 sm:p-2.5 mr-2 sm:mr-3">
                          <CheckCircle className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">Avantajları</h4>
                      </div>
                      <ul className="space-y-2 sm:space-y-3">
                        {type.advantages.map((advantage, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-700">
                            <span className="text-green-600 font-bold mt-0.5">•</span>
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kullanım Alanları */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2 sm:p-2.5 mr-2 sm:mr-3">
                          <Target className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">Kullanım Alanları</h4>
                      </div>
                      <ul className="space-y-2 sm:space-y-3">
                        {type.usageAreas.map((area, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-700">
                            <span className="text-purple-600 font-bold mt-0.5">•</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarTypesRedesign;