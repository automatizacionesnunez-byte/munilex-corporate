import React from 'react';
import { ShieldCheck, Lock, Database, FileCheck2, Scale, Server } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityCards = [
    {
      title: 'IA con supervisión humana',
      desc: 'La plataforma está pensada para apoyar la preparación y la gestión sin sustituir el criterio de tu equipo docente.',
      icon: <Scale className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Datos alojados en la UE',
      desc: 'Contenido, datos de alumnos y configuraciones se mantienen en infraestructura europea para reforzar privacidad y control.',
      icon: <ShieldCheck className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Acceso por roles',
      desc: 'Configuramos permisos para dirección, profesorado y administración con trazabilidad de accesos y actividad.',
      icon: <Database className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Temarios protegidos',
      desc: 'Tus materiales, simulacros y recursos propios no se reutilizan fuera de tu entorno sin autorización explícita.',
      icon: <Lock className="w-6 h-6 text-sky-600" />,
    },
    {
      title: 'Cifrado y respaldo',
      desc: 'Usamos cifrado en tránsito y copias de seguridad periódicas para minimizar riesgos operativos.',
      icon: <Server className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Continuidad del servicio',
      desc: 'El servicio se diseña para funcionar sin dependencia de tu equipo técnico y con soporte continuo.',
      icon: <FileCheck2 className="w-6 h-6 text-[#1d4ed8]" />,
    },
  ];

  return (
    <section id="security" className="py-28 md:py-36 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Seguridad jurídica y técnica</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            CONFIANZA, PRIVACIDAD Y <br />
            <span className="gold-gradient-text">CONTROL DEL DATO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            La plataforma está pensada para que una academia de oposiciones pueda trabajar con tranquilidad, claridad contractual y una base técnica sólida.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityCards.map((card, index) => (
            <div
              key={index}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#1d4ed8]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-lg font-manrope font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


