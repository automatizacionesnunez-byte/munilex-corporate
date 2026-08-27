import { ShieldCheck, Scale, Cookie, Mail } from 'lucide-react';

export const LegalSection = () => {
  return (
    <section id="legal" className="py-24 md:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
            <span>Información legal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-4">
            Aviso legal, privacidad y cookies
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
            Textos base para una web corporativa. Conviene revisarlos con asesoría jurídica antes de publicar la versión definitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article id="aviso-legal" className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 text-slate-200">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-manrope font-black text-slate-900 uppercase mb-3">Aviso legal</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Titular: Munilex Academy, S.L., CIF B88655980, con domicilio social en Madrid, España. El sitio se ofrece con carácter informativo y comercial para academias y centros educativos.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              El contenido, diseño, marcas y materiales gráficos están protegidos por derechos de propiedad intelectual e industrial. No se permite su reutilización sin autorización expresa.
            </p>
          </article>

          <article id="privacidad" className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 text-slate-200">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-manrope font-black text-slate-900 uppercase mb-3">Política de privacidad</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Los datos que nos facilites se tratarán para atender tu solicitud, preparar demostraciones, gestionar comunicaciones comerciales y dar soporte al servicio solicitado.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a administracion@munilex.es. Conservamos la información el tiempo necesario para la finalidad indicada.
            </p>
          </article>

          <article id="cookies" className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 text-slate-200">
              <Cookie className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-manrope font-black text-slate-900 uppercase mb-3">Política de cookies</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Esta web puede usar cookies técnicas necesarias para el funcionamiento y la navegación. Si en el futuro incorporamos cookies analíticas o de terceros, pediremos un consentimiento claro y visible.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Según la guía de la AEPD, aceptar y rechazar cookies deben presentarse con la misma visibilidad y sin provocar una navegación confusa.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
