import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, Check, ArrowRight } from 'lucide-react';

interface PlansSectionProps {
  onOpenContact: (plan?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onOpenContact }) => {
  const plans = [
    {
      id: 'iniciacion',
      name: 'Plan Iniciación',
      tagline: 'Empieza ligero',
      icon: <Rocket className="w-6 h-6 text-[#1d4ed8]" />,
      desc: 'Una entrada simple para arrancar sin complicarte.',
      scope: {
        opos: '2 itinerarios',
        delivery: '1 - 2 semanas',
        support: 'Soporte por email',
      },
      features: [
        'Tests y simulacros ilimitados',
        'Casos prácticos corregidos por IA',
        'Panel de control básico',
      ],
      cta: 'Consultar Plan Iniciación',
      highlighted: false,
    },
    {
      id: 'marca',
      name: 'Plan Profesional',
      tagline: 'La opción principal',
      icon: <Heart className="w-6 h-6 text-white" />,
      desc: 'Más marca, más control y una propuesta más completa.',
      scope: {
        opos: 'Catálogo completo',
        delivery: '3 - 4 semanas',
        support: 'Soporte prioritario',
      },
      features: [
        'Todo lo incluido en el Plan Iniciación',
        'Personalización completa de marca y dominio propio',
        '1 funcionalidad extra incluida',
        'Plantillas de correo corporativas',
      ],
      cta: 'Configurar Plan Profesional',
      highlighted: true,
    },
    {
      id: 'ecosistema',
      name: 'Plan A Medida',
      tagline: 'Para proyectos serios',
      icon: <Globe className="w-6 h-6 text-[#1d4ed8]" />,
      desc: 'Para centros que necesitan integraciones y desarrollo propio.',
      scope: {
        opos: 'A medida',
        delivery: '6 - 8 semanas',
        support: 'Soporte dedicado',
      },
      features: [
        'Arquitectura dedicada',
        'Integración API con tus sistemas',
        'Roleplay IA y automatizaciones a medida',
        'SLA y soporte prioritario',
      ],
      cta: 'Consultar Proyecto Enterprise',
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-28 md:py-36 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            Planes diseñados para <br />
            <span className="gold-gradient-text">escalar tu academia de oposiciones</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tres niveles claros, sin ruido y con una decisión fácil para dirección.
          </p>
        </div>

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
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    plan.highlighted
                      ? 'bg-[#1d4ed8] text-white border-[#1d4ed8]'
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-manrope font-black text-slate-900 uppercase tracking-tight mb-1">
                  {plan.name}
                </h3>
                <div className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-4">
                  {plan.tagline}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {plan.desc}
                </p>

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

                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-[#1d4ed8]' : 'text-slate-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

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
