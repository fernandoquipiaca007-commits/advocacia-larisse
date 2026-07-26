import React from 'react';
import { Logo } from './Logo';
import { Instagram, Phone, MapPin, ShieldCheck, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-[#C8A45B]/30 pt-16 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: Logo & Office info */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Logo size="md" />
          <p className="text-xs text-gray-300 max-w-sm leading-relaxed pt-2">
            Frutuoso Advocacia & Assessoria Jurídica é um escritório comprometido com a alta performance, inovação jurídica e defesa incansável dos direitos dos nossos clientes.
          </p>
        </div>

        {/* Col 2: Practice Areas Links */}
        <div className="md:col-span-3 space-y-3 text-center md:text-left">
          <h4 className="text-sm font-sora font-bold text-white uppercase tracking-wider">
            Atuação Especializada
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#areas" className="hover:text-[#E6C97A] transition-colors">
                Recuperação de Golpe do PIX
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-[#E6C97A] transition-colors">
                Transtorno do Jogo & Bets (Ludopatia)
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-[#E6C97A] transition-colors">
                Defesa dos Direitos Trabalhistas
              </a>
            </li>
            <li>
              <a href="#areas" className="hover:text-[#E6C97A] transition-colors">
                Direito Bancário & Notificação MED
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Legal Registration */}
        <div className="md:col-span-4 space-y-3 text-center md:text-left">
          <h4 className="text-sm font-sora font-bold text-white uppercase tracking-wider">
            Contato & Registro OAB
          </h4>
          <div className="space-y-2 text-xs text-gray-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Scale className="w-4 h-4 text-[#C8A45B]" />
              <span>Inscrição OAB/PB nº 31.482</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#C8A45B]" />
              <span>João Pessoa / PB • Atendimento Digital para todo o Brasil</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-4 h-4 text-[#C8A45B]" />
              <a
                href="https://instagram.com/frutuoso.advocacia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E6C97A] underline transition-colors"
              >
                @frutuoso.advocacia
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-[#C8A45B]" />
              <span>WhatsApp Institucional: (92) 8416-1450</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 text-center sm:text-left">
        <p>
          © {new Date().getFullYear()} Frutuoso Advocacia & Assessoria Jurídica. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45B]" />
          <span>Atuação em conformidade com o Provimento nº 205/2021 do CFOAB.</span>
        </p>
      </div>
    </footer>
  );
};
