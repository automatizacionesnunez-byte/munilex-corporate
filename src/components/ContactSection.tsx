import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, Sparkles, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
import { type MainTabType } from './Navbar';

interface ContactSectionProps {
  targetType: MainTabType;
  initialPlan?: string;
  initialStudents?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ targetType, initialPlan, initialStudents }) => {
  const isAcademy = targetType !== 'fp';
  const isEnglish = targetType === 'ingles';
  const isOther = targetType === 'otros';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: isAcademy ? 'Dirección / Propietario del centro' : 'Equipo Directivo / Jefatura de FP',
    studentsCount: initialStudents ? `${initialStudents} alumnos` : (isAcademy ? '50 a 150 alumnos' : '100 a 300 alumnos'),
    planInterest: initialPlan || (isAcademy ? 'Plan Marca (White-Label)' : 'Piloto Centro FP'),
    fpFamily: 'Informática y Comunicaciones (DAM / DAW / ASIR)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-[#07080B] overflow-hidden">
      {/* Background Lighting */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none ${
        isAcademy ? 'bg-[#c7a15a]/10' : 'bg-cyan-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${
              isAcademy
                ? 'bg-[#c7a15a]/10 border-[#c7a15a]/20 text-[#c7a15a]'
                : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isAcademy
                  ? isEnglish
                    ? 'Contacto Directo para Academia de Inglés'
                    : isOther
                      ? 'Contacto Directo para Otros Centros'
                      : 'Contacto Directo B2B para Centros'
                  : 'Contacto Institucional FP'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight">
              {isAcademy ? (
                <>
                  {isEnglish ? (
                    <>
                      IMPULSA TU ACADEMIA <br />
                      <span className="gold-gradient-text">DE INGLÉS CON IA</span>
                    </>
                  ) : isOther ? (
                    <>
                      AUTOMATIZA TU CENTRO <br />
                      <span className="gold-gradient-text">CON TECNOLOGÍA IA</span>
                    </>
                  ) : (
                    <>
                      IMPULSA TU CENTRO <br />
                      <span className="gold-gradient-text">CON TECNOLOGÍA IA</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  DIGITALIZA TU CENTRO <br />
                  <span className="cyan-gradient-text">DE FORMACIÓN PROFESIONAL</span>
                </>
              )}
            </h2>

            <p className="text-base text-white/60 leading-relaxed">
              {isAcademy
                ? isEnglish
                  ? 'Agenda una sesión personalizada de 20 minutos donde te mostraremos la plataforma en vivo con EPG, listening, gramática, progreso y niveles adaptados a tu academia de inglés.'
                  : isOther
                    ? 'Agenda una sesión personalizada de 20 minutos donde te mostraremos cómo automatizar matrículas, seguimiento, pruebas y comunicación para autoescuelas, centros de ciencias, refuerzo y otros centros.'
                    : 'Agenda una sesión personalizada de 20 minutos donde te mostraremos la plataforma en vivo con tus colores corporativos y calcularemos tu propuesta económica exacta para academias de oposiciones y otros centros.'
                : 'Solicita una demostración en directo adaptada a las familias profesionales de tu centro para que tu claustro docente pruebe el roleplay y la evaluación curricular.'}
            </p>

            {/* Quality & Limited Capacity Callout (CRO Urgency) */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-white/70">
              <Clock className={`w-5 h-5 shrink-0 ${isAcademy ? 'text-[#c7a15a]' : 'text-cyan-400'}`} />
              <div>
                <strong className="text-white block">Capacidad de Onboarding Mensual:</strong>
                <span>Máx. 3 centros por mes para garantizar despliegue llave en mano y soporte continuo.</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/34649490580?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20Munilex%20Corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827] border border-white/5 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#080d15] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium">
                    {isEnglish ? 'Dirección Comercial & Idiomas' : isOther ? 'Dirección Comercial & Otros Centros' : 'Dirección Comercial & Centros'}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Francisco de Paula Marín · +34 649 49 05 80
                  </div>
                  <div className="text-[10px] text-emerald-400/80 font-mono">Chat directo por WhatsApp</div>
                </div>
              </a>

              <a
                href="https://wa.me/34605392912?text=Hola,%20quisiera%20consultar%20detalles%20t%C3%A9cnicos%20de%20Munilex%20Corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827] border border-white/5 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#080d15] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium">Dirección Técnica & IA</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    José María Núñez Mejías · +34 605 39 29 12
                  </div>
                  <div className="text-[10px] text-emerald-400/80 font-mono">Chat técnico directo</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827] border border-white/5">
                <div className={`w-12 h-12 rounded-xl bg-[#080d15] flex items-center justify-center ${
                  isAcademy ? 'text-[#c7a15a]' : 'text-cyan-400'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium">Email Corporativo Oficial</div>
                  <div className="text-sm font-bold text-white">administracion@munilex.es</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#111827]/60 border border-white/5 space-y-3 text-xs text-white/60">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Compromiso Munilex Academy, S.L.</span>
              </div>
              <p>
                Sin permanencias forzosas. Soporte técnico continuo y actualizaciones legislativas o curriculares automáticas incluidas.
              </p>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[3rem] bg-[#111827] border border-white/10 shadow-2xl shadow-black/80">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-manrope font-black text-white uppercase">
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                    Francisco de Paula o José María se pondrán en contacto contigo en menos de 24h laborales para preparar tu entorno de prueba.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-xl font-manrope font-black text-white uppercase tracking-tight mb-2">
                    {isAcademy
                      ? isEnglish
                        ? 'Solicitar Demostración para Academia de Inglés'
                        : isOther
                          ? 'Solicitar Demostración para Otros Centros'
                          : 'Solicitar Auditoría & Demostración B2B'
                      : 'Solicitar Demostración Piloto para Centro FP'}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Email Corporativo o Institucional *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@centroeducativo.es"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 612 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        {isAcademy ? (isEnglish ? 'Nombre de tu Academia de Inglés *' : isOther ? 'Nombre de tu Centro *' : 'Nombre de tu Centro *') : 'Nombre del Instituto / Centro FP *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isAcademy ? (isEnglish ? 'Oxford English Center / Wall Street School' : isOther ? 'Autoescuela / Academia de Física / Centro de Refuerzo' : 'Academia Oposiciones Élite') : 'IES / Centro de FP San Viator'}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Alumnos Activos Estimados
                      </label>
                      <select
                        value={formData.studentsCount}
                        onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                      >
                        <option value="10 a 50 alumnos">10 a 50 alumnos</option>
                        <option value="50 a 150 alumnos">50 a 150 alumnos</option>
                        <option value="150 a 500 alumnos">150 a 500 alumnos</option>
                        <option value="+500 alumnos">+500 alumnos (Campus / Red)</option>
                      </select>
                    </div>

                    {isAcademy ? (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Plan de Interés
                        </label>
                        <select
                          value={formData.planInterest}
                          onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                        >
                          <option value="Plan Iniciación">Plan Iniciación (2 itinerarios / materias)</option>
                          <option value="Plan Marca (White-Label)">Plan Marca (Marca Blanca 100%)</option>
                          <option value="Plan Ecosistema">Plan Ecosistema (Desarrollo a Medida)</option>
                          <option value="Aún no estoy seguro">Aún no estoy seguro / Asesoramiento</option>
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Familia Profesional Principal
                        </label>
                        <select
                          value={formData.fpFamily}
                          onChange={(e) => setFormData({ ...formData, fpFamily: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white text-sm focus:border-[#c7a15a] focus:outline-none transition-colors"
                        >
                          <option value="Informática y Comunicaciones">Informática y Comunicaciones (DAM / DAW / ASIR)</option>
                          <option value="Sanidad">Sanidad (Cuidados, Farmacia, Laboratorio...)</option>
                          <option value="Administración y Gestión">Administración y Gestión (Finanzas, Asistencia...)</option>
                          <option value="Comercio y Marketing">Comercio y Marketing</option>
                          <option value="Servicios Socioculturales">Servicios Socioculturales y a la Comunidad</option>
                          <option value="Varios / Todo el Centro">Múltiples Familias / Todo el Centro</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                      {isAcademy
                        ? isEnglish
                          ? '¿Qué niveles, clases o necesidades específicas tienes? (Opcional)'
                          : isOther
                            ? '¿Qué materias, procesos o necesidades específicas tienes? (Opcional)'
                            : '¿Qué clases, materias o necesidades específicas tienes? (Opcional)'
                        : '¿Qué módulos o necesidades de simulación queréis reforzar? (Opcional)'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={isAcademy
                        ? isEnglish
                          ? 'Ej. Somos una academia de inglés. Queremos IA para EPG, listening, gramática, speaking, progreso por niveles y seguimiento...'
                          : isOther
                            ? 'Ej. Somos una autoescuela, una academia de física o un centro de refuerzo. Queremos IA para matrículas, pruebas, tutorías y seguimiento...'
                            : 'Ej. Somos una academia de oposiciones. Queremos IA para tests, tutorías y seguimiento...'
                        : 'Ej. Nos interesa especialmente el roleplay por voz para el módulo de FOL / IPE y atención al cliente en Sanidad...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#080d15] border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#c7a15a] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 rounded-xl font-manrope font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isAcademy
                        ? 'bg-gradient-to-r from-[#c7a15a] via-[#d9bc77] to-[#b68f4e] text-black shadow-[#c7a15a]/25'
                        : 'bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-black shadow-cyan-500/25'
                    }`}
                  >
                    <span>{isAcademy ? 'Solicitar Demostración y Presupuesto' : 'Solicitar Demostración Piloto en Directo'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-white/40 text-center">
                    🔒 Tus datos están protegidos bajo estricto cumplimiento del RGPD. No enviamos spam.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
