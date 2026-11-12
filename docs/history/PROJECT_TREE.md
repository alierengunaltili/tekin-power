# Proje ağacı

- `tekin-power-master/public/dewjet-motor/brochures/dwe-{ob-10,ob-30,ob-80,ub-80}.pdf`: üreticinin resmi broşürleri. Model eşlemesi `src/data/motorModels.ts`; indirme butonu `MotorProducts.tsx`. PDF inceleme çıktıları `artifacts/motor-brochures/`.

- `tekin-power-master/public/dewjet-motor/18kw/outboard-18kw-studio-v1.png`: beyaz fonlu pervaneli dıştan takma katalog görseli; `motorModels.ts` üzerinden model panelinde kullanılır. Orijinal `outboard-18kw.jpg` korunur.

- Motor model seçimi (2026-11-12): `tekin-power-master/src/data/motorModels.ts` altı modelin özellik/görsel eşlemesidir. `MotorProducts.tsx` model sekmelerini ve panelini yönetir; resmi OB/UB ürün görselleri `public/dewjet-motor/models/` içindedir.

- Üç motorlu kart (2026-11-12): `tekin-power-master/public/dewjet-motor/motor-coast-card-v2.png`. `src/data/solutions.ts` içindeki `cardImage` alanını `ServicesGrid.tsx` ve `ServicesSectionHomepage.tsx` tüketir. İlk tek motorlu v1 dosyası korunur.

- Pompa görselleri (2026-11-12): `tekin-power-master/public/dewjet-pompa/` altında `turkuaz-25kg-poster.png`, `mobil-55kg-poster.png`, `turkuaz-four-views.png`, `mobil-four-views.png`. Kullanım: `src/data/pumps.ts` → `PumpProducts.tsx`.

## 18 kW motor ürünleri ve mobil kadraj — 2026-11-12

- `tekin-power-master/src/components/MotorProducts.tsx`: içten/dıştan takma ürün alanları, doğrulanmış teknik bilgiler ve broşür bağlantısı.
- `tekin-power-master/public/dewjet-motor/18kw/`: özgün PDF motor görseli, kullanıcı dıştan takma JPEG'i ve içten takma PDF broşürü.
- `tekin-power-master/scripts/check-mobile-video-layout.cjs`: telefon kadrajı, metin/ürün ayrımı, yatay taşma ve yatay ekran kontrolleri.
- `artifacts/motor-products-18kw/`: PDF metinleri, sayfa görüntüleri ve tasarım önizlemeleri; yayın dışı inceleme dosyaları.

## Video netliği ekleri — 2026-11-12

- `tekin-power-master/scripts/check-video-scroll.cjs`: ana sayfa ve ürün/hizmet sayfalarında masaüstü/mobil duraklatma, devam etme, hızlı kaydırma ve yeniden yükleme denetimi.

- `tekin-power-master/src/data/videoAssets.json`: 16 video başvurusu, çözünürlük, süre ve dosya boyutları.
- `tekin-power-master/src/lib/videoAssets.ts`: medya kayıt tipleri.
- `tekin-power-master/src/lib/videoQuality.ts` ve `videoPlayback.ts`: netlik/bağlantı seçimi, takılma ve biçim uyumluluğu.
- `tekin-power-master/public/media/sharp-v2/`: sürümlü VP9/MP4 videolar ve JPEG/WebP kapaklar.
- `tekin-power-master/scripts/prepare-sharp-media.cjs` ve `optimize-video-posters.cjs`: kaynaklardan üretim ve kapak küçültme.
- `tekin-power-master/scripts/check-sharp-media.cjs` ve `check-sharp-playback.cjs`: dosya bütünlüğü ve tarayıcı kontrolleri.
- `artifacts/sharp-media/`: ölçümler, karşılaştırma görselleri, tarayıcı sonuçları. Yayın dosyası değildir.
- `VIDEO_QUALITY_REPORT.md`: ölçülen boyutlar ve kaynak kalite sınırları.

## Türkter takip ekleri — 2026-11-06

