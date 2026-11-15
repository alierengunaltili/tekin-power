# Proje özeti

Tekin Power: elektrikli marin, DewJet tekne motorları ve pompalar, enerji depolama, askeri çözümler, deniz/göl dibi tarama.

## Mimari

Next.js 15.4.10, React 19, TypeScript, Tailwind 4 ve GSAP. App Router kullanılır. `src/app/page.tsx` ana sayfayı, `src/data` ürün verilerini yönetir. `AdaptiveVideo.tsx` kalite ve oynatmayı yönetir; kayıtlar `src/data/videoAssets.json` içindedir.

Ana sayfa: Navbar → HeroSection → AboutSection → ServicesSectionHomepage → TurnkeySolutionsSection → ContactSection → Footer; sabit WhatsAppContact (+90 532 327 62 93).

Motor sayfası altı model seçimi ve beş resmi PDF içerir; siyah 18 kW pervaneli dıştan takma model broşürü kullanıcıdan beklenir. Pompa: 20 kW / 25 kg / 420 m³/h ve 45 kW / 55 kg / 1.200 m³/h; 96 V / 380 V seçenekleri. Su sayfalarında mavi logo kullanılır. Tarama sayfası kullanıcı kataloğu, gerçek fotoğraflar ve PDF indirme bağlantısı içerir.

## Depo geçişi — 13 Kasım 2026

Kullanıcı bu site kodlarının `alierengunaltili/tekin-power` deposuna aktarılmasını ve bundan sonra bu depodan yayınlanmasını istedi. Hedef mevcut `master` geçmişi korunur. Önceki çalışma alanı dış klasöründeki boş Git deposu kullanılmaz; bu klasör yeni origin'e bağlıdır. Özel yerel proje takip kayıtları bu site deposunun dışındadır. Ayrıntılı önceki değişiklik/medya/test kayıtları `docs/history/` altındadır.

Son yayın bağlantısı ve doğrulama için DEPLOYMENT.md dosyasına bak.

## Aktif canlı yayın

`master` gönderimi ile yeni Vercel projesinde production yayını otomatik tamamlandı. Aktif adres https://tekinpower.com; Vercel projesi alierengunaltilis-projects/tekin-power. Önceki `tekin-power-site` projesi ayrı bir eski yayındır. `src/lib/seo.ts` kalıcı adresi tekinpower.com olarak kullanır. Güncel yayın akışı DEPLOYMENT.md dosyasındadır.

## Hizmet adı — 13 Kasım 2026

Deniz/göl arama tarama hizmetinin görünen adı kullanıcının isteğiyle “Deniz Göl Dibi Tarama ve Temizleme” olarak değiştirildi. Ortak solutions verisi menüleri, ana sayfa slaydını/kartını, hizmet listesini ve iletişim seçeneklerini günceller. Detay sayfası H1/SEO başlığı, Hakkımızda, ana sayfa yapılandırılmış verisi ve hizmet tanıtım cümlesi de uyumlandı. Mevcut URL korunur. Kullanıcı tüm sonraki site değişiklikleri için tekinpower.com üzerinde sürekli yayın yetkisini tekrar verdi; AGENTS.md ve DEPLOYMENT.md kaydına işlendi.

## Menü ve pompa başlıkları — 13 Kasım 2026

Deniz & Göl Dibi Tarama ve Temizleme adı ortak hizmet verisine ve sayfa başlığına işlendi; üst menüde Hizmetlerimiz sonrasına iki satırlı doğrudan bağlantı eklendi. Pompa detay başlığı “DewJet Dünyanın En Hafif Elektrikli Su Pompası” oldu. Pompa slayt açıklaması eşdeğer güç ve performans sınıfında dünyanın en hafif elektrikli su pompaları vurgusunu, 20 kW / 25 kg ve 45 kW / 55 kg bilgilerini içerir. Mevcut medya ve adresler korunur.

## Deniz & Göl ana sayfa videosu — 13 Kasım 2026

Son karar: kullanıcı videoyu kaldırdı. Deniz & Göl slaydında video bağlantısı kaldırıldı; önceki düz geçişli arka plan, başlık, açıklama ve buton korunur. Aşağıdaki medya kaydı geçmiş uygulamayı anlatır; dosyalar saklanır ancak slaytta yüklenmez.

Kullanıcının gemini_generated_video_df704804.mp4 videosu ana sayfanın altıncı slaydına eklendi. public/media/survey-v1 içinde özgün 1280×720 / 24 fps boyutunda, sessiz ve faststart H.264 ile VP9 sürümü ve aynı açılış karesinden JPEG kapak bulunur. AdaptiveVideo bağlantı/hareket tercihlerini, görünürlükte oynatmayı ve slayt sonunda geçişi yönetir. Başlık, açıklama, fontlar ve butonlar korunur; telefonda mevcut tam kadraj video ve alttaki okunaklı metin düzeni kullanılır. Yeniden üretim: node scripts/prepare-survey-video.cjs [kaynakDosya].

