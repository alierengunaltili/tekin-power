# Video kalite ve boyut raporu — 2026-11-12

Durum: 2026-11-12 tarihinde kullanıcının isteğiyle canlıya yayımlandı. Kalıcı adres: https://tekin-power-site.vercel.app/ . Dağıtım dpl_H2gDFUTQGaH9AxWFB64MBUdYtxEf READY; canlı kalite ve kaydırma testleri geçti.

15 farklı video / 16 etkin başvuru için kaynak ayrıntısı gözetildi. Gerçek 4K kaynaklar yüksek çözünürlükte sunulur; 720p/768p/900p kaynaklar gerçek 4K olarak etiketlenmez. Yeniden kodlama kayıplıdır; görüntünün kaynakla piksel düzeyinde aynı olduğu iddia edilmez. Çok yavaş bağlantıda kullanıcının onayıyla net kapak gösterilir.

| Video | Tam çözünürlük | Kullanılan kaynak MB | Küçük desteklenen sürüm MB |
| --- | --- | ---: | ---: |
| home-marin | 1280×720 | 13.14 | 2.93 |
| home-energy | 3840×2160 | 18.64 | 11.56 |
| military | 3840×2160 | 18.97 | 6.32 |
| home-motor | 1280×720 | 2.21 | 1.05 |
| home-pump | 1920×1080 | 43.93 | 4.59 |
| service-marin | 1920×1080 | 55.47 | 4.96 |
| service-drone | 1920×1088 | 5.06 | 1.36 |
| service-ebus | 1920×1080 | 2.63 | 2.63 |
| service-forklift | 1920×1080 | 3.05 | 3.03 |
| service-golfaraclari | 4096×2160 | 4.75 | 4.75 |
| service-konut-cozumleri | 1920×1080 | 5.41 | 4.91 |
| service-mobil-solar | 2048×1080 | 8.92 | 7.77 |
| service-enerjidepolama | 1920×1088 | 20.47 | 2.60 |
| pump-detail | 1344×768 | 18.68 | 2.52 |
| twin-motor | 1600×900 | 9.45 | 1.83 |

Boyutlar ondalık MB cinsindedir. Kaynak sütunu bazı videolarda yüklenen dosyayı, motor/pompa montajlarında önceden hazırlanmış ana dosyayı gösterir. Eski sitedeki düşük çözünürlüklü dosyalarla karşılaştırma değildir. Tarayıcı VP9 desteklemezse daha büyük MP4 gerekebilir. Küçük ve uyumlu H.264 kaynaklar yeniden sıkıştırılmadan korunur.

Kapakların toplamı: 4.705.892 bayttan 3.124.722 bayta (%33,6 azalma). Çözünürlük küçültülmeden WebP kullanıldı; JPEG kaynakları korundu.

Doğrulama: 11 mantık testi; TypeScript/ESLint; 16 medya başvurusu ve 36 dosyanın çözünürlük, süre ve faststart kontrolü; masaüstü 4K, mobil 1080p, yavaş bağlantıda kapak, MP4 uyumluluğu ve WebM hatasından toparlanma tarayıcı senaryoları. Örnek video isteklerinde HTTP 206 ve doğru MIME/cache başlıkları görüldü. Ayrıntılar TEST_REPORT.md ve artifacts/sharp-media/browser-checks.json içinde.

Sınırlar: gerçek internet hızları ve bütün cihazlar test edilmedi; production build ve yeni canlı yayın başarılı; canlı doğrulama ayrıntıları TEST_REPORT.md içindedir. Gösterilen netlik kaynak dosyanın içerdiği ayrıntıyla sınırlıdır.
