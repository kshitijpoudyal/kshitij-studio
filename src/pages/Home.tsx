import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, staggerItem, wordVariant } from '../lib/motion'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
const values = [
  {
    number: '01',
    title: 'Simplify First',
    body: 'Remove friction before adding features. Good software stays out of the way.',
  },
  {
    number: '02',
    title: 'Build to Last',
    body: 'Code written for the next engineer, not just the deadline.',
  },
  {
    number: '03',
    title: 'Ship What Works',
    body: 'A working product beats a perfect one that never ships.',
  },
]

const heroHeadline = 'Bridging everyday life and the digital world through clean, modern apps.'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ── HERO ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          {/* Headline — word by word stagger */}
          <motion.h1
            className="f-disp text-[52px] md:text-[66px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface mb-12"
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

      {/* ── ABOUT / BIO ── */}
      <section id="about" className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          <AnimatedSection delay={0}>
            <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-5">
              About
            </span>
            <h2 className="f-disp text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface mb-6">
              The engineer behind the studio.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              I build software that reduces friction and fits naturally into daily life —
              at work for enterprise clients, and at home for the everyday workflows that matter.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                I'm a software engineer specializing in web and mobile, currently building products
                through NTT DATA for large enterprise clients. Outside of work, I create personal
                tools—apps that solve small, everyday problems most people overlook.
              </p>
              <p>
                I build across the stack, developing web and mobile apps across all major platforms,
                along with the backend services that power them. I care about craftsmanship at every
                layer: clean architecture, thoughtful APIs, and interfaces that feel effortless.
              </p>
              <p>
                When I'm not building, I'm thinking about what to build next. The best ideas come
                from friction you experience yourself—and there's always more to remove.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-20">

          <AnimatedSection>
            <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-12 text-center">
              How I work
            </span>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {values.map((v) => (
              <motion.div
                key={v.number}
                variants={staggerItem}
                className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20"
              >
                <span className="f-disp text-[11px] font-bold tracking-[0.1em] text-outline block mb-4">
                  {v.number}
                </span>
                <h3 className="f-disp text-lg font-semibold text-on-surface mb-3">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </motion.div>

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
              <h2 className="f-disp text-[44px] md:text-[58px] leading-[1.1] font-bold tracking-[-0.02em] text-on-primary mb-10">
                Have a project in mind?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
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
