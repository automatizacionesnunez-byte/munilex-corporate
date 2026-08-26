import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuánto tiempo se tarda en tener operativa la plataforma para mi academia?',
      a: 'Para el Plan Iniciación el despliegue se completa en 1 a 2 semanas. Para el Plan Marca (con personalización completa de identidad y dominio propio), el plazo habitual es de 3 a 4 semanas tras recibir tus recursos de marca.',
    },
    {
      q: '¿Podemos incorporar nuestros propios temarios, supuestos y preguntas exclusivas?',
      a: 'Absolutamente. Puedes combinar el catálogo oficial de Munilex (+42 programas, itinerarios y materias) con tus propios materiales exclusivos. Los materiales del centro quedan completamente securizados y protegidos bajo acuerdo de confidencialidad.',
    },
    {
      q: '¿Cómo se contabilizan y facturan las licencias de alumnos?',
      a: 'La facturación es mensual y flexible. Se contabilizan únicamente los alumnos que han tenido acceso activo durante el mes natural, aplicando el escalado por volumen (3€ -> 2.5€ -> 1.5€ en Iniciación; 4€ -> 3€ -> 2€ en Marca). No pagas por alumnos inactivos o bajas.',
    },
    {
      q: '¿La IA puede inventar contenidos o dar respuestas incorrectas (alucinaciones)?',
      a: 'No. El motor de Munilex opera mediante arquitectura RAG (Retrieval-Augmented Generation) sobre fuentes oficiales y contenidos validados por el centro. Todas las justificaciones incluyen la referencia exacta que necesites para auditar la respuesta.',
    },
    {
      q: '¿Necesitamos contratar servidores o personal de soporte técnico propio?',
      a: 'Ninguno. Munilex entrega una solución 100% administrada en la nube (Cloudflare + Supabase en UE). Nosotros nos encargamos de las actualizaciones, copias de seguridad y velocidad de respuesta.',
    },
    {
      q: '¿Es posible integrar la plataforma con nuestro Moodle o sistema de cobro?',
      a: 'Sí. A través del Plan Ecosistema o addons del Plan Marca, ofrecemos integración vía API / Webhooks para dar de alta alumnos automáticamente tras el pago en vuestra web o sincronizar calificaciones.',
    },
  ];

  return (
    <section id="faq" className="py-28 md:py-36 relative bg-[#080d15]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c7a15a]/10 border border-[#c7a15a]/20 text-xs font-bold text-[#c7a15a] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-4">
            PREGUNTAS <span className="gold-gradient-text">FRECUENTES</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Todo lo que necesitas saber antes de dar el salto tecnológico con Munilex Corporate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#111827] border border-white/5 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-manrope font-bold text-white text-base sm:text-lg">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#c7a15a] shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-[#c7a15a]/20' : ''
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
                    <div className="px-6 pb-7 sm:px-7 text-sm text-white/65 leading-relaxed border-t border-white/5 pt-4">
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
