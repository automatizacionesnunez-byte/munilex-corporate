import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded popup */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl bg-white border border-slate-200 p-5 shadow-2xl shadow-slate-900/15 text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8] animate-ping" />
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Chat Directo Munilex</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-900 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">
            ¿Tienes dudas sobre la plataforma o quieres agendar una demo rápida? Habla directamente con los fundadores:
          </p>

          <div className="space-y-2.5">
            <a
              href="https://wa.me/34649490580?text=Hola%20Francisco,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20planes%20de%20Munilex%20Corporate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-[#1d4ed8]/10 border border-slate-200 hover:border-[#1d4ed8]/30 transition-all text-slate-900 group"
            >
              <div>
                <div className="font-bold text-xs group-hover:text-[#1d4ed8] transition-colors">
                  Francisco de Paula Marín
                </div>
                <div className="text-[10px] text-slate-500">Director Comercial / CMO</div>
              </div>
              <Phone className="w-4 h-4 text-[#1d4ed8]" />
            </a>

            <a
              href="https://wa.me/34605392912?text=Hola%20Jos%C3%A9%20Mar%C3%ADa,%20quisiera%20consultar%20dudas%20t%C3%A9cnicas%20sobre%20la%20plataforma%20Munilex%20Corporate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-[#1d4ed8]/10 border border-slate-200 hover:border-[#1d4ed8]/30 transition-all text-slate-900 group"
            >
              <div>
                <div className="font-bold text-xs group-hover:text-[#1d4ed8] transition-colors">
                  José María Núñez Mejías
                </div>
                <div className="text-[10px] text-slate-500">Director Técnico / CTO</div>
              </div>
              <Phone className="w-4 h-4 text-[#1d4ed8]" />
            </a>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white flex items-center justify-center shadow-2xl shadow-blue-500/25 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};
