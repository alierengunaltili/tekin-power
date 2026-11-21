# Eski arama bağlantıları — 22 Kasım 2026

Kapsam: arama sonuçlarında bulunan adresler, mevcut sitemap, eski hizmet tanımları ve kaldırılmış galeri bağlantıları birlikte incelendi. Toplam 28 adresin canlı yanıtı, ulaştığı sayfa, başlık ve canonical bilgisi kontrol edildi. Bu, Google indeksinin eksiksiz dışa aktarımı değildir: doğrudan Google sorgusu otomatik trafik doğrulaması gösterdi; Search Console erişimi kullanılmadı. Arama aracı sonuçlarında Telekomünikasyon, Car Port, Mobil Solar, Konut, E-Bus, Forklift, Golf Araçları ve eski DewJet kayıtları bulundu. Drone ve Solar Pole kaynak kodundaki eski hizmetlerden, AFAD ve galeriler eski rotalardan tamamlandı.

## Eski → güncel adresler

| Eski yol | Güncel hedef | İçerik eşlemesi |
| --- | --- | --- |
| /dewjet | /dewjet-elektrikli-motor | Önceki düzeltme; motor ürünleri |
| /hizmetlerimiz/telekomunikasyon | /hizmetlerimiz/enerji-depolama | Önceden 404; baz istasyonu yedek enerji/depolama ihtiyacı |
| /hizmetlerimiz/konut-cozumleri | /hizmetlerimiz/enerji-depolama | Konut bataryası ve enerji depolama |
| /hizmetlerimiz/car-port | /gunespaneli | Güneş paneli uygulamaları |
| /hizmetlerimiz/mobil-solar | /gunespaneli | Mobil solar ve panel türleri |
| /hizmetlerimiz/solar-pole | /gunespaneli | Bağımsız güneş enerjisi uygulamaları |
| /hizmetlerimiz/e-bus | /lifepo4 | Ulaşım bataryası seçimi |
| /hizmetlerimiz/forklift | /lifepo4 | Endüstriyel batarya seçimi |
| /hizmetlerimiz/golf-araclari | /lifepo4 | Araç bataryası seçimi |
| /hizmetlerimiz/drone | /lifepo4 | Batarya seçimi |
| /afad | /dewjet-pompa#tasinabilirlik | AFAD ortak pompa tatbikatlarının bulunduğu bölüm; eski ilgisiz Dalyan yönlendirmesi değiştirildi |
| /sahadan-gorseller | /hizmetlerimiz | Önceden kaldırılmış genel galeri; hizmet seçimi |
| /sahadan-gorseller/marin-cozumler | /hizmetlerimiz/marin | Marin saha çekimleri |
| /sahadan-gorseller/elektrikli-pompa-cozumleri | /dewjet-pompa | Pompa saha çekimleri |

Ürünlere özel eski sayfaların güncel birebir karşılığı olmayanları, aynı konuya ait güncel üst sayfaya bağlandı; yeni ürün veya uygulama iddiası eklenmedi. Eski medya/kaynak bileşenler silinmedi. Tüm eşlemeler ana alan adına tek adım 308'dir; www için ikinci bir yönlendirme gerektirmez, sorgu bilgisi korunur. Tanımsız adresler topluca ana sayfaya gönderilmez ve 404 davranışı korunur.

## Arama kayıtları

- `/gunespaneli` artık sayfaya özgü başlık, açıklama ve canonical taşır. Sayfa sarmalayıcısı sunucudadır; mevcut etkileşimli solar bileşenler istemci bileşeni olarak korunur.
- Solar hedefin mobil kontrolünde başlığın sabit menünün altında kaldığı görüldü; giriş üst boşluğu artırıldı.
- `/dalyan` canonical adresindeki yanlış `tekinpower.com.tr`, ortak `SITE_URL` üzerinden `tekinpower.com` olarak düzeltildi.
- Mevcut 14 güncel sayfa korunur. Eski hedefler sitemap'e eklenmedi. Menüden kaldırılmış hizmetler menüye geri eklenmedi.

## Kontroller

`node scripts/check-legacy-links.mjs [baseUrl]`: 14 eski yolun iki alan adında 308 yanıtı, hedefi, sorgu ve bölüm bağlantısı; 14 güncel sayfanın HTTP 200/başlık/canonical/site simgesi; sitemap bütünlüğü ve bilinmeyen hizmetin 404 yanıtı. Canlı Windows kontrolünde `node --use-system-ca` sistemin güvenilir sertifika deposunu kullanır.

Google sonuç metinlerinin yenilenmesi yeniden taramaya bağlıdır. Bu çalışma Search Console üzerinden tarama isteği göndermez.
