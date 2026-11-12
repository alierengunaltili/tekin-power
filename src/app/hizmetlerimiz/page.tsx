import { pageMetadata } from '@/lib/seo';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PhotoSwiper from '@/components/PhotoSwiper';
import ServicesGrid from '@/components/ServicesGrid';

export const metadata = pageMetadata('/hizmetlerimiz', 'Tekin Power Çözümleri | Marin, Motor, Pompa ve Enerji', 'Elektrikli marin, DewJet tekne motorları, elektrikli pompa ve enerji depolama çözümlerini inceleyin. İhtiyacınıza uygun sayfadan bilgi alın.');

export default function HizmetlerimizPage() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Photo Swiper at the top */}
        <PhotoSwiper />
        
        {/* Services Grid */}
        <ServicesGrid />
        

                
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}