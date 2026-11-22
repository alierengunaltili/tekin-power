# Mobil açılış ve erişilebilirlik — 22 Kasım 2026

## Kaynak ölçüm

PageSpeed Insights ana sayfa raporu: https://pagespeed.web.dev/analysis/https-tekinpower-com/c0iwpcg4px?hl=tr&form_factor=mobile . Ölçüm: 22 Kasım 2026 03:22:33 Türkiye saati. Mobil performans 78, LCP 5,2 sn, FCP 0,9 sn, TBT 50 ms, CLS 0; masaüstü performans 95. Erişilebilirlik iki cihazda 91. Gerçek kullanıcı verisi yok; bunlar laboratuvar sonuçlarıdır.

## Yerel değişiklik

- İlk slaytın mevcut 125.020 baytlık WebP kapağı CSS arka planı yerine ilk HTML'de dekoratif görsel olarak sunulur. Next Image `priority` ve `fetchPriority="high"` ile ön yüklenir. HTTP Link yanıt başlığında ön yükleme doğrulandı. Sonraki slaytlara yüksek öncelik verilmez.
- Kaynak görsel/video kalitesi ve dosyaları korunur. Mobil kapak ve video aynı `contain` yerleşimini kullanır; video ilk çözümlenen kareye kadar kapak görünür kalır.
- Ana sayfa giriş animasyonu yalnız 1024 px ve üstünde, azaltılmış hareket tercihi yoksa çalışır. Mobilde başlık ve kapak animasyon beklemeden görünür; GSAP matchMedia ekran boyutu değiştiğinde temizlenir.
- Slayt noktaları/okları, mobil menü ve mobil alt menü düğmeleri 44 × 44 px dokunma alanına sahiptir. Noktaların küçük görsel biçimi korunur; 320 px ekranda altısı aynı sıradadır.
- Footer yukarı dönüş düğmesine erişilebilir ad; hizmet kartı bağlantılarına hedefi açıklayan adlar eklendi.
- Ekranın altındaki footer logosunun gereksiz ön yüklemesi kaldırıldı; doğru responsive boyut bilgisi ve varsayılan lazy yükleme kullanılır.

## Doğrulama ve sınırlar

- Değişen altı TSX bileşeni için ESLint geçti.
- Aktif kaynaklar için TypeScript kontrolü geçti. Geçmiş `.next-journal-*` ve `.next` üretilmiş tipleri bu kaynak kontrolüne dahil edilmedi.
- Mevcut 13 adaptif video mantık testi geçti.
- Ana sayfa HTTP 200; ilk HTML'de yüksek öncelikli kapak, HTTP Link başlığında `rel=preload; as="image"; fetchpriority="high"` doğrulandı.
- Tarayıcıda 320, 390 ve 1440 px genişliklerde yatay taşma yok. Mobil menü/alt menü açılışı, slayt geçişi, marin videosunun oynaması, mobilde tam kadraj ve masaüstünde cover yerleşimi doğrulandı. Tarayıcı konsolunda hata görülmedi.
- Görsel kanıt: dış çalışma alanındaki `artifacts/mobile-performance/mobile-preview.jpg`.
- Değişen kaynaklarda `git diff --check` geçti. Production derlemesi ve yeni Lighthouse ölçümü çalıştırılmadı; canlı performans artışı sayısal olarak henüz ölçülmedi.
- Yayın veya uzak depoya gönderim yapılmadı. Önceki LiFePO4 ve özel günlük çalışmaları korunmuştur. Rapordaki tüm JavaScript/CSS fırsatları bu dar kapsamlı değişiklikte ele alınmamıştır.

## Yayın talimatı — 22 Kasım 2026
Kullanıcı mobil iyileştirmeler için açık canlı yayın onayı verdi. Yayın kapsamı yedi kaynak dosyası ve bu nottur; LiFePO4 tablosu, özel günlük ve diğer yerel değişiklikler dahil değildir. Hedef mevcut master → alierengunaltilis-projects/tekin-power → tekinpower.com otomatik yayın akışıdır. Yayın sonucu ayrıca doğrulanacaktır.
