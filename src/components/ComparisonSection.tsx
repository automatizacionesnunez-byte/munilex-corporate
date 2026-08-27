import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles, ShieldAlert, Zap } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenContact: () => void;
  variant: 'academias' | 'ingles' | 'otros';
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenContact, variant }) => {
  const copy = {
    academias: {
      badge: 'Comparativa para Oposiciones',
      titleTop: '¿Desarrollar por tu cuenta',
      titleBottom: 'o escalar con Munilex?',
      intro: 'Descubre por qué muchas academias de oposiciones prefieren apoyarse en una plataforma ya preparada para centrarse en captar, enseñar y retener alumnos, sin perder control de su marca ni de su margen.',
      ctaTitle: '¿Listo para lanzar tu propia plataforma en 14 días?',
      ctaBody: 'Agenda una sesión de consultoría técnica sin compromiso con nuestros fundadores.',
      button: 'Solicitar Demostración',
    },
    ingles: {
      badge: 'Comparativa para Inglés',
      titleTop: '¿Crear tu propia academia de inglés',
      titleBottom: 'o apoyarte en Munilex?',
      intro: 'Descubre por qué muchas academias de inglés prefieren una base tecnológica ya resuelta para centrarse en enseñar, practicar y medir progreso por niveles, sin perder control de su marca ni de su margen.',
      ctaTitle: '¿Listo para lanzar tu plataforma de inglés en 14 días?',
      ctaBody: 'Agenda una sesión de consultoría sin compromiso para ver EPG, listening, grammar y progreso en vivo.',
      button: 'Solicitar Demo de Inglés',
    },
    otros: {
      badge: 'Comparativa para Otros Centros',
      titleTop: '¿Gestionar todo a mano',
      titleBottom: 'o automatizar tu centro con IA?',
      intro: 'Descubre por qué autoescuelas, centros de ciencias y otros centros prefieren una base tecnológica ya resuelta para centrarse en enseñar y automatizar más tareas, sin perder control de su marca ni de su margen.',
      ctaTitle: '¿Listo para lanzar tu plataforma para tu centro en 14 días?',
      ctaBody: 'Agenda una sesión de consultoría técnica sin compromiso con nuestros fundadores.',
      button: 'Solicitar Demostración',
    },
  }[variant];

  const comparisons = [
    {
      factor: 'Inversión Inicial en Software',
      traditional: '25.000 € – 60.000 € contratando agencia o programadores',
      munilex: '0 € de desarrollo. Puesta en marcha en cuotas por alumno activo.',
    },
    {
      factor: 'Tiempo de Lanzamiento',
      traditional: '6 a 12 meses de desarrollo con retrasos e incidencias',
      munilex: '1 a 2 semanas con tu marca, logo y dominio propio',
    },
    {
      factor: 'Actualizaciones Legislativas (BOE / CCAA)',
      traditional: 'Revisión manual lenta; riesgo de preguntas desactualizadas',
      munilex: 'Supervisión continua de contenidos y banco siempre al día',
    },
    {
      factor: 'Corrección de Casos Prácticos',
      traditional: 'Cientos de horas del preparador corrigiendo a mano',
      munilex: 'Evaluación IA instantánea con rúbrica oficial en < 3 segundos',
    },
    {
      factor: 'Mantenimiento y Servidores',
      traditional: 'Costes fijos de hosting, caídas en picos y soporte técnico propio',
      munilex: 'Infraestructura Cloudflare Edge gestionada en UE con 99.9% Uptime',
    },
    {
      factor: 'Atención a Dudas de Alumnos',
      traditional: 'Profesores saturados contestando dudas básicas por email',
      munilex: 'Tutor IA 24/7 que resuelve dudas al instante día y noche',
    },
  ];

  return (
    <section className="py-28 md:py-36 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{copy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            {copy.titleTop} <br />
            <span className="gold-gradient-text">{copy.titleBottom}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {copy.intro}
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-slate-200 overflow-hidden shadow-2xl shadow-slate-900/5">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-50 p-6 sm:p-8 border-b border-slate-200 text-xs font-black uppercase tracking-wider">
            <div className="col-span-4 text-slate-400">Factor Crítico</div>
            <div className="col-span-4 text-red-400/80 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Modelo Tradicional</span>
            </div>
            <div className="col-span-4 text-[#1d4ed8] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Plataforma Munilex</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-12 p-6 sm:p-7 items-center text-xs sm:text-sm hover:bg-slate-50 transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-slate-900 mb-2 sm:mb-0">
                  {item.factor}
                </div>

                <div className="col-span-6 sm:col-span-4 text-slate-400 flex items-start gap-2 pr-4">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                <div className="col-span-6 sm:col-span-4 font-semibold text-slate-900 flex items-start gap-2 bg-[#1d4ed8]/5 p-3 rounded-xl border border-[#1d4ed8]/20">
                  <Check className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                  <span>{item.munilex}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-slate-900 text-base">{copy.ctaTitle}</div>
              <div className="text-xs text-slate-500">{copy.ctaBody}</div>
            </div>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white font-manrope font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              {copy.button}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};



