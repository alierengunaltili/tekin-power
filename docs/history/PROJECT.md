# Tekin Power proje özeti

## Motor SSS azaltılması — 2026-11-12 (canlı)

- Kullanıcının görselinde işaretlediği şarj süresi, motorun sudaki konumu, broşür indirme ve teklif/garanti soruları cevaplarıyla birlikte kaldırıldı. Motor SSS sayısı artık 11; kalan cevapların iletişim butonları, altı model seçimi ve ürün broşürleri korunur.
- Yayın `dpl_YQA7RiqZqDCnVBFLF2rwFHEuwK6B`, READY. Yerel ve canlı tarayıcıda 11 kayıt ve dört sorunun yokluğu doğrulandı; canlıda kalan ilk cevabın iletişim bağlantısı ve altı model butonu kontrol edildi.

## Sürekli yayın yetkisi — 2026-11-12

- Kullanıcı “burda yaptığım her değişimi direkt canlıya aktar” talimatını verdi. Bu sohbet kapsamında istenen site değişiklikleri uygun kontrollerden sonra ayrıca yayın onayı sorulmadan mevcut Tekin Power Vercel production projesine aktarılır. Sonraki kullanıcı kısıtlamaları önceliklidir. Bu talimat Git push veya harici mesaj gönderme yetkisi değildir.

- Pompa tanıtımında “Tekin Power’ın ürün ve pazar bilgisine dayanan değerlendirmesidir.” cümlesi kullanıcı isteğiyle kaldırıldı; RIM Drive açıklaması korundu. Yayın: `dpl_FcpCV5aqnKSBs4mF5bcVvw4Vtq3K`, READY. Yerel ve canlı tarayıcıda kaldırılan/kalan cümleler doğrulandı.

## Motor SSS iletişim yönlendirmesi — 2026-11-12 (canlı)

- Kullanıcı isteğiyle 15 motor yanıtı, teknik seçimi/hesabı müşteriye yaptıran anlatım yerine Tekin Power ekibinin değerlendirme ve çözüm desteğini anlatacak şekilde yenilendi. Doğrulanmış temel ürün bilgileri korunur.
- `SolutionGuide.tsx` yalnız motor sayfasındaki her SSS cevabına `#bilgi-talebi` bağlantılı “Tekin Power ile iletişime geçin” butonu ekler. Diğer sayfaların SSS metinleri ve butonları değişmez. Kullanıcı onayıyla `dpl_9rQt5TL9fgQzWsUDbbBsCQqgMiDq` dağıtımıyla canlıya alındı, READY. Canlı 1440/390 px tarayıcıda 15 yanıt/buton, hedef iletişim alanı, yatay taşmama ve JS hatası olmaması doğrulandı.

## Motor SSS genişletmesi — 2026-11-12 (canlı)

- `pageContent.ts` motor soruları 5'ten 15'e çıkarıldı: model seçimi/portföy, maksimum-sürekli güç farkı, gövde altı yerleşim, RIM-pervane farkı, dönüşüm, hız, batarya, şarj ve broşür indirme konuları eklendi. Yeni kesin hız/menzil/şarj süresi veya model teknik değeri üretilmedi; mevcut ürün ve proje bilgileri kullanıldı.
- Kullanıcı isteğiyle `dpl_2GhMyZJhGNf5rvKbwEnTHF1PEUtH` dağıtımıyla canlıya alındı, durum READY. 1440/390 px canlı tarayıcıda 15 sorunun ayrı ayrı açılıp kapanması, yanıtlarının görünmesi ve yatay taşmama kontrolü geçti; JS hatası görülmedi. Adres: https://tekin-power-site.vercel.app/dewjet-elektrikli-motor#sik-sorulan-sorular .

## Pompa kartı ve motor broşürleri yayını — 2026-11-12

- Kullanıcının açık isteğiyle aşağıdaki pompa kartı ve broşür değişiklikleri canlıya alındı: `dpl_7ztuCy6EoKM4J6ddNBQRU1jtBiWg`, READY. Kalıcı adres https://tekin-power-site.vercel.app/ . Aşağıdaki yerel durum notları yayın öncesini anlatır.
- Canlı 1440/390 px tarayıcıda pompa hafiflik/debi/ağırlık vurguları, detay bağlantısı, beş modelde broşür butonu ve PDF HTTP 200/application-pdf doğrulandı. Masaüstünde beş dosya gerçekten indirildi ve PDF imzaları kontrol edildi. Siyah pervaneli 18 kW belge kullanıcı isteğiyle beklemede. JS hatası görülmedi; Git push yapılmadı.

## Ana sayfa pompa kartı — 2026-11-12 (yerel)

- `ServicesSectionHomepage.tsx` pompa kartında mevcut kısa açıklama yerine eşdeğer güç/performans sınıfı ifadesiyle “DÜNYANIN EN HAFİF POMPALARI” ve iki maksimum debi kutusu gösterilir. `pumps.ts` üzerinden 20 kW / 25 kg / 420 m³/h ile 45 kW / 55 kg / 1.200 m³/h kullanılır. Diğer kartlar ve slayt açıklamaları korunur.
- 1440/390 px yerel tarayıcıda değerler, detay bağlantısı ve yatay taşmama kontrol edildi. Yeni kart ve bekleyen motor broşür bağlantıları henüz canlıya alınmadı.

## Motor broşürleri — 2026-11-12 (yerel)

- `motorModels.ts` OB-10, OB-30, OB-80 ve UB-80 için resmi PDF indirmelerine bağlandı. IB-30'un mevcut Şubat 2026 PDF'i korunur. Siyah 18 kW pervaneli dıştan takma için kullanıcı belgeyi daha sonra göndereceğini belirtti; o modele başka ürünün broşürü atanmadı.
- Kaynak https://dewjet.com/tr/urunlerimiz . Üç OB bağlantısı aynı dört sayfalık dıştan takma seri broşürünü verir (SHA256 0E8F430F85955CD567A4C0C8574D36813BA0A3507EB2CDFD4EC828DDDCEB1EF4); sayfa 2–3'te üç model birlikte yer alır. UB-80 ayrı dört sayfalık alttan takma broşürüdür. Özgün dosyalar düzenlenmeden `public/dewjet-motor/brochures/` içine alındı.
- Broşürler metin katmanı içermediğinden PDF sayfaları render edilerek model/güç eşleşmesi görsel doğrulandı. Yeni bağlantılar henüz canlıya yayımlanmadı.

## Beyaz fonlu motor ve genel açıklama yayını — 2026-11-12

- Kullanıcı onayıyla aşağıdaki iki yerel değişiklik canlıya alındı: `dpl_9PRLkJG51K4duXHjvqtyhGV1hpJ7`, READY. Kalıcı adres https://tekin-power-site.vercel.app/dewjet-elektrikli-motor . Aşağıdaki “yerel/henüz canlıya alınmadı” kayıtları bu yayın öncesinin tarihçesidir.
- Canlı 1440/390 px tarayıcıda beyaz fonlu görselin yüklenmesi, contain kadraj, genel açıklamada tek model/güç örneği olmaması, altı seçim butonu ve diğer model görselinin korunması doğrulandı. JS hatası/yatay taşma görülmedi. Git push yapılmadı.

## Pervaneli dıştan takma ürün görseli — 2026-11-12 (yerel)

- Kullanıcının isteğiyle 18 kW pervaneli dıştan takmanın afişi, aynı motoru beyaz fonda gösteren katalog görseliyle değiştirildi. `public/dewjet-motor/18kw/outboard-18kw-studio-v1.png` yalnız `motorModels.ts` seçici kaydında kullanılır. Orijinal afiş korunur. Görsel, yerleşik görsel düzenleme aracıyla afişten türetildi; ürün renkleri ve tamamının görünmesi hedeflendi. Önceki genel açıklama değişikliğiyle birlikte henüz canlıya alınmadı.

