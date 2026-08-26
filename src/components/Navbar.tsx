import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, Building2, GraduationCap, FileText } from 'lucide-react';

export type MainTabType = 'academias' | 'fp';

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
  onOpenDossier 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academyNavLinks = [
    { name: 'Soluciones', href: '#bento' },
    { name: 'Calculadora ROI', href: '#calculator' },
    { name: 'Planes & Tarifas', href: '#plans' },
    { name: 'Equipo Jurídico', href: '#team' },
    { name: 'Seguridad & ENS', href: '#security' },
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

  const currentLinks = activeMainTab === 'academias' ? academyNavLinks : fpNavLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0C10]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <div className={`w-10 h-10 rounded-xl p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300 ${
              activeMainTab === 'academias'
                ? 'bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] shadow-[#d4af37]/20'
                : 'bg-gradient-to-tr from-cyan-400 via-cyan-200 to-blue-500 shadow-cyan-500/20'
            }`}>
              <div className="w-full h-full bg-[#0B0C10] rounded-[10px] flex items-center justify-center font-manrope font-black text-lg">
                <span className={activeMainTab === 'academias' ? 'text-[#d4af37]' : 'text-cyan-400'}>
                  M
                </span>
              </div>
            </div>
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0B0C10] animate-pulse ${
              activeMainTab === 'academias' ? 'bg-emerald-400' : 'bg-cyan-400'
            }`} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-manrope font-black text-xl tracking-tight text-white">
                MUNILEX
              </span>
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                activeMainTab === 'academias'
                  ? 'bg-[#d4af37]/15 text-[#d4af37] border-[#d4af37]/30'
                  : 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
              }`}>
                Corporate
              </span>
            </div>
            <span className="text-[10px] text-white/40 font-medium tracking-wide -mt-0.5">
              {activeMainTab === 'academias' ? 'Tecnología B2B para Academias' : 'Soluciones IA para Centros de FP'}
            </span>
          </div>
        </a>

        {/* 2-Tab Switcher (Center Highlight) */}
        <div className="hidden md:flex items-center p-1 rounded-2xl bg-[#13141B] border border-white/10 shadow-inner">
          <button
            onClick={() => onSelectTab('academias')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'academias'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e6c65b] text-black shadow-lg shadow-[#d4af37]/20 scale-[1.02]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Para Academias & Oposiciones</span>
          </button>

          <button
            onClick={() => onSelectTab('fp')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-manrope font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeMainTab === 'fp'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black shadow-lg shadow-cyan-500/20 scale-[1.02]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Para Centros de FP</span>
          </button>
        </div>

        {/* Desktop Nav Links, Dossier Download & CTA */}
        <div className="hidden xl:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {currentLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-white/70 hover:text-[#d4af37] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Dossier Download Button (CRO Lead Magnet) */}
          <button
            onClick={onOpenDossier}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white/90 hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Dossier PDF</span>
          </button>

          <button
            onClick={onOpenContact}
            className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-manrope font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer ${
              activeMainTab === 'academias'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e6c65b] text-[#0B0C10] shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35'
                : 'bg-gradient-to-r from-cyan-400 to-blue-400 text-[#0B0C10] shadow-cyan-500/20 hover:shadow-cyan-500/35'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendar Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0C10]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          {/* Mobile 2-Tab Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#13141B] border border-white/10 mb-4">
            <button
              onClick={() => {
                onSelectTab('academias');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'academias'
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'text-white/60'
              }`}
            >
              Academias
            </button>
            <button
              onClick={() => {
                onSelectTab('fp');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-center text-xs font-bold uppercase transition-all ${
                activeMainTab === 'fp'
                  ? 'bg-cyan-400 text-black shadow-md'
                  : 'text-white/60'
              }`}
            >
              Centros FP
            </button>
          </div>

          {currentLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/80 hover:text-[#d4af37] py-2 border-b border-white/5"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span>Descargar Dossier PDF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-manrope font-black text-xs uppercase tracking-widest shadow-lg ${
                activeMainTab === 'academias'
                  ? 'bg-[#d4af37] text-black shadow-[#d4af37]/20'
                  : 'bg-cyan-400 text-black shadow-cyan-500/20'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Auditoría & Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
