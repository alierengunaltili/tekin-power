# Dalyan haber sayfasının kaldırılması

Kullanıcının 22 Kasım 2026 isteğiyle `/dalyan` haber sayfası kaldırıldı. Eski adrese erişim 404 döndürür; ilgisiz bir sayfaya yönlendirilmez. Sitemap ve su sayfası tema listesindeki kayıt çıkarıldı. Güncel menü ve alt bilgide bu sayfaya bağlantı bulunmuyordu.

Önceki haber veri/medya dosyaları silinmedi; artık bir haber sayfasında yayımlanmaz. AFAD bağlantısının pompa tatbikatlarına yönlendirmesi korunur.

Search Console'da `/dalyan` için dizine ekleme talebi gönderilmemelidir. Google'daki eski sonucun kaldırılması yeniden tarama sonrasında gerçekleşir; bu değişiklik Search Console'da ayrıca kaldırma talebi oluşturmaz.

Kontrol: `node scripts/check-legacy-links.mjs [baseUrl]`, kaldırılan yolun 404 yanıtını ve sitemap'te bulunmadığını da doğrular.