## Genel motor seçimi açıklaması — 2026-11-12 (yerel)

- `pageContent.ts` içindeki `tahrik-yerlesimi` bölümü tek model/güç örneğinden arındırıldı. İçten, dıştan ve gövde altı yerleşim ile ortak seçim ölçütleri anlatılır; model özellikleri altı butonlu alanda korunur. Yerel tarayıcıda yeni üç paragraf ve altı model butonu doğrulandı. Bu metin değişikliği henüz canlıya alınmadı.

## Motor model seçici ve doğrudan ürün dili — 2026-11-12 (canlı)

- Kullanıcı altı modeli onayladı: IB-30, 18 kW pervaneli dıştan takma, OB-10, OB-30, OB-80, UB-80. `src/data/motorModels.ts` veri kaynağı; `MotorProducts.tsx` erişilebilir sekmelerle tek model panelini açar. Eski genel RIM kartı sayfa kullanımından çıkarıldı; dosya korundu.
- OB-10/30/80 ve UB-80 nominal güçleri sırasıyla 7/18/45/45 kW, gerilimleri 96 V; DewJet resmi ürün sayfasından doğrulandı. Görseller `public/dewjet-motor/models/` altında özgün dosyalardır. IB-30 18 kW maksimum / 15 kW sürekli ayrımı ve PDF teknik değerleri korunur. Kullanıcı görselindeki 18 kW pervaneli dıştan takmaya OB model kodu atanmadı.
- Motor girişindeki konu bağlantıları model seçiciyle değiştirildi; diğer sayfalardaki bağlantılar `showGuideNavigation` varsayılanıyla korunur. Bilgi talebi bağlantısı seçili modeli e-posta konusuna taşır.
- “Seyir örneği” paragrafı çıkarıldı. Motor, marin ve pompa metinlerindeki broşür/kılavuz/sunum atıfları doğrudan ürün ifadelerine dönüştürüldü; iç kaynak kayıtları ve PDF indirme bağlantısı korundu.
- Kullanıcının açık isteğiyle canlıya yayımlandı: `dpl_FKQZbuLwdkLXnyGML4jEMNeJvDW5`, READY. Kalıcı adres https://tekin-power-site.vercel.app/dewjet-elektrikli-motor . Canlı 1440/390 px kontrollerinde altı model seçimi, görseller, klavye, PDF 200 ve metin temizliği geçti; yatay taşma/JS hatası görülmedi. Pompa ve Marin metin düzeltmeleri de canlıda doğrulandı.

## Toplu canlı yayın — 2026-11-12

- Aşağıda yerel olarak kaydedilen pompa görselleri/metinleri, 18 kW motor ürünleri ve mobil video kadrajı artık canlıdır. Kullanıcının açık isteğiyle mevcut çalışma ağacından yayınlandı; Git push yapılmadı.
- Ana sayfa ve Hizmetlerimiz motor kartında üç ürün birlikte gösterilir: siyah pervaneli dıştan takma, beyaz kapalı çarklı RIM dıştan takma ve şaftlı içten takma motor. Deniz/güneş/doğa kompozisyonu `public/dewjet-motor/motor-coast-card-v2.png`; `solutions.cardImage` iki kart bileşeninde kullanılır, video slaytları değişmez.
- Kalıcı adres: https://tekin-power-site.vercel.app/ . Dağıtım `dpl_JBe8RAhPtEBDQwsXr3FNFRi1cj38`, READY. Production derlemesi, tip/lint ve 29 sayfa üretimi geçti. Canlıda 1440/390 px ürün/görsel/bağlantı kontrolleri ve 390×844 ölçüsünde 8 video yerleşimi geçti. Fiziksel telefon testi yapılmadı.
- Önceki bölümlerdeki “henüz yayımlanmadı” ifadeleri test anındaki tarihsel durumu anlatır; yukarıdaki dağıtım bunları içerir.

## Pompa ürün görselleri — 2026-11-12 (yerel)

- Pompa detay kartlarındaki giriş metni, kullanıcının istediği performans vurgusuyla yenilendi: maksimum 420 m³/h, sadece 25 kg ağırlıkla 20 kW güç harcayarak; maksimum 1.200 m³/h, sadece 55 kg ağırlıkla 45 kW güç harcayarak. Debi büyük yazıyla, ağırlık ve güç kalın olarak ayrı renkli alanda gösterilir. 1440 ve 360 px tarayıcı kontrollerinde değerler, vurgu ve taşma olmaması doğrulandı; henüz canlıya yayımlanmadı.

- Son metin düzeltmesi: iki pompanın besleme seçenekleri kullanıcı teyidiyle 96 V / 380 V olarak eşlendi. Genel açıklama, teknik tablo ve SSS aynı bilgiyi kullanır. Deniz/kirli su cevabı kullanıcının verdiği cümleye çevrildi; görünür kaynak-atıf kalıpları kaldırıldı. İçten takma motorun ayrı 96 V değeri değiştirilmedi.

- Kullanıcının işaretlediği `PumpProducts` üst tanıtım alanına turkuaz 20 kW / 25 kg ve turuncu 45 kW / 55 kg afişleri eklendi. Eski beyaz pompa arka planı yerine iki ayrı, model detaylarına bağlanan görsel kart bulunur.
- Aynı sayfanın model detaylarındaki eski fotoğraflar, kullanıcının gönderdiği dört açıdan ürün görselleriyle değiştirildi. `object-contain` kırpmayı önler; görseller özgün dosyayı yeni sekmede açan büyütme bağlantısına sahiptir.
- Kaynaklar `public/dewjet-pompa/turkuaz-25kg-poster.png`, `mobil-55kg-poster.png`, `turkuaz-four-views.png`, `mobil-four-views.png`; eşlemeler `src/data/pumps.ts`. Görseller yeniden çizilmedi veya düşük kaliteli yeniden kodlama yapılmadı. Ürün tablosunun teknik değerleri bu görsel değişikliğiyle değiştirilmedi.
- Henüz canlıya yayımlanmadı; önceki motor ve mobil kadraj değişiklikleriyle birlikte yereldedir.

## Pervaneli motorlar ve mobil kadraj — 2026-11-12 (yerel, henüz yayımlanmadı)

- Motor sayfasına `MotorProducts.tsx` ile iki ürün alanı eklendi: DWE-IB-30 18 kW maksimum / 15 kW sürekli içten takma; kullanıcı teyidiyle 18 kW pervaneli dıştan takma. Eski kapalı çarklı RIM alanı ayrı başlıkla korundu. Sayfa girişi, SEO, SSS ve ortak katalog açıklaması iki tahrik tipini kapsar.
- İçten takma teknik verileri kullanıcının Şubat 2026 PDF'inden alındı: 96 V, 100 Nm, 1.800 dev/dk, motor 55 kg, motor IP68. 18 saat seyir örneği yalnız 24 kWh / 2 knot koşuluyla gösterilir. İçten takma görseli PDF'den özgün olarak çıkarıldı, broşür indirilebilir.
- Dıştan takma görseli kullanıcının JPEG'idir; başta istenen 16 kW, açık teyitle 18 kW oldu. Görseldeki pervaneli ürünün resmi sayfadaki RIM OB-30 modeli olduğu varsayılmadı; model kodu, ağırlık, gerilim veya IP sınıfı atanmadı. İçten takmanın teknik değerleri dıştan takmaya taşınmadı.
- Mobil videolar: `globals.css` içindeki `mobile-video-*` sınıfları, ana sayfa ve video içeren ürün/hizmet üst alanlarında videoyu menünün altında kırpmadan gösterir. Metin üst katmanda, ürün alanının alt sınırında başlar; koyu geçiş okunaklılığı korur. Dikey ekranlarda 16:9, kısa yatay ekranlarda görünür yüksekliğe sığan contain kadraj kullanılır. Masaüstü kuralları korunur. Yavaş bağlantı kapakları aynı kadrajı kullanır.
- Önceki video kalite/kaydırma yayını canlıdadır; bu bölümdeki yeni ürün ve mobil yerleşim değişiklikleri henüz canlıya alınmadı.

