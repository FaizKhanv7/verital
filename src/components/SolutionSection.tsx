'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import SectionReveal from '@/components/SectionReveal'

const RocketIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const ChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const GearIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const features = {
  launch: [
    'Professional website',
    'Online payments',
    'Google Business setup',
    'Custom domain'
  ],
  grow: [
    'Online store',
    'Order management',
    'Customer email capture',
    'Inventory tracking'
  ],
  operate: [
    'AI missed-call text-back',
    'Automated review responses',
    'Appointment scheduling',
    'Smart inventory alerts'
  ]
}

export default function SolutionSection() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    }
  }

  const hoverProps = prefersReducedMotion ? {} : {
    whileHover: { 
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { 
        type: 'spring' as const, 
        stiffness: 300, 
        damping: 20 
      }
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#F97316] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Build
            </span>
            <h2 className="text-4xl md:text-[56px] leading-[1.1] font-bold text-[#111827] max-w-3xl mx-auto mb-6">
              Everything your business needs to go digital.
            </h2>
            <p className="text-[#4B5563] text-lg md:text-xl max-w-2xl mx-auto">
              Three tiers. One mission. Get your business online and keep it growing.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            {/* Card 1 - Launch */}
            <motion.div 
              variants={cardVariants}
              {...hoverProps}
              className="bg-white rounded-3xl border border-gray-200 p-8 h-full flex flex-col group cursor-default"
            >
              <div className="bg-[#F97316]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: 'spring' }}>
                  <RocketIcon className="w-7 h-7 text-[#F97316]" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Launch</h3>
              <p className="text-gray-500 mb-8 font-medium">Get online</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {features.launch.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckIcon className="w-5 h-5 text-[#F97316] mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 - Grow (Highlighted) */}
            <motion.div 
              variants={cardVariants}
              {...hoverProps}
              className="relative p-[2px] rounded-[26px] bg-gradient-to-br from-[#F97316] to-[#FB923C] group cursor-default md:scale-105 z-10 shadow-xl"
            >
              <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                <span className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Most popular
                </span>
              </div>
              <div className="bg-white rounded-[24px] p-8 h-full flex flex-col">
                <div className="bg-[#F97316]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <motion.div whileHover={{ y: -4, scale: 1.1 }} transition={{ type: 'spring' }}>
                    <ChartIcon className="w-7 h-7 text-[#F97316]" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-2">Grow</h3>
                <p className="text-gray-500 mb-8 font-medium">Sell more</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {features.grow.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckIcon className="w-5 h-5 text-[#F97316] mr-3 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3 - Operate */}
            <motion.div 
              variants={cardVariants}
              {...hoverProps}
              className="bg-white rounded-3xl border border-gray-200 p-8 h-full flex flex-col group cursor-default"
            >
              <div className="bg-[#F97316]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <motion.div whileHover={{ rotate: 90 }} transition={{ type: 'spring', duration: 0.5 }}>
                  <GearIcon className="w-7 h-7 text-[#F97316]" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Operate</h3>
              <p className="text-gray-500 mb-8 font-medium">Work smarter</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {features.operate.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckIcon className="w-5 h-5 text-[#F97316] mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

          {/* Pricing CTA */}
          <div className="flex justify-center mt-12">
            <a
              href="mailto:helloverital@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#111827] text-white px-8 py-4 font-semibold text-sm hover:bg-[#1f2937] transition shadow-md"
            >
              Contact for pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
