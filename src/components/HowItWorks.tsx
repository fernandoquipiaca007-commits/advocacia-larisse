import React from 'react';
import { Send, FileSearch, PhoneCall, Scale } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps = [
    {
      number: '1',
      title: 'Você envia seu caso',
      desc: 'Preencha o formulário rápido com as informações básicas do seu problema.',
      icon: Send,
    },
    {
      number: '2',
      title: 'Analisamos sua situação',
      desc: 'Nossa equipe faz uma checagem técnica detalhada da viabilidade do direito.',
      icon: FileSearch,
    },
    {
      number: '3',
      title: 'Entramos em contato',
      desc: 'Retornamos rapidamente pelo WhatsApp ou ligação para prestar esclarecimentos.',
      icon: PhoneCall,
    },
    {
      number: '4',
      title: 'Definimos a melhor estratégia',
      desc: 'Apresentamos os caminhos legais cabíveis para buscar a solução mais ágil.',
      icon: Scale,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#080808] border-t border-[#C8A45B]/20 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#E6C97A] uppercase tracking-[0.2em] mb-2">
            Processo Transparente
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sora">
            Como Funciona
          </h2>
          <div className="w-16 h-1 bg-[#C8A45B] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Grid with Gold Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Horizontal Gold Line connecting steps on desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#C8A45B]/20 via-[#C8A45B] to-[#C8A45B]/20 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#111111] border-2 border-[#C8A45B] flex items-center justify-center text-[#E6C97A] shadow-xl shadow-[#C8A45B]/10 group-hover:bg-[#C8A45B] group-hover:text-black transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-[#E6C97A] to-[#C8A45B] text-black font-extrabold text-xs flex items-center justify-center border-2 border-black font-sora shadow-md">
                    {step.number}
                  </span>
                </div>

                {/* Step Title & Desc */}
                <h3 className="text-lg font-bold font-sora text-white mb-2 group-hover:text-[#E6C97A] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                  {step.desc}
                </p>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden my-4 text-[#C8A45B] animate-bounce">
                    ↓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside timeline */}
        <div className="mt-16 text-center">
          <button
            onClick={onCtaClick}
            className="btn-gold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider font-bold shadow-lg"
          >
            Iniciar Análise Gratuita Agora
          </button>
        </div>

      </div>
    </section>
  );
};
