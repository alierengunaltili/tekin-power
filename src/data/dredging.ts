// Kaynak: Tekin Power Tarama Kataloğu, ver1 / 11.11.2026, s. 3–13.
// Teknik değerler Yütek Denizcilik referans ekipmanlarına aittir.
export const dredgingCatalog = '/deniz-gol-tarama/tekin-power-tarama-katalogu-2026.pdf';

export const dredgingServices = [
  { title: 'Batimetrik ölçüm', text: 'Dip haritası, çamur kalınlığı ve hacim etüdüyle saha koşullarını belirliyoruz.' },
  { title: 'Makina imalatı', text: 'Kesici emici, kovalı ve mavna tipi tarama gemileri ile yüzer ekskavatörleri projelendiriyor ve imal ediyoruz.' },
  { title: 'Dip temizleme', text: 'Dere, göl, baraj, liman ve deniz yataklarında çamur ve sediment tahliyesini saha operasyonuyla birlikte planlıyoruz.' },
  { title: 'Bakım ve revizyon', text: 'Tarama gemileri, amfibi ekskavatörler ve Dragflow dalgıç tarama pompaları için bakım ve onarım sağlıyoruz.' },
  { title: 'Tasarım ve mühendislik', text: 'Sahaya özel gemi tasarımı, mühendislik hesapları, klas onayı ve danışmanlık süreçlerini yürütüyoruz.' },
  { title: 'Enerji çözümleri', text: 'LiFePO₄ batarya ve güneş enerjisiyle tarama araçlarına yönelik elektrikli ve hibrit güç çözümleri geliştiriyoruz.' },
];

export const dredgingProcess = [
  ['Sahayı ölçüyoruz', 'Batimetrik harita, dip yapısı ve çamur hacmi.'],
  ['Çözümü tasarlıyoruz', 'Saha koşullarına uygun proje ve ekipman seçimi.'],
  ['Dip temizliğini yapıyoruz', 'Kesici emici, kovalı, ekskavatör veya dalgıç pompa ile tarama.'],
  ['Çamuru taşıyoruz', 'Split mavna ve çamur gemileriyle nakil planlaması.'],
  ['Desteği sürdürüyoruz', 'Bakım, revizyon, yedek parça ve teknik servis.'],
] as const;

type Equipment = {
  id: string; title: string; category: string; image: string; description: string;
  stats: { value: string; label: string }[];
  details: [string, string][]; reference: string;
};

