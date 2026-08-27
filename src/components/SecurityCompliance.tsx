import React from 'react';
import { ShieldCheck, Lock, Database, FileCheck2, Scale, Server } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityCards = [
    {
      title: 'Alineación con EU AI Act',
      desc: 'Nuestros sistemas de IA educativa cumplen con las directrices europeas de transparencia, explicabilidad y supervisión humana requeridas para plataformas formativas.',
      icon: <Scale className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Esquema Nacional de Seguridad (ENS)',
      desc: 'Diseñado bajo los estándares de seguridad de la administración pública española para la preparación de cuerpos generales, fuerzas de seguridad y habilitados nacionales.',
      icon: <ShieldCheck className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Soberanía de Datos 100% en UE',
      desc: 'Tus bases de datos, exámenes y registros de alumnos residen en servidores de la Unión Europea bajo estricto cumplimiento del RGPD.',
      icon: <Database className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Protección de Temarios Propios',
      desc: 'Garantía contractual de no cesión ni entrenamiento de modelos públicos con los materiales exclusivos o exámenes que suba tu academia.',
      icon: <Lock className="w-6 h-6 text-sky-600" />,
    },
    {
      title: 'Cifrado de Extremo a Extremo',
      desc: 'Comunicaciones blindadas con TLS 1.3 y cifrado AES-256 en reposo para todos los datos sensibles y perfiles de alumnos.',
      icon: <Server className="w-6 h-6 text-[#1d4ed8]" />,
    },
    {
      title: 'Copias de Seguridad Automatizadas',
      desc: 'Backups diarios redundantes con recuperación ante desastres en minutos y monitorización de disponibilidad 24/7.',
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
            <span>Máxima Seguridad Jurídica & Tecnológica</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            CONFIANZA, PRIVACIDAD Y <br />
            <span className="gold-gradient-text">CUMPLIMIENTO LEGAL</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tu reputación es lo primero. Activa tecnología de última generación con la total tranquilidad de cumplir la normativa española y europea más exigente.
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


