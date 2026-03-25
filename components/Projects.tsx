'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: '01',
    name: 'Packages Mall',
    location: 'Lahore',
    type: 'Commercial Retail',
    year: '2016–2018',
    image: '/assets/image17.jpeg',
    description:
      "A landmark high-end retail complex in Lahore. Oversaw construction engineering, premium finishes, tenancy coordination, and retail protocols for one of Pakistan's premier shopping destinations.",
    tags: ['Retail', 'Finishes', 'Tenancy Coordination'],
  },
  {
    id: '02',
    name: 'Orange Line Metro',
    location: 'Lahore',
    type: 'Mass Transit Infrastructure',
    year: '2018–2021',
    image: '/assets/image16.jpeg',
    description:
      "Pakistan's first mass rapid transit system. Key role in ground improvement, soil investigation, and critical infrastructure engineering at an urban scale across the city of Lahore.",
    tags: ['Infrastructure', 'Ground Works', 'Metro Rail'],
  },
  {
    id: '03',
    name: 'AIOU Auditorium',
    location: 'Islamabad',
    type: 'Institutional',
    year: '2015–2016',
    image: '/assets/image15.jpeg',
    description:
      'Auditorium construction for Allama Iqbal Open University. Managed structural execution, QA/QC standards, and compliance with institutional requirements across the capital.',
    tags: ['Institutional', 'Structural', 'QA/QC'],
  },
  {
    id: '04',
    name: '132/11 KV GIS Grid Station',
    location: 'DHA EME, Lahore',
    type: 'Critical Infrastructure',
    year: '2019–2020',
    image: '/assets/image13.jpeg',
    description:
      'Civil and structural engineering for a Gas-Insulated Switchgear grid station. Precision civil work supporting critical electrical infrastructure in DHA EME sector, Lahore.',
    tags: ['Electrical', 'Civil Works', 'DHA'],
  },
  {
    id: '05',
    name: 'Gold Crest Mall',
    location: 'Lahore',
    type: 'Commercial Retail',
    year: '2017–2018',
    image: '/assets/image11.jpeg',
    description:
      'Commercial development with premium retail spaces. Handled design & technical consultancy, finishes management, and quality assurance throughout the full construction lifecycle.',
    tags: ['Retail', 'Design', 'Quality Management'],
  },
  {
    id: '06',
    name: 'Defence RAYA Golf & Country Club',
    location: 'Lahore',
    type: 'Residential & Leisure',
    year: '2020–2022',
    image: '/assets/image12.jpeg',
    description:
      'Mixed-use golf resort and residential apartment development. Project leadership across residential planning, urban design, and leisure infrastructure for an upscale community.',
    tags: ['Residential', 'Urban Planning', 'Leisure'],
  },
]

const sv = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const cv = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="projects" className="relative bg-navy-950 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(196,151,58,0.04) 0%, transparent 60%)' }} />

      <motion.div
        ref={ref}
        variants={sv}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        {/* Header */}
        <motion.div variants={cv} className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.45em] text-gold-500 uppercase">02 — Signature Projects</span>
          <div className="h-px flex-1 max-w-xs bg-border/50" />
        </motion.div>
        <motion.div variants={cv} className="mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[0.92]">
            Built to{' '}
            <span className="font-black italic text-gold-gradient">Last</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={cv}
              onHoverStart={() => setActive(p.id)}
              onHoverEnd={() => setActive(null)}
              className="group relative overflow-hidden cursor-default"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Project image — wrapper handles the zoom */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Permanent dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/15" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/70 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/0 group-hover:border-gold-500/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">

                {/* Type tag */}
                <div className="mb-3">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-gold-500/80 uppercase">{p.type}</span>
                </div>

                {/* Name */}
                <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-cream leading-tight mb-1 group-hover:text-gold-300 transition-colors duration-300">
                  {p.name}
                </h3>

                {/* Location + year */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[9px] tracking-widest text-muted">
                    {p.location} · {p.year}
                  </span>
                </div>

                {/* Description — revealed on hover */}
                <AnimatePresence>
                  {active === p.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <p className="text-muted/90 text-xs leading-relaxed mb-4 font-sans">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[8px] tracking-[0.2em] text-gold-500/70 uppercase border border-gold-500/20 px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Number watermark */}
                <div className="absolute top-4 right-5 font-cormorant text-7xl font-bold text-cream/[0.04] group-hover:text-cream/[0.06] transition-colors duration-500 leading-none select-none pointer-events-none">
                  {p.id}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.div variants={cv} className="mt-10 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-border/60 uppercase">
            Hover cards to read project details
          </span>
          <div className="h-px w-10 bg-border/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
