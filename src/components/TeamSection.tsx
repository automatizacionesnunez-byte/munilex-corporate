import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Brain, ArrowUpRight, Phone } from 'lucide-react';
import joseMariaImg from '../assets/jose_maria.jpg';
import franciscoMarinImg from '../assets/francisco_marin.jpg';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'José María Núñez Mejías',
      role: 'Fundador & Director Técnico (CTO)',
      specialty: 'Consultoría LegalTech, IA Aplicada & RAG Jurídico',
      image: joseMariaImg,
      bio: 'Jurista certificado por Racks Academy. Especializado en la convergencia del Derecho Administrativo y la Inteligencia Artificial. Con trayectoria docente en TECH University, diseña la arquitectura algorítmica y la precisión de los modelos de Munilex.',
      credentials: ['Jurista Especialista', 'Docente TECH University', 'Certificado Racks Academy', 'LegalTech & RAG'],
      phone: '+34 605 39 29 12',
      phoneLink: 'https://wa.me/34605392912',
      email: 'administracion@munilex.es',
      linkedin: 'https://www.linkedin.com/in/jose-maria-nu%C3%B1ez-mejia-73b06222b/',
    },
    {
      name: 'Francisco de Paula Marín',
      role: 'Fundador & Director Académico / Comercial (CMO)',
      specialty: 'Estrategia de Centros Educativos, Docencia Jurídica & B2B',
      image: franciscoMarinImg,
      bio: 'Abogado y Docente con más de 10 años de experiencia acompañando a academias, centros de formación y alumnos de Derecho en toda España. Director de TFM en el Máster de Abogacía de la UNIR y formador colaborador en proyectos educativos de referencia nacional.',
      credentials: ['Abogado Colegiado', 'Director TFM Máster UNIR', '+10 Años en Formación', 'Dirección Académica'],
      phone: '+34 649 49 05 80',
      phoneLink: 'https://wa.me/34649490580',
      email: 'administracion@munilex.es',
      linkedin: 'https://www.linkedin.com/in/franciscodepaulamarin',
    },
  ];

  return (
    <section id="team" className="py-28 md:py-36 relative bg-[#07080B] border-t border-white/5">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#10b981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-xs font-bold text-[#10b981] uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Liderazgo Jurídico y Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            DISEÑADO POR JURISTAS Y <br />
            <span className="gold-gradient-text">PREPARADORES DE ÉLITE</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Nuestra tecnología no es un software genérico. Detrás de cada algoritmo hay abogados, profesores universitarios y directores de centros con años de experiencia real en formación y operación comercial.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111827] rounded-[3rem] p-8 sm:p-10 border border-white/10 hover:border-[#10b981]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/60"
            >
              <div>
                {/* Header Profile Photo & Badges */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-2 border-[#10b981]/30 shadow-lg shadow-[#10b981]/10 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-[#080d15] border border-[#10b981]/30 text-[#10b981]">
                      <Brain className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded-md mb-2">
                      {founder.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-manrope font-black text-white leading-tight mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-white/50 font-medium">
                      {founder.specialty}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Credentials Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {founder.credentials.map((cred, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-white/70"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Channels Bar */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={founder.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/30 text-xs font-bold text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {founder.phone}</span>
                </a>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 border border-[#0A66C2]/30 text-xs font-bold text-[#70B5F9] transition-all"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Badge */}
        <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-[#111827]/60 border border-white/5 text-center text-xs text-white/50 flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#10b981] shrink-0" />
          <span>
            <strong>Munilex Academy, S.L.</strong> (CIF: B88655980) · Sociedad mercantil registrada en España.
          </span>
        </div>

      </div>
    </section>
  );
};


