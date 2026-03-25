'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const services = [
  { id: '01', title: 'Project Leadership & Management',        description: 'End-to-end ownership of complex construction projects — planning, execution, timeline, and budget control.' },
  { id: '02', title: 'Construction Engineering Solutions',     description: 'Technical problem-solving on site: structural challenges, methodologies, and field engineering across diverse typologies.' },
  { id: '03', title: 'Design & Technical Consultancy',         description: 'Design review, technical due diligence, buildability assessments, and specification development.' },
  { id: '04', title: 'Finishes & Quality Management',          description: 'Comprehensive QA/QC for high-end interior finishes, material standards, and quality assurance on premium developments.' },
  { id: '05', title: 'Soil Investigation & Ground Improvement',description: 'Geotechnical assessment, soil testing, ground stabilisation, and foundation advisory.' },
  { id: '06', title: 'Fire & Life Safety Planning',            description: 'Integrated fire safety strategy: egress planning, suppression systems, compliance review, and coordination.' },
  { id: '07', title: 'Tenancy Coordination & Retail Protocols',description: 'Managing tenant fit-out processes, coordinating retail requirements, and aligning deliverables with developer standards.' },
  { id: '08', title: 'Residential & Retail Developments',      description: 'Full-cycle delivery expertise across residential communities and commercial retail — from concept through handover.' },
  { id: '09', title: 'Urban & Town Planning',                  description: 'Strategic urban design input, master planning advisory, and infrastructure integration for mixed-use developments.' },
  { id: '10', title: 'Construction Contract Law Consultancy',  description: 'Dual expertise offering contract drafting, dispute advisory, claims management, and legal risk mitigation on site.' },
]

const sv = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }
const iv = { hidden: { opacity: 0, x: -22 }, show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bannerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ['start end', 'end start'] })
  const bannerY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <>
      {/* ── PHOTO BANNER ── */}
      <div ref={bannerRef} className="relative h-64 md:h-80 overflow-hidden">
        <motion.div style={{ y: bannerY }} className="absolute inset-0 scale-110">
          <Image
            src="/assets/image8.jpeg"
            alt="Muhammad Saad Iftikhar"
            fill
            className="object-cover object-top"
            quality={85}
          />
          <div className="absolute inset-0 bg-navy-950/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950" />
        </motion.div>

        {/* Centred quote */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold-500/60" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-gold-500 uppercase">Philosophy</span>
              <div className="w-12 h-px bg-gold-500/60" />
            </div>
            <p className="font-cormorant text-2xl md:text-4xl font-light italic text-cream/90 leading-snug">
              &ldquo;Precision is not a choice — it is the foundation of every structure that stands.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="relative bg-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Faint "10" watermark */}
        <div className="absolute right-0 bottom-0 font-cormorant text-[18rem] font-black text-cream/[0.015] leading-none pointer-events-none select-none" aria-hidden="true">
          10
        </div>

        <motion.div ref={ref} variants={sv} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="max-w-7xl mx-auto px-6 md:px-10"
        >
          {/* Header */}
          <motion.div variants={iv} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.45em] text-gold-500 uppercase">03 — What I Offer</span>
            <div className="h-px flex-1 max-w-xs bg-border/50" />
          </motion.div>
          <motion.div variants={iv} className="mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[0.92]">
              Ten Disciplines,{' '}
              <span className="font-black italic text-gold-gradient">One Vision</span>
            </h2>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 border border-border/20">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                variants={iv}
                className={`group relative p-7 md:p-8 border-b border-[#1a3050]/20 cursor-default
                  hover:bg-navy-800/60 transition-all duration-300
                  ${i % 2 === 0 ? 'md:border-r md:border-r-[#1a3050]/20' : ''}
                `}
              >
                {/* Hover left accent bar — animates via JS transform */}
                <motion.div
                  className="absolute top-0 left-0 w-0.5 bg-gold-500 origin-top"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{ height: '100%' }}
                />

                {/* Faint number */}
                <span className="absolute top-4 right-5 font-cormorant text-6xl font-black text-cream/[0.04] group-hover:text-gold-500/10 transition-colors duration-300 leading-none select-none pointer-events-none">
                  {s.id}
                </span>

                <div className="relative z-10">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-gold-500/50 group-hover:text-gold-500/80 uppercase mb-3 block transition-colors duration-300">
                    {s.id}
                  </span>
                  <h3 className="font-cormorant text-xl md:text-2xl font-bold text-cream group-hover:text-gold-300 transition-colors duration-300 leading-tight mb-3">
                    {s.title}
                  </h3>
                  {/* Description slides down via max-h animation */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-[max-height] duration-500 ease-out">
                    <p className="text-muted text-sm leading-relaxed font-sans pb-1">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div variants={iv} className="mt-12 flex items-center justify-between gap-4 flex-wrap">
            <span className="font-mono text-[10px] tracking-[0.25em] text-border/60 uppercase">
              Hover each discipline to learn more
            </span>
            <a href="#contact"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gold-500/70 hover:text-gold-400 transition-colors uppercase font-sans"
            >
              Discuss your project
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-block">→</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
