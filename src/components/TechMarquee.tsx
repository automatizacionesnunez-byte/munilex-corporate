import React from 'react';
import { ShieldCheck, Cpu, Database, Lock, Globe, Server, CheckCircle, Zap } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const trustItems = [
    { label: 'Esquema Nacional de Seguridad (ENS)', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { label: 'Alineado con EU AI Act 2026', icon: <Lock className="w-4 h-4 text-[#6f7f64]" /> },
    { label: 'RGPD / Soberanía de Datos en UE', icon: <Globe className="w-4 h-4 text-emerald-400" /> },
    { label: 'Motor IA Multi-LLM (Gemini & DeepSeek)', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { label: 'Infraestructura Cloudflare Edge', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { label: 'Base de Datos Supabase Postgres Dedicada', icon: <Database className="w-4 h-4 text-emerald-300" /> },
    { label: '99.9% Uptime SLA Garantizado', icon: <Server className="w-4 h-4 text-emerald-500" /> },
    { label: 'Pasarelas de Pago Stripe & SEPA B2B', icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
  ];

  return (
    <div className="py-8 bg-[#07080B] border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080B] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-8">
        {[...trustItems, ...trustItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all text-xs font-semibold text-white/70 shrink-0"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

