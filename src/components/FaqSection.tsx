import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuánto tarda la puesta en marcha?',
      a: 'Normalmente entre 1 y 2 semanas para un piloto y entre 3 y 4 semanas cuando hay personalización completa de marca y dominio propio.',
    },
    {
      q: '¿Podemos usar nuestros propios temarios y materiales?',
      a: 'Sí. Podemos trabajar con el catálogo de Munilex o adaptar tus materiales, procesos y estructura. El alcance de la carga y las condiciones de uso se concretan en la propuesta.',
    },
    {
      q: '¿Cómo se calcula el precio?',
      a: 'La facturación es mensual y se ajusta al volumen real de alumnos activos. El precio baja por tramos cuando crece el centro.',
    },
    {
      q: '¿La IA responde con control o puede inventar cosas?',
      a: 'La IA se configura sobre contenidos y respuestas base definidos para el centro. Puede ayudar con dudas frecuentes y feedback, pero el equipo mantiene la revisión y el control editorial.',
    },
    {
      q: '¿Necesitamos servidores o un equipo técnico propio?',
      a: 'No. La solución se entrega administrada en la nube. En la puesta en marcha definimos accesos, contenidos, soporte y las responsabilidades de cada parte.',
    },
    {
      q: '¿Se integra con Moodle o con nuestras herramientas?',
      a: 'Sí. Podemos integrar la plataforma mediante API o webhooks para sincronizar alumnos, cobros o calificaciones cuando el proyecto lo requiera.',
    },
  ];

  return (
    <section id="faq" className="py-28 md:py-36 relative bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-4">
            PREGUNTAS <span className="gold-gradient-text">FRECUENTES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Todo lo que necesitas saber antes de dar el salto tecnológico con Munilex Corporate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-manrope font-bold text-slate-900 text-base sm:text-lg">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1d4ed8] shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-[#1d4ed8]/20' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-7 sm:px-7 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


