import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export const LeanSections: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="w-5 h-5 text-[#1d4ed8]" />
              <h2 className="text-lg sm:text-2xl font-manrope font-black text-slate-900 uppercase tracking-tight">
                Confianza sin ruido
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Datos alojados en la UE',
                'Acompañamiento de implantación',
                'Marca y dominio propios',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5">
                  <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] inline-block mr-2 align-[-2px]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Zap className="w-5 h-5 text-[#1d4ed8]" />
              <h2 className="text-lg sm:text-2xl font-manrope font-black text-slate-900 uppercase tracking-tight">
                Cómo funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  step: '01',
                  title: 'Nos adaptamos a tu academia',
                  text: 'Revisamos tus oposiciones, tu forma de trabajar y lo que quieres mostrar al alumno.',
                },
                {
                  step: '02',
                  title: 'Activamos la plataforma',
                  text: 'Dejamos la base lista con tu marca, tu dominio y tus contenidos principales.',
                },
                {
                  step: '03',
                  title: 'Empiezas a vender mejor',
                  text: 'El alumno entiende rápido el valor y tu equipo gana tiempo en soporte y seguimiento.',
                },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs font-black tracking-[0.3em] text-[#1d4ed8] mb-3">{item.step}</div>
                  <h3 className="text-base font-manrope font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-5 h-5 text-[#1d4ed8]" />
              <h2 className="text-lg sm:text-2xl font-manrope font-black text-slate-900 uppercase tracking-tight">
                Problema y solución
              </h2>
            </div>

            <div className="grid gap-3">
              {[
                ['Mucho trabajo repetitivo', 'Automatizas corrección, respuestas y seguimiento.'],
                ['La propuesta se explica mal', 'Lo enseñas como una plataforma clara para oposiciones.'],
                ['Tu equipo pierde tiempo', 'Centralizas procesos y reduces tareas manuales.'],
              ].map(([problem, solution]) => (
                <div key={problem} className="grid md:grid-cols-[1.1fr_0.9fr] gap-3 items-center rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-slate-900/5">
                  <div className="text-sm font-semibold text-slate-900">{problem}</div>
                  <div className="text-sm text-slate-600 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>{solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeanSections;
