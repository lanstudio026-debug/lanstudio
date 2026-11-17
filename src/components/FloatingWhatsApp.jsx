import React, { useState, useEffect } from 'react';
import { BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppIcon from './WhatsAppIcon';
import { X, Send, ArrowRight, CheckCheck } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (textToSend) => {
    const text = textToSend || userMsg || "¡Hola LÄN Studio! Deseo cotizar un plan de redes sociales.";
    window.open(getWhatsAppUrl(text), '_blank');
    setIsOpen(false);
  };

  const quickOptions = [
    "Me interesa el Plan Estándar ($1'750.000)",
    "Quiero información del Plan Básico ($1'200.000)",
    "Deseo contratar el Plan Full ($2'250.000)",
    "Quiero cotizar servicios individuales de video"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Widget with WhatsApp Theme */}
      {isOpen && (
        <div className="mb-4 w-[330px] sm:w-[370px] bg-[#EFEAE2] rounded-3xl shadow-2xl border border-lan-cream-border overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          
          {/* Authentic WhatsApp Dark Teal Header (#075E54) */}
          <div className="bg-[#075E54] text-white p-4 sm:p-5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/15 p-1.5 flex items-center justify-center border border-white/20">
                  <img src="/assets/icon_white.png" alt="LÄN" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight flex items-center gap-1.5">
                  <span>LÄN Studio</span>
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" />
                </h4>
                <p className="text-[11px] text-emerald-200/90 font-medium">En línea • Cuenta Oficial</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body with subtle WhatsApp pattern backdrop */}
          <div className="p-4 space-y-3 max-h-[360px] overflow-y-auto">
            
            {/* Studio message balloon */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs sm:text-sm text-neutral-800 space-y-2 border border-black/5 relative">
              <p className="font-semibold text-[#075E54]">
                ¡Hola! Bienvenido a LÄN Studio 👋
              </p>
              <p className="text-neutral-600 leading-relaxed">
                “Building brands people choose”. ¿En qué plan o servicio de redes sociales podemos asesorarte hoy?
              </p>
              <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1">
                <span>{BRAND.whatsappNumber}</span>
                <span className="flex items-center gap-0.5 text-[#53bdeb]">
                  <span>10:45 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 inline stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Quick choices styled like WhatsApp suggestion pills */}
            <div className="pt-1">
              <p className="text-[11px] uppercase font-bold text-[#075E54] mb-2 tracking-wider">
                Opciones rápidas de consulta:
              </p>
              <div className="space-y-1.5">
                {quickOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(opt)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#25D366] hover:text-white text-xs font-semibold text-neutral-700 border border-black/5 shadow-xs transition-all duration-150 flex items-center justify-between group active:scale-98"
                  >
                    <span className="truncate pr-2">{opt}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white shrink-0" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Chat Input */}
          <div className="p-3 bg-[#F0F2F5] border-t border-black/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje a WhatsApp..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 px-3.5 py-2.5 rounded-full bg-white border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#25D366] shadow-xs"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white shadow-md transition-all active:scale-95"
              aria-label="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Button & Tooltip with Official WhatsApp Styling */}
      <div className="flex items-center gap-3">
        
        {/* Tooltip speech bubble */}
        {!isOpen && showTooltip && (
          <div className="hidden sm:flex items-center gap-2 py-2.5 px-4 bg-white text-neutral-900 text-xs font-bold rounded-2xl shadow-xl border border-neutral-200 animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-[#075E54]">¿Hablamos por WhatsApp?</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-neutral-400 hover:text-neutral-700 font-normal"
            >
              ×
            </button>
          </div>
        )}

        {/* WhatsApp Official Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir WhatsApp LÄN Studio"
          className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75"></span>

          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <div className="relative">
              <WhatsAppIcon className="w-7 h-7 text-white" fill="currentColor" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
          )}
        </button>

      </div>
    </div>
  );
}
