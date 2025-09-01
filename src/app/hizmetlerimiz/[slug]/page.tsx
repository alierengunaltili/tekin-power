import { marin_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/marin';
import { askeri_sistem_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/askeri-sistem';
import { drone_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/drone';
import { ebus_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/ebus';
import { forklift_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/forklift';
import { telekomunikasyon_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/telekominukasyon';
import { golfaraclari_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/golfaraclari';
import { konutcozumleri_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/konut-cozumleri';
import { mobil_solar_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/mobil-solar';
import { energidepolama_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/enerjidepolama';
import AnimatedServicePage from '@/components/AnimatedServicePage';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AskeriSistemContent from '@/components/services/AskeriSistemContent';
import DroneContent from '@/components/services/DroneContent';
import EBusContent from '@/components/services/EBusContent';
import ForkliftContent from '@/components/services/ForkliftContent';
import TelekomunikasyonContent from '@/components/services/TelekomunikasyonContent';
import GolfCarContent from '@/components/services/GolfCarContent';
import HomeSolarSystemContent from '@/components/services/HomeSolarSystemContent';
import MarinContent from '@/components/services/MarinContent';
import MobilSolarContent from '@/components/services/MobilSolarContent';
import EnerjiDepolamaContent from '@/components/services/EnerjiDepolamaContent';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Type definitions
interface Photo {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface ContentItem {
  title: string;
  description: string;
}

interface ServiceConfig {
  title: string;
  category: string;
  image?: string;
  gradient: string;
  video?: string;
  photos?: Photo[];
  content?: ContentItem[];
  hasCustomComponent?: boolean;
}

// Hizmet verilerini tanımlayalım
const services: Record<string, ServiceConfig> = {
  'marin': {
    title: 'Marin',
    category: 'Denizcilik',
    video: marin_photo_mapping['video1'],
    gradient: 'from-blue-600 via-cyan-500 to-blue-400',
    hasCustomComponent: true
  },
  'solar-pole': {
    title: 'Solar Pole',
    category: 'Aydınlatma',
    image: '/hizmetlerimiz/solarpole.jpg',
    gradient: 'from-indigo-600 via-blue-500 to-teal-400',
    content: [
      {
        title: 'Solar Pole Nedir?',
        description: `Solar Pole, özellikle şehir güvenliği, kırsal alan izleme, inşaat sahaları gibi zorlu ortamlarda kullanılmak üzere geliştirilmiş, güneş enerjisi ile çalışan bağımsız direk sistemidir. Direğin üzerine yerleştirilen güneş panelleri, enerji üretimini sağlarken, akü grubu üretilen enerjiyi depolar ve bu sayede sürekli bir güç kaynağı oluşturur. Ayrıca, kamera sistemleri, uydu bağlantıları ve diğer iletişim cihazları entegre edilerek kapsamlı bir çözüm sağlanır. Solar Pole’lar, uzak bölgelerdeki kritik görevler için ideal bir enerji ve gözetim kaynağıdır.`,
      },
      {
        title: 'Solar Pole’un Avantajları',
        description: `Kesintisiz Enerji Sağlama:<br>Solar Pole çözümleri, güneş enerjisiyle çalıştıkları için, elektrik altyapısının olmadığı veya kesintilerin yaşandığı bölgelerde dahi enerji sağlamaya devam eder. Bu özellik, güvenlik, gözetim ve iletişim sistemlerinin kesintisiz çalışması açısından kritik öneme sahiptir. Çevre Dostu ve Sürdürülebilir Enerji Kullanımı: <br>Güneş enerjisi ile çalışan Solar Pole sistemleri, tamamen yenilenebilir enerji kullanarak, çevreye zarar vermeden enerji üretir. Bu, karbon ayak izini azaltırken, uzun vadede işletme maliyetlerini de düşürür. Kolay Kurulum ve Düşük Bakım Maliyeti:<br> Solar Pole çözümleri, elektrik altyapısının olmadığı bölgelerde büyük kazılar veya kablolama işlemleri gerektirmeden kurulabilir. Bu, hızlı bir kurulum süreci ve düşük maliyet anlamına gelir. Ayrıca, güneş enerjisi sistemlerinin bakım gereksinimi oldukça düşüktür. Modüler ve Özelleştirilebilir Yapı:<br> Solar Pole sistemleri, farklı yüksekliklerde ve ihtiyaçlara göre özelleştirilebilecek şekilde tasarlanmıştır. Kameralar, iletişim cihazları ve enerji depolama kapasitesi gibi unsurlar, kullanım alanlarına göre optimize edilebilir.
`,
      },
      {
        title: 'Solar Pole’un Kullanım Alanları',
        description: `Solar Pole çözümleri, enerjiye ihtiyaç duyulan birçok farklı alanda kullanılabilir. İşte başlıca kullanım alanları:<br><br>
<br>Şehir Güvenliği ve Gözetim: Şehir içindeki güvenlik kameraları, Solar Pole çözümleri ile sürekli çalışır durumda tutulabilir. Elektrik kesintilerinin yaşandığı durumlarda dahi bu kameralar aktif kalarak, kamu güvenliğini sağlamak için kesintisiz görüntü kaydı yapabilir.
<br>Kırsal Alan İzleme: Elektrik altyapısının olmadığı kırsal bölgelerde tarım alanları, ormanlar veya stratejik bölgelerin izlenmesi için Solar Pole kullanılabilir. Bu bölgelerde güvenlik ve denetim görevleri, Solar Pole sayesinde enerji kesintisi olmadan sürdürülebilir.
<br>İnşaat Sahaları: İnşaat projelerinde hem güvenlik hem de sahadaki faaliyetlerin denetlenmesi için Solar Pole çözümleri idealdir. İnşaat sahalarında sürekli elektrik sağlanamayabilir, bu nedenle güneş enerjisi ile çalışan bu direkler, hem kamera sistemlerine güç sağlar hem de sahadaki işçilerin güvenliği açısından kritik veriler sunar.
<br>Ulaşım ve Trafik Kontrol: Trafik izleme ve kontrol sistemleri, Solar Pole sistemleri ile entegre edilerek yolların izlenmesini ve trafik akışının düzenlenmesini sağlayabilir. Özellikle uzak otoyollar veya şehir dışındaki yollar, bu tür sistemlerden büyük fayda sağlar.
<br>Acil Durum İletişimi: Doğal afetler veya acil durumlarda, elektrik ve iletişim altyapısı zarar görebilir. Solar Pole, bu gibi acil durumlarda geçici iletişim ve izleme sistemi olarak kullanılabilir. Uydu ve kablosuz iletişim teknolojileriyle donatılan direkler, hızlı müdahaleyi mümkün kılar.
        `
      }
    ]
  },
  'car-port': {
    title: 'Car Port',
    category: 'Otomotiv',
    image: '/hizmetlerimiz/carport.jpg',
    gradient: 'from-green-600 via-emerald-500 to-teal-400',
    content: [
      {
        title: 'Eviniz ve İşyeri Otoparklarını Güneş Enerjisi ile Güçlendirin',
        description: `<b>Solar Car Port Nedir?</b><br/><br/>
Solar car port, otopark alanlarının üzerini kaplayan bir yapının çatısına güneş panelleri yerleştirilerek enerji üreten bir sistemdir. Elektrikli araç şarj istasyonlarıyla birleştirildiğinde, araç sahiplerine sürdürülebilir enerji kullanarak şarj imkanı sunar. Aynı zamanda otopark alanının üstü kapatılarak, araçların güneş, yağmur, kar gibi hava koşullarından korunması sağlanır. Solar car port’lar, hem evlerde hem de iş yerlerinde uygulanabilir, geniş bir kullanım alanına sahiptir.

<br/><br/><b>Çevresel Katkı ve Sürdürülebilirlik</b><br/><br/>
Solar car port çözümleri, güneş enerjisinden faydalanarak çevreye önemli bir katkı sağlar. Güneş enerjisi, fosil yakıtlara dayalı enerji üretimine kıyasla karbon salınımını minimuma indirir ve yenilenebilir bir kaynak olarak doğal dengeyi korur. Otoparklarda bu çözümlerin uygulanması, hem enerji üretimi sırasında çevreye verilen zararın azaltılmasına yardımcı olur hem de elektrikli araçların şarj edilmesiyle karbon ayak izinin düşürülmesini sağlar. Elektrikli araçların şarjı için temiz enerji kullanılması, hem kullanıcılar hem de çevre için büyük bir avantajdır.

<br/><br/><b>Otoparkların Fonksiyonel Kolaylığı</b><br/><br/>
Solar car port sistemleri, otopark alanlarına fonksiyonellik kazandırır. Araçların hava koşullarına karşı korunması, daha uzun ömürlü olmalarını sağlar. Örneğin, araçlarınız güneş ışınlarının zararlı etkilerinden korunurken, kış aylarında da kar ve yağmurdan etkilenmez. Aynı zamanda, ev ve işyeri otoparklarına entegre edilen solar car port’lar, var olan alanı verimli kullanmanızı sağlar. Araç park etmek için kullanılan alanlar, aynı zamanda enerji üretim alanına dönüşür. Bu da hem alan optimizasyonu hem de enerji verimliliği açısından oldukça işlevseldir.

<br/><br/><b>Elektrikli Araçlar için Kolay Şarj İmkanı</b><br/><br/>
Gelecekte elektrikli araçların sayısının artmasıyla birlikte, şarj altyapılarının geliştirilmesi büyük bir ihtiyaç haline gelmiştir. Solar car port çözümleri, elektrikli araç sahiplerine özel olarak tasarlanmış şarj istasyonları ile entegre edilerek, ev ve işyerlerinde kolayca elektrikli araç şarj imkanı sağlar. Bu sistemler, güneş enerjisiyle doğrudan çalışan şarj istasyonları sayesinde, elektrikli araçların temiz ve sürdürülebilir enerji ile şarj edilmesine olanak tanır. Böylece enerji maliyetlerinden tasarruf edilirken, aynı zamanda çevre dostu bir çözüm sunulur.

<br/><br/><b>Modern ve Estetik Görünüm</b><br/><br/>
Solar car port sistemleri, sadece enerji tasarrufu ve çevresel fayda sağlamaz, aynı zamanda otopark alanlarına modern ve estetik bir görünüm kazandırır. Geleneksel otopark yapılarına kıyasla daha şık ve yenilikçi tasarımlarla donatılan solar car port’lar, evinizin veya iş yerinizin genel görünümüne katkı sağlar. Gelişmiş mühendislik çözümleri ve modern tasarım çizgileriyle bu sistemler, işlevselliği estetikle buluşturur.

<br/><br/><b>Enerji Tasarrufu ve Ekonomik Avantajlar</b><br/><br/>
Unisun Enerji’nin sunduğu solar car port çözümleri, uzun vadede enerji maliyetlerinden büyük tasarruf sağlar. Otopark üzerindeki güneş panelleri, evin ya da iş yerinin elektrik ihtiyacının bir kısmını karşılayabilir ve böylece enerji faturalarını önemli ölçüde düşürebilir. Elektrikli araç sahipleri, araçlarını şarj etmek için harcayacakları elektrik maliyetini de bu sistem sayesinde minimuma indirebilir. Güneş enerjisinden elde edilen elektrik, şebeke elektriğine bağımlılığı azaltarak, enerji maliyetlerinden büyük bir tasarruf sağlar.`,
      }
    ]
  },

  'askeri-sistem-uygulamalari': {
    title: 'Askeri Sistem Uygulamaları',
    category: 'Savunma Sanayi',
    video: askeri_sistem_photo_mapping['video1'],
    gradient: 'from-green-900 via-green-700 to-green-600',
    hasCustomComponent: true
  },
  'drone': {
    title: 'Drone',
    category: 'Havacılık',
    video: drone_photo_mapping['video1'],
    gradient: 'from-purple-600 via-pink-500 to-red-400',
    hasCustomComponent: true
  },
  'e-bus': {
    title: 'E Bus',
    category: 'Ulaşım',
    video: ebus_photo_mapping['video1'],
    gradient: 'from-teal-600 via-blue-500 to-cyan-400',
    hasCustomComponent: true
  },
  'forklift': {
    title: 'Forklift',
    category: 'Endüstriyel',
    video: forklift_photo_mapping['video1'],
    gradient: 'from-orange-600 via-red-500 to-pink-400',
    hasCustomComponent: true
  },
  'telekomunikasyon': {
    title: 'Telekomünikasyon Baz İstasyonu',
    category: 'Telekomünikasyon',
    video: telekomunikasyon_photo_mapping['video1'],
    gradient: 'from-blue-600 via-cyan-500 to-blue-400',
    hasCustomComponent: true
  },
  'golf-araclari': {
    title: 'Golf Car',
    category: 'Rekreasyon',
    video: golfaraclari_photo_mapping['video1'],
    gradient: 'from-lime-600 via-green-500 to-emerald-400',
    hasCustomComponent: true
  },
  'konut-cozumleri': {
    title: 'Home Solar System',
    category: 'Konut',
    video: konutcozumleri_photo_mapping['video1'],
    gradient: 'from-amber-600 via-yellow-500 to-lime-400',
    hasCustomComponent: true
  },
  'mobil-solar': {
    title: 'Mobil Solar Panel Çözümleri',
    category: 'Mobil Enerji',
    video: mobil_solar_photo_mapping['video1'],
    gradient: 'from-orange-600 via-yellow-500 to-amber-400',
    hasCustomComponent: true
  },
  'enerji-depolama': {
    title: 'Enerji Depolama Sistemleri',
    category: 'Enerji Depolama',
    video: energidepolama_photo_mapping['video1'],
    gradient: 'from-indigo-600 via-purple-500 to-pink-400',
    hasCustomComponent: true
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  // Convert ServiceConfig to Service for AnimatedServicePage
  const animatedServicePageProps = {
    title: service.title,
    category: service.category,
    image: service.image,
    gradient: service.gradient,
    video: service.video,
    photos: service.photos || [],
    content: service.content || []
  };

  return (
    <>
      {/* Navigation */}
      <Navbar />

      <AnimatedServicePage service={animatedServicePageProps}>
        {/* Hero Section */}
        <section className="hero-section relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            {service.video ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={service.image}
              >
                <source src={service.video} type="video/mp4" />
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </video>
            ) : service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            ) : null}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <span className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold rounded-full mb-6 shadow-lg`}>
                {service.category}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                {service.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 drop-shadow-md">
                Tekin Power ile yenilenebilir enerji çözümlerinde öncü olmaya devam ediyoruz
              </p>
            </div>
          </div>
        </section>



        {/* Content Section - Dynamic Component or Default */}
        {service.hasCustomComponent ? (
          // Render custom component based on slug
          slug === 'marin' ? (
            <MarinContent gradient={service.gradient} />
          ) : slug === 'askeri-sistem-uygulamalari' ? (
            <AskeriSistemContent gradient={service.gradient} />
          ) : slug === 'drone' ? (
            <DroneContent gradient={service.gradient} />
          ) : slug === 'e-bus' ? (
            <EBusContent gradient={service.gradient} />
          ) : slug === 'forklift' ? (
            <ForkliftContent gradient={service.gradient} />
          ) : slug === 'telekomunikasyon' ? (
            <TelekomunikasyonContent gradient={service.gradient} />
          ) : slug === 'golf-araclari' ? (
            <GolfCarContent gradient={service.gradient} />
          ) : slug === 'konut-cozumleri' ? (
            <HomeSolarSystemContent gradient={service.gradient} />
          ) : slug === 'mobil-solar' ? (
            <MobilSolarContent gradient={service.gradient} />
          ) : slug === 'enerji-depolama' ? (
            <EnerjiDepolamaContent gradient={service.gradient} />
          ) : (
            // Default fallback for custom components
            <section className="content-section py-20 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">İçerik Yakında</h2>
                <p className="text-lg text-gray-600">Bu hizmet için özel içerik hazırlanmaktadır.</p>
              </div>
            </section>
          )
        ) : (
          // Default content section for services with regular content
          service.content && service.content.length > 0 && (
            <section className="content-section py-20 bg-gray-50">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="space-y-20">
                  {service.content.map((item, index) => (
                    <div key={index} className="content-item bg-white rounded-3xl shadow-xl overflow-hidden">
                      {/* Banner Header */}
                      <div className={`bg-gradient-to-r ${service.gradient} py-12 px-8 lg:px-16`}>
                        <div className="max-w-7xl mx-auto">
                          <div className="w-20 h-1 bg-white/30 rounded-full mb-6"></div>
                          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            {item.title}
                </h2>
                        </div>
                      </div>
                      
                      {/* Content Body */}
                      <div className="py-16 px-8 lg:px-16">
                        <div className="max-w-7xl mx-auto">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            {/* Main Content */}
                            <div className="lg:col-span-8">
                              <p
                                className="text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              />
              </div>
                            
                            {/* Side Image or Visual Element */}
                            <div className="lg:col-span-4">
                              {service.photos && service.photos[0] && (
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                                    src={service.photos[0].image}
                                    alt={service.photos[0].title}
                        fill
                                    className="object-cover"
                      />
                                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                                </div>
                              )}
                            </div>
                          </div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          )
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-8 lg:p-12`}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Projelerinizde Bizimle Çalışın
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {service.title} çözümlerimiz hakkında detaylı bilgi almak ve proje teklifiniz için bizimle iletişime geçin.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  İletişime Geçin
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </AnimatedServicePage>
    </>
  );
}

// Generate static params for all services
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }));
}
