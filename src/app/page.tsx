import BatterySection from '@/components/BatterySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSectionHomepage';
import SolarSection from '@/components/SolarSection';

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Battery Technology Section */}
        <BatterySection />
        
        {/* Solar Panel Section */}
        <SolarSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
