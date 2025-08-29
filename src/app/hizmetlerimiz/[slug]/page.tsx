import { marin_photo_mapping } from '@/app/utils/photo-mappings/hizmetlerimiz/marin';
import AnimatedServicePage from '@/components/AnimatedServicePage';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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

interface Service {
  title: string;
  category: string;
  image?: string;
  gradient: string;
  video?: string;
  photos?: Photo[];
  content: ContentItem[];
}

// Hizmet verilerini tanımlayalım
const services: Record<string, Service> = {
  'marin': {
    title: 'Marin',
    category: 'Denizcilik',
    video: marin_photo_mapping['video1'],
    gradient: 'from-blue-600 via-cyan-500 to-blue-400',
    photos: [
      {
        id: 'B',
        image: marin_photo_mapping['photo1'],
        title: 'Marin Batarya Sistemleri',
        description: 'Deniz araçları için özel olarak tasarlanmış LiFePO4 batarya sistemlerimiz, yüksek performans ve güvenilirlik sunar.'
      },
      {
        id: 'C',
        image: marin_photo_mapping['photo2'],
        title: 'Güneş Paneli Entegrasyonu',
        description: 'Marin araçlara entegre edilmiş güneş panelleri ile sürdürülebilir enerji çözümleri sağlıyoruz.'
      },
      {
        id: 'D',
        image: marin_photo_mapping['photo3'],
        title: 'Hibrit Enerji Sistemleri',
        description: 'Solar enerji ve LiFePO4 bataryaların birleştiği hibrit sistemlerle optimum verimlilik elde edilir.'
      },
      {
        id: 'E',
        image: marin_photo_mapping['photo4'],
        title: 'Deniz Koşullarına Dayanıklılık',
        description: 'Zorlu deniz koşullarına dayanıklı olarak tasarlanan enerji sistemlerimiz, uzun ömürlü kullanım sağlar.'
      },
      {
        id: 'F',
        image: marin_photo_mapping['photo5'],
        title: 'Çevreci Marin Çözümleri',
        description: 'Çevre dostu teknolojilerimizle denizcilik sektöründe sürdürülebilir enerji kullanımını destekliyoruz.'
      }
    ],
    content: [
      {
        title: 'Marin LiFEPO4 Batarya Çözümleri',
        description: `Marin sektörü, enerji verimliliği, sürdürülebilirlik ve performans açısından büyük dönüşüm geçiriyor. Geleneksel enerji kaynaklarının sınırlı kalması ve çevresel etkiler göz önüne alındığında, yenilenebilir enerji teknolojileri denizcilikte daha önemli hale geliyor. Bu bağlamda, Unisun Enerji olarak LiFePO4 (Lityum Demir Fosfat) batarya ve solar çözümler ile marin sektörüne yönelik yenilikçi ve çevreci enerji çözümleri sunuyoruz.`
      },
      {
        title: 'Marin Sektöründe LiFePO4 Bataryaların Avantajları',
        description: `<b>Yüksek Enerji Yoğunluğu ve Verimlilik</b><br/><br/>
LiFePO4 bataryalar, geleneksel kurşun asit bataryalara kıyasla daha yüksek enerji yoğunluğuna sahiptir. Bu, daha az yer kaplayarak daha fazla enerji depolanması anlamına gelir. Marin sektöründe sınırlı alanlarda yüksek enerji ihtiyacını karşılamak için bu özellik büyük bir avantaj sağlar.<br/><br/>

<b>Uzun Ömür ve Dayanıklılık</b><br/><br/>
LiFePO4 bataryalar, döngü sayısı bakımından oldukça dayanıklıdır. Ortalama 6000-10000 şarj döngüsüne kadar dayanabilen bu bataryalar, uzun ömürlü kullanım imkânı sunar. Deniz ortamı gibi zorlu koşullarda dayanıklılık, marin sektöründe enerji çözümlerinde hayati önem taşır.<br/><br/>

<b>Hızlı Şarj ve Yüksek Güç Kapasitesi</b><br/><br/>
Deniz araçlarının operasyonel sürekliliği için hızlı şarj olabilme ve yüksek güç sağlayabilme özellikleri büyük önem taşır. LiFePO4 bataryalar, kısa sürede şarj olabilen yapılarıyla bu ihtiyacı karşılar. Ayrıca, yüksek güç kapasiteleriyle deniz araçlarının elektrikli motorlarını ve diğer sistemlerini etkin şekilde besleyebilirler.<br/><br/>

<b>Güvenlik ve Çevresel Duyarlılık</b><br/><br/>
LiFePO4 bataryalar, diğer lityum-ion batarya türlerine göre daha güvenli kabul edilir. Yüksek ısıya dayanıklı yapıları sayesinde patlama riski daha düşüktür ve çevreye zararlı gaz salınımı yapmazlar. Bu özellik, marin sektöründe hem güvenlik hem de çevre koruma açısından önem taşır.`
      },
      {
        title: 'Marin Uygulamalar için Solar Çözümler',
        description: `<b>Deniz Araçlarında Solar Panellerin Kullanımı</b><br/><br/>
Deniz araçlarının enerji ihtiyaçları, motor, elektronik cihazlar ve yaşam alanları için gerekli elektrik enerjisini içerebilir. Güneş panelleri, deniz araçlarına entegre edilerek bu ihtiyaçları karşılamak için sürdürülebilir bir enerji kaynağı sağlar. Özellikle seyir halinde veya demirli durumda güneş enerjisinden faydalanmak, fosil yakıtlara bağımlılığı önemli ölçüde azaltır.<br/><br/>

<b>Hibrit Sistemlerle Optimum Verimlilik</b><br/><br/>
Solar enerji ve LiFePO4 bataryaların birlikte kullanıldığı hibrit enerji sistemleri, marin araçlarda en yüksek verimliliği sağlar. Güneş enerjisi gündüzleri depolanarak, gece boyunca veya güneşin olmadığı zamanlarda LiFePO4 bataryalar aracılığıyla kullanılabilir. Bu sistemler, denizcilikte enerji kesintisi riskini minimuma indirir.<br/><br/>

<b>Çevresel Sürdürülebilirlik ve Maliyet Avantajı</b><br/><br/>
Güneş enerjisi ve LiFePO4 batarya çözümleri, uzun vadede maliyet avantajı sunar. Fosil yakıtlara kıyasla düşük bakım ve işletme maliyetleri ile dikkat çeken bu sistemler, marin sektörünün çevresel ayak izini azaltmada kritik rol oynar. Ayrıca, güneş enerjisi tamamen ücretsiz bir kaynak olduğundan, denizcilikte enerji maliyetlerini önemli ölçüde düşürmek mümkündür.`
      }
    ]
  },
  'telekomunikasyon-baz-istasyonu': {
    title: 'Telekomünikasyon Baz İstasyonu',
    category: 'Telekomünikasyon',
    image: '/hizmetlerimiz/telekomunikasyonbazistasyonu.jpg',
    gradient: 'from-blue-600 via-cyan-500 to-blue-400',
    content: [
      {
        title: 'LiFePO4 Batarya Teknolojisinin Telekomünikasyon Baz İstasyonlarında Kullanımı ve Unisun Energy’nin Katkıları',
        description: 'Telekomünikasyon sektörü, modern iletişim ağlarının temel yapı taşlarından biridir. Baz istasyonları, mobil veri akışını, sesli iletişimi ve dijital bağlantıyı sürdürülebilir kılan kritik altyapı unsurlarıdır. Ancak bu istasyonların kesintisiz çalışması, enerji güvenliğine doğrudan bağlıdır. Geleneksel enerji depolama çözümleri, sınırlı performansları ve yüksek bakım maliyetleri nedeniyle sektörde yerini daha yenilikçi teknolojilere bırakmaktadır. Bu bağlamda, LiFePO4 (Lityum Demir Fosfat) batarya teknolojisi, telekomünikasyon sektörüne güvenilir, verimli ve çevreci bir çözüm sunmaktadır. Unisun Energy, enerji depolama alanındaki uzmanlığıyla, LiFePO4 teknolojisini baz istasyonlarına uyarlayan öncü çalışmalara imza atmakta ve sektöre yenilikçi çözümler sunmaktadır.'
      },
      {
        title: 'Baz İstasyonları ve Enerji İhtiyacı',
        description: 'Baz istasyonları, 7/24 kesintisiz hizmet sağlamak için sürekli bir enerji kaynağına ihtiyaç duyar. Elektrik şebekesine bağlı olan bu sistemler, şebeke kesintileri veya elektrik dalgalanmaları durumunda devreye girecek güvenilir bir yedek enerji kaynağı gerektirir. Ayrıca kırsal bölgelerde, uzak veya şebeke elektriğinin sınırlı olduğu yerlerde baz istasyonlarının enerji yönetimi daha büyük bir zorluk oluşturur. LiFePO4 bataryalar, bu zorluklara karşı geliştirilmiş bir çözüm sunar. Telekomünikasyon altyapılarında sağladıkları avantajlar, hem operasyonel maliyetleri düşürür hem de hizmet sürekliliğini artırır.'
      },
      {
        title: 'LiFePO4 Bataryaların Telekomünikasyon Baz İstasyonlarındaki Avantajları',
        description: `LiFePO4 bataryalar, geleneksel bataryalara göre daha yüksek performans, daha uzun ömür ve daha düşük bakım maliyetleri sunar. Bu özellikler, telekomünikasyon sektöründe önemli avantajlar sağlar:\n

1. <b>Yüksek Performans:</b> LiFePO4 bataryalar, daha hızlı şarj ve boşalma süreleri sunar. Bu, operasyonel verimliliği artırır ve hizmet sürekliliğini sağlar.
\n
2. <b>Uzun Ömür:</b> LiFePO4 bataryalar, daha uzun ömürlüdür. Bu, daha az bakım ve daha az yenileme maliyetleri anlamına gelir.
\n
3. <b>Düşük Bakım Maliyetleri:</b> LiFePO4 bataryalar, daha az bakım gerektirir. Bu, operasyonel maliyetleri düşürür ve hizmet sürekliliğini sağlar.
\n
4. <b>Çevreci:</b> LiFePO4 bataryalar, çevresel etkileri daha azdır. Bu, telekomünikasyon sektöründe çevre koruma politikalarına uygun bir çözüm sunar.`
      }
    ]
  },
  'askeri-sistem-uygulamalari': {
    title: 'Askeri Sistem Uygulamaları',
    category: 'Savunma',
    image: '/hizmetlerimiz/askerisistemuygulamalari.jpg',
    gradient: 'from-green-600 via-emerald-500 to-teal-400',
    content: [
      {
        title: 'Askeri Sistem Uygulamalarında LiFEPO4 Batarya ve Enerji Çözümlerimiz',
        description: `Gelişen teknoloji, modern savunma sistemlerinde enerji yönetimini kritik bir öncelik haline getirmiştir. Askeri araçlar, sistemler ve platformlar, güvenilir, verimli ve uzun ömürlü enerji çözümlerine olan ihtiyaç doğrultusunda dönüşüm geçirmektedir. Bu bağlamda LiFePO4 (Lityum Demir Fosfat) batarya teknolojisi, geleneksel enerji kaynaklarına göre üstün avantajlar sunarak askeri uygulamalarda devrim yaratmaktadır. Unisun Energy, Türkiye merkezli bir enerji çözüm şirketi olarak, bu teknolojiyi savunma sanayisindeki kritik araçlar olan helikopterler, savaş gemileri ve tanklar gibi platformlara entegre etmeye yönelik yenilikçi çalışmalar yürütmektedir.`
      },
      {
        title: 'LiFePO4 Bataryaların Askeri Uygulamalardaki Avantajları',
        description: `1. <b>Güvenlik ve Stabilite:</b>
LiFePO4 bataryalar, termal kararlılıkları ve kimyasal yapıları sayesinde, yüksek sıcaklık ve zorlu çalışma koşullarında bile güvenli bir şekilde çalışır. Bu özellik, özellikle savaş gemileri, helikopterler ve tanklar gibi yoğun operasyonel gereksinimlere sahip platformlarda kritik bir öneme sahiptir.
<br>
2. <b>Uzun Ömür ve Dayanıklılık:</b>
LiFePO4 bataryalar, 6.000 ila 10.000 şarj-deşarj döngüsü sunarak uzun süreli kullanım sağlar. Askeri operasyonlarda bu, lojistik maliyetlerin düşürülmesi ve operasyonel sürekliliğin sağlanması anlamına gelir.
<br>
3. <b>Hafiflik ve Kompakt Tasarım:</b>
LiFePO4 bataryaların hafif ve kompakt yapısı, platformların ağırlık yükünü azaltırken, daha fazla ekipman veya mühimmat taşıma kapasitesi sunar.
<br>
4. <b>Çevresel Uyum ve Düşük Bakım Gereksinimi:</b>
Geleneksel kurşun-asit bataryalara kıyasla daha çevreci olan LiFePO4, uzun süre bakım gerektirmemesiyle de askeri operasyonlar için büyük bir avantaj oluşturur.`
      },
      {
        title: 'Unisun Energy’nin Savunma Sanayisine Katkıları',
        description: `Unisun Energy, savunma sanayisindeki enerji ihtiyaçlarını karşılamak üzere LiFePO4 teknolojisini özelleştirilmiş çözümler halinde sunmaktadır. Şirketin bu alandaki başlıca çalışmaları şunlardır:
<br>
1. <b>Helikopterlerde Kullanım:</b>
Askeri helikopterler, zorlu hava ve arazi koşullarında enerjiye bağımlıdır. Unisun Energy, helikopterler için yüksek enerji yoğunluğuna sahip, hızlı şarj olabilen ve uzun süreli güç sağlayan batarya sistemleri geliştirmektedir. Bu bataryalar, uçuş sırasında kritik elektronik sistemlerin kesintisiz çalışmasını sağlarken, bakım süreçlerini de kolaylaştırmaktadır.
<br>
2. <b>Savaş Gemilerinde Kullanım:</b>
Savaş gemileri, denizlerde operasyonel üstünlük sağlamak için radar sistemlerinden silah sistemlerine kadar yüksek enerji gereksinimleri duyar. Unisun Energy, gemilerin enerji sistemlerinde kullanılmak üzere deniz koşullarına dayanıklı, yüksek kapasiteli ve uzun ömürlü LiFePO4 bataryalar tasarlamaktadır. Ayrıca, bu bataryalar enerji verimliliğini artırarak gemilerin görev sürekliliğine katkı sağlar.
<br>
3. <b>Tanklarda Kullanım:</b>
Tanklar, kara savaşlarında zorlu çevre koşullarında üstün performans göstermelidir. LiFePO4 bataryalar, tankların motor çalıştırma sistemleri, haberleşme ekipmanları ve elektronik savunma sistemleri için güvenilir enerji kaynağı sunar. Unisun Energy, tanklar için geliştirdiği bataryalarda şok ve titreşim direncine özel önem vermektedir.`
      }
    ]
  },
  'ges-cati-projeleri': {
    title: 'GES Çatı Projeleri',
    category: 'Güneş Enerjisi',
    image: '/hizmetlerimiz/gescatiprojeleri.jpg',
    gradient: 'from-yellow-600 via-orange-500 to-red-400',
    content: [
      {
        title: 'Kurumsal Çözümlerle Tasarruf ve Sürdürülebilirlik',
        description: 'Unisun Energy, kurumsal firmalara sunduğu yenilikçi off-grid güneş enerjisi sistemi (GES) projeleri ile işletmelerin enerji maliyetlerini minimize ederek daha fazla bütçe tasarrufu sağlama imkanı sunar. Elektrik şebekesine bağımlı kalmadan enerji üretimi ve yönetimi sağlayan bu sistemler, kurumsal çatıların verimli bir enerji kaynağına dönüştürülmesini mümkün kılar. Çatıya monte edilen güneş panelleri sayesinde işletmeler, güneşten gelen enerjiyi elektriğe dönüştürerek kesintisiz bir enerji kaynağı elde eder.'
      },
      {
        title: 'Kurumsal Firmalar için Avantajlar',
        description: `1. <b>Elektrik Maliyetlerini Azaltma:</b> <br>
Unisun Energy’nin off-grid GES projeleri, işletmelerin enerji faturalarını büyük ölçüde düşürmesine yardımcı olur. Güneş enerjisi kullanarak elde edilen elektrik, şebekeden enerji satın alma ihtiyacını ortadan kaldırır. Bu durum, özellikle yüksek enerji tüketimine sahip üretim tesisleri, depolar ve ticari binalar için maliyet avantajı sağlar.
<br>
2. <b>Bağımsız Enerji Kaynağı:</b> <br>
Şebeke bağlantısına ihtiyaç duymayan off-grid sistemler, enerji arz güvenliği sunar. Elektrik kesintilerinden etkilenmeden çalışabilen bu sistemler, üretim ve operasyon süreçlerinde kesintisiz enerji sağlar. Bu, işletmelerin sürdürülebilirlik hedeflerine ulaşmasına katkıda bulunur.
<br>
3. <b>Çevre Dostu ve Sürdürülebilir Çözümler:</b> <br>
Güneş enerjisi tamamen yenilenebilir ve temiz bir enerji kaynağıdır. Karbon salınımını azaltarak çevre dostu bir çözüm sunan off-grid GES projeleri, kurumsal firmaların çevre sorumluluğunu yerine getirmesine ve “yeşil enerji” kimliği kazanmasına katkıda bulunur.
<br>
4. <b>Verimli Enerji Yönetimi:</b> <br>
Unisun Energy tarafından sağlanan sistemler, son teknoloji enerji depolama çözümleri ile donatılmıştır. LiFePO4 bataryalar, uzun ömürleri ve yüksek verimlilikleri sayesinde enerjiyi etkili bir şekilde depolar. Bu sayede, işletmeler güneş enerjisinden maksimum fayda sağlayabilir.
<br>
5. <b>Bütçeden Tasarruf:</b> <br>
Sistem, yalnızca enerji maliyetlerini düşürmekle kalmaz; aynı zamanda işletmelerin uzun vadeli bütçe planlamasına katkıda bulunur. Güneş enerjisi sistemleri, kurulum maliyetini birkaç yıl içinde amorti eder ve daha sonrasında tamamen ücretsiz bir enerji kaynağı haline gelir.`
      }
    ]
  },
  'home-solar-system': {
    title: 'Home Solar System',
    category: 'Konut',
    image: '/hizmetlerimiz/homesolarsystem.jpg',
    gradient: 'from-amber-600 via-yellow-500 to-lime-400',
    content: [
      {
        title: 'Ev Uygulamaları için LiFePO4 Batarya ve Enerji Çözümlerimiz',
        description: `Unisun Energy olarak sunduğumuz ev uygulamaları için LiFePO4 batarya ve enerji çözümleri, modern evlerin enerji ihtiyaçlarını karşılamak üzere tasarlanmış güvenilir, uzun ömürlü ve verimli bir enerji kaynağıdır. Geleneksel bataryalara göre çok daha uzun bir kullanım ömrüne sahip olan LiFePO4 bataryalar, 15 yılı aşan dayanıklılığı ile evlerde kesintisiz güç sağlamada mükemmel bir tercih sunmaktadır.
<br>
Bu bataryalar, yüksek verimliliği ve dayanıklılığı sayesinde sık sık değişim gerektirmez, bu da ev sahiplerine hem maliyet hem de zaman açısından büyük avantajlar sunar. Bakım gerektirmeyen yapısı, kullanıcılar için büyük kolaylık sağlarken, sürekli bakım veya izleme gerektiren diğer batarya türlerine kıyasla büyük bir fark yaratır. Yani, evinizi enerji verimliliğine ve maliyet tasarrufuna yönlendiren bir sistem kurmuş olursunuz.
<br>
LiFePO4 bataryaların bir diğer önemli avantajı, enerji tasarrufu sağlamasıdır. Güneş enerjisi sistemleri ile entegre çalışabilen bu bataryalar, gündüz güneş panelleri aracılığıyla üretilen enerjiyi depolayarak gece boyunca veya güneşin olmadığı dönemlerde kullanmanızı sağlar. Bu sayede dış enerji kaynaklarına bağımlılığı en aza indirirken, aynı zamanda elektrik faturalarınızda da kayda değer bir düşüş sağlar.`
      },
      {
        title: 'LiFEPO4 Enerjide Yüksek Standartlar',
        description: `Çevre dostu bir çözüm olarak LiFePO4 bataryalar, karbon ayak izini azaltmak ve yenilenebilir enerjiye geçiş yapmak isteyen ev sahipleri için ideal bir seçenektir. Geri dönüştürülebilir yapısı ve çevreye zarar vermeyen üretim süreçleri ile LiFePO4 bataryalar, doğa dostu bir enerji kaynağı olarak öne çıkar. Geleneksel fosil yakıtlarla çalışan enerji sistemlerine kıyasla çok daha sürdürülebilir bir alternatiftir.
<br>
Bu bataryaların güvenilirliği ve verimliliği, aynı zamanda elektrik kesintileri sırasında evinizi koruma altına alır. Depoladığı enerjiyi gerektiğinde devreye sokarak elektrik kesintilerinde bile hayatınızı kesintisiz sürdürebilmenizi sağlar. Bu, özellikle sık sık enerji kesintileri yaşayan bölgelerde büyük bir avantajdır.`
      }
    ]
  },
  'drone': {
    title: 'Drone',
    category: 'Havacılık',
    image: '/hizmetlerimiz/drone.jpg',
    gradient: 'from-purple-600 via-pink-500 to-red-400',
    content: [
      {
        title: 'VTOL Drone Batarya Çözümleri',
        description: `Unisun Energy, hızla gelişen drone teknolojisi alanında kritik bir öneme sahip enerji çözümleri sunarak, özellikle VTOL (Vertical Take-Off and Landing) dronlar için en verimli bataryaları ithal ediyor. VTOL dronlar, dikey kalkış ve iniş yeteneğiyle sabit kanatlı ve döner kanatlı dronların en iyi özelliklerini bir araya getirir. Bu çok yönlülük, özellikle uzun süreli operasyonlar ve zorlu görevler için daha gelişmiş ve güvenilir enerji çözümlerine olan ihtiyacı artırıyor.

Unisun Energy olarak, Lithium Polimer (Li-Po), Lithium İyon (Li-ion) ve Lityum Demir Fosfat (LiFePO4) gibi çeşitli batarya teknolojileriyle VTOL dronlara uygun enerji çözümleri sunuyoruz. Bu bataryalar, VTOL dronların enerji verimliliğini artırırken, performans ve güvenilirlik açısından mükemmel sonuçlar verir.`
      },
      {
        title: 'VTOL Dronların Kullanım Alanları',
        description: `Keşif ve Haritalama: Uzun uçuş süreleri gerektiren görevlerde VTOL dronlar, geniş alanları tarayarak haritalama yapabilir. Bu tür görevlerde, güvenilir ve uzun süreli güç kaynağı sağlayan Li-ion ve LiFePO4 bataryalar öne çıkar.
<br>Güvenlik ve Gözetim: VTOL dronlar, güvenlik ve izleme görevlerinde kritik öneme sahiptir. Yüksek çözünürlüklü kamera sistemleri ile entegre çalışan bu dronlar, sürekli gözetim sağlayarak güvenlik güçlerine yardımcı olur. Li-Po bataryalar, bu görevlerde kısa süreli yüksek enerji ihtiyaçlarını karşılarken, Li-ion bataryalar uzun süreli sabit enerji sağlar.
<br>Tarım: Hassas tarım uygulamalarında VTOL dronlar, ekin sağlığını izleyebilir, sulama analizleri yapabilir ve tarım arazilerini detaylı bir şekilde haritalayabilir. Bu tür görevlerde dayanıklı ve çevre dostu LiFePO4 bataryalar kullanılır.
<br>Lojistik: VTOL dronlar, özellikle zor ulaşılabilir bölgelerde kargo ve lojistik operasyonlarında önemli bir rol oynar. Hafif, uzun ömürlü ve hızlı şarj olabilen Li-Po bataryalar, lojistik operasyonlarının kesintisiz devam etmesini sağlar.`
      },
      {
        title: 'Unisun Energy’nin Batarya Çözümleri',
        description: `<b>1. Lithium Polimer (Li-Po) Bataryalar</b><br>
Li-Po bataryalar, VTOL dronlar için yüksek enerji yoğunluğu sağlayan ve hafiflikleriyle operasyonel avantaj sunan çözümlerden biridir. Bu bataryalar, hızlı şarj olma yetenekleri ve yüksek güç çıkışı ile özellikle kısa sürede büyük enerji gereksinimi duyan VTOL dronların kalkış ve iniş aşamalarında ideal performans sağlar. Li-Po bataryalar, zorlu koşullarda bile üstün dayanıklılık ve güvenilirlik sunar.
Yüksek Enerji Yoğunluğu: Daha az ağırlıkla daha fazla enerji depolar, bu da VTOL dronların daha uzun süre uçmasını sağlar.
Hızlı Şarj: Dronlar, operasyonlar arasında kısa sürede şarj edilebilir, böylece görev sürekliliği sağlanır.
Esneklik: Li-Po bataryalar, VTOL dronların tasarımına ve ağırlık dağılımına uygun şekilde şekillendirilebilir.
 
<b>2. Lithium İyon (Li-ion) Bataryalar</b><br>
Li-ion bataryalar, VTOL dronlar için uzun uçuş süreleri ve yüksek çevrim ömrü sağlayan çözümlerdir. Sabit ve güvenilir enerji sağlayarak, özellikle keşif ve haritalama gibi uzun süreli uçuşlar için idealdir.
Uzun Ömür: Yüksek çevrim ömrü ile birçok kez şarj edilip boşaltılabilir, bu da maliyetleri azaltır.
Güvenilir Güç Çıkışı: Sabit enerji çıkışı sağlayarak dronların uzun süreli uçuşlarına güvenilir destek sağlar.
Daha Yüksek Güvenlik: Isınma riskini azaltan tasarımı ile güvenli operasyonlar sunar.
 
<b>3. Lityum Demir Fosfat (LiFePO4) Bataryalar</b><br>
LiFePO4 bataryalar, VTOL dronlar için güvenlik ve dayanıklılık sunan enerji çözümleridir. Yüksek termal kararlılığa sahip bu bataryalar, aşırı ısınma ve güvenlik risklerini minimize ederken, çevre dostu yapısıyla da dikkat çeker.
Yüksek Güvenlik: LiFePO4 bataryalar, termal olarak stabildir ve patlama riskine karşı oldukça güvenlidir.
Uzun Çevrim Ömrü: Bu bataryalar uzun süreli kullanım ve birçok şarj döngüsüne dayanıklıdır.
Çevre Dostu: Diğer lityum bazlı bataryalara göre daha az toksik bileşen içerir, bu da çevresel sürdürülebilirliği artırır.`
      }
    ]
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
  'e-bus': {
    title: 'E Bus',
    category: 'Ulaşım',
    image: '/hizmetlerimiz/ebus.jpg',
    gradient: 'from-teal-600 via-blue-500 to-cyan-400',
    content: [
      {
        title: 'Elektrikli Otobüslerde LiFePO4 Batarya Devrimi',
        description: `Lifepo4 bataryalar, elektrikli araç teknolojisinde öne çıkan çözümlerden biri olarak enerji yoğunluğu, güvenlik ve uzun ömür gibi özellikleriyle dikkat çeker. Unisun Energy olarak, bu gelişmiş bataryaları e-Bus projemiz ile elektrikli otobüslere entegre ediyoruz. Bu bataryalar, şu avantajları sunuyor:<br>
        <br><b>Uzun Ömür ve Düşük Bakım Maliyeti</b>
Lifepo4 bataryaların uzun ömürlü yapısı sayesinde otobüslerin batarya değişim maliyetleri minimize edilir. Ayrıca bakım maliyetlerinin de düşük olması, toplam işletim maliyetlerini azaltır.
<br>
<b>Güvenlik</b>
Bataryalar, yüksek sıcaklıklara karşı dayanıklı olup, yangın veya patlama riskini minimize eder, böylece güvenli bir ulaşım sistemi sağlar.
<br>
<b>Sessiz ve Konforlu Bir Yolculuk</b>
Elektrikli otobüslerin en büyük avantajlarından biri, motorlarının sessiz çalışmasıdır. Geleneksel dizel motorların yarattığı yüksek ses seviyesi, özellikle yoğun şehir içi trafiğinde hem yolcular hem de çevredekiler için bir gürültü kirliliği kaynağıdır. Ancak elektrikli otobüsler, sessiz motorlarıyla bu sorunu ortadan kaldırır ve daha huzurlu bir yolculuk deneyimi sunar. Daha az titreşim ve gürültü, yolcular için konforlu bir ortam sağlarken, toplu taşıma ile seyahat etmek daha cazip hale gelir. Sessiz çalışmaları sayesinde, otobüsler gece saatlerinde dahi rahatsızlık vermeden hizmet verebilir.
<br>
<b>Dönüşüm ile Sıfır Emisyon</b>
Unisun Energy’nin e-Bus projesi sadece yeni elektrikli otobüs üretmekle sınırlı değil. Aynı zamanda mevcut fosil yakıtla çalışan otobüslerinizi elektrikli sisteme dönüştürme hizmeti de sunuyoruz. Bu dönüşüm sayesinde eski otobüsler, hem çevre dostu bir yapıya kavuşuyor hem de karbon emisyonları sıfırlanıyor. Bu, kentlerin sürdürülebilir ulaşım hedeflerine ulaşmasında önemli bir adım. Elektrikli sisteme dönüştürülen otobüsler, fosil yakıt tüketimini tamamen ortadan kaldırarak, hava kirliliğine ve küresel ısınmaya karşı etkili bir çözüm sunar. Bu sayede şehirler, daha temiz hava kalitesine ve yeşil enerji kaynaklarına dayalı bir ulaşım sistemine sahip olur.
<br>
<b>Ekonomik Avantajlar ve Düşük Maliyetli Yeni Sürüş Deneyimi</b>
Geleneksel içten yanmalı motorlu otobüslerin işletme maliyetleri, yakıt fiyatlarının artışıyla birlikte ciddi boyutlara ulaşabilmektedir. Ancak elektrikli otobüsler, hem yakıt hem de bakım maliyetleri açısından önemli avantajlar sunar.
<br>
<b>Yakıt Tasarrufu</b>
Elektrikli otobüslerin enerji tüketimi, fosil yakıtlara göre çok daha düşük maliyetlidir. Lifepo4 bataryaların enerji verimliliği sayesinde otobüsler, daha az enerji harcar ve bu da yakıt maliyetlerinin ciddi oranda azalmasını sağlar.
<br>
<b>Bakım Maliyetlerinde Azalma</b>
Elektrikli motorlar, geleneksel dizel motorlara göre çok daha az bakım gerektirir. Daha az mekanik parça ve aşınma, bakım sürecini basitleştirir ve maliyetleri düşürür. Bu ekonomik avantajlar, şehirlerin ulaşım bütçelerini hafifletirken, daha düşük maliyetlerle çevreye duyarlı bir toplu taşıma ağı kurulmasına olanak tanır. Ayrıca, otobüslerin daha uzun ömürlü olması ve yüksek verimli bataryalar ile işletme sürelerinin artması, hem kamusal hem de özel sektörde maliyet avantajı sağlar.
<br>
<b>Çevresel Etkiler: Daha Temiz Bir Gelecek</b>
Dünyanın dört bir yanında şehirler, karbon salınımını azaltmak ve iklim değişikliği ile mücadele etmek için elektrikli ulaşım çözümlerine yöneliyor. Unisun Energy’nin e-Bus projesi, bu hedefe ulaşmak için etkili bir çözüm sunar. Elektrikli otobüsler, sıfır emisyon ile çalışarak hava kirliliğini minimuma indirir. Bu sayede şehirler, çevre dostu ulaşım sistemlerine sahip olurken, aynı zamanda toplu taşımayı daha cazip hale getirir.`
      },
      {
        title: 'Ulaşımda Yeşil Dönüşüm',
        description: `Unisun Energy olarak, toplu taşımada yenilikçi ve çevreci çözümler sunuyoruz. e-Bus projemiz, elektrikli otobüslerle sadece daha konforlu ve sessiz bir yolculuk sağlamakla kalmıyor, aynı zamanda çevre dostu, düşük maliyetli ve sürdürülebilir bir ulaşım modeli sunuyor. Lifepo4 bataryalarla desteklenen bu projeyle, geleceğin şehirlerinde temiz hava, sıfır emisyon ve daha huzurlu bir yaşam vaat ediyoruz.

Mevcut otobüslerinizi elektrikli sisteme dönüştürmek ya da yeni elektrikli otobüsler edinmek için Unisun Energy’nin sunduğu çözümler, şehirlerin sürdürülebilirlik hedeflerine ulaşmasına büyük katkı sağlayacak. Geleceğe temiz bir miras bırakmak için e-Bus projesi ile birlikte yol alalım!`,
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
  'golf-car': {
    title: 'Golf Car',
    category: 'Rekreasyon',
    image: '/hizmetlerimiz/golfcar.jpg',
    gradient: 'from-lime-600 via-green-500 to-emerald-400',
    content: [
      {
        title: 'Golf Araçları için LiFEPO4 Batarya Çözümleri',
        description: `Unisun Energy, LiFePO4 batarya teknolojisi ile golf araçlarına devrim niteliğinde enerji çözümleri sunmaktadır. Uzun ömürlülük, yüksek verimlilik, sessiz ve bakımsız kullanım özellikleriyle öne çıkan bu bataryalar, golf araçlarının performansını en üst seviyeye taşır. Unisun Energy’nin geliştirdiği LiFePO4 bataryalar, klasik batarya sistemlerine göre çok daha uzun ömürlü olup, maliyet avantajı sunar.

Golf araçları için tasarlanan bu enerji çözümleri, minimum bakım gereksinimi ve güçlü performansı ile kullanıcılara kesintisiz bir sürüş deneyimi sağlar. Hem çevre dostu hem de sürdürülebilir yapısıyla öne çıkan Unisun Energy bataryaları, golf sahalarında sessiz çalışma imkanı sunarken, uzun mesafelerde dahi aynı yüksek performansı korur.`
      },
      {
        title: 'Öne Çıkan Avantajlar',
        description: `<b>• Uzun Ömür:</b><br/>
LiFePO4 bataryalar, klasik bataryalara kıyasla 3 kat daha uzun bir kullanım ömrüne sahiptir.<br/><br/>

<b>• Yüksek Verimlilik:</b><br/>
Düşük enerji kaybı ve yüksek dönüşüm oranları sayesinde şarj döngüleri daha verimli hale gelir.<br/><br/>

<b>• Bakım Gerektirmeyen Kullanım:</b><br/>
LiFePO4 teknolojisi, geleneksel bataryalar gibi düzenli bakım gerektirmez, böylece zaman ve maliyet tasarrufu sağlar.<br/><br/>

<b>• Güçlü Performans:</b><br/>
Zorlu koşullarda dahi maksimum performans sunarak golf araçlarının gücünü artırır.<br/><br/>

<b>• Sessiz Çalışma:</b><br/>
Saha boyunca sessiz ve kesintisiz sürüş deneyimi ile konforu artırır.`
      }
    ]
  },

  'forklift': {
    title: 'Forklift',
    category: 'Endüstriyel',
    image: '/hizmetlerimiz/forklift.jpg',
    gradient: 'from-orange-600 via-red-500 to-pink-400',
    content: [
      {
        title: 'Forklift için LiFEPO4 Batarya Çözümleri',
        description: `Lojistik sektörü, hızla büyüyen global tedarik zincirleri ve depolama ihtiyaçlarıyla birlikte enerji verimliliği ve operasyonel sürdürülebilirlik konularında sürekli yeniliklere ihtiyaç duymaktadır. Forkliftler, bu sektörün omurgasını oluşturan kritik iş makineleri arasında yer alır. Ancak, yoğun ve sürekli kullanımları, enerji yönetimi açısından ciddi zorluklar yaratır. Unisun Enerji olarak, lojistik sektörünün bu ihtiyaçlarına uygun LiFePO4 (Lityum Demir Fosfat) batarya ve solar çözümler sunarak, forkliftlerin tam zamanlı kesintisiz çalışmasını sağlayan yenilikçi ve çevreci bir çözüm sunuyoruz.`
      },
      {
        title: 'LiFePO4 Bataryaların Lojistik Sektöründeki Avantajları',
        description: `<b>Uzun Ömürlü ve Dayanıklı Kullanım</b><br/><br/>
Forkliftlerin lojistik operasyonlarında sürekli kullanılması, enerji sistemlerinin dayanıklılığı ve uzun ömürlü olması gerektiği anlamına gelir. LiFePO4 bataryalar, geleneksel kurşun-asit bataryalara kıyasla çok daha uzun ömürlüdür ve 6000 – 10000 şarj döngüsüne kadar dayanabilir. Bu, forkliftlerin kesintisiz şekilde uzun yıllar hizmet vermesini sağlar.<br/><br/>

<b>Yüksek Verimlilik ve Enerji Yoğunluğu</b><br/><br/>
LiFePO4 bataryalar, enerji yoğunluğu açısından oldukça verimlidir. Bu sayede daha küçük batarya kapasiteleri ile daha uzun süre enerji sağlayabilirler. Lojistik sektöründe forkliftlerin sürekli hareket halinde olması gerektiğinden, bu bataryalar forkliftlerin daha az şarj edilerek daha uzun süre çalışabilmesini sağlar.<br/><br/>

<b>Hızlı Şarj İmkânı</b><br/><br/>
Forkliftlerin durmaksızın çalışması gerektiği durumlarda, LiFePO4 bataryalar hızla şarj edilebilme özelliği ile öne çıkar. Geleneksel bataryaların saatler süren şarj süreçlerine karşılık LiFePO4 bataryalar, forkliftlerin birkaç saat içinde tam kapasiteye ulaşmasını sağlar. Böylece iş gücü kaybı en aza indirilir ve operasyonlar kesintisiz bir şekilde devam eder.<br/><br/>

<b>Güvenli ve Çevre Dostu</b><br/><br/>
Lojistik operasyonlarının büyük bir kısmı kapalı depo ve lojistik merkezlerinde gerçekleşir. LiFePO4 bataryaların sunduğu güvenlik özellikleri, bu kapalı alanlarda çalışan forkliftler için kritik bir avantajdır. Lityum Demir Fosfat teknolojisi, termal kaçak riskini minimize ederek patlama veya yangın tehlikesini ortadan kaldırır. Aynı zamanda bu bataryalar çevreye zarar vermeyen yapısı ile sektörde çevreci bir alternatif sunar.`
      },
      {
        title: 'Solar Enerji İle Tam Zamanlı Kesintisiz Enerji',
        description: `<b>Solar Enerji ile Kesintisiz Enerji Sağlama</b><br/><br/>
Forkliftler gün boyu sürekli çalışmak zorunda olduğunda, enerji maliyetleri ve kesinti riskleri önemli bir sorun haline gelebilir. Güneş enerjisiyle desteklenen şarj istasyonları, forkliftlerin sürekli olarak kesintisiz çalışmasını sağlayabilir. Güneş panelleri gün boyunca enerji üretir ve bu enerji LiFePO4 bataryalar aracılığıyla depolanarak forkliftlerin gece ve güneşin olmadığı saatlerde de enerji ihtiyacını karşılar.<br/><br/>

<b>Operasyonel Maliyetlerin Azaltılması</b><br/><br/>
Güneş enerjisi tamamen ücretsiz bir kaynak olduğundan, uzun vadede enerji maliyetlerinde büyük bir düşüş sağlar. Lojistik sektöründe özellikle büyük depolarda çok sayıda forkliftin kullanıldığı düşünüldüğünde, solar enerjili şarj istasyonlarıyla maliyetler önemli ölçüde azalır. Böylece işletmeler hem çevre dostu bir enerji kaynağı kullanırken hem de uzun vadede büyük tasarruflar elde edebilir.<br/><br/>

<b>Çevreci ve Sürdürülebilir Çözümler</b><br/><br/>
Lojistik sektöründe kullanılan enerji miktarı oldukça yüksektir. Fosil yakıtlı veya geleneksel enerji kaynaklarına dayalı çözümler, çevreye olumsuz etkiler bırakırken, güneş enerjisi kullanımı çevresel ayak izini minimize eder. Unisun Enerji’nin sunduğu güneş enerjisi ve LiFePO4 batarya çözümleri, lojistik sektörünü daha çevre dostu ve sürdürülebilir bir hale getirir.

`
      }
    ]
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

  return (
    <>
      {/* Navigation */}
      <Navbar />

      <AnimatedServicePage service={service}>
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

        {/* Photos Gallery Section - Only for marin */}
        {slug === 'marin' && service.photos && (
          <section className="photos-section py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Proje Galerisi
                </h2>
                <div className={`w-20 h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.photos.map((photo, index) => (
                  <div key={photo.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {photo.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="content-section py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {service.content.map((item, index) => (
                <div key={index} className="content-item bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="mb-6">
                    <div className={`w-16 h-1 bg-gradient-to-r ${service.gradient} rounded-full mb-4`}></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {item.title}
                    </h2>
                  </div>
                  <p
                    className="text-lg text-gray-600 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
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
