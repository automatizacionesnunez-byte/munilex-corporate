import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Building2, Clock, ShieldCheck, Layers } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-manrope font-black tracking-tight leading-[1.02] text-slate-900 uppercase mb-6"
          >
            IA PARA TU <span className="gold-gradient-text block sm:inline">ACADEMIA DE OPOSICIONES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
          >
            Prepara, corrige y acompaña a tus alumnos con una plataforma propia, clara y fácil de vender.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-slate-900 font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Solicitar demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#plans"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-manrope font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#1d4ed8]/30 shadow-sm shadow-slate-900/5"
            >
              <span>Ver planes</span>
              <ChevronRight className="w-4 h-4 text-[#1d4ed8]" />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm shadow-slate-900/5">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Puesta en marcha acompañada</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm shadow-slate-900/5">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Datos y control en la UE</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm shadow-slate-900/5">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Escala por alumnos activos</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl shadow-slate-900/5"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1d4ed8] mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-manrope font-black text-slate-900 mb-2">Marca propia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Tu dominio, tu identidad y tu experiencia de alumno.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1d4ed8] mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-manrope font-black text-slate-900 mb-2">Corrección y tests</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Simulacros, supuestos y feedback automático para avanzar más rápido.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1d4ed8] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-manrope font-black text-slate-900 mb-2">Control y seguridad</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Materiales protegidos, soporte continuo y despliegue simple.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            {[
              { value: '10-14 Días', label: 'Puesta en marcha', icon: <Clock className="w-4 h-4 text-[#1d4ed8]" /> },
              { value: '+42', label: 'Programas', icon: <Layers className="w-4 h-4 text-[#1d4ed8]" /> },
              { value: '100%', label: 'Marca propia', icon: <Building2 className="w-4 h-4 text-[#1d4ed8]" /> },
              { value: 'UE', label: 'Datos y soporte', icon: <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" /> },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-black font-manrope text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
