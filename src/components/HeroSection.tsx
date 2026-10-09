'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Users, DollarSign, Star } from 'lucide-react';
import { SlidingTabs } from '@/components/SlidingTabs';
import { SpinningCounter } from '@/components/SpinningCounter';

const STAT_METRICS = [
  { icon: '🏢', target: 36.2, suffix: 'M', decimals: 1, label: 'small businesses in America' },
  { icon: '📊', target: 99.9, suffix: '%', decimals: 1, label: 'of all U.S. businesses' },
  { icon: '👥', target: 62, suffix: 'M', decimals: 0, label: 'people employed' },
  { icon: '💰', target: 200, suffix: '$', decimals: 0, label: 'in sales' },
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -20]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const navLinks = ['Home', 'Services', 'How It Works', 'Impact'];

  const handleTabChange = (index: number) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionMap: Record<string, string> = {
      'Services': 'services',
      'How It Works': 'how-it-works',
      'Impact': 'impact',
    };
    const sectionId = sectionMap[navLinks[index]];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* Background Video */}
      <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none z-0">
        <video
          className="bg-video absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Page Container */}
      <div className="page relative z-10 flex flex-col min-h-screen !pt-28 md:!pt-32">
        {/* Header */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="header shrink-0 fixed top-0 left-0 right-0 z-[100] bg-transparent pointer-events-none"
        >
          <div className="max-w-[720px] mx-auto flex items-center justify-between gap-[clamp(18px,2.8vw,28px)] px-4 pointer-events-auto">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="logo-button shrink-0 w-[clamp(40px,4.4vw,46px)] h-[clamp(40px,4.4vw,46px)] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.16)] cursor-pointer"
            >
              <div className="w-[72%] h-[72%] flex items-center justify-center">
                <img src="/logo.png" alt="" width="52" height="52" className="w-full h-full object-contain rotate-[119deg]" />
              </div>
            </motion.button>

            {/* Desktop Nav with SlidingTabs */}
            <div className="hidden md:flex flex-1 justify-center">
              <SlidingTabs tabs={navLinks} onTabChange={handleTabChange} />
            </div>

            {/* Desktop Sign In / Demo */}
            <a
              href="mailto:helloverital@gmail.com"
              className="hidden md:block bg-[#28282a] text-[#c8c8c8] px-5 py-2 rounded-[999px] text-sm font-medium shadow-[0_4px_14px_rgba(0,0,0,0.16)] hover:bg-[#323234] hover:text-white hover:-translate-y-px transition-all"
            >
              Book Demo
            </a>

            {/* Mobile Burger */}
            <button
              className="md:hidden w-12 h-12 rounded-full bg-[#28282a] flex flex-col items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.16)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <motion.span animate={isMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} className="w-[18px] h-[1.5px] bg-white" />
              <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-[18px] h-[1.5px] bg-white" />
              <motion.span animate={isMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} className="w-[18px] h-[1.5px] bg-white" />
            </button>
          </div>
        </motion.header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/62 backdrop-blur-[6px] z-20"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[72px] left-4 right-4 bg-white rounded-[28px] p-[22px_18px_20px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] z-30"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <a
                    key={link}
                    href="#"
                    className="text-center font-medium text-[#2e2e2e] text-lg py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange(i);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link}
                  </a>
                ))}
                <button className="w-full bg-[#28282a] text-[#c8c8c8] py-3 rounded-[999px] font-medium mt-2">
                  Book Demo
                </button>
              </nav>
            </motion.div>
          </>
        )}

        {/* Hero Content */}
        <div className="hero flex-1 flex flex-col items-center justify-center text-center max-w-[900px] mx-auto px-4 mt-6 md:mt-10 mb-4">
          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="trust-row flex items-center mb-[clamp(16px,2.5vh,26px)]"
            style={{ '--trust-size': 'clamp(36px,4.5vw,42px)' } as React.CSSProperties}
          >
            {[Users, DollarSign, Star].map((Icon, i) => (
              <motion.div
                key={i}
                className="avatar-ring"
                style={{
                  width: 'var(--trust-size)',
                  height: 'var(--trust-size)',
                  marginLeft: i > 0 ? 'calc(var(--trust-size) * -0.42)' : 0,
                  zIndex: i + 1,
                }}
                whileHover={{ y: i === 1 ? -4 : -2 }}
                transition={{ duration: 0.35 }}
              >
                <div className="w-full h-full rounded-full bg-[#28282a] border border-white/40 p-[5px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Icon
                      className="text-black"
                      style={{ width: 'calc(var(--trust-size) * 0.38)', height: 'calc(var(--trust-size) * 0.38)' }}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            <div
              className="trust-pill ml-[calc(var(--trust-size)*-0.42)] pl-[calc(var(--trust-size)*0.58)] pr-4"
              style={{ '--trust-size': 'clamp(36px,4.5vw,42px)' } as React.CSSProperties}
            >
              <span className="text-[#c4c2c3] font-medium text-[clamp(12px,1.4vw,13.5px)] whitespace-nowrap">
                Trusted by 3+ Businesses
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="headline anim">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="block text-white font-display text-[clamp(28px,6.2vw,80px)] tracking-[-0.04em] leading-[1.12] whitespace-nowrap overflow-hidden"
              style={{ fontFamily: '"BubbledotICG-FinePos", "Geist Pixel Circle", monospace' }}
            >
              Software
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="block text-white font-display text-[clamp(28px,6.2vw,80px)] tracking-[-0.04em] leading-[1.12] whitespace-nowrap overflow-hidden"
              style={{ fontFamily: '"BubbledotICG-FinePos", "Geist Pixel Circle", monospace' }}
            >
              Designed To Be Easy
            </motion.span>
          </div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="subhead max-w-[min(500px,92%)] text-[#d0d0d0] opacity-80 text-[clamp(calc(13.5px+2pt),calc(1.55vw+2pt),calc(16.5px+2pt))] leading-[1.55] font-normal mt-6"
          >
            Helping local businesses digitalize and automate in the easiest way possible.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-btn mt-8 bg-white text-black px-[clamp(22px,3vw,28px)] py-[clamp(11px,1.6vh,13px)] rounded-[999px] font-semibold text-[clamp(13.5px,1.5vw,14.5px)] shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_22px_rgba(255,255,255,0.32),0_0_44px_rgba(255,255,255,0.12)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.15)]"
          >
            Get Started
          </motion.button>
        </div>

        {/* Stats Footer */}
        <div
          ref={statsRef}
          className="stats-footer shrink-0 max-w-[920px] mx-auto w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 mt-4 pb-6 md:pb-10 items-end"
        >
          {STAT_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.08 }}
              className="stat-item flex flex-col items-center"
            >
              <SpinningCounter
                target={metric.target}
                suffix={metric.suffix}
                decimals={metric.decimals}
                animate={true}
              />
              <span className="text-[#8e8e8e] text-[clamp(11px,1.2vw,12.5px)] mt-1.5 text-center leading-snug">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --bg: #000000;
          --text: #ffffff;
          --muted: #8e8e8e;
          --nav-text: #2e2e2e;
          --pill-dark: #28282a;
          --sign-in-text: #c8c8c8;
          --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
          --trust-bg: #28282a;
          --trust-border: rgba(255, 255, 255, 0.4);
          --trust-text: #c4c2c3;
          --font-sans: "Inter", "Segoe UI", system-ui, sans-serif;
          --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
        }

        .page {
          padding-left: clamp(14px, 3vw, 32px);
          padding-right: clamp(14px, 3vw, 32px);
          padding-bottom: clamp(16px, 2.4vh, 28px);
        }

        .header {
          padding: clamp(16px, 2vh, 24px) 0;
        }

        .trust-pill {
          height: var(--trust-size);
          background: var(--trust-bg);
          border: 1px solid var(--trust-border);
          border-radius: 999px;
          display: flex;
          align-items: center;
        }

        @media (max-width: 720px) {
          .stats-footer {
            grid-template-columns: repeat(2, 1fr);
          }

          .headline span {
            letter-spacing: -0.08em;
            line-height: 1.05;
          }
        }

        @media (max-width: 420px) {
          .headline span {
            letter-spacing: -0.09em;
            line-height: 1.04;
          }

          .trust-row {
            --trust-size: 34px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
