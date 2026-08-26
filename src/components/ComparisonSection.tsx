import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles, ShieldAlert, Zap } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenContact: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenContact }) => {
  const comparisons = [
    {
      factor: 'Inversión Inicial en Software',
      traditional: '25.000 € – 60.000 € contratando agencia o programadores',
      munilex: '0 € de desarrollo. Despliegue en cuotas por alumno activo.',
    },
    {
      factor: 'Tiempo de Lanzamiento',
      traditional: '6 a 12 meses de desarrollo con retrasos e incidencias',
      munilex: '1 a 2 semanas con tu marca, logo y dominio propio',
    },
    {
      factor: 'Actualizaciones Legislativas (BOE / CCAA)',
      traditional: 'Revisión manual lenta; riesgo de preguntas desactualizadas',
      munilex: 'Supervisión jurídica continua y banco oficial siempre al día',
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
    <section className="py-28 md:py-36 relative bg-[#07080B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Comparativa de Costes & Eficiencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            ¿DESARROLLAR POR TU CUENTA O <br />
            <span className="gold-gradient-text">ESCALAR CON MUNILEX?</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Descubre por qué las academias líderes delegan su infraestructura tecnológica para centrarse en captar y enseñar a sus opositores.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#13141B] border border-white/10 overflow-hidden shadow-2xl shadow-black/80">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#0B0C10] p-6 sm:p-8 border-b border-white/10 text-xs font-black uppercase tracking-wider">
            <div className="col-span-4 text-white/40">Factor Crítico</div>
            <div className="col-span-4 text-red-400/80 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Desarrollo Tradicional</span>
            </div>
            <div className="col-span-4 text-[#d4af37] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Ecosistema Munilex</span>
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
                className="grid grid-cols-12 p-6 sm:p-7 items-center text-xs sm:text-sm hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-white mb-2 sm:mb-0">
                  {item.factor}
                </div>

                <div className="col-span-6 sm:col-span-4 text-white/45 flex items-start gap-2 pr-4">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                <div className="col-span-6 sm:col-span-4 font-semibold text-white flex items-start gap-2 bg-[#d4af37]/5 p-3 rounded-xl border border-[#d4af37]/20">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{item.munilex}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-8 bg-[#0B0C10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-white text-base">¿Listo para lanzar tu propia plataforma en 14 días?</div>
              <div className="text-xs text-white/50">Agenda una sesión de consultoría técnica sin compromiso con nuestros fundadores.</div>
            </div>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6c65b] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-lg shadow-[#d4af37]/20 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              Solicitar Demostración
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
