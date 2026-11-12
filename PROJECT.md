# Proje özeti

Tekin Power: elektrikli marin, DewJet tekne motorları ve pompalar, enerji depolama, askeri çözümler, deniz/göl dibi tarama.

## Mimari

Next.js 15.4.10, React 19, TypeScript, Tailwind 4 ve GSAP. App Router kullanılır. `src/app/page.tsx` ana sayfayı, `src/data` ürün verilerini yönetir. `AdaptiveVideo.tsx` kalite ve oynatmayı yönetir; kayıtlar `src/data/videoAssets.json` içindedir.

Ana sayfa: Navbar → HeroSection → AboutSection → ServicesSectionHomepage → TurnkeySolutionsSection → ContactSection → Footer; sabit WhatsAppContact (+90 532 327 62 93).

Motor sayfası altı model seçimi ve beş resmi PDF içerir; siyah 18 kW pervaneli dıştan takma model broşürü kullanıcıdan beklenir. Pompa: 20 kW / 25 kg / 420 m³/h ve 45 kW / 55 kg / 1.200 m³/h; 96 V / 380 V seçenekleri. Su sayfalarında mavi logo kullanılır. Tarama sayfası kullanıcı kataloğu, gerçek fotoğraflar ve PDF indirme bağlantısı içerir.

## Depo geçişi — 13 Kasım 2026

Kullanıcı bu site kodlarının `alierengunaltili/tekin-power` deposuna aktarılmasını ve bundan sonra bu depodan yayınlanmasını istedi. Hedef mevcut `master` geçmişi korunur. Önceki çalışma alanı dış klasöründeki boş Git deposu kullanılmaz; bu klasör yeni origin'e bağlıdır. Özel yerel proje takip kayıtları bu site deposunun dışındadır. Ayrıntılı önceki değişiklik/medya/test kayıtları `docs/history/` altındadır.

Son yayın bağlantısı ve doğrulama için DEPLOYMENT.md dosyasına bak.

## Aktif canlı yayın

`master` gönderimi ile yeni Vercel projesinde production yayını otomatik tamamlandı. Aktif adres https://tekinpower.com; Vercel projesi alierengunaltilis-projects/tekin-power. Önceki `tekin-power-site` projesi ayrı bir eski yayındır. `src/lib/seo.ts` kalıcı adresi tekinpower.com olarak kullanır. Güncel yayın akışı DEPLOYMENT.md dosyasındadır.

## Hizmet adı — 13 Kasım 2026

Deniz/göl arama tarama hizmetinin görünen adı kullanıcının isteğiyle “Deniz Göl Dibi Tarama ve Temizleme” olarak değiştirildi. Ortak solutions verisi menüleri, ana sayfa slaydını/kartını, hizmet listesini ve iletişim seçeneklerini günceller. Detay sayfası H1/SEO başlığı, Hakkımızda, ana sayfa yapılandırılmış verisi ve hizmet tanıtım cümlesi de uyumlandı. Mevcut URL korunur. Kullanıcı tüm sonraki site değişiklikleri için tekinpower.com üzerinde sürekli yayın yetkisini tekrar verdi; AGENTS.md ve DEPLOYMENT.md kaydına işlendi.

## Menü ve pompa başlıkları — 13 Kasım 2026

Deniz & Göl Dibi Tarama ve Temizleme adı ortak hizmet verisine ve sayfa başlığına işlendi; üst menüde Hizmetlerimiz sonrasına iki satırlı doğrudan bağlantı eklendi. Pompa detay başlığı “DewJet Dünyanın En Hafif Elektrikli Su Pompası” oldu. Pompa slayt açıklaması eşdeğer güç ve performans sınıfında dünyanın en hafif elektrikli su pompaları vurgusunu, 20 kW / 25 kg ve 45 kW / 55 kg bilgilerini içerir. Mevcut medya ve adresler korunur.

## Deniz & Göl ana sayfa videosu — 13 Kasım 2026

Son karar: kullanıcı videoyu kaldırdı. Deniz & Göl slaydında video bağlantısı kaldırıldı; önceki düz geçişli arka plan, başlık, açıklama ve buton korunur. Aşağıdaki medya kaydı geçmiş uygulamayı anlatır; dosyalar saklanır ancak slaytta yüklenmez.

Kullanıcının gemini_generated_video_df704804.mp4 videosu ana sayfanın altıncı slaydına eklendi. public/media/survey-v1 içinde özgün 1280×720 / 24 fps boyutunda, sessiz ve faststart H.264 ile VP9 sürümü ve aynı açılış karesinden JPEG kapak bulunur. AdaptiveVideo bağlantı/hareket tercihlerini, görünürlükte oynatmayı ve slayt sonunda geçişi yönetir. Başlık, açıklama, fontlar ve butonlar korunur; telefonda mevcut tam kadraj video ve alttaki okunaklı metin düzeni kullanılır. Yeniden üretim: node scripts/prepare-survey-video.cjs [kaynakDosya].

## Siyah motor sunumu ve enerji menüsü — 13 Kasım 2026

Kullanıcı tek açıyla hafif hareketi onayladı; gerçek 360 derece dönüş istenmiyor. Ana sayfa motor slaydındaki beyaz motor videosu yerine MotorHeroPresentation, mevcut deniz/doğa arka planı ve kullanıcının siyah/altın pervaneli motorunun şeffaf görselini kullanır. CSS hareketi küçük düşey salınım ve +/-0,4 dereceyle sınırlıdır; görünmezken durur ve hareket azaltma tercihinde tamamen kapanır. Metinler ve CTA korunur. Slayt 12 saniyede ilerler. Kullanıcının yeni talimatıyla üst menü adı Yenilenebilir Enerji ve Unisun Enerji Depolama Sistemleri olarak iki satırda gösterilir; mevcut enerji sayfasına bağlanır. Bu menü adı için önceki Unisun kullanmama tercihi yeni talimatla değiştirilmiştir.

## Deniz & Göl yeni video ve kart — 13 Kasım 2026

Kullanıcı yeni WhatsApp Video 2026-11-13 at 02.16.41.mp4 dosyasını verdi. 2–10 saniye arası %80 hızla 10 saniye olarak hazırlanır; döndürme metadatası uygulanır ve gömülü siyah kenarlar 1024x576 içerik alanına kırpılır. Kullanıcının isteğiyle 2560x1440 full ve 1920x1080 balanced, 24 fps H264/VP9 sürümleri üretilir; bunlar düşük çözünürlüklü kaynağın büyütülmüş sürümleridir, gerçek UHD ayrıntısı değildir. AdaptiveVideo bağlantıya göre sürüm veya kapak kullanır. Ana sayfa hizmet kartında mevcut katalogdaki kesici-emici.jpg kullanılır. Önceki kaldırılan survey-v1 dosyaları bağlı değildir.
