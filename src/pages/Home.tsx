import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, staggerItem, wordVariant } from '../lib/motion'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { clients } from '../data/clients'

const heroHeadline = 'Bridging everyday life and the digital world through clean, modern apps.'
const heroSubheadline = 'I design and build web and mobile experiences that simplify complexity and improve how people get things done.'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ── HERO ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-secondary-container/60 text-on-secondary-container px-3 py-1.5 rounded-full mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.45, 1], opacity: [1, 0.45, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-secondary block shrink-0"
            />
            <span className="f-disp text-xs font-semibold">Available for projects</span>
          </motion.div>

          {/* Headline — word by word stagger */}
          <motion.h1
            className="f-disp text-[52px] md:text-[66px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface mb-7"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.048, delayChildren: 0.15 } } }}
            initial="hidden"
            animate="visible"
          >
            {heroHeadline.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className="inline-block mr-[0.26em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="text-lg leading-relaxed text-on-surface-variant max-w-xl mb-12"
          >
            {heroSubheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <a
                href="#featured-work"
                className="px-7 py-3.5 bg-primary text-on-primary rounded-lg f-disp text-sm font-bold hover:opacity-85 transition-opacity duration-200 inline-block"
              >
                View Work
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-7 py-3.5 border border-outline-variant text-on-surface rounded-lg f-disp text-sm font-bold hover:bg-surface-container transition-colors duration-200 inline-block"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <AnimatedSection delay={0}>
            <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-5">
              Philosophy
            </span>
            <h2 className="f-disp text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface mb-6">
              Designing for utility, building for longevity.
            </h2>
            <div className="space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                At Kshitij Studio, the approach is rooted in simplifying the friction of daily life.
                I believe software shouldn't just be functional — it should be an invisible partner
                in your workflow.
              </p>
              <p>
                Every design decision and every line of code is measured against a simple question:
                does this make the user's life tangibly better? That commitment to intentionality
                ensures every product feels both purposeful and premium.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <div className="aspect-square bg-surface-container rounded-3xl overflow-hidden relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOzTHQ9SJvZixrhOLwx7KB06MUlfe_78lWz9A4gQRrncbtnA_cdQSLJZA2k63fEY7CczqgP1_HL2GZmLpcAuTqL0KFNqaflRu-aYY2q6YQ40fqphVDLEhyeVen6rrNFpttNdAsmVw0bxoNuoSNwnTHxpH5pZDMqm2Fa4O4yrCgUtTViGTNaGopzkctJIyjB4dGhH_rIlkCTe5sPF2Ew-P7S4wV9zy-VsnBvo2nNTIPhOUecYG1C8jiiJ4Ny9CJVRBXeYtiLjC7KZQ"
                alt="Minimalist home office workspace with clean desk setup and soft natural light"
                loading="lazy"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none" />
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section id="featured-work" className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32">

        <AnimatedSection>
          <div className="flex items-end justify-between mb-14">
            <div>
              <h2 className="f-disp text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface mb-3">
                Featured Work
              </h2>
              <div className="w-14 h-0.5 bg-primary" />
            </div>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-1.5 f-disp text-sm font-semibold text-on-surface group hover:opacity-70 transition-opacity duration-200"
            >
              View All Work
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="flex">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view all */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 f-disp text-sm font-semibold text-on-surface"
          >
            View All Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-primary py-28 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-20 text-center">
          <div className="max-w-lg mx-auto">

            <AnimatedSection delay={0}>
              <h2 className="f-disp text-[44px] md:text-[58px] leading-[1.1] font-bold tracking-[-0.02em] text-on-primary mb-5">
                Have a project in mind?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <p className="text-on-primary/60 leading-relaxed mb-12 text-base">
                Open to select freelance projects and collaborations. Let's build something useful together.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
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
