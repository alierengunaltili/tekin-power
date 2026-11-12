# GitHub / Vercel yayın bağlantısı

- GitHub: https://github.com/alierengunaltili/tekin-power
- Production dalı: master
- Vercel proje: tekin-power-site (prj_ERg2mCcEyD3ekpoDni4juOOzo4s6)
- Takım: tek-i-n-power
- Root Directory: boş (depo kökü)
- Framework: Next.js
- Canlı URL: https://tekin-power-site.vercel.app

## Depo aktarımı — 13 Kasım 2026

Bu commit, mevcut master geçmişinin üzerine güncel siteyi taşır. Kaynak kodu, yayın medyası, PDF'ler, üretim/test betikleri ve proje belgeleri dahil edilmiştir. `.env`, `.vercel`, günlükler, bağımlılıklar ve siteyle ilgisiz özel yerel takip kayıtları dahil değildir.

TypeScript ve 12 video mantık testi geçti. Temiz dosya kopyasında Next.js derlemesi, lint, tip kontrolü ve 28 statik sayfanın üretimi tamamlandı. Windows'ta paylaşılan node_modules bağlantısı nedeniyle standalone klasörüne symlink kopyalama uyarısı oluştu; gerçek Linux/Vercel derlemesi Git bağlantısı sağlandıktan sonra doğrulanmalıdır.

## Otomatik yayın için kalan bağlantı

Vercel API, yeni GitHub deposunu bağlama isteğini `To link a GitHub repository, you need to install the GitHub integration first` hatasıyla reddetti. GitHub yazma izni ile Vercel GitHub uygulamasının erişimi farklıdır.

Depo sahibi, https://github.com/apps/vercel üzerinden Vercel uygulamasına `alierengunaltili/tekin-power` için erişim vermelidir. Ardından mevcut `tekin-power-site` projesinde Git bağlantısı bu depoya ve Production Branch `master` olarak ayarlanmalıdır. Bu tamamlanmadan her push'un otomatik canlıya çıkacağı varsayılmamalıdır.

Bağlantı denemesi eski depo bağlantısını kaldırdı; mevcut canlı dağıtım ve alan adı korunur. Yeni bağlantı kurulana kadar mevcut canlı sürüm hizmet vermeye devam eder.
