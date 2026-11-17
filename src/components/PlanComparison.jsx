import React from 'react';
import { PLANS, getWhatsAppUrl } from '../data/plansData';
import WhatsAppButton from './WhatsAppButton';
import WhatsAppIcon from './WhatsAppIcon';
import { Check, X } from 'lucide-react';

export default function PlanComparison() {
  const comparisonRows = [
    {
      feature: "Inversión mensual",
      basico: "$1'200.000 COP",
      estandar: "$1'750.000 COP",
      full: "$2'250.000 COP",
      highlight: true
    },
    {
      feature: "Publicaciones al mes (Reels, post o carruseles)",
      basico: "8 publicaciones",
      estandar: "10 publicaciones",
      full: "12 publicaciones",
      highlight: false
    },
    {
      feature: "Historias semanales",
      basico: "2 semanales (~8 al mes)",
      estandar: "3 semanales (~12 al mes)",
      full: "4 semanales (~16 al mes)",
      highlight: false
    },
    {
      feature: "Visita al mes para grabación de contenido",
      basico: "1 visita mensual",
      estandar: "1 visita mensual",
      full: "1 visita mensual",
      highlight: false
    },
    {
      feature: "Parrilla de contenido estructurada",
      basico: true,
      estandar: true,
      full: true,
      highlight: false
    },
    {
      feature: "Diseño de piezas gráficas básicas",
      basico: true,
      estandar: true,
      full: true,
      highlight: false
    },
    {
      feature: "Redacción estratégica de copys",
      basico: true,
      estandar: true,
      full: true,
      highlight: false
    },
    {
      feature: "Métricas y reporte mensual",
      basico: true,
      estandar: true,
      full: true,
      highlight: false
    },
    {
      feature: "Reunión mensual para planeación y revisión de parrilla (presencial o virtual)",
      basico: false,
      estandar: false,
      full: true,
      highlight: true
    },
    {
      feature: "Tiempo mínimo de contratación",
      basico: "3 meses",
      estandar: "3 meses",
      full: "3 meses",
      highlight: false
    }
  ];

  return (
    <section id="comparativa" className="py-20 bg-white border-y border-lan-cream-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-lan-burgundy bg-lan-burgundy/10 px-3.5 py-1 rounded-full">
            Comparativa Rápida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lan-burgundy-950 mt-3 mb-4">
            Compara los planes frente a frente
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Revisa con total transparencia cada entregable para elegir el que mejor se adapte al momento y ambición de tu marca.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-lan-cream-border shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-lan-cream">
                <th className="p-5 sm:p-6 text-sm font-bold text-neutral-800 w-1/3">
                  Características & Entregables
                </th>
                <th className="p-5 sm:p-6 text-center text-sm font-bold text-lan-burgundy-900 border-l border-lan-cream-border">
                  Plan básico
                  <div className="text-lg font-black text-lan-burgundy mt-1">$1'200.000</div>
                </th>
                <th className="p-5 sm:p-6 text-center text-sm font-bold text-white bg-lan-burgundy border-l border-lan-cream-border">
                  <div className="inline-block bg-lan-gold text-lan-burgundy-950 text-[10px] uppercase font-black px-2 py-0.5 rounded-full mb-1">
                    Más Elegido
                  </div>
                  <div>Plan estándar</div>
                  <div className="text-lg font-black text-white mt-0.5">$1'750.000</div>
                </th>
                <th className="p-5 sm:p-6 text-center text-sm font-bold text-lan-burgundy-900 border-l border-lan-cream-border">
                  Plan full
                  <div className="text-lg font-black text-lan-burgundy mt-1">$2'250.000</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lan-cream-border text-sm">
              {comparisonRows.map((row, index) => (
                <tr 
                  key={index}
                  className={`hover:bg-lan-cream/40 transition-colors ${
                    row.highlight ? 'bg-lan-burgundy/5 font-medium' : ''
                  }`}
                >
                  <td className="p-4 sm:p-5 text-neutral-800">
                    {row.feature}
                  </td>

                  {/* Básico */}
                  <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border">
                    {typeof row.basico === 'boolean' ? (
                      row.basico ? (
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-neutral-800">{row.basico}</span>
                    )}
                  </td>

                  {/* Estándar */}
                  <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border bg-lan-burgundy/5 font-semibold text-lan-burgundy-950">
                    {typeof row.estandar === 'boolean' ? (
                      row.estandar ? (
                        <Check className="w-5 h-5 text-lan-burgundy mx-auto stroke-[2.5]" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-300 mx-auto" />
                      )
                    ) : (
                      <span>{row.estandar}</span>
                    )}
                  </td>

                  {/* Full */}
                  <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border">
                    {typeof row.full === 'boolean' ? (
                      row.full ? (
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-neutral-800">{row.full}</span>
                    )}
                  </td>
                </tr>
              ))}
              
              {/* Action row with Official WhatsApp Buttons */}
              <tr className="bg-lan-cream/60">
                <td className="p-4 sm:p-5 font-semibold text-neutral-800">
                  Contratación vía WhatsApp
                </td>
                <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border">
                  <WhatsAppButton
                    href={getWhatsAppUrl("¡Hola LÄN Studio! Quiero contratar el Plan Básico ($1'200.000).")}
                    variant="primary"
                    size="sm"
                    className="rounded-xl shadow-sm hover:shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Elegir Básico</span>
                  </WhatsAppButton>
                </td>
                <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border bg-lan-burgundy/5">
                  <WhatsAppButton
                    href={getWhatsAppUrl("¡Hola LÄN Studio! Quiero contratar el Plan Estándar ($1'750.000).")}
                    variant="primary"
                    size="sm"
                    className="rounded-xl shadow-md hover:shadow-lg font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Elegir Estándar</span>
                  </WhatsAppButton>
                </td>
                <td className="p-4 sm:p-5 text-center border-l border-lan-cream-border">
                  <WhatsAppButton
                    href={getWhatsAppUrl("¡Hola LÄN Studio! Quiero contratar el Plan Full ($2'250.000).")}
                    variant="primary"
                    size="sm"
                    className="rounded-xl shadow-sm hover:shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Elegir Full</span>
                  </WhatsAppButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
