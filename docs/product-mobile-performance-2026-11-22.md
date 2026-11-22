# Dört ürün sayfası: mobil açılış iyileştirmeleri — 22 Kasım 2026

## Başlangıç ölçümü
Canlı PageSpeed Insights mobil laboratuvar sonuçları: pompa 78 / LCP 5,702 sn; elektrikli tekne motorları 80 / 5,342 sn; enerji depolama 80 / 5,484 sn; LiFePO4 81 / 4,990 sn. Tam raporlar dış çalışma alanındaki artifacts/pagespeed-2026-11-22/results.json dosyasındadır. Bu sayılar değişiklik öncesidir.

## Değişiklikler
- Pompa, elektrikli motor ve enerji depolama giriş videolarının özgün kapakları ilk HTML yanıtında yüksek öncelikli ön yüklenir. Video dosyaları ve çözünürlükleri değiştirilmedi.
- AdaptiveVideo, öncelikli kapağın yüklenmesi/çözülmesi tamamlanmadan otomatik video indirmesini başlatmaz. Kapak yüklenemezse video denemesi engellenmez. Oynatma, duraklatma, bağlantı tercihi ve ekran dışında durdurma korunur. Ana sayfanın öncelikli ilk slaytı da bu ortak davranışı kullanır.
- Enerji depolama sayfası mobilde animasyonla gizlenmez. GSAP matchMedia yalnız 1024 px ve üzerindeki giriş animasyonunu etkinleştirir; ekran boyutu değişiminde temizlenir. Azaltılmış hareket tercihinde ortak hizmet animasyonları çalışmaz.
- LiFePO4 giriş görselinde yüksek indirme önceliği ve 80 kalite kullanılır (önceden 90). Aynı özgün PNG, responsive boyutlar ve kadraj korunur; ürün katalog resimleri değiştirilmedi. Next Image üzerinden 1080 px AVIF yanıtı 196.401 → 74.994 bayt: %61,8 daha az veri. Bu dosya boyutu ölçümüdür, yükleme süresi veya PageSpeed puanı değildir.

## Kontroller
- Değişen altı TSX dosyası ESLint ve git diff --check kontrollerinden geçti.
- Aktif uygulama kaynaklarında TypeScript: 0 hata; eski oluşturulmuş günlük tipleri kontrol kapsamına alınmadı.
- Mevcut 13 adaptif video mantık testi geçti.
- Dört sayfa 320/390/1440 px genişliklerde kontrol edildi; yatay taşma yok. Kapak önceliği ve mobil contain / masaüstü kadrajı doğrulandı.
- Pompa videosunun oynatma/duraklatma, motor OB-80 seçimi, batarya 25.6V Marin seçimi ve enerji videosunun oynatılması doğrulandı.
- Ayrı yerel kopyada Next.js 15.5.29 production derlemesi, tip/lint ve 35 sayfa üretimi tamamlandı. Windows junction paketleme sınırı nedeniyle yalnız kontrol kopyasında output: standalone kaldırıldı; asıl next.config.ts değiştirilmedi. Google Fonts indirmesi Windows güvenilir sertifikalarıyla (--use-system-ca) tamamlandı; TLS doğrulaması kapatılmadı. Mevcut ESLint Next eklentisi algılama uyarısı derlemeyi engellemedi.
- Derlenmiş sürüm 127.0.0.1:3002 üzerinde dört sayfada kontrol edildi: başlıklar ve yüksek öncelikli kapaklar doğru, tarayıcı konsolunda hata ve yatay taşma yok.
- Tarayıcı gözlemleri ve JPEG kanıtları dış artifacts/product-mobile-performance klasöründedir.

## Yayın durumu
22 Kasım 2026: Kullanıcı canlı yayını ve ardından yeni PageSpeed ölçümünü istedi. Bu yayın yalnız altı kaynak dosyasındaki performans iyileştirmelerini kapsar. Önceki LiFePO4 karşılaştırma tablosu ve özel günlük değişiklikleri yerelde korunur; yayına dahil edilmez. Yayın sonrası ölçümler ayrıca kaydedilecektir.