## Net video yayını — 2026-11-12 (canlı)

- Kaydırma düzeltmesi: `AdaptiveVideo` ekran dışına çıkınca `src` bağlantısını kaldırmaz; yalnız duraklar. Tampon ve son çözülmüş kare korunur, geri dönünce gereksiz yeniden yükleme/arama yapılmaz. `preload="none"` ilk oynatmadan önce yüklemeyi erteler. Yeni bir dosyaya geçildiğinde ilk-kare görünürlüğü dosya bazında takip edilir. `videoPlayback` önceden yüklenmiş metadata durumunda da konumu geri yükler; konum zaten doğruysa seek yapmaz.

- Güncel medya kaynağı `src/data/videoAssets.json`; 15 farklı video, 16 etkin başvuru içerir. Aşağıdaki eski 360p/540p/720p üretim notları tarihçedir; yeni oynatıcı lite/medium dosyaları seçmez.
- `public/media/sharp-v2/` altında VP9 WebM ve H.264 MP4 bulunur. Tarayıcı desteklediği küçük dosyayı seçer; VP9 açılamazsa aynı çözünürlükte MP4 denenir. Küçük ve uyumlu özgün H.264 kaynaklar yeniden kayıplı kodlanmadan aktarılır.
- 4K kaynaklar büyük ekran/uygun bağlantıda 4K, küçük ekranlarda 1080p oynar. Diğer kaynakların mevcut 720p, 768p, 900p veya 1080p ayrıntısı korunur; yapay büyütme ile gerçek 4K iddiası yapılmaz. Golf kaynağının özgün 4096×2160 MP4'ü korunur.
- Kullanıcı netliği önceliklendirdi: veri tasarrufu, çok yavaş bağlantı veya sürdürülemeyen dosya hızı durumunda net kapak kalır. Bağlantı bilgisi bulunmayan tarayıcılarda oynatma denenir; zaman aşımı/takılma denetimi kapak görseline dönebilir.
- Kapaklar ilk video karesinden, kaynak çözünürlüğünde üretilir; daha küçük olduğunda WebP kullanılır. İlk çözülen kare hazır olduğunda 150 ms geçiş yapılır. Bulanık ürün görseli dolgu katmanı kaldırıldı; mevcut yazılar ve yerleşim korunur.
- MP4 faststart, iki saniyelik anahtar kare aralığı (yeniden kodlanan dosyalarda), ekran dışı durdurma ve sürümlü dosyalarda uzun önbellek kullanılır. Üretim komutları FIRST.md; ölçümler VIDEO_QUALITY_REPORT.md içindedir.
- Kullanıcının açık isteğiyle video kalitesi ve kaydırma düzeltmeleri 2026-11-12 tarihinde canlıya yayımlandı. Kalıcı adres: https://tekin-power-site.vercel.app/ . Dağıtım: `dpl_H2gDFUTQGaH9AxWFB64MBUdYtxEf`, durum READY. Vercel production derlemesi, tip/lint kontrolleri ve 29 sayfanın üretimi başarılı. Canlıda 12 kaydırma ve 5 kalite/uyumluluk senaryosu geçti.

## Türkter teknik kabul takip uygulaması — 2026-11-06

- Yerel adres: `/proje-takip`. Kurumsal menüye ve sitemap'e eklenmez; `noindex` tanımlıdır. Yayınlanmadı.
- Masaüstü `Türkter Proje Takibi.lnk`, `scripts/open-tracker.vbs` üzerinden gizli başlatıcıyı çalıştırır. `open-local-site.cjs --tracker` port 3001'i kontrol eder, gerekirse Next.js geliştirme sunucusunu gizli başlatır ve varsayılan tarayıcıda aynı origin'deki `/proje-takip` adresini açar. Yeniden oluşturma: `scripts/create-tracker-shortcut.ps1`. Günlükler `.local-launcher/` içindedir.
- `src/data/acceptance.json`, müşterinin `TekinPower_FAT_Degerlendirme_HAT_SAT_Gecis_Plani.xlsx` dosyasından 250 kayıt içerir: 141 FAT, 39 HAT, 28 SAT, 30 belge, 12 teyit. Kaynak sayfa/satır ve özgün sorumluluk ifadeleri korunur.
- Tekin Power, Dewjet, Unisun ve dış bağımlılık olarak Türkter filtrelenebilir. Firma bazında teyit, yükümlülük, tarih, değerlendirme ve dosya/revizyon kaydı vardır. Kaynakta kapalı FAT maddeleri ayrı korunur. Yeni kapanışta tüm firma işleri tamamlanmış ve teyit edilmiş olmalı; ayrıca kişi/karar içeren kapanış kaydı gerekir. Yeni yükleme veya yükümlülük değişikliği kapanış onayını kaldırır.
- Firma filtresi seçildiğinde tablodaki sorumlu firmalar sütunu yalnız seçilen firmayı ve o firmanın durumunu gösterir. Tümü görünümünde tüm sorumlular listelenir; ortak sorumluluk etiketi ve ortak kapanış hesabı korunur.
- Öncelik filtresi (Tümü, Kritik, Yüksek, Normal), firma/prosedür/arama ve ortak-açık kayıt filtreleriyle birlikte çalışır; kayıt sayısı ve indirilen talep taslağı aynı filtrelenmiş listeyi kullanır.
- Madde durumu filtresi eski açık kayıt kutusunun yerini alır: Tümü, Açık, Kapanmış (yeni kapanışlar ve kaynakta FAT kapalı kayıtlar), Kapanış incelemesi bekleyen, Teyit bekliyor ve U/D. Firma teslim durumundan ayrı olarak ortak madde durumunu filtreler; Açık seçimi kapanış incelemesini içermez.
- Belgeler ve durumlar IndexedDB'de yalnız kullanılan tarayıcı/origin içinde saklanır. Dosya sınırı 20 MB. JSON yedeği dosyaları da içerir; tarayıcı temizlenmeden önce yedek alınmalıdır. Ortak sunucu, kullanıcı hesabı, firma erişim yetkisi veya otomatik e-posta gönderimi yoktur. Talep taslağı indirilebilir. Çok kullanıcılı kullanıma geçiş için kimlik doğrulama, kalıcı sunucu depolaması ve erişim kontrolü gerekir.
- Kaynakta açıkça yazılmış Not / Ek-A referansları ayrıntı ekranında karşılıklı bağlanır. Aralık ifadeleri tam olarak genişletilmez; özgün kaynak ifadesi ayrıca gösterilir. Ortak belge paketleri aynı kayıt altında firma bazında bağımsız teslim edilir; içerik bölüşümü kullanıcı tarafından teyit edilir.
- Tekrar veri aktarma: bağımlılık ortamındaki Python/openpyxl ile `scripts/import-acceptance.py <xlsx-yolu>`. Bu işlem özgün Excel'i değiştirmez. Veri yeniden aktarımı öncesi takip yedeği alınmalıdır.

