# Tekin Power web sitesi

Next.js 15 / React 19 / TypeScript ile geliştirilen Tekin Power sitesi.

- Depo: https://github.com/alierengunaltili/tekin-power
- Yayın dalı: `master`
- Canlı adres: https://tekinpower.com
- Uygulama bu deponun kökündedir; Vercel Root Directory boş kalmalıdır.

## Geliştirme

```sh
npm ci
npm run dev
```

## Doğrulama ve derleme

```sh
npx tsc --noEmit
node --test scripts/test-adaptive-video.cjs
npm run build
```

ESLint gerektiğinde `npx eslint <değişen-dosyalar>` ile çalıştırılır. Eski `npm run lint` betiği Next 15 ile uyumlu değildir.

## İçerik ve medya

Sayfalar `src/app`, bileşenler `src/components`, ürün ve hizmet verileri `src/data`, görsel/video/PDF dosyaları `public` altındadır. Güncel video kataloğu `src/data/videoAssets.json`, medya `public/media/sharp-v2` içindedir. Bazı eski görseller mevcut S3 adreslerinden gelir; kodda erişim anahtarı bulunmaz.

`FIRST.md`, `PROJECT.md` ve `PROJECT_TREE.md` güncel başlangıç belgeleridir. Ayrıntılı geliştirme geçmişi `docs/history/` içindedir. Tarihsel belgelerde iç içe çalışma klasörü yolları bulunabilir; bu depoda uygulama kök seviyededir.

## Yayın

Vercel projesi `tekin-power`, takım `alierengunaltilis-projects`. Bu deponun `master` dalına yapılan gönderimler otomatik canlı dağıtımı tetikler. Bağlantı başarılı bir production dağıtımıyla doğrulandı. `.vercel/` ve özel ortam değişkenleri depoya eklenmez. Bağlantının son doğrulama durumu `DEPLOYMENT.md` dosyasındadır.

Yerel proje takip uygulaması ve özel kabul testi kayıtları bu web sitesi aktarımının dışındadır; mevcut bilgisayarda korunur.