export const dredgingEquipment: Equipment[] = [
  {
    id: 'kesici-emici', title: 'Kesici emici tarama gemisi', category: 'İmalat', image: 'kesici-emici.jpg',
    description: 'Dip taraması için kesici ve emiş sistemini bir araya getiren platform. Projelendirme ve imalatı, çalışma sahasının derinliği ve kanal geometrisine göre ele alıyoruz.',
    stats: [{ value: '15,2 m', label: 'Tarama derinliği' }, { value: '1.309 kW', label: 'Toplam güç' }, { value: '25 m', label: 'Gövde boyu' }],
    details: [['Merdiven boyu', '19,5 m'], ['Spud boyu', '20,4 m'], ['Pompa motoru', 'CAT 3512 DITA · 955 kW'], ['Yardımcı motor', 'CAT 3408 · 354 kW']],
    reference: 'Ulaştırma Bakanlığı Altyapı Yatırımları Genel Müdürlüğü · 2012 ve 2016',
  },
  {
    id: 'kovali', title: 'Kovalı tarama gemisi', category: 'Bakım & revizyon', image: 'kovali-tarama.jpg',
    description: 'Kovalı tarama sistemleri için bakım ve revizyon hizmeti. Mekanik ekipman ve gemi sistemlerini birlikte değerlendirerek operasyonun devamlılığına destek veriyoruz.',
    stats: [{ value: '900 m³/sa', label: 'Tarama kapasitesi' }, { value: '4–22 m', label: 'Tarama derinliği' }, { value: '47,52 m', label: 'Gemi boyu' }],
    details: [['Genişlik', '11,22 m'], ['Su çekimi', '2,60 m']],
    reference: 'DLH İnşaat Genel Müdürlüğü · 2010 bakım ve revizyon projesi',
  },
  {
    id: 'yuzer-ekskavator', title: 'KAZAR yüzer ekskavatörler', category: 'Bakım & onarım', image: 'kazar.jpg',
    description: 'KAZAR VI ve KAZAR VIII yüzer ekskavatörlerinde bakım ve onarım tecrübesi. Aşağıdaki kapasite ve derinlik değerleri KAZAR VI modeline aittir.',
    stats: [{ value: '300 m³/sa', label: 'KAZAR VI kapasitesi' }, { value: '12 m', label: 'KAZAR VI tarama derinliği' }, { value: '30 m', label: 'KAZAR VI boyu' }],
    details: [['KAZAR VI genişlik', '12,24 m'], ['KAZAR VI motor', 'Hitachi · 532 HP'], ['KAZAR VIII boy / genişlik', '42,75 m / 8,30 m'], ['KAZAR VIII motor', 'Volvo Penta · 233 kW']],
    reference: 'DLH ve İZSU · 2011 bakım ve onarım projeleri',
  },
  {
    id: 'mavna-tipi', title: 'BURAK & MİMAR SİNAN', category: 'Mavna tipi tarama · İmalat', image: 'burak-mimar-sinan.jpg',
    description: 'İstanbul için imal edilen iki mavna tipi tarama platformu. Sevk sistemi bulunmayan bu yapılar için saha yerleşimi ve nakil düzeni proje kapsamında planlanır.',
    stats: [{ value: '300 m³/sa', label: 'Tarama kapasitesi' }, { value: '14 m', label: 'Tarama derinliği' }, { value: '47,90 m', label: 'Platform boyu' }],
    details: [['Genişlik', '18,50 m'], ['Su çekimi', '4,50 m'], ['İmalat adedi', '2 platform']],
    reference: 'Gemi İnşa ve Kıyı Yapıları Genel Müdürlüğü · 2014',
  },
  {
    id: 'dalgic-tarama', title: 'Dalgıç ve tarama botu', category: 'İmalat & hizmet', image: 'dalgic-tarama.jpg',
    description: 'Liman, baraj ve göllerde dalış, dip taraması ve malzeme transferi için pompa ve vinç donanımlı bot. Dragflow pompası ile iki kesici ünitesi birlikte çalışır.',
    stats: [{ value: '500 m³/sa', label: 'Pompa kapasitesi' }, { value: '36 m', label: 'Pompa basma yüksekliği' }, { value: '5 ton', label: 'A-Frame vinç kapasitesi' }],
    details: [['Bot boyu / genişliği', '17,70 m / 4,80 m'], ['Yüzdürücülerle boy / genişlik', '20,10 m / 7,20 m'], ['Pompa', 'DRAGFLOW HY85/160B'], ['Çıkış çapı', '250 mm (10 inç)'], ['Pompa gücü', '115 kW / 156 HP'], ['Kesici üniteler', '2 × EXHY20CW']],
    reference: 'Dalgıç ve tarama botu imalatı ile saha hizmetleri',
  },
  {
    id: 'split-mavna', title: 'Split mavna ve yardımcı araçlar', category: 'Taşıma · Amfibi · Ölçüm', image: 'split-mavna.jpg',
    description: 'Tarama operasyonunu çamur nakli, ölçüm botları ve amfibi araçlarla tamamlıyoruz. Split mavnalar, çamur gemileri ve pompa araçları birlikte değerlendirilir.',
    stats: [{ value: '350 m³', label: 'Split mavna · 2 adet' }, { value: '750 m³', label: 'Split mavna · 2 adet' }, { value: '2020–22', label: 'Ölçüm ve pompa araçları' }],
    details: [['350 m³ split mavna', 'İstanbul Büyükşehir Belediyesi · 2017'], ['750 m³ split mavna', 'Gemi İnşa ve Kıyı Yapıları Genel Müdürlüğü · 2023'], ['Tarama ve çamur gemileri', 'İBB Deniz Hizmetleri Müdürlüğü · 2020'], ['Amfibi bakım ve onarım', 'İZSU REMU 1400 / 2200']],
    reference: 'Split mavna, çamur gemisi, batimetrik ölçüm botu ve amfibi araç projeleri',
  },
];

export const dredgingReferences = [
  ['2010', 'Kovalı tarama gemisi', 'DLH bakım ve revizyon projesi'],
  ['2012 / 2016', 'Kesici emici tarama', 'Altyapı Yatırımları Genel Müdürlüğü'],
  ['2014', 'BURAK & MİMAR SİNAN', 'İki mavna tipi tarama platformu'],
  ['2018', 'Mogan Gölü', 'Dip çamuru temizliği'],
  ['2020', 'Tarama ve çamur gemileri', 'İBB Deniz Hizmetleri Müdürlüğü'],
  ['2023', '750 m³ split mavnalar', 'İki adet imalat projesi'],
] as const;
