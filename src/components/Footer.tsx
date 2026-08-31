import { ShieldCheck, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Info & Legal Entity (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1d4ed8] flex items-center justify-center font-manrope font-black text-white text-base">
                M
              </div>
              <span className="font-manrope font-black text-lg text-slate-900 tracking-tight">
                MUNILEX CORPORATE
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-xs">
              IA corporativa para academias de oposiciones que quieren lanzar una experiencia propia, clara y escalable.
            </p>
            
            <div className="space-y-1.5 pt-2 text-[11px] text-slate-600">
              <div className="font-bold text-slate-900">Munilex Academy, S.L.</div>
              <div>CIF: B88655980</div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#1d4ed8]" />
                <span>Madrid, España</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#1d4ed8] font-semibold text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Infraestructura & Datos 100% en la Unión Europea</span>
            </div>
          </div>

          {/* Col 2: Soluciones (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase text-slate-900 tracking-wider">
              Soluciones
            </div>
            <ul className="space-y-2">
              <li><a href="#bento" className="hover:text-[#1d4ed8] transition-colors">Identidad propia</a></li>
              <li><a href="#bento" className="hover:text-[#1d4ed8] transition-colors">Corrección IA Casos</a></li>
              <li><a href="#bento" className="hover:text-[#1d4ed8] transition-colors">Simulacros Oficiales</a></li>
              <li><a href="#bento" className="hover:text-[#1d4ed8] transition-colors">Tutor IA 24/7</a></li>
              <li><a href="#team" className="hover:text-[#1d4ed8] transition-colors">Equipo & Juristas</a></li>
            </ul>
          </div>

          {/* Col 3: Planes & Seguridad (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase text-slate-900 tracking-wider">Planes</div>
            <ul className="space-y-2">
              <li><a href="#plans" className="hover:text-[#1d4ed8] transition-colors">Plan Iniciación</a></li>
              <li><a href="#plans" className="hover:text-[#1d4ed8] transition-colors">Plan Profesional</a></li>
              <li><a href="#plans" className="hover:text-[#1d4ed8] transition-colors">Plan A Medida</a></li>
              <li><a href="#security" className="hover:text-[#1d4ed8] transition-colors">Seguridad & ENS</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Directo y Ecosistema (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase text-slate-900 tracking-wider">
              Contacto Directo
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/34649490580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>Francisco Marín: +34 649 49 05 80</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/34605392912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>José María Núñez: +34 605 39 29 12</span>
                </a>
              </li>
              <li>
                <a href="mailto:administracion@munilex.es" className="flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                  <span>administracion@munilex.es</span>
                </a>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <a href="https://munilexacademy.es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-[#1d4ed8] transition-colors">
                  <span>Munilex Academy</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Munilex Academy, S.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="/legal" className="hover:text-slate-900 transition-colors">Aviso Legal</a>
            <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacidad</a>
            <a href="/cookies" className="hover:text-slate-900 transition-colors">Cookies</a>
            <a href="#security" className="hover:text-slate-900 transition-colors">ENS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};



