import BatterySection from '@/components/BatterySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PhotoSwiper from '@/components/PhotoSwiper';
import ServicesSection from '@/components/ServicesSection';

export default function HizmetlerimizPage() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Photo Swiper at the top */}
        <PhotoSwiper />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Battery Technology Section */}
        <BatterySection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}