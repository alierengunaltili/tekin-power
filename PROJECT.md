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
