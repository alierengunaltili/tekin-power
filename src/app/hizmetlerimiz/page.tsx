import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PhotoSwiper from '@/components/PhotoSwiper';
import ServicesGrid from '@/components/ServicesGrid';

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