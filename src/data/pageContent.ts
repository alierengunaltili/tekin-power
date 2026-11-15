export interface GuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface PageContent {
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  questions: { question: string; answer: string }[];
  requestTitle: string;
  requestItems: string[];
  related: { label: string; href: string }[];
  // Editorial provenance; never rendered as visitor-facing keyword lists.
  sources: string[];
}

export const motorContent: PageContent = {
  path: '/dewjet-elektrikli-motor',
  title: 'DewJet Elektrikli Tekne Motorları',
  seoTitle: 'DewJet İçten ve Dıştan Takma Elektrikli Tekne Motorları | Tekin Power',
  description: 'DewJet IB-30, OB-10, OB-30, OB-80, UB-80 ve 18 kW pervaneli dıştan takma motorları karşılaştırın. Model görsellerini ve teknik özelliklerini inceleyin.',
  intro: 'İçten takma, dıştan takma ve gövde altı elektrikli tahrik seçeneklerini keşfedin. Teknenize uygun DewJet modelini seçin; görsellerini, güç değerlerini ve teknik özelliklerini inceleyin.',
  sources: ['ELEKTRİKLİ TEKNE MOTORU!B2:B47', 'DEWJET!B2:B51', 'DewJet Dıştan Takmalı Kullanıcı El Kitabı Ver10, PDF s. 9–11 ve 20–22', 'Kullanıcı onayı 2026-11-04: motor portföyü 16, 18, 20, 45 kW; garanti ve sertifikalar mevcut', 'Dewjet-inboard-En-A3-tek-Kirim-Brosur-Subat-2026.pdf, s. 2–4: DWE-IB-30 maksimum 18 kW / sürekli 15 kW', 'Kullanıcı onayı 2026-11-12: paylaşılan pervaneli dıştan takma motor da 18 kW; WhatsApp ürün görseli', 'https://dewjet.com/tr/urunlerimiz (2026-11-12); görseldeki pervaneli dıştan takma ürüne OB-30 model kodu atanmadı'],
  sections: [
    { id: 'tahrik-yerlesimi', title: 'İçten veya dıştan takma motor seçimi', paragraphs: [
      'İçten takma elektrikli motorlar teknenin içine yerleşir ve gücü şaft üzerinden pervaneye aktarır. Yerleşim planında motor bölmesi, şaft hattı, batarya alanı ve bakım erişimi birlikte değerlendirilir.',
      'Dıştan takma elektrikli motorlar teknenin kıçına monte edilir. Pervaneli ve kapalı çarklı RIM seçenekleri, farklı güç ve kullanım ihtiyaçlarına cevap verir. Gövde altı tahrik sistemlerinde ise motor ünitesi tekne gövdesinin altına yerleşir.',
      'Motor seçimi; teknenin gövde yapısı, montaj alanı, yüklü ağırlığı, hedef seyir hızı ve günlük kullanım süresine göre yapılır. Motor gücü, batarya kapasitesi ve şarj altyapısı bir bütün olarak planlanır. Her modelin güç değerlerini ve teknik özelliklerini yukarıdaki model seçim alanında inceleyebilirsiniz.',
    ] },
    { id: 'motor-secimi', title: 'RIM motorlarda kapalı çark tasarımı', paragraphs: [
      'DewJet’in Rim Motor tasarımında çark, merkezinde bir tahrik mili olmadan halka biçimli bir gövdenin içinde döner. Çıkıştaki sabit kanatlar suyu aynı doğrultuya yönlendirir. Böylece su akışındaki düzensizlikten kaynaklanan enerji kaybı ve gürültü azalır.',
    ] },
    { id: 'seyir-kontrolu', title: 'Manevrada gaz kolu ve seyir ekranı', paragraphs: [
      'DWE-IB-30 ve RIM serisi, elektronik gaz koluyla kademesiz ileri-geri kontrolü sunar. Kaptan, yanaşma ve dar alan manevralarında motor gücünü gaz koluyla ayarlar.',
      'RIM serisi kumanda ekranı; ileri, boş veya geri konumunu, motor devrini, anlık gücü, batarya gerilimini ve geçen seyir süresini gösterir. Ekran ve kontrol donanımı seçilen modele göre belirlenir.',
    ] },
    { id: 'menzil', title: 'Güç, itki ve seyir süresi', paragraphs: [
      'Bir motoru seçerken üç farklı bilgi işinize yarar. Sürekli güç, uzun süreli çalışmayı karşılaştırmak için kullanılır. Maksimum güç, motorun ulaşabildiği üst değerdir. Statik itki ise tekne hareketsizken ölçülen itme kuvvetidir.',
      'Teknenizde erişebileceğiniz hız ve menzil, gövdeye, yüklü ağırlığa ve bataryanın kullanılabilir kapasitesine bağlıdır. Günlük rotanızdaki seyir hızını ve su üzerinde kalmak istediğiniz süreyi paylaşarak size uygun güç ve batarya seçeneklerini değerlendirebilirsiniz.',
    ] },
  ],
  questions: [
    { question: 'Teknem için hangi elektrikli motoru seçmeliyim?', answer: 'Teknenize uygun motoru; gövde yapısı, yüklü ağırlık, montaj alanı ve hedef seyir hızını inceleyerek belirliyoruz. Motor, batarya ve şarj sistemini kullanımınıza uygun bir çözüm olarak planlamamız için Tekin Power ekibiyle iletişime geçin.' },
    { question: 'DewJet elektrikli tekne motorlarında hangi seçenekler var?', answer: 'İçten takma IB-30, 18 kW pervaneli dıştan takma, kapalı çarklı OB-10, OB-30 ve OB-80 ile gövde altı UB-80 seçeneklerimiz bulunuyor. Modeller arasından teknenize uygun çözümü belirlemek ve donanım kapsamını öğrenmek için bize ulaşın.' },
    { question: '18 kW içten takma motorun sürekli gücü nedir?', answer: 'DWE-IB-30’un maksimum giriş gücü 18 kW, sürekli giriş gücü 15 kW’tır. Bu motorun teknenizin yük ve seyir ihtiyacına uygunluğunu ekibimiz değerlendirir. Projenize özel motor ve batarya eşleştirmesi için bizimle iletişime geçin.' },
    { question: 'Maksimum güç ile sürekli güç arasındaki fark nedir?', answer: 'Sürekli güç, uzun süreli çalışma için tanımlanan değerdir; maksimum güç motorun ulaşabildiği üst güç değerini ifade eder. Teknenizin çalışma koşullarına uygun güç seçimini ekibimiz yapar. Doğru model ve sistem planlaması için bize ulaşın.' },
    { question: 'İçten takma ve dıştan takma motor arasındaki fark nedir?', answer: 'İçten takma motor teknenin içinde yer alır ve gücü şaft üzerinden pervaneye aktarır; dıştan takma motor kıça monte edilir. Hangi yerleşimin uygun olduğunu gövde ve montaj alanını inceleyerek belirliyoruz. Teknenize özel yerleşim değerlendirmesi için ekibimizle görüşün.' },
    { question: 'Gövde altı motor ile dıştan takma motorun farkı nedir?', answer: 'Gövde altı tahrik ünitesi teknenin altına, dıştan takma sistem ise kıçına yerleşir. DewJet UB-80 gövde altı, OB serisi dıştan takma çözüm sunar. Gövdenize ve kullanımınıza uygun sistemi belirlememiz için Tekin Power ekibine ulaşın.' },
    { question: 'Pervaneli motor ile kapalı çarklı RIM motor nasıl ayrılır?', answer: 'Pervaneli sistem itkiyi pervaneyle üretir; RIM sisteminde çark halka biçimli motor gövdesinin içinde döner. Bu iki yapıyı teknenizin montaj ve seyir ihtiyaçlarına göre değerlendiriyoruz. Uygun tahrik çözümü için bizimle iletişime geçin.' },
    { question: 'Mevcut teknemi elektrikli motora dönüştürebilir miyim?', answer: 'Dönüşümün uygunluğunu mevcut tahrik düzeni, motor bağlantıları, batarya alanı ve şarj altyapısını inceleyerek belirliyoruz. Teknenizin ölçülerini ve mevcut motor bilgilerini ekibimize iletin; dönüşüm kapsamını ve uygun sistem yerleşimini sizin için değerlendirelim.' },
    { question: 'Elektrikli tekne motoru kaç saat çalışır?', answer: 'Seyir süresi teknenin yüküne, kullanım hızına ve bataryanın kullanılabilir enerjisine bağlıdır. Rotanıza uygun tahmini çalışma süresini ve batarya ihtiyacını ekibimiz hesaplar. Günlük seyir planınıza özel değerlendirme için bize ulaşın.' },
    { question: 'Elektrikli tekne motoruyla hangi hıza ulaşabilirim?', answer: 'Ulaşılabilecek hız; gövde biçimi, yüklü ağırlık, motor ve tahrik seçimi ile su koşullarına bağlıdır. Hedef hızınıza uygun motor seçeneğini teknik ekibimiz değerlendirir. Tekne bilgilerinizi bizimle paylaşın; projenize uygun çözümü belirleyelim.' },
    { question: 'Batarya kapasitesi nasıl seçilir?', answer: 'Batarya kapasitesini hedef seyir süresi, motorun enerji ihtiyacı ve teknedeki diğer tüketimleri birlikte hesaplayarak belirliyoruz. Motor, sürücü ve batarya yönetim sistemi uyumunu da bu planlamaya dahil ediyoruz. Teknenize uygun batarya çözümü için ekibimizle iletişime geçin.' },
  ],
  requestTitle: 'Teknenize uygun DewJet motoru seçelim',
  requestItems: ['Tekne tipi, boyu ve yaklaşık yüklü ağırlığı', 'Hedef seyir hızı ve günlük rota', 'Mevcut motor ve batarya bilgileri', 'Şarj edebileceğiniz yer ve süre'],
  related: [{ label: 'Elektrikli marin çözümleri', href: '/hizmetlerimiz/marin' }, { label: 'Tekne HMI ekranları', href: '/tekne-hmi' }, { label: 'LiFePO4 batarya', href: '/lifepo4' }],
};

