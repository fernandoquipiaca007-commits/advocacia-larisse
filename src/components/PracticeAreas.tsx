import React from 'react';
import { ArrowRight, ShieldAlert, Dices, Briefcase, Star } from 'lucide-react';
import draLarissePortrait from '../assets/images/dra_larisse.jpeg';
import pixImg from '../assets/images/pix_fraud_banner_1785104378289.jpg';
import laborImg from '../assets/images/labor_rights_banner_1785104412296.jpg';

interface PracticeAreasProps {
  onSelectArea: (area: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectArea }) => {
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

        {/* === LUDOPATIA HERO CARD (Destaque Principal) === */}
        <div className="mb-8 relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#C8A45B] via-[#F5E0A3] to-[#C8A45B] blur-[2px] pointer-events-none" />
          <div className="relative bg-[#0D0D0D] rounded-2xl overflow-hidden border border-[#C8A45B]/60 shadow-2xl shadow-[#C8A45B]/10 group">
            
            {/* Principal Area Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-gradient-to-r from-[#C8A45B] to-[#E6C97A] text-black px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg">
              <Star className="w-3.5 h-3.5 fill-black" />
              <span>Área Principal de Atuação</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-[360px] overflow-hidden bg-black">
                <img
                  src={draLarissePortrait}
                  alt="Dra. Larisse - Especialista em Ludopatia e Bets"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0D0D0D] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/30 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Dices className="w-6 h-6 text-[#C8A45B]" />
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-white">
                      Ludopatia & Bets
                    </h3>
                  </div>
                  <p className="text-base font-semibold text-[#E6C97A] mb-4">
                    Afetado pelo vício em apostas esportivas ou jogos online?
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    A Ludopatia (CID F.63) é reconhecida pela OMS como transtorno do jogo compulsivo. As plataformas de bets e instituições bancárias possuem deveres legais de proteção. Se você ou alguém da sua família foi afetado, há direitos a serem exercidos.
                  </p>
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#C8A45B]/20 text-sm text-gray-300">
                    {[
                      'Restituição de valores apostados de forma compulsiva',
                      'Anulação de contratos e dívidas abusivas',
                      'Responsabilização das plataformas de bets',
                      'Proteção dos direitos do ludopata e família',
                    ].map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C8A45B] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onSelectArea('Ludopatia')}
                  className="w-full btn-gold py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#C8A45B]/20"
                >
                  <span>Quero Análise do Meu Caso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === Outras Áreas (Secundárias) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Golpe do PIX */}
          <div className="bg-[#111111] rounded-2xl border border-[#C8A45B]/30 hover:border-[#C8A45B]/70 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg hover:shadow-[#C8A45B]/10 hover:-translate-y-1">
            <div className="relative h-40 overflow-hidden bg-black">
              <img
                src={pixImg}
                alt="Golpe do PIX"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#C8A45B]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#E6C97A] tracking-wider uppercase flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C8A45B]" />
                <span>Ação Urgente</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-sora text-white mb-2 group-hover:text-[#E6C97A] transition-colors">
                  Golpe do PIX
                </h3>
                <p className="text-sm font-semibold text-[#E6C97A] mb-3">
                  Foi vítima de golpe ou fraude bancária?
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Bloqueio cautelar (MED), responsabilidade bancária e restituição de valores nas primeiras horas após o golpe.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  {['Notificação bancária urgente', 'Mecanismo Especial de Devolução (MED)', 'Responsabilidade da instituição financeira'].map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45B] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onSelectArea('Golpe do PIX')}
                className="mt-6 w-full py-3 rounded-lg border border-[#C8A45B]/50 hover:border-[#C8A45B] text-[#E6C97A] hover:bg-[#C8A45B]/10 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Quero Atendimento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trabalhista */}
          <div className="bg-[#111111] rounded-2xl border border-[#C8A45B]/30 hover:border-[#C8A45B]/70 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg hover:shadow-[#C8A45B]/10 hover:-translate-y-1">
            <div className="relative h-40 overflow-hidden bg-black">
              <img
                src={laborImg}
                alt="Direito Trabalhista"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#C8A45B]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#E6C97A] tracking-wider uppercase flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C8A45B]" />
                <span>Defesa do Trabalhador</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-sora text-white mb-2 group-hover:text-[#E6C97A] transition-colors">
                  Direito Trabalhista
                </h3>
                <p className="text-sm font-semibold text-[#E6C97A] mb-3">
                  Precisa defender seus direitos trabalhistas?
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Verbas rescisórias, horas extras, insalubridade, reintegração e reversão de justa causa com máxima agilidade.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-400">
                  {['Cálculo rescisório minucioso', 'Danos morais e assédio', 'Ações de vínculo e estabilidade'].map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45B] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onSelectArea('Trabalhista')}
                className="mt-6 w-full py-3 rounded-lg border border-[#C8A45B]/50 hover:border-[#C8A45B] text-[#E6C97A] hover:bg-[#C8A45B]/10 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Quero Atendimento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
