# İletişim tıklamaları — 25 Kasım 2026

Durum: yerel değişiklik; henüz yayımlanmadı. Kullanıcı tüm sayfalarda telefon, WhatsApp ve e-posta tıklamalarını ayrı ölçmek istedi.

## Kayıtlar

| Etkinlik | Ölçülen eylem |
| --- | --- |
| `phone_click` | Telefon bağlantısını açma |
| `whatsapp_click` | WhatsApp bağlantısını açma |
| `email_click` | Doğrudan mailto veya Gmail yazma bağlantısını açma |
| `email_options_open` | Alt bilgideki e-posta seçenek penceresini açma |
| `email_address_copy` | E-posta adresini başarıyla panoya kopyalama |

`ContactClickTracking` kök layout'ta tek kez kurulur. Document capture listener hem normal/klavye tıklamalarını hem orta tuşla açılan bağlantıları izler. Yeni oluşan ürün bağlantıları ve Next.js sayfa geçişleri de kapsanır. Effect cleanup, React geliştirme modundaki tekrar kurulumun çoğaltılmış kayıt üretmesini önler. `/admin` ve alt yolları hariçtir.

`contactAnalytics.ts` sabit kanal/eylem/yöntem ve güncel `page_path` gönderir. Özel etkinliklere telefon numarası, e-posta adresi, mesaj metni, bağlantı query/hash veya serbest metin eklenmez. Google etiketi henüz hazır değilse standart gtag Arguments biçimiyle dataLayer kuyruğu kullanılır. Ölçüm hatası iletişim eylemini engellemez.

Eski yalnız motor/marin alanında çalışan `TrackedContactActions` ve `contact_click` kaldırıldı. Yerine ortak ölçüm geçer. GA'nın mevcut otomatik `click` olayı ayrıca bulunabilir; iletişim sayısı için yukarıdaki üç özel tıklama adı kullanılmalı, genel `click` ile toplanmamalıdır. Pencere açma ve kopyalama da `email_click` toplamına eklenmemelidir. Hiçbiri görüşmenin veya mesaj tesliminin tamamlandığını kanıtlamaz.

## Kontroller

- `node --test scripts/test-contact-analytics.cjs`: 10 test geçti. 14 açık sayfa yolu × üç kanal için 42 senaryo; iç öğe/metin düğümü, klavye, orta tuş, admin dışlaması, hassas değerlerin çıkarılması, erken kuyruk, ölçüm hatası ve cleanup kapsanır. Bunlar izole olay testleridir; 14 canlı sayfada gerçek tıklama veya GA teslim testi değildir.
- `node node_modules/typescript/bin/tsc --noEmit`: geçti.
- Değişen TypeScript/TSX dosyalarının ESLint kontrolü: geçti.
- Yerel Next.js sunucusunda ana sayfa, pompa, marin ve tasarruf raporu HTTP 200 döndü; ortak layout çıktısı ve başarılı derleme doğrulandı. Gerçek tarayıcı tıklaması bu kontrolde yapılmadı.
- Natro, özel günlük, bağımlılık ve mevcut Analytics hesap ayarları değiştirilmedi.

## Yayın sonrası doğrulama

Yayın isteği geldiğinde yalnız bu kapsamın dosyaları ve kök layout'a eklenen import/bileşen dahil edilmeli; layout'ın önceden bekleyen özel SiteUtilities değişikliği topluca gönderilmemeli. Mevcut Natro/özel günlük çalışmaları yayımlanmamalı.

Canlıda her kanaldan kontrollü bir tıklamanın Analytics Gerçek Zamanlı/Etkinlikler ekranına ulaştığı doğrulanmalı. Şu anda Google'a gerçek teslim doğrulanmış değildir. Yeni adlar için etkinlik oluşturma kuralı gerekmez; adlar site kodundan gönderilir. Önemli etkinlik işaretlemesi ve isteğe bağlı özel boyutlar henüz yapılmadı.

Google etiket/kuyruk referansı: https://developers.google.com/tag-platform/gtagjs
