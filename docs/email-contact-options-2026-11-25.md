# Ortak e-posta seçenekleri — 25 Kasım 2026

Durum: Yerel değişiklik; yayımlanmadı.

- EmailContactLink artık düğme içeriği, görünüm, konu ve hazır mesaj alır.
- İletişim bölümündeki E-posta Gönder ve hata durumundaki e-posta bağlantısı ortak pencereyi açar.
- Deniz ve göl dibi tarama sayfasındaki e-posta bağlantısı aynı pencereye bağlandı; Su altı tarama projesi konusu korundu.
- Tüm sayfalardaki ortak Footer zaten bu bileşeni kullanır.
- Pencerede Gmail, e-posta uygulaması ve adres kopyalama seçenekleri bulunur. E-posta uygulaması seçeneği cihazın mailto desteğine bağlıdır.

Doğrulama: TypeScript ve değişen üç dosyada ESLint başarılı; 10 iletişim ölçüm testi geçti. Yerel tarayıcıda ana sayfa E-posta Gönder ve tarama sayfası bağlantısı pencereyi açtı; Gmail ve mailto bağlantılarında konu ve hazır mesaj doğrulandı. Kaynak taramasında bileşen dışında doğrudan mailto bağlantısı kalmadı. E-posta gönderilmedi.

ContactSection dosyasında önceden bulunan Natro değişiklikleri bu çalışmadan ayrıdır; yayın sırasında yalnız ilgili e-posta bağlantısı değişiklikleri alınmalıdır.
