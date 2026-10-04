'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion, type Variants } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';

export default function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setStep(5);
      return;
    }

    if (!isInView) {
      setStep(0);
      return;
    }

    // Sequence timings
    const timers = [
      setTimeout(() => setStep(1), 2500),  // Show typing indicator
      setTimeout(() => setStep(2), 4000),  // Show AI initial message
      setTimeout(() => setStep(3), 5500),  // Customer replies MENU
      setTimeout(() => setStep(4), 6500),  // AI responds with MENU
      setTimeout(() => setStep(5), 9000),  // Customer orders
      setTimeout(() => setStep(6), 10000), // AI confirms order
      setTimeout(() => setStep(7), 12000), // Toast notification
      setTimeout(() => setStep(0), 17000), // Reset and loop
    ];

    return () => timers.forEach(clearTimeout);
  }, [isInView, shouldReduceMotion]);

  const TypingIndicator = () => (
    <div className="flex space-x-1 p-3 bg-gray-700/50 rounded-2xl w-16 items-center justify-center">
      <motion.div
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const toastVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="demo" className="py-24 bg-[#0F172A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[#F97316] text-sm font-semibold tracking-wider mb-4 uppercase">
              See it in action
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Already built. Already working.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              This isn't a pitch about what we plan to make. This is what Verital does today.
            </p>
          </div>
        </SectionReveal>

        <div className="relative max-w-sm mx-auto" ref={containerRef}>
          {/* Phone Frame */}
          <div className="relative rounded-[2.5rem] border-4 border-gray-700 bg-gray-900 h-[700px] p-4 shadow-2xl overflow-hidden shadow-indigo-500/10">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-700 rounded-b-3xl w-1/2 mx-auto z-20"></div>

            {/* Inner Screen */}
            <div className="relative h-full w-full bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col pt-12">
              
              {/* Toast Notification */}
              <AnimatePresence>
                {step >= 7 && (
                  <motion.div
                    variants={toastVariants}
                    initial={shouldReduceMotion ? "visible" : "hidden"}
                    animate="visible"
                    exit="exit"
                    className="absolute top-4 inset-x-4 z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">⭐</span>
                      <span className="text-sm font-semibold text-white">New Google Review — Auto-responded</span>
                    </div>
                    <p className="text-xs text-gray-300">
                      "Best bakery in town!" — Replied: Thank you so much! We're glad you love our pastries. 🙏
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call Overlay */}
              <AnimatePresence>
                {step === 0 && !shouldReduceMotion && (
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 z-10 bg-gray-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6"
                  >
                    <div className="w-20 h-20 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-3xl">
                      👤
                    </div>
                    <h3 className="text-2xl font-bold mb-1">Maple St. Bakery</h3>
                    <p className="text-gray-400 mb-12">Incoming call...</p>
                    <div className="flex gap-12 mt-12">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {step >= 1 && step < 2 && !shouldReduceMotion && (
                    <motion.div variants={bubbleVariants} initial="hidden" animate="visible" exit="exit" className="self-start">
                      <TypingIndicator />
                    </motion.div>
                  )}
                  
                  {step >= 2 && (
                    <motion.div variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[85%]">
                      <div className="bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white rounded-2xl rounded-tl-sm p-4 text-sm shadow-md">
                        Hi! Thanks for calling Maple St. Bakery. We're helping another customer right now. Can we text you back? Reply MENU to see today's specials. 🧁
                      </div>
                    </motion.div>
                  )}

                  {step >= 3 && (
                    <motion.div variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-end max-w-[85%]">
                      <div className="bg-gray-700 text-white rounded-2xl rounded-tr-sm p-4 text-sm shadow-md">
                        MENU
                      </div>
                    </motion.div>
                  )}

                  {step >= 4 && (
                    <motion.div variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[85%]">
                      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl rounded-tl-sm p-4 text-sm shadow-md whitespace-pre-line">
                        {`Today's specials:\n🥐 Almond Croissant — $4.50\n🍞 Sourdough Loaf — $8.00\n🧁 Red Velvet Cupcake — $3.50\n\nReply with your order + pickup time!`}
                      </div>
                    </motion.div>
                  )}

                  {step >= 5 && (
                    <motion.div variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-end max-w-[85%]">
                      <div className="bg-gray-700 text-white rounded-2xl rounded-tr-sm p-4 text-sm shadow-md">
                        2 croissants, pickup at 3pm
                      </div>
                    </motion.div>
                  )}

                  {step >= 6 && (
                    <motion.div variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[85%]">
                      <div className="bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white rounded-2xl rounded-tl-sm p-4 text-sm shadow-md">
                        Got it! 2 Almond Croissants for pickup at 3:00 PM. Total: $9.00. We'll have them ready! 🎉
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-400 italic">
            Every interaction above is automated. The owner never touched their phone.
          </p>
        </div>
      </div>
    </section>
  );
}