export const pumpContent: PageContent = {
  path: '/dewjet-pompa', title: 'DewJet Dünyanın En Hafif Elektrikli Su Pompası',
  seoTitle: 'DewJet Elektrikli Su Pompası | 20 ve 45 kW | Tekin Power',
  description: 'DewJet RIM Drive elektrikli su pompaları: 20 kW / 25 kg ve 45 kW / 55 kg. 420 ve 1.200 m³/h maksimum debi, IP69 ve 2 yıl garanti. Modelleri inceleyin.',
  intro: 'Hafif ve yüksek debili elektrikli su pompası arayanlar için DewJet, RIM Drive teknolojisini kompakt bir yapıda sunar. 20 kW ve 45 kW modelleri; su transferi, tahliye ve sahada taşınabilir pompa ihtiyacınıza göre karşılaştırın.',
  sources: ['SU POMPASI!B2:B51', 'SEO SAYFA PLANI!A3:F3', 'DWE-APUMP-20 ve DWE-APUMP-45 malzeme bilgi kartları, sayfa 1', 'pompa ingilizce sunum.pdf, sayfa 3–9', 'Kullanıcı onayı 2026-11-04: 45 kW ağırlığı 55 kg; eşdeğer güç ve performans sınıfında bilinen en hafif pompa değerlendirmesi'],
  sections: [
    { id: 'rim-drive', title: 'RIM Drive: az mekanik parça, kompakt yapı', paragraphs: [
      'DewJet RIM Drive elektrikli su pompası, dişli kutusu gerektirmeyen ve mekanik parça sayısını azaltan bir tasarıma sahiptir. Kompakt gövde, pompanın taşınması ve kurulum alanına yerleştirilmesi açısından öne çıkar.',
      'DewJet pompa tasarımı kolay kurulum, düşük bakım ihtiyacı ve sessiz çalışma sunar. Değiştirilebilir difüzör yapısı, akış ve performans gereksinimlerine göre yapılandırma imkânı sağlar; uygun donanım uygulamaya göre seçilir.',
    ], points: ['RIM Drive elektrikli tahrik', 'Dişli kutusuz tasarım', 'Kompakt gövde'] },
    { id: 'tasinabilirlik', title: 'Hafiflik ve yüksek debi bir arada', paragraphs: [
      'DWE-APUMP-20, 25 kg ağırlığıyla saatte 420 tona kadar suyu yalnızca 20 kW güçle tahliye eder. 33 × 33 × 25 cm ölçülerindeki kompakt gövdesiyle yüksek debiyi hafif bir yapıda sunar. Basma yüksekliği 15 metredir.',
      'DWE-APUMP-45, 55 kg ağırlığıyla saatte 1.200 tona kadar suyu yalnızca 45 kW güçle tahliye eder. 62 × 62 × 41 cm ölçülerindeki gövdesiyle yüksek kapasiteli su tahliyesi sağlar. Basma yüksekliği 18 metredir. Taşıma planında pompayla birlikte güç kaynağı, sürücü, hortum ve bağlantı ekipmanlarını da değerlendirin.',
    ] },
    { id: 'debi-basinc', title: 'Projenize uygun debi, basınç ve besleme', paragraphs: [
      'Yüksek debili su pompası seçiminde hedef su miktarı kadar basma yüksekliği, boru veya hortum uzunluğu ve çalışma süresi de önemlidir. Maksimum debi, her kurulumda elde edilecek sabit bir akış miktarı değildir; çalışma noktası pompa performans eğrisiyle değerlendirilmelidir.',
      'Her iki model de 96 V veya 380 V besleme seçenekleriyle kullanılabilir. Kurulumunuza uygun besleme seçeneğini ve sistem donanımını projenizin ihtiyaçlarına göre birlikte belirleyelim.',
    ] },
    { id: 'kullanim-alanlari', title: 'Su transferinden sel tahliyesine', paragraphs: [
      'DewJet pompaları su transferi, sel ve taşkın tahliyesi, afet müdahalesi ve yangınla mücadeleye yönelik su aktarımında kullanılır. Mobil pompa ihtiyacınızda taşıma düzeni ve sahadaki enerji kaynağı birlikte planlanır.',
      'Marin, liman, şantiye veya sulama projeniz için suyun niteliğini, katı parçacık durumunu ve hedef çalışma koşullarını belirtin. Deniz suyu, kirli su veya hijyen gerektiren uygulamalar için uygunluk modelin malzemeleri ve sistem donanımı üzerinden ayrıca değerlendirilir.',
    ] },
    { id: 'garanti-belgeler', title: '2 yıl garanti ve ürün bilgileri', paragraphs: [
      'DWE-APUMP-20 ve DWE-APUMP-45 modellerinin garanti süresi 2 yıl, koruma sınıfı IP69’dur. Garanti kapsamı, montaj ve kullanım koşulları hakkında model bazında bilgi alabilirsiniz.',
      'Türk Patent Tasarım Tescil No: 2024 007532. Teknik dokümanlar ve seçtiğiniz modele ilişkin ayrıntılar için Tekin Power ile iletişime geçin.',
    ] },
  ],
  questions: [
    { question: 'DewJet elektrikli su pompası kaç kilogram?', answer: '20 kW DWE-APUMP-20 modeli 25 kg, 45 kW DWE-APUMP-45 modeli 55 kg ağırlığındadır. Taşıma ve sistem kurulumu için yardımcı ekipmanların kapsamı ayrıca değerlendirilmelidir.' },
    { question: '20 kW ve 45 kW modellerin debisi nedir?', answer: 'DWE-APUMP-20 modelinin maksimum debisi 420 m³/h, DWE-APUMP-45 modelinin maksimum debisi 1.200 m³/h değerindedir. Gerçek çalışma debisi, basınç ve kurulum koşullarıyla birlikte değerlendirilir.' },
    { question: 'Elektrikli su pompası hangi gerilimle çalışır?', answer: 'Her iki model de 96 V veya 380 V besleme seçenekleriyle çalışabilir. Kurulumunuza uygun besleme seçeneği ve sistem donanımı proje kapsamında belirlenir.' },
    { question: 'Pompa garanti süresi ne kadar?', answer: 'Her iki model için garanti süresi 2 yıldır. Kapsam ve kullanım şartlarını teklif aşamasında öğrenebilirsiniz.' },
    { question: 'Deniz suyu ve kirli su için kullanılabilir mi?', answer: 'Tuzlu ve kirli sularda çalışır. Kimyasal ve Endüstriyel sular için uygunluğu hakkında bilgi alınız.' },
    { question: 'Elektrikli su pompası fiyatı için hangi bilgiler gerekir?', answer: 'İlgilendiğiniz model, hedef debi ve basınç, suyun niteliği, emiş ve tahliye mesafeleri, çalışma süresi ve güç kaynağı bilgileriyle teklif talep edebilirsiniz.' },
  ],
  requestTitle: 'İhtiyacınıza uygun DewJet pompayı seçelim',
  requestItems: ['İlgilendiğiniz model: 20 kW veya 45 kW', 'Suyun niteliği ve kullanım alanı', 'Hedef debi, basınç ve çalışma süresi', 'Emiş / tahliye mesafesi ve yükseklik', 'Elektrik beslemesi ve taşınabilirlik ihtiyacı'],
  related: [{ label: 'Elektrikli marin çözümleri', href: '/hizmetlerimiz/marin' }, { label: 'Enerji depolama sistemleri', href: '/hizmetlerimiz/enerji-depolama' }],
};

