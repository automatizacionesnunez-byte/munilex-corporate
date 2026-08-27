import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Layers, 
  MessageSquare,
  Mic,
  Calendar,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

interface FpHeroProps {
  onOpenContact: () => void;
}

export const FpHero: React.FC<FpHeroProps> = ({ onOpenContact }) => {
  const [activeFpTab, setActiveFpTab] = useState<'roleplay' | 'tutor' | 'exam' | 'emotional'>('roleplay');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#1d4ed8]/30 text-xs font-semibold text-slate-600 shadow-lg shadow-blue-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-ping" />
            <span className="text-[#1d4ed8] font-black uppercase tracking-wider text-[10px]">EdTech FP & Dual</span>
            <span className="text-slate-400">•</span>
            <span>FP Básica, Grado Medio y Grado Superior</span>
          </motion.div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-manrope font-black tracking-tight leading-[1.02] text-slate-900 uppercase mb-8"
          >
            LA FP DEL FUTURO{' '}
            <span className="cyan-gradient-text block sm:inline">
              CON INTELIGENCIA ARTIFICIAL
            </span>
            <span className="block text-lg sm:text-2xl font-bold tracking-normal text-slate-700 mt-3 normal-case">
              Plataforma Educativa para Institutos y Centros de Formación Profesional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-10"
          >
            La plataforma integral para centros de FP: <strong className="text-slate-900 font-semibold">Simulaciones de Roleplay laboral por voz y texto</strong>, tutoría curricular 24/7, generador de exámenes tipo test y flashcards, panel docente y acompañamiento emocional para la prevención del estrés escolar.
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
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Agendar Demo Piloto para mi Centro</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#fp-features"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-manrope font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#1d4ed8]/30"
            >
              <span>Explorar Módulos & Roleplay</span>
              <ChevronRight className="w-4 h-4 text-[#1d4ed8]" />
            </a>
          </motion.div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Roleplay por Voz & Texto</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Flashcards & Tests Curriculares</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Dashboard & Calendario del Profesor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Módulo de Bienestar Emocional</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulation Card for FP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-[2.5rem] bg-white border border-[#1d4ed8]/20 p-4 sm:p-7 shadow-2xl shadow-slate-900/5 relative overflow-hidden"
        >
          {/* Header Bar of Simulator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#1d4ed8]/80" />
              <div className="w-3 h-3 rounded-full bg-[#1d4ed8]/80" />
              <div className="w-3 h-3 rounded-full bg-sky-400/80" />
              <span className="text-xs text-slate-400 font-mono ml-2">campus-fp.tucentro.es — Munilex FP Suite</span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap items-center bg-slate-50 p-1.5 rounded-xl border border-slate-200 gap-1">
              <button
                onClick={() => setActiveFpTab('roleplay')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFpTab === 'roleplay'
                    ? 'bg-[#1d4ed8] text-black shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Roleplay Voz / Texto</span>
              </button>
              <button
                onClick={() => setActiveFpTab('tutor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFpTab === 'tutor'
                    ? 'bg-[#1d4ed8] text-black shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Tutoría & Flashcards</span>
              </button>
              <button
                onClick={() => setActiveFpTab('exam')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFpTab === 'exam'
                    ? 'bg-[#1d4ed8] text-black shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Generador Exámenes</span>
              </button>
              <button
                onClick={() => setActiveFpTab('emotional')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeFpTab === 'emotional'
                    ? 'bg-sky-400 text-black shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Cuaderno Emocional</span>
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="pt-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeFpTab === 'roleplay' && (
                <motion.div
                  key="roleplay"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        <span className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-wider">Simulación en Vivo (Audio & Chat)</span>
                      </div>
                      <span className="text-[11px] text-slate-400">Grado Superior Sanidad / Farmacia</span>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 bg-slate-50 rounded-xl text-slate-700 border border-slate-200 flex items-start gap-2.5">
                        <Mic className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#1d4ed8] block mb-0.5">IA (Paciente / Cliente en mostrador):</strong>
                          "Tengo dolor agudo de estómago y fiebre desde anoche. Deme un antibiótico fuerte sin receta para que se me pase rápido."
                        </div>
                      </div>
                      <div className="p-3.5 bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 rounded-xl text-slate-700">
                        <strong className="text-slate-900 block mb-0.5">Alumno FP (Respuesta verbal grabada):</strong>
                        "No podemos dispensar antibióticos sin prescripción facultativa. Ante fiebre y dolor agudo, le aconsejo acudir a urgencias de su centro de salud para diagnóstico médico."
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-[#1d4ed8]/30 shadow-lg relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#1d4ed8]" />
                        <span className="text-xs font-bold text-slate-900">Evaluación Automática por Rúbrica</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1d4ed8]/20 text-[#1d4ed8] font-bold text-xs">
                        9.8 / 10.0
                      </span>
                    </div>
                    <div className="space-y-3 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>Cumplimiento estricto de la Ley de Garantías y Uso Racional de Medicamentos.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>Trato empático, asertivo y derivación clínica adecuada.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                        🎤 <strong>Análisis de Voz:</strong> Tono calmado, fluidez de 135 ppm y sin titubeos en la negativa legal.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeFpTab === 'tutor' && (
                <motion.div
                  key="tutor"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                    <div className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-wider">
                      Tutoría 24/7 del Temario Oficial
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-700">
                      <div className="text-slate-400 mb-1">Alumno FP (DAM):</div>
                      "¿Qué diferencia hay entre una clave primaria (Primary Key) y una clave foránea (Foreign Key) en SQL?"
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-[#1d4ed8]/20 rounded-xl text-xs text-slate-700">
                      <div className="text-[#1d4ed8] font-bold mb-1">Tutor IA:</div>
                      La <strong>Primary Key</strong> identifica unívocamente cada fila de una tabla (única y NOT NULL). La <strong>Foreign Key</strong> establece una relación referencial hacia la clave primaria de otra tabla para garantizar la integridad referencial.
                    </div>
                  </div>

                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-900">Flashcard de Repaso Espaciado</span>
                        <span className="text-[10px] bg-[#1d4ed8]/20 text-[#1d4ed8] px-2 py-0.5 rounded-full font-mono">Repaso #3</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mb-4">
                        <div className="text-[#10b981] font-bold mb-1">¿Qué principio SOLID establece que una clase debe tener una única razón para cambiar?</div>
                        <div className="text-[#1d4ed8] font-semibold mt-2">→ Principio de Responsabilidad Única (SRP).</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-red-500/20 text-red-300 rounded-lg text-xs font-bold">Difícil</button>
                      <button className="flex-1 py-2 bg-[#1d4ed8]/20 text-[#1d4ed8] rounded-lg text-xs font-bold">Regular</button>
                      <button className="flex-1 py-2 bg-[#1d4ed8]/20 text-[#1d4ed8] rounded-lg text-xs font-bold">Fácil (Dominado)</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeFpTab === 'exam' && (
                <motion.div
                  key="exam"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                      Generador de Exámenes Curriculares para Docentes
                    </span>
                    <span className="text-xs text-slate-400">Familia: Administración y Gestión / Finanzas</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-700 space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="font-bold text-slate-900">Módulo: Gestión Financiera · Evaluación 2ª</span>
                      <span className="text-[#1d4ed8] font-mono text-[11px]">Generado en 2.3s</span>
                    </div>
                    <p className="text-slate-600">
                      Incluye 20 preguntas tipo test con cálculo de TAE/TIN, 2 supuestos prácticos de amortización de préstamos (método francés) y plantilla de corrección automática para importar en Moodle con formato GIFT / XML.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeFpTab === 'emotional' && (
                <motion.div
                  key="emotional"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase text-sky-600 tracking-wider">Cuaderno de Bienestar & Salud Mental</span>
                      <span className="text-[11px] text-slate-400">Espacio Seguro del Alumno</span>
                    </div>
                    <div className="p-3.5 bg-sky-50/20 border border-sky-300/20 rounded-xl text-xs text-slate-600 leading-relaxed mb-3">
                      "¿Sientes agobio con las entregas de proyectos o las prácticas de empresa? Tómate 3 minutos para registrar tus sensaciones y recibir pautas de gestión del estrés."
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-600">😊 Motivado</div>
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-600">😐 Concentrado</div>
                      <div className="p-2 bg-sky-500/20 border border-sky-300/40 rounded-lg text-slate-600 font-bold">😰 Con Estrés</div>
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-600">😴 Cansado</div>
                    </div>
                  </div>

                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-sky-300/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-600 mb-2">
                        <HeartHandshake className="w-4 h-4" />
                        <span>Acompañamiento y Prevención del Abandono</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        El sistema ofrece técnicas de respiración guiada, planificación Pomodoro y, en casos de desmotivación persistente, notifica de forma confidencial al orientador o tutor del centro.
                      </p>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      *Módulo modular y activable a criterio del equipo directivo del centro.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Grid for FP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { value: "Roleplay Dual", label: "Simulación por Voz y Texto", icon: <Mic className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "Agenda & Calendario", label: "Fechas de Exámenes y Entregas", icon: <Calendar className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "Dashboard Docente", label: "Control y Analítica del Aula", icon: <Users className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "Moodle & Classroom", label: "Exportación Directa GIFT / XML", icon: <Layers className="w-4 h-4 text-[#1d4ed8]" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass-panel border border-slate-200 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black font-manrope text-slate-900 mb-1 tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



