'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import SectionReveal from '@/components/SectionReveal'

const steps = [
  {
    title: 'Audit',
    description: 'We learn your business. Walk-in or video call. 30 minutes. We figure out what you need.'
  },
  {
    title: 'Build',
    description: 'Our team builds your website, sets up payments, and connects everything. You approve, we launch.'
  },
  {
    title: 'Launch',
    description: 'Your business goes live online. Google finds you. Customers find you. Revenue flows.'
  },
  {
    title: 'Automate',
    description: 'AI handles the busywork — missed calls, review replies, appointment reminders. You focus on what you do best.'
  }
]

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // The line draws down as user scrolls
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#F97316] text-sm font-semibold tracking-wider uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-[56px] leading-[1.1] font-bold text-[#111827] max-w-3xl mx-auto mb-6">
              From first call to fully automated.
            </h2>
            <p className="text-[#4B5563] text-lg md:text-xl max-w-2xl mx-auto">
              We handle everything. You keep running your business.
            </p>
          </div>

          <div ref={containerRef} className="relative max-w-4xl mx-auto pb-12">
            {/* Desktop Center Line Background */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2" />
            
            {/* Mobile Left Line Background */}
            <div className="block md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />

            {/* Animated Line */}
            <motion.div 
              style={{ height: lineHeight, originY: 0 }}
              className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#F97316] to-[#FB923C] -translate-x-1/2"
            />
            <motion.div 
              style={{ height: lineHeight, originY: 0 }}
              className="block md:hidden absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[#F97316] to-[#FB923C]"
            />

            <div className="relative space-y-16 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: prefersReducedMotion ? 0 : 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Step Content */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                    }`}>
                      <h3 className="text-2xl font-bold text-[#111827] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-auto md:transform md:-translate-x-1/2 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          type: 'spring', 
                          stiffness: 260, 
                          damping: 20, 
                          delay: 0.2 
                        }}
                        className="w-12 h-12 bg-[#F97316] rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10"
                      >
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                        {/* Pulse Ring */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 0, scale: 1.5 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeOut",
                            delay: 0.5
                          }}
                          className="absolute inset-0 bg-[#F97316] rounded-full -z-10"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
