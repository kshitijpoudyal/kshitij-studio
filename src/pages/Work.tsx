import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition, staggerContainer, staggerItem } from '../lib/motion'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { clients } from '../data/clients'
import type { FilterCategory } from '../types'

const categories: FilterCategory[] = ['All', 'Public Product', 'Personal Tool', 'Client Work']

export default function Work() {
  const [active, setActive] = useState<FilterCategory>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.group === active)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ── PAGE HEADER ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pt-40 pb-16 md:pt-48 md:pb-20">
        <AnimatedSection>
          <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-5">
            Work
          </span>
          <h1 className="f-disp text-[44px] md:text-[56px] leading-[1.1] font-bold tracking-[-0.02em] text-on-surface">
            Things I've built.
          </h1>
        </AnimatedSection>
      </section>

      {/* ── FILTERS + GRID ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pb-24 md:pb-32">

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-2 f-disp text-sm font-semibold rounded-full transition-colors duration-200 ${
                  active === cat ? 'text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {/* Animated background pill slides between active tabs */}
                {active === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.38 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid with enter/exit animations */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-on-surface-variant py-16"
          >
            No projects in this category yet.
          </motion.p>
        )}

      </section>

      {/* ── CLIENT CONTRIBUTIONS ── */}
      <section className="bg-surface-container-low py-20 md:py-24">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-20">

          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-3">
                Client Contributions
              </span>
              <p className="text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                Contributed to these products as part of client engagements through NTT DATA.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={staggerItem}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                className="bg-surface-container-lowest rounded-xl px-6 py-6 flex flex-col items-center gap-2 border border-outline-variant/25 text-center cursor-default"
              >
                <span className="f-disp text-lg font-bold tracking-tight text-on-surface">
                  {client.name}
                </span>
                <span className="text-xs text-on-surface-variant">{client.description}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-primary py-28 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-lg mx-auto">
            <AnimatedSection delay={0}>
              <h2 className="f-disp text-[44px] md:text-[58px] leading-[1.1] font-bold tracking-[-0.02em] text-on-primary mb-10">
                Have a project in mind?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.14}>
              <motion.div className="inline-block" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 f-disp font-bold text-lg text-on-primary border-b-2 border-on-primary/30 pb-1.5 hover:border-on-primary transition-colors duration-300"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
