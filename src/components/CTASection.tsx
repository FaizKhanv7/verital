'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Base dark gradient — mirrors hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Animated orb — top-left, warm purple/violet */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-[#6b21a8]/25 blur-[120px] pointer-events-none"
      />

      {/* Animated orb — bottom-right, deep rose */}
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-48 -right-48 h-[700px] w-[700px] rounded-full bg-[#9f1239]/20 blur-[140px] pointer-events-none"
      />

      {/* Animated orb — center drift, warm amber accent */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#F97316]/10 blur-[100px] pointer-events-none"
      />

      {/* Subtle noise/grain overlay — same as hero video grain feel */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's bring Georgia online.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Book A Demo. Be among the first businesses to go digital with Verital.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:helloverital@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_24px_rgba(255,255,255,0.2)] hover:bg-white/90 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_36px_rgba(255,255,255,0.3)] transition-all"
            >
              Book A Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:helloverital@gmail.com"
              className="text-sm text-white/50 underline underline-offset-4 hover:text-white transition"
            >
              Partner with us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
