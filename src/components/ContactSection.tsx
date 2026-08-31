import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
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
    planInterest: initialPlan || (isAcademy ? 'Plan Profesional' : 'Piloto Centro FP'),
    fpFamily: 'Informática y Comunicaciones (DAM / DAW / ASIR)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-white overflow-hidden border-t border-slate-200">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none bg-[#1d4ed8]/8" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight">
              {isAcademy ? (
                <>
                  {isEnglish ? (
                    <>
                      HABLEMOS DE TU <br />
                      <span className="cyan-gradient-text">DE INGLÉS CON IA</span>
                    </>
                  ) : isOther ? (
                    <>
                      HABLEMOS DE TU <br />
                      <span className="cyan-gradient-text">CENTRO ESPECIALIZADO</span>
                    </>
                  ) : (
                    <>
                      HABLEMOS DE TU <br />
                      <span className="cyan-gradient-text">ACADEMIA CON IA</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  HABLEMOS DE TU <br />
                  <span className="cyan-gradient-text">CENTRO DE FORMACIÓN PROFESIONAL</span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {isAcademy
                ? isEnglish
                  ? 'Agenda una sesión breve y te enseñamos la plataforma en vivo con EPG, listening, grammar, progreso y niveles adaptados a tu academia de inglés.'
                  : isOther
                    ? 'Te enseñamos cómo automatizar matrículas, actividad, pruebas y comunicación para autoescuelas, centros de ciencias, refuerzo y otros centros.'
                    : 'Te mostramos la plataforma en vivo con tus colores corporativos y te damos una propuesta económica clara para tu academia.'
                : 'Solicita una demostración adaptada a tu centro para validar el roleplay, la evaluación curricular y la adopción por parte del claustro.'}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600 shadow-sm shadow-slate-900/5">
              <Clock className="w-5 h-5 shrink-0 text-[#1d4ed8]" />
              <div>
                <strong className="text-slate-900 block">Capacidad mensual limitada:</strong>
                <span>Máx. 3 centros por mes para cuidar la puesta en marcha y el soporte.</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/34649490580?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20Munilex%20Corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#1d4ed8]/30 transition-all group shadow-sm shadow-slate-900/5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xs text-slate-500 font-medium">
                    {isEnglish ? 'Dirección comercial & idiomas' : isOther ? 'Dirección comercial & otros centros' : 'Dirección comercial & centros'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors">
                    Francisco de Paula Marín · +34 649 49 05 80
                  </div>
                  <div className="text-[10px] text-[#1d4ed8] font-mono">Chat directo por WhatsApp</div>
                </div>
              </a>

              <a
                href="https://wa.me/34605392912?text=Hola,%20quisiera%20consultar%20detalles%20t%C3%A9cnicos%20de%20Munilex%20Corporate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#1d4ed8]/30 transition-all group shadow-sm shadow-slate-900/5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#1d4ed8] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Dirección técnica & IA</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors">
                    José María Núñez Mejías · +34 605 39 29 12
                  </div>
                  <div className="text-[10px] text-[#1d4ed8] font-mono">Chat técnico directo</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm shadow-slate-900/5">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1d4ed8] border border-slate-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Corporativo Oficial</div>
                  <div className="text-sm font-bold text-slate-900">administracion@munilex.es</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 text-xs text-slate-600 shadow-sm shadow-slate-900/5">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" />
                <span>Compromiso Munilex Academy, S.L.</span>
              </div>
              <p>
                Sin permanencias forzosas. Soporte técnico continuo y actualizaciones legislativas o curriculares incluidas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[3rem] bg-white border border-slate-200 shadow-2xl shadow-slate-900/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-manrope font-black text-slate-900 uppercase">
                    Solicitud recibida
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Francisco de Paula o José María te contactarán en menos de 24h laborales para preparar tu demo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2563eb] transition-all cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-xl font-manrope font-black text-slate-900 uppercase tracking-tight mb-2">
                    {isAcademy
                      ? isEnglish
                        ? 'Solicitar demo para academia de inglés'
                        : isOther
                          ? 'Solicitar demo para otros centros'
                          : 'Solicitar auditoría y demo'
                      : 'Solicitar demo piloto para FP'}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Email Corporativo o Institucional *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@centroeducativo.es"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 612 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        {isAcademy ? (isEnglish ? 'Nombre de tu academia de inglés *' : 'Nombre de tu centro *') : 'Nombre del instituto o centro FP *'}
                      </label>
                      <input
                        type="text"
                        required
                      placeholder={isAcademy ? (isEnglish ? 'Oxford English Center / Wall Street School' : isOther ? 'Autoescuela / academia / centro de refuerzo' : 'Academia Oposiciones Élite') : 'IES / Centro de FP San Viator'}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Alumnos estimados
                      </label>
                      <select
                        value={formData.studentsCount}
                        onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                      >
                        <option value="10 a 50 alumnos">10 a 50 alumnos</option>
                        <option value="50 a 150 alumnos">50 a 150 alumnos</option>
                        <option value="150 a 500 alumnos">150 a 500 alumnos</option>
                        <option value="+500 alumnos">+500 alumnos (Campus / Red)</option>
                      </select>
                    </div>

                    {isAcademy ? (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Plan de interés
                        </label>
                        <select
                          value={formData.planInterest}
                          onChange={(e) => setFormData({ ...formData, planInterest: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
                        >
                          <option value="Plan Iniciación">Plan Iniciación (2 itinerarios / materias)</option>
                          <option value="Plan Profesional">Plan Profesional (Identidad propia)</option>
                          <option value="Plan A Medida">Plan A Medida (Desarrollo específico)</option>
                          <option value="Aún no estoy seguro">Aún no estoy seguro / Asesoramiento</option>
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Familia profesional principal
                        </label>
                        <select
                          value={formData.fpFamily}
                          onChange={(e) => setFormData({ ...formData, fpFamily: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {isAcademy
                        ? isEnglish
                          ? '¿Qué niveles o necesidades específicas tienes? (Opcional)'
                          : isOther
                            ? '¿Qué materias o procesos quieres automatizar? (Opcional)'
                            : '¿Qué clases o materias necesitas reforzar? (Opcional)'
                        : '¿Qué módulos o necesidades queréis reforzar? (Opcional)'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={isAcademy
                        ? isEnglish
                          ? 'Ej. Queremos IA para EPG, listening, grammar, speaking y progreso por niveles.'
                          : isOther
                            ? 'Ej. Queremos IA para matrículas, pruebas, tutorías y atención al alumno.'
                            : 'Ej. Queremos IA para tests, tutorías y corrección asistida.'
                        : 'Ej. Nos interesa el roleplay por voz para FOL / IPE y atención al cliente.'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-[#1d4ed8] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-manrope font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-white shadow-[#1d4ed8]/25"
                  >
                    <span>{isAcademy ? 'Solicitar demo y presupuesto' : 'Solicitar demo piloto en directo'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-400 text-center">
                    Tus datos se usan exclusivamente para responder tu solicitud y no enviamos spam.
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