## Siyah motor sunumu ve enerji menüsü — 13 Kasım 2026

Kullanıcı tek açıyla hafif hareketi onayladı; gerçek 360 derece dönüş istenmiyor. Ana sayfa motor slaydındaki beyaz motor videosu yerine MotorHeroPresentation, mevcut deniz/doğa arka planı ve kullanıcının siyah/altın pervaneli motorunun şeffaf görselini kullanır. CSS hareketi küçük düşey salınım ve +/-0,4 dereceyle sınırlıdır; görünmezken durur ve hareket azaltma tercihinde tamamen kapanır. Metinler ve CTA korunur. Slayt 12 saniyede ilerler. Kullanıcının yeni talimatıyla üst menü adı Yenilenebilir Enerji ve Unisun Enerji Depolama Sistemleri olarak iki satırda gösterilir; mevcut enerji sayfasına bağlanır. Bu menü adı için önceki Unisun kullanmama tercihi yeni talimatla değiştirilmiştir.

## Deniz & Göl yeni video ve kart — 13 Kasım 2026

Ana sayfa slayt CTA davranışı: altı slaydın “Detayları İncele” bağlantısı `currentCategory.href` üzerinden doğrudan o ürün/hizmet sayfasına gider. Eski çözümler alanına kaydırma kaldırılmıştır; mevcut düğme biçimi korunur.

Ek istek: kesici-emici ekipman fotoğrafı `cardImage` alanıyla Hizmetlerimiz sayfasındaki Deniz & Göl kartına da eklendi. Başlık ve hedef bağlantı korundu.

Kullanıcı yeni WhatsApp Video 2026-11-13 at 02.16.41.mp4 dosyasını verdi. 2–10 saniye arası %80 hızla 10 saniye olarak hazırlanır; döndürme metadatası uygulanır ve gömülü siyah kenarlar 1024x576 içerik alanına kırpılır. Kullanıcının isteğiyle 2560x1440 full ve 1920x1080 balanced, 24 fps H264/VP9 sürümleri üretilir; bunlar düşük çözünürlüklü kaynağın büyütülmüş sürümleridir, gerçek UHD ayrıntısı değildir. AdaptiveVideo bağlantıya göre sürüm veya kapak kullanır. Ana sayfa hizmet kartında mevcut katalogdaki kesici-emici.jpg kullanılır. Önceki kaldırılan survey-v1 dosyaları bağlı değildir.

## Yenilenebilir enerji alt menüsü — 13 Kasım 2026

ServiceNavigation iki menü grubunu destekler. Enerji başlığında sırayla Unisun Enerji Depolama Sistemleri (/hizmetlerimiz/enerji-depolama), Güneş Panelleri (/gunespaneli) ve Arşimet Burgusu (/arsimet-burgusu) bulunur. Hizmetlerimiz ile aynı saydam masaüstü hover paneli, mobil aç/kapat, Escape ve odak kapanışı kullanılır. Arşimet sayfası yalnız başlık ve iletişim bağlantısı içerir; teknik ürün içeriği kullanıcıdan beklenir. Güneş paneli mevcut sayfadır. Sitemap iki adresi içerir.

## Unisun ve LiFePO4 birleşik sayfa — 13 Kasım 2026

Kullanıcı enerji depolama ile sitedeki LiFePO4 içeriğinin birlikte olmasını istedi. /hizmetlerimiz/enerji-depolama başlığı Unisun Enerji Depolama Sistemleri oldu. unisunStorageContent mevcut storageContent ve batteryContent bölümleri/SSS verilerini birleştirir; tek SSS ve iletişim alanı üretir. Enerji depolama galerileri korunur; mevcut LiFePO4BatterySection marin/standart ürünleri ve kullanım alanlarıyla eklenir. Üstte iki bölüm bağlantısı ve kullanıcının özgün Unisun 2024 PDF indirmesi vardır. /lifepo4 korunur; teknik değerler kataloğa dayanılarak topluca değiştirilmedi.

Birleştirme kontrolünde eski LiFePO4 kullanım görsellerinin eksik yolları mevcut yerel marin/konut/forklift/solar görsellerine düzeltildi. Marin akü ürün görselleri kaynaklarda bulunamadığı için ürün bilgileri korunup açık Görsel eklenecek alanı kullanılır; başka model fotoğrafı atanmaz. Ürün bilgi penceresi küçük ekranda kaydırılabilir ve iletişim bölümüne bağlanır. Enerji galerisinin 23 özgün görseli public/unisun/energy-gallery altında yerelleştirildi; dış görsel sunucusuna bağımlılık kaldırıldı. TypeScript, ilgili dosyalarda ESLint, 1440/390 px tarayıcı, sekiz batarya sekmesi, PDF SHA-256 ve ayrı /lifepo4 erişimi doğrulandı.

