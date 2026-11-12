# GitHub / Vercel yayın bağlantısı

- GitHub: https://github.com/alierengunaltili/tekin-power
- Production dalı: master
- Aktif Vercel proje: tekin-power
- Aktif Vercel takım: alierengunaltilis-projects
- Root Directory: boş (depo kökü)
- Framework: Next.js
- Kalıcı canlı adres: https://tekinpower.com
- Ek Vercel adresi: https://tekin-power.vercel.app

## Doğrulanan otomatik yayın — 13 Kasım 2026

`d42df99df55b2f9c817cd6d699f7f3cff7fcd714` commit'i mevcut master geçmişi üzerine gönderildi. Vercel GitHub durum kontrolü `success / Deployment has completed` döndü. Dağıtım: `2UDZyLzeSNYCxftNUX6U2TivHv8b`; GitHub Production kaydı: `7750357311`. Her iki canlı adres HTTP 200 ile yeni anahtar teslim alanını ve WhatsApp bağlantısını sundu.

Site kaynakları, yayın medyası/PDF'ler, üretim ve test betikleri ile proje belgeleri depodadır. `.env`, `.vercel`, günlükler, bağımlılıklar ve siteyle ilgisiz özel yerel takip kayıtları dahil değildir.

TypeScript ve 12 video mantık testi geçti. Temiz dosya kopyasında Next.js derlemesi, lint, tip kontrolü ve 28 statik sayfa üretimi tamamlandı. Windows junction'ına özgü standalone symlink uyarısından sonra gerçek Vercel/Linux production dağıtımı da başarıyla tamamlandı.

## Sonraki yayınlar

1. `git remote -v` hedefi alierengunaltili/tekin-power olmalı.
2. Değişikliği ve uygun kontrolleri tamamla.
3. Kullanıcının geçerli gönderim/yayın yetkisi kapsamında commit oluştur ve `git push origin master` çalıştır.
4. GitHub commit'inin Vercel durumunu ve canlı adresi doğrula.

`SITE_URL` değeri https://tekinpower.com olarak tanımlıdır; canonical, sitemap ve robots bu adresi kullanır.

## Eski proje ayrımı

Eski `tek-i-n-power / tekin-power-site` projesi farklıdır ve `https://tekin-power-site.vercel.app` adresini sunar. Onun Git bağlantısı `EmreOzdemir22/TekinPowerSite` / main olarak korunmuştur. Yeni deponun otomatik yayını bu eski projeye bağlı değildir. Eski projeye ait yerel Vercel bağlantı dosyası yanlışlıkla CLI yayını yapılmaması için `.vercel/project-legacy-20261113.json` olarak yedeklendi; Git'e eklenmez. Bu depodan yayın için yukarıdaki Git akışını kullan.
