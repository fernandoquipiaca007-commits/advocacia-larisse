import React from 'react';
import logoImg from '../assets/images/logo.jpeg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'max-h-12 sm:max-h-14',
    md: 'max-h-16 sm:max-h-20',
    lg: 'max-h-20 sm:max-h-28',
  };

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Frutuoso Advocacia & Assessoria Jurídica"
        className={`w-auto object-contain transition-transform duration-300 ${sizeClasses[size]}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
