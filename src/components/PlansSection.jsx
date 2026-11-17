import React from 'react';
import { PLANS, BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppIcon from './WhatsAppIcon';
import { Check, Sparkles, Flame, ArrowRight } from 'lucide-react';

export default function PlansSection() {
  return (
    <section id="planes" className="py-20 lg:py-28 bg-lan-cream relative overflow-hidden">
      
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lan-burgundy/10 border border-lan-burgundy/20 text-lan-burgundy text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestros Planes Mensuales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lan-burgundy-950 tracking-tight mb-5">
            Planes Redes Sociales
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Planes estructurados con grabación in situ, estrategia de contenidos y métricas mensuales para marcas que buscan impacto duradero.
          </p>
        </div>

        {/* The 3 Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            const waPlanMsg = `¡Hola LÄN Studio! Me interesa contratar el ${plan.name} (${plan.priceFormatted}/mes). ¿Podríamos coordinar los detalles?`;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl relative flex flex-col justify-between transition-all duration-300 card-hover-effect overflow-hidden ${
                  isPopular
                    ? 'bg-lan-burgundy text-white shadow-lan-lg ring-2 ring-lan-gold/70 lg:-translate-y-2'
                    : 'bg-lan-burgundy-800 text-white shadow-lan-md hover:shadow-lan-lg'
                }`}
              >
                {/* Top Corner Badge for Popular */}
                {isPopular && (
                  <div className="bg-lan-gold text-lan-burgundy-950 text-xs font-black uppercase tracking-widest py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-sm">
                    <Flame className="w-4 h-4 fill-lan-burgundy-950" />
                    <span>Plan Más Elegido & Recomendado</span>
                  </div>
                )}

                {/* Card Header & Brand Monogram */}
                <div className="p-7 sm:p-9 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-lan-cream/70 mb-1 block">
                        {plan.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Brand Monogram Icon (Ä) matching the PDF slide header */}
                    <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 p-2">
                      <img 
                        src="/assets/icon_white.png" 
                        alt="LÄN Brand Monogram" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  </div>

                  <p className="text-sm text-lan-cream/80 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="h-[1px] bg-white/15 w-full mb-6"></div>

                  {/* Highlights / Features List (Exact from PDF) */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs uppercase font-bold tracking-wider text-lan-cream/90">
                      ¿Qué incluye este plan?
                    </p>
                    <ul className="space-y-3">
                      {plan.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/95 leading-snug">
                          <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5 text-lan-cream">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / Price Section styled exactly like PDF */}
                <div className="p-7 sm:p-9 pt-4 bg-black/10 border-t border-white/10 mt-auto">
                  
                  {/* Contract Condition Note (Exact quote from PDF) */}
                  <p className="text-xs text-center font-medium text-lan-cream/80 italic mb-3">
                    “{plan.requirement}”
                  </p>

                  {/* Distinctive White Pill Price Container (from the PDF design) */}
                  <div className="bg-white rounded-2xl py-3.5 px-6 text-center shadow-lg mb-5 transition-transform duration-200 group-hover:scale-102">
                    <span className="text-3xl sm:text-4xl font-black text-lan-burgundy tracking-tight">
                      {plan.priceFormatted}
                    </span>
                    <span className="text-xs text-lan-burgundy/80 font-semibold block mt-0.5 uppercase tracking-wide">
                      COP / Mes
                    </span>
                  </div>

                  {/* Official WhatsApp Button */}
                  <WhatsAppButton
                    href={getWhatsAppUrl(waPlanMsg)}
                    variant="primary"
                    size="md"
                    fullWidth={true}
                    className="py-3.5 rounded-xl shadow-lg hover:shadow-xl font-bold"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white shrink-0" fill="currentColor" />
                    <span>Contratar {plan.name} en WhatsApp</span>
                  </WhatsAppButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Reminder / Reassurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-lan-cream-border text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base text-neutral-700">
            ¿Necesitas una propuesta a la medida o sumar servicios adicionales? Escríbenos directamente a nuestro WhatsApp oficial{' '}
            <a 
              href={getWhatsAppUrl("¡Hola LÄN Studio! Quisiera una cotización a la medida para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#128C7E] hover:text-[#25D366] hover:underline inline-flex items-center gap-1.5 ml-1"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>{BRAND.whatsappNumber}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
