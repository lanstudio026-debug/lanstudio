import React from 'react';
import { METHODOLOGY_STEPS } from '../data/plansData';
import { CalendarSearch, Video, Palette, TrendingUp, Sparkles } from 'lucide-react';

export default function Methodology() {
  const stepIcons = [
    <CalendarSearch className="w-6 h-6" />,
    <Video className="w-6 h-6" />,
    <Palette className="w-6 h-6" />,
    <TrendingUp className="w-6 h-6" />
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-white border-t border-lan-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lan-burgundy bg-lan-burgundy/10 px-3.5 py-1 rounded-full">
            El Proceso LÄN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lan-burgundy-950 mt-3 mb-4 tracking-tight">
            Cómo trabajamos cada mes
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Un flujo de trabajo ordenado, profesional y sin improvisaciones para que siempre sepas qué saldrá al aire y qué resultados genera.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-7 rounded-3xl bg-lan-cream/50 border border-lan-cream-border hover:border-lan-burgundy/40 hover:bg-lan-cream transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-lan-burgundy/25 group-hover:text-lan-burgundy transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-lan-burgundy/10 text-lan-burgundy flex items-center justify-center transition-transform group-hover:scale-110">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-lan-burgundy-950 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-lan-cream-border/60 flex items-center gap-2 text-xs font-semibold text-lan-burgundy">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paso {step.step} de 04</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
