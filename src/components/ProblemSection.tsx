'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';

const painPoints = [
  {
    icon: '☎️',
    title: 'Missed Calls',
    description: 'Customers call. Nobody picks up. Business lost.',
  },
  {
    icon: '💵',
    title: 'Cash Only',
    description: 'No card reader. No online payments. Revenue left on the table.',
  },
  {
    icon: '🚫',
    title: 'No Website',
    description: '27% of small businesses have zero web presence.',
  },
  {
    icon: '📋',
    title: 'Paperwork',
    description: 'Handwritten orders. Paper invoices. Hours wasted daily.',
  },
];

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotate: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: shouldReduceMotion ? 0 : i % 2 === 0 ? 2 : -2,
      x: shouldReduceMotion ? 0 : i % 2 === 0 ? -10 : 10,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Copy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-lg">
            <SectionReveal delay={0}>
              <span className="text-[#F97316] font-semibold tracking-wider text-sm uppercase mb-4 block">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-6">
                The digital revolution skipped Georgia.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                36.2 million small businesses power America — but the digital revolution never showed up for the smallest ones. Barely 6% of businesses with 1–4 employees use AI. 27% don't even have a website. They're not failing — they're just running 20-year-old tools in a 2026 economy.
              </p>
            </SectionReveal>
          </div>

          {/* Right Side Cards */}
          <div className="w-full lg:w-1/2 relative h-auto min-h-[400px] flex items-center justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4 lg:-rotate-2"
            >
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0, 
                    x: 0, 
                    y: -5,
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-start text-left z-10"
                  style={{
                    marginTop: index > 1 ? '1rem' : '0',
                    zIndex: painPoints.length - index,
                  }}
                >
                  <div className="text-3xl mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-full">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
