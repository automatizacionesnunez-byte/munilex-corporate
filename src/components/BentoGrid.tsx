import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Sparkles, 
  FileCheck, 
  Bot, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  TrendingUp,
  BrainCircuit,
  Lock
} from 'lucide-react';

interface BentoGridProps {
  onOpenContact: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenContact }) => {
  return (
    <section id="bento" className="py-28 md:py-36 relative bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos para Oposiciones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            TODO LO QUE TU ACADEMIA NECESITA EN <br />
            <span className="gold-gradient-text">UNA SOLA PLATAFORMA</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Elimina el coste de contratar desarrolladores o comprar plataformas obsoletas. Munilex te entrega un software listo para operar y comercializar hoy mismo, pensado para academias de oposiciones.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Identidad propia (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1d4ed8]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#1d4ed8]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] border border-slate-200">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
                  Identidad propia
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-slate-900 mb-4 leading-snug">
                Tu Marca, Tu Dominio y Tu Identidad Visual
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                La experiencia se presenta como parte de tu centro: logo, tipografías, colores corporativos y subdominio personalizado (ej. <code>campus.tucentro.es</code>).
              </p>
            </div>

            {/* Visual Graphic Mock */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Dominio</div>
                <div className="font-bold text-slate-900 mt-1">campus.tuweb.es</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Correos</div>
                <div className="font-bold text-slate-900 mt-1">noreply@tuweb.es</div>
              </div>
                <div className="p-3 bg-[#1d4ed8]/10 rounded-xl border border-[#1d4ed8]/20">
                  <div className="text-[10px] text-[#1d4ed8] uppercase font-mono font-bold">Look & Feel</div>
                <div className="font-bold text-slate-900 mt-1">100% Adaptado</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Corrección IA de Casos Prácticos (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-600 border border-slate-200">
                  <FileCheck className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-200 text-xs font-semibold text-sky-600">
                  Evaluación y apoyo IA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-slate-900 mb-4 leading-snug">
                Corrección Instantánea de Casos Prácticos
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Corrige ejercicios, tareas y respuestas en segundos, ideal para test, supuestos y tutorías de oposición.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/20 border border-sky-200">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 mb-2">
                <BrainCircuit className="w-4 h-4" />
                <span>El equipo revisa, no empieza de cero</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Los preparadores revisan diagnósticos automáticos en lugar de corregir desde cero.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Generador Adaptativo de Tests con Justificación (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] mb-6 border border-slate-200">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-slate-900 mb-3">
                Simulacros Infinitos con Corrección Asistida
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Todas las preguntas se generan con explicación, nivel y rúbrica para oposiciones y pruebas internas.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>+42 itinerarios, materias y programas actualizados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                <span>Preguntas tipo examen, ejercicios reales y casos prácticos</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tutor Inteligente 24/7 (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] mb-6 border border-slate-200">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-slate-900 mb-3">
                Tutor IA 24/7 Entrenado en tu Temario
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Responde dudas del alumno de forma inmediata a cualquier hora del día o de la noche.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Resolución de dudas</span>
              <span className="font-bold text-[#1d4ed8]">Siempre disponible</span>
            </div>
          </motion.div>

          {/* Card 5: Panel Docente y Analítica de Alumnos (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden group hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] mb-6 border border-slate-200">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-slate-900 mb-3">
                Panel Docente & Detección de Deserción
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Visualiza el rendimiento de tus grupos, detecta alumnos inactivos y exporta informes ejecutivos en un clic.
              </p>
            </div>

            <div className="p-3.5 bg-[#1d4ed8]/10 rounded-xl border border-[#1d4ed8]/20 text-xs text-[#1d4ed8] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>Alertas para actuar antes del abandono</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#1d4ed8]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-900/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1d4ed8]/10 flex items-center justify-center text-[#1d4ed8]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">¿Tienes temarios propios o exclusivos?</h4>
              <p className="text-xs text-slate-500">Podemos ingerir y securizar tus propios contenidos bajo contrato de confidencialidad.</p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-[#1d4ed8] text-white font-manrope font-bold text-xs uppercase tracking-wider hover:bg-[#2563eb] transition-all cursor-pointer whitespace-nowrap"
          >
            Consultar Integración
          </button>
        </div>
      </div>
    </section>
  );
};



