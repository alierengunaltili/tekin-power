# Proje ağacı

- src/app/: ana sayfa, hizmetler, DewJet motor/pompa, LiFePO4, HMI, sitemap ve robots.
- src/components/: menü, medya, ürün seçiciler, hizmet ve iletişim bileşenleri.
- src/data/: motorModels, pumps, solutions, pageContent, dredging, videoAssets.
- src/lib/: medya seçim mantığı, SEO ve su sayfası eşlemesi.
- public/: görseller, logolar, video dosyaları ve ürün PDF'leri.
- scripts/: medya üretimi/denetimi, oynatma ve SEO testleri, yerel site başlatıcı.
- tools/twin-motor-concept/: iki motorlu konsept animasyonun WebGL üretim kodu ve sahne kaynakları.
- tools/verification/: son tarama, anahtar teslim ve WhatsApp tarayıcı kontrolleri. Mevcut Windows çalışma alanına ait yollar taşınırken uyarlanmalıdır.
- docs/history/: kaynak kararları ve ayrıntılı önceki test/geliştirme kayıtları.
- DEPLOYMENT.md: GitHub/Vercel yayın hedefi ve mevcut doğrulama durumu.

- public/media/survey-v1/: ana sayfa Deniz & Göl slaytının H.264/VP9 videosu ve JPEG kapağı; src/data/videoAssets.json kaydı landing-page/deniz-gol-tarama-v1. Üretim scripts/prepare-survey-video.cjs.

- src/components/MotorHeroPresentation.tsx ve globals.css: ana sayfa siyah motorun hafif hareketli sunumu. Görsel: public/dewjet-motor/18kw/outboard-18kw-cutout-v1.webp.

- public/media/survey-v2/: yeni Deniz & Göl videosunun 10 saniyelik full/balanced MP4/WebM sürümleri ve açılış kapağı. Üretim scripts/prepare-survey-video-v2.cjs; homepageImage mevcut deniz-gol-tarama/kesici-emici.jpg.

- src/app/arsimet-burgusu/page.tsx: Arşimet Burgusu başlık ve iletişim sayfası. ServiceNavigation.tsx enerji grubuyla üç alt bağlantıyı yönetir.

- public/unisun/unisun-2024-katalog.pdf: kullanıcının özgün Unisun 2024 kataloğu. EnerjiDepolamaContent.tsx ortak unisunStorageContent ve LiFePO4BatterySection kullanır.

- public/unisun/energy-gallery/: mevcut enerji galerisine ait 23 özgün görsel; enerjidepolama fotoğraf eşlemesi yerel adresleri kullanır.

- public/anahtar-teslim/: Unisun kataloğundan çıkarılmış akü, inverter, DC sigorta ve konnektör WebP görselleri. Anahtar teslim paket kartlarını TurnkeySolutionsSection.tsx yönetir.

- public/dewjet-pompa/hero-two-pumps-v2.webp: pompa detay videosunun 13. saniyesinden yeni kapak. public/anahtar-teslim/bms-v1.webp: Unisun PDF BMS görseli.
`public/dewjet-motor/motor-lineup-20261114.jpg`: kullanıcının özgün üç motorlu fotoğrafı; MotorHeroPresentation ve PhotoSwiper motor slaydında kullanılır. Eski tek motor sunumunun yerini alır.
`public/akuler/marin-v1/`: dokuz modelin voltaj/kapasite etiketiyle eşleşen mavi deniz temalı WebP görselleri. Ortak LiFePO4BatterySection ile /lifepo4 ve /hizmetlerimiz/enerji-depolama sayfalarında kullanılır.
`src/components/DredgingHeroPresentation.tsx` ve `public/deniz-gol-tarama/3d-sahne-v1.png`: Hakkımızda onaylı 3B tarama sahnesi; CSS hareket ve mobil kadraj globals.css içinde.

HeroSection.tsx aynı DredgingHeroPresentation bileşenini ana sayfanın Deniz & Göl slaydında kullanır; home-dredging-hero mobil kadraj kuralları globals.css içindedir.


PhotoSwiper.tsx: Deniz & Göl slaydında ortak DredgingHeroPresentation; solutions.ts image/cardImage aynı 3d-sahne-v1.png dosyasına bağlıdır.

Tarama detay sayfasının girişindeki AdaptiveVideo, landing-page/deniz-gol-tarama-v1 kaydını ve public/media/survey-v1 kaynaklarını kullanır.

public/media/survey-detail-v3/: kullanıcının 1.mp4 videosundan tam/hafif MP4 ve WebM ile 2. saniye kapağı. scripts/prepare-survey-detail-v3.cjs kaynak yolunu parametre olarak alır; service/deniz-gol-detail-v3 manifest kaydı detay girişine bağlıdır.

public/akuler/hero/green-marine-coast-v1.png: /lifepo4 girişindeki iki akülü doğa/deniz sahnesi. Sayfa SolutionInfoPage headerMedia alanını kullanır; globals.css battery-selection-page kapsamındaki kadraj ve karartmayı yönetir.

public/akuler/hero/green-marine-camping-v2.png: karavan ve denizi izleyen çift eklenmiş son LiFePO4 giriş sahnesi.

## Saha galerileri — 15 Kasım 2026
- src/app/sahadan-gorseller/page.tsx: iki kategorili galeri girişi.
- src/app/sahadan-gorseller/[slug]/page.tsx: kategoriye ait fotoğraf/video sunumu ve boş durum; bilinmeyen kategori 404.
- src/data/fieldGalleries.ts: yalnız bu alan için kullanıcı tarafından gönderilecek saha medyası. Başlangıçta iki kategori de boştur.

