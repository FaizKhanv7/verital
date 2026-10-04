'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

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

          <div className="mt-10 mx-auto max-w-md w-full">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-auto rounded-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-orange-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-full bg-white px-8 py-4 font-semibold text-[#F97316] shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
                  >
                    Join
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                  className="flex flex-col items-center justify-center space-y-4 rounded-full bg-white/10 border border-white/20 px-6 py-4"
                >
                  <div className="flex items-center space-x-3">
                    <motion.svg 
                      className="h-6 w-6 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M5 13l4 4L19 7" 
                      />
                    </motion.svg>
                    <span className="text-white font-medium">You're on the list! We'll be in touch.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-8">
            <Link href="#partner" className="text-sm text-orange-100 underline underline-offset-4 hover:text-white transition">
              Partner with us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
