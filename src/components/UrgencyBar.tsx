import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface UrgencyBarProps {
  onCtaClick: () => void;
}

export const UrgencyBar: React.FC<UrgencyBarProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-gradient-to-r from-[#18140B] via-[#2A200E] to-[#18140B] border-y border-[#C8A45B]/40 py-3.5 px-4 sm:px-6 relative z-30 shadow-lg shadow-black/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-[#C8A45B]/20 border border-[#C8A45B]/50 shrink-0 animate-pulse">
            <AlertCircle className="w-5 h-5 text-[#E6C97A]" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-200 leading-relaxed">
            <span className="text-[#E6C97A] font-semibold uppercase tracking-wider block sm:inline sm:mr-1">
              Atenção aos prazos legais:
            </span>
            Cada caso possui particularidades e pode exigir medidas rápidas. Solicite uma análise para receber orientação jurídica adequada.
          </p>
        </div>

        <button
          onClick={onCtaClick}
          className="shrink-0 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#000000] bg-gradient-to-r from-[#E6C97A] to-[#C8A45B] hover:bg-white hover:from-white hover:to-white px-4 py-2 rounded-md transition-all shadow-md group cursor-pointer"
        >
          <span>Solicitar Orientação</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
