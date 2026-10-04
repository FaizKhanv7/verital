'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import MagneticButton from '@/components/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Demo', href: '#waitlist' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-2 md:top-4' : 'top-4 md:top-6'}`}
      style={{ transform: hidden ? 'translateY(calc(-100% - 2rem))' : 'translateY(0)' }}
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6 relative z-10">
        <div className={`relative flex items-center justify-between rounded-lg border border-white/20 bg-white/70 px-4 py-3 backdrop-blur-xl transition-shadow ${scrolled ? 'shadow-lg shadow-black/5' : 'shadow-md shadow-black/5'}`}>
          <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <Logo className="h-6 w-auto" showText={true} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                className="text-sm font-medium text-gray-600 transition hover:text-[#F97316]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton variant="primary" href="#waitlist" onClick={(e) => handleSmoothScroll(e, 'waitlist')} className="px-5 py-2 text-sm">
              Book A Demo
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col items-center justify-center space-y-1 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-gray-600 rounded-full" />
            <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 bg-gray-600 rounded-full" />
            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-gray-600 rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute left-4 right-4 top-20 rounded-lg border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="text-lg font-medium text-gray-800 transition hover:text-[#F97316]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#waitlist"
                  onClick={(e) => handleSmoothScroll(e, 'waitlist')}
                  className="flex w-full items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#EA580C]"
                >
                  Book A Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
