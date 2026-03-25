'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/90 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-cormorant text-xl font-semibold tracking-[0.25em] text-cream uppercase hover:text-gold-400 transition-colors duration-300"
          >
            MSI
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5, duration: 0.5 }}
                className="text-xs tracking-[0.2em] text-muted hover:text-gold-400 transition-colors duration-300 uppercase font-sans"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:Saad.iftikhar717@gmail.com"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xs tracking-[0.2em] px-5 py-2.5 border border-gold-500/60 text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 uppercase font-sans font-medium"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 flex flex-col gap-1.5 justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 bg-cream"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-cream"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 bg-cream"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-muted hover:text-gold-400 transition-colors uppercase font-sans"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:Saad.iftikhar717@gmail.com"
                className="text-sm tracking-[0.2em] px-5 py-3 border border-gold-500/60 text-gold-500 text-center uppercase font-sans"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
