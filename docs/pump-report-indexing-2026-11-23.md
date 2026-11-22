# Tasarruf raporunun Google dizinine açılması — 23 Kasım 2026

Kullanıcı rapor sayfasının Google'a açılmasını, kendine özgü başlık/açıklama ve tek ana adres tanımını istedi; canlı yayına açıkça izin verdi.

- Yol: /dewjet-pompa/tasarruf-hesaplama
- Başlık: Pompa Elektrik Tasarrufu Hesaplama | Tekin Power
- Açıklama: DewJet ile diğer pompaların elektrik maliyetlerini karşılaştırın. Tarifenize göre aylık, yıllık ve 5 yıllık tasarrufu hesaplayın, PDF raporunuzu indirin.
- noindex/nofollow yerine index/follow kullanılır. Genel robots.txt zaten bu yolu taramaya açıktır.
- pageMetadata yardımcısı canonical ve Open Graph adresini parametresiz canlı URL'ye sabitler. 20/45 kW dahil farklı sorgu parametreleri aynı canonical'ı kullanır; hesap girdileri korunur.
- Site haritasına yalnız parametresiz rapor adresi eklenir.
- Hesaplama formülleri, PDF çıktısı ve ana pompa sayfasının SEO içeriği değiştirilmez.
- Google'ın dizine eklemesi veya gösterdiği başlık/açıklama garanti edilmez. Search Console canlı URL testi ve dizine ekleme isteği ayrıca yapılabilir.

Kontrol: ../artifacts/check-pump-report-seo.cjs temel URL ve iki parametreli varyantta gerçek HTML başlığı, açıklama, robots ve canonical ile sitemap/robots.txt içeriğini doğrular. Üretim ve canlı kontrollerinin sonuçları yayın sonrası kaydedilecektir.

Yerel doğrulama: Temiz yayın kopyasında Next.js 15.4.10 üretim derlemesi, lint/tip kontrolleri ve 33 sayfa üretimi geçti. Temel URL ve iki parametreli varyantın HTML/HTTP, robots, canonical, Open Graph ile site haritası kontrolleri geçti. Görünür tasarım ve hesaplama mantığı değişmedi.
