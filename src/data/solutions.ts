export interface Solution {
  id: string;
  title: string;
  productTitle: string;
  description: string;
  href: string;
  image: string | null;
  cardImage?: string;
  homepageImage?: string;
  slideImage?: string;
  video: string | null;
  videoFit?: 'cover' | 'contain';
  videoPoster?: string;
  gradient: string;
  bgGradient: string;
}

// All public service lists share this order. Missing media stays empty until supplied.
export const solutions: Solution[] = [
  {
    id: 'marin', title: 'Elektrikli Marin', productTitle: 'Elektrikli Marin Çözümleri',
    description: 'Yeni tekneler ve elektrikliye dönüşüm için motor, marin batarya ve kaptan ekranı.',
    href: '/hizmetlerimiz/marin', image: '/hizmetlerimiz/marin.jpg', video: 'marin',
    gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-900/90 via-cyan-800/90 to-blue-900/90',
  },
  {
    id: 'tekne', title: 'Elektrikli Tekne', productTitle: 'DewJet Elektrikli Tekne Motorları',
    description: 'İçten ve dıştan takma elektrikli tekne motorları: pervaneli ve kapalı çarklı tahrik seçenekleri.',
    href: '/dewjet-elektrikli-motor', image: null, video: 'dewjet-motor-deniz-v1',
    cardImage: '/dewjet-motor/motor-coast-card-v2.png',
    videoFit: 'contain',
    videoPoster: '/landing-page-posters/dewjet-motor-start-v2.jpg',
    gradient: 'from-cyan-500 to-blue-500', bgGradient: 'from-cyan-900/90 via-blue-800/90 to-cyan-900/90',
  },
  {
    id: 'pompa', title: 'Elektrikli Pompa', productTitle: 'DewJet Elektrikli Pompa',
    description: '20 ve 45 kW RIM Drive elektrikli su pompaları: kompakt tasarım, yüksek debi.',
    href: '/dewjet-pompa', image: '/dewjet-pompa/pompa-doga-deniz-v1.png', video: 'dewjet-pompa-v3',
    homepageImage: '/dewjet-pompa/pompa-doga-deniz-v1.png',
    slideImage: '/dewjet-pompa/pompa-doga-deniz-slide-v2.png',
    videoFit: 'contain',
    gradient: 'from-sky-500 to-indigo-500', bgGradient: 'from-sky-900/90 via-indigo-800/90 to-sky-900/90',
  },
  {
    id: 'enerji-depolama', title: 'Enerji Depolama Sistemleri', productTitle: 'Enerji Depolama Sistemleri',
    description: 'LiFePO4 enerji depolama, kapasite hesabı ve inverter uyumu.',
    href: '/hizmetlerimiz/enerji-depolama', image: '/hizmetlerimiz/enerjidepolama.jpg', video: 'enerjidepolamasistemleri',
    gradient: 'from-purple-500 to-violet-500', bgGradient: 'from-purple-900/90 via-violet-800/90 to-purple-900/90',
  },
  {
    id: 'askeri', title: 'Askeri Sistem Çözümleri', productTitle: 'Askeri Sistem Çözümleri',
    description: 'Savunma sanayii için enerji ve güç sistem çözümleri.',
    href: '/hizmetlerimiz/askeri-sistem-uygulamalari', image: '/hizmetlerimiz/askerisistemuygulamalari.jpg', video: 'askerisistemuygulamalari',
    gradient: 'from-green-600 to-emerald-500', bgGradient: 'from-green-900/90 via-emerald-800/90 to-green-900/90',
  },
  {
    id: 'deniz-gol', title: 'Deniz Göl Dibi Tarama ve Temizleme', productTitle: 'Deniz Göl Dibi Tarama ve Temizleme',
    description: 'Deniz ve göl dibi tarama, dip temizleme ve batimetrik ölçüm çözümleri.',
    href: '/hizmetlerimiz/deniz-gol-dibi-arama-tarama', image: null, video: null,
    gradient: 'from-teal-500 to-cyan-500', bgGradient: 'from-teal-900/90 via-cyan-800/90 to-teal-900/90',
  },
];
