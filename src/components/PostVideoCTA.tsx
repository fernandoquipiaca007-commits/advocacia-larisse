import React from 'react';
import { MessageSquare, ClockAlert } from 'lucide-react';

interface PostVideoCTAProps {
  onCtaClick: () => void;
}

export const PostVideoCTA: React.FC<PostVideoCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-14 px-4 sm:px-6 bg-gradient-to-b from-[#111111] via-[#16120B] to-[#0A0A0A] border-y border-[#C8A45B]/40 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A45B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 relative space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A45B]/15 border border-[#C8A45B]/50 text-xs font-bold text-[#E6C97A] uppercase tracking-wider">
          <ClockAlert className="w-4 h-4 text-[#C8A45B]" />
          <span>Agilidade Faz Toda Diferença</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sora leading-tight max-w-3xl mx-auto">
          Quanto antes seu caso for analisado, maiores podem ser as possibilidades de definir a estratégia adequada.
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal">
          Não deixe prazos decadenciais e burocracias anularem seus direitos. Atendimento imediato por especialistas.
        </p>

        <div className="pt-2">
          <button
            onClick={onCtaClick}
            className="btn-gold px-10 py-4 rounded-xl text-base sm:text-lg uppercase font-extrabold tracking-wider inline-flex items-center gap-3 shadow-2xl shadow-[#C8A45B]/25 border border-[#E6C97A] hover:scale-105 transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Quero Falar Com Um Advogado</span>
          </button>
        </div>
      </div>
    </section>
  );
};