## Tüm sayfalarda WhatsApp — 13 Kasım 2026
WhatsAppContact artık src/app/layout.tsx içinde bütün sayfalarda bir kez oluşturulur. Ana sayfaya özel çağrı kaldırılmıştır. Mevcut +90 532 327 62 93 numarası, hazır mesaj, sabit sağ alt konum ve mobil güvenli kenar boşlukları korunur. Bağlantı WhatsApp sohbetini açar; otomatik mesaj göndermez.

## İki anahtar teslim paket — 13 Kasım 2026
Ana sayfa sırası AboutSection → TurnkeySolutionsSection → ServicesSection oldu. Elektrikli Pompa Paketi ve Elektrikli Motor Paketi ayrı kartlarda ana ürün + güneş paneli + akü + inverter + yardımcı ekipmanlar + bağlantı elemanlarını gösterir. Ana ürün görselleri ilgili DewJet sayfasına, panel güneş paneli sayfasına; diğer dört grup kullanıcının kararıyla Unisun enerji depolama sayfasına bağlanır. Her paketin bilgi butonu paket adı içeren hazır mesajla WhatsApp +90 532 327 62 93 bağlantısını açar; mesaj otomatik gönderilmez. Modeller/kapasiteler projeye göre belirlenir. Yeni Unisun görselleri kullanıcı kataloğundan çıkarıldı; farklı model uyumluluğu veya sabit paket gücü iddiası eklenmedi.

## Pompa video kontrolü, yeni kapak ve BMS — 13 Kasım 2026
Pompa videosu canlıda mevcuttu; tarayıcının yaklaşık 1,65 Mbps bilgisi kalite bütçesini karşılamadığında veya hareket azaltma tercihinde yalnız poster kalıyordu. Pompa AdaptiveVideo çağrısına playbackControl eklendi: kullanıcı oynat/duraklat/yeniden oynatabilir, açık oynat isteği otomatik bağlantı/hareket filtresini aşar. Kalite kaynakları aynıdır. Bu sayfada ilk yükleme için 20 sn, yeniden tamponlama için 6 sn beklenir; diğer sayfaların varsayılanları korunur. SolutionInfoPage medya kapsayıcısının aria-hidden kaldırıldı; kontrol erişilebilir. Pompa kapak görseli özgün videonun 13. saniyesinden, iki pompanın tam göründüğü hero-two-pumps-v2.webp oldu. İki anahtar teslim pakette Yardımcı Ekipmanlar görseli, kullanıcının Unisun kataloğundan çıkarılan BMS ile değişti; Unisun hedefi korundu.

## Motor vitrini ve WhatsApp teklif bağlantıları — 14 Kasım 2026

Ana sayfadaki motor sunumu kullanıcının üç motorlu deniz/doğa fotoğrafını hafif ölçek hareketiyle gösterir; başlık, açıklama ve buton metinleri korunur. Aynı fotoğraf Hizmetlerimiz motor slaydına bağlandı; mobilde ürün alanı metinden ayrılır. Hareket azaltma ve görünürlük denetimleri korunur. `solutions.heroDescription` yalnız ana sayfa pompa slaydında 20 kW / 420 m³/h / 25 kg ve kullanıcı düzeltmesiyle 45 kW / 1.200 t/h / 55 kg metnini kullanır.

İki pompa ve altı motor modelinin bilgi/teklif bağlantıları seçilen ürün adıyla +90 532 327 62 93 WhatsApp adresini açar. Ortak rehberdeki “E-posta ile bilgi isteyin” ve tüm motor SSS yanıtlarının altındaki “Tekin Power ile iletişime geçin” butonları kaldırıldı; yanıt metinleri korunur.

## Mavi marin akü görselleri — 14 Kasım 2026

LiFePO4BatterySection içindeki dokuz marin ürününe mavi deniz temalı katalog görselleri eklendi. Modeller: 12.8 V 100/300/400/600 Ah; 25.6 V 100/200/300 Ah; 36 V 100 Ah; 51.2 V 100 Ah. Görsel etiketleri ilgili voltaj/kapasiteyle eşleşir. Kullanıcı referansındaki gövde, sunum ölçeği ve etiket yerleşimi korunarak yeşil marka öğeleri maviye, yaprak simgesi yelkenliye çevrildi; deniz arka planı ve marin Tekin Power logosu kullanıldı. Görseller tasarım amaçlı türetildi; yeni teknik özellik eklenmedi. WebP kaynakları kayıpsızdır; kart ve modal farklı duyarlı boyutlarda yüklenir. Normal akülerin yeşil görselleri korunur. Ürün modali üst menünün üzerinde açılır.

