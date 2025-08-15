import BatterySection from '@/components/BatterySection';
import CatalogSection from '@/components/CatalogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
                
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
