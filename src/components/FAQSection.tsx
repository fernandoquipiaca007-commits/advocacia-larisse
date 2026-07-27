import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O que é Ludopatia e como saber se sou ludopata?',
      a: 'A Ludopatia (CID F.63) é o Transtorno do Jogo Compulsivo, reconhecido pela OMS como uma doença mental. Alguns sinais comuns: apostar mais do que pode perder, sentir urgência para apostar, usar crédito ou dinheiro de terceiros para jogar, esconder as apostas de familiares, e continuar apostando mesmo com prejuízos recorrentes. Cada caso é único — o ideal é solicitar uma análise com a Dra. Larisse para entender sua situação específica.',
    },
    {
      q: 'Posso recuperar os valores perdidos nas plataformas de bets?',
      a: 'Dependendo da análise do caso, sim. As plataformas de apostas têm deveres legais de proteção ao consumidor e ao ludopata. Práticas como oferta abusiva de crédito, ausência de limites de apostas e estímulos compulsivos podem gerar responsabilidade civil. A viabilidade de cada ação é avaliada individualmente, considerando o histórico de apostas, contratos e movimentações bancárias.',
    },
    {
      q: 'As plataformas de bets podem ser responsabilizadas legalmente?',
      a: 'Sim. Conforme a regulamentação de apostas esportivas no Brasil e o Código de Defesa do Consumidor, as plataformas têm obrigações de segurança, limites de apostas e proteção ao jogador compulsivo. Quando descumprem essas obrigações, podem ser responsabilizadas judicialmente por perdas e danos.',
    },
    {
      q: 'O que fazer em caso de Golpe do PIX?',
      a: 'Aja imediatamente: entre em contato com seu banco para solicitar o Mecanismo Especial de Devolução (MED) e o bloqueio cautelar das contas receptoras. Em casos de golpe, as primeiras horas são críticas para maximizar as chances de recuperação. Registre o Boletim de Ocorrência logo em seguida.',
    },
    {
      q: 'Atendem online em todo o Brasil?',
      a: 'Sim! O escritório opera de forma 100% digital, atendendo clientes em todos os estados brasileiros. Todas as reuniões, envio de documentos e assinaturas de procuração ocorrem de forma segura via WhatsApp e plataformas integradas.',
    },
    {
      q: 'Quanto custa a análise do caso?',
      a: 'A análise inicial da viabilidade do seu caso é realizada sem qualquer custo prévio. Os honorários e formatos de atuação são apresentados com total transparência antes de qualquer contratação.',
    },
    {
      q: 'Como funciona o atendimento?',
      a: 'É simples: você envia um resumo da sua situação pelo formulário ou WhatsApp. A equipe jurídica analisa o histórico e entra em contato direto para esclarecer os passos legais cabíveis ao seu caso, com o máximo de sigilo e agilidade.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-black relative">
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#C8A45B]/40 text-xs font-bold text-[#E6C97A] uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sora">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="w-16 h-1 bg-[#C8A45B] mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#C8A45B]/30 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sora font-bold text-base sm:text-lg text-white hover:text-[#E6C97A] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8A45B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E6C97A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed font-normal border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
