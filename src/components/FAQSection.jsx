import React, { useState } from 'react';
import { FAQS, BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppIcon from './WhatsAppIcon';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-lan-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lan-burgundy bg-lan-burgundy/10 px-3.5 py-1 rounded-full">
            Resolviendo Dudas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lan-burgundy-950 mt-3 mb-4 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto">
            Todo lo que necesitas tener claro sobre nuestros servicios, tiempos de entrega y metodología.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-lan-cream-border overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-lan-burgundy-950 pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-lan-cream flex items-center justify-center shrink-0 transition-transform duration-200 text-lan-burgundy ${
                    isOpen ? 'rotate-180 bg-lan-burgundy text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-lan-cream-border/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-white p-7 rounded-3xl border border-lan-cream-border">
          <p className="text-base font-semibold text-neutral-800 mb-2">
            ¿Tienes alguna otra pregunta específica sobre tu negocio?
          </p>
          <p className="text-sm text-neutral-600 mb-5">
            Nuestro equipo te atiende con gusto de inmediato vía WhatsApp.
          </p>

          <WhatsAppButton
            href={getWhatsAppUrl("¡Hola LÄN Studio! Tengo una consulta sobre los servicios de redes sociales.")}
            variant="primary"
            size="md"
            text="Consultar por WhatsApp"
            number={BRAND.whatsappNumber}
            showNumber={true}
            className="rounded-xl shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
