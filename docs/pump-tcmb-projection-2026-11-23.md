# Pompa raporu: TCMB enflasyon senaryosu ve 720 saat — 23 Kasım 2026

## Değişiklik
- Sürekli çalışma başlangıcı 24 saat × 30 gün = 720 saat/ay. Temel panel, detay hesaplama ve PDF aynı süreyi kullanır. Müşterinin düzenlediği süreler dinamik olarak gösterilir.
- Yıllık maliyet artışları: 2026 %29,5; 2027 %21; 2028 %13,5; 2029 %9; 2030 %5. İki pompa için aynı bileşik oranlar kullanılır. Aylık baz tutar ilk senaryo yılı için de artırılır; gerçekleşmiş geçmiş maliyet hesaplanmaz.
- Kaynak: TCMB, 12 Kasım 2026 Enflasyon Raporu 2026-IV bilgilendirme konuşması. 2030 %5, orta vadeli hedefin senaryoya uygulanmasıdır. Bu oranlar TCMB elektrik tarifesi tahmini olarak sunulmaz.
- Kaynak bağlantısı: https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb%2Btr/main%2Bmenu/duyurular/baskanin%2Bkonusmalari/2026/konusmab12_11_2026
- Ortak veri src/data/pumpInflation.ts. Hesap server-only modülde kalır. Sonuç tabloları 2026–2030 etiketlerini gösterir.
- PDF dört sayfa: görselli yönetici özeti, maliyet tablosu, müşteri girdileri, enflasyon ve tıklanabilir TCMB kaynağı. Karbon/enerji miktarları enflasyonla artırılmaz.

## Kontroller
- Temel ve detay hesap testleri geçti; 720 saat, yeni yıllık oranlar/yıl etiketleri, bağımsız referans tutarlar, sıfır/negatif farklar ve özel tarifeler doğrulandı.
- Varsayılan ve negatif senaryo PDF'leri üretildi; dört sayfa, 720 saat, oranlar ve TCMB bağlantısı metin/bağlantı denetiminden geçti.
- Dört PDF sayfası görüntü olarak incelendi. Kaynak bağlantısında fontun desteklemediği ok kaldırıldı.
- Varsayılan 45/250 kW: plan 1 yıllık 2.744.235,33 TL / beş yıllık 18.254.929,40 TL; plan 2 aylık 715.064,22 TL / yıllık 11.112.097,96 TL / beş yıllık 73.918.793,25 TL.
- Temiz yayın kopyasında Next.js 15.4.10 üretim derlemesi, lint/tip kontrolü ve 33 sayfa üretimi geçti. Masaüstü ve 390 px mobil tarayıcıda TCMB alanı ve 720 saat doğrulandı; sayfada yatay taşma yok. Yayın sonucu ayrıca doğrulanacak.