export const marineContent: PageContent = {
  path: '/hizmetlerimiz/marin', title: 'Elektrikli Marin Çözümleri',
  seoTitle: 'Elektrikli Marin Çözümleri | Tekne Tahriki ve Batarya | Tekin Power',
  description: 'Yeni tekneler ve elektriğe dönüşüm projeleri için DewJet tahrik sistemi, marin LiFePO4 batarya ve tekne kontrol ekranı seçeneklerini keşfedin.',
  intro: 'Teknenizin elektrikli tahrik sistemini günlük rotanıza göre planlayın. Motor, seyir hızınıza ve taşıdığınız yüke göre seçilir. Denizde geçirmek istediğiniz süre ile limandaki şarj imkânı ise batarya kapasitesini belirler.',
  sources: ['SİTE EKSİKLİKLERİ!A6:E6', 'ELEKTRİKLİ TEKNE MOTORU!B14:B24', 'LIFEPO4!B31:B32', 'TEKNE HMI!B2:B51', 'DewJet Dıştan Takmalı Kullanıcı El Kitabı Ver10, PDF s. 9, 20–22'],
  sections: [
    { id: 'elektrikli-tahrik', title: 'Yeni tekne veya elektriğe dönüşüm', paragraphs: [
      'Yeni bir gezi teknesinde dıştan takma motorun, bataryanın ve dümen konsolunun yerini daha tasarım aşamasında belirleyebilirsiniz. Mevcut bir tekneyi elektriğe dönüştürürken önce kıçtaki bağlantı alanını, bataryaya ayrılabilecek yeri ve mevcut dümen düzenini inceleriz.',
      'DewJet’in kapalı çarklı elektrikli tahrik sistemi bu projeler için bir seçenektir. Motorun teknenize uygunluğunu değerlendirirken gövdeyi, yolcu ve yük ağırlığını, iskeleden ayrılıştan dönüşe kadar izlediğiniz rotayı birlikte ele alırız.',
    ] },
    { id: 'marin-batarya', title: 'Tahrik bataryası ve teknedeki diğer tüketimler', paragraphs: [
      'Seyirde motoru besleyen batarya ile demirdeyken kullandığınız aydınlatma, buzdolabı ve elektronik cihazların enerji ihtiyacı farklıdır. Marin batarya kapasitesini hesaplarken bu tüketimleri ayrı ayrı ele alır, her biri için gereken çalışma süresini belirleriz.',
      'DewJet tahrik sisteminde LiFePO4 batarya paketini batarya yönetim sistemi (BMS) izler. Şarj cihazı; motor ve batarya seçimine, bağlama yerinizin elektrik altyapısına ve şarj için ayırdığınız süreye göre belirlenir.',
    ] },
    { id: 'marin-hmi', title: 'Dümen başında motor ve batarya takibi', paragraphs: [
      'DewJet kumanda ekranı kaptana motor devrini, anlık gücü, batarya gerilimini ve geçen seyir süresini gösterir. Farklı hızlarda çekilen gücü aynı ekrandan izlemek, teknenizin günlük kullanımını tanımanıza yardımcı olur.',
      'Daha kapsamlı bir tekne HMI ekranı planlıyorsanız konsolda görmek istediğiniz verileri ve uyarıları belirtebilirsiniz. Cihazlarınızın paylaşabildiği bilgiler, izleme ekranının kapsamını belirler.',
    ] },
  ],
  questions: [
    { question: 'Dizel tekneden elektrikliye dönüşüm için hangi bilgiler gerekir?', answer: 'Teknenin boyu ve yüklü ağırlığı, mevcut motor ve dümen düzeni, batarya için uygun alan ve tipik seyir rotası ilk değerlendirme için yeterlidir. Montaj ve şarj ihtiyaçlarını bu bilgilerle görüşebiliriz.' },
    { question: 'Gece teknede kalıyorsam batarya seçiminde neyi belirtmeliyim?', answer: 'Motor kapalıyken de çalışan cihazları ve bunları kaç saat kullandığınızı belirtin. Bir sonraki şarja kadar sürecek seyirle birlikte teknedeki yaşam alanlarının tüketimini de hesaba katabiliriz.' },
  ],
  requestTitle: 'Teknenizin seyir ve enerji ihtiyacını görüşelim',
  requestItems: ['Yeni inşa veya dönüşüm projesi', 'Tekne boyu, yüklü ağırlığı ve mevcut tahrik düzeni', 'Günlük rota ve teknede kullanılan elektrikli cihazlar', 'Bağlama yerindeki şarj imkânı'],
  related: [{ label: 'DewJet elektrikli tekne motorları', href: '/dewjet-elektrikli-motor' }, { label: 'Tekne HMI ekranı', href: '/tekne-hmi' }, { label: 'LiFePO4 batarya', href: '/lifepo4' }, { label: 'Elektrikli su pompası', href: '/dewjet-pompa' }],
};