- `tekin-power-master/src/app/proje-takip/page.tsx`: yerel teknik kabul ekranı, noindex.
- `tekin-power-master/src/components/AcceptanceTracker.tsx` ve `.module.css`: firma/prosedür filtreleri, madde ayrıntısı, yükümlülük, belge, kapanış ve yedekleme.
- `tekin-power-master/src/lib/acceptance.ts`: IndexedDB ve ortak kapanış mantığı.
- `tekin-power-master/src/data/acceptance.json`: Excel kaynaklı 250 kayıt, sayfa ve satır bilgisi.
- `tekin-power-master/scripts/import-acceptance.py`: salt okunur Excel veri aktarımı.
- `tekin-power-master/scripts/open-tracker.vbs` ve `create-tracker-shortcut.ps1`: Türkter masaüstü kısayolu ve gizli başlatıcı; mevcut `open-local-site.cjs --tracker` yolunu kullanır.
- `tmp/check-acceptance.cjs`: yerel tarayıcı işlev kontrolü; yayın dosyası değildir.

2026-10-27 kaynak incelemesine göre hazırlanmıştır. Medya dosyaları ve bileşenler grup halinde özetlenmiştir; node_modules, .next ve Git iç dosyaları gösterilmez.

```text
tekin-power-master/                 # Çalışma alanı
├── AGENTS.md                       # Genel ajan kuralları
├── FIRST.md                        # Başlangıç ve doğrulama akışı
├── PROJECT.md                      # Mimari ve mevcut sınırlamalar
├── SEO_CONTENT_MAP.md              # Excel kaynakları, kullanıcı kararları ve içerik eşlemesi
├── PROJECT_TREE.md                 # Bu harita
├── gunespaneli-redesign/            # Dış medya
├── hakkimizda-photos/
├── hizmetlerimiz/
├── landing-page-photos/
├── landing-page-videos/
├── landing-page-videos-backup/
├── landing-page-videos-optimized/
└── tekin-power-master/             # Gerçek uygulama kökü
    ├── AGENTS.md                   # Uygulamaya özel ajan kuralları
    ├── README.md
    ├── VIDEO_OPTIMIZATION_GUIDE.md
    ├── package.json
    ├── package-lock.json
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    ├── postcss.config.mjs
    ├── vercel.json
    ├── .gitignore
    ├── .vercelignore               # Yayın yüklemesinden hariç tutulan dosyalar
    ├── dev-server.log
    ├── dev-server-2.log
    ├── public/
    │   ├── tekinpowerlogos/tekinpower-marin-light-v2.png # Marin, şeffaf açık logo
    │   ├── tekinpowerlogos/tekinpower-marin-dark-v2.png  # Marin, şeffaf koyu logo
    │   ├── tekinpowerlogos/        # Açık ve koyu logo sürümleri
    │   ├── afad/                  # Kaynak gösterilen resmî haber fotoğrafları
    │   ├── dalyan/                # Elektrikli tekne haber görselleri
    │   ├── gunespaneli-redesign/
    │   ├── hakkimizda-photos/
    │   ├── hizmetlerimiz/
    │   ├── landing-page-photos/
    │   ├── landing-page-videos-optimized/
    │   ├── landing-page-videos-hd/      # 720p / 30fps
    │   ├── landing-page-videos-medium/  # 540p / 30fps
    │   ├── landing-page-videos-lite/    # 360p / 24fps
    │   ├── landing-page-posters/        # JPEG açılış görselleri
    │   ├── service-videos-hd/           # Aynı üç kalite hizmet videolarında da kullanılır
    │   ├── service-videos-medium/
    │   ├── service-videos-lite/
    │   ├── service-posters/
    │   └── akuler/doğa/            # Voltaj/kapasiteye göre batarya PNG'leri
    ├── scripts/
    │   ├── open-local-site.cjs     # Yerel sunucu kontrolü, başlatma ve tarayıcı açma
    │   ├── open-local-site.vbs     # Masaüstü kısayolu için gizli başlatıcı
    │   ├── compress-videos.js
    │   ├── prepare-hero-media.ps1
    │   ├── prepare-afad-media.ps1
    │   ├── prepare-dalyan-media.ps1
    │   ├── prepare-adaptive-media.ps1
    │   ├── test-adaptive-video.cjs
    │   ├── check-seo-pages.mjs      # HTML, metadata, kaynak kararları ve sitemap doğrulaması
    │   ├── check-adaptive-media.cjs
    │   └── setup-video-optimization.sh
    └── src/
        ├── app/
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── globals.css
        │   ├── robots.ts
        │   ├── sitemap.ts
        │   ├── afad/page.tsx       # /dalyan adresine kalıcı yönlendirme
        │   ├── dalyan/page.tsx     # Elektrikli tekne haberleri
        │   ├── tekne-hmi/page.tsx    # Onaylanan HMI çözümü, rehber ve SSS
        │   ├── dewjet/page.tsx
        │   ├── dewjet-pompa/page.tsx
        │   ├── dewjet-elektrikli-motor/page.tsx
        │   ├── gunespaneli/page.tsx
        │   ├── hakkimizda/page.tsx
        │   ├── hizmetlerimiz/
        │   │   ├── page.tsx
        │   │   ├── deniz-gol-dibi-arama-tarama/page.tsx  # Hazırlanıyor sayfası
        │   │   └── [slug]/page.tsx
        │   ├── lifepo4/page.tsx
        │   └── utils/photo-mappings/hizmetlerimiz/
        │       └── *.ts            # Hizmete göre S3 medya adresleri
        ├── components/
        │   ├── Navbar.tsx
        │   ├── ServiceNavigation.tsx # Hizmetlerimiz açılır alt menüsü
        │   ├── Footer.tsx
        │   ├── HeroSection.tsx
        │   ├── AdaptiveVideo.tsx
        │   ├── AboutSection.tsx
        │   ├── ContactSection.tsx
        │   ├── BatterySection.tsx
        │   ├── SolarSection.tsx
        │   ├── ServicesSectionHomepage.tsx
        │   ├── ServicesSection.tsx
        │   ├── ServicesGrid.tsx
        │   ├── AnimatedServicePage.tsx
        │   ├── PhotoSwiper.tsx
        │   ├── CatalogSection.tsx
        │   ├── ProjectsSection.tsx
        │   ├── JsonLdSchema.tsx
        │   ├── DewJetAnnouncementModal.tsx
        │   ├── SolutionGuide.tsx   # Kaynak eşlemeli açıklamalar, SSS ve ilgili bağlantılar
        │   ├── SolutionInfoPage.tsx # Ürün rehberi sayfa şablonu
        │   ├── DewJetInfoPage.tsx
        │   ├── services/           # Hizmete özel içerik bileşenleri
        │   ├── lifepo4/            # Batarya sayfası, kategori, katalog ve modallar
        │   └── solar/              # SolarPhotoSwiper, SolarTypesRedesign ve SolarTypesSection
        ├── data/pageContent.ts     # SEO metinleri ve Excel kaynak aralıkları
        ├── data/solutions.ts       # Tüm hizmet listeleri ve medya sırası için ortak katalog
        ├── data/afad.ts            # Eski, artık kullanılmayan AFAD içeriği
        ├── data/dalyan.ts          # Elektrikli tekne haberleri, tarihler ve kaynaklar
        ├── hooks/useVideoOptimization.ts
        ├── lib/seo.ts              # Site adresi ve sayfaya özel metadata
        ├── lib/videoQuality.ts
        ├── lib/waterPages.ts        # Navbar ve Footer için ortak su temalı sayfa kontrolü
        ├── lib/videoPlayback.ts
        └── types/global.d.ts
```

