import { useState } from 'react';
import { Navbar, type MainTabType } from './components/Navbar';
import { Hero } from './components/Hero';
import { FpHero } from './components/FpHero';
import { TechMarquee } from './components/TechMarquee';
import { BentoGrid } from './components/BentoGrid';
import { FpBentoGrid } from './components/FpBentoGrid';
import { ComparisonSection } from './components/ComparisonSection';
import { FpComparisonSection } from './components/FpComparisonSection';
import { RoiCalculator } from './components/RoiCalculator';
import { PlansSection } from './components/PlansSection';
import { FpDemoSection } from './components/FpDemoSection';
import { TeamSection } from './components/TeamSection';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DossierModal } from './components/DossierModal';
import LegalPage from './components/LegalPage';
import PrivacyPage from './components/PrivacyPage';
import CookiesPage from './components/CookiesPage';
import { Building2, GraduationCap, Languages, Layers3 } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<MainTabType>('academias');
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>();
  const [studentsForContact, setStudentsForContact] = useState<number | undefined>();

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/legal')) {
    return <LegalPage />;
  }

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/privacy')) {
    return <PrivacyPage />;
  }

  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/cookies')) {
    return <CookiesPage />;
  }

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
      {/* Top Navbar with 4-Tab Switcher & Dossier Trigger */}
      <Navbar
        activeMainTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={() => scrollToContact()}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      {/* Floating Center Selector for Mobile / Quick Switch */}
      <div className="pt-24 md:hidden max-w-sm mx-auto px-6">
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-900/5 text-center">
          <button
            onClick={() => setActiveTab('academias')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'academias'
                ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Oposiciones</span>
          </button>
          <button
            onClick={() => setActiveTab('fp')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'fp'
                ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>FP</span>
          </button>
          <button
            onClick={() => setActiveTab('ingles')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'ingles'
                ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>Inglés</span>
          </button>
          <button
            onClick={() => setActiveTab('otros')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'otros'
                ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Layers3 className="w-3.5 h-3.5" />
            <span>Otros centros</span>
          </button>
        </div>
      </div>

      {/* Main Content Sections - Dynamic based on selected tab */}
      <main>
        {activeTab === 'fp' ? (
          <>
            {/* Vertiente 2: Centros de Formación Profesional (FP) */}
            <FpHero onOpenContact={() => scrollToContact()} />
            <TechMarquee />
            <FpBentoGrid onOpenContact={() => scrollToContact()} />
            <FpComparisonSection onOpenContact={() => scrollToContact()} />
            <FpDemoSection onOpenContact={() => scrollToContact('Piloto Centro FP')} />
          </>
        ) : (
          <>
            {/* Vertiente 1: Academias de Oposiciones, Inglés y otros centros */}
            <Hero
              onOpenContact={() => scrollToContact()}
              variant={activeTab === 'ingles' ? 'ingles' : activeTab === 'otros' ? 'otros' : 'academias'}
            />
            <TechMarquee />
            <BentoGrid
              onOpenContact={() => scrollToContact()}
              variant={activeTab === 'ingles' ? 'ingles' : activeTab === 'otros' ? 'otros' : 'academias'}
            />
            <ComparisonSection
              onOpenContact={() => scrollToContact()}
              variant={activeTab === 'ingles' ? 'ingles' : activeTab === 'otros' ? 'otros' : 'academias'}
            />
            <RoiCalculator
              onOpenContact={(plan, students) => scrollToContact(plan, students)}
              variant={activeTab === 'ingles' ? 'ingles' : activeTab === 'otros' ? 'otros' : 'academias'}
            />
            <PlansSection
              onOpenContact={(plan) => scrollToContact(plan)}
              variant={activeTab === 'ingles' ? 'ingles' : activeTab === 'otros' ? 'otros' : 'academias'}
            />
          </>
        )}

        {/* Shared Institutional Foundations */}
        <TeamSection />
        <SecurityCompliance />
        <FaqSection />
        <ContactSection
          targetType={activeTab}
          initialPlan={selectedPlanForContact}
          initialStudents={studentsForContact}
        />
      </main>

      {/* Lead Magnet Dossier Modal */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        targetType={activeTab}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;


