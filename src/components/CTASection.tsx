'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-[#F97316] py-24 md:py-32">
      {/* Background Gradient & Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#FED7AA]" />
      
      {/* Subtle Animated Mesh Elements */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FB923C]/30 blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#EA580C]/40 blur-[120px]" 
      />
      
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwdjRoNHYtNEgweXptMSAxaDJ2MkgxVjF6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] mix-blend-overlay" />

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
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
            Book A Demo. Be among the first businesses to go digital with Verital.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:helloverital@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#F97316] shadow-sm hover:bg-orange-50 transition"
            >
              Book A Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:helloverital@gmail.com"
              className="text-sm text-orange-100 underline underline-offset-4 hover:text-white transition"
            >
              Partner with us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
