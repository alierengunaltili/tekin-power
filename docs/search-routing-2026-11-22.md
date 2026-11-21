# Google sonuçları ve eski DewJet bağlantısı — 22 Kasım 2026

Kullanıcının gösterdiği Google sonucu `www.tekinpower.com/dewjet` adresiydi. İncelemede www ve ana adres aynı eski ara sayfayı HTTP 200 ile sunuyordu; alan adları arasında yönlendirme yoktu. Google görselinde farklı simgeler görünüyordu. Mevcut kaynakta aynı yatay logo tanımlıydı; sonuçtaki farkın geçmiş tarama/alan adı kayıtlarından kaynaklanması mümkündür, Google önbelleğinin içeriği doğrulanamaz.

- `/dewjet` her iki alan adından doğrudan `https://tekinpower.com/dewjet-elektrikli-motor` adresine 308 yönlendirilir. Eski ara sayfa kaldırıldı ve sitemap listesinden çıkarıldı.
- Diğer www adresleri yol ve sorgu bilgisi korunarak ana adrese 308 yönlendirilir. Pompa bağlantıları pompa sayfasında kalır.
- Tüm sayfalarda aynı kalıcı `https://tekinpower.com/tekinpower-icon.png` site simgesi kullanılır. Dosya, mevcut özgün Tekin Power logosuyla daha önce hazırlanmış simgenin 256×256 PNG karesidir; yeni logo tasarlanmadı. Sayfa içi marin/yeşil marka logoları korunur.
- Kontrol: `node scripts/check-search-routing.mjs [baseUrl]`; kalıcı yanıtlar, doğru hedef, döngü olmaması, sorgunun korunması, ortak kare simge ve sitemap doğrulanır.

Google sonuç başlığının, açıklamasının ve simgesinin değişmesi yeniden tarama gerektirir; anında güncelleme garantisi yoktur. Search Console yeniden dizine ekleme talebi gönderilmedi.

Yerel doğrulama: yönlendirme/site simgesi/sitemap denetimi ve değişen dosyaların ESLint kontrolü geçti. Normal TypeScript komutu özel günlük sunucularının eski üretilmiş tiplerinde silinen `/dewjet` sayfasını aradığı için hata verdi. Bu eski `.next-journal-*` çıktıları dışarıda bırakılarak uygulama kaynakları ve güncel `.next/types` ile yapılan TypeScript kontrolü geçti; özel günlük dosyaları değiştirilmedi.

Kaynaklar: https://developers.google.com/search/docs/appearance/favicon-in-search ve https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects .
