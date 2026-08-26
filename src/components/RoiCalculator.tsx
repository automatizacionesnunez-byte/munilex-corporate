import { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (plan?: string, students?: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [students, setStudents] = useState<number>(120);
  const [selectedPlan, setSelectedPlan] = useState<'iniciacion' | 'marca'>('marca');
  const [monthlyFee, setMonthlyFee] = useState<number>(70);

  // Price tier logic based on Munilex Corporate specifications:
  // Plan Iniciación: 0-150: 3€ | 150-500: 2.5€ | +500: 1.5€
  // Plan Marca: 0-150: 4€ | 150-500: 3€ | +500: 2€
  const getCostPerStudent = () => {
    if (selectedPlan === 'iniciacion') {
      if (students <= 150) return 3.0;
      if (students <= 500) return 2.5;
      return 1.5;
    } else {
      if (students <= 150) return 4.0;
      if (students <= 500) return 3.0;
      return 2.0;
    }
  };

  const costPerStudent = getCostPerStudent();
  const totalCost = students * costPerStudent;
  const totalRevenue = students * monthlyFee;
  const netProfit = totalRevenue - totalCost;
  const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(1);

  return (
    <section id="calculator" className="py-28 md:py-36 relative bg-[#07080B] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Rentabilidad B2B</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-white uppercase leading-tight mb-6">
            CALCULA TU INVERSIÓN Y <br />
            <span className="gold-gradient-text">BENEFICIO NETO</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Tarifas por alumno/mes decrecientes según volumen. Sin costes ocultos ni comisiones sobre tus matriculaciones.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#13141B] border border-white/10 p-8 sm:p-12 shadow-2xl shadow-black/90">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls Side (Col 7) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Plan Switcher */}
              <div>
                <label className="block text-xs font-black uppercase text-[#d4af37] tracking-wider mb-3">
                  1. Selecciona el Tipo de Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedPlan('iniciacion')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedPlan === 'iniciacion'
                        ? 'bg-[#1C1E2A] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                        : 'bg-[#0B0C10] border-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold text-white mb-1">Plan Iniciación</div>
                    <div className="text-xs text-white/50">2 oposiciones del catálogo</div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan('marca')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      selectedPlan === 'marca'
                        ? 'bg-[#1C1E2A] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                        : 'bg-[#0B0C10] border-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#d4af37] text-black text-[9px] font-black uppercase">
                      Recomendado
                    </span>
                    <div className="text-sm font-bold text-white mb-1">Plan Marca</div>
                    <div className="text-xs text-white/50">Marca Blanca + Catálogo 100%</div>
                  </button>
                </div>
              </div>

              {/* Slider: Number of Students */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-black uppercase text-white/80 tracking-wider">
                    2. Número de Alumnos Activos
                  </label>
                  <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#0B0C10] border border-white/10 text-white font-mono font-bold text-sm">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
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
                  className="w-full h-2 bg-[#0B0C10] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-2 font-mono">
                  <span>10 alumnos</span>
                  <span>250</span>
                  <span>500</span>
                  <span>1.000+ alumnos</span>
                </div>
              </div>

              {/* Slider: Monthly Tuition Fee charged by Academy */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-black uppercase text-white/80 tracking-wider">
                    3. Tu Cuota Mensual Media por Alumno
                  </label>
                  <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#0B0C10] border border-white/10 text-white font-mono font-bold text-sm">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
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
                  className="w-full h-2 bg-[#0B0C10] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-2 font-mono">
                  <span>30 €/mes</span>
                  <span>75 €/mes</span>
                  <span>150 €/mes</span>
                  <span>200 €/mes</span>
                </div>
              </div>
            </div>

            {/* Results Side (Col 5) */}
            <div className="lg:col-span-5 bg-[#0B0C10] p-8 rounded-[2.5rem] border border-[#d4af37]/30 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-widest mb-1">
                  Desglose de Rentabilidad Mensual
                </div>
                <div className="text-xl font-manrope font-black text-white mb-6">
                  {selectedPlan === 'iniciacion' ? 'Plan Iniciación' : 'Plan Marca'}
                </div>

                <div className="space-y-4 pb-6 border-b border-white/10">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/60">Coste Licencia Munilex / Alumno</span>
                    <span className="font-mono font-bold text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded-md">
                      {costPerStudent.toFixed(2)} € / mes
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/60">Coste Total Tecnología Munilex</span>
                    <span className="font-mono font-bold text-white">
                      {totalCost.toLocaleString('es-ES')} € / mes
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/60">Ingresos Totales Estimados</span>
                    <span className="font-mono font-bold text-emerald-400">
                      {totalRevenue.toLocaleString('es-ES')} € / mes
                    </span>
                  </div>
                </div>

                {/* Big Profit Number */}
                <div className="pt-6">
                  <div className="text-xs text-white/50 mb-1">Margen Bruto de la Academia</div>
                  <div className="text-3xl sm:text-4xl font-manrope font-black text-emerald-400 tracking-tight">
                    +{netProfit.toLocaleString('es-ES')} € <span className="text-xs text-white/40 font-normal">/ mes</span>
                  </div>
                  <div className="text-[11px] text-emerald-400/80 font-semibold mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Margen sobre tecnología: {profitMargin}%</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenContact(selectedPlan, students)}
                className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6c65b] text-black font-manrope font-black text-xs uppercase tracking-widest shadow-lg shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Solicitar Presupuesto para {students} Alumnos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
