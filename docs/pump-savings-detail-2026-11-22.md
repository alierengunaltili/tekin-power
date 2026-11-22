# Pompa detaylı hesaplama ve PDF raporu — yerel taslak

Kullanıcı bu çalışmanın canlıya alınmamasını istedi. Commit, push ve deploy yapılmadı.

## Davranış
- `/dewjet-pompa` üzerinde özet hesaplama korunur. DewJet seçimi yalnız 45 kW / 20 kW görünür.
- “Kendi pompanızın gücünü girin” seçeneği rakip kW girişini açar; düşük güçte negatif fark, ek maliyet ve ek emisyon olarak dürüstçe gösterilir.
- “(Saatte tahliye edilen su miktarını esas alınız.)” açıklaması eklendi.
- Detay düğmesi `/dewjet-pompa/tasarruf-hesaplama` sayfasını yeni sekmede açar; seçili üç pompa/su değeri aktarılır. Eksik girişle bağlantı açılmaz.
- Detay sayfasında 24 sarı sayısal alan vardır: kaynak Excel C2:C5, C9:E12, B16:E17. B20:F20 sarı değildir; yıllık artışlar önceki onaylı %29/%24/%18/%16/%12 olarak korunur.
- Ek tarife seçimi her çalışma planında çok zamanlı veya tek zamanlı tarife kullanmayı sağlar. Başlangıç planları Excel ile aynıdır. Çok zamanlı planda düzenlenen puant/gece değerleri çalışma süresine göre hesaba katılır.
- Formüller sunucuda kalır. Excel dosyası public dizinine eklenmez. Sarı alanların güncellenmesi eski sonuçları gizler ve eski isteği iptal eder.
- PDF düğmesi formun o anki değerlerini sunucuda yeniden doğrular/hesaplar. Firma adı opsiyoneldir. Üç sayfalık rapor: yönetici özeti; yıllık maliyet/enerji tabloları; tarife, çalışma planı, karbon ve varsayımlar. Negatif farklar korunur. Girdiler dosyaya veya veritabanına kaydedilmez.

## Kaynaklar
- `src/components/PumpSavingsDashboard.tsx`: mevcut özet, özel rakip gücü ve yeni sekme bağlantısı.
- `src/components/PumpSavingsDetail.tsx`, `PumpSavingsResults.tsx`: detay formu ve sonuçlar.
- `src/lib/pumpSavings.server.ts`: geriye uyumlu varsayılan hesap, özel tarife/süre doğrulaması.
- `src/lib/pumpSavingsPdf.server.ts`: sunucuda PDF üretimi.
- `src/app/api/pump-savings/detail/route.ts`: sınırlı JSON gövdesi, doğrulama, no-store JSON/PDF yanıtı.
- `assets/fonts/NotoSans-Regular.ttf` ve `OFL.txt`: açık lisanslı Türkçe PDF yazı tipi; Next dosya izleme kapsamına alındı.
- pdf-lib ve @pdf-lib/fontkit sunucu bağımlılıklarıdır; ana sayfanın istemci paketine eklenmez.

## Kontroller
- `scripts/test-pump-savings.cjs`: önceki aylık referanslar, beş yıl, karbon, su normalizasyonu ve on seçenek başarılı.
- `scripts/test-pump-savings-detail.cjs`: varsayılanlarla eşitlik, özel ağırlıklı tarifeler, düşük rakip güç, sıfır tarife/emisyon ve geçersiz değerler başarılı. Varsayılan ve negatif örnek PDF üretildi.
- PDF üç sayfası Poppler ile görselleştirildi; Türkçe metin ve sayfa sayısı pypdf ile kontrol edildi.
- İlgili dosyalarda ESLint geçti.
- Ana çalışma alanında genel TypeScript kontrolü eski `.next-journal-*` ve `.next` önbelleklerindeki kaldırılmış Dalyan/DewJet rotalarına takıldı. HEAD + bu özellikten oluşan ayrı önizlemede Next üretim derlemesi ve TypeScript başarılı oldu.
- Önizleme: `../artifacts/pump-savings-detail`; QA örnekleri: `../artifacts/pump-savings-detail-qa`.

## Son doğrulama
- Son üretim derlemesi 33 rota ile başarılı; pompa 127 kB, detay 108 kB ilk yükleme JavaScript'i. PDF kodu sunucuda kaldı; font dosyası route izleme listesinde doğrulandı.
- Yerel HTTP: JSON/PDF 200, geçersiz değer 400, büyük istek 413, yanlış içerik türü 415 ve no-store kontrolü geçti.
- Tarayıcıda 20 kW DewJet / 10 kW özel rakip / 420 m³-saat seçimi: %100 ek tüketim, 8.614 TL ve 35.366 TL aylık ek maliyet. Yeni sekme üç değeri doğru taşıdı.
- Gündüz aktif tarifesi 4 TL/kWh olarak değiştirildi; tarayıcıdan indirilen PDF’de özel firma adı ve 10.330,33 TL aylık ek maliyet doğrulandı.
- 24 sarı sayısal alan sayıldı. 390 px mobilde detay ve pompa özetinde yatay sayfa taşması yok; tablo kendi alanında kaydırılır. JavaScript hata kaydı yok. Tablo metin rengi koyulaştırılıp kontrol edildi.
- Üç PDF sayfası incelendi. Son ekran görüntüleri `../artifacts/pump-savings-detail-qa/` altında.
- İnceleme bağlantısı: http://127.0.0.1:3005/dewjet-pompa#elektrik-tasarrufu . Yalnız bu bilgisayarda çalışır; canlı yayın yapılmadı.

## DewJet güç seçimi düzeltmesi
Kullanıcı son talimatıyla detay sayfasındaki serbest DewJet gücünü kaldırdı. Yalnız DEWJET 20 kW / DEWJET 45 kW seçilir; API/PDF doğrulaması da bu iki değerle sınırlıdır. Eski bağlantılardaki farklı DewJet gücü 45 kW varsayılanına döner. Böylece 23 sarı sayısal alan ve bir DewJet seçim alanı vardır. Rakip güç girişi serbest kalır; canlıya alınmadı.

## Yayın kapsamı — 22 Kasım 2026
Kullanıcı inceleme sonrası canlı yayın talimatı verdi. Yayın, pompa özeti, detaylı hesaplama, 20/45 kW seçimi ve PDF raporunu kapsar. Önceki bölümlerdeki yerel yayın notları inceleme aşamasının geçmiş kaydıdır. Günlük paneli ve LiFePO4 karşılaştırması bu yayın kapsamında değildir. Mevcut canlı bağımlılıklara yalnız PDF paketleri ve açık `server-only` bağımlılığı eklenir.
