import React from 'react';
import { Globe2, Award, HeartHandshake, FileSearch } from 'lucide-react';

export const CredibilityBanner: React.FC = () => {
  const items = [
    {
      icon: Globe2,
      label: 'Atendimento em todo Brasil',
      desc: 'Processos digitais em qualquer Estado',
    },
    {
      icon: Award,
      label: 'Especialização',
      desc: 'Expertise focada em casos complexos',
    },
    {
      icon: HeartHandshake,
      label: 'Atendimento Humanizado',
      desc: 'Apoio acolhedor e ágil em momentos críticos',
    },
    {
      icon: FileSearch,
      label: 'Análise Individual',
      desc: 'Estratégia jurídica sob medida para cada cliente',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] border-y border-[#C8A45B]/30 py-8 px-4 sm:px-6 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-[#111111]/60 border border-white/5 hover:border-[#C8A45B]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1812] to-[#0A0A0A] border border-[#C8A45B]/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#C8A45B] transition-transform duration-300 shadow-md">
                <Icon className="w-6 h-6 text-[#E6C97A]" />
              </div>
              <h3 className="text-sm sm:text-base font-sora font-bold text-white mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-gray-400 font-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