## Alt bölüm logo renkleri — 14 Kasım 2026
Footer bileşeninde normal logoyu tamamen beyaza çeviren filtre kaldırıldı. Navbar ile ortak isWaterPagePath eşlemesi korunur: su sayfaları mavi marin logosu, diğer sayfalar yeşil marka logosu kullanır. Koyu alt zemin için açık yazılı mevcut logo sürümleri kullanılır.

## Hakkımızda tarama araçları — 14 Kasım 2026
Hakkımızda slaydında Deniz & Göl Dibi Tarama ve Temizleme için katalogdaki kesici emici gemi ana arka planı ve KAZAR yüzer ekskavatör ek görseli kullanılır. Yalnız bu sayfanın medya eşlemesi değişir; diğer slaytlar ve ana sayfa videosu korunur. Slayt kontrollerine erişilebilir adlar eklendi.

## Onaylanan 3B tarama sunumu — 14 Kasım 2026
Kullanıcının sohbet önizlemesinde onayladığı 3d-sahne-v1.png, Hakkımızda Deniz & Göl slaydındaki gerçek fotoğraf/ek kart düzeninin yerini aldı. DredgingHeroPresentation 10 saniyelik hafif kamera yaklaşma döngüsü kullanır; araç mekanizmalarının çalıştığı bir video değildir. Seçili değilken, ekran dışında ve sekme gizliyken durur; hareket azaltma tercihinde sabittir. Mobilde tam kadraj görsel yazıların üstündedir; masaüstünde mevcut başlık/ açıklama konumu korunur. Otomatik gösterimde bu slayt 10 saniye kalır.

## Ana sayfa 3B tarama sahnesi — 14 Kasım 2026
Ana sayfanın Deniz & Göl slaydı da onaylanan DredgingHeroPresentation görselini kullanır. HeroSection yerel medya eşlemesi eski videonun yerine hafif hareketli sahneyi getirir; ortak hizmet verisi ve diğer sayfaların medyası korunur. Metin ve detay bağlantısı aynı kalır. Mobilde tam kadraj görselin altında metin; otomatik geçiş 12 saniyedir.


## Hizmetlerimiz 3B tarama sahnesi — 14 Kasım 2026
Hizmetlerimiz üst slaydında aynı DredgingHeroPresentation kullanılır; slayt 10 saniye kalır, duraklat düğmesi sahne hareketini de durdurur. Deniz & Göl hizmet kartı da aynı onaylı görsele bağlandı. Başlık, açıklama ve detay hedefi korunur; mobilde tam görsel ile metnin ayrılması için yeterli yükseklik ayrılır.

## Tarama detay girişi: ilk video — 14 Kasım 2026
Kullanıcının ilk kaldırılan video isteğiyle /hizmetlerimiz/deniz-gol-dibi-arama-tarama girişindeki fotoğraf yerine survey-v1 tanıtımı eklendi. Kaynak gemini_generated_video_df704804.mp4; mevcut 1280×720, 24 fps, 10 saniyelik sessiz sürümler yeniden kodlanmadan kullanılır. AdaptiveVideo tam kadraj, döngü, oynat/duraklat ve bağlantı/hareket tercihlerine göre kapak sunar. Giriş metinleri ve diğer sayfalardaki 3B görseller korunur.

## Tam genişlikte tarama arka planı — 14 Kasım 2026
Kullanıcı yanlış videoyu düzelterek 1.mp4 dosyasını verdi. Tarama detay girişinde küçük kutu kaldırıldı; yeni video bütün girişin arka planını kaplar, mevcut metinler koyu geçiş üzerinde kalır. Kaynağın dönüş bilgisi uygulandı ve yalnız gömülü siyah yan bantlar çıkarıldı; doğal 30 fps / 8,93 sn korunur. Tam 1024×576 ve hafif 768×432 sürümleri, sessiz döngü, oynat/duraklat, görünürlük ve tercih denetimleriyle kullanılır. Diğer sayfalardaki onaylı 3B sahneler korunur.

## LiFePO4 yeşil ve marin akü girişi — 14 Kasım 2026
/lifepo4 girişine mevcut yeşil ve mavi 12.8V 100Ah akü tasarımlarını birlikte gösteren sahne eklendi. Yerleşik görsel aracı, iki katalog görselini ürün referansı olarak kullanarak yeşil kıyı, mavi deniz ve iki tekne arka planını oluşturdu. Başlık solda okunaklı, iki ürün sağda kalır; mobilde tam sahne başlığın üstünde gösterilir. Mevcut ürün kayıtları ve sayfa metinleri korunur.

