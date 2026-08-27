import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { LegalSection } from './LegalSection';
import { Footer } from './Footer';

export const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#1d4ed8] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la web</span>
          </a>
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1d4ed8]">
            <ShieldCheck className="w-4 h-4" />
            <span>Información legal</span>
          </div>
        </div>
      </header>

      <main>
        <LegalSection />
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