Yapı değiştiğinde bu dosyayı güncelle. Dış medya klasörleri uygulamanın `public/` klasörüyle aynı konum değildir.

## Pompa ürün içeriği ekleri — 2026-11-04

- `tekin-power-master/src/components/PumpProducts.tsx`: hafiflik vurgusu, fotoğraflı model kartları ve teknik özellikler.
- `tekin-power-master/src/data/pumps.ts`: 20/45 kW model verileri ve 55 kg kullanıcı düzeltmesi.
- `tekin-power-master/public/dewjet-pompa/dwe-apump-{20,45}.jpg`: ürün bilgi kartlarından çıkarılan gerçek fotoğraflar.
- `tmp/pdfs/`: yerel PDF inceleme görselleri/metinleri; uygulama yayın kökünün dışında.
- `artifacts/pre-pump-content-2026-11-04/`: değişiklik öncesi ilgili kaynakların yerel kopyası.


## Tekne motoru ve marin içerikleri

- `tekin-power-master/src/components/MotorOverview.tsx`: motor görseli ve güncel ürün özeti.
- `tekin-power-master/public/dewjet-motor/`: kılavuzdan alınan motor ve örnek kaptan ekranı görselleri.
- `tekin-power-master/src/components/TrackedContactActions.tsx`: motor ve marin teklif bağlantılarında kanal bazlı tıklama ölçümü.