- public/sahadan-gorseller/v1/marin/: 5 MP4, 5 JPEG kapak, 4 saha fotoğrafı.
- public/sahadan-gorseller/v1/pompa/: 5 MP4 ve 5 JPEG kapak.
- Kaynaklar kullanıcının TEKİN POWER SAHA GÖRÜNTÜLERİ/web/{marin,pompa} klasörleri; eşlemeler src/data/fieldGalleries.ts. Kategori sayfası medya türüne göre videoları önce, fotoğrafları sonra sıralar.

## Arşimet Burgusu sayfası — 15 Kasım 2026
- src/app/arsimet-burgusu/page.tsx: sunum temelli görsel ürün/proje sayfası; sunucu bileşeni, yerel details SSS ve bölüm bağlantıları.
- src/data/archimedes.ts: alternatif teknoloji tablosu, proje aşamaları ve SSS.
- public/arsimet-burgusu/: PDF'den çıkarılmış altı özgün görsel ve tekin-power-arsimet-sunumu-2026.pdf. Kaynak PDF SHA256 F771F7812CC84A143E54CAD5F63F902DCBF3B9C54CEF1184A14660DAC8BBD7C8.

Sahadan Görseller rotaları artık yalnız kalıcı yönlendirme içerir; galeri arayüzü ve menü/sitemap bağlantıları kaldırıldı. public/sahadan-gorseller ve src/data/fieldGalleries.ts korunur, başka sayfalara medya taşınmadı.

## Açıklama videoları — 15 Kasım 2026 (yerel)
- public/saha-videolari/{marin-hmi-v1,manavgat-donusum-v1,manavgat-batarya-v1,demre-donusum-v1,manavgat-seyir-v1,motor-su-itisi-v1}/: her klasörde özgün akışlı video.mp4 ve poster.jpg.
- src/components/services/MarinContent.tsx: beş yeni videonun açıklama eşlemeleri.
- src/app/dewjet-elektrikli-motor/page.tsx: su itiş gücü videosunun menzil bölümüne eşlemesi.
- src/components/SolutionGuide.tsx ve SolutionInfoPage.tsx: isteğe bağlı sectionMedia alanıyla yan yana/mobil alt alta medya yerleşimi.

- public/saha-videolari/{demre-motor-secimi-v1,demre-kumanda-v1,pervaneli-motor-v1,batarya-tasarimi-v1}/: sonradan kullanıcı tarafından seçilen dört videonun MP4 ve posterleri; ilk üçü motor sayfasında, sonuncusu MarinContent içinde.
- public/saha-gorselleri/dewjet-rim-fuar-v1.jpeg: kullanıcı tarafından seçilen özgün 996×1600 fuar fotoğrafı; motor sayfasının motor-secimi bölümünde.

- public/saha-gorselleri/marin-{demre-ekip,manavgat-gunes,demre-tekneler,manavgat-batarya}-v1.jpeg: MarinContent uygulama galerisindeki dört özgün fotoğraf. Başlık kimliği marin-uygulama-gorselleri; açıklama ve sıra aynı bileşenin photos listesinde.

- public/saha-videolari/batarya-tasarimi-v2/: kullanıcının 132,42 saniyelik Trim videosu ve kapağı; MarinContent batarya anlatımının güncel kaynağı.

- public/saha-videolari/pompa-detayli-anlatim-v1/: 110,20 saniyelik pompa anlatımı ve kapağı; dewjet-pompa/page.tsx rim-drive bölümü.

- public/saha-videolari/afad-tatbikat-{1,2}-v1/: iki özgün tatbikat videosu ve kapakları; dewjet-pompa/page.tsx tasinabilirlik bölümü.

- public/saha-videolari/konya-gulistan-tahliye-v1/: 39,81 saniyelik tahliye videosu ve kapağı; dewjet-pompa/page.tsx kullanim-alanlari bölümü.

- public/saha-videolari/pompa-kirli-su-v1/: 24,66 saniyelik taş/çamur/kirli su uygulaması ve kapağı; aynı kullanim-alanlari bölümünde Konya videosunun ardından.

- public/saha-videolari/pompa-debi-{1,2}-v1/: su aktarma ve hortumla tahliye videoları/kapakları; dewjet-pompa/page.tsx debi-basinc bölümü.

- public/saha-videolari/pompa-20kw-hafiflik-v1/: 15,42 saniyelik hafiflik videosu ve kapağı; tasinabilirlik bölümünde iki AFAD videosundan önce.

- public/saha-gorselleri/pompa-{afad,belediye}-ekip-{1,2}-v1.jpeg: pompa sayfası sonundaki dört saha fotoğrafı. Eşlemeler dewjet-pompa/page.tsx fieldPhotos listesinde; SolutionInfoPage children alanında gösterilir.

- SolutionGuide.tsx GuideClosing: iletişim ve ilgili çözümler. SolutionInfoPage closingAfterChildren yalnız pompa sayfasında bu kapanışı galeriden sonra yerleştirir. Motor seyir-kontrolu saha videosu gösterimden kaldırıldı; tahrik-yerlesimi demre-motor-secimi-v1 dosyası Oymapınar açıklamasıyla kullanılır.

- `src/components/PumpComparison.tsx`: pompa model kartları sonrasında iki anonim karşılaştırma tablosu ve DewJet avantajları; müşteri görselindeki karşılaştırma değerleri, güncel DewJet katalog verileri.
