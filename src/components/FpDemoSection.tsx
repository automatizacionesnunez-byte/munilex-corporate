import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Laptop, PhoneCall } from 'lucide-react';

interface FpDemoSectionProps {
  onOpenContact: () => void;
}

export const FpDemoSection: React.FC<FpDemoSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: '01',
      title: 'Sesión Diagnóstica y Análisis Curricular',
      desc: 'Analizamos las familias profesionales (Sanidad, IT, Administración, etc.), ciclos y número de alumnos de tu centro para adaptar los simuladores de roleplay y el temario.',
      icon: <Laptop className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      number: '02',
      title: 'Despliegue de un Entorno Piloto en Vivo',
      desc: 'Habilitamos un acceso de prueba con tu identidad para que el equipo directivo y los jefes de departamento prueben el roleplay de voz/texto y la generación de exámenes.',
      icon: <Sparkles className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      number: '03',
      title: 'Propuesta Personalizada y Acompañamiento',
      desc: 'Elaboramos una propuesta a medida ajustada a la realidad de tu centro público, concertado o privado, con formación incluida para todo el claustro de profesores.',
      icon: <PhoneCall className="w-6 h-6 text-[#1d4ed8]" />,
    },
  ];

  return (
    <section id="fp-plans" className="py-28 md:py-36 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Implementación a Medida de tu Centro</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            AGENDA UNA DEMOSTRACIÓN <br />
            <span className="cyan-gradient-text">PILOTO PARA TU INSTITUTO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada centro de FP es único. Diseñamos la solución según tus familias profesionales, necesidades de FP Dual y volumen de alumnos.
          </p>
        </div>

        {/* 3 Step Process Box */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#1d4ed8]/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-manrope font-black text-[#1d4ed8]/40 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-manrope font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Action Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[3rem] p-8 sm:p-14 bg-white border border-[#1d4ed8]/30 shadow-2xl shadow-blue-500/10 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1d4ed8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-manrope font-black text-slate-900 uppercase tracking-tight">
              ¿Listo para transformar la formación práctica de tu centro?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Solicita una sesión de 20 minutos con nuestro equipo pedagógico y tecnológico. Te mostraremos cómo los alumnos practican situaciones reales de empresa y cómo el profesorado ahorra horas de gestión.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <span>Solicitar Demostración en Directo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>Sin compromiso de permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>Formación docente inicial incluida</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" />
                <span>100% Adaptado al marco de tu CCAA</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


