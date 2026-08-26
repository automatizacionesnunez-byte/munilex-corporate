import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, Check, Sparkles, ArrowRight } from 'lucide-react';

interface PlansSectionProps {
  onOpenContact: (plan?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onOpenContact }) => {
  const plans = [
    {
      id: 'iniciacion',
      name: 'Plan Iniciación',
      tagline: '"Empieza por lo básico"',
      badge: 'Acceso Rápido',
      icon: <Rocket className="w-6 h-6 text-[#d4af37]" />,
      desc: 'Integración del ecosistema Munilex con acceso a 2 oposiciones del catálogo oficial (posibilidad de añadir extras). Ideal para academias que quieren validar la IA sin grandes inversiones.',
      scope: {
        opos: '2 del catálogo oficial',
        delivery: '1 - 2 semanas',
        support: 'Soporte estándar por email',
      },
      pricing: [
        { range: '0 a 150 alumnos', price: '3.00 € / u' },
        { range: '150 a 500 alumnos', price: '2.50 € / u' },
        { range: '+500 alumnos', price: '1.50 € / u' },
      ],
      features: [
        'Motor de tests y simulacros ilimitados',
        'Casos prácticos corregidos por IA con rúbrica',
        'Flashcards de repaso espaciado',
        'Asistente IA (Chatbot de dudas jurídicas)',
        'Panel de control de estudiantes',
        'Subdominio compartido seguro',
      ],
      cta: 'Consultar Plan Iniciación',
      highlighted: false,
    },
    {
      id: 'marca',
      name: 'Plan Marca',
      tagline: '"Tu tecnología propia"',
      badge: 'Más Popular • Marca Blanca',
      icon: <Heart className="w-6 h-6 text-black" />,
      desc: 'Incluye TODAS las oposiciones de nuestro catálogo y todas las funciones del Plan Iniciación. Personalización completa con tus colores, logo, dominio propio y soporte prioritario.',
      scope: {
        opos: 'Catálogo Completo (+42 Opos)',
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
        'Catálogo COMPLETO de oposiciones (AGE, Justicia, Sanidad, FFCC...)',
        'Marca Blanca 100% (Logo, paleta HSL, tipografías)',
        'Dominio propio personalizado (ej. campus.tuacademia.es)',
        '1 Funcionalidad extra a medida incluida',
        'Plantillas de correo con tu identidad corporativa',
        'Gestor de cuenta y onboarding de profesores',
      ],
      cta: 'Configurar Plan Marca',
      highlighted: true,
    },
    {
      id: 'ecosistema',
      name: 'Plan Ecosistema',
      tagline: '"Tu sistema educativo a medida"',
      badge: 'Enterprise',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      desc: 'Desarrollo 100% personalizado, funcionalidades ilimitadas, integración de temarios exclusivos y metodologías propias con infraestructura dedicada de alta escalabilidad.',
      scope: {
        opos: 'A medida + Ingesta de temarios propios',
        delivery: '6 - 8 semanas',
        support: 'Ingeniero de soporte dedicado',
      },
      pricing: [
        { range: 'Setup inicial', price: 'Bajo presupuesto' },
        { range: 'Licencia alumno', price: 'Tarifa reducida Enterprise' },
        { range: 'Infraestructura', price: 'Dedicada' },
      ],
      features: [
        'Todo lo del Plan Marca + Arquitectura dedicada',
        'Digitalización e ingesta de temarios privados de la academia',
        'Integración API con Moodle, Canvas, Holded o ERP del centro',
        'Módulos de roleplay IA para exámenes orales (Habilitados, Jueces)',
        'Servidores y bases de datos aisladas en UE',
        'Contrato SLA de disponibilidad del 99.9%',
      ],
      cta: 'Consultar Proyecto Enterprise',
      highlighted: false,
    },
  ];

  return (
    <section id="plans" className="py-28 md:py-36 relative bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tarifas Claras y Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            PLANES DISEÑADOS PARA <br />
            <span className="gold-gradient-text">ESCALAR TU CENTRO</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Sin costes ocultos. Licencias calculadas mensualmente en función del número real de alumnos activos en tu plataforma.
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
                  ? 'bg-[#181A24] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 lg:-translate-y-4'
                  : 'bg-[#13141B] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8c2c] py-1.5 text-center text-black font-manrope font-black text-[10px] uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
                <div className={`flex items-center justify-between mb-6 ${plan.highlighted ? 'mt-4' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    plan.highlighted
                      ? 'bg-[#d4af37] text-black border-[#d4af37]'
                      : 'bg-[#1E202C] border-white/5'
                  }`}>
                    {plan.icon}
                  </div>
                  {!plan.highlighted && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 px-3 py-1 bg-white/5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-manrope font-black text-white uppercase tracking-tight mb-1">
                  {plan.name}
                </h3>
                <div className="text-xs font-bold text-[#d4af37] italic uppercase tracking-wider mb-4">
                  {plan.tagline}
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-8">
                  {plan.desc}
                </p>

                {/* Scope & Timing Box */}
                <div className="p-4 rounded-2xl bg-[#0B0C10] border border-white/5 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/40 font-medium">Oposiciones:</span>
                    <span className="text-white font-bold">{plan.scope.opos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-medium">Entrega:</span>
                    <span className="text-white font-bold">{plan.scope.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-medium">Soporte:</span>
                    <span className="text-white font-bold">{plan.scope.support}</span>
                  </div>
                </div>

                {/* Pricing Table Box */}
                <div className={`p-4 rounded-2xl mb-8 border ${
                  plan.highlighted
                    ? 'bg-[#d4af37]/10 border-[#d4af37]/30'
                    : 'bg-white/[0.02] border-white/5'
                }`}>
                  <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-wider mb-2.5">
                    Licencia Alumno / Mes
                  </div>
                  <div className="space-y-1.5 text-xs font-bold">
                    {plan.pricing.map((p, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5">
                        <span className="text-white/50">{p.range}</span>
                        <span className="text-white font-mono">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-black uppercase text-white/40 tracking-wider mb-2">
                    Qué Incluye:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-[#d4af37]' : 'text-white/40'
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
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#e6c65b] text-black shadow-lg shadow-[#d4af37]/25 hover:scale-[1.02]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30'
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