export const storageContent: PageContent = {
  path: '/hizmetlerimiz/enerji-depolama', title: 'Enerji Depolama Sistemleri',
  seoTitle: 'Enerji Depolama Sistemleri | LiFePO4 Batarya | Tekin Power',
  description: 'LiFePO4 enerji depolama, güneş enerjisi depolama ve yedek enerji ihtiyaçlarını değerlendirin. Kapasite ve sistem uyumu için Tekin Power ile iletişime geçin.',
  intro: 'Enerji depolama sistemi seçimi, enerjinin nerede ve ne zaman kullanılacağına göre yapılır. LiFePO4 batarya kapasitesi, güç ihtiyacı, şarj düzeni ve inverter uyumunu birlikte değerlendirerek projenizin kapsamını belirleyebilirsiniz.',
  sources: ['LIFEPO4!B15:B21', 'LIFEPO4!B34:B45', 'SİTE EKSİKLİKLERİ!A9:E9'],
  sections: [
    { id: 'kapasite', title: 'Güç ihtiyacı ve batarya kapasite hesabı', paragraphs: [
      'Enerji depolamada hangi cihazların besleneceği ve bu cihazların ne kadar süre çalışacağı belirlenmelidir. LiFePO4 batarya kapasite hesabı için tüketim bilgisiyle hedef çalışma süresi birlikte değerlendirilir.',
      'Endüstriyel enerji depolama sistemi veya fabrika pik yük dengeleme bataryası ihtiyacında günlük tüketim profili ve yüksek güç çekilen zaman aralıkları da görüşmeye dahil edilmelidir.',
    ] },
    { id: 'solar-depolama', title: 'Güneş enerjisi LiFePO4 depolama ve inverter uyumu', paragraphs: [
      'Güneş enerjisi depolama projesinde mevcut üretim, tüketim saatleri ve bataryanın kullanım amacı birlikte değerlendirilir. Off grid LiFePO4 batarya ihtiyacıyla şebekeye bağlı bir sistemin çalışma koşulları aynı olmayabilir.',
      'Hibrit inverter LiFePO4 uyumu, batarya yönetim sistemi ve şarj cihazı bilgileri model bazında kontrol edilmelidir. Mevcut inverter modelini ve bağlantı düzenini talebinize ekleyebilirsiniz.',
    ] },
    { id: 'yedek-enerji', title: 'Yedek enerji ve uygulama ihtiyacı', paragraphs: [
      'UPS LiFePO4 batarya, veri merkezi batarya sistemi veya bir tesisin yedek enerji ihtiyacında öncelikle beslenmesi gereken yükler tanımlanır. İstenen çalışma süresi ve kesinti sırasında kabul edilebilir koşullar proje kapsamının parçasıdır.',
      'Her uygulama için uygunluk, seçilecek sistemin teknik özellikleriyle ayrıca değerlendirilmelidir. Kritik yüklerinizi ve mevcut altyapınızı paylaşarak bilgi talep edebilirsiniz.',
    ] },
  ],
  questions: [
    { question: 'Enerji depolama kapasitesi nasıl belirlenir?', answer: 'Beslenecek cihazların tüketimi, eş zamanlı güç ihtiyacı ve hedef çalışma süresi birlikte değerlendirilir. Tüketim kayıtları ve mevcut sistem bilgileriyle kapasite ihtiyacınızı görüşebiliriz.' },
    { question: 'Mevcut inverterime LiFePO4 batarya bağlanabilir mi?', answer: 'Uyumluluk yalnızca batarya türüne göre belirlenmez. İnverter modeli, çalışma gerilimi, şarj gereksinimleri ve BMS haberleşmesi birlikte kontrol edilmelidir.' },
    { question: 'LiFePO4 enerji depolama teklifi için ne paylaşmalıyım?', answer: 'Uygulama alanı, tüketim bilgileri, hedef çalışma süresi, mevcut inverter ve şarj altyapısı ile kurulum alanınızı paylaşabilirsiniz.' },
  ],
  requestTitle: 'Enerji depolama ihtiyacınızı paylaşın',
  requestItems: ['Tüketim bilgileri ve beslenmesi gereken cihazlar', 'Hedef çalışma süresi ve kullanım amacı', 'Mevcut inverter ve şarj sistemi', 'Kurulum alanı ve çevre koşulları'],
  related: [{ label: 'LiFePO4 batarya seçim rehberi', href: '/lifepo4' }, { label: 'Marin batarya çözümleri', href: '/hizmetlerimiz/marin' }],
};