## Kamp sahnesi eklemesi — 14 Kasım 2026
Kullanıcının ek isteğiyle aynı akü sahnesine, yeşil akünün yanındaki kıyıda kurulu beyaz karavan ve kamp sandalyelerinde sırtları izleyiciye dönük denizi izleyen bir kadın ile bir erkek eklendi. green-marine-camping-v2.png kullanılır. Ürün etiketleri/değerleri ve tekneler korundu; masaüstü başlık alt sola alınarak kamp alanının görünürlüğü sağlandı. Önceki görsel dosyası saklanır.

## Yenilenebilir enerji menüsünde LiFePO4 — 14 Kasım 2026
Ortak energyLinks listesinde Unisun seçeneğinin ardından LiFePO4 bağlantısı eklendi. Masaüstü ve mobil açılır menü aynı /lifepo4 hedefini kullanır.

## LiFePO4 ürünleri girişin altında — 14 Kasım 2026
Kullanıcının konum seçimiyle /lifepo4 sayfasındaki LiFePO4BatterySection (mavi marin ve yeşil ürünler) giriş görselinin hemen altına taşındı. Açıklamalar ve SSS ürünlerden sonra gelir. SolutionInfoPage isteğe bağlı afterHeader alanıyla bu sıralamayı yalnız ilgili sayfada uygular; diğer sayfaların sırası değişmez.

## Sahadan Görseller — 15 Kasım 2026 (yerel, yayın bekliyor)
Üst menüde İletişim öncesine /sahadan-gorseller eklendi. İki kategori: Marin Çözümler Görselleri (/sahadan-gorseller/marin-cozumler) ve Elektrikli Pompa Çözümleri Görselleri (/sahadan-gorseller/elektrikli-pompa-cozumleri). Kategori sayfaları doğrudan açılabilir, birbirine ve galeri girişine bağlıdır. Yalnız kullanıcının bu bölüm için göndereceği saha çekimleri kullanılacak; mevcut tanıtım veya yapay görseller eklenmedi. Henüz medya yok, boş durum mesajı gösterilir.
Medya kaynağı src/data/fieldGalleries.ts; fotoğrafın alt metni/boyutları, videonun kapağı ve isteğe bağlı Türkçe altyazısı burada tanımlanır. Fotoğraflar tam boy açılır; videolar otomatik başlamaz, yerel oynatma/tam ekran kontrollerini kullanır. Bu çalışma yönetim paneli veya tarayıcıdan dosya yükleme sistemi içermez; gönderilecek içerik katalog verisine eklenir.
Kullanıcı son talimatıyla şimdilik canlı yayını durdurdu; bu değişiklikler yereldedir.

## Saha çekimleri eklendi — 15 Kasım 2026 (yerel)
Kullanıcının web/marin ve web/pompa klasörleri içeri alındı. Marin: 5 video + 4 özgün JPEG. Pompa: 5 video; ayrıca tek başına gönderilen 15.46.08 - Trim dosyası aynı klasörde olduğundan çoğaltılmadı. Tüm galerilerde Videolar bölümü önce, Fotoğraflar sonra gösterilir; içeriği olmayan bölüm gizlenir.
Medya public/sahadan-gorseller/v1/{marin,pompa} altında. MP4 H.264/AAC akışları yeniden kodlanmadan faststart ile paketlendi; ses, özgün çözünürlük/süre ve döndürme bilgisi korunur. Kapaklar videonun 1. saniyesinden alınır. JPEG kaynakları aynen kopyalandı. Videolar preload=none ve kullanıcı kontrollü oynatma kullanır; dikey/yatay içerik object-contain ile kırpılmaz. Henüz canlıya alınmadı; kullanıcının yayın bekletme talimatı geçerlidir.

Saha galerileri yayın onayı: Kullanıcı 15 Kasım 2026 tarihinde “tamam şimdi canlıya al” dedi. Önceki yerel bekletme kaldırıldı. TypeScript, ilgili ESLint ve 1440/390 px üzerinde 10 videonun oynatılması, dört fotoğrafın yüklenmesi/tam boy açılması doğrulandı. Yayın sonucu ayrıca kontrol edilecek.

## Galeri kapakları ve video kontrolleri — 15 Kasım 2026
Sahadan Görseller girişindeki simgeler, ilgili özgün videolardan alınmış gerçek kapaklarla değişti: marin video-02.jpg, pompa video-03.jpg. Kapaklar fieldGalleries.cover üzerinden yönetilir. İki galerideki toplam 10 video controlsList=nodownload kullanır; oynatıcı indirme menü öğesini destekleyen tarayıcılarda gizler. Bu kontrol medya dosyasına erişimi engelleyen bir yetkilendirme/DRM sistemi değildir.

