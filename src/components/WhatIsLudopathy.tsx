import React from 'react';
import { ArrowRight, Brain, AlertTriangle, Scale, Users, MessageSquare } from 'lucide-react';

interface WhatIsLudopathyProps {
  onCtaClick: () => void;
}

export const WhatIsLudopathy: React.FC<WhatIsLudopathyProps> = ({ onCtaClick }) => {
  const signs = [
    {
      icon: AlertTriangle,
      title: 'Perdas Recorrentes',
      desc: 'Apostar mais do que pode perder para tentar recuperar valores anteriores, mesmo quando isso compromete necessidades básicas da família.',
    },
    {
      icon: Brain,
      title: 'Compulsão Incontrolável',
      desc: 'Sentir urgência ou ansiedade quando não está apostando, pensamentos frequentes sobre bets mesmo durante atividades do dia a dia.',
    },
    {
      icon: Scale,
      title: 'Dívidas e Crédito Abusivo',
      desc: 'Recorrer a empréstimos, cartão de crédito ou PIX de terceiros para financiar apostas — inclusive estimulados pelas próprias plataformas.',
    },
    {
      icon: Users,
      title: 'Impacto nas Relações',
      desc: 'Esconder os valores apostados de familiares, desgaste nos relacionamentos e isolamento social causado pelo vício em jogos.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#060606] relative border-t border-[#C8A45B]/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A45B]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#C8A45B]/50 text-xs font-bold text-[#E6C97A] uppercase tracking-wider mb-4">
            <Brain className="w-3.5 h-3.5 text-[#C8A45B]" />
            <span>Entenda o Transtorno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sora leading-tight">
            O que é <span className="text-gold-gradient">Ludopatia</span>?
          </h2>
          <div className="w-20 h-1 bg-[#C8A45B] mx-auto mt-5" />
          <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Muitas pessoas sofrem desse transtorno sem sequer saber que ele tem um nome — e que existe proteção jurídica para quem é afetado por ele.
          </p>
        </div>

        {/* Main Definition Box */}
        <div className="bg-[#111111] border border-[#C8A45B]/40 rounded-2xl p-8 sm:p-10 mb-12 shadow-xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A45B] to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#C8A45B]/10 border border-[#C8A45B]/30 px-3 py-1 rounded-full text-xs font-bold text-[#E6C97A] uppercase tracking-wider">
                CID F.63 — Classificação Oficial da OMS
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sora leading-snug">
                A Ludopatia é um transtorno de saúde mental reconhecido internacionalmente
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                A <strong className="text-white">Ludopatia</strong>, também chamada de <strong className="text-white">Transtorno do Jogo Compulsivo</strong>, é catalogada pela Organização Mundial da Saúde (OMS) sob o código <strong className="text-[#E6C97A]">CID F.63</strong>. Trata-se de um vício comportamental que afeta o controle dos impulsos, levando a pessoa a apostar de forma compulsiva mesmo diante de prejuízos financeiros, emocionais e relacionais significativos.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Com o crescimento exponencial das plataformas de apostas esportivas (<strong className="text-white">bets</strong>) e jogos online no Brasil, o número de pessoas afetadas por esse transtorno aumentou de forma alarmante. Muitas nem sabem que o que sentem tem um nome clínico — e que existem direitos jurídicos que podem ser exercidos.
              </p>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-400 leading-relaxed">
                <p className="text-[#E6C97A] font-bold mb-1">Importante saber:</p>
                <p>Plataformas de apostas e instituições financeiras podem ter <strong className="text-white">responsabilidade legal</strong> por concessão abusiva de crédito, ausência de mecanismos de proteção e práticas predatórias contra o ludopata.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Signs Grid */}
        <div className="mb-12">
          <p className="text-center text-sm font-bold text-[#E6C97A] uppercase tracking-widest mb-8">
            Principais Sinais de Alerta
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signs.map((sign, idx) => {
              const Icon = sign.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#111111] border border-[#C8A45B]/25 hover:border-[#C8A45B]/70 rounded-xl p-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C8A45B]/15 border border-[#C8A45B]/40 flex items-center justify-center text-[#E6C97A] mb-4 group-hover:scale-110 group-hover:bg-[#C8A45B] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-sora text-white mb-2 group-hover:text-[#E6C97A] transition-colors">
                    {sign.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {sign.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individualized Analysis Notice + CTA */}
        <div className="bg-gradient-to-r from-[#111111] via-[#151515] to-[#111111] border border-[#C8A45B]/50 rounded-2xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8A45B] via-[#F5E0A3] to-[#C8A45B]" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C8A45B]/5 rounded-full blur-[60px] pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sora mb-3">
            Cada caso precisa de uma análise <span className="text-gold-gradient">individualizada</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Não existe uma fórmula única. A Dra. Larisse Frutuoso analisa cada situação com atenção ao histórico de apostas, contratos com as plataformas, movimentações bancárias e impactos individuais — para construir a melhor estratégia jurídica para o seu caso.
          </p>
          <button
            onClick={onCtaClick}
            className="btn-gold px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 mx-auto cursor-pointer shadow-xl shadow-[#C8A45B]/20 border border-[#E6C97A]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Solicitar Análise do Meu Caso</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Análise inicial gratuita — Sigilo absoluto garantido
          </p>
        </div>

      </div>
    </section>
  );
};
