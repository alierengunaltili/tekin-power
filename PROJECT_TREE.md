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
