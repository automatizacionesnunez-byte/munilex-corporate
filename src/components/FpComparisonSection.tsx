import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles, ShieldAlert, GraduationCap } from 'lucide-react';

interface FpComparisonSectionProps {
  onOpenContact: () => void;
}

export const FpComparisonSection: React.FC<FpComparisonSectionProps> = ({ onOpenContact }) => {
  const fpComparisons = [
    {
      factor: 'Simulación de Situaciones Laborales',
      traditional: 'Ejercicios teóricos en papel o debates limitados al horario lectivo',
      munilex: 'Roleplay interactivo por Voz y Texto 24/7 con evaluación por rúbrica',
    },
    {
      factor: 'Creación de Exámenes y Rúbricas',
      traditional: 'Horas del docente redactando pruebas y cuadrando criterios a mano',
      munilex: 'Generación instantánea de tests y supuestos con exportación a Moodle',
    },
    {
      factor: 'Atención y Dudas en Módulos Técnicos',
      traditional: 'Dudas acumuladas para clase; frustración del alumno en casa',
      munilex: 'Tutor IA 24/7 entrenado en el currículo oficial del módulo',
    },
    {
      factor: 'Salud Mental y Bienestar Juvenil',
      traditional: 'Deserción escolar sin señales previas de estrés o sobrecarga',
      munilex: 'Cuaderno emocional opcional para gestión del estrés y motivación',
    },
    {
      factor: 'Evidencias para Inspección Educativa',
      traditional: 'Recopilación manual de actas, entregas y registros dispersos',
      munilex: 'Dashboard centralizado con métricas de adquisición de competencias (RA)',
    },
  ];

  return (
    <section className="py-28 md:py-36 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Innovación en el Aula de FP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            MÉTODO TRADICIONAL VS. <br />
            <span className="cyan-gradient-text">SUITE MUNILEX FP</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Compara el impacto de incorporar inteligencia artificial aplicada en la formación práctica y en la gestión diaria del claustro de FP.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#111827] border border-cyan-500/20 overflow-hidden shadow-2xl shadow-black/80">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#080d15] p-6 sm:p-8 border-b border-white/10 text-xs font-black uppercase tracking-wider">
            <div className="col-span-4 text-white/40">Dimensión Formativa</div>
            <div className="col-span-4 text-red-400/80 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Enfoque Tradicional</span>
            </div>
            <div className="col-span-4 text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Suite Munilex FP</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {fpComparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-12 p-6 sm:p-7 items-center text-xs sm:text-sm hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-white mb-2 sm:mb-0">
                  {item.factor}
                </div>

                <div className="col-span-6 sm:col-span-4 text-white/45 flex items-start gap-2 pr-4">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                <div className="col-span-6 sm:col-span-4 font-semibold text-white flex items-start gap-2 bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/20">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item.munilex}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-8 bg-[#080d15] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-white text-base">¿Quieres ver una simulación adaptada a tus ciclos?</div>
              <div className="text-xs text-white/50">Organizamos una sesión demostrativa para tu equipo directivo o departamento.</div>
            </div>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-manrope font-black text-xs uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              Solicitar Demostración
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
