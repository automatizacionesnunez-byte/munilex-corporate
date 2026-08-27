import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Users, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  Mic, 
  HeartHandshake, 
  LayoutDashboard,
  BrainCircuit
} from 'lucide-react';

interface FpBentoGridProps {
  onOpenContact: () => void;
}

export const FpBentoGrid: React.FC<FpBentoGridProps> = ({ onOpenContact }) => {
  return (
    <section id="fp-features" className="py-28 md:py-36 relative bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos de la Suite FP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            TECNOLOGÍA PEDAGÓGICA Y <br />
            <span className="cyan-gradient-text">HERRAMIENTAS PARA EL CLAUSTRO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Una suite modular que potencia las competencias profesionales del alumno y reduce la sobrecarga de trabajo del profesorado de FP.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Roleplay Laboral por Voz y Texto (Span 7) - EL PLATO FUERTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-[#1d4ed8]/30 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between shadow-2xl shadow-blue-500/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1d4ed8]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#1d4ed8]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] border border-[#1d4ed8]/20 shadow-lg shadow-blue-500/10">
                  <Mic className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/20 border border-[#1d4ed8]/40 text-xs font-black text-[#1d4ed8] uppercase tracking-wider">
                  ⭐ Plato Fuerte
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-slate-900 mb-4 leading-snug">
                Simulaciones de Roleplay (Voz y Texto)
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Los alumnos practican entrevistas laborales, atención al paciente, soporte de software o resolución de incidencias en taller hablando o escribiendo directamente con la IA. Evaluación inmediata de tono, coherencia técnica y habilidades blandas (soft skills).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Modo Audio</div>
                <div className="font-bold text-slate-900 mt-1">Interacción por Voz</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Modo Chat</div>
                <div className="font-bold text-slate-900 mt-1">Casos por Escrito</div>
              </div>
              <div className="p-3 bg-[#1d4ed8]/10 rounded-xl border border-[#1d4ed8]/20">
                <div className="text-[10px] text-[#1d4ed8] uppercase font-mono font-bold">Rúbrica Oficial</div>
                <div className="font-bold text-slate-900 mt-1">Calificación Automática</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Generación de Exámenes y Flashcards (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#2563eb]/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] border border-slate-200">
                  <Layers className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#1d4ed8]/20 text-xs font-semibold text-[#1d4ed8]">
                  Evaluación Curricular
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-slate-900 mb-4 leading-snug">
                Exámenes Tipo Test y Flashcards
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Crea baterías infinitas de preguntas test con justificación y tarjetas de repaso espaciado (flashcards) para afianzar conceptos clave de cada módulo técnico.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1d4ed8]/10 border border-[#1d4ed8]/20">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1d4ed8] mb-1">
                <BrainCircuit className="w-4 h-4" />
                <span>Repaso Activo y Memorización</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Los alumnos dominan la terminología técnica y los protocolos oficiales en la mitad de tiempo.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Dashboard de Control Docente (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] mb-6 border border-slate-200">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-slate-900 mb-3">
                Dashboard de Control del Profesor
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Visualiza el progreso individual y grupal de los alumnos, detecta los módulos con mayor dificultad y exporta notas y evidencias para jefatura de estudios.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>Métricas de acierto por competencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>Detección de alumnos descolgados</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Calendario Escolar y Agenda de Exámenes (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] mb-6 border border-slate-200">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-slate-900 mb-3">
                Calendario & Agenda de Eventos
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Sincronización de fechas de exámenes parciales, entregas de prácticas de taller, visitas a empresas y tutorías fijadas a nivel interno del centro.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Sincronización Docente-Alumno</span>
              <span className="font-bold text-[#1d4ed8]">Automática</span>
            </div>
          </motion.div>

          {/* Card 5: Cuaderno Emocional & Salud Mental (Span 4) - OPCIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-sky-300/20 relative overflow-hidden group hover:border-sky-300/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-600 mb-6 border border-sky-300/20">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-manrope font-extrabold text-slate-900">
                  Cuaderno Emocional
                </h3>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-sky-500/20 text-sky-600 rounded-md">Opcional</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Cuidado de la salud mental de los jóvenes: herramientas guiadas de gestión del estrés, motivación ante exámenes y apoyo al departamento de orientación.
              </p>
            </div>

            <div className="p-3.5 bg-sky-50/20 rounded-xl border border-sky-300/20 text-xs text-sky-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Salud mental y bienestar juvenil</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA bar for FP */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#1d4ed8]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1d4ed8]/20 flex items-center justify-center text-[#1d4ed8]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">¿Quieres ver la suite adaptada a tus ciclos formativos?</h4>
              <p className="text-xs text-slate-500">Elaboramos una propuesta personalizada según el número de alumnos y familias profesionales de tu centro.</p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-[#1d4ed8] text-white font-manrope font-bold text-xs uppercase tracking-wider hover:bg-[#bfdbfe] transition-all cursor-pointer whitespace-nowrap"
          >
            Solicitar Demostración en Vivo
          </button>
        </div>
      </div>
    </section>
  );
};


