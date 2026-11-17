import React, { useState } from 'react';
import { BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppIcon from './WhatsAppIcon';
import WhatsAppButton from './WhatsAppButton';
import { Phone, ArrowUpRight, Send, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [brandName, setBrandName] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('Plan estándar ($1\'750.000)');
  const [customMsg, setCustomMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `¡Hola LÄN Studio! Mi marca es "${brandName || 'Mi Negocio'}". Me interesa: ${serviceOfInterest}. ${customMsg ? `Mensaje: ${customMsg}` : ''}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-lan-burgundy text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lan-lg relative overflow-hidden">
          
          {/* Subtle brand watermark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none w-96 h-96">
            <img src="/assets/icon_white.png" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Contact Information & Slogan */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-lan-gold bg-white/10 px-3.5 py-1 rounded-full">
                  Hablemos Hoy
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
                  Contáctanos
                </h2>
                <p className="text-lg text-lan-cream/90 font-medium italic mt-2">
                  “{BRAND.tagline}”
                </p>
                <p className="text-sm sm:text-base text-lan-cream/80 mt-4 leading-relaxed max-w-md">
                  Estamos listos para transformar la imagen y resultados digitales de tu empresa. Escríbenos o llámanos para iniciar el próximo ciclo.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4">
                
                {/* Main WhatsApp Card with Official WhatsApp Branding */}
                <a
                  href={getWhatsAppUrl("¡Hola LÄN Studio! Deseo solicitar información sobre sus servicios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200 group active:scale-[0.99]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-md">
                    <WhatsAppIcon className="w-7 h-7" fill="#25D366" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-extrabold text-emerald-950 tracking-wider">
                        WhatsApp Oficial
                      </span>
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    </div>
                    <p className="text-xl font-black text-white tracking-tight">
                      {BRAND.whatsappNumber}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Document Phone Lines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BRAND.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.clean}`}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-lan-cream shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-lan-cream/60 block">Línea Telefónica</span>
                        <span className="text-sm font-bold text-white group-hover:text-lan-gold transition-colors">
                          {phone.display}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

              </div>

              {/* Security & Confidentiality */}
              <div className="flex items-center gap-2 text-xs text-lan-cream/70">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Atención personalizada y respuesta rápida en horario comercial.</span>
              </div>
            </div>

            {/* Right: Quick Direct Form (Sends straight to WhatsApp with official button) */}
            <div className="lg:col-span-6">
              <div className="bg-white text-neutral-800 rounded-3xl p-7 sm:p-9 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-lan-burgundy-950 mb-2">
                  Escríbenos directamente
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                  Completa estos breves datos y se abrirá una conversación de WhatsApp con tu mensaje listo para enviar.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Nombre de tu marca / empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Boutique Roma, Café Origen..."
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-lan-cream-border bg-lan-cream-light focus:outline-none focus:border-lan-burgundy focus:ring-2 focus:ring-lan-burgundy/10 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Servicio o Plan de interés
                    </label>
                    <select
                      value={serviceOfInterest}
                      onChange={(e) => setServiceOfInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-lan-cream-border bg-lan-cream-light focus:outline-none focus:border-lan-burgundy focus:ring-2 focus:ring-lan-burgundy/10 text-sm font-medium"
                    >
                      <option value="Plan básico ($1'200.000)">Plan básico — $1'200.000/mes</option>
                      <option value="Plan estándar ($1'750.000)">Plan estándar — $1'750.000/mes (Recomendado)</option>
                      <option value="Plan full ($2'250.000)">Plan full — $2'250.000/mes</option>
                      <option value="Edición de videos ($180.000 c/u)">Edición de videos — $180.000 c/u</option>
                      <option value="Edición + grabación ($250.000 c/u)">Edición + grabación — $250.000 c/u</option>
                      <option value="Paquete de historias ($180.000)">Paquetes de historias — $180.000</option>
                      <option value="Asesoría de marca ($250.000)">Asesoría de marca — $250.000</option>
                      <option value="Planeación de parrilla ($350.000)">Planeación de parrilla — $350.000</option>
                      <option value="Cotización personalizada">Otro paquete personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Detalles o preguntas (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos brevemente sobre tu sector, redes actuales o requerimientos..."
                      value={customMsg}
                      onChange={(e) => setCustomMsg(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-lan-cream-border bg-lan-cream-light focus:outline-none focus:border-lan-burgundy focus:ring-2 focus:ring-lan-burgundy/10 text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button in Official WhatsApp Green */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 transition-all duration-200 active:scale-98"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" fill="currentColor" />
                    <span>Iniciar Chat en WhatsApp</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>

                  <p className="text-[11px] text-center text-neutral-500">
                    Sin intermediarios ni registros. Conexión directa a WhatsApp con <strong className="text-neutral-800">{BRAND.whatsappNumber}</strong>
                  </p>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
