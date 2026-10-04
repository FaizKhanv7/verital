"use client";

import React, { useId, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const shouldReduceMotion = useReducedMotion();
  const filterPrefix = `counter-blur-${useId().replace(/:/g, '')}`;
  const numericValue = target.toFixed(decimals);
  const shouldAnimate = isInView && !shouldReduceMotion;
  const stagger = 90;
  const spins = 2;
  let columnIndex = 0;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{`${prefix}${numericValue}${suffix}`}</span>
      <span aria-hidden="true">
        {prefix}
        <span className="t-reel">
          {numericValue.split('').map((character, index) => {
            if (!/\d/.test(character)) {
              return <span key={`separator-${index}`}>{character}</span>;
            }

            const currentColumn = columnIndex++;
            const digit = Number(character);
            const settledPosition = spins * 10 + digit;
            const position = shouldReduceMotion
              ? digit
              : shouldAnimate
                ? settledPosition
                : 0;
            const filterId = `${filterPrefix}-${currentColumn}`;

            return (
              <span className="t-reel-col" key={`digit-${index}`}>
                <span
                  className="t-reel-strip"
                  style={{
                    transform: `translateY(-${position * 1.2}em)`,
                    transition: shouldAnimate
                      ? `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${currentColumn * stagger}ms`
                      : 'none',
                    filter: `url(#${filterId})`,
                  }}
                >
                  {Array.from({ length: spins * 10 + 10 }, (_, reelDigit) => (
                    <span className="t-reel-digit" key={reelDigit}>
                      {reelDigit % 10}
                    </span>
                  ))}
                </span>
                <svg aria-hidden="true" className="absolute h-0 w-0">
                  <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0 0">
                      {shouldAnimate && (
                        <animate
                          attributeName="stdDeviation"
                          values="0 0;0 3;0 0"
                          keyTimes="0;0.08;1"
                          dur={`${duration}ms`}
                          begin={`${currentColumn * stagger}ms`}
                          fill="freeze"
                        />
                      )}
                    </feGaussianBlur>
                  </filter>
                </svg>
              </span>
            );
          })}
        </span>
        {suffix}
      </span>
    </span>
  );
}
