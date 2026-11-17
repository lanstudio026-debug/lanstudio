import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

/**
 * Official WhatsApp Button following Meta / WhatsApp Brand Identity Guidelines.
 * Colors:
 * - Brand Green: #25D366
 * - Dark Green / Hover: #20BD5A / #128C7E
 * - Active: #1DA851
 * - Crisp white text & official SVG handset in speech bubble.
 */
export default function WhatsAppButton({
  href,
  children,
  text = "Escribir a WhatsApp",
  number = "+57 302 4538645",
  variant = "primary", // 'primary' | 'outline' | 'dark' | 'card'
  size = "md", // 'sm' | 'md' | 'lg'
  fullWidth = false,
  showNumber = false,
  showArrow = false,
  className = "",
  onClick,
  ...props
}) {
  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-2 rounded-xl",
    md: "px-5 py-2.5 text-sm gap-2.5 rounded-2xl",
    lg: "px-7 py-3.5 text-base gap-3 rounded-2xl font-bold"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const variantClasses = {
    // Official Solid Brand Green
    primary: "bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white shadow-md hover:shadow-lg shadow-[#25D366]/20 border border-white/20",
    
    // Official Dark Teal Green (WhatsApp Dark Mode / Enterprise Header)
    dark: "bg-[#075E54] hover:bg-[#128C7E] active:bg-[#064e46] text-white shadow-md shadow-[#075E54]/25 border border-emerald-400/20",

    // Elegant Light / Outline with official green
    outline: "bg-white hover:bg-[#25D366] text-[#075E54] hover:text-white border-2 border-[#25D366] shadow-sm hover:shadow-md",

    // On-card high conversion button
    card: "bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5"
  };

  const content = children || (
    <>
      <WhatsAppIcon className={`${iconSizes[size]} shrink-0 text-white`} fill="currentColor" />
      <span className="font-bold tracking-tight">
        {text}
        {showNumber && ` (${number})`}
      </span>
      {showArrow && <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold transition-all duration-200 group active:scale-[0.98] ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {content}
    </a>
  );
}
