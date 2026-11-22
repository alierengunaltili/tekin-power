# DewJet PDF sunum tasarımı

Kullanıcı PDF yönetici özetine 1 yıllık tutarın ve DewJet ürün görsellerinin eklenmesini istedi.

- İlk sayfa: Tekin Power logosu, DewJet ürün görseli, seçilen model/güç/ağırlık bandı, tüketim farkı ve iki çalışma planı için aylık / 1 yıllık / 5 yıllık tutarlar.
- 1 yıllık tutar mevcut hesap sonucundaki `years[0].savings` değeridir; ilk yıl fiyat artışını içerir ve ikinci sayfadaki tabloyla aynıdır. Formüller değişmedi. Negatif sonuçlar ek maliyet olarak gösterilir.
- Üç sayfa korunur. İkinci sayfa maliyet tabloları, üçüncü sayfa müşteri girdileri ve varsayımlardır.
- Önce kaldırılan pozitif fark açıklaması geri eklenmedi.
- Üst bölümde model seçimine göre DWE-APUMP-20 veya DWE-APUMP-45 ürününün dört açıdan görünümü bulunur.
- Kaynaklar mevcut `public/dewjet-pompa/pompa-doga-deniz-v1.png`, `turkuaz-four-views.png`, `mobil-four-views.png` ve Tekin Power marin logosudur. PDF için sıkıştırılmış kopyalar `assets/reports/` içindedir; orijinaller korunur.
- Görseller yalnız sunucu PDF üretiminde kullanılır. `next.config.ts` dosya izleme listesine bu klasör eklendi; pompa sayfasının tarayıcı paketine görsel veya PDF kütüphanesi eklenmedi.
- Yerelde varsayılan ve negatif PDF hesap testleri geçti; üç sayfa görsel olarak kontrol edildi. Varsayılan PDF yaklaşık 277 kB.
