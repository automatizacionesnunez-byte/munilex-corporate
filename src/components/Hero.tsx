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
  variant: 'academias' | 'ingles' | 'otros';
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, variant }) => {
  const [activeTab, setActiveTab] = useState<'eval' | 'test' | 'tutor'>('eval');

  const heroCopy = {
    academias: {
      badge: 'Academia de Oposiciones',
      titleTop: 'OPOSICIONES',
      titleBottom: 'IA PARA ESCALAR TU ACADEMIA',
      subtitle: 'Tests, temarios, tutorías y gestión con IA bajo tu propio logo y dominio',
      body: 'Digitaliza tu academia con una plataforma propia en 14 días. Centraliza contenidos, tests, tutorías, gestión y corrección asistida por IA para preparar más alumnos con menos carga operativa.',
      ctaPrimary: 'Solicitar Demo de Oposiciones',
      ctaSecondary: 'Calcular Costes & Margen',
      simulator: 'Supuesto práctico y tutoría guiada',
      statLabel: '+42 temarios y programas',
    },
    ingles: {
      badge: 'Academia de Inglés',
      titleTop: 'INGLÉS',
      titleBottom: 'IA PARA AVANZAR POR NIVELES',
      subtitle: 'EPG, listening, grammar, progreso y niveles adaptados a cada alumno',
      body: 'Organiza clases, práctica y progreso con una experiencia clara para academias de idiomas. Automatiza ejercicios, refuerzo y evolución por niveles para que el alumno vea avance real y el centro gane orden.',
      ctaPrimary: 'Solicitar Demo de Inglés',
      ctaSecondary: 'Ver Progreso & Rentabilidad',
      simulator: 'Listening, grammar y evaluación',
      statLabel: 'EPG, listening y progreso',
    },
    otros: {
      badge: 'Otros Centros',
      titleTop: 'OTROS CENTROS',
      titleBottom: 'IA PARA AUTOMATIZAR TU DÍA A DÍA',
      subtitle: 'Autoescuelas, física, química, refuerzo y formación especializada',
      body: 'Si enseñas una materia, un proceso o una habilidad, la IA puede ayudarte a automatizar pruebas, tutorías y atención al alumno. Ideal para centros muy concretos y también para negocios más generales.',
      ctaPrimary: 'Solicitar Demo para tu Centro',
      ctaSecondary: 'Ver Automatización & Margen',
      simulator: 'Automatización de clases y progreso',
      statLabel: 'Autoescuelas, ciencias y refuerzo',
    },
  }[variant];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#1d4ed8]/20 text-xs font-semibold text-slate-700 shadow-lg shadow-blue-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-ping" />
            <span className="text-[#1d4ed8] font-black uppercase tracking-wider text-[10px]">{heroCopy.badge}</span>
            <span className="text-slate-400">•</span>
            <span>Plataforma corporativa de IA educativa</span>
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
            {heroCopy.titleTop}{' '}
            <span className="gold-gradient-text block sm:inline">
              {heroCopy.titleBottom}
            </span>
            <span className="block text-lg sm:text-2xl font-bold tracking-normal text-slate-600 mt-3 normal-case">
              {heroCopy.subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-10"
          >
            {heroCopy.body}
          </motion.p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-10 shadow-sm shadow-slate-900/5">
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8]" />
            <span>{heroCopy.simulator}</span>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-slate-900 font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{heroCopy.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-manrope font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#1d4ed8]/30 shadow-sm shadow-slate-900/5"
            >
              <span>{heroCopy.ctaSecondary}</span>
              <ChevronRight className="w-4 h-4 text-[#1d4ed8]" />
            </a>
          </motion.div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Puesta en marcha acompañada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Sin costes de servidores propios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Tarifas decrecientes por volumen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
              <span>Cumplimiento RGPD & EU AI Act</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulation Card (Bento-style preview) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-[2.5rem] bg-white border border-slate-200 p-4 sm:p-7 shadow-2xl shadow-slate-900/5 relative overflow-hidden"
        >
          {/* Header Bar of Simulator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#1d4ed8]/80" />
              <div className="w-3 h-3 rounded-full bg-sky-400/80" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                {variant === 'ingles'
                  ? 'campus-english.tucentro.es — Munilex English v1.0'
                  : variant === 'otros'
                    ? 'campus.tucentro.es — Munilex Core v4.2'
                    : 'campus.tucentro.es — Munilex Core v4.2'}
              </span>
            </div>

            {/* Interactive Tabs */}
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
                <span>{variant === 'ingles' ? 'Listening / Grammar' : variant === 'otros' ? 'Evaluación IA' : 'Evaluación IA'}</span>
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
                <span>{variant === 'ingles' ? 'Nivel y progreso' : 'Tests y Exámenes'}</span>
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
                <span>{variant === 'otros' ? 'Tutor y automatización' : 'Tutor IA 24/7'}</span>
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
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
                        {variant === 'ingles' ? 'Respuesta del Alumno' : 'Entrega del Alumno'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {variant === 'ingles'
                          ? 'Actividad de listening y grammar'
                          : variant === 'otros'
                            ? 'Actividad adaptada al centro'
                            : 'Actividad guiada de nivel intermedio'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      {variant === 'ingles'
                        ? '"I can understand the text, but I still need more listening practice, grammar correction and a clearer level-based progression..."'
                        : variant === 'otros'
                          ? '"He resumido el proceso, pero todavía me falta estructura, ejemplos y una conclusión clara para mi tipo de centro..."'
                          : '"He resumido el proceso, pero todavía me falta estructura, ejemplos y una conclusión clara. También quiero comprobar si la respuesta está bien enfocada al tipo de examen o certificación..."'}
                    </p>
                  </div>

                  <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#1d4ed8]" />
                        <span className="text-xs font-bold text-slate-900">
                          {variant === 'ingles' ? 'Evaluación Inteligente Munilex English' : 'Evaluación Inteligente Munilex'}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] font-bold text-xs">
                        9.2 / 10.0
                      </span>
                    </div>
                    <div className="space-y-3 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>
                          {variant === 'ingles'
                            ? 'Detecta grammar, listening, nivel, fluidez y progreso por bloques.'
                            : variant === 'otros'
                              ? 'Detecta estructura, claridad, exactitud y adecuación al tipo de centro.'
                              : 'Detecta estructura, claridad, exactitud y adecuación al nivel del alumno.'}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span>
                          {variant === 'ingles'
                            ? 'Devuelve correcciones accionables para subir de nivel y medir progreso.'
                            : 'Devuelve correcciones accionables para mejorar en la siguiente entrega.'}
                        </span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                        💡 <strong>Consejo del Tutor IA:</strong>{' '}
                        {variant === 'ingles'
                          ? 'Repite la práctica por niveles y refuerza listening y grammar con correcciones cortas.'
                          : 'Añade un cierre más breve y una respuesta más ordenada para subir la nota en menos tiempo.'}
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
                      {variant === 'ingles' ? 'Ejercicio Adaptativo de Inglés' : 'Pregunta Adaptativa de Examen'}
                    </span>
                    <span className="text-xs text-slate-400">
                      {variant === 'ingles' ? 'Dificultad: por nivel' : 'Dificultad: Nivel Medio-Alto'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-4">
                    {variant === 'ingles'
                      ? '¿Qué mejora más el avance del alumno cuando todavía necesita reforzar listening y grammar?'
                      : '¿Qué opción mejora más una respuesta cuando un alumno todavía no domina el temario o el módulo?'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      {variant === 'ingles' ? 'A) Traducir sin practicar' : 'A) Repetir el texto sin cambios'}
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs text-[#1d4ed8] font-bold flex items-center justify-between">
                      <span>
                        {variant === 'ingles'
                          ? 'B) Corregir, escuchar y repetir con feedback'
                          : 'B) Explicar, corregir y mostrar un ejemplo mejorado'}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#1d4ed8]" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      {variant === 'ingles' ? 'C) Pasar al siguiente nivel sin medir progreso' : 'C) Esperar a la siguiente clase'}
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      {variant === 'ingles' ? 'D) Marcar listening y grammar como aprobados' : 'D) Marcar el ejercicio como correcto'}
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-[#1d4ed8]">Justificación Pedagógica:</span>{' '}
                    {variant === 'ingles'
                      ? 'El sistema explica por qué una respuesta funciona, qué falta y cómo subir de nivel al alumno con lenguaje claro.'
                      : 'El sistema explica por qué una respuesta funciona, qué falta y cómo subir la nota del alumno con lenguaje claro.'}
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
                      {variant === 'otros'
                        ? '¿Qué diferencia hay entre un ejercicio correcto y uno que realmente ayuda a automatizar más tareas del centro?'
                        : '¿Qué diferencia hay entre un ejercicio correcto y uno que realmente ayuda a vender más matrículas?'}
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-2xl ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#1d4ed8] flex items-center justify-center text-xs font-black text-slate-900 shrink-0">
                      IA
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-[#1d4ed8]/20 text-xs text-slate-700 space-y-2">
                      <p>
                        {variant === 'otros'
                          ? 'La corrección señala errores de fondo, de forma y de estructura para que el alumno mejore con rapidez y el centro gane orden operativo.'
                          : 'La corrección señala errores de fondo, de forma y de estructura para que el alumno mejore con rapidez y aprenda por repetición.'}
                      </p>
                      <p>
                        {variant === 'otros'
                          ? 'La evaluación puede reentrenar el ejercicio, mostrar la versión mejorada y dejar trazabilidad para el profesor o responsable.'
                          : 'La evaluación puede reentrenar el ejercicio, mostrar la versión mejorada y dejar trazabilidad para el profesor.'}
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
            { value: "10-14 Días", label: "Tiempo de Entrega & Despliegue", icon: <Clock className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "+42", label: variant === 'ingles' ? 'Itinerarios, niveles y programas' : 'Itinerarios, materias y programas', icon: <Layers className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "100%", label: "Identidad propia (Tu logo y dominio)", icon: <Building2 className="w-4 h-4 text-[#1d4ed8]" /> },
            { value: "ENS & AI Act", label: "Máxima Seguridad Normativa", icon: <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" /> },
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