Son kaynak incelemesi: 2026-10-27.

## Amaç

Tekin Power'ın yenilenebilir enerji, güneş paneli, LiFePO4 batarya ve sektörel enerji çözümlerini tanıtan Türkçe kurumsal web sitesi. DewJet işbirliği için ayrı tanıtım sayfası bulunur.

## Teknoloji ve yapı

- Uygulama kökü: `tekin-power-master/`.
- Next.js `15.4.10`, App Router; React `19.1.0`; TypeScript strict modu.
- Tailwind CSS 4; global stiller `src/app/globals.css` içinde.
- GSAP ve ScrollTrigger ile giriş/kaydırma animasyonları; Lucide ikonları.
- `@/*` import alias'ı `src/*` konumuna karşılık gelir.
- İçerik çoğunlukla TS/TSX dosyalarındaki sabit verilerden gelir. İncelenen kaynak ağacında API route'u, veritabanı veya kimlik doğrulama katmanı bulunmadı.
- `react-hook-form`, resolver ve Zod bağımlılıkları listelenir; bu liste tek başına aktif form entegrasyonu anlamına gelmez.

## Sayfalar ve giriş noktaları

| URL | Dosya / davranış |
| --- | --- |
| `/` | `src/app/page.tsx`: Navbar, Hero, hakkımızda, çözümlerimiz, batarya, iletişim, Footer ve JSON-LD |
| `/hakkimizda` | `src/app/hakkimizda/page.tsx` |
| `/hizmetlerimiz` | `src/app/hizmetlerimiz/page.tsx` |
| `/hizmetlerimiz/[slug]` | Hizmet konfigürasyonu, özel içerik bileşenleri, `notFound` ve statik parametre üretimi |
| `/lifepo4` | Kaynak eşlemeli seçim rehberi, SSS ve mevcut `LiFePO4BatterySection` kataloğu |
| `/gunespaneli` | `SolarPhotoSwiper` ve `SolarTypesRedesign` |
| `/dewjet` | Motor ve pompa ürün gruplarını birleştiren marka giriş sayfası |
| `/dewjet-pompa` | `src/app/dewjet-pompa/page.tsx`: elektrikli su pompası seçim bilgileri ve SSS |
| `/dewjet-elektrikli-motor` | `src/app/dewjet-elektrikli-motor/page.tsx`: 16/18/20/45 kW seçenekleri, motor seçimi, SSS ve garanti bilgisi |

`src/app/layout.tsx` global fontları, metadata'yı ve Google Analytics betiklerini içerir. Navbar ve Footer sayfalarda ayrıca eklenir.

## Bileşenler ve medya

- SEO içerik çalışması (2026-11-04): kullanıcının 300 kelimelik Excel kaynağı `SEO_CONTENT_MAP.md` içinde sayfalara eşlendi. `src/data/pageContent.ts` görünür içerik, SSS ve kaynak aralıklarını; `SolutionGuide.tsx`/`SolutionInfoPage.tsx` ortak sunumu içerir. Motor, pompa, marin, enerji depolama ve LiFePO4 anlatımları konuya göre düzenlendi. HMI hizmeti kullanıcı onayıyla ayrı `/tekne-hmi` sayfasında; Marin, motor, batarya ve Footer'dan erişilir, su logosu kullanır. Askeri/deniz-göl içerikleri kaynak beklediği için korunur. UNISUN adı kullanılmaz. PDF belgeleri beklenir; sahte indirme düğmesi yok.
- Kullanıcı onayıyla motor güçleri 16, 18, 20, 45 kW; eski DewJet sayfasındaki 7/15 kW ve model eşlemeleri yeni içerikte kullanılmaz. Garanti/sertifika varlığı doğrulandı, süre/standart uydurulmadı. Mevcut batarya kataloğu ve marin/enerji galeri görselleri korunur.
- Teknik SEO: `src/lib/seo.ts` kalıcı Vercel alan adını, benzersiz sayfa title/description, canonical ve sosyal paylaşım başlıklarını yönetir. Eski `.com`/`.com.tr` canonical/sitemap/robots karışıklığı giderildi. Organization verisi görünür satış telefonu/adresiyle eşleştirildi; doğrulanmamış sosyal profil adresleri kaldırıldı. `scripts/check-seo-pages.mjs` 12 sayfanın gerçek HTML çıktısını kontrol eder. Search Console bağlantısı/indeksleme isteği yapılmadı.

- Hizmet kataloğu (2026-11-04): `src/data/solutions.ts` ortak sırası Elektrikli Marin → Elektrikli Tekne → Elektrikli Pompa → Enerji Depolama Sistemleri → Askeri Sistemler → Deniz / Göl Dibi Arama Tarama Sistemleri. Hero, ana sayfa Çözümlerimiz, Hizmetlerimiz slayt/kartları, açılır menü, Footer, iletişim formu, Hakkımızda slaytları ve sitemap bu katalogdan beslenir. Kart/menülerde tekne ve pompanın DewJet ürün başlıkları kullanılır; her kart kendi bilgi sayfasına gider.
- Marin, enerji depolama ve askeri sistemlerin mevcut videoları/görselleri korunur. Tekne, pompa ve deniz/göl medya alanları `null` olup boş gösterilir; bozuk/uydurma medya URL'si oluşturulmaz. Hero'da boş slaytlar 6 saniye sonra sıradakine geçer, videolu slaytlar video sonunda ilerler. Mevcut uyarlanabilir kalite davranışı korunur.
- Liste dışındaki hizmetler tüm etkin hizmet listelerinden ve ana sayfanın Solar bölümünden kaldırıldı. Eski detay sayfaları/kaynak medya silinmedi; doğrudan eski URL'leri kullanılabilir, hizmet listelerinde/sitemap hizmet bölümünde tanıtılmaz. LiFePO4 batarya bilgi bölümü enerji depolama kapsamında korunur.

- Su temalı sayfaların logosu (2026-11-03): `src/lib/waterPages.ts` içindeki ortak yol listesi `/hizmetlerimiz/marin`, `/hizmetlerimiz/deniz-gol-dibi-arama-tarama`, `/dewjet-elektrikli-motor`, `/dewjet-pompa`, `/dewjet`, `/tekne-hmi`, `/dalyan` ve alt yollarını kapsar. Navbar ve Footer aynı kontrolü kullanır. Üstte şeffaf `tekinpower-marin-light-v2.png` / `tekinpower-marin-dark-v2.png`, koyu zeminli Footer'da filtresiz açık sürüm kullanılır. TEKİN POWER ve slogan korunur; pil, POWER, dalga ve çizgiler mavidir. Diğer sayfaların üst/alt logoları değişmez. Dosyalar `public/tekinpowerlogos/` içinde; imagegen istemleri `artifacts/marin-logo-prompt.txt` içinde.

- Masaüstü kısayolu (2026-11-03): mevcut `Tekin Power Web Sitesi.lnk` artık doğrudan `https://tekin-power-site.vercel.app/` adresini açar; yerel sunucuya bağlı değildir. Eski `scripts/open-local-site.vbs` / `scripts/open-local-site.cjs` geliştirme başlatıcıları korunur, bu kısayolda kullanılmaz. Günlük dizini `.local-launcher/` Git ve Vercel yüklemesi dışındadır.

