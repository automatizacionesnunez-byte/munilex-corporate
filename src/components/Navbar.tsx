import { useEffect, useState } from 'react';
import { ArrowRight, Building2, FileText, GraduationCap, Languages, Layers3, Menu, Sparkles, X } from 'lucide-react';

export type MainTabType = 'academias' | 'fp' | 'ingles' | 'otros';

interface NavbarProps {
  activeMainTab: MainTabType;
  onSelectTab: (tab: MainTabType) => void;
  onOpenContact: () => void;
  onOpenDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeMainTab,
  onSelectTab,
  onOpenContact,
  onOpenDossier,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academyNavLinks = [
    { name: 'Soluciones', href: '#bento' },
    { name: 'Calculadora ROI', href: '#calculator' },
    { name: 'Planes & Tarifas', href: '#plans' },
    { name: 'Equipo & Confianza', href: '#team' },
    { name: 'Seguridad & Privacidad', href: '#security' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  const fpNavLinks = [
    { name: 'Soluciones FP', href: '#fp-features' },
    { name: 'Roleplay Laboral', href: '#fp-features' },
    { name: 'Demostración Piloto', href: '#fp-plans' },
    { name: 'Equipo & Respaldo', href: '#team' },
    { name: 'Seguridad & Privacidad', href: '#security' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  const currentLinks = activeMainTab === 'fp' ? fpNavLinks : academyNavLinks;
  const isAcademyFamily = activeMainTab !== 'fp';

  const activeLabel: Record<MainTabType, string> = {
    academias: 'Academia de Oposiciones',
    fp: 'Centro FP',
    ingles: 'Academia de Inglés',
    otros: 'Otro tipo de centro',
  };

  const familySubtitle = () => {
    if (activeMainTab === 'fp') return 'Soluciones IA para Centros de FP';
    if (activeMainTab === 'ingles') return 'IA para academias de idiomas: EPG, listening, grammar y progreso';
    if (activeMainTab === 'otros') return 'IA para autoescuelas, ciencias, refuerzo y centros especializados';
    return 'Tecnología B2B para Academias';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-xl p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300 ${
                activeMainTab === 'fp'
                  ? 'bg-gradient-to-tr from-[#1d4ed8] via-[#93c5fd] to-[#1e40af] shadow-blue-500/20'
                  : 'bg-gradient-to-tr from-[#1d4ed8] via-[#dbeafe] to-[#60a5fa] shadow-blue-500/20'
              }`}
            >
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-manrope font-black text-lg">
                <span className={activeMainTab === 'fp' ? 'text-[#1d4ed8]' : 'text-[#1d4ed8]'}>
                  M
                </span>
              </div>
            </div>
            <div
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#080d15] animate-pulse ${
                activeMainTab === 'fp' ? 'bg-[#1d4ed8]' : 'bg-[#3b82f6]'
              }`}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-manrope font-black text-xl tracking-tight text-slate-900">MUNILEX</span>
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                  activeMainTab === 'fp'
                    ? 'bg-[#1d4ed8]/10 text-[#1d4ed8] border-[#1d4ed8]/20'
                    : 'bg-[#1d4ed8]/10 text-[#1d4ed8] border-[#1d4ed8]/20'
                }`}
              >
                {activeLabel[activeMainTab]}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide -mt-0.5">
              {familySubtitle()}
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center p-1 rounded-2xl bg-white border border-slate-200 shadow-inner shadow-slate-900/5">
          <button
            onClick={() => onSelectTab('academias')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'academias'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Oposiciones</span>
          </button>

          <button
            onClick={() => onSelectTab('fp')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'fp'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa] text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>FP</span>
          </button>

          <button
            onClick={() => onSelectTab('ingles')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'ingles'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>Inglés</span>
          </button>

          <button
            onClick={() => onSelectTab('otros')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'otros'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers3 className="w-3.5 h-3.5" />
            <span>Otros centros</span>
          </button>
        </div>

        <div className="hidden xl:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {currentLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-[#1d4ed8] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenDossier}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#1d4ed8]" />
            <span>Dossier PDF</span>
          </button>

          <button
            onClick={onOpenContact}
            className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-manrope font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer ${
              isAcademyFamily
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white shadow-blue-500/20 hover:shadow-blue-500/35'
                : 'bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa] text-white shadow-blue-500/20 hover:shadow-blue-500/35'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendar Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
            <button
              onClick={() => {
                onSelectTab('academias');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'academias' ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20' : 'text-slate-500'
              }`}
            >
              Oposiciones
            </button>
            <button
              onClick={() => {
                onSelectTab('fp');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'fp' ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20' : 'text-slate-500'
              }`}
            >
              FP
            </button>
            <button
              onClick={() => {
                onSelectTab('ingles');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'ingles' ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20' : 'text-slate-500'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <Languages className="w-3.5 h-3.5" />
                <span>Inglés</span>
              </div>
            </button>
            <button
              onClick={() => {
                onSelectTab('otros');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'otros' ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20' : 'text-slate-500'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <Layers3 className="w-3.5 h-3.5" />
                <span>Otros centros</span>
              </div>
            </button>
          </div>

          {currentLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-700 hover:text-[#1d4ed8] py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200"
            >
              <FileText className="w-4 h-4 text-[#1d4ed8]" />
              <span>Descargar Dossier PDF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-manrope font-black text-xs uppercase tracking-widest shadow-lg ${
                activeMainTab === 'fp'
                  ? 'bg-[#1d4ed8] text-white shadow-blue-500/20'
                  : 'bg-[#1d4ed8] text-white shadow-blue-500/20'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};



