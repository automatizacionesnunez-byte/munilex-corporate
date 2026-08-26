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
  variant: 'academias' | 'ingles' | 'otros';
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenContact, variant }) => {
  const copy = {
    academias: {
      intro: 'Elimina el coste de contratar desarrolladores o comprar plataformas obsoletas. Munilex te entrega un software listo para operar y comercializar hoy mismo, pensado para academias de oposiciones.',
      card2: 'Corrige ejercicios, tareas y respuestas en segundos, ideal para test, supuestos y tutorías de oposición.',
      card3: 'Todas las preguntas se generan con explicación, nivel y rúbrica para oposiciones y pruebas internas.',
      card4: 'Responde dudas del alumno de forma inmediata a cualquier hora del día o de la noche.',
      card5: 'Visualiza el rendimiento de tus grupos, detecta alumnos inactivos y exporta informes ejecutivos en un clic.',
      cta: '¿Tienes temarios propios o exclusivos?',
    },
    ingles: {
      intro: 'Elimina el coste de contratar desarrolladores o comprar plataformas obsoletas. Munilex te entrega un software listo para operar y comercializar hoy mismo, pensado para academias de inglés.',
      card2: 'Corrige ejercicios, tareas y respuestas en segundos, ideal para listening, writing, grammar y speaking.',
      card3: 'Todas las preguntas se generan con explicación, nivel y rúbrica para EPG, listening, grammar y progreso por niveles.',
      card4: 'Responde dudas del alumno de forma inmediata a cualquier hora del día o de la noche, reforzando vocabulario y gramática.',
      card5: 'Visualiza el progreso por niveles, detecta alumnos atascados y exporta informes ejecutivos en un clic.',
      cta: '¿Tienes materiales propios de inglés?',
    },
    otros: {
      intro: 'Elimina el coste de contratar desarrolladores o comprar plataformas obsoletas. Munilex te entrega un software listo para operar y comercializar hoy mismo, pensado para autoescuelas, centros de ciencias, refuerzo y formación especializada.',
      card2: 'Corrige ejercicios, tareas y respuestas en segundos, ideal para teoría, práctica, simulaciones y seguimiento del alumno.',
      card3: 'Todas las preguntas se generan con explicación, nivel y rúbrica para clases, pruebas internas y evaluaciones propias.',
      card4: 'Responde dudas del alumno de forma inmediata a cualquier hora del día o de la noche, evitando saturación del profesorado.',
      card5: 'Visualiza el rendimiento de tus grupos, detecta inactivos y exporta informes ejecutivos en un clic.',
      cta: '¿Tienes materiales o procesos propios?',
    },
  }[variant];

  return (
    <section id="bento" className="py-28 md:py-36 relative bg-[#080d15]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c7a15a]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c7a15a]/10 border border-[#c7a15a]/20 text-xs font-bold text-[#c7a15a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos de la Plataforma</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            TODO LO QUE TU CENTRO NECESITA EN <br />
            <span className="gold-gradient-text">UN SOLO ECOSISTEMA</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            {copy.intro}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 100% Marca Blanca (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-[#111827] rounded-[2.5rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-[#c7a15a]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c7a15a]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#c7a15a]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1a2435] flex items-center justify-center text-[#c7a15a] border border-white/5">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70">
                  White-Label Integral
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white mb-4 leading-snug">
                Tu Marca, Tu Dominio y Tu Identidad Visual
              </h3>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8">
                Tus alumnos nunca sabrán que hay tecnología externa. La plataforma se personaliza íntegramente con tu logo, tipografías, colores de marca y subdominio personalizado (ej. <code>campus.tucentro.es</code>).
              </p>
            </div>

            {/* Visual Graphic Mock */}
            <div className="p-5 rounded-2xl bg-[#080d15] border border-white/5 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase font-mono">Dominio</div>
                <div className="font-bold text-white mt-1">campus.tuweb.es</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase font-mono">Correos</div>
                <div className="font-bold text-white mt-1">noreply@tuweb.es</div>
              </div>
              <div className="p-3 bg-[#c7a15a]/10 rounded-xl border border-[#c7a15a]/20">
                <div className="text-[10px] text-[#c7a15a] uppercase font-mono font-bold">Look & Feel</div>
                <div className="font-bold text-white mt-1">100% Adaptado</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Corrección IA de Casos Prácticos (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-[#111827] rounded-[2.5rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-[#c7a15a]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1a2435] flex items-center justify-center text-purple-400 border border-white/5">
                  <FileCheck className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
                  IA Generativa
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white mb-4 leading-snug">
                Corrección Instantánea de Casos Prácticos
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                {copy.card2}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-300 mb-2">
                <BrainCircuit className="w-4 h-4" />
                <span>Ahorro del 85% de tiempo docente</span>
              </div>
              <p className="text-[11px] text-white/50">
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
            className="md:col-span-4 bg-[#111827] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#c7a15a]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a2435] flex items-center justify-center text-cyan-400 mb-6 border border-white/5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Simulacros Infinitos con Corrección Asistida
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                {copy.card3}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{variant === 'ingles' ? '+42 niveles, itinerarios y programas actualizados' : '+42 itinerarios, materias y programas actualizados'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{variant === 'ingles' ? 'Preguntas tipo examen, listening y ejercicios reales' : 'Preguntas tipo examen, ejercicios reales y casos prácticos'}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tutor Inteligente 24/7 (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-[#111827] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#c7a15a]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a2435] flex items-center justify-center text-[#c7a15a] mb-6 border border-white/5">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Tutor IA 24/7 Entrenado en tu Temario
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                {copy.card4}
              </p>
            </div>

            <div className="p-3.5 bg-[#080d15] rounded-xl border border-white/5 text-xs text-white/70 flex items-center justify-between">
              <span>Resolución de dudas</span>
              <span className="font-bold text-[#c7a15a]">&lt; 2 segundos</span>
            </div>
          </motion.div>

          {/* Card 5: Panel Docente y Analítica de Alumnos (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-[#111827] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#c7a15a]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a2435] flex items-center justify-center text-emerald-400 mb-6 border border-white/5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Panel Docente & Detección de Deserción
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                {copy.card5}
              </p>
            </div>

            <div className="p-3.5 bg-emerald-950/20 rounded-xl border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>+35% Retención media de matrículas</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#162132] via-[#111827] to-[#162132] border border-[#c7a15a]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c7a15a]/20 flex items-center justify-center text-[#c7a15a]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">¿Tienes temarios propios o exclusivos?</h4>
              <p className="text-xs text-white/50">{copy.cta} Podemos ingerir y securizar tus propios contenidos bajo contrato de confidencialidad.</p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-white text-black font-manrope font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer whitespace-nowrap"
          >
            Consultar Integración
          </button>
        </div>
      </div>
    </section>
  );
};

