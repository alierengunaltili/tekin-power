import { pageMetadata, SITE_URL, SITE_LOGO } from '@/lib/seo';
import TurnkeySolutionsSection from '@/components/TurnkeySolutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import JsonLdSchema from '@/components/JsonLdSchema';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSectionHomepage';
import WhatsAppContact from '@/components/WhatsAppContact';

export const metadata = pageMetadata('/', 'Tekin Power | Elektrikli Marin, Tekne Motoru ve LiFePO4', 'Elektrikli tekne motoru, elektrikli su pompası, LiFePO4 enerji depolama ve tekne HMI çözümleri. Projenize uygun seçim için Tekin Power ile görüşün.');

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
        
        {/* Turnkey Pump and Motor Solutions */}
        <TurnkeySolutionsSection />
        
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      <WhatsAppContact />

      {/* SEO - JSON-LD Schema */}
      <JsonLdSchema 
        type="Organization"
        data={{
          name: "Tekin Power Energy",
          url: SITE_URL,
          logo: `${SITE_URL}${SITE_LOGO}`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+905323276293",
            contactType: "customer service",
            areaServed: "TR",
            availableLanguage: ["Turkish", "English"]
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Koza Cad. No:66/64",
            addressLocality: "Çankaya",
            addressRegion: "Ankara",
            addressCountry: "TR"
          },
          description: "Tekin Power, elektrikli marin, elektrikli tekne, elektrikli pompa, enerji depolama sistemleri, askeri sistem çözümleri ve deniz/göl dibi arama tarama sistemleri alanlarında yenilikçi enerji çözümleri sunar. LiFePO4 bataryalar ile sürdürülebilir bir gelecek inşa ediyoruz."
        }}
      />
    </div>
  );
}
