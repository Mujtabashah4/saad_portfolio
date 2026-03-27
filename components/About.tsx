'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 6, suffix: '+', label: 'Landmark Projects' },
  { end: 10, suffix: '', label: 'Service Disciplines' },
  { end: 3, suffix: '+', label: 'Major Cities' },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, end, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return controls.stop
  }, [inView, end])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const sv = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const iv = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative bg-navy-900 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(196,151,58,0.04) 0%, transparent 70%)' }}
      />

      <motion.div
        ref={ref}
        variants={sv}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        {/* Section label */}
        <motion.div variants={iv} className="flex items-center gap-3 mb-16">
          <span className="font-mono text-[10px] tracking-[0.45em] text-gold-500 uppercase">01 — About</span>
          <div className="h-px flex-1 max-w-xs bg-border/50" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-start">

          {/* ── LEFT — Portrait + on-site photo ── */}
          <motion.div variants={iv} className="relative">

            {/* Main portrait */}
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold-500/20 pointer-events-none z-10" />

              <div className="overflow-hidden">
                <motion.div
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/assets/image18.jpeg"
                    alt="Muhammad Saad Iftikhar"
                    width={560}
                    height={700}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: '580px' }}
                  />
                </motion.div>
              </div>

              {/* Gradient bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
            </div>

            {/* Name plate below portrait */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-gold-500/50" />
              <div>
                <p className="font-cormorant text-lg font-semibold text-cream">Muhammad Saad Iftikhar</p>
                <p className="font-mono text-[9px] tracking-[0.3em] text-muted uppercase">Civil Engineer · NUST</p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Bio ── */}
          <div className="flex flex-col gap-7">

            <motion.div variants={iv}>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream leading-[1.0] mb-3">
                Engineering
                <br />
                <span className="font-black italic text-gold-gradient">with Purpose</span>
              </h2>
            </motion.div>

            <motion.p variants={iv} className="text-muted text-[0.95rem] leading-[1.9] font-sans">
              Over a decade of experience at the intersection of engineering execution and strategic oversight.
              With a portfolio spanning landmark projects including{' '}
              <span className="text-gold-400 font-medium">Packages Mall</span> and the{' '}
              <span className="text-gold-400 font-medium">Orange Line Metro</span>, Saad brings deep technical
              expertise in project management, <span className="text-cream/80">QA/QC</span>, and resource optimization.
            </motion.p>

            <motion.p variants={iv} className="text-muted text-[0.95rem] leading-[1.9] font-sans">
              A <span className="text-cream/80">NUST graduate</span> with dual mastery spanning rigorous engineering
              execution and{' '}
              <span className="text-gold-400 font-medium">Construction Contract Law</span> — delivering long-term
              value through precision, compliance, and commercial awareness across infrastructure, commercial, and
              residential sectors.
            </motion.p>

            {/* Callout box */}
            <motion.div
              variants={iv}
              className="relative p-6 border-l-2 border-gold-500 bg-navy-800/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-full opacity-5 pointer-events-none"
                style={{ background: 'linear-gradient(to left, rgba(196,151,58,0.4), transparent)' }} />
              <p className="text-cream/85 text-sm leading-relaxed font-sans italic font-light">
                &ldquo;Delivering precision-engineered solutions across Pakistan&apos;s most demanding commercial,
                infrastructure, and residential developments — where every detail matters.&rdquo;
              </p>
            </motion.div>

            {/* Education badge */}
            <motion.div variants={iv} className="flex items-center gap-4 py-4 border-t border-border/30">
              <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L15 5L8 9L1 5L8 1Z" stroke="#c4973a" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M1 5V11L8 15L15 11V5" stroke="#c4973a" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-cream text-sm font-medium font-sans">NUST — National University of Sciences & Technology</p>
                <p className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase mt-0.5">Bachelor of Engineering (Civil)</p>
              </div>
            </motion.div>

            {/* Contact links */}
            <motion.div variants={iv} className="flex flex-wrap gap-5">
              {[
                { label: 'Saad.iftikhar717@gmail.com', href: 'mailto:Saad.iftikhar717@gmail.com' },
                { label: '+92 333 441 4232', href: 'tel:+923334414232' },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  className="flex items-center gap-2 text-xs tracking-[0.12em] text-muted hover:text-gold-400 transition-colors font-sans"
                >
                  <span className="w-3 h-px bg-current shrink-0" />
                  {c.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <motion.div
          variants={iv}
          className="mt-24 pt-12 border-t border-border/30 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="font-cormorant text-5xl md:text-6xl text-gold-500 font-bold leading-none mb-2 group-hover:text-gold-400 transition-colors duration-300">
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
