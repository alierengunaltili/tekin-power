# LiFePO4 teknik karşılaştırması

İnceleme tarihi: 22 Kasım 2026.

## Kapsam ve yerleşim

`/lifepo4` sayfasında mevcut normal ve marin ürün seçim alanlarının ardından `BatteryComparison` sunucu bileşeni gelir. Dokuz gerilim/kapasite seçeneği `src/data/batteryComparison.ts` içinde tutulur. Ortak ürün seçim bileşeni ve enerji depolama sayfası değiştirilmedi.

Tabloda gerilim, Ah kapasitesi, hesaplanan kWh, ekran ve Bluetooth bilgisi bulunur. Enerji gerilim × Ah / 1000 ile hesaplanır; kullanılabilir enerji veya çalışma süresi olarak sunulmaz. Türkçe sayı biçimi kullanılır. Mobilde tablo kendi alanında yatay kaydırılabilir.

## Kaynaklar ve ürün eşlemesi

- Resmî kategori: https://unisunenerji.com.tr/urun-kategori/lifepo4/lifepo4-lityum-aku/
- Her satırın resmî ürün bağlantısı veri dosyasında saklanır ve tabloda gösterilir.
- Katalog: https://unisun.com.tr/wp-content/uploads/2024/11/Unisun-2024_compressed.pdf
- Mevcut yerel katalog: `public/unisun/unisun-2024-katalog.pdf`, fiziksel PDF sayfa 7, basılı sayfa 9–10.

Gerilim/kapasite seçenekleri mevcut ürün kartlarıyla eşleşir. Ekran/Bluetooth sütunları aynı gerilim ve kapasitedeki Unisun ekranlı seri karşılıklarına aittir; bu kapsam tablonun üstünde belirtilir. Aynı Ah/V değerleri, kasa veya marin sürümün birebir aynı ürün olduğunu kanıtlamaz.

12,8 V 100 Ah ürününde ekran belirtilir, Bluetooth belirtilmez. Veri `null` ve görünüm “Belirtilmemiş”tir; özelliğin bulunmadığı iddia edilmez. Diğer sekiz ekranlı ürünün başlığında Bluetooth bulunur. 12,8 V 400 Ah detay sayfası doğrulama ekranı verdi; bu satırın ekran/Bluetooth bilgisi resmî kategori başlığından doğrulandı.

51,2 V 100 Ah için katalogdaki 40 kg, 58,4 V şarj ve 54,4 V yüzer gerilim değerleri rack tipi ürüne aittir. Sitedeki mevcut ABS/marin görselinden farklı kasa olduğu için değerler ayrı bir rack referans kartında sunulur; mevcut ürün kartına aktarılmaz.

## Eksik veya teyit gerektiren bilgiler

- Mevcut görsellerin kesin model/SKU ve normal/marin sürüm eşleşmeleri.
- Diğer ürünlerin ağırlıkları ve ölçüleri; 51,2 V mevcut ABS/marin kasanın ağırlığı da rack referansından çıkarılamaz.
- Rack ölçüsü kaynakta `500*450*180` olarak verilir; birim ve eksen sırası açıklanmadığından eklenmedi.
- Sürekli şarj/deşarj akımı, anlık tepe akımı ve süresi, BMS özellikleri, seri/paralel bağlantı sınırları.
- Diğer modellerin şarj gerilimleri; çalışma/şarj sıcaklıkları, IP sınıfı ve marin uygunluk belgeleri.
- 12,8 V 100 Ah Bluetooth desteği.
- 36 V modelin gerçek nominal gerilimi; mevcut 36 V ilan değeriyle enerji hesaplanır, 38,4 V varsayılmaz.
- Çevrim ömrü koşulları (deşarj derinliği, sıcaklık, akım ve kalan kapasite). Başlıklardaki 6000 cycle ve 36 V ürünündeki 6001 cycle tutarsızlığı sebebiyle çevrim iddiası tabloya eklenmedi.
- Tekin Power ürünlerine uygulanacak garanti süresi ve koşulları. Unisun'un genel garanti rozeti aktarılmadı.

Bazı resmî sayfalardaki “Amper: 100A/200A” alanları kapasiteyle karışabilecek biçimde yazılmıştır; sürekli akım değeri olarak kullanılmadı. 25,6 V 100 Ah sayfasındaki “1100W” ifadesi doğrulanmış çıkış gücü olarak aktarılmadı.

## Kontrol yaklaşımı

Dokuz enerji sonucu: 1,28 / 3,84 / 5,12 / 7,68 / 2,56 / 5,12 / 7,68 / 3,6 / 5,12 kWh. Kontroller satır sayısı, kaynak bağlantıları, mobil taşma, mevcut ürün seçimi ve bilgi talebi bağlantısını kapsar.

## Gerçekleştirilen doğrulama — 22 Kasım 2026
- Değişen üç TS/TSX dosyasında ESLint başarılı.
- Eski yerel günlük derleme klasörlerini kapsam dışında tutan geçici yapılandırmayla aktif kaynak TypeScript kontrolü başarılı; geçici dosya kaldırıldı.
- Yerel tarayıcıda dokuz satır ve hesaplanan enerji değerleri doğrulandı; hata günlüğü boş.
- 1440 px masaüstü ve 390 px mobil kontrolü: sayfa yatay taşmıyor, mobil tablo kendi alanında 880 px içeriği kaydırıyor.
- Mevcut 25,6 V normal ürün seçimi ve bilgi talebi bağlantısı çalışıyor.
- Üretim derlemesi/yayın yapılmadı.
