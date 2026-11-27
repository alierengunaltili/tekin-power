# Yandex Metrica kurulumu — 27 Kasım 2026

Durum: yalnız yerel hazırlık. Yayın/push yapılmadı. Yandex panelinde veri alımı ve hedef ayarları henüz doğrulanmadı.

- Kullanıcının sayaç ekranındaki kimlik: 114723105.
- RootLayout içindeki YandexMetrica, pathname değişikliklerini src/lib/yandexMetrica.ts üzerinden ölçer. defer:true ve açık hit çağrısı çift görüntülemeyi önler.
- Yalnız tekinpower.com ve www.tekinpower.com üzerinde çalışır; /admin, /api, /proje-takip yollarında çağrı üretmez. localhost/preview veri üretmez.
- Script sayfanın load olayından sonra async yüklenir; erken görüntüleme/hedef çağrıları sırada tutulur.
- webvisor:false, clickmap:false, trackLinks:false. İlk aşama temel ölçüm ve sınıflandırılmış iletişim hedefleridir; oturum kaydı açılmadı.
- contactAnalytics, mevcut GA4 işlemini koruyarak phone_click, whatsapp_click ve email_click hedeflerini gönderir. E-posta penceresi açma/adres kopyalama Metrica iletişim hedefi sayılmaz.
- Özel hedef parametreleri yalnız sayfa yolu, kanal ve yöntemdir; telefon/e-posta/mesaj metni gönderilmez. Açık hit URL ve referrer sorgu/fragment içermez. Bu, üçüncü taraf sayacın bütün ağ verilerinin incelendiği anlamına gelmez.
- Yandex panelinde üç JavaScript etkinliği hedefi aynı kimliklerle oluşturulmalıdır. Şirket hedeflerine ulaşılması tamamlanmış arama/e-posta teslimini kanıtlamaz.

Kontroller: test-yandex-metrica.cjs ve test-contact-analytics.cjs toplam15 test başarılı; değişen dört TS/TSX dosyası ESLint başarılı. TypeScript --noEmit kontrolü başarılı. Tarayıcı kontrolü erişim hatası nedeniyle çalıştırılamadı. Canlı veri alımı, gerçek ağ istekleri ve mobil hız puanı ölçülmedi.

Kaynaklar:
https://yandex.com/support/metrica/en/code/counter-spa-setup
https://yandex.com/support/metrica/en/code/counter-initialize
