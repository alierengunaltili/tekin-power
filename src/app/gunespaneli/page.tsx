import { pageMetadata } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolarPhotoSwiper from '@/components/solar/SolarPhotoSwiper';
import SolarTypesRedesign from '@/components/solar/SolarTypesRedesign';

export const metadata = pageMetadata(
  '/gunespaneli',
  'Güneş Paneli Sistemleri ve Solar Çözümler | Tekin Power',
  'Güneş paneli türleri, çatı ve mobil solar uygulamaları. Kullanım alanınıza uygun güneş enerjisi sistemi için Tekin Power ile iletişime geçin.',
);

export default function GunesPaneliPage() {
  return (
    <div className="relative   min-h-screen">
      <Navbar />
      
      <main className="">
        {/* Photo Swiper Section with Integrated Info */}
        <SolarPhotoSwiper />

        {/* Solar Types & Description */}
        <SolarTypesRedesign />
      </main>
      
      <Footer />
    </div>
  );
}
