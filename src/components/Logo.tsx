import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-125 md:scale-150',
  };

  return (
    <div className={`flex flex-col items-center text-center select-none ${sizeClasses[size]} ${className}`}>
      {/* Geometric Diamond Symbol */}
      <div className="relative w-16 h-16 mb-2">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_2px_10px_rgba(200,164,91,0.25)]">
          <defs>
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="50%" stopColor="#A8A8A8" />
              <stop offset="100%" stopColor="#6E6E6E" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E0A3" />
              <stop offset="50%" stopColor="#C8A45B" />
              <stop offset="100%" stopColor="#9A7B39" />
            </linearGradient>
          </defs>

          {/* Top Diamond Structure - Silver / Metallic */}
          <path
            d="M 100 20 L 170 85 L 140 85 L 100 48 L 60 85 L 30 85 Z"
            fill="url(#silverGrad)"
          />
          <path
            d="M 100 38 L 145 80 L 125 80 L 100 58 L 75 80 L 55 80 Z"
            fill="#111111"
          />

          {/* Bottom V Structure - Gold */}
          <path
            d="M 30 115 L 100 180 L 170 115 L 140 115 L 100 152 L 60 115 Z"
            fill="url(#goldGrad)"
          />
          <path
            d="M 55 120 L 100 162 L 145 120 L 125 120 L 100 142 L 75 120 Z"
            fill="#111111"
          />
        </svg>
      </div>

      {/* Main Brand Typography */}
      <div className="tracking-[0.25em] font-extrabold text-white text-xl sm:text-2xl uppercase font-sora">
        FRUTUOSO
      </div>

      {/* Gold Divider Line */}
      <div className="w-full max-w-[220px] h-[1px] bg-gradient-to-r from-transparent via-[#C8A45B] to-transparent my-1" />

      {/* Subtitle Typography */}
      <div className="tracking-[0.18em] text-[9px] sm:text-[10px] font-semibold text-gray-300 uppercase">
        ADVOCACIA & ASSESSORIA JURÍDICA
      </div>
    </div>
  );
};
