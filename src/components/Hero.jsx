import React from 'react';
import { BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import { ArrowRight, Video, Calendar, Award } from 'lucide-react';

export default function Hero() {
  const waHeroMsg = getWhatsAppUrl("¡Hola LÄN Studio! Vi su página web y me gustaría cotizar para mi marca.");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cream-pattern">
      {/* Soft atmospheric gradient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-lan-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-lan-burgundy/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill: Brand Category */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lan-burgundy/10 border border-lan-burgundy/20 text-lan-burgundy text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-lan-burgundy"></span>
            <span>Planes redes sociales & creación de contenido</span>
          </div>

          {/* Slogan & Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-lan-burgundy-950 tracking-tight leading-[1.08] mb-6">
            Building brands <br className="hidden sm:inline" />
            <span className="relative inline-block text-lan-burgundy">
              people choose
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-lan-burgundy/30 rounded-full"></span>
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            En <strong className="font-semibold text-lan-burgundy-900">LÄN Studio</strong> creamos estrategias de contenido, producción audiovisual profesional in situ y gestión integral de redes sociales para que tu marca destaque y genere ventas reales.
          </p>

          {/* Call to Actions: Features Official WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-lan-burgundy text-white font-semibold text-base shadow-lan-md hover:bg-lan-burgundy-700 hover:shadow-lan-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Ver Planes Mensuales</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Official WhatsApp Button */}
            <WhatsAppButton
              href={waHeroMsg}
              variant="primary"
              size="lg"
              text="Chatear por WhatsApp:"
              number={BRAND.whatsappNumber}
              showNumber={true}
              className="w-full sm:w-auto rounded-full py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            />
          </div>

          {/* Trust / Service Highlights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto border-t border-lan-cream-border/80">
            <div className="flex items-center justify-center gap-3 py-2 text-left">
              <div className="w-10 h-10 rounded-full bg-lan-burgundy/10 flex items-center justify-center text-lan-burgundy shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-lan-burgundy uppercase tracking-wider">Producción In Situ</p>
                <p className="text-sm font-medium text-neutral-800">Grabación presencial mensual</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 py-2 text-left">
              <div className="w-10 h-10 rounded-full bg-lan-burgundy/10 flex items-center justify-center text-lan-burgundy shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-lan-burgundy uppercase tracking-wider">Estrategia Continua</p>
                <p className="text-sm font-medium text-neutral-800">Parrilla & copys incluidos</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 py-2 text-left">
              <div className="w-10 h-10 rounded-full bg-lan-burgundy/10 flex items-center justify-center text-lan-burgundy shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-lan-burgundy uppercase tracking-wider">Compromiso Real</p>
                <p className="text-sm font-medium text-neutral-800">Métricas & resultados mes a mes</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