## Arşimet Burgusu içerik ve tasarım — 15 Kasım 2026
/arsimet-burgusu yer tutucusu, kullanıcının Kasım 2026 tarihli 14 sayfalık sunumu esas alınarak detay sayfasına dönüştürüldü. Altı özgün teknik/konsept görsel PDF'den çıkarıldı; yeniden üretilmedi. Yeşil temalı giriş, çalışma prensibi, pompa-türbin ayrımı, saha uygunluğu, altı teknolojinin kot/verim karşılaştırması, cross-flow ve kurulum şemaları, örnek üretim, beş aşamalı yol haritası ve beş SSS bulunur. Saha bilgisi CTA'ları mevcut WhatsApp numarasına gider; özgün PDF indirilebilir.
Sayısal kaynaklar: s.3 burgu 1–6 m / %70–80 / 20–40 dev/dk / 22–30 derece; s.2 alternatifler; s.5 cross-flow; s.8 koşullu teknoloji seçimi; s.10 1,5 m³/s, 2,5 m, %75 ile 27,6 kW ve 3000/4000/5000 saat için yaklaşık 83/110/138 MWh. Ön tahmin ve örnek senaryo nitelikleri görünürdür. Sunumdaki maliyet/tarife tahminleri, soru işaretli eşikler ve belirsiz süreler sabit proje vaadine dönüştürülmedi. Temsili tesis görseli gerçek referans proje olarak sunulmaz.

## Ayrı saha galerisi kaldırıldı — 15 Kasım 2026
Kullanıcı Sahadan Görseller bölümünü kaldırdı. Üst menü ve sitemap bağlantıları çıkarıldı; eski galeri girişi Hizmetlerimiz'e, marin kategorisi /hizmetlerimiz/marin'e, pompa kategorisi /dewjet-pompa'ya kalıcı yönlendirilir. Galeri arayüzü artık sunulmaz. Medya dosyaları ve kayıtları korunur.
Kullanıcı ayrıca “hiçbir videoyu taşıma ben sana teker teker atacağım” dedi. Mevcut videolar hiçbir açıklamaya taşınmadı; ürün açıklamaları ve mevcut ürün videoları aynen kalır. Yeni videolar geldikçe kullanıcının belirttiği açıklamanın yanına yerleştirilecek.

## Açıklamaların yanında yeni saha videoları — 15 Kasım 2026 (yalnız yerel)
Kullanıcının tek tek gönderdiği altı yeni video eklendi. /hizmetlerimiz/marin elektrikli-tahrik bölümünde iki Manavgat ve bir Demre dönüşüm videosu, marin-batarya bölümünde Manavgat batarya videosu, marin-hmi bölümünde kontrol ekranı videosu bulunur. /dewjet-elektrikli-motor menzil bölümüne “Elektrikli Motor Su İtiş Gücü” videosu eklendi. Mevcut açıklamalar ve eski galeri medyaları korunur.
GuideBody isteğe bağlı sectionMedia alanını masaüstünde metnin yanında, mobilde altında gösterir; SolutionInfoPage bu alanı iletir. Videolar otomatik başlamaz, preload=none, playsInline, controlsList=nodownload ve kırpmayan kadraj kullanır. Kaynak ses, çözünürlük ve süre korunarak MP4 faststart paketleme yapıldı; kapaklar 1. saniyeden alındı.
TypeScript, ilgili ESLint, git diff --check ve yerel 1440/390 px tarayıcı kontrolleri geçti. Altı video gerçekten oynatıldı; süre, açıklama, kapak, yerleşim ve tarayıcı hataları kontrol edildi; pompa sayfasına video eklenmedi. Kullanıcının “canlıya alma şimdilik” talimatıyla commit/push ve yayın yapılmadı.

## Devam eden saha eklemeleri — 15 Kasım 2026 (yalnız yerel)
Kullanıcının ayrıca seçip gönderdiği dört video ve bir fotoğraf eklendi; toplam yeni içerik 10 video + 1 fotoğraftır. Motor sayfasında tahrik-yerlesimi bölümüne “Antalya Demre Elektrikli Tekne Dönüşümü” (15.20.08) ve son kullanıcı düzeltmesiyle güç değeri içermeyen “Elektrikli Pervaneli Motor” (15.31.30); seyir-kontrolu bölümüne Demre kumanda videosu (2026-03-01 23.01.31) eklendi. motor-secimi bölümündeki özgün fuar fotoğrafının açıklaması “DewJet RIM elektrikli tekne motorları — fuar standında ürün ve su içi çalışma gösterimi.” Fotoğraf tam boy açılabilir.
Marin sayfasının marin-batarya bölümüne mevcut Manavgat videosunun ardından “Batarya Tasarımı Detaylı Anlatım” (15.46.08) eklendi; 90° dönüş bilgisi korunarak dikey 576×1024 görünüm kullanılır. Eski galeri dosyaları silinmedi; yalnız kullanıcının açıkça seçtiği medya bu bölümlere eklendi. Mevcut ürün güç verileri değiştirilmedi.
TypeScript, ilgili ESLint ve diff kontrolü geçti. Yeni videolar 1440/390 px tarayıcıda oynatıldı; süre, kapak, açıklama ve yerleşim doğrulandı. Fotoğraf yüklenmesi, tam boy açılması ve mobil/masaüstü yerleşimi kontrol edildi. Canlı yayın ve Git gönderimi yapılmadı.