- Marin menüsü: 2026-11-02 tarihli sabit mavi görünüm, kullanıcı isteğiyle 2026-11-03 tarihinde kaldırıldı. Ortak Navbar başlangıçta şeffaf, kaydırmada açık zeminlidir.
- Güncel üst menü: AnaSayfa, Hakkımızda, Hizmetlerimiz, Enerji Depolama Sistemleri (`/hizmetlerimiz/enerji-depolama`), iki satırlı DewJet Elektrikli Tekne Motorları, iki satırlı DewJet Elektrikli Pompa, İletişim. Hizmetlerimiz alt menüsü ortak altı çözümlük katalogdan beslenir. AnaSayfa mevcut ana sayfada yukarı kaydırır; İletişim mevcut sayfanın bölümünü, yoksa `/#contact` adresini açar.
- `ServiceNavigation.tsx`: Hizmetlerimiz üzerinde fareyle açılan, düğmeyle/klavyeyle de kullanılabilen alt menü. Mobilde dokunarak genişler. Bağlantılar `src/data/solutions.ts` üzerinden gelir.

- Logo düzeltmesi (2026-10-29): `tekinpowcerdewjet/assets/` içindeki mevcut marka dosyaları `public/tekinpowerlogos/` altına kopyalandı. Navbar video üzerinde `tekinpower-02.webp`, kaydırılmış açık zemin üzerinde `tekinpower-dark.png` kullanır; Footer'ın bozuk logo yolu da düzeltildi. Aşağıdaki eski yayın notlarındaki logo eksikliği yerel kaynakta giderildi.

- Yerel geliştirme güncellemesi (2026-10-29): açılış modalı ve küçük video kartı kaldırılmış durumda. Hero'da tek video oynar; `AdaptiveVideo.tsx` ana sayfa ve hizmet arka planlarında ortak kullanılır. Bağlantı ve ekran genişliğine göre 720p/30fps, 540p/30fps veya 360p/24fps seçilir. JPEG poster hemen görünür; video 600 ms sonra yüklenebilir. Veri tasarrufu/hareket azaltma tercihinde poster kalır, ekran dışında video kaynağı bırakılır ve oynatma durur.
- Navbar'a `DEWJET POMPA` ve `DEWJET ELEKTRİKLİ MOTOR` bağlantıları eklendi. Ayrı route dosyaları `DewJetInfoPage.tsx` ortak şablonunu kullanır; şimdilik başlık ve hazırlanıyor açıklaması gösterir. Yeni bağlantılar dar ekranda açılır menüde yer alır.
- `scripts/prepare-adaptive-media.ps1 -IncludeServices` güncel medya üretim komutudur. Ana sayfa için dış `landing-page-videos/` orijinallerini; hizmetler için mevcut S3 kaynaklarını kullanır. 10 ana sayfa + 9 hizmet videosunun üç kalite sürümü ve posterleri `public/` içindedir. Eski `prepare-hero-media.ps1` düşük kalite çıktılarının üzerine yazacağından güncel üretimde kullanılmamalıdır. Marin ana sayfa HD dosyası 2.77 MB; orijinali 13.14 MB. Yeniden yayın yapılmadı.
- Bağlantı bilgisi yoksa 540p ile başlanır; hızlı masaüstünde 720p seçilir. 5 saniye ilk yükleme veya 2.5 saniye tamponlama beklemesinde kalite bir kademe düşer; en düşük kalite de yüklenmezse poster kalır. Kalite geçişinde oynatma konumu korunur. Bu, tüm ağ koşullarında kesintisiz oynatma garantisi değildir.
- Telekomünikasyon baz istasyonu kartı, ana sayfa slaytı, hizmet route konfigürasyonu, footer/sitemap ve form seçenekleri kaldırıldı. Eski URL 404 döner. Kullanılmayan kaynak bileşeni, mapping ve orijinal medya korunur; sayfalarda kullanılmaz.
- `src/components/`: ortak sayfa bölümleri ve slider bileşenleri.
- `src/components/services/`: sektöre özel hizmet içerikleri.
- `src/components/lifepo4/`: batarya sayfası, katalog, kategori, slider ve modal bileşenleri. Benzer isimli alternatifler vardır; kullanım durumunu import zincirinden doğrula.
- `src/components/solar/`: güneş paneli galerisi ve türleri.
- `src/app/utils/photo-mappings/hizmetlerimiz/`: AWS S3 medya adresleri.
- `src/hooks/useVideoOptimization.ts`: video ön yükleme, eşzamanlı yükleme sınırı ve hata durumu yönetimi. Kalite seçici mevcut haliyle orijinal adresi döndürür.
- S3 host'u: `tekinpower.s3.eu-north-1.amazonaws.com`; Next Image izinleri `next.config.ts` içinde.
- Uygulamanın `public/` dizininde batarya görselleri ve yayın hazırlığında dış klasörlerden kopyalanan kullanılabilir medya bulunur. Bazı referans verilen dosyalar hâlâ eksiktir; yeni varlıklarda `/...` URL'leri için gerçek public konumunu doğrula.
- `scripts/compress-videos.js`, uygulamanın `public/landing-page-videos/` dizininden okur ve `public/landing-page-videos-optimized/` içine FFmpeg çıktısı yazar.

## SEO ve dağıtım

### Güncel üretim yayını — 2026-11-04

- Kalıcı adres: `https://tekin-power-site.vercel.app/`. Son dağıtım: `dpl_ADuV31LV4hfcAYNHTiq9uPFyy2XR`, durum READY. Excel kaynaklı SEO içerikleri, ayrı HMI sayfası, onaylı 16/18/20/45 kW motor bilgileri ve düzeltilen canonical/sitemap adresleri bu yayındadır; altı hizmet sırası ve su temalı logolar korunur.
- Önceki TLS erişim sorunu güncel kontrolde görülmedi; production adresi kimlik doğrulama olmadan HTTP 200 döndü ve tarayıcıda açıldı. Menü bağlantıları canlı sitede kontrol edildi. Özel deployment URL'leri yerine yukarıdaki production adresini paylaş.
- Masaüstü `Tekin Power Web Sitesi.lnk` bu production adresine bağlandı. Kullanıcının her cihazdan erişim isteğiyle yayın yapıldı; GitHub push yapılmadı.
- Build, tip/lint kontrolleri ve statik sayfa üretimi başarılı. Bağımlılık kurulumunda npm audit 14 bulgu (2 orta, 10 yüksek, 2 kritik) bildirdi; bu görevde bağımlılık yükseltmesi/audit düzeltmesi yapılmadı.

### DALYAN sayfası — 2026-11-02

- Üst menüde AFAD yerine DALYAN yer alır ve `/dalyan` sayfasını açar. Eski `/afad` adresi 308 ile `/dalyan` adresine yönlenir; sitemap güncellendi.
- `src/app/dalyan/page.tsx` elektrikli tekne haberlerini görselleri, tarihleri ve kaynak bağlantılarıyla sunar. Haber seçkisi `src/data/dalyan.ts` içinde elle güncellenir; canlı haber akışı değildir.
- İki Dalyan haberi Muğla Gazetesi, bir uluslararası haber Candela basın bülteni kaynaklıdır. Görseller `public/dalyan/` altında, indirme kaynakları `scripts/prepare-dalyan-media.ps1` içindedir.
- Yerel değişikliktir; yayın/push yapılmadı. Önceki AFAD veri ve medya dosyaları korunur ancak güncel sayfada kullanılmaz.

### Önceki AFAD sayfası — 2026-10-28 (DALYAN ile değiştirildi)

