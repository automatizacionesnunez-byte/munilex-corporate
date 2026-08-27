import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { type MainTabType } from './Navbar';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetType: MainTabType;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose, targetType }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isAcademy = targetType !== 'fp';
  const isEnglish = targetType === 'ingles';
  const isOther = targetType === 'otros';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg rounded-[2.5rem] bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl shadow-slate-900/15 overflow-hidden z-10"
          >
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full blur-3xl pointer-events-none bg-[#1d4ed8]/8" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-manrope font-black text-slate-900 uppercase">
                  ¡Dossier Listo para Descargar!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Hemos generado tu propuesta y enviado una copia a <strong className="text-slate-900">{formData.email}</strong>. Además, un asesor se pondrá a tu disposición para resolver dudas.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-2 rounded-xl border ${
                    isAcademy ? 'bg-[#1d4ed8]/10 border-[#1d4ed8]/20 text-[#1d4ed8]' : 'bg-[#1d4ed8]/10 border-[#1d4ed8]/20 text-[#1d4ed8]'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1d4ed8]">
                    {isAcademy
                      ? isEnglish
                        ? 'Dossier de Inglés & Tarifas B2B'
                        : isOther
                          ? 'Dossier para Otros Centros & Tarifas B2B'
                          : 'Dossier Técnico & Tarifas B2B'
                      : 'Guía Curricular & Roleplay FP'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-manrope font-black text-slate-900 uppercase tracking-tight mb-2">
                  {isAcademy
                    ? isEnglish
                      ? 'Descargar Dossier Completo para Academia de Inglés'
                      : isOther
                        ? 'Descargar Dossier Completo para Otros Centros'
                        : 'Descargar Dossier Completo para Academias'
                    : 'Descargar Guía de Innovación para Centros FP'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {isAcademy
                    ? isEnglish
                      ? 'Incluye catálogo de itinerarios, personalización completa con tu marca, comparativa de costes y guía específica para EPG, listening, grammar y progreso por niveles.'
                      : isOther
                        ? 'Incluye catálogo de itinerarios, personalización completa con tu marca, comparativa de costes y guía específica para autoescuelas, ciencias, refuerzo y otros centros.'
                        : 'Incluye catálogo de itinerarios, personalización completa con tu marca, comparativa de costes y modelo de contrato, con foco también en academias de inglés y otros centros que trabajen EPG, listening, grammar y progreso por niveles.'
                    : 'Incluye especificación pedagógica de roleplay, rúbricas curriculares y plan de formación al claustro docente.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Laura Gómez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Corporativo o Institucional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="laura@centroeducativo.es"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {isAcademy
                          ? isEnglish
                            ? 'Nombre Academia de Inglés *'
                            : isOther
                              ? 'Nombre Centro *'
                              : 'Nombre Academia *'
                          : 'Nombre Instituto / Centro *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isAcademy ? (isEnglish ? 'English School' : isOther ? 'Autoescuela / Centro de Refuerzo' : 'Centro de formación') : 'Instituto FP'}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-manrope font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-white shadow-[#1d4ed8]/20 hover:scale-[1.01]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar Dossier en PDF (Inmediato)</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>Descarga segura · Respetamos tu privacidad y no enviamos spam</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