## Marin uygulama fotoğrafları değiştirildi — 15 Kasım 2026 (yerel)
MarinContent altındaki beş eski genel fotoğrafın yerine kullanıcının gönderdiği dört özgün JPEG geldi. Sıra ve açıklamalar kullanıcının eşlemesidir: Demre ekip (17.18.14), Manavgat güneş panelleri (19.09.01), Demre tekneler (15.25.42), Manavgat batarya kurulumu (17.18.13). Her kart “Antalya [yer] Elektrikli Tekne Dönüşümü” açıklamasını gösterir. Masaüstünde iki sütun, telefonda tek sütun; fotoğraflar kırpılmaz ve tam boy açılır. Bölüm bağlantısı /hizmetlerimiz/marin#marin-uygulama-gorselleri. Eski medya kaynakları silinmedi. 1440/390 px yüklenme, dört açıklama, sıralama, bağlantılar ve taşma kontrolleri geçti; yayın beklemede.

15 Kasım 2026 yayın onayı: Kullanıcının “canlıya al” talimatıyla yukarıdaki 10 video ve 5 fotoğrafı içeren yerel çalışma için bekletme kaldırıldı. Master üzerinden yayımlanacak; canlı doğrulama sonucu çalışma alanındaki TEST_REPORT.md dosyasına kaydedilir.

## Batarya anlatımı kırpılmış video — 15 Kasım 2026
Kullanıcının gönderdiği 15.46.08 - Trim.mp4, MarinContent içindeki “Batarya Tasarımı Detaylı Anlatım” videosunun yerine batarya-tasarimi-v2 adresiyle bağlandı. Özgün 576×1024 görüntü ve ses korunur; süre 132,42 saniye. Başlık ve mevcut Manavgat videosu değişmez. Önceki v1 dosyaları korunur. Kullanıcı aynı mesajda canlı yayın istedi.

## Pompa detaylı anlatım — 15 Kasım 2026
Kullanıcının POMPA UYGULAMA klasöründen gönderdiği 17.01.05.mp4, /dewjet-pompa sayfasının rim-drive açıklamasının yanına “DewJet 20 kW Elektrikli Pompa Detaylı Anlatım” başlığıyla eklendi. Kaynak 848×480, 110,20 saniye; görüntü ve ses yeniden kodlanmadan faststart ile korunur. Otomatik başlamaz, indirme menüsü gizlidir; mobilde metnin altında gösterilir.

Aynı sayfanın tasinabilirlik (“Hafiflik ve yüksek debi bir arada”) bölümüne POMPA AFAD klasöründeki 17.18.20 ve 17.18.21 videoları “AFAD Ortak Tatbikat” açıklamasıyla eklendi. Süreler 34,97 ve 60,16 saniye, her ikisi 848×480; özgün ses/görüntü korunur.

POMPA UYGULAMA 17.02.26 videosu kullanim-alanlari (“Su transferinden sel tahliyesine”) bölümüne “Konya Gülistan Altgeçiti Su Tahliyesi Uygulaması” açıklamasıyla eklendi; 464×832 dikey, 39,81 saniye, ses korunur.

Aynı bölümde Konya videosunun ardından kullanıcının 19.15.40 videosu “DewJet Elektrikli Su Pompası Taş, Çamur, Kirli Su Uygulaması” açıklamasıyla yer alır; 464×832, 24,66 saniye. Bu saha videosu eklemesi teknik model değerlerini değiştirmez.

debi-basinc bölümüne kullanıcının 15.36.40 - Trim ve 2026-10-07 21.13.13 - Trim videoları eklendi. Açıklamalar “Sapanca Gölü — Kocaeli Belediyesi, Sakarya Belediyesi Elektrikli Su Pompası Tatbikatı” ve “Sapanca Gölü — Kocaeli Belediyesi, Sakarya Belediyesi Elektrikli Su Pompası Tatbikatı”. Sırasıyla 848×478 / 29,34 saniye ve 478×850 / 15,08 saniye; kaynak ses/görüntü korunur, kadraj kırpılmaz. Pompa rehberinde toplam yedi saha videosu bulunur.