- Üst menünün masaüstü ve mobil sürümlerine `/afad` eklendi; sitemap ve sayfa metadata'sı hazırlandı.
- `src/app/afad/page.tsx`: üç tarihli haber kartı, AFAD kaynaklı fotoğraflar, temsilî KBRN illüstrasyonu ve üç afet hazırlık rehberi.
- Düzenlenecek haberler, yayın tarihleri ve kaynaklar `src/data/afad.ts` içinde. Otomatik haber akışı yok; seçki ve son kontrol tarihi elle güncellenir.
- Fotoğraflar `public/afad/` altında (toplam yaklaşık 270 KB), Next Image ile sunulur. Resmî indirme adresleri `scripts/prepare-afad-media.ps1` içinde; sayfada AFAD kaynak bağlantıları ve görsel atıfları bulunur.
- Yerelde test edildi; bu değişiklik için Vercel yayını veya GitHub push yapılmadı.

- Yerel Git origin: `https://github.com/EmreOzdemir22/TekinPowerSite.git`. Git deposu dış çalışma alanı kökünde başlatıldı; uzak geçmiş henüz alınmadı ve commit/push yapılmadı.
- Vercel CLI oturumu açıldı; uygulama `tek-i-n-power/tekin-power-site` projesine bağlandı. `.vercel/` ve `.env.local` yerel dosyalardır; içeriklerini paylaşma veya commit etme.
- GitHub CLI hesabı `EmreOzdemir22` olarak doğrulandı; Git kimlik doğrulaması ayarlandı. Uzak depo ilk kontrol sırasında boştu. Sonraki API kontrolünde Vercel–GitHub bağlantısı `EmreOzdemir22/TekinPowerSite`, production dalı `main` olarak doğrulandı; ilk yayın CLI üzerinden yapıldı.
- Production adresi: https://tekin-power-site.vercel.app (2026-10-27). Dağıtım durumu `READY`; kimlik `dpl_Fwzcy3Wfiiv2nrXATQVPWR6pK9LW`.
- Production alias'ı Vercel inspect ile doğrulandı. Bu makineden HTTP kontrolleri TLS/ağ hatası verdiğinden yayının tarayıcıdaki görünümü bağımsız olarak doğrulanamadı.
- Takip testinde tarayıcı bağlantı hatası da doğrulandı. Kullanıcı onayıyla Standard Protection uygulandı, ancak bağlantı sorunu devam etti. `tekinpower.com` üzerindeki ayrı mevcut site açılıyor; yeni projeye ait değildir. `preview.tekinpower.com` eklemesi sahiplik nedeniyle 403 aldı; kullanıcı mevcut Vercel/DNS hesabına erişemiyor. Ayrıntılar `TEST_REPORT.md` içinde.
- Yerel ve Vercel production build'i başarıyla tamamlandı; lint, TypeScript ve 23 statik sayfa üretimi geçti. Desteklenmeyen `swcMinify` ayarı kaldırıldı. `.vercelignore` ile ortam dosyaları, build ve log dosyaları yükleme dışında tutuldu.
- Dış `gunespaneli-redesign`, `hakkimizda-photos`, `hizmetlerimiz`, `landing-page-photos` ve `landing-page-videos-optimized` klasörleri uygulamanın `public/` dizinine kopyalandı. Logo, DewJet, LiFePO4 arka planları ve marin batarya görsellerinin referans verilen dosyaları mevcut kaynaklarda yoktur.
- SEO dosyaları: `layout.tsx`, `JsonLdSchema.tsx`, `sitemap.ts`, `robots.ts`.
- Vercel ayarları: `vercel.json`; bölge `fra1`.
- Next.js çıktısı `standalone`; görsel formatları AVIF/WebP; video yolları için cache header'ları mevcut.

## Doğrulanmış mevcut sınırlamalar

- `ContactSection.tsx` form gönderimi `setTimeout` ile simüle edilir; gerçek API/e-posta gönderimi yoktur.
- README varsayılan Next.js başlangıç metnidir; proje özelindeki bilgi için bu belgeyi kullan.
- Otomatik test script'i tanımlı değildir. İlk incelemeden sonra yayın hazırlığında yerel ve uzak production build doğrulandı; eksik medya sınırlaması devam eder.

Bu maddeler tespittir; ayrıca görev verilmedikçe kapsam dışı düzeltme yapılması gerekmez.

## Pompa ürün sayfası güncellemesi — 2026-11-04

`/dewjet-pompa` gönderilen iki malzeme kartı ve 12 sayfalık sunumla zenginleştirildi. `PumpProducts.tsx`, `pumps.ts` verisinden gerçek ürün fotoğrafları, ağırlık/debi vurgusu ve 20/45 kW teknik kartlarını gösterir. `SolutionInfoPage` isteğe bağlı `featuredContent` alanını giriş ile rehber arasında sunar; diğer sayfaların düzeni korunur. Kullanıcı 45 kW ağırlığını 55 kg olarak düzeltti; hafiflik başlığı eşdeğer güç/performans sınıfıyla sınırlandırılıp Tekin Power'a atfedildi. Kaynak çelişkileri ve kararlar `SEO_CONTENT_MAP.md` içinde. İki fotoğraf toplam yaklaşık 85 KB; video eklenmedi. Bu güncelleme yereldedir; mevcut production yayını değiştirilmedi.


## Pompa sayfası canlı yayını — 2026-11-04

Kullanıcının açık yayın isteğiyle önceki yerel pompa içerikleri ve görsel güncellemesi production'a alındı. Kalıcı URL: `https://tekin-power-site.vercel.app/dewjet-pompa`. Dağıtım `dpl_7dHvdS9tLLZ5cd4DWvEKPRE1eKUL` READY. Başlık “DÜNYANIN EN HAFİF POMPASI”; sınıf kapsamı ve Tekin Power değerlendirmesi açıklaması korunur. PDF kaynaklı gerçek 45 kW fotoğrafı koyu geçişli arka plandadır. Diğer ürün kartları/fotoğrafları ve 55 kg güncel ağırlık bu yayına dahildir. TypeScript/ilgili ESLint ve production 12 sayfa SEO/sitemap/robots kontrolleri geçti. GitHub push yapılmadı.

## Yerel motor ve marin içerikleri — 2026-11-04

Motor ve marin sayfaları Türkçe DewJet el kitabı ve önceki Excel eşlemesine göre düzenlendi. Motor sayfasında kapalı çarklı tahrik, 16/18/20/45 kW güncel portföy, manevra ve seyir ekranı; marin sayfasında yeni tekne/dönüşüm, batarya, şarj ve HMI seçimi anlatılır. Ana hizmet kartları ve DewJet marka girişindeki motor tanıtımı aynı kapsamı taşır. Kılavuzdaki iki eski modelin ölçümlerini portföye taşımama kararı SEO_CONTENT_MAP.md içindedir. İki sayfanın teklif bölümünde GA4 contact_click olayı sayfa ve telefon/e-posta kanalını ayırır. Tıklama, gerçekleşmiş başvuru değildir. Değişiklik yereldir.

## Motor ve marin sayfalarının canlı yayını — 2026-11-04

Kullanıcı isteğiyle önceki yerel motor/marin içerikleri Vercel production ortamına yayımlandı. Kalıcı alan adı: tekin-power-site.vercel.app. Dağıtım: dpl_HA5qzAQ94hfAqd5qssKQc2bKFH1q (READY).

Hizmetlerimiz listelerinde ve açılır menüde marin ürün başlığı **Elektrikli Marin Çözümleri** olarak gösterilir. Dinamik hizmet sayfasında kategori etiketi enerji depolama ve askeri sistem uygulamaları için kapalıdır; video, sayfa başlığı ve açıklama korunur.
Ana sayfa HeroSection, aktif çözümün productTitle değerini Türkçe büyük harflerle ana başlık olarak, description değerini de video üstü açıklama olarak gösterir. Ok, nokta ve otomatik geçişler aynı slayt durumunu kullanır.

