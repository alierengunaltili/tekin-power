# Pompa tasarruf paneli — 22 Kasım 2026

## Durum ve kullanıcı kararları
Yalnız yerel önizleme: /dewjet-pompa#elektrik-tasarrufu. Canlıya alma, commit veya push yapma. Kullanıcı, Excel hesaplarının dashboard olarak sunulmasını, sadece su miktarı ve kW değerlerinin değişmesini, dosya/formüllerin tarayıcıdan görülememesini istedi. Kaynak dosya masaüstündeki Dewjet ve Rakipleri Enerji Tasarruf Hesaplama Cetveli.xlsx; orijinal dosya değiştirilmedi, public dizinine veya depoya kopyalanmadı.

Kullanıcı, 5 yıllık ve karbon hesaplarındaki tutarsızlıkların düzeltilmesini açıkça onayladı. Rakip güçlerini mevcut tablodan otomatik alma isteği üzerine veri kaynağı src/data/pumpComparisons.ts olarak paylaşıldı. Rakip kimlikleri kaynak veride de yoktur; sadece Alternatif 1–5 gösterilir.

## Girişler ve varsayımlar
Üç sayısal giriş: ortak saatlik debi (m³/saat), rakip kW, DewJet kW. İki seçim alanı sadece bu girdileri hazır değerlerle doldurur. 1200 sınıfı: 250/315/200/355/315 kW, DewJet 45 kW. 400 sınıfı: 55/45/45/75/92 kW, DewJet 20 kW. 400 sınıfında ortak kıyas debisi 400'dür; DewJet ürününün 420 maksimum debisi değiştirilmedi. Güç girilen çalışma noktasında sabit kabul edilir; performans eğrisi üretilmez.

Kaynak Sayfa1: C2 ortak debi; C3–C4 güçler; C5 karbon katsayısı 0,434 tCO₂e/MWh. C9:E12 tarife bileşenleri, B16:G17 çalışma süreleri; B20:F20 %29/%24/%18/%16/%12 yıllık artışlar. 8 saat senaryosu 176 saat/ay ve 4,894449 TL/kWh; sürekli senaryo 730,0008 saat/ay ve tek zamanlı 4,84460853 TL/kWh kullanır. Sürekli senaryo adı ağırlıklı tarife olarak sunulmaz. KDV eklenmedi. Mevcut tarife doğrulaması yapılmadı; kullanıcı cetvelinin sabit varsayımları olarak etiketlendi.

## Onaylı düzeltmeler
Kaynak 25. satır bazı yıllarda sabit değer, 30. satır birikimsiz artış, 34–35. satırlar bazı sabit tasarruf hücreleri içeriyordu. Tüm yıllar iki pompaya ve iki senaryoya aynı birikimli zam oranlarıyla hesaplanır. İlk yıl %29 artış kaynak 24/29. satır yaklaşımıyla korunur. Karbon hesabı güç farkından doğrudan değil çalışma saati dahil kWh tasarrufundan hesaplanır. Güç ve çalışma süresi sabitse zam karbon miktarını artırmaz.

C2 kaynakta hesaplara bağlı değildi. Dashboard'da 1000 m³ başına enerji hesabına bağlandı. Su miktarı tek başına sabit güç/süre aylık maliyetini değiştirmez; arayüz varsayımlarında açıklanır. Ürün satın alma fiyatları kaynakta yok; amortisman/payback üretilmedi.

## Mimari
- src/components/PumpSavingsDashboard.tsx: etkileşim ve sonuç görselleştirmesi; iş formülleri yok. Eski sonuçlar giriş değişince temizlenir. Eski/ağda geciken yanıtlar revision ve AbortController ile uygulanmaz.
- src/lib/pumpSavings.server.ts: server-only hesaplar, sabitler ve üç sayı doğrulaması.
- src/app/api/pump-savings/route.ts: POST JSON; yalnız üç giriş, 0,01–1.000.000 aralığı; ekstra alan reddi; no-store sonuç, ham formül/dosya uç noktası yok.
- src/types/pumpSavings.ts: ortak veri tipleri; yalnız type importları.
- src/data/pumpComparisons.ts: mevcut tablo ve dashboard için tek hazır güç kaynağı.
- scripts/test-pump-savings.cjs: kaynak aylık değerleri, onaylanan düzeltmeler ve sınır durumlarını kontrol eder.

