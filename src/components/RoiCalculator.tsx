import { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (plan?: string, students?: number) => void;
  variant: 'academias' | 'ingles' | 'otros';
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact, variant }) => {
  const [students, setStudents] = useState<number>(120);
  const [selectedPlan, setSelectedPlan] = useState<'iniciacion' | 'profesional'>('profesional');
  const [monthlyFee, setMonthlyFee] = useState<number>(70);

  const getCostPerStudent = () => {
    if (selectedPlan === 'iniciacion') {
      if (students <= 150) return 3.0;
      if (students <= 500) return 2.5;
      return 1.5;
    }
    if (students <= 150) return 4.0;
    if (students <= 500) return 3.0;
    return 2.0;
  };

  const costPerStudent = getCostPerStudent();
  const totalCost = students * costPerStudent;
  const totalRevenue = students * monthlyFee;
  const netProfit = totalRevenue - totalCost;
  const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : '0.0';

  const copy = {
    academias: {
      badge: 'Simulador para Oposiciones',
      titleTop: 'Calcula tu inversión y',
      titleBottom: 'beneficio neto',
      intro: 'Tarifas por alumno/mes decrecientes según volumen. Sin costes ocultos ni comisiones sobre tus matriculaciones.',
      planOne: '2 materias o itinerarios',
      planTwo: 'Identidad propia + Catálogo 100%',
      resultLabel: 'Margen Bruto del Centro',
      button: 'Solicitar Presupuesto para',
    },
    ingles: {
      badge: 'Simulador para Inglés',
      titleTop: 'Calcula tu inversión y',
      titleBottom: 'beneficio neto de la academia',
      intro: 'Tarifas por alumno/mes decrecientes según volumen. Sin costes ocultos ni comisiones sobre tus matrículas de idiomas.',
      planOne: '2 niveles o itinerarios',
      planTwo: 'Identidad propia + Progreso por niveles',
      resultLabel: 'Margen Bruto de la Academia',
      button: 'Solicitar Presupuesto para',
    },
    otros: {
      badge: 'Simulador para Otros Centros',
      titleTop: 'Calcula tu inversión y',
      titleBottom: 'beneficio neto del centro',
      intro: 'Tarifas por alumno/mes decrecientes según volumen. Sin costes ocultos ni comisiones sobre tus matrículas o procesos internos.',
      planOne: '2 materias o procesos',
      planTwo: 'Identidad propia + Automatización',
      resultLabel: 'Margen Bruto del Centro',
      button: 'Solicitar Presupuesto para',
    },
  }[variant];

  return (
    <section id="calculator" className="py-28 md:py-36 relative bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d4ed8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{copy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-6">
            {copy.titleTop} <br />
            <span className="cyan-gradient-text">{copy.titleBottom}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {copy.intro}
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-slate-200 p-8 sm:p-12 shadow-2xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <label className="block text-xs font-black uppercase text-[#1d4ed8] tracking-wider mb-3">
                  1. Selecciona el Tipo de Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedPlan('iniciacion')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedPlan === 'iniciacion'
                        ? 'bg-[#1d4ed8]/10 border-[#1d4ed8] shadow-lg shadow-[#1d4ed8]/10'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-[#1d4ed8]/30'
                    }`}
                  >
                    <div className="text-sm font-bold text-slate-900 mb-1">Plan Iniciación</div>
                    <div className="text-xs text-slate-500">{copy.planOne}</div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan('profesional')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      selectedPlan === 'profesional'
                        ? 'bg-[#1d4ed8]/10 border-[#1d4ed8] shadow-lg shadow-[#1d4ed8]/10'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-[#1d4ed8]/30'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#1d4ed8] text-white text-[9px] font-black uppercase">
                      Recomendado
                    </span>
                    <div className="text-sm font-bold text-slate-900 mb-1">Plan Profesional</div>
                    <div className="text-xs text-slate-500">{copy.planTwo}</div>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-black uppercase text-slate-700 tracking-wider">
                    2. Número de Alumnos Activos
                  </label>
                  <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono font-bold text-sm">
                    <Users className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>{students} alumnos</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={students}
                  onChange={(e) => setStudents(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>10 alumnos</span>
                  <span>250</span>
                  <span>500</span>
                  <span>1.000+ alumnos</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-black uppercase text-slate-700 tracking-wider">
                    3. Tu Cuota Mensual Media por Alumno
                  </label>
                  <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono font-bold text-sm">
                    <DollarSign className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>{monthlyFee} € / mes</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="30"
                  max="200"
                  step="5"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>30 €/mes</span>
                  <span>75 €/mes</span>
                  <span>150 €/mes</span>
                  <span>200 €/mes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-200 relative overflow-hidden flex flex-col justify-between h-full shadow-xl shadow-slate-900/5">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1d4ed8]/8 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="text-[10px] font-black uppercase text-[#1d4ed8] tracking-widest mb-1">
                  Desglose de Rentabilidad Mensual
                </div>
                <div className="text-xl font-manrope font-black text-slate-900 mb-6">
                  {selectedPlan === 'iniciacion' ? 'Plan Iniciación' : 'Plan Profesional'}
                </div>

                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Coste Licencia Munilex / Alumno</span>
                    <span className="font-mono font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-2 py-0.5 rounded-md">
                      {costPerStudent.toFixed(2)} € / mes
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Coste Total Tecnología Munilex</span>
                    <span className="font-mono font-bold text-slate-900">
                      {totalCost.toLocaleString('es-ES')} € / mes
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Ingresos Totales Estimados</span>
                    <span className="font-mono font-bold text-[#1d4ed8]">
                      {totalRevenue.toLocaleString('es-ES')} € / mes
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="text-xs text-slate-500 mb-1">{copy.resultLabel}</div>
                  <div className="text-3xl sm:text-4xl font-manrope font-black text-slate-900 tracking-tight">
                    +{netProfit.toLocaleString('es-ES')} € <span className="text-xs text-slate-400 font-normal">/ mes</span>
                  </div>
                  <div className="text-[11px] text-[#1d4ed8] font-semibold mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Margen sobre tecnología: {profitMargin}%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenContact(selectedPlan, students)}
                className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe] text-white font-manrope font-black text-xs uppercase tracking-widest shadow-lg shadow-[#1d4ed8]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{copy.button} {students} Alumnos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

