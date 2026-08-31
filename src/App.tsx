import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { RoiCalculator } from './components/RoiCalculator';
import { PlansSection } from './components/PlansSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DossierModal } from './components/DossierModal';
import LegalPage from './components/LegalPage';
import PrivacyPage from './components/PrivacyPage';
import CookiesPage from './components/CookiesPage';

export function App() {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/legal')) {
    return <LegalPage />;
  }

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/privacy')) {
    return <PrivacyPage />;
  }

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/cookies')) {
    return <CookiesPage />;
  }

  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>();
  const [studentsForContact, setStudentsForContact] = useState<number | undefined>();

  const scrollToContact = (plan?: string, students?: number) => {
    if (plan) setSelectedPlanForContact(plan);
    if (students) setStudentsForContact(students);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0f172a] selection:bg-[#1d4ed8]/20 selection:text-white font-inter">
      <Navbar
        onOpenContact={() => scrollToContact()}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      <main>
        <Hero onOpenContact={() => scrollToContact()} />
        <BentoGrid onOpenContact={() => scrollToContact()} />
        <RoiCalculator onOpenContact={(plan, students) => scrollToContact(plan, students)} variant="academias" />
        <PlansSection onOpenContact={(plan) => scrollToContact(plan)} />
        <ContactSection
          targetType="academias"
          initialPlan={selectedPlanForContact}
          initialStudents={studentsForContact}
        />
      </main>

      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        targetType="academias"
      />

      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

export default App;
