import React, { useState } from 'react';
import { PLANS, INDIVIDUAL_SERVICES, BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppIcon from './WhatsAppIcon';
import { Calculator, Plus, Minus, RefreshCw, Check } from 'lucide-react';

export default function QuoteCalculator() {
  const [selectedPlanId, setSelectedPlanId] = useState('plan-estandar');
  const [serviceQuantities, setServiceQuantities] = useState({
    'edicion-video': 0,
    'edicion-grabacion': 0,
    'paquete-historias': 0,
    'asesoria-marca': 0,
    'planeacion-parrilla': 0,
  });

  const selectedPlan = PLANS.find(p => p.id === selectedPlanId);
  const planPrice = selectedPlan ? selectedPlan.priceNumber : 0;

  const handleQuantityChange = (id, delta) => {
    setServiceQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const resetAll = () => {
    setSelectedPlanId('plan-estandar');
    setServiceQuantities({
      'edicion-video': 0,
      'edicion-grabacion': 0,
      'paquete-historias': 0,
      'asesoria-marca': 0,
      'planeacion-parrilla': 0,
    });
  };

  // Calculate individual services total
  const servicesTotal = INDIVIDUAL_SERVICES.reduce((acc, service) => {
    const qty = serviceQuantities[service.id] || 0;
    return acc + (qty * service.priceNumber);
  }, 0);

  const grandTotal = planPrice + servicesTotal;

  const formatCOP = (num) => {
    return '$' + num.toLocaleString('es-CO');
  };

  // Generate WhatsApp pre-filled message with detailed quote
  const buildWhatsAppMessage = () => {
    let msg = `¡Hola LÄN Studio! He armado una cotización personalizada desde la página web:\n\n`;
    if (selectedPlan) {
      msg += `📌 Plan Base: ${selectedPlan.name} (${selectedPlan.priceFormatted}/mes)\n`;
    } else {
      msg += `📌 Plan Base: Ninguno (solo servicios a la carta)\n`;
    }

    const items = [];
    INDIVIDUAL_SERVICES.forEach(s => {
      const q = serviceQuantities[s.id];
      if (q > 0) {
        items.push(`• ${s.name} x${q} = $${(q * s.priceNumber).toLocaleString('es-CO')}`);
      }
    });

    if (items.length > 0) {
      msg += `\n🛠️ Servicios adicionales:\n` + items.join('\n') + `\n`;
    }

    msg += `\n💰 Total estimado: ${formatCOP(grandTotal)} COP\n`;
    msg += `\n¿Podrían brindarme asesoría para iniciar? ¡Gracias!`;
    return msg;
  };

  return (
    <section id="cotizador" className="py-20 bg-lan-cream-muted/60 border-t border-lan-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lan-burgundy/10 border border-lan-burgundy/20 text-lan-burgundy text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lan-burgundy-950 mb-3 tracking-tight">
            Cotizador Dinámico LÄN Studio
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Arma tu combo mensual personalizado o calcula servicios a la carta y envíalo en un clic directamente a nuestro WhatsApp oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base Plan */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-lan-cream-border shadow-sm">
              <h3 className="text-lg font-bold text-lan-burgundy-950 mb-4 flex items-center justify-between">
                <span>1. Selecciona un Plan Mensual Base</span>
                <span className="text-xs font-normal text-neutral-500">Opcional</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PLANS.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(isSelected ? null : plan.id)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 relative ${
                        isSelected 
                          ? 'border-lan-burgundy bg-lan-burgundy/5 text-lan-burgundy-950 shadow-sm' 
                          : 'border-lan-cream-border bg-lan-cream-light/40 hover:border-lan-burgundy/40 text-neutral-700'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-lan-burgundy text-white flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-xs uppercase font-bold tracking-wider opacity-75 mb-1">
                        {plan.name}
                      </p>
                      <p className="text-base font-black text-lan-burgundy">
                        {plan.priceFormatted}
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-1">
                        {plan.featuresCount.publicaciones}
                      </p>
                    </button>
                  );
                })}
              </div>

              {selectedPlanId && (
                <button
                  type="button"
                  onClick={() => setSelectedPlanId(null)}
                  className="mt-3 text-xs text-lan-burgundy hover:underline font-semibold"
                >
                  Deseo cotizar solo servicios individuales (sin plan mensual)
                </button>
              )}
            </div>

            {/* Step 2: Individual Services Add-ons */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-lan-cream-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-lan-burgundy-950">
                  2. Agrega Servicios Individuales
                </h3>
                <button
                  type="button"
                  onClick={resetAll}
                  className="text-xs font-semibold text-neutral-500 hover:text-lan-burgundy flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reiniciar</span>
                </button>
              </div>

              <div className="space-y-3.5">
                {INDIVIDUAL_SERVICES.map((s) => {
                  const qty = serviceQuantities[s.id] || 0;
                  return (
                    <div
                      key={s.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-lan-cream-light/60 border border-lan-cream-border/70"
                    >
                      <div>
                        <p className="text-sm font-bold text-neutral-800">{s.name}</p>
                        <p className="text-xs font-semibold text-lan-burgundy">
                          {s.priceFormatted} <span className="text-neutral-500 font-normal">/ {s.unit}</span>
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(s.id, -1)}
                          disabled={qty === 0}
                          aria-label={`Disminuir ${s.name}`}
                          className="w-8 h-8 rounded-full border border-lan-cream-border bg-white text-neutral-700 flex items-center justify-center hover:bg-lan-burgundy hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-neutral-700 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-sm text-lan-burgundy-950">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(s.id, 1)}
                          aria-label={`Aumentar ${s.name}`}
                          className="w-8 h-8 rounded-full border border-lan-burgundy bg-lan-burgundy text-white flex items-center justify-center hover:bg-lan-burgundy-700 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-lan-burgundy text-white rounded-3xl p-7 shadow-lan-lg border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-lan-cream/70 font-semibold block">
                    Resumen de Inversión
                  </span>
                  <h4 className="text-xl font-black text-white">Tu Propuesta Estimada</h4>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center p-2">
                  <img src="/assets/icon_white.png" alt="LÄN" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between text-lan-cream/90">
                  <span>Plan Mensual:</span>
                  <span className="font-semibold text-white">
                    {selectedPlan ? `${selectedPlan.name} (${selectedPlan.priceFormatted})` : 'Ninguno seleccionado'}
                  </span>
                </div>

                {Object.entries(serviceQuantities).map(([id, qty]) => {
                  if (qty === 0) return null;
                  const item = INDIVIDUAL_SERVICES.find(s => s.id === id);
                  return (
                    <div key={id} className="flex items-center justify-between text-xs text-lan-cream/80">
                      <span className="truncate max-w-[200px]">{item?.name} x{qty}</span>
                      <span className="font-medium text-white">${((item?.priceNumber || 0) * qty).toLocaleString('es-CO')}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/15 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-lan-cream/70 font-bold">Total Mensual Estimado:</span>
                  <span className="text-3xl font-black text-white tracking-tight">
                    {formatCOP(grandTotal)}
                  </span>
                </div>
                <p className="text-[11px] text-lan-cream/70 mt-1 italic text-right">
                  Valores en Pesos Colombianos (COP)
                </p>
              </div>

              {/* Official WhatsApp Button */}
              <WhatsAppButton
                href={getWhatsAppUrl(buildWhatsAppMessage())}
                variant="primary"
                size="lg"
                fullWidth={true}
                className="py-4 rounded-2xl shadow-xl hover:shadow-2xl"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
                <span>Enviar cotización a WhatsApp</span>
              </WhatsAppButton>

              <p className="text-[11px] text-center text-lan-cream/70 mt-3">
                Se enviará directamente al número oficial: <strong className="text-white">{BRAND.whatsappNumber}</strong>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
