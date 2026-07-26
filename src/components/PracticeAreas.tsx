import React from 'react';
import { ArrowRight, ShieldAlert, Dices, Briefcase } from 'lucide-react';
import pixImg from '../assets/images/pix_fraud_banner_1785104378289.jpg';
import ludopathyImg from '../assets/images/ludopathy_banner_1785104394673.jpg';
import laborImg from '../assets/images/labor_rights_banner_1785104412296.jpg';

interface PracticeAreasProps {
  onSelectArea: (area: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectArea }) => {
  const cards = [
    {
      id: 'pix',
      title: 'Golpe do PIX',
      subtitle: 'Foi vítima de golpe ou fraude bancária?',
      badge: 'Ação Urgente',
      icon: ShieldAlert,
      image: pixImg,
      description: 'Analise seu caso com especialista em Direito Bancário. Descubra quais medidas jurídicas e judiciais podem ser cabíveis para bloqueio cautelar e busca de restituição de valores.',
      highlights: ['Notificação bancária urgente', 'Mecanismo Especial de Devolução (MED)', 'Responsabilidade da instituição financeira'],
      areaName: 'Golpe do PIX',
    },
    {
      id: 'ludopatia',
      title: 'Ludopatia & Bets',
      subtitle: 'Problemas com plataformas de apostas online?',
      badge: 'Proteção de Ativos',
      icon: Dices,
      image: ludopathyImg,
      description: 'Conheça seus direitos no Transtorno do Jogo Compulsivo (CID F.63). As plataformas de apostas e instituições bancárias possuem deveres de segurança e limites de crédito.',
      highlights: ['Anulação de contratos e apostas', 'Bloqueio e reparação de perdas', 'Garantia dos direitos de saúde e consumidor'],
      areaName: 'Ludopatia',
    },
    {
      id: 'trabalhista',
      title: 'Direito Trabalhista',
      subtitle: 'Precisa defender seus direitos trabalhistas?',
      badge: 'Defesa do Trabalhador',
      icon: Briefcase,
      image: laborImg,
      description: 'Fale com um advogado para garantir suas verbas rescisórias, horas extras, insalubridade, reintegração ou reversão de justa causa indevida com máxima agilidade.',
      highlights: ['Cálculo rescisório minucioso', 'Danos morais e assédio', 'Ações de vínculo e estabilidade'],
      areaName: 'Trabalhista',
    },
  ];

  return (
    <section id="areas" className="py-20 px-4 sm:px-6 bg-black relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#C8A45B]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#E6C97A] uppercase tracking-[0.2em] mb-2">
            Especialidades Jurídicas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sora">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C8A45B] to-transparent mx-auto mt-4" />
          <p className="text-gray-300 mt-4 text-base sm:text-lg font-normal">
            Soluções jurídicas estratégicas com foco na rápida recuperação de direitos e ativos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-[#111111] rounded-2xl border border-[#C8A45B]/40 hover:border-[#C8A45B] transition-all duration-300 flex flex-col overflow-hidden group shadow-xl hover:shadow-[#C8A45B]/15 hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#C8A45B]/50 px-3 py-1 rounded-full text-[11px] font-bold text-[#E6C97A] tracking-wider uppercase flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#C8A45B]" />
                    <span>{card.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-sora text-white mb-2 group-hover:text-[#E6C97A] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#E6C97A] mb-3">
                      {card.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-8 pt-4 border-t border-white/10 text-xs text-gray-300">
                      {card.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45B]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => onSelectArea(card.areaName)}
                    className="w-full btn-gold py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Quero Atendimento</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
