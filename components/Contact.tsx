'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const contactMethods = [
  {
    label: 'Email',
    value: 'Saad.iftikhar717@gmail.com',
    href: 'mailto:Saad.iftikhar717@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 7.5L10 12L18 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+92 333 441 4232',
    href: 'tel:+923334414232',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 2.5C7 2.5 5 3 4 6C3 9 4 12.5 7 15.5C10 18.5 13.5 19 16 18C18.5 17 18.5 15 18.5 15L15.5 12C15.5 12 13.5 12.5 12.5 11.5C11.5 10.5 12 8.5 12 8.5L9 5.5C9 5.5 8 6 7 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Saad-iftikhar717',
    href: 'https://www.linkedin.com/in/saad-iftikhar717',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.5 9V14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="6.5" cy="7" r="0.8" fill="currentColor" />
        <path d="M10.5 14.5V12C10.5 10.5 11 9.5 13 9.5C15 9.5 15.5 10.5 15.5 12V14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10.5 9V14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
]

const sv = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const iv = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const bgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="contact" className="relative bg-navy-950 overflow-hidden">

      {/* ── FULL-BLEED PHOTO BAND ── */}
      <div ref={bgRef} className="relative h-72 md:h-96 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <Image
            src="/assets/image1.jpeg"
            alt="Architecture"
            fill
            className="object-cover object-center"
            quality={85}
          />
          <div className="absolute inset-0 bg-navy-950/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
          <div className="absolute inset-0 blueprint-grid opacity-30" />
        </motion.div>

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[10px] tracking-[0.5em] text-gold-500 uppercase mb-4">Available for new projects</p>
              <h2 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[0.9]">
                Let&apos;s Build
                <br />
                <span className="font-black italic text-gold-gradient">Something</span>
                <br />
                <span className="font-black italic text-gold-gradient">Remarkable.</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── CONTACT CONTENT ── */}
      <div className="py-20 md:py-28">
        <motion.div
          ref={ref}
          variants={sv}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="max-w-7xl mx-auto px-6 md:px-10"
        >
          {/* Sub-heading */}
          <motion.p variants={iv} className="text-muted max-w-2xl leading-relaxed font-sans text-base mb-14">
            Whether you&apos;re initiating a landmark development, seeking engineering consultancy,
            or require construction contract expertise — reach out to start the conversation.
          </motion.p>

          {/* Contact cards */}
          <motion.div variants={sv} className="grid md:grid-cols-3 gap-4 mb-16">
            {contactMethods.map((m) => (
              <motion.a
                key={m.label}
                href={m.href}
                target={m.label === 'LinkedIn' ? '_blank' : undefined}
                rel={m.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                variants={iv}
                className="group relative p-7 border border-border/40 hover:border-gold-500/50 bg-navy-900/40 hover:bg-navy-800/60 transition-all duration-300 overflow-hidden"
              >
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500" />

                {/* Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="text-gold-500/60 group-hover:text-gold-400 transition-colors duration-300 mb-5">
                    {m.icon}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.35em] text-border group-hover:text-muted/80 uppercase mb-2 transition-colors duration-300">
                    {m.label}
                  </div>
                  <div className="font-sans text-sm text-muted group-hover:text-cream transition-colors duration-300 break-all">
                    {m.value}
                  </div>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-2 text-gold-500/0 group-hover:text-gold-500/60 transition-all duration-300">
                    <div className="w-4 h-px bg-current" />
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1 4H7M7 4L5 2M7 4L5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom availability bar */}
          <motion.div
            variants={iv}
            className="flex items-center gap-5 pt-10 border-t border-border/25"
          >
            <div className="flex items-center gap-2.5">
              <motion.div
                animate={{ opacity: [1, 0.2, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted/80 uppercase">
                Available for new projects
              </span>
            </div>
            <div className="h-px flex-1 max-w-24 bg-border/25" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-border/50 uppercase hidden md:block">
              Lahore · Pakistan
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