export const batteryContent: PageContent = {
  path: '/lifepo4', title: 'LiFePO4 Batarya ve Akü Seçimi',
  seoTitle: 'LiFePO4 Batarya ve Akü | Kapasite ve BMS Uyumu | Tekin Power',
  description: 'LiFePO4 batarya seçimi, kapasite hesabı, BMS ve şarj cihazı uyumu. Marin ve enerji depolama ihtiyaçları için Tekin Power ile iletişime geçin.',
  intro: 'Lityum demir fosfat batarya olarak da adlandırılan LiFePO4 batarya seçiminde çalışma gerilimi, kapasite ve kullanım koşulları birlikte değerlendirilir. Marin ve enerji depolama projenizde batarya paketini, BMS ve şarj altyapısıyla birlikte ele alabilirsiniz.',
  sources: ['LIFEPO4!B2:B21', 'LIFEPO4!B31:B45'],
  sections: [
    { id: 'batarya-kapasitesi', title: 'LiFePO4 batarya kapasite hesabı', paragraphs: [
      'LiFePO4 akü seçerken yalnızca kapasite değerini karşılaştırmayın. Sistemin çalışma gerilimi, besleyeceği cihazlar ve hedef çalışma süresi, batarya paketinin değerlendirilmesi için birlikte gereklidir.',
      'Tekne motoru, yat servis aküsü veya enerji depolama uygulamanız için tüketim bilgilerini paylaşarak kapasite ihtiyacınızı görüşebilirsiniz.',
    ] },
    { id: 'bms-sarj', title: 'BMS ve şarj cihazı uyumu', paragraphs: [
      'LiFePO4 BMS uyumlu akü ve LiFePO4 batarya şarj cihazı arayışında mevcut sistemin model bilgileri önemlidir. BMS, hücre dengeleme ve şarj gereksinimleri seçilecek paketin teknik bilgileriyle birlikte değerlendirilmelidir.',
      'Gerilim, akım ve haberleşme uyumunu yalnızca ürün başlığından varsaymak yerine ilgili teknik veri sayfasıyla kontrol edin.',
    ] },
    { id: 'omur-guvenlik', title: 'Çevrim ömrü ve güvenlik bilgilerini nasıl değerlendirmeli?', paragraphs: [
      'LiFePO4 batarya çevrim ömrü karşılaştırılırken test koşulları da okunmalıdır. Kullanım sıcaklığı, şarj-deşarj koşulları ve kapasite değerlendirme ölçütü belirtilmeden tek bir çevrim sayısı yeterli bilgi vermez.',
      'Batarya güvenliği için ürünün koruma özellikleri, kurulum koşulları ve üreticinin kullanım talimatları birlikte değerlendirilmelidir. Seçtiğiniz paketin teknik bilgilerini talep edebilirsiniz.',
    ] },
  ],
  questions: [
    { question: 'LiFePO4 akü fiyatlarını karşılaştırırken nelere bakmalıyım?', answer: 'Çalışma gerilimi, kapasite, BMS, şarj cihazı uyumu ve ürün kapsamını aynı koşullarda karşılaştırın. Teklif için kullanım alanınızı ve mevcut sistem bilgilerinizi paylaşabilirsiniz.' },
    { question: 'Elektrikli tekne LiFePO4 bataryası nasıl seçilir?', answer: 'Motor ve servis yükleri, seyir süresi, şarj imkânları ve teknenin yerleşimi birlikte değerlendirilir. Motor ve batarya arasındaki uyumluluk model bilgileriyle kontrol edilmelidir.' },
  ],
  requestTitle: 'LiFePO4 batarya ihtiyacınızı görüşelim',
  requestItems: ['Kullanım alanı ve cihazların tüketimi', 'Çalışma gerilimi ve hedef süre', 'Mevcut batarya, inverter ve şarj cihazı', 'Kurulum alanı ve kullanım koşulları'],
  related: [{ label: 'Enerji depolama sistemleri', href: '/hizmetlerimiz/enerji-depolama' }, { label: 'Elektrikli marin çözümleri', href: '/hizmetlerimiz/marin' }, { label: 'Tekne HMI ekranı', href: '/tekne-hmi' }],
};

