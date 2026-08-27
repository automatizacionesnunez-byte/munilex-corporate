import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Footer } from './Footer';

type LegalSectionBlock = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

interface LegalDocumentPageProps {
  badge: string;
  title: string;
  intro: string;
  backHref?: string;
  backLabel?: string;
  sections: LegalSectionBlock[];
}

export const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({
  badge,
  title,
  intro,
  backHref = '/',
  backLabel = 'Volver a la web',
  sections,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href={backHref} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#1d4ed8] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </a>
          <div className="text-[11px] font-black uppercase tracking-widest text-[#1d4ed8]">
            {badge}
          </div>
        </div>
      </header>

      <main className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-xs font-bold text-[#1d4ed8] uppercase tracking-widest mb-4">
              <span>{badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-manrope font-black tracking-tight text-slate-900 uppercase leading-tight mb-4">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {intro}
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] bg-white border border-slate-200 p-6 sm:p-7 shadow-sm shadow-slate-900/5">
                <h2 className="text-xl font-manrope font-black text-slate-900 uppercase mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

