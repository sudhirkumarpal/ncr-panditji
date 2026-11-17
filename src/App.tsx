import { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { MeetPanditJi } from './components/MeetPanditJi';
import { RitualDarshan } from './components/RitualDarshan';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuickActionBar } from './components/QuickActionBar';

export function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ncr_panditji_lang');
    return (saved === 'en' || saved === 'hi') ? saved : 'hi';
  });

  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('ncr_panditji_lang', newLang);
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreSelectedService(serviceId);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] selection:bg-vedic-saffron selection:text-white">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={handleLanguageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Credentials & Trust Metrics Bar */}
        <TrustBar lang={lang} />

        {/* Filterable Services Section (12 Vedic pujas & ceremonies) */}
        <ServicesSection
          lang={lang}
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Meet Pandit Ji - Gurukul Credentials & Vedic Philosophy */}
        <MeetPanditJi
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Sacred Darshan: HD Video Player & High-Resolution Image Gallery */}
        <RitualDarshan lang={lang} />

        {/* Why Choose Us - 6 Core Vedic Pillars */}
        <WhyChooseUs lang={lang} />

        {/* Service Coverage Areas (Delhi, Noida, Greater Noida, Ghaziabad, Gurugram) */}
        <ServiceAreas
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Client Testimonials from Verified NCR Families */}
        <TestimonialsSection lang={lang} />

        {/* Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection lang={lang} />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        lang={lang}
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* Interactive Booking Modal with WhatsApp & Call generation */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        lang={lang}
        preSelectedServiceId={preSelectedService}
      />

      {/* Floating Sticky Actions (Call & WhatsApp) for Mobile & Desktop */}
      <QuickActionBar
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

export default App;