// Share the existing guides rather than maintaining a second battery copy.
export const unisunStorageContent: PageContent = {
  ...storageContent,
  title: 'Unisun Enerji Depolama Sistemleri',
  seoTitle: 'Unisun Enerji Depolama ve LiFePO4 Bataryalar | Tekin Power',
  description: 'Unisun enerji depolama sistemleri ve LiFePO4 bataryalar. Kapasite, BMS ve inverter uyumu, marin ve diğer batarya seçenekleri için Tekin Power ile iletişime geçin.',
  intro: 'Enerji depolama sistemleri ve LiFePO4 batarya çözümlerini birlikte değerlendirin. Güç ihtiyacı, çalışma süresi, batarya kapasitesi, BMS, inverter ve şarj altyapısı için projenize uygun sistemi ekibimizle planlayın.',
  sections: [...storageContent.sections, ...batteryContent.sections],
  questions: [...storageContent.questions, ...batteryContent.questions],
  requestTitle: 'Enerji depolama ve LiFePO4 batarya ihtiyacınızı paylaşın',
  requestItems: [...storageContent.requestItems, 'Sistemin çalışma gerilimi ve mevcut batarya bilgileri'],
  related: [
    { label: 'Marin batarya çözümleri', href: '/hizmetlerimiz/marin' },
    { label: 'Tekne HMI ekranı', href: '/tekne-hmi' },
  ],
  sources: [...storageContent.sources, ...batteryContent.sources, 'Kullanıcı isteği 2026-11-13: enerji depolama ve mevcut LiFePO4 içeriği birlikte; Unisun-2024_compressed.pdf katalog bağlantısı'],
};

