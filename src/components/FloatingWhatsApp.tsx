import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onCtaClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onCtaClick }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const cleanPhone = '559284161450';
    const text = encodeURIComponent('Olá, Dra. Larisse! Gostaria de uma análise do meu caso.');
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-[#111111] border border-[#C8A45B] text-white p-3.5 rounded-xl shadow-2xl max-w-xs flex items-start gap-2 animate-bounce">
          <div className="text-xs">
            <p className="font-sora font-bold text-[#E6C97A]">Atendimento Online</p>
            <p className="text-gray-300 text-[11px] mt-0.5">
              Fale diretamente com uma advogada especialista.
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer border-2 border-emerald-300 relative group"
        title="Falar no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-emerald-600" />
      </button>
    </div>
  );
};
