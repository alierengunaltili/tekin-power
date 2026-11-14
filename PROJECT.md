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
