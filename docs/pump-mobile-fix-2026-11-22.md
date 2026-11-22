# Pompa mobil açılış iyileştirmesi — 22 Kasım 2026

## Teşhis
PageSpeed 6j0r5eu3m3, 12:41:09 Türkiye saati: mobil 65, FCP 2.020 ms, LCP 6.692 ms, TBT 282 ms, CLS 0, SI 5.563 ms. Masaüstü 99. Bunlar laboratuvar ölçümleridir; saha verisi yok.

LCP öğesi hero-two-pumps-v2.webp kapak görseli. 83.316 bayt, 1344×768; rapor görüntülenen boyuta göre 60.082 bayt tasarruf öneriyor. Gözlenen LCP ayrıştırmasında kaynak gecikmesi 320 ms, indirme 350 ms, çizim gecikmesi 1.790 ms. Bu ayrıştırma simülasyon LCP değeriyle aynı zaman çizelgesi değildir.

Üç uzun görev: Google Analytics 140 ve 120 ms; uygulama ortak parçası 172 ms. Analytics 192,9 KiB aktarımın 79,9 KiB kısmı ilk görünümde kullanılmıyor. Dashboard eklenmesi tek başına nedensel olarak kanıtlanmadı.

## Değişiklikler
- Yalnız pompa kapağında responsive Next Image, yüksek öncelikli duyarlı preload ve ekran boyutuna uygun dosya. Video, zaten alttaki resim katmanında bulunan kapağın özgün sürümünü tekrar istemez. Video kalitesi/kadrajı değişmedi.
- Menü giriş animasyonu GSAP yerine tarayıcının animasyon API'sini kullanır; azaltılmış hareket tercihini gözetir. Menü için GSAP indirme/çalıştırma gereksinimi kalkar.
- Analytics dış betiği lazyOnload ile sayfa yüklemesinden sonra boş zamanda başlar. Erken config/olay kuyruğu korunur. Çok erken ayrılan ziyaretlerin ölçüm kaybı ihtimali vardır.
- Tasarruf panelinde Türkçe sayı biçimlendiricileri yeniden kullanılır; hesap formülleri ve sonuçları aynı.

## Kontroller
ESLint, 13 video mantık testi ve tasarruf hesap testleri geçti. Temiz yayın kopyasında 31 rota derlendi. 390 px ve 1440 px görünümde yatay taşma yok; mobil menü aç/kapat, video duraklat ve hesap API akışı çalıştı. 420 sınıfında alternatif 5: 20/92 kW, %78,3, aylık 62.022 TL ve 254.633 TL. Tarayıcı hata kaydı boş.

Yayın kopyası yalnız seçili index dosyalarından hazırlanır. Yerel özel günlük ve LiFePO4 çalışmaları dışarıda bırakılır; layout için yalnız Analytics stratejisi stage edilir. Yerel SiteUtilities aynı stratejiyle eşitlenir, yayımlanmaz.

## Son yerel ölçüm ve yayın durumu
750 px AVIF kapak HTTP yanıtı 10.035 bayt; özgün 83.316 bayta göre yaklaşık %88 daha küçük. Son derleme başarılı. Yayın otomatik onay denetimi tarafından bu çalışma için açık izin eksikliği gerekçesiyle reddedildi; commit/push gerçekleşmedi, HEAD 4e49b15. Kullanıcıya yayın onayı soruldu. Canlı sonrası PageSpeed henüz ölçülmedi. Mobil kanıt: ../artifacts/pump-mobile-fix/mobile.jpg.
