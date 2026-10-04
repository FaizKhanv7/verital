import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const textClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 font-bold tracking-tight ${className}`}>
      <Image
        src="/logo.png"
        alt="Verital Logo"
        width={size === 'lg' ? 40 : size === 'md' ? 32 : 24}
        height={size === 'lg' ? 40 : size === 'md' ? 32 : 24}
        className={`${sizeClasses[size]} rotate-[118deg]`}
      />
      {showText && <span className={`${textClasses[size]} text-text-primary`}>Verital</span>}
    </div>
  );
}
