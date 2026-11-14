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
