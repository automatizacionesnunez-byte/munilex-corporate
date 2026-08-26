import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  FileText, 
  Bot, 
  ShieldCheck, 
  Layers, 
  Clock,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'case' | 'test' | 'tutor'>('case');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#d4af37]/30 text-xs font-semibold text-[#f3e5ab] shadow-lg shadow-[#d4af37]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
            <span className="text-[#d4af37] font-black uppercase tracking-wider text-[10px]">Nueva Generación B2B</span>
            <span className="text-white/30">•</span>
            <span>Marca Blanca & Ecosistema de IA Educativa</span>
          </motion.div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-manrope font-black tracking-tight leading-[1.02] text-white uppercase mb-8"
          >
            TU MARCA.{' '}
            <span className="gold-gradient-text block sm:inline">
              NUESTRA IA.
            </span>
            <span className="block text-lg sm:text-2xl font-bold tracking-normal text-white/80 mt-3 normal-case">
              Software de Marca Blanca e Inteligencia Artificial para Academias de Oposiciones
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed font-normal mb-10"
          >
            Digitaliza tu academia de oposiciones con <strong className="text-white font-semibold">plataforma propia en 14 días</strong>. Proporciona a tus opositores simulacros adaptativos con justificación jurídica oficial (LPAC y leyes autonómicas), corrección de casos prácticos con IA y tutor 24/7 bajo tu propio logotipo y dominio web.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e6c65b] to-[#c79e27] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Solicitar Demo & Auditoría Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-manrope font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#d4af37]/40"
            >
              <span>Calcular Costes & Margen</span>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
            </a>
          </motion.div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-medium pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Despliegue llave en mano</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Sin costes de servidores propios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Tarifas decrecientes por volumen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Cumplimiento RGPD & EU AI Act</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulation Card (Bento-style preview) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-[2.5rem] bg-[#13141B] border border-white/10 p-4 sm:p-7 shadow-2xl shadow-black/80 relative overflow-hidden"
        >
          {/* Header Bar of Simulator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-white/40 font-mono ml-2">app.tuacademia.es — Munilex Core v4.2</span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center bg-[#0B0C10] p-1.5 rounded-xl border border-white/5">
              <button
                onClick={() => setActiveTab('case')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'case'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Corrector Casos IA</span>
              </button>
              <button
                onClick={() => setActiveTab('test')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'test'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Generador Tests</span>
              </button>
              <button
                onClick={() => setActiveTab('tutor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'tutor'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tutor Jurídico 24/7</span>
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="pt-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'case' && (
                <motion.div
                  key="case"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-6 bg-[#0B0C10] p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase text-[#d4af37] tracking-wider">Respuesta Alumno</span>
                      <span className="text-[11px] text-white/40">Supuesto Práctico AGE #14</span>
                    </div>
                    <p className="text-sm text-white/70 italic leading-relaxed">
                      "El recurso de alzada procede ante el órgano superior jerárquico en el plazo de 1 mes según el Art. 122 LPAC. En caso de silencio administrativo desestimatorio, el plazo para interponerlo no vence conforme a jurisprudencia constitucional..."
                    </p>
                  </div>

                  <div className="md:col-span-6 bg-[#181A24] p-6 rounded-2xl border border-[#d4af37]/30 shadow-lg relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#d4af37]" />
                        <span className="text-xs font-bold text-white">Evaluación Inteligente Munilex</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                        9.2 / 10.0
                      </span>
                    </div>
                    <div className="space-y-3 text-xs text-white/70">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Fundamentación jurídica exacta en Ley 39/2015 y STC 52/2014.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Estructura formal adecuada para examen oficial.</span>
                      </div>
                      <div className="p-3 bg-[#0B0C10] rounded-xl border border-white/5 text-[11px] text-[#f3e5ab]">
                        💡 <strong>Consejo del Tutor IA:</strong> Reforzar mención expresa a los actos que agotan la vía administrativa (Art. 114 LPAC) para asegurar la máxima puntuación en tribunal.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'test' && (
                <motion.div
                  key="test"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#0B0C10] p-6 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                      Pregunta Adaptativa de Examen Oficial
                    </span>
                    <span className="text-xs text-white/40">Dificultad: Nivel Tribunal</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-4">
                    ¿Cuál es el plazo máximo para la notificación de la resolución expresa en un procedimiento administrativo cuando la norma reguladora no fija ninguno?
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      A) 1 mes desde el inicio del procedimiento
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs text-emerald-200 font-bold flex items-center justify-between">
                      <span>B) 3 meses desde la fecha del acuerdo de inicio</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      C) 6 meses improrrogables
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      D) 20 días hábiles
                    </div>
                  </div>
                  <div className="p-3 bg-[#13141B] rounded-xl border border-white/5 text-xs text-white/60">
                    <span className="font-bold text-[#d4af37]">Justificación Jurídica:</span> Artículo 21.3 de la Ley 39/2015 (LPACAP). Cuando las normas reguladoras no fijen plazo máximo, este será de tres meses.
                  </div>
                </motion.div>
              )}

              {activeTab === 'tutor' && (
                <motion.div
                  key="tutor"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex gap-3 max-w-lg">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      A
                    </div>
                    <div className="p-4 rounded-2xl bg-[#0B0C10] border border-white/5 text-xs text-white/80">
                      ¿Qué diferencia hay entre la nulidad de pleno derecho y la anulabilidad según la LPAC para mi examen de Gestión AGE?
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-2xl ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-xs font-black text-black shrink-0">
                      IA
                    </div>
                    <div className="p-4 rounded-2xl bg-[#181A24] border border-[#d4af37]/30 text-xs text-white/90 space-y-2">
                      <p>
                        La <strong>Nulidad (Art. 47 LPAC)</strong> es insubsanable, produce efectos <em>ex tunc</em> (desde el origen) y puede ser declarada de oficio en cualquier momento sin plazo de caducidad.
                      </p>
                      <p>
                        La <strong>Anulabilidad (Art. 48 LPAC)</strong> es subsanable por convalidación (Art. 52), produce efectos <em>ex nunc</em> y su impugnación prescribe según los plazos legales de recurso ordinario.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { value: "10-14 Días", label: "Tiempo de Entrega & Despliegue", icon: <Clock className="w-4 h-4 text-[#d4af37]" /> },
            { value: "+42", label: "Temarios de Oposiciones Listos", icon: <Layers className="w-4 h-4 text-[#d4af37]" /> },
            { value: "100%", label: "Marca Blanca (Tu Logo y Dominio)", icon: <Building2 className="w-4 h-4 text-[#d4af37]" /> },
            { value: "ENS & AI Act", label: "Máxima Seguridad Normativa", icon: <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass-panel border border-white/5 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black font-manrope text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-xs text-white/45 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