## DewJet pompa ana sayfa videosu — 2026-11-07

Kullanıcının akıcılık isteğiyle pompa videosu üç H.264 sürüme optimize edildi. landing-page-videos-hd/medium/lite dizinlerindeki dewjet-pompa-v3.mp4 dosyaları sırasıyla 1080p, 720p ve 480p; yaklaşık 5,02 / 2,51 / 1,16 MB boyutundadır. Süre yaklaşık 16 saniye ve kare hızı 24 fps; kapanış sahnesi çıkarılmıştır. İlk 10 saniyedeki gömülü siyah kenarlar kaynakta 1280x720+320+180 kırpımıyla temizlenir, ikinci bölüm tam kare ölçeklenir. Çıktılar faststart ve 2 saniyelik anahtar kare aralığı kullanır.

AdaptiveVideo mevcut bağlantı seçimi ve takılmada kalite düşürme davranışını pompa için de kullanır. videoFit=contain ürünleri sığdırır. Masaüstünde pompa Hero alanı lg:aspect-video ile videonun 16:9 oranını alır; yan şeritler oluşmadan tam genişlikte gösterilir. Kenar maskesi kaldırılmıştır. Mobilde fillBackground aynı posterin bulanık, tam alanı kaplayan kopyasıyla kalan alanı doldurur. Tek video çözücüsü çalışır. Eski originalSource/introScaleUntil özel davranışı kaldırıldı. Başlık, açıklama ve buton önde durur.

Yerel tarayıcıda 8 / 2 / 0,8 Mbps ve 60 ms gecikme testlerinde sırasıyla HD / medium / lite seçildi. İlk oynatma yaklaşık 1,1 / 1,4 / 2,4 saniye; üç senaryoda da başlangıç sonrası waiting olayı olmadı ve sonraki slayta geçildi. Masaüstü ve mobil görüntüler incelendi; TypeScript, ilgili ESLint ve 8 video mantık testi geçti.

## Pompa ürün sayfası üst videosu — 2026-11-10

/dewjet-pompa üst bölümü kullanıcının WhatsApp Video 2026-11-10 at 16.15.20.mp4 dosyasından üretilen dewjet-pompa-showcase-v1 videosunu oynatır. SolutionInfoPage isteğe bağlı headerMedia alanını destekler. Bu sayfada AdaptiveVideo sessiz döngü kullanır, masaüstü başlık alanı 7:4 oranındadır. Başlık ve butonun mevcut yazı sınıfları korunur; video ile metin arasında koyu geçiş bulunur. service-videos-hd/medium/lite altındaki dosyalar 1344x768, 1008x576 ve 672x384 çözünürlükte; yaklaşık 3,56 / 1,75 / 0,85 MB boyutundadır. Poster service-posters/dewjet-pompa-showcase-v1.jpg dosyasıdır.

## Ana sayfa pompa kartı görseli — 2026-11-10

Ana sayfanın Çözümlerimiz bölümündeki pompa kartı, kullanıcının Tekin_Power_Iki_Pompa.png referansından imagegen ile hazırlanan yeşil kıyı ve deniz manzaralı kompozisyonu kullanır. Görsel public/dewjet-pompa/pompa-doga-deniz-v1.png dosyasındadır. solutions verisindeki isteğe bağlı homepageImage alanı ServicesSectionHomepage içinde öncelikli okunur.

Hizmetlerimiz sayfasının pompa slaydı, tüm alanı doldurması için hazırlanmış kare kadrajlı pompa-doga-deniz-slide-v2.png görselini solutions.slideImage üzerinden kullanır. PhotoSwiper slaytları object-cover ile doldurur; başlık, açıklama ve buton fotoğrafın üstündedir. Hizmet kartları solutions.image alanındaki yatay kompozisyonu kullanır.

Hizmetlerimiz tam ekran slaytı (2026-11-10): PhotoSwiper artık dış boşluk ve kart sınırı olmadan ekranın tüm genişliğinde, 100svh yüksekliğinde (kısa ekranlarda en az 640 px) açılır. Başlık/açıklama/detay bağlantısı ve slayt kontrolleri fotoğrafın üzerindedir. Pompa için masaüstünde yatay solutions.image, telefonda kare solutions.slideImage kullanılır. Menü ve detay bağlantıları korunur. Bu düzenleme yereldedir.

Tam ekran Hizmetlerimiz slaytı kullanıcı isteğiyle 2026-11-10 tarihinde canlıya yayınlandı. Dağıtım: dpl_G542x7zUyGAiR7xHjuyRK1j9z3Xa (READY). Kalıcı adres: https://tekin-power-site.vercel.app/hizmetlerimiz. Canlı site 1440x900 ve 390x844 görünümde HTTP 200, ekranı dolduran slayt, yüklenen pompa görseli, taşma olmaması ve /dewjet-pompa detay bağlantısıyla doğrulandı; tarayıcı uygulama hatası görülmedi.

## Ana sayfa motor videosu — 2026-11-11

Ana sayfanın ikinci slaytı, kullanıcının gemini_motor_ON_yazisi_kaldirildi.mp4 videosunu dewjet-motor-deniz-v1 adıyla kullanır. Özgün motor görüntüsü sağda korunur; stüdyo fonunun kenarları, oluşturulan deniz/yeşil kıyı manzarasıyla yumuşak geçişle birleştirilir. Metin, font ve buton sınıfları korunur. Bu slaytta okunurluk için soldan karartma vardır. videoFit: contain ürünü kırpmadan gösterir; mevcut AdaptiveVideo kalite seçimi, poster ve oynatma davranışı kullanılır. Kaynak 1280x720, 24 fps; üç çıktı 1280/960/640 genişliğinde, 10 saniye, sessiz H.264 ve faststart içerir. scripts/prepare-motor-hero.ps1 kompozisyonu ve çıktıları tekrar üretir; yüksek kaliteli ara video dış artifacts/ dizininde kalır. Bu değişiklik yereldedir; canlıya yayınlanmadı.

Motor videosu kullanıcı isteğiyle 2026-11-11 tarihinde canlıya yayınlandı. Dağıtım dpl_CKDvTdLCjxMPcYufa9q3J7MTtAH3, production READY. Kalıcı adres https://tekin-power-site.vercel.app/. Canlı ana sayfada 1440x900 ve 390x844 görünümde HTTP 200, yeni motor videosunun zaman ilerlemesi ve fontlar doğrulandı. Masaüstünde video bitince pompa slaydına geçiş geçti; tarayıcı uygulama hatası ve yatay taşma görülmedi.

## Motor videosu başlangıç geçişi — 2026-11-11

Önceki poster videonun 3. saniyesini gösterdiğinden ilk kareye geçişte motorun açısı sıçrıyordu. videoPoster alanı motor için ilk HD kareden çıkarılan /landing-page-posters/dewjet-motor-start-v2.jpg dosyasını seçer; yeni URL eski poster önbelleğini ayırır. AdaptiveVideo smoothStart seçeneği yalnız motor slaydında etkin: 600 ms bekleme kaldırılır, ilk sunulan video karesine kadar video gizli tutulur, ardından 150 ms opaklık geçişi yapılır. requestVideoFrameCallback olmayan tarayıcılarda playing/animation-frame kullanılır; callback temizliği yapılır. Hareket azaltma/veri tasarrufu, kalite düşürme ve video sonunda slayt geçişi korunur. scripts/prepare-motor-hero.ps1 artık posteri çıktı videosunun ilk karesinden üretir.

