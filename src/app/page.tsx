import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SpecializationSection from '../components/SpecializationSection';
import ContactSection from '../components/ContactSection';
import WhatsAppButton from '../components/WhatsAppButton'; // Importa el botón de WhatsApp

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="specializations">
        <SpecializationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      {/* Agrega el botón de WhatsApp */}
      <WhatsAppButton />
    </>
  );
}
