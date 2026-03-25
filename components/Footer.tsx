'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 border-t border-border/30 py-10 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/name */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-cormorant text-lg font-semibold tracking-[0.25em] text-cream uppercase">
              Muhammad Saad Iftikhar
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-border/60 uppercase">
              Civil Engineer · NUST Graduate
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.2em] text-border/80 hover:text-gold-500/80 transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="font-mono text-[9px] tracking-[0.2em] text-border/50 uppercase text-center md:text-right">
            © {new Date().getFullYear()} M.S. Iftikhar
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-8 pt-6 border-t border-border/15 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-4 h-px bg-gold-500/30" />
            <span className="font-mono text-[9px] tracking-[0.35em] text-border/40 uppercase">
              Precision · Integrity · Excellence
            </span>
            <div className="w-4 h-px bg-gold-500/30" />
          </div>
        </div>
      </div>
    </footer>
  )
}