Motor başlangıç düzeltmesi canlıya uygulandı: dpl_3F9WpBfvAwfj6ZfL9rC6qPnd8Pk3, READY, 2026-11-11. Kalıcı ana sayfada 1440/390 px kontrollerinde ilk-kare posteri, 150 ms opaklık geçişi, hazır video karesi ve ilerleyen oynatma doğrulandı.

## İki motorlu tekne konsepti — 2026-11-11

Kullanıcının beğendiği iki DewJet motorlu lüks tekne/su altı görselinden kısa bir konsept animasyon hazırlandı. Motor gövdeleri sabit; hafif kamera süzülmesi, su kırılması, ışık ve akış efektleri vardır. Gerçek çekim veya fiziksel performans simülasyonu değildir. Kaynak sahne ve WebGL video üreticisi artifacts/twin-motor-concept/ içinde. /dewjet-elektrikli-motor üst bölümünde AdaptiveVideo headerMedia ile yerel önizlemeye eklendi; ana sayfa motor videosu korunur. service-videos-{hd,medium,lite}/dewjet-twin-marine-v1.mp4 1600x900/960x540/640x360, 24 fps, yaklaşık 9.92 saniye, sessiz, faststart; poster ilk kareyle eşleşir. smoothStart ve loop etkin, metin/font/buton sınıfları korunur. Canlıya yayınlanmadı.

İki motorlu tekne konsepti v2 — 2026-11-11: kullanıcının işaretlediği, yanlışlıkla kıça bakan yüzde görünen montaj mekanizmaları kaldırıldı; tekne tarafında gizli bağlantı düzeni ve görünür tarafta düzgün beyaz gövde oluşturuldu. scene-v2.png üzerinden animasyon yeniden üretildi; motor dönüşü yok. render.cjs sürüm parametresi alır (v2). Yerel motor sayfası service-videos-{hd,medium,lite}/dewjet-twin-marine-v2.mp4 ve eşleşen ilk-kare posterini kullanır. v1 dosyaları referans için korunur; v2 canlıya yayınlanmadı.

İki motor konsepti v2, kullanıcının açık isteğiyle 2026-11-11 tarihinde canlıya yayınlandı. Dağıtım dpl_2qLVMwkiFeXj9D3NYMC5GBCo4fjV READY; kalıcı adres https://tekin-power-site.vercel.app/dewjet-elektrikli-motor. Canlı masaüstü oynatma/döngü ve bilgi bağlantısı doğrulandı. Mobil ilk testte oynatma beklemesi doldu; ayrı tekrar kontrolde 3g/1.45 Mbps bağlantı ipucuyla lite sürüm HTTP 206 üzerinden oynadı ve bilgi bağlantısı geçti.

## Deniz/göl dibi tarama kataloğu — 2026-11-12

- Hazırlanıyor sayfası, kullanıcının 16 sayfalık `Tekin_Power_Tarama_Katalogu_ver1 11-11-2026.pdf` içeriğiyle yenilendi. Veri kaynağı `src/data/dredging.ts`; sayfa `src/app/hizmetlerimiz/deniz-gol-dibi-arama-tarama/page.tsx`.
- Altı faaliyet alanı, altı ekipman grubu, beş aşamalı saha süreci, Yütek Denizcilik referansları, yüzer havuz özel projesi, telefon/e-posta ve orijinal PDF indirme/inceleme bağlantıları eklendi. Görseller PDF'den özgün halleriyle çıkarıldı; su sayfasının mavi logoları korunur.
- KAZAR VI verileri KAZAR VIII'e aktarılmadı. Dalgıç botundaki 36 m basma yüksekliği, tarama derinliği olarak gösterilmedi. Teknik verilerin referans ekipmanlara ait olduğu açıklandı; referanslar Yütek Denizcilik'e atfedildi.
- TypeScript, değişen iki dosyada ESLint ve 1440/390/360 px yerel tarayıcı kontrolleri geçti. Orijinal PDF ile indirilen dosyanın SHA-256 eşliği doğrulandı. Canlı yayın doğrulaması aşağıda kaydedilecektir.

- **Canlı doğrulama tamamlandı:** `dpl_FxnFbA8hxVWUgyraMV4QRRwmBsS2` READY, production alias `https://tekin-power-site.vercel.app`. Kalıcı adreste 1440/390/360 px tarayıcı kontrolleri geçti: altı ekipman, beş bölüm hedefi, teknik paneller, sekiz görsel, mavi logolar, taşmama ve JS hatası olmaması. Canlı PDF indirildi ve orijinal dosyayla SHA-256 eşliği doğrulandı. Git push yapılmadı.

## Ana sayfa anahtar teslim pompa ve motor alanı — 2026-11-12

- Kullanıcının işaretlediği LiFePO4 tanıtım alanı yerine, Çözümlerimiz'in hemen ardından `TurnkeySolutionsSection.tsx` eklendi. Eski BatterySection dosyası ve LiFePO4 sayfası korunur; ana sayfa artık eski bileşeni çağırmaz.
- İki pompa ve üç farklı motorun mevcut onaylı deniz/doğa görselleri; güç/ağırlık/maksimum debi kartları; ürün sayfaları, iletişim ve telefon bağlantıları; ihtiyaç, sistem planı, kurulum, devreye alma aşamaları yer alır. Anahtar teslim hizmet ifadesi kullanıcının bu görevde verdiği hizmet tanımına dayanır.
- Bileşen sunucuda oluşturulur; ek oynatıcı, animasyon ya da tarayıcı durumu yoktur. Ürün kadrajı korunur; object-cover ölçeklemesi için sizes kaynak çözünürlüğü geniş tutulur. Mobil ve masaüstü tarayıcı kontrolleri yapılmıştır; canlı sonucu aşağıya eklenir.

- Anahtar teslim ana sayfa vitrini **canlıya alındı**: `dpl_B17Dj2jmtGVbg3VFztV3GXiz7cqb`, READY. Kalıcı adres `https://tekin-power-site.vercel.app/#anahtar-teslim`. Canlı 1440/390/360 px kontrollerinde bölüm sırası, iki ürün görseli, dört aşama, pompa/motor sayfalarına gerçek tıklama ve iletişime kaydırma geçti. Taşma ve JavaScript sayfa hatası görülmedi; Git push yapılmadı.

## Ana sayfa WhatsApp iletişim — 2026-11-12

- `WhatsAppContact.tsx` sadece ana sayfada sağ altta sabit WhatsApp bağlantısı gösterir. Mevcut iletişim numarası `905323276293` kullanılır. Bağlantı `wa.me` üzerinden yeni sekme/uygulamaya geçer; hazır mesaj kullanıcı göndermeden iletilmez.
- Sunucu bileşeni; harici sohbet SDK'sı, izleme betiği veya otomatik mesaj gönderimi yoktur. Güvenli ekran kenar boşlukları, klavye odak stili ve erişilebilir bağlantı adı tanımlıdır; üst menünün altında z-index kullanır.
- TypeScript/ESLint ve 1440/390/360 px yerel tarayıcı kontrolleri geçti. Telefonun WhatsApp hesabı veya mesaj teslimatı test edilmedi; kontrollü sekme açılışı, doğru numara/metin ve sabit konum kontrol edildi.

- WhatsApp bağlantısı canlıya alındı: `dpl_BEA93KdTVqXZ31qAATpPHzjKKbUD`, READY. Kalıcı production adreste 1440/390/360 px testleri geçti; doğru numara/metin, sabit görünüm, erişilebilir dokunma alanı ve kontrollü yeni sekme geçişi doğrulandı. Git push yapılmadı.