## Ana sayfa motor medyası — 2026-11-11

- tekin-power-master/scripts/prepare-motor-hero.ps1: kaynak motor videosu ile deniz manzarasını birleştirir ve üç web sürümü/poster üretir.
- tekin-power-master/public/dewjet-motor/motor-deniz-doga-v1.png: oluşturulan deniz ve yeşil kıyı arka planı.
- tekin-power-master/public/landing-page-videos-{hd,medium,lite}/dewjet-motor-deniz-v1.mp4: uyarlanabilir motor videosu.
- tekin-power-master/public/landing-page-posters/dewjet-motor-deniz-v1.jpg: video yüklenirken görünen poster.

İki motor konsepti: artifacts/twin-motor-concept/scene-v1.png, render.cjs ve twin-motor-motion-v1.webm üretim kaynaklarıdır. Uygulama: public/service-videos-{hd,medium,lite}/dewjet-twin-marine-v1.mp4 ve public/service-posters/dewjet-twin-marine-v1.jpg.

İki motor konsepti v2: artifacts/twin-motor-concept/scene-v2.png ve twin-motor-motion-v2.webm; render.cjs v2 ile tekrar üretilir. Güncel sayfa public/service-videos-{hd,medium,lite}/dewjet-twin-marine-v2.mp4 ve public/service-posters/dewjet-twin-marine-v2.jpg kullanır.

## Su altı tarama sayfası — 2026-11-12

- `tekin-power-master/src/data/dredging.ts`: katalog kaynaklı faaliyetler, süreç, altı ekipman grubu ve referans verileri.
- `tekin-power-master/src/app/hizmetlerimiz/deniz-gol-dibi-arama-tarama/page.tsx`: katalog tanıtım sayfası; sunucu bileşeni, yerel bölüm bağlantıları ve yerel HTML details panelleri.
- `tekin-power-master/public/deniz-gol-tarama/`: katalogdan çıkarılan yedi özgün JPEG ve `tekin-power-tarama-katalogu-2026.pdf`.
- `artifacts/survey-catalog/`: 16 sayfanın metin/görsel incelemesi, yerel/canlı tarayıcı doğrulama çıktıları ve ekran görüntüleri (yayın dışı).

- `tekin-power-master/src/components/TurnkeySolutionsSection.tsx`: ana sayfada Çözümlerimiz ardından anahtar teslim elektrikli pompa/tekne motoru vitrini. `src/app/page.tsx` üzerinden çağrılır; `src/data/pumps.ts` model verilerini kullanır. Görseller mevcut `pompa-doga-deniz-v1.png` ve `motor-coast-card-v2.png` dosyalarıdır. Tarayıcı kanıtları `artifacts/turnkey-home/` altında.

- `tekin-power-master/src/components/WhatsAppContact.tsx`: yalnız ana sayfada sabit WhatsApp bağlantısı; `src/app/page.tsx` çağırır. Tarayıcı doğrulamaları `artifacts/whatsapp-home/` altında.