Formüller sunucudadır; kullanıcı yalnız girdileri, hesaplanmış sonuçları ve açık varsayımları alır. Görülebilen giriş/çıktılardan matematiğin çıkarılamayacağı iddia edilmez.

## Kontroller
- Mevcut Excel aylık referans sonuçları 150/45 kW için doğrulandı; 8 saat beş yıllık toplamı kaynakla eşleşir. Her iki senaryoda yıllık oran tutarlılığı, karbon çalışma saatleri, su birim dönüşümü, sıfır/negatif tasarruf, geçersiz girişler ve on hazır rakip seçeneği testleri geçti.
- Değişen TS/TSX kaynakları ESLint; aktif kaynak TypeScript 0 hata. Eski .next-journal tipleri kaynak kontrolüne dahil edilmedi.
- İzole yerel production kopyasında Next.js derleme/tip/lint ve 36 sayfa üretimi başarılı. Önceki kopyanın Windows standalone dışlama ayarı korundu; asıl config değişmedi.
- Üretim API: 200 doğru sonuç/no-store; geçersiz/ek alan/bozuk JSON 400, büyük istek 413, yanlış içerik türü 415.
- 50 production istemci JS dosyası tarandı; özel hesap fonksiyonu, tarife bileşen sabitleri ve sunucu hesap kodu izleri bulunmadı.
- Tarayıcıda 1200/250/45 başlangıç %82, 400/92/20 %78,3, production 400/45/20 %55,6 sonuçları; negatif tüketim avantajının ek maliyet olarak sunulması; sıfır girişin engellenmesi; sıfırlama doğrulandı.
- 320/390/1440 px görünümde yatay taşma yok. Temiz önizleme ve production sekmelerinde konsol hatası yok. Ekran görüntüleri dış artifacts/pump-savings-dashboard klasöründedir.

## Görünüm sadeleştirmesi — 22 Kasım 2026
Kullanıcının isteğiyle ortak 1.000 m³ su hacmi, DewJet enerji ihtiyacı ve diğer pompa enerji ihtiyacı satırı arayüzden kaldırıldı. Hesaplama mantığı korunur; değişiklik yalnız yereldir.

## Seçime bağlı güçler — 22 Kasım 2026
Güç alanları düzenlenemeyen sonuç kutularıdır; kapasite DewJet gücünü, alternatif seçimi rakip gücünü ortak tablodan belirler. Özel güç seçeneği kaldırıldı. Yalnız su miktarı sayısal olarak düzenlenir; kapasite değişiminde kullanıcının girdiği su miktarı korunur. Canlıya alınmadı.

## Yerleşim — 22 Kasım 2026
Panel, 400 ton/saat karşılaştırma tablosunun hemen sonrasına, Sahada DewJet farkı bölümünün önüne taşındı. PumpComparison afterTables alanı sayfadan verilen paneli yerleştirir. Hesaplama değişmedi; yayın yapılmadı.

## Yayın hazırlığı — 22 Kasım 2026
Kullanıcı canlı yayın istedi. Önizleme bandı kaldırıldı. Seçicide 420 ton/saat · DewJet 20 kW gösterilir; mevcut rakip karşılaştırma sınıfı 400 olarak korunur. İptal edilen su miktarına göre maliyet değişikliği uygulanmadı. Yalnız bu panel, ortak karşılaştırma verisi ve ilgili sayfa değişiklikleri yayımlanacaktır.
