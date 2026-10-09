'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion, type Variants } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setStep(6);
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

  // Smooth auto-scroll whenever step advances
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [step]);

  const TypingIndicator = () => (
    <div className="flex space-x-1 px-4 py-3 bg-[#E9E9EB] rounded-2xl rounded-tl-sm w-16 items-center justify-center">
      <motion.div
        className="w-2 h-2 bg-[#8E8E93] rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-[#8E8E93] rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
      />
      <motion.div
        className="w-2 h-2 bg-[#8E8E93] rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 22, stiffness: 280 } },
    exit: { opacity: 0, scale: 0.92, transition: { duration: 0.15 } }
  };

  const toastVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 200 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] px-4 pt-32 pb-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[56px] md:text-[72px] font-bold tracking-tight text-[#111827] leading-[1.1] mb-16"
        >
          Bringing Georgia Online
        </motion.h1>

        {/* iPhone Modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
          ref={containerRef}
          style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.22)) drop-shadow(0 8px 24px rgba(0,0,0,0.12))' }}
        >
          {/* Outer phone body — titanium-like finish */}
          <div
            className="relative w-[300px] h-[600px]"
            style={{ borderRadius: '47px' }}
          >
            {/* Side frame (black) */}
            <div
              className="absolute inset-0 rounded-[47px]"
              style={{
                background: 'linear-gradient(145deg, #1c1c1e 0%, #2c2c2e 40%, #1a1a1c 60%, #242426 100%)',
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.12),
                  inset 0 -1px 0 rgba(0,0,0,0.6),
                  0 0 0 0.5px rgba(0,0,0,0.5)
                `
              }}
            />

            {/* Screen inset */}
            <div
              className="absolute bg-white overflow-hidden"
              style={{
                top: '6px',
                left: '6px',
                right: '6px',
                bottom: '6px',
                borderRadius: '42px',
              }}
            >
              {/* Dynamic Island */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-30"
                style={{ top: '13px' }}
              >
                <div
                  className="bg-black"
                  style={{
                    width: '120px',
                    height: '34px',
                    borderRadius: '20px',
                  }}
                />
              </div>

              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col" style={{ borderRadius: '42px', overflow: 'hidden' }}>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-7 pt-[18px] pb-1 shrink-0">
                  <span className="text-[13px] font-semibold text-black tracking-tight">9:41</span>
                  {/* right status icons */}
                  <div className="flex items-center gap-[5px]">
                    {/* Signal bars */}
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="black">
                      <rect x="0" y="8" width="3" height="4" rx="0.7"/>
                      <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.7"/>
                      <rect x="9" y="3" width="3" height="9" rx="0.7"/>
                      <rect x="13.5" y="0" width="3" height="12" rx="0.7"/>
                    </svg>
                    {/* Battery */}
                    <div className="flex items-center">
                      <div className="relative" style={{ width: '25px', height: '12px', border: '1px solid black', borderRadius: '3px', padding: '1px' }}>
                        <div className="bg-black rounded-sm" style={{ width: '70%', height: '100%' }} />
                        <div className="absolute -right-[4px] top-1/2 -translate-y-1/2 bg-black rounded-[1px]" style={{ width: '2px', height: '5px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Header — iMessage style */}
                <div className="flex flex-col items-center px-4 py-2 border-b border-gray-100 shrink-0">
                  <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-white font-bold text-base shadow-sm mb-0.5">
                    M
                  </div>
                  <div className="text-[13px] font-semibold text-black leading-tight">Helper</div>
                  <div className="text-[11px] text-[#3C3C43]/60">AI Teammate · Online</div>
                </div>

                {/* Toast Notification */}
                <AnimatePresence>
                  {step >= 7 && (
                    <motion.div
                      variants={toastVariants}
                      initial={shouldReduceMotion ? "visible" : "hidden"}
                      animate="visible"
                      exit="exit"
                      className="absolute top-[88px] inset-x-3 z-30 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-3 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm">⭐</span>
                        <span className="text-[11px] font-semibold text-black">New Google Review — Auto-responded</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-snug">
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
                      className="absolute inset-0 z-10 bg-white/97 flex flex-col items-center justify-center p-6"
                      style={{ borderRadius: '42px' }}
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-2xl">
                        👤
                      </div>
                      <h3 className="text-[17px] font-semibold mb-0.5 text-black">Maple St. Bakery</h3>
                      <p className="text-[13px] text-gray-500 mb-8">Incoming call...</p>
                      <div className="flex gap-8 mt-8">
                        <div className="flex flex-col items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center"
                          >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.div>
                          <span className="text-[11px] text-gray-500">Decline</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                            className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center"
                          >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </motion.div>
                          <span className="text-[11px] text-gray-500">Accept</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Chat Messages — scrollable */}
                <div
                  ref={chatScrollRef}
                  className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                  <AnimatePresence mode="popLayout">
                    {step >= 1 && step < 2 && !shouldReduceMotion && (
                      <motion.div key="typing" variants={bubbleVariants} initial="hidden" animate="visible" exit="exit" className="self-start">
                        <TypingIndicator />
                      </motion.div>
                    )}

                    {step >= 2 && (
                      <motion.div key="msg1" variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[82%]">
                        <div className="bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white rounded-[18px] rounded-tl-[5px] px-3 py-2 text-[12px] leading-[1.4] shadow-sm">
                          Hi! Thanks for calling Maple St. Bakery. We're helping another customer right now. Can we text you back? Reply MENU to see today's specials. 🧁
                        </div>
                        <div className="text-[10px] text-[#8E8E93] mt-0.5 ml-1">Delivered</div>
                      </motion.div>
                    )}

                    {step >= 3 && (
                      <motion.div key="msg2" variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-end max-w-[82%]">
                        <div className="bg-[#007AFF] text-white rounded-[18px] rounded-tr-[5px] px-3 py-2 text-[12px] leading-[1.4]">
                          MENU
                        </div>
                      </motion.div>
                    )}

                    {step >= 4 && (
                      <motion.div key="msg3" variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[82%]">
                        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-[18px] rounded-tl-[5px] px-3 py-2 text-[12px] leading-[1.4] shadow-sm whitespace-pre-line">
                          {`Today's specials:\n🥐 Almond Croissant — $4.50\n🍞 Sourdough Loaf — $8.00\n🧁 Red Velvet Cupcake — $3.50\n\nReply with your order + pickup time!`}
                        </div>
                        <div className="text-[10px] text-[#8E8E93] mt-0.5 ml-1">Delivered</div>
                      </motion.div>
                    )}

                    {step >= 5 && (
                      <motion.div key="msg4" variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-end max-w-[82%]">
                        <div className="bg-[#007AFF] text-white rounded-[18px] rounded-tr-[5px] px-3 py-2 text-[12px] leading-[1.4]">
                          2 croissants, pickup at 3pm
                        </div>
                      </motion.div>
                    )}

                    {step >= 6 && (
                      <motion.div key="msg5" variants={bubbleVariants} initial={shouldReduceMotion ? "visible" : "hidden"} animate="visible" className="self-start max-w-[82%]">
                        <div className="bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white rounded-[18px] rounded-tl-[5px] px-3 py-2 text-[12px] leading-[1.4] shadow-sm">
                          Got it! 2 Almond Croissants for pickup at 3:00 PM. Total: $9.00. We'll have them ready! 🎉
                        </div>
                        <div className="text-[10px] text-[#8E8E93] mt-0.5 ml-1">Delivered</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Scroll anchor */}
                  <div ref={messagesEndRef} />
                </div>

                {/* iMessage Composer */}
                <div className="px-3 pb-1 pt-2 border-t border-gray-100 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white border border-gray-300 rounded-full px-3 py-[7px] flex items-center">
                      <span className="text-[12px] text-gray-400">iMessage</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#007AFF] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center py-2 shrink-0">
                  <div className="w-[120px] h-[5px] bg-black rounded-full opacity-20" />
                </div>
              </div>
            </div>

            {/* Hardware buttons — left side (volume + silent) */}
            <div
              className="absolute"
              style={{
                left: '-3px',
                top: '108px',
                width: '3px',
                height: '32px',
                background: 'linear-gradient(to right, #111113, #2a2a2c)',
                borderRadius: '2px 0 0 2px',
              }}
            />
            <div
              className="absolute"
              style={{
                left: '-3px',
                top: '158px',
                width: '3px',
                height: '60px',
                background: 'linear-gradient(to right, #111113, #2a2a2c)',
                borderRadius: '2px 0 0 2px',
              }}
            />
            <div
              className="absolute"
              style={{
                left: '-3px',
                top: '228px',
                width: '3px',
                height: '60px',
                background: 'linear-gradient(to right, #111113, #2a2a2c)',
                borderRadius: '2px 0 0 2px',
              }}
            />

            {/* Hardware button — right side (power) */}
            <div
              className="absolute"
              style={{
                right: '-3px',
                top: '168px',
                width: '3px',
                height: '80px',
                background: 'linear-gradient(to left, #111113, #2a2a2c)',
                borderRadius: '0 2px 2px 0',
              }}
            />

            {/* Screen glare overlay */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '6px',
                left: '6px',
                right: '6px',
                bottom: '6px',
                borderRadius: '42px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Ticker Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-500"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold text-[#111827]">
            <AnimatedCounter target={36.2} suffix="M" prefix="" decimals={1} duration={2000} />
          </div>
          <span>36.2M small businesses in America</span>
        </div>
        
        <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="block md:hidden w-12 h-[1px] bg-gray-200"></div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold text-[#111827]">
            <AnimatedCounter target={99.9} suffix="%" prefix="" decimals={1} duration={2000} />
          </div>
          <span>of all U.S. businesses</span>
        </div>

        <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="block md:hidden w-12 h-[1px] bg-gray-200"></div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold text-[#111827]">
            <AnimatedCounter target={62} suffix="M" prefix="" decimals={0} duration={2000} />
          </div>
          <span>people employed</span>
        </div>
      </motion.div>
    </section>
  );
}
