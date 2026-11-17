import React from 'react';
import { BRAND, getWhatsAppUrl } from '../data/plansData';
import WhatsAppIcon from './WhatsAppIcon';
import { Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-lan-burgundy-950 text-lan-cream border-t border-lan-burgundy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo_white.png" 
                alt="LÄN Studio" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            
            <p className="text-xl font-bold text-white tracking-tight italic font-serif">
              “{BRAND.tagline}”
            </p>

            <p className="text-sm text-lan-cream/70 leading-relaxed max-w-sm">
              Estrategia, producción audiovisual y gestión integral de redes sociales pensadas para posicionar marcas de manera sólida, coherente y rentable.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-lan-gold">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-lan-cream/80">
              <li><a href="#planes" className="hover:text-white transition-colors">Planes Mensuales</a></li>
              <li><a href="#comparativa" className="hover:text-white transition-colors">Tabla Comparativa</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Individuales</a></li>
              <li><a href="#cotizador" className="hover:text-white transition-colors">Cotizador Online</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodología de Trabajo</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          {/* Contact Numbers from Brand Doc */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-lan-gold">
              Líneas de Atención
            </p>

            <div className="space-y-2.5">
              {/* WhatsApp Official with brand colors */}
              <a
                href={getWhatsAppUrl("¡Hola LÄN Studio! Deseo comunicarme con ustedes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-all text-sm text-white group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] text-[#25D366] uppercase font-bold block">WhatsApp Oficial</span>
                  <span className="font-semibold text-white group-hover:text-[#25D366] transition-colors">{BRAND.whatsappNumber}</span>
                </div>
              </a>

              {BRAND.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.clean}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-lan-cream flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-lan-cream/60 uppercase font-semibold block">Línea Telefónica</span>
                    <span className="font-semibold">{phone.display}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lan-cream/60">
          <p>
            © {new Date().getFullYear()} LÄN Studio. Todos los derechos reservados. Planes Redes Sociales.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 rounded-full bg-white/5 hover:bg-white/10"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
