import React from 'react';
import { Logo } from './Logo';
import { Check, ShieldCheck, MessageSquareCode, Dices } from 'lucide-react';
import draLarissePortrait from '../assets/images/dra_larisse.jpeg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-black flex flex-col justify-center overflow-hidden pt-6 pb-12 px-4 sm:px-6 lg:px-12">
      {/* Background Subtle Gold Lighting & Grid Effect */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C8A45B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C8A45B]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 my-auto">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Logo */}
          <div className="mb-2 transition-transform hover:scale-105 duration-300">
            <Logo size="md" />
          </div>

          {/* Specialization Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#C8A45B]/50 text-xs font-semibold text-[#E6C97A] tracking-wider uppercase shadow-lg">
            <Dices className="w-4 h-4 text-[#C8A45B]" />
            <span>Especialista em Ludopatia & Direitos Digitais</span>
          </div>

          {/* Main Headline focusing on Ludopatia */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight font-sora">
            Advogada especialista na <span className="text-gold-gradient">defesa de pessoas afetadas por vícios em bets</span> e jogos online.
          </h1>

          {/* Exact Subtitle Requested */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Atuo na defesa de pessoas afetadas pelos vícios em apostas esportivas (bets) e jogos online, buscando a restituição de valores, a responsabilização das plataformas, quando cabível, e a proteção dos direitos do ludopata.
          </p>

          {/* Secondary Areas Note */}
          <p className="text-xs text-gray-400 border-l-2 border-[#C8A45B] pl-3 py-0.5 text-left">
            Atuação complementar também em casos de <strong className="text-gray-200">Golpe do PIX</strong> e <strong className="text-gray-200">Direito Trabalhista</strong>.
          </p>

          {/* Key Checkmarks */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 pt-1 text-sm text-gray-200">
            <div className="flex items-center gap-2.5 bg-[#111111]/80 border border-white/5 px-3.5 py-2 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-[#C8A45B]/20 flex items-center justify-center border border-[#C8A45B]/60 text-[#E6C97A]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-medium">Análise de perdas e contratos</span>
            </div>

            <div className="flex items-center gap-2.5 bg-[#111111]/80 border border-white/5 px-3.5 py-2 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-[#C8A45B]/20 flex items-center justify-center border border-[#C8A45B]/60 text-[#E6C97A]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-medium">Proteção do ludopata e família</span>
            </div>

            <div className="flex items-center gap-2.5 bg-[#111111]/80 border border-white/5 px-3.5 py-2 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-[#C8A45B]/20 flex items-center justify-center border border-[#C8A45B]/60 text-[#E6C97A]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-medium">Atendimento 100% online em todo o Brasil</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4 w-full sm:w-auto">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto btn-gold px-8 py-4 rounded-lg text-base sm:text-lg uppercase tracking-wider font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#C8A45B]/20 border border-[#E6C97A]"
            >
              <MessageSquareCode className="w-5 h-5" />
              <span>SOLICITAR ANÁLISE DO MEU CASO</span>
            </button>
            <p className="text-xs text-gray-400 mt-2.5 text-center lg:text-left">
              🔒 Sigilo absoluto e atendimento sigiloso
            </p>
          </div>

        </div>

        {/* Right Column - Lawyer Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Golden Ring Container */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl p-1 bg-gradient-to-b from-[#C8A45B]/60 via-[#111111]/80 to-[#C8A45B]/20 shadow-2xl shadow-black">
            
            {/* Glow Aura */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#C8A45B]/30 to-transparent rounded-2xl blur-lg pointer-events-none" />

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#C8A45B]/40 group">
              <img
                src={draLarissePortrait}
                alt="Dra. Larisse Frutuoso - Advogada Especialista"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Title Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md border border-[#C8A45B]/40 p-3.5 rounded-lg text-center shadow-lg">
                <p className="text-white font-sora font-bold text-base tracking-wide">
                  Dra. Larisse Frutuoso
                </p>
                <p className="text-xs text-[#E6C97A] font-medium tracking-wider uppercase">
                  Advogada Especialista em Ludopatia & Bets
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
