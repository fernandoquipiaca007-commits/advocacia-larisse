import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Atendem online em todo o Brasil?',
      a: 'Sim! Nosso escritório opera de forma 100% digital, atendendo clientes em todos os Estados brasileiros. Todas as reuniões, envio de documentos e assinaturas de procuração ocorrem de forma segura via WhatsApp e plataformas integradas.',
    },
    {
      q: 'Quanto custa a análise do caso?',
      a: 'A análise inicial da viabilidade do seu caso é realizada sem qualquer custo prévio. Apresentamos os honorários e formatos de atuação com total transparência e clareza antes de qualquer contratação.',
    },
    {
      q: 'Quanto tempo demora para iniciar a ação jurídica?',
      a: 'Ação imediata! Em casos urgentes como Golpe do PIX e bloqueio judicial/MED, as medidas preparatórias e notificações bancárias são emitidas nas primeiras horas após o recebimento da documentação.',
    },
    {
      q: 'Como funciona o atendimento?',
      a: 'É simples e prático: você envia um resumo da sua situação pelo formulário ou WhatsApp. Nossa equipe jurídica analisa o histórico e entra em contato direto com você para esclarecer os passos legais cabíveis.',
    },
    {
      q: 'Posso enviar documentos pelo WhatsApp?',
      a: 'Sim! Aceitamos fotos nítidas, prints de conversas, comprovantes de PIX, extatados bancários ou arquivos PDF diretamente pelo WhatsApp. Todos os dados são protegidos por rigoroso sigilo profissional da advocacia (Lei nº 8.906/94).',
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
