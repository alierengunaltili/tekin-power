# Elektrikli tekne motorları: mobil hız — 23 Kasım 2026

## Kapsam
90 altındaki sayfaları tek tek iyileştirme talebinin ilk adımı, `/dewjet-elektrikli-motor` sayfasıdır. Kaynak değişikliği yalnız bu sayfanın üst video kapağını etkiler. Video dosyaları, çözünürlükleri, ürün bilgileri ve yerel bekleyen diğer çalışmalar korunur.

## Güncel başlangıç ölçümü
- PageSpeed: https://pagespeed.web.dev/analysis/https-tekinpower-com-dewjet-elektrikli-motor/ok54dilene?form_factor=mobile
- 23 Kasım 2026 01:13 Türkiye saati; Lighthouse 13.6.0.
- Mobil performans 88; erişilebilirlik 100; SEO 100.
- FCP 956 ms, LCP 3901 ms, TBT 90 ms, CLS 0, Speed Index 1197 ms.
- Yönetim raporundaki 76 puan 22 Kasım'daki eski ölçümdür. Bu çalışmanın başlangıcı yeni 88 puandır.
- LCP öğesi `img.video-poster`: 1600×900 kapak, raporda 412×232 görünüm; 181,4 KiB indirme ve 169,4 KiB potansiyel tasarruf. Diğer üç saha videosu kapağıyla toplam görsel tasarruf önerisi 294,1 KiB.

## Değişiklik
Motor sayfasının mevcut `AdaptiveVideo` bileşeninde `responsivePoster` etkinleştirildi. Pompa sayfasında kullanılan aynı yol; Next Image ekran genişliği/yoğunluğuna göre kapak seçer, yüksek öncelikli responsive preload korunur. Video öğesi özgün kapağı ikinci kez indirmez. Orijinal görsel dosyası silinmez; video kalitesi değişmez.

## Doğrulama
- Değişen dosya ESLint ve dar kapsamlı `git diff --check` kontrolünden geçti.
- Mevcut 13 video davranış testi geçti.
- Temiz kontrol kopyası canlı sürümle aynı Next.js 15.4.10 bağımlılıklarını kullanır; özel günlük ve yerel LiFePO4 çalışmaları dahil edilmez. Ağ kısıtlı ilk derlemede Google Fonts indirilemedi; ağ erişimiyle yeniden derleme başlatıldı.
- Yeniden üretim derlemesi, lint/tip kontrolü ve 33 rota üretimi geçti (Next.js 15.4.10). Yerel üretim kontrolü 127.0.0.1:3020 üzerinde yapıldı.
- İlk HTML'de responsive kapak preload'u ve srcset var; sayfa ve görseller HTTP 200. İlk kontrol yalnız HTTP Link başlığını aradığı için başarısızdı; statik HTML'deki gerçek preload etiketi incelenip kontrol buna göre düzeltildi.
- Özgün kapak 185.752 bayt. 640 px AVIF 28.339 bayt (%84,7 daha az), 828 px AVIF 39.218 bayt (%78,9 daha az). Bunlar görsel yanıt boyutlarıdır; toplam sayfa hızı artışı veya PageSpeed puanı değildir.
- Tarayıcıda 390 px görünümde 640 px kapak seçildi; 1440 px görünümde 1920 px kapak seçildi. İki görünümde yatay taşma yok. Mobil menü aç/kapat ve OB-80 model seçimi çalıştı. Hero video özgün 1600×900 WebM kaynağını kullanıyor; mobilde oynama ve ekran dışında duraklama gözlendi. Video poster niteliği boş; eski kapağın video tarafından yeniden istenmesi önlendi. Tarayıcı hata kaydı boş.
- Kanıtlar dış `artifacts/motor-mobile-fix-2026-11-23/` klasöründeki `checks.json`, `mobile.jpg`, `desktop.jpg`. Kaynak değişikliği tek satırdır; yeni bağımlılık veya medya dönüşümü yok.

## Yayın
Bu çalışma henüz canlıya alınmadı. Yeni canlı PageSpeed puanı ölçülmedi; 90 üzeri başarı iddiası yoktur.
