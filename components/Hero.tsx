'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.5 },
  },
}

const lineUp = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── PARALLAX BACKGROUND ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 pointer-events-none">
        <Image
          src="/assets/image1.jpeg"
          alt="Architectural background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </motion.div>

      {/* Blueprint grid on top */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none" aria-hidden="true" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 12% 55%, rgba(196,151,58,0.10) 0%, transparent 65%)' }}
      />

      {/* Coordinate labels */}
      <div className="absolute top-20 left-6 font-mono text-[10px] tracking-widest text-border/50 select-none" aria-hidden="true">
        33°41′N · 73°03′E
      </div>
      <div className="absolute top-20 right-6 font-mono text-[10px] tracking-widest text-border/50 text-right select-none" aria-hidden="true">
        NUST · PKR
      </div>
      <div className="absolute bottom-24 left-6 font-mono text-[10px] tracking-widest text-border/40 select-none" aria-hidden="true">
        EST. 2014
      </div>

      {/* Corner tick marks */}
      <div className="absolute top-20 left-6 pointer-events-none" aria-hidden="true">
        <div className="w-px h-12 bg-gold-500/25 ml-3 mt-5" />
        <div className="w-8 h-px bg-gold-500/25" />
      </div>
      <div className="absolute top-20 right-6 pointer-events-none flex flex-col items-end" aria-hidden="true">
        <div className="w-px h-12 bg-gold-500/25 mr-3 mt-5" />
        <div className="w-8 h-px bg-gold-500/25" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-20"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left', display: 'inline-block' }}
                className="w-8 h-px bg-gold-500"
              />
              <span className="font-mono text-[10px] tracking-[0.45em] text-gold-500 uppercase">
                Civil Engineer · Pakistan
              </span>
            </motion.div>

            {/* Name lines */}
            <div className="overflow-hidden mb-0.5">
              <motion.h1 variants={lineUp} className="font-cormorant text-[clamp(3.5rem,9.5vw,9.5rem)] font-light leading-[0.87] text-cream">
                Muhammad
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-0.5">
              <motion.h1 variants={lineUp} className="font-cormorant text-[clamp(3.5rem,9.5vw,9.5rem)] font-light leading-[0.87] text-cream">
                Saad
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-9">
              <motion.h1 variants={lineUp} className="font-cormorant text-[clamp(3.5rem,9.5vw,9.5rem)] font-black italic leading-[0.87] text-gold-gradient">
                Iftikhar
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-7">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
                className="h-px w-24 bg-gradient-to-r from-gold-500 to-transparent"
              />
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted/80 uppercase">
                NUST Graduate · 10+ Years Experience
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-muted text-base md:text-lg max-w-xl leading-[1.8] mb-10 font-sans">
              At the intersection of engineering precision and strategic oversight —
              delivering landmark infrastructure, commercial, and residential
              developments across Pakistan.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gold-500 text-navy-950 text-xs tracking-[0.2em] uppercase font-sans font-bold hover:bg-gold-400 transition-colors duration-300 shadow-[0_0_30px_rgba(196,151,58,0.25)] hover:shadow-[0_0_40px_rgba(196,151,58,0.4)]"
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true">
                  <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-cream/20 text-cream/70 text-xs tracking-[0.2em] uppercase font-sans hover:border-gold-500/60 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-10 pt-8 border-t border-white/8">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '6+', label: 'Landmark Projects' },
                { value: '3+', label: 'Cities' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-cormorant text-5xl text-gold-500 font-bold leading-none mb-1.5">{s.value}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — portrait (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative shrink-0"
          >
            <div className="relative w-72 xl:w-80">
              {/* Gold frame accent */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold-500/30" />
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold-500/10" />

              {/* Portrait image */}
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/image14.png"
                  alt="Muhammad Saad Iftikhar on construction site"
                  width={320}
                  height={420}
                  className="object-cover object-top w-full grayscale-[20%] contrast-[1.05]"
                  priority
                />
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-950 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-navy-800/90 backdrop-blur-md border border-border/60 px-5 py-3"
              >
                <div className="font-cormorant text-2xl font-bold text-gold-400 leading-none">10+</div>
                <div className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase mt-1">Years on Site</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-border/60 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-border/50 to-transparent"
        />
      </motion.div>

      {/* Right vertical email */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none" aria-hidden="true">
        <div style={{ writingMode: 'vertical-rl' }} className="font-mono text-[9px] tracking-[0.35em] text-border/50 uppercase">
          saad.iftikhar717@gmail.com
        </div>
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-border/40 to-transparent" />
      </div>
    </section>
  )
}
