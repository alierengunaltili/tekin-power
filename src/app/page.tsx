import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BatterySection from '@/components/BatterySection';
import ProjectsSection from '@/components/ProjectsSection';
import CatalogSection from '@/components/CatalogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Battery Technology Section */}
        <BatterySection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Catalog Section */}
        <CatalogSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
