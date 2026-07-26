import React, { useState } from 'react';
import { Play, ShieldAlert, Dices, X, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import draLarissePortrait from '../assets/images/dra_larisse.jpeg';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  videoSrc: string;
  summary: string;
  explanationPoints: string[];
}

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onCtaClick: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onCtaClick }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#C8A45B]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 bg-black/90 border-b border-[#C8A45B]/30 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#E6C97A] uppercase tracking-wider block">
              {video.category} • Frutuoso Advocacia
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white font-sora mt-0.5">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real HTML5 Video Player Frame */}
        <div className="relative bg-black flex flex-col items-center justify-center overflow-hidden">
          <video
            src={video.videoSrc}
            poster={draLarissePortrait}
            controls
            autoPlay
            playsInline
            className="w-full aspect-[16/9] object-contain bg-black"
          >
            Seu navegador não suporta a exibição de vídeos HTML5.
          </video>
        </div>

        {/* Video Explanation & Action */}
        <div className="p-5 bg-[#0D0D0D] space-y-4 overflow-y-auto">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {video.summary}
          </p>

          <div className="space-y-2">
            <p className="text-xs font-bold text-[#E6C97A] uppercase tracking-wider">Pontos Principais:</p>
            <ul className="space-y-1.5">
              {video.explanationPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45B] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              onClose();
              onCtaClick();
            }}
            className="w-full btn-gold py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg mt-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com a Dra. Larisse sobre seu Caso</span>
          </button>
        </div>

      </div>
    </div>
  );
};

interface VideoSectionProps {
  onCtaClick: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onCtaClick }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'pix-video',
      title: 'O que fazer imediatamente após sofrer um golpe no PIX?',
      category: 'Golpe do PIX',
      icon: ShieldAlert,
      videoSrc: '/videos/golpe-do-pix.mp4',
      summary: 'Ao sofrer um golpe no PIX, notificar a instituição financeira imediatamente para solicitar o bloqueio cautelar (MED) é a prioridade antes de se dirigir à delegacia.',
      explanationPoints: [
        'Acione o seu banco imediatamente para registrar a contestação do PIX.',
        'Solicite o acionamento do MED (Mecanismo Especial de Devolução).',
        'O bloqueio cautelar das contas receptoras deve ocorrer nas primeiras horas.',
        'Emita o Boletim de Ocorrência logo em seguida para anexar ao processo.'
      ]
    },
    {
      id: 'ludopatia-video',
      title: 'Ludopatia e Apostas em BETS: Direitos dos Apostadores e Famílias',
      category: 'Ludopatia & Bets',
      icon: Dices,
      videoSrc: '/videos/ludopatia.mp4',
      summary: 'A ludopatia é reconhecida pela OMS (CID F.63) como um transtorno do jogo compulsivo. As casas de apostas e bancos possuem limitações e responsabilidades legais.',
      explanationPoints: [
        'A ludopatia é um transtorno de saúde mental catalogado pela OMS (CID F.63).',
        'Plataformas de apostas não podem conceder crédito de forma predatória.',
        'Direito à revisão de contratos e cancelamento de dívidas abusivas.',
        'Ação judicial de responsabilização para ressarcimento de perdas.'
      ]
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#050505] relative border-t border-[#C8A45B]/20">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#C8A45B]/40 text-xs font-bold text-[#E6C97A] mb-3">
            <span>Vídeos Informativos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sora">
            Orientação Jurídica em Vídeo
          </h2>
          <div className="w-20 h-1 bg-[#C8A45B] mx-auto mt-4" />
          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            Assista aos esclarecimentos gravados pela Dra. Larisse Frutuoso sobre seus direitos.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((vid) => {
            const Icon = vid.icon;
            return (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="bg-[#111111] border border-[#C8A45B]/40 hover:border-[#C8A45B] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-xl hover:shadow-[#C8A45B]/20 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Clean Video Thumbnail with Doctor Image */}
                <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
                  <img
                    src={draLarissePortrait}
                    alt={vid.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[#C8A45B] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Play className="w-6 h-6 fill-black ml-1" />
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#E6C97A] border border-[#C8A45B]/50 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{vid.category}</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-sora text-white group-hover:text-[#E6C97A] transition-colors leading-snug mb-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-normal">
                      {vid.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#E6C97A]">
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-[#E6C97A]" />
                      <span>Clique para assistir ao vídeo</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onCtaClick={onCtaClick}
      />
    </section>
  );
};
