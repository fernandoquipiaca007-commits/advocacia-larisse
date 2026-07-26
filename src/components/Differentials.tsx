import React from 'react';
import { MonitorCheck, Target, Lock, Eye } from 'lucide-react';

export const Differentials: React.FC = () => {
  const diffs = [
    {
      icon: MonitorCheck,
      title: 'Atendimento Online',
      desc: 'Atendimento 100% digital e rápido sem necessidade de deslocamento.',
    },
    {
      icon: Target,
      title: 'Estratégia Personalizada',
      desc: 'Soluções moldadas especificamente para a realidade de cada cliente.',
    },
    {
      icon: Lock,
      title: 'Sigilo Absoluto',
      desc: 'Proteção total dos seus dados e relatos conforme a OAB e LGPD.',
    },
    {
      icon: Eye,
      title: 'Transparência Total',
      desc: 'Acompanhamento claro e atualizado sobre cada etapa do processo.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#E6C97A] uppercase tracking-[0.2em] mb-2">
            Por que nos escolher
          </p>
          <h2 className="text-3xl font-extrabold text-white font-sora">
            Nossos Diferenciais
          </h2>
          <div className="w-16 h-1 bg-[#C8A45B] mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((d, index) => {
            const Icon = d.icon;
            return (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-xl border border-[#C8A45B]/30 hover:border-[#C8A45B] transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C8A45B]/15 border border-[#C8A45B]/40 flex items-center justify-center text-[#E6C97A] mb-4 group-hover:scale-110 group-hover:bg-[#C8A45B] group-hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-sora text-white mb-2">
                  {d.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
