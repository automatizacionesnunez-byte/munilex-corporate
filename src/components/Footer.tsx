import { ShieldCheck, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 pb-12 text-white/50 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info & Legal Entity (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#6f7f64] flex items-center justify-center font-manrope font-black text-black text-base">
                M
              </div>
              <span className="font-manrope font-black text-lg text-white tracking-tight">
                MUNILEX CORPORATE
              </span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed text-xs">
              La plataforma corporativa de IA para academias, centros de FP, academias de inglés y otros centros especializados en España.
            </p>
            
            <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
              <div className="font-bold text-white">Munilex Academy, S.L.</div>
              <div>CIF: B88655980</div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#6f7f64]" />
                <span>Madrid, España</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Infraestructura & Datos 100% en la Unión Europea</span>
            </div>
          </div>

          {/* Col 2: Soluciones (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">
              Soluciones
            </div>
            <ul className="space-y-2">
              <li><a href="#bento" className="hover:text-[#6f7f64] transition-colors">Identidad propia</a></li>
              <li><a href="#bento" className="hover:text-[#6f7f64] transition-colors">Corrección IA Casos</a></li>
              <li><a href="#bento" className="hover:text-[#6f7f64] transition-colors">Simulacros Oficiales</a></li>
              <li><a href="#bento" className="hover:text-[#6f7f64] transition-colors">Tutor IA 24/7</a></li>
              <li><a href="#team" className="hover:text-[#6f7f64] transition-colors">Equipo & Juristas</a></li>
            </ul>
          </div>

          {/* Col 3: Tarifas & Simulación (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">
              Tarifas & ROI
            </div>
            <ul className="space-y-2">
              <li><a href="#plans" className="hover:text-[#6f7f64] transition-colors">Plan Iniciación</a></li>
              <li><a href="#plans" className="hover:text-[#6f7f64] transition-colors">Plan Profesional</a></li>
              <li><a href="#plans" className="hover:text-[#6f7f64] transition-colors">Plan A Medida</a></li>
              <li><a href="#calculator" className="hover:text-[#6f7f64] transition-colors">Calculadora ROI</a></li>
              <li><a href="#security" className="hover:text-[#6f7f64] transition-colors">Seguridad & ENS</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Directo y Ecosistema (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase text-white tracking-wider">
              Contacto Directo
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/34649490580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Francisco Marín: +34 649 49 05 80</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/34605392912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>José María Núñez: +34 605 39 29 12</span>
                </a>
              </li>
              <li>
                <a href="mailto:administracion@munilex.es" className="flex items-center gap-1.5 hover:text-[#6f7f64] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#6f7f64] shrink-0" />
                  <span>administracion@munilex.es</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a href="https://munilexacademy.es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/70 hover:text-[#6f7f64] transition-colors">
                  <span>Munilex Academy (Alumnos)</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} Munilex Academy, S.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="#aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#privacidad" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
            <a href="#security" className="hover:text-white transition-colors">ENS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


