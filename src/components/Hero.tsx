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
  ChevronRight,
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'eval' | 'test' | 'tutor'>('eval');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#1d4ed8]/20 text-xs font-semibold text-slate-700 shadow-lg shadow-blue-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-ping" />
            <span className="text-[#1d4ed8] font-black uppercase tracking-wider text-[10px]">
              Academia de oposiciones
            </span>
            <span className="text-slate-400">•</span>
            <span>Plataforma corporativa para tu academia</span>
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-manrope font-black tracking-tight leading-[1.02] text-slate-900 uppercase mb-7"
          >
            OPOSICIONES{' '}
            <span className="gold-gradient-text block sm:inline">IA PARA TU ACADEMIA</span>
            <span className="block text-lg sm:text-2xl font-bold tracking-normal text-slate-600 mt-3 normal-case">
              Tests, temarios y tutorías bajo tu marca
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
          >
            Una plataforma propia para preparar, corregir y acompañar a tus alumnos con más orden y menos carga para el equipo.
          </motion.p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-8 shadow-sm shadow-slate-900/5">
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8]" />
            <span>Vista previa de uso real</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-slate-900 font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Solicitar Demo de Oposiciones</span>
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

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Puesta en marcha acompañada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Sin servidores propios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Escala por alumnos activos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Privacidad y control desde el diseño</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] bg-white border border-slate-200 p-4 sm:p-7 shadow-2xl shadow-slate-900/5 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#1d4ed8]/80" />
              <div className="w-3 h-3 rounded-full bg-sky-400/80" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                campus.tucentro.es — Munilex Oposiciones
              </span>
            </div>

            <div className="flex items-center bg-slate-50 p-1.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('eval')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'eval'
                    ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Evaluación IA</span>
              </button>
              <button
                onClick={() => setActiveTab('test')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'test'
                    ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Tests y Exámenes</span>
              </button>
              <button
                onClick={() => setActiveTab('tutor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'tutor'
                    ? 'bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Tutor IA 24/7</span>
              </button>
            </div>
          </div>

          <div className="pt-6 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'eval' && (
                <motion.div
                  key="eval"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-wider">
                        Entrega del alumno
                      </span>
                      <span className="text-[11px] text-slate-400">Actividad guiada por nivel y criterio</span>
                    </div>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      "He resumido el tema, pero todavía necesito estructura, ejemplos prácticos y una conclusión más clara para aprobar con seguridad."
                    </p>
                  </div>

                  <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#1d4ed8]" />
                        <span className="text-xs font-bold text-slate-900">Evaluación Inteligente Munilex</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] font-bold text-xs">
                        9.2 / 10.0
                      </span>
                    </div>
                    <div className="space-y-3 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>Detecta estructura, claridad, exactitud y adecuación al nivel del alumno.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>Devuelve correcciones accionables para mejorar en la siguiente entrega.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                        💡 <strong>Consejo del Tutor IA:</strong> añade una conclusión corta, un ejemplo final y una idea fuerza más clara.
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
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                      Pregunta Adaptativa de Examen
                    </span>
                    <span className="text-xs text-slate-400">Dificultad: Nivel Medio-Alto</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-4">
                    ¿Qué opción mejora más una respuesta cuando el alumno todavía no domina el temario?
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      A) Repetir el texto sin cambios
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs text-[#1d4ed8] font-bold flex items-center justify-between">
                      <span>B) Explicar, corregir y mostrar un ejemplo mejorado</span>
                      <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      C) Esperar a la siguiente clase
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      D) Marcar el ejercicio como correcto
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-[#1d4ed8]">Justificación Pedagógica:</span> el sistema explica por qué una respuesta funciona, qué falta y cómo subir la nota con lenguaje claro.
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
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">
                      A
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      ¿Qué diferencia hay entre un ejercicio correcto y uno que realmente ayuda a aprobar más matrículas?
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-2xl ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center text-xs font-black text-slate-900 shrink-0">
                      IA
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-[#1d4ed8]/20 text-xs text-slate-700 space-y-2">
                      <p>La corrección señala errores de fondo, de forma y de estructura para que el alumno mejore con rapidez.</p>
                      <p>La evaluación puede reentrenar el ejercicio, mostrar la versión mejorada y dejar trazabilidad para el profesor.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-5xl mx-auto">
          {[
            { value: '10-14 Días', label: 'Puesta en marcha', icon: <Clock className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: '+42', label: 'Itinerarios y programas', icon: <Layers className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: '100%', label: 'Marca propia y dominio', icon: <Building2 className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: 'ENS & AI Act', label: 'Seguridad normativa', icon: <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass-panel border border-slate-200 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black font-manrope text-slate-900 mb-1 tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
