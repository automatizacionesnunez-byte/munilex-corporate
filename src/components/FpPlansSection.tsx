import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, ArrowRight, Check, BookOpen, School } from 'lucide-react';

interface FpPlansSectionProps {
  onOpenContact: (plan?: string) => void;
}

export const FpPlansSection: React.FC<FpPlansSectionProps> = ({ onOpenContact }) => {
  const fpPlans = [
    {
      id: 'fp-piloto',
      name: 'Plan Ciclo Piloto',
      tagline: '"Para departamentos formativos"',
      badge: 'Acceso Ágil',
      icon: <BookOpen className="w-6 h-6 text-[#1d4ed8]" />,
      desc: 'Ideal para validar la tecnología en una familia profesional específica (ej. Informática, Sanidad, Administración o Comercio) antes de llevarla al resto del centro.',
      scope: {
        cycles: '1 Familia Profesional / 2 Ciclos',
        delivery: '1 semana de integración',
        training: 'Sesión de formación al claustro docente',
      },
      pricing: [
        { range: 'Hasta 60 alumnos', price: 'Tarifa reducida por alumno' },
        { range: 'Soporte al profesorado', price: 'Incluido' },
      ],
      features: [
        'Roleplay IA adaptado a los módulos del ciclo',
        'Tutor de dudas curriculares 24/7',
        'Generador de exámenes con rúbricas',
        'Panel docente con evolución de notas',
        'Exportación de resultados a Moodle',
      ],
      cta: 'Solicitar Piloto de Ciclo',
      highlighted: false,
    },
    {
      id: 'fp-centro',
      name: 'Plan Centro FP Integral',
      tagline: '"Para todo el centro educativo"',
      badge: 'Más Elegido por Centros',
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      desc: 'Digitalización global para todos los ciclos de FP Básica, Grado Medio y Superior del centro. Incluye módulos transversales (FOL / IPE, EIE, Digitalización e Inglés).',
      scope: {
        cycles: 'Todos los Ciclos del Centro',
        delivery: '2 - 3 semanas',
        training: 'Plan de capacitación continua a docentes',
      },
      pricing: [
        { range: 'Tarifa escalada por volumen', price: 'Desde 1.50 € / alumno / mes' },
        { range: 'Setup & Onboarding', price: 'Acompañamiento personalizado' },
      ],
      features: [
        'Todo lo del Plan Ciclo Piloto',
        'Cobertura para TODAS las familias profesionales del centro',
        'Módulos transversales completos (FOL/IPE, EIE, Sostenibilidad)',
        'Roleplay laboral ilimitado para FP Dual y FCT',
        'Integración completa con Moodle, Canvas o ERP del centro',
        'Informes oficiales de adquisición de competencias para inspección',
        'Gestor pedagógico dedicado para el centro',
      ],
      cta: 'Configurar Centro Completo',
      highlighted: true,
    },
    {
      id: 'fp-red',
      name: 'Plan Red / Grupo Educativo',
      tagline: '"Para corporaciones con múltiples sedes"',
      badge: 'Red de Centros',
      icon: <School className="w-6 h-6 text-sky-600" />,
      desc: 'Solución corporativa para grupos educativos, federaciones de centros concertados/privados o consejerías con múltiples institutos y campus.',
      scope: {
        cycles: 'Múltiples Sedes & Campus',
        delivery: 'A medida',
        training: 'Campus virtual docente propio',
      },
      pricing: [
        { range: 'Acuerdo Marco', price: 'Precio corporativo por volumen global' },
        { range: 'Infraestructura', price: 'Dedicada y centralizada' },
      ],
      features: [
        'Todo lo del Plan Centro Integral',
        'Panel centralizado de analítica para dirección de red/grupo',
        'Personalización de identidad por cada campus o centro filial',
        'Digitalización e ingesta de materiales didácticos propios',
        'SLA de servicio y soporte prioritario 24/7',
        'Desarrollo de módulos o simuladores ad-hoc',
      ],
      cta: 'Consultar Acuerdo Corporativo',
      highlighted: false,
    },
  ];

  return (
    <section id="fp-plans" className="py-28 md:py-36 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planes para Institutos y Centros de FP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            PLANES FLEXIBLES PARA <br />
            <span className="cyan-gradient-text">TU PROYECTO EDUCATIVO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Adaptados a la realidad presupuestaria de centros públicos, concertados y privados de Formación Profesional.
          </p>
        </div>

        {/* 3 Plans Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {fpPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[3rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-slate-50 border-2 border-[#1d4ed8] shadow-2xl shadow-blue-500/15 lg:-translate-y-4'
                  : 'bg-white border border-slate-200 hover:border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] py-1.5 text-center text-black font-manrope font-black text-[10px] uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
                <div className={`flex items-center justify-between mb-6 ${plan.highlighted ? 'mt-4' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    plan.highlighted
                      ? 'bg-[#1d4ed8] text-black border-[#1d4ed8]'
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    {plan.icon}
                  </div>
                  {!plan.highlighted && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 bg-slate-50 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-manrope font-black text-slate-900 uppercase tracking-tight mb-1">
                  {plan.name}
                </h3>
                <div className="text-xs font-bold text-[#1d4ed8] italic uppercase tracking-wider mb-4">
                  {plan.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  {plan.desc}
                </p>

                {/* Scope & Timing Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Alcance:</span>
                    <span className="text-slate-900 font-bold">{plan.scope.cycles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Plazo:</span>
                    <span className="text-slate-900 font-bold">{plan.scope.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Docentes:</span>
                    <span className="text-slate-900 font-bold">{plan.scope.training}</span>
                  </div>
                </div>

                {/* Pricing Table Box */}
                <div className={`p-4 rounded-2xl mb-8 border ${
                  plan.highlighted
                    ? 'bg-[#1d4ed8]/10 border-[#1d4ed8]/30'
                    : 'bg-white/[0.02] border-slate-200'
                }`}>
                  <div className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-wider mb-2.5">
                    Modalidad Económica
                  </div>
                  <div className="space-y-1.5 text-xs font-bold">
                    {plan.pricing.map((p, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5">
                        <span className="text-slate-500">{p.range}</span>
                        <span className="text-slate-900 font-mono">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">
                    Qué Incluye para el Centro:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-[#1d4ed8]' : 'text-slate-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenContact(plan.name)}
                className={`w-full py-4 rounded-2xl font-manrope font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-black shadow-lg shadow-blue-500/25 hover:scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 hover:border-white/30'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


