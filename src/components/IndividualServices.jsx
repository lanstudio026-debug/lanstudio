import React from 'react';
import { INDIVIDUAL_SERVICES, BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppIcon from './WhatsAppIcon';
import { Video, Camera, Clock, Sparkles, FileSpreadsheet, ArrowRight } from 'lucide-react';

export default function IndividualServices() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-lan-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-lan-burgundy bg-lan-burgundy/10 px-3.5 py-1 rounded-full">
            Servicios a la Carta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lan-burgundy-950 mt-3 mb-4 tracking-tight">
            Servicios Individuales
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            ¿Necesitas soluciones puntuales o reforzar tu equipo creativo sin atarte a un plan mensual completo? Elige solo lo que tu marca requiere.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {INDIVIDUAL_SERVICES.map((service) => {
            const waMsg = `¡Hola LÄN Studio! Quisiera contratar el servicio individual: ${service.name} (${service.priceFormatted} ${service.unit}).`;
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-lan-cream-border/90 shadow-lan-sm hover:shadow-lan-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-lan-burgundy/10 text-lan-burgundy flex items-center justify-center transition-colors group-hover:bg-lan-burgundy group-hover:text-white">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-semibold text-neutral-500 bg-lan-cream px-2.5 py-1 rounded-full">
                      {service.unit}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-lan-burgundy-950 mb-2.5 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-lan-cream-border">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-neutral-500 font-medium">Inversión:</span>
                    <span className="text-2xl font-black text-lan-burgundy">
                      {service.priceFormatted}
                    </span>
                  </div>

                  {/* Official WhatsApp Button */}
                  <WhatsAppButton
                    href={getWhatsAppUrl(waMsg)}
                    variant="primary"
                    size="sm"
                    fullWidth={true}
                    className="py-3 font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Pedir por WhatsApp</span>
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}

          {/* Bonus / Custom Inquiry Card */}
          <div className="bg-lan-burgundy-900 text-white rounded-3xl p-7 shadow-lan-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10">
              <img src="/assets/icon_white.png" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-lan-gold flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                ¿Necesitas un paquete a tu medida?
              </h3>
              <p className="text-sm text-lan-cream/80 leading-relaxed mb-6">
                Combinamos sesiones de grabación, tandas de reels y asesorías personalizadas según el calendario y presupuesto de tu negocio.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <WhatsAppButton
                href={getWhatsAppUrl("¡Hola LÄN Studio! Deseo solicitar un paquete personalizado de servicios para mi marca.")}
                variant="primary"
                size="md"
                fullWidth={true}
                className="py-3.5 rounded-xl font-bold"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Hablar por WhatsApp</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
