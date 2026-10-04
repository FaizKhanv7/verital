'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';

export default function HeroSection() {
  const headline = 'Georgia, online.'.split(' ');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] px-4 pt-32 pb-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#F97316] font-semibold tracking-wider text-sm md:text-base uppercase mb-6"
        >
          The last-mile digitization partner for Georgia
        </motion.span>

        <h1 className="text-[56px] md:text-[72px] font-bold tracking-tight text-[#111827] leading-[1.1] mb-6">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1 + 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-3 lg:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
        >
          Verital turns offline mom-and-pop shops into modern digital businesses — payments, websites, online stores, and AI-powered automation — in weeks, not years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <MagneticButton variant="primary" onClick={() => scrollTo('demo')}>
            See how it works
          </MagneticButton>
          <MagneticButton variant="secondary" onClick={() => scrollTo('waitlist')}>
            Book A Demo
          </MagneticButton>
        </motion.div>

        {/* Store dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <div className="w-full overflow-hidden rounded-xl border border-[#30343b] bg-[#0c0e11] text-white shadow-[0_32px_100px_-35px_rgba(15,23,42,0.65)]">
            <div className="flex h-12 items-center justify-between border-b border-white/[0.08] bg-[#14171b] px-4 md:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#f97316] text-xs font-bold">V</span>
                <span className="text-xs font-semibold tracking-tight text-gray-100">Verital Store</span>
                <span className="hidden text-[11px] text-gray-600 sm:inline">/</span>
                <span className="hidden text-[11px] text-gray-400 sm:inline">Overview</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#343940] text-[10px] font-semibold text-gray-200">PP</span>
              </div>
            </div>
            
            <div className="flex min-h-[390px]">
              <aside className="hidden w-44 shrink-0 flex-col border-r border-white/[0.08] bg-[#14171b] p-4 md:flex">
                <div className="mb-7 flex items-center gap-2.5 px-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-sm font-bold">P</span>
                  <div>
                    <div className="text-xs font-semibold tracking-tight">Peach &amp; Pine</div>
                    <div className="text-[10px] text-gray-500">Online store</div>
                  </div>
                </div>
                <span className="mb-2 px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">Workspace</span>
                <nav className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2 rounded-md bg-white/[0.09] px-2.5 py-2 font-medium text-white">
                    <span className="text-[#fb923c]">▦</span> Overview
                  </div>
                  {['Orders', 'Products', 'Customers', 'Online store'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-md px-2.5 py-2 text-gray-400">
                      <span className="h-3.5 w-3.5 rounded border border-white/20" />
                      {item}
                      {item === 'Orders' && <span className="ml-auto rounded bg-white/10 px-1.5 py-0.5 text-[9px]">8</span>}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto rounded-lg border border-white/[0.08] bg-white/[0.03] p-2.5">
                  <div className="mb-1 flex items-center gap-1.5 text-[10px] font-medium text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Store is live
                  </div>
                  <div className="truncate text-[9px] text-gray-500">peachandpine.com</div>
                </div>
              </aside>
              <div className="min-w-0 flex-1 p-4 md:p-6">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-gray-500">Store overview</div>
                    <h2 className="mt-1 text-base font-semibold tracking-tight text-white md:text-lg">Good morning, Alex</h2>
                  </div>
                  <div className="rounded-md border border-white/[0.1] bg-white/[0.03] px-2.5 py-1.5 text-[9px] text-gray-300">Last 30 days <span className="ml-2 text-gray-500">⌄</span></div>
                </div>
                <div className="grid grid-cols-3 gap-2.5 md:gap-3">
                  {[
                    { label: 'Total sales', value: '$12,486', change: '+12.8%' },
                    { label: 'Orders', value: '284', change: '+8.2%' },
                    { label: 'Conversion', value: '3.6%', change: '+0.4%' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-white/[0.09] bg-[#13161a] p-3 md:p-4">
                      <div className="text-[9px] text-gray-500 md:text-[10px]">{stat.label}</div>
                      <div className="mt-1 text-sm font-semibold tracking-tight text-white md:text-lg">{stat.value}</div>
                      <div className="mt-1 text-[8px] font-medium text-emerald-400 md:text-[9px]">{stat.change}<span className="ml-1 text-gray-600">vs last month</span></div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-lg border border-white/[0.09] bg-[#13161a] p-3.5 md:p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] font-medium text-gray-200">Sales over time</div>
                        <div className="mt-1 text-[9px] text-gray-500">Revenue performance</div>
                      </div>
                      <span className="text-[9px] text-gray-500">USD&nbsp; ▾</span>
                    </div>
                    <div className="relative mt-3 h-[100px] overflow-hidden">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-dashed border-white/[0.07]" />
                        <span className="border-t border-dashed border-white/[0.07]" />
                        <span className="border-t border-dashed border-white/[0.07]" />
                        <span className="border-t border-dashed border-white/[0.07]" />
                      </div>
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 112" preserveAspectRatio="none" role="img" aria-label="Sales trend rising through the month">
                        <defs>
                          <linearGradient id="sales-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" stopOpacity=".25" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 91 C28 86 35 75 62 79 S99 60 125 67 S160 78 188 55 S225 68 250 48 S285 61 312 39 S350 51 375 31 S412 44 438 20 S474 32 500 8 V112 H0Z" fill="url(#sales-fill)" />
                        <path d="M0 91 C28 86 35 75 62 79 S99 60 125 67 S160 78 188 55 S225 68 250 48 S285 61 312 39 S350 51 375 31 S412 44 438 20 S474 32 500 8" fill="none" stroke="#fb923c" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                        <circle cx="438" cy="20" r="4" fill="#fb923c" stroke="#13161a" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                    <div className="mt-1 flex justify-between text-[8px] text-gray-600"><span>May 1</span><span>May 7</span><span>May 14</span><span>May 21</span><span>May 30</span></div>
                  </div>
                  <div className="rounded-lg border border-white/[0.09] bg-[#13161a] p-3.5 md:p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-[10px] font-medium text-gray-200">Recent orders</div>
                      <span className="text-[9px] text-[#fb923c]">View all</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { initials: 'JM', name: 'Jordan M.', item: 'Ceramic pour-over set', amount: '$68.00', color: 'bg-violet-400/20 text-violet-300' },
                        { initials: 'SK', name: 'Sam K.', item: 'Linen market tote', amount: '$34.00', color: 'bg-sky-400/20 text-sky-300' },
                        { initials: 'AR', name: 'Avery R.', item: 'Hand-thrown mug', amount: '$42.00', color: 'bg-amber-400/20 text-amber-300' },
                      ].map((order) => (
                        <div key={order.initials} className="flex items-center gap-2">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold ${order.color}`}>{order.initials}</span>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-[9px] font-medium text-gray-200">{order.name}</div>
                            <div className="truncate text-[8px] text-gray-500">{order.item}</div>
                          </div>
                          <span className="text-[9px] font-medium text-gray-300">{order.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Ticker Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-500"
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