export const hmiContent: PageContent = {
  path: '/tekne-hmi', title: 'Tekne HMI Ekranı ve Kontrol Sistemleri',
  seoTitle: 'Tekne HMI Ekranı | Motor ve Batarya İzleme | Tekin Power',
  description: 'Tekne HMI ekranı, motor kontrolü, batarya izleme ve alarm yönetimi ihtiyaçlarını değerlendirin. Marin kontrol arayüzü için Tekin Power ile görüşün.',
  intro: 'Tekne HMI ekranı, motor ve batarya bilgilerinin kaptana anlaşılır biçimde sunulmasını sağlar. Tekin Power ile elektrikli tekne HMI, marin kontrol paneli ve enerji izleme ekranı ihtiyaçlarınızı projenizin cihazları ve kullanım senaryolarıyla birlikte planlayabilirsiniz.',
  sources: ['TEKNE HMI!B2:B51', 'Kullanıcı onayı 2026-11-04: ayrı HMI sayfası, hizmet sunuluyor'],
  sections: [
    { id: 'izleme', title: 'Motor, batarya ve enerji izleme ekranı', paragraphs: [
      'Tekne dijital gösterge panelinde hangi bilgilerin öncelikli olacağı kullanım senaryosuna göre belirlenir. Motor devri, batarya şarj durumu ve enerji bilgileri için cihazların sağlayabildiği veriler esas alınır.',
      'Marin batarya izleme ekranı, tekne BMS ekranı veya çift motor HMI paneli ihtiyacınızı mevcut sistem bilgileriyle paylaşın. Ekran kapsamını, bağlantılı cihazların özellikleriyle birlikte değerlendirelim.',
    ] },
    { id: 'alarm-kullanim', title: 'Alarm yönetimi ve kullanıcı arayüzü', paragraphs: [
      'Tekne alarm yönetim sistemi tasarlanırken hangi durumların ekranda gösterileceği, kayıt ihtiyacı ve kullanıcının nasıl bilgilendirileceği belirlenmelidir. Kaptan ekranı ile servis diagnostik ekranının ihtiyaçları farklı olabilir.',
      'HMI kullanıcı arayüzünde şarj durumu, motor bilgileri ve uyarıların okunabilir bir düzen içinde sunulması hedeflenir. Kullanıcı yetkilendirme seviyeleri ve veri kaydı ihtiyacı proje görüşmesinde netleştirilir.',
    ] },
    { id: 'haberlesme', title: 'Haberleşme ve cihaz entegrasyonu', paragraphs: [
      'Tekne CANbus ekranı, CANopen HMI veya NMEA 2000 HMI entegrasyonu için öncelikle bağlı cihazların desteklediği protokoller belirlenmelidir. Bir protokol adının bulunması, tüm cihaz verilerinin otomatik olarak uyumlu olduğu anlamına gelmez.',
      'Motor, BMS ve diğer cihazların model bilgileriyle haberleşme dokümanlarını paylaşarak bağlantı kapsamını görüşebilirsiniz. Ekran seçimi de montaj yeri, güneş ışığında okunabilirlik ve çevre koşullarıyla birlikte değerlendirilir.',
    ] },
  ],
  questions: [
    { question: 'Mevcut tekneye HMI ekranı eklenebilir mi?', answer: 'Mevcut motor, BMS ve diğer cihazların bağlantıları ve veri erişimi incelenmelidir. Cihaz modelleri ve haberleşme bilgileriyle uygun entegrasyon kapsamını görüşebiliriz.' },
    { question: 'Tekne HMI ekranında hangi bilgiler gösterilebilir?', answer: 'Gösterilebilecek bilgiler, bağlı cihazların sağladığı verilere ve proje kapsamına bağlıdır. Motor, batarya, şarj durumu ve alarm ihtiyaçlarınızı birlikte belirleyebiliriz.' },
    { question: 'HMI ekranı fiyatı için ne paylaşmalıyım?', answer: 'Tek veya çift motor düzeni, cihaz modelleri, izlenecek veriler, kontrol ve alarm ihtiyaçları ile ekranın montaj yerini belirtin. Teklif kapsamını bu bilgiler üzerinden görüşelim.' },
  ],
  requestTitle: 'Teknenizin kontrol ekranını planlayalım',
  requestItems: ['Motor, BMS ve bağlı cihazların modelleri', 'Haberleşme protokolleri ve mevcut bağlantılar', 'İzlenecek veriler, alarm ve kontrol ihtiyaçları', 'Ekran montaj yeri ve kullanım koşulları'],
  related: [{ label: 'Elektrikli marin çözümleri', href: '/hizmetlerimiz/marin' }, { label: 'DewJet elektrikli tekne motorları', href: '/dewjet-elektrikli-motor' }, { label: 'LiFePO4 batarya', href: '/lifepo4' }],
};

export const contentByPath = Object.fromEntries(
  [motorContent, pumpContent, marineContent, unisunStorageContent, batteryContent, hmiContent].map((content) => [content.path, content]),
) as Record<string, PageContent>;
