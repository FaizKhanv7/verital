"use client";

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MagneticButton({
  variant = 'primary',
  children,
  className = '',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-colors duration-200 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-orange-primary focus-visible:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-orange-primary text-white hover:bg-[#EA580C] shadow-md hover:shadow-orange-primary/40",
    secondary: "bg-transparent text-text-primary border-2 border-gray-200 hover:border-gray-300",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <motion.button
        onClick={onClick}
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </motion.button>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        {content}
      </Link>
    );
  }

  return content;
}
