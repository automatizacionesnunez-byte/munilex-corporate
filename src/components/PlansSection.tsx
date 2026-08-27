import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, Check, Sparkles, ArrowRight } from 'lucide-react';

interface PlansSectionProps {
  onOpenContact: (plan?: string) => void;
  variant: 'academias' | 'ingles' | 'otros';
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onOpenContact, variant }) => {
  const copy = {
    academias: {
      header: 'Planes para Academias de Oposiciones',
      titleTop: 'Planes diseñados para',
      titleBottom: 'escalar tu academia de oposiciones',
      intro: 'Elige el nivel de entrada que mejor encaja con tu academia y escala solo cuando tenga sentido para tu margen.',
      feature: 'Preparación completa para oposiciones, refuerzo y materias especializadas',
    },
    ingles: {
      header: 'Planes para Academias de Inglés',
      titleTop: 'Planes diseñados para',
      titleBottom: 'escalar tu academia de inglés',
      intro: 'Empieza con una base simple y sube de nivel cuando quieras ampliar marca, seguimiento y progreso por alumnos.',
      feature: 'EPG, listening, grammar, speaking y progreso por niveles',
    },
    otros: {
      header: 'Planes para Otros Centros',
      titleTop: 'Planes diseñados para',
      titleBottom: 'escalar tu centro especializado',
      intro: 'Empieza por lo que más impacto tenga en tu operación y automatiza el resto cuando veas retorno.',
      feature: 'Autoescuela, ciencias, refuerzo y formación especializada',
    },
  }[variant];

  const plans = [
    {
      id: 'iniciacion',
      name: 'Plan Iniciación',
      tagline: '"Empieza con una base sólida"',
      badge: 'Acceso Rápido',
      icon: <Rocket className="w-6 h-6 text-[#1d4ed8]" />,
      desc: 'Empieza con 2 itinerarios y valida la demanda sin una inversión grande.',
      scope: {
        opos: '2 itinerarios o materias',
        delivery: '1 - 2 semanas',
        support: 'Soporte estándar por email',
      },
      pricing: [
        { range: '0 a 150 alumnos', price: '3.00 € / u' },
        { range: '150 a 500 alumnos', price: '2.50 € / u' },
        { range: '+500 alumnos', price: '1.50 € / u' },
      ],
      features: [
        'Tests y simulacros ilimitados',
        'Casos prácticos corregidos por IA',
        'Flashcards de repaso espaciado',
        'Panel de control de estudiantes',
      ],
      cta: 'Consultar Plan Iniciación',
      highlighted: false,
    },
    {
      id: 'marca',
      name: 'Plan Profesional',
      tagline: '"Tu plataforma con identidad propia"',
      badge: 'Más Popular • Identidad Propia',
      icon: <Heart className="w-6 h-6 text-white" />,
      desc: 'Añade dominio propio, marca y una experiencia más sólida para el alumno.',
      scope: {
        opos: 'Catálogo Completo (+42 programas)',
        delivery: '3 - 4 semanas',
        support: 'Soporte prioritario 24/7 con gestor',
      },
      pricing: [
        { range: '0 a 150 alumnos', price: '4.00 € / u' },
        { range: '150 a 500 alumnos', price: '3.00 € / u' },
        { range: '+500 alumnos', price: '2.00 € / u' },
      ],
      features: [
        'Todo lo incluido en el Plan Iniciación',
        copy.feature,
        'Personalización completa de marca y dominio propio',
        '1 funcionalidad extra a medida incluida',
        'Plantillas de correo con tu identidad corporativa',
      ],
      cta: 'Configurar Plan Profesional',
      highlighted: true,
    },
    {
      id: 'ecosistema',
      name: 'Plan A Medida',
      tagline: '"Tu solución educativa a medida"',
      badge: 'Enterprise',
      icon: <Globe className="w-6 h-6 text-[#1d4ed8]" />,
      desc: 'Para redes o centros con procesos propios y necesidades de integración reales.',
      scope: {
        opos: 'A medida + Ingesta de contenidos propios',
        delivery: '6 - 8 semanas',
        support: 'Ingeniero de soporte dedicado',
      },
      pricing: [
        { range: 'Setup inicial', price: 'Bajo presupuesto' },
        { range: 'Licencia alumno', price: 'Tarifa reducida Enterprise' },
        { range: 'Infraestructura', price: 'Dedicada' },
      ],
      features: [
        'Arquitectura dedicada y escalable',
        'Ingesta de materiales privados del centro',
        'Integración API con Moodle, Canvas, Holded o ERP',
        'Roleplay IA y automatizaciones a medida',
        'SLA de disponibilidad y soporte prioritario',
      ],
      cta: 'Consultar Proyecto Enterprise',
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-28 md:py-36 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{copy.header}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            {copy.titleTop} <br />
            <span className="gold-gradient-text">{copy.titleBottom}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {copy.intro}
          </p>
        </div>

        {/* 3 Plans Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
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
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] py-1.5 text-center text-white font-manrope font-black text-[10px] uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
                <div className={`flex items-center justify-between mb-6 ${plan.highlighted ? 'mt-4' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    plan.highlighted
                      ? 'bg-[#1d4ed8] text-white border-[#1d4ed8]'
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
                    <span className="text-slate-900 font-bold">{plan.scope.opos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Entrega:</span>
                    <span className="text-slate-900 font-bold">{plan.scope.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Soporte:</span>
                    <span className="text-slate-900 font-bold">{plan.scope.support}</span>
                  </div>
                </div>

                {/* Pricing Table Box */}
                <div className={`p-4 rounded-2xl mb-8 border ${
                  plan.highlighted
                    ? 'bg-[#1d4ed8]/10 border-[#1d4ed8]/30'
                    : 'bg-slate-50 border-slate-200'
                }`}>
                <div className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-wider mb-2.5">
                    Licencia Alumno / Mes
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
                    Qué Incluye:
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
                    ? 'bg-gradient-to-r from-[#1d4ed8] to-[#bfdbfe] text-white shadow-lg shadow-blue-500/25 hover:scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-300'
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



