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
    <section id="bento" className="py-28 md:py-36 relative bg-[#0B0C10]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos de la Plataforma</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            TODO LO QUE TU ACADEMIA NECESITA EN <br />
            <span className="gold-gradient-text">UN SOLO ECOSISTEMA</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Elimina el coste de contratar desarrolladores o comprar plataformas obsoletas. Munilex te entrega un software listo para comercializar hoy mismo.
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
            className="md:col-span-7 bg-[#13141B] rounded-[2.5rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#d4af37]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1E202C] flex items-center justify-center text-[#d4af37] border border-white/5">
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
                Tus alumnos nunca sabrán que hay tecnología externa. La plataforma se personaliza íntegramente con tu logo, tipografías, colores de marca y subdominio personalizado (ej. <code>campus.tuacademia.es</code>).
              </p>
            </div>

            {/* Visual Graphic Mock */}
            <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/5 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase font-mono">Dominio</div>
                <div className="font-bold text-white mt-1">campus.tuweb.es</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase font-mono">Correos</div>
                <div className="font-bold text-white mt-1">noreply@tuweb.es</div>
              </div>
              <div className="p-3 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20">
                <div className="text-[10px] text-[#d4af37] uppercase font-mono font-bold">Look & Feel</div>
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
            className="md:col-span-5 bg-[#13141B] rounded-[2.5rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1E202C] flex items-center justify-center text-purple-400 border border-white/5">
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
                Corrige supuestos complejos de oposiciones en segundos, evaluando fundamentación jurídica, terminología legal y estructura formal como un tribunal.
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
            className="md:col-span-4 bg-[#13141B] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E202C] flex items-center justify-center text-cyan-400 mb-6 border border-white/5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Simulacros Infinitos con Justificación Legal
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Todas las preguntas cuentan con cita legal exacta (Ley, Artículo y Epígrafe). El algoritmo detecta los puntos débiles del opositor y adapta la dificultad.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>+42 Temarios oficiales actualizados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Preguntas trampa y casos oficiales</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tutor Inteligente 24/7 (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 bg-[#13141B] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E202C] flex items-center justify-center text-[#d4af37] mb-6 border border-white/5">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Tutor IA 24/7 Entrenado en tu Temario
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Responde dudas doctrinales y normativas de forma inmediata a cualquier hora del día o de la noche, evitando la frustración del opositor en fin de semana.
              </p>
            </div>

            <div className="p-3.5 bg-[#0B0C10] rounded-xl border border-white/5 text-xs text-white/70 flex items-center justify-between">
              <span>Resolución de dudas</span>
              <span className="font-bold text-[#d4af37]">&lt; 2 segundos</span>
            </div>
          </motion.div>

          {/* Card 5: Panel Docente y Analítica de Alumnos (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 bg-[#13141B] rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E202C] flex items-center justify-center text-emerald-400 mb-6 border border-white/5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-manrope font-extrabold text-white mb-3">
                Panel Docente & Detección de Deserción
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Visualiza el rendimiento de tus grupos, detecta alumnos inactivos antes de que se den de baja y exporta informes ejecutivos en un clic.
              </p>
            </div>

            <div className="p-3.5 bg-emerald-950/20 rounded-xl border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>+35% Retención media de matrículas</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#181A24] via-[#13141B] to-[#181A24] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">¿Tienes temarios propios o exclusivos?</h4>
              <p className="text-xs text-white/50">Podemos ingerir y securizar tus propios contenidos bajo contrato de confidencialidad.</p>
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