23.14.10 - Trim videosu “20 kW Elektrikli Su Pompası Hafifliği” açıklamasıyla tasinabilirlik bölümünün ilk videosu olarak eklendi. İki AFAD videosu ardından korunur. Kaynak 464×832, 15,42 saniye; ses ve görüntü faststart paketlemeyle korunur. Pompa rehberindeki saha videosu sayısı sekizdir.

Pompa sayfasının sonunda, alt bilgiden önce dört fotoğraflı “Pompa uygulama görselleri” bölümü bulunur (#pompa-uygulama-gorselleri). İlk iki fotoğraf kullanıcının AFAD 17.14.54 ve 17.14.53 dosyalarıdır; “AFAD Ekibi ve Tekin Power Ekibi Saha Tatbikatı” açıklamasını taşır. Ardından 23.14.03 ve 23.14.03 (1) dosyaları “Kocaeli-Sakarya Belediyesi Ekipleri ve Tekin Power Ekibi Saha Tatbikatı” açıklamasıyla gelir. Özgün JPEG'ler korunur, görseller kırpılmaz, tam boy açılır; masaüstünde iki sütun, telefonda tek sütun kullanılır.

## Sayfa sıralaması ve motor videosu düzeltmesi — 15 Kasım 2026
Pompa seçim/iletişim kutusu ve İlgili çözümler, kullanıcının isteğiyle fotoğraf galerisinden sonra sayfanın en sonuna taşındı. GuideClosing ortak içeriği korur; SolutionInfoPage closingAfterChildren yalnız pompa sayfasında etkindir. Diğer sayfaların sıralaması değişmez.
Kullanıcı görselle yalnız motor sayfasındaki tahrik-yerlesimi tekne videosunu seçti: açıklama/erişilebilir ad “Antalya Oymapınar Elektrikli Tekne Dönüşümü” oldu. Marin sayfasının diğer Demre açıklamaları korunur. Ayrı talimatıyla motor sayfasının seyir-kontrolu bölümündeki demre-kumanda-v1 videosu gösterimden kaldırıldı; bölüm metni ve eski medya dosyaları korunur.

Kullanıcının verdiği “20 kW güçle saatte 400 ton su aktarımı” ifadesi yalnız gösterdiği yatay Sapanca tatbikatı videosunun (pompa-debi-1-v1) açıklamasına eklendi. Modelin teknik tablosundaki maksimum 420 m³/h değeri ve diğer video açıklamaları korunur.

İkinci, dikey Sapanca videosunun açıklamasına kullanıcı isteğiyle “Saatte 1.200 ton kapasiteli 45 kW su pompası yükseklik ve basınç testi” eklendi. Ortak Sapanca/belediye açıklaması korunur; yeni sayısal basınç veya yükseklik değeri eklenmedi.

## Pompa güç ve demaraj vurgusu — 15 Kasım 2026

Kullanıcının ürün bilgisi ve metin talimatıyla pompa sayfasında iki modelin ağırlık/debi/güç açıklamaları büyük harflerle vurgulandı. Demaraj gerektirmeme ve mevcut güce göre su pompalama özellikleri girişe, ürün özetine, iki modelin teknik tablosuna, RIM özelliklerine, besleme açıklamasına ve yeni SSS yanıtına eklendi. Mevcut teknik maksimum debi tabloları ve çalışma koşulu açıklamaları korunur.

## Ana sayfa pompa vurguları — 15 Kasım 2026

Ağırlık/debi/güç vurguları `pumps.ts` highlight alanlarından ana sayfa pompa slaytına ve Çözümlerimiz kartına taşındı. Mobil kartlar tek sütunda okunur. Kullanıcının son düzeltmesiyle ana sayfa ve pompa detayındaki iki cümle “TAHLİYE ETMEKTEDİR” ile biter.

## Pompa karşılaştırması — 16 Kasım 2026

Kullanıcının karşılaştırma görselinden iki kapasite sınıfı ve beşer anonim alternatif oluşturuldu. `PumpComparison.tsx`, ürün kartlarının hemen ardından yer alır. Rakip marka/model bilgileri kaynak koduna ve DOM’a alınmaz; sis görünümü kimlik içermeyen yer tutucudadır. DewJet modelleri güncel `pumps.ts` verilerinden 20 kW / 25 kg ve 45 kW / 55 kg olarak gelir; eski görseldeki APUMP-40/80 ve ağırlıklar kullanılmaz. Karşılaştırmanın yaklaşık ve eşit çalışma noktasında test verisi olmadığı belirtilir. Sekiz avantaj alanı ve mobil yatay kaydırılabilir semantik tablolar bulunur.

## Üst menü sırası — 16 Kasım 2026
Yenilenebilir Enerji menüsü DewJet Elektrikli Pompa ile İletişim arasına taşındı; mobil sıra da aynı. Enerji alt menüsü sağa hizalandı, dört bağlantı korundu.

