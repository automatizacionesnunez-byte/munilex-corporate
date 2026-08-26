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
      title: 'Software de Marca Blanca e IA para Academias de Oposiciones',
      subtitle: 'Tests, temarios, tutorías y seguimiento con IA bajo tu propio logo y dominio',
      body: 'Digitaliza tu academia con plataforma propia en 14 días. Centraliza contenidos, tests, tutorías, seguimiento y corrección asistida por IA para escalar matrícula y retención sin perder tu marca.',
      simulator: 'Supuesto práctico y tutoría guiada',
      statLabel: '+42 temarios y programas',
    },
    ingles: {
      badge: 'Academia de Inglés',
      title: 'Software de Marca Blanca e IA para Academias de Inglés',
      subtitle: 'EPG, listening, grammar, progreso y niveles adaptados a cada alumno',
      body: 'Organiza clases, práctica y seguimiento con una experiencia clara para academias de idiomas. Automiza ejercicios, refuerzo y evolución por niveles para que el alumno vea avance real y el centro gane orden.',
      simulator: 'Listening, grammar y evaluación',
      statLabel: 'EPG, listening y progreso',
    },
    otros: {
      badge: 'Otros Centros',
      title: 'Software de Marca Blanca e IA para Otros Centros',
      subtitle: 'Autoescuelas, física, química, refuerzo, técnicas y formación especializada',
      body: 'Si enseñas una materia, un proceso o una habilidad, la IA puede ayudarte a automatizar pruebas, seguimiento, tutorías y atención al alumno. Ideal para centros muy concretos y también para negocios más generales.',
      simulator: 'Automatización de clases y seguimiento',
      statLabel: 'Autoescuelas, ciencias y refuerzo',
    },
  }[variant];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c7a15a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#c7a15a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#c7a15a]/30 text-xs font-semibold text-[#f4e5c9] shadow-lg shadow-[#c7a15a]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#c7a15a] animate-ping" />
            <span className="text-[#c7a15a] font-black uppercase tracking-wider text-[10px]">{heroCopy.badge}</span>
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
            {heroCopy.title}
          </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed font-normal mb-10"
          >
            {heroCopy.body}
          </motion.p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#c7a15a]" />
            <span>{heroCopy.subtitle}</span>
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
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#c7a15a] via-[#d9bc77] to-[#b68f4e] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-xl shadow-[#c7a15a]/25 hover:shadow-[#c7a15a]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Solicitar Demo & Auditoría Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-manrope font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#c7a15a]/40"
            >
              <span>Calcular Costes & Margen</span>
              <ChevronRight className="w-4 h-4 text-[#c7a15a]" />
            </a>
          </motion.div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-medium pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c7a15a]" />
              <span>Despliegue llave en mano</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c7a15a]" />
              <span>Sin costes de servidores propios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c7a15a]" />
              <span>Tarifas decrecientes por volumen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c7a15a]" />
              <span>Cumplimiento RGPD & EU AI Act</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulation Card (Bento-style preview) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-[2.5rem] bg-[#111827] border border-white/10 p-4 sm:p-7 shadow-2xl shadow-black/80 relative overflow-hidden"
        >
          {/* Header Bar of Simulator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-white/40 font-mono ml-2">
                {variant === 'ingles'
                  ? 'campus-english.tucentro.es — Munilex English v1.0'
                  : variant === 'otros'
                    ? 'campus.tucentro.es — Munilex Core v4.2'
                    : 'campus.tucentro.es — Munilex Core v4.2'}
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center bg-[#080d15] p-1.5 rounded-xl border border-white/5">
              <button
                onClick={() => setActiveTab('eval')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'eval'
                    ? 'bg-[#c7a15a] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{variant === 'ingles' ? 'Listening / Grammar' : variant === 'otros' ? 'Evaluación IA' : 'Evaluación IA'}</span>
              </button>
              <button
                onClick={() => setActiveTab('test')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'test'
                    ? 'bg-[#c7a15a] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
                >
                <Cpu className="w-3.5 h-3.5" />
                <span>{variant === 'ingles' ? 'Nivel y progreso' : 'Tests y Exámenes'}</span>
              </button>
              <button
                onClick={() => setActiveTab('tutor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'tutor'
                    ? 'bg-[#c7a15a] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
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
                  <div className="md:col-span-6 bg-[#080d15] p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase text-[#c7a15a] tracking-wider">
                        {variant === 'ingles' ? 'Respuesta del Alumno' : 'Entrega del Alumno'}
                      </span>
                      <span className="text-[11px] text-white/40">
                        {variant === 'ingles'
                          ? 'Actividad de listening y grammar'
                          : variant === 'otros'
                            ? 'Actividad adaptada al centro'
                            : 'Actividad guiada de nivel intermedio'}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 italic leading-relaxed">
                      {variant === 'ingles'
                        ? '"I can understand the text, but I still need more listening practice, grammar correction and a clearer level-based progression..."'
                        : variant === 'otros'
                          ? '"He resumido el proceso, pero todavía me falta estructura, ejemplos y una conclusión clara para mi tipo de centro..."'
                          : '"He resumido el proceso, pero todavía me falta estructura, ejemplos y una conclusión clara. También quiero comprobar si la respuesta está bien enfocada al tipo de examen o certificación..."'}
                    </p>
                  </div>

                  <div className="md:col-span-6 bg-[#162132] p-6 rounded-2xl border border-[#c7a15a]/30 shadow-lg relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#c7a15a]" />
                        <span className="text-xs font-bold text-white">
                          {variant === 'ingles' ? 'Evaluación Inteligente Munilex English' : 'Evaluación Inteligente Munilex'}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                        9.2 / 10.0
                      </span>
                    </div>
                    <div className="space-y-3 text-xs text-white/70">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          {variant === 'ingles'
                            ? 'Detecta grammar, listening, nivel, fluidez y progreso por bloques.'
                            : variant === 'otros'
                              ? 'Detecta estructura, claridad, exactitud y adecuación al tipo de centro.'
                              : 'Detecta estructura, claridad, exactitud y adecuación al nivel del alumno.'}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          {variant === 'ingles'
                            ? 'Devuelve correcciones accionables para subir de nivel y medir progreso.'
                            : 'Devuelve correcciones accionables para mejorar en la siguiente entrega.'}
                        </span>
                      </div>
                      <div className="p-3 bg-[#080d15] rounded-xl border border-white/5 text-[11px] text-[#f4e5c9]">
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
                  className="bg-[#080d15] p-6 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#c7a15a] uppercase tracking-wider">
                      {variant === 'ingles' ? 'Ejercicio Adaptativo de Inglés' : 'Pregunta Adaptativa de Examen'}
                    </span>
                    <span className="text-xs text-white/40">
                      {variant === 'ingles' ? 'Dificultad: por nivel' : 'Dificultad: Nivel Medio-Alto'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-4">
                    {variant === 'ingles'
                      ? '¿Qué mejora más el avance del alumno cuando todavía necesita reforzar listening y grammar?'
                      : '¿Qué opción mejora más una respuesta cuando un alumno todavía no domina el temario o el módulo?'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      {variant === 'ingles' ? 'A) Traducir sin practicar' : 'A) Repetir el texto sin cambios'}
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs text-emerald-200 font-bold flex items-center justify-between">
                      <span>
                        {variant === 'ingles'
                          ? 'B) Corregir, escuchar y repetir con feedback'
                          : 'B) Explicar, corregir y mostrar un ejemplo mejorado'}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      {variant === 'ingles' ? 'C) Pasar al siguiente nivel sin medir progreso' : 'C) Esperar a la siguiente clase'}
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70">
                      {variant === 'ingles' ? 'D) Marcar listening y grammar como aprobados' : 'D) Marcar el ejercicio como correcto'}
                    </div>
                  </div>
                  <div className="p-3 bg-[#111827] rounded-xl border border-white/5 text-xs text-white/60">
                    <span className="font-bold text-[#c7a15a]">Justificación Pedagógica:</span>{' '}
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
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      A
                    </div>
                    <div className="p-4 rounded-2xl bg-[#080d15] border border-white/5 text-xs text-white/80">
                      {variant === 'otros'
                        ? '¿Qué diferencia hay entre un ejercicio correcto y uno que realmente ayuda a automatizar más tareas del centro?'
                        : '¿Qué diferencia hay entre un ejercicio correcto y uno que realmente ayuda a vender más matrículas?'}
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-2xl ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#c7a15a] flex items-center justify-center text-xs font-black text-black shrink-0">
                      IA
                    </div>
                    <div className="p-4 rounded-2xl bg-[#162132] border border-[#c7a15a]/30 text-xs text-white/90 space-y-2">
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
            { value: "10-14 Días", label: "Tiempo de Entrega & Despliegue", icon: <Clock className="w-4 h-4 text-[#c7a15a]" /> },
            { value: "+42", label: variant === 'ingles' ? 'Itinerarios, niveles y programas' : 'Itinerarios, materias y programas', icon: <Layers className="w-4 h-4 text-[#c7a15a]" /> },
            { value: "100%", label: "Marca Blanca (Tu Logo y Dominio)", icon: <Building2 className="w-4 h-4 text-[#c7a15a]" /> },
            { value: "ENS & AI Act", label: "Máxima Seguridad Normativa", icon: <ShieldCheck className="w-4 h-4 text-[#c7a15a]" /> },
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

