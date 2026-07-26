import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface LeadFormProps {
  initialArea?: string;
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialArea, formRef }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [selectedArea, setSelectedArea] = useState(initialArea || 'Golpe do PIX');
  const [caseSummary, setCaseSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected area if prop changes
  React.useEffect(() => {
    if (initialArea) {
      setSelectedArea(initialArea);
    }
  }, [initialArea]);

  // Format WhatsApp input as (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setWhatsapp(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const constructWhatsappUrl = () => {
    const cleanPhone = '559284161450'; // Official lawyer WhatsApp number
    const text = `Olá, Dra. Larisse! Gostaria de solicitar uma análise do meu caso.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A*Cidade:* ${encodeURIComponent(city || 'Não informada')}%0A*Área:* ${encodeURIComponent(selectedArea)}%0A*Resumo do caso:* ${encodeURIComponent(caseSummary || 'Gostaria de orientação')}`;
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  return (
    <section id="formulario" ref={formRef} className="py-20 px-4 sm:px-6 bg-[#080808] border-t border-[#C8A45B]/30 relative">
      <div className="max-w-3xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#C8A45B]/50 text-xs font-bold text-[#E6C97A] uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-[#C8A45B]" />
            <span>Atendimento Sigiloso & Direto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sora">
            Solicite Sua Análise Jurídica
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2 font-normal max-w-xl mx-auto">
            Preencha os campos abaixo. Nossa equipe entrará em contato com a máxima prioridade.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-[#111111] border-2 border-[#C8A45B]/50 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-sora font-bold text-gray-200 uppercase tracking-wider mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-[#000000] border border-[#333333] focus:border-[#C8A45B] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* WhatsApp & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sora font-bold text-gray-200 uppercase tracking-wider mb-2">
                    WhatsApp (com DDD) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={handlePhoneChange}
                    placeholder="(92) 8416-1450"
                    className="w-full bg-[#000000] border border-[#333333] focus:border-[#C8A45B] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sora font-bold text-gray-200 uppercase tracking-wider mb-2">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: João Pessoa / PB"
                    className="w-full bg-[#000000] border border-[#333333] focus:border-[#333333] focus:border-[#C8A45B] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Practice Area Selection */}
              <div>
                <label className="block text-xs font-sora font-bold text-gray-200 uppercase tracking-wider mb-3">
                  Selecione a Área Principal *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Golpe do PIX', val: 'Golpe do PIX' },
                    { label: 'Ludopatia', val: 'Ludopatia' },
                    { label: 'Trabalhista', val: 'Trabalhista' },
                  ].map((area) => {
                    const isSelected = selectedArea === area.val;
                    return (
                      <button
                        type="button"
                        key={area.val}
                        onClick={() => setSelectedArea(area.val)}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-sora font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#E6C97A] to-[#C8A45B] text-black border-[#E6C97A] shadow-md'
                            : 'bg-[#000000] text-gray-300 border-[#333333] hover:border-[#C8A45B]/60'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-black bg-black' : 'border-gray-500'}`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E6C97A]" />}
                        </span>
                        <span>{area.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label className="block text-xs font-sora font-bold text-gray-200 uppercase tracking-wider mb-2">
                  Conte resumidamente o caso
                </label>
                <textarea
                  rows={4}
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  placeholder="Explique o que aconteceu, datas e valores envolvidos..."
                  className="w-full bg-[#000000] border border-[#333333] focus:border-[#C8A45B] rounded-lg p-4 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Privacy Disclaimer */}
              <div className="flex items-start gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#C8A45B] shrink-0 mt-0.5" />
                <span>
                  Garantimos total privacidade e proteção aos seus dados nos termos do Código de Ética da OAB e da LGPD.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-4 rounded-xl text-base uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando Dados...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Quero uma Análise</span>
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Success Confirmation State */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#C8A45B]/20 border-2 border-[#C8A45B] flex items-center justify-center text-[#E6C97A] mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-sora text-white mb-2">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-white">{name}</strong>. Nossa equipe recebeu as informações sobre seu caso em <strong className="text-[#E6C97A]">{selectedArea}</strong>.
                </p>
              </div>

              <div className="bg-black/60 p-4 rounded-xl border border-white/10 max-w-md mx-auto text-xs text-gray-300 space-y-1">
                <p>⚡ Caso queira um atendimento prioritário agora mesmo:</p>
              </div>

              <a
                href={constructWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar Diretamente no WhatsApp</span>
              </a>

              <div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setWhatsapp('');
                    setCaseSummary('');
                  }}
                  className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Enviar outra solicitação
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
