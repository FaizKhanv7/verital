'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';

const CUSTOMERS = [
  {
    name: 'Maple St. Bakery',
    type: 'Family Bakery',
    location: 'Maple Street, Riverside',
    status: 'Ready to onboard'
  },
  {
    name: 'Downtown Cuts',
    type: 'Barbershop',
    location: 'Downtown, Oakville',
    status: 'Ready to onboard'
  },
  {
    name: 'Casa Rosa',
    type: 'Family Restaurant',
    location: 'Riverside, CA',
    status: 'Ready to onboard'
  },
  {
    name: 'Green Thumb Gardens',
    type: 'Plant Nursery',
    location: 'Elm District',
    status: 'Ready to onboard'
  },
  {
    name: 'Park Ave Tailoring',
    type: 'Alterations & Tailoring',
    location: 'Park Avenue',
    status: 'Ready to onboard'
  }
];

export default function ProofSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-10% 0px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    }
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-[#FAFAFA] to-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[#F97316] text-sm font-semibold tracking-wider mb-4 uppercase">
              The waitlist is real
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
              Real businesses. Real neighborhoods.<br/>Ready to go digital.
            </h2>
          </div>
        </SectionReveal>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {CUSTOMERS.map((customer, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col h-full"
            >
              <h3 className="font-semibold text-lg text-[#111827] mb-1">{customer.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{customer.type}</p>
              
              <div className="flex items-center text-gray-600 text-sm mb-6 mt-auto">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {customer.location}
              </div>
              
              <div className="inline-flex items-center self-start bg-[#F97316]/10 text-[#F97316] px-3 py-1.5 rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                {customer.status}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-sm text-gray-400 italic text-center max-w-2xl mx-auto mb-24">
          These represent the types of businesses on our waitlist. We respect their privacy — no real names or logos shared without permission.
        </p>

        <div className="relative py-12" ref={quoteRef}>
          <p className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto text-center leading-relaxed text-gray-400">
            "91% of small businesses using AI report{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              revenue growth
            </motion.span>
            . Every business we bring online is one that{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              survives
            </motion.span>
            ,{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              hires
            </motion.span>
            , and{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1.2, delay: 1.6 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              serves its neighborhood
            </motion.span>
            {' '}for another generation."
          </p>
        </div>
      </div>
    </section>
  );
}
