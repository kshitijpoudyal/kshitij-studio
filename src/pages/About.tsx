import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, staggerItem } from '../lib/motion'
import AnimatedSection from '../components/AnimatedSection'
import { clients } from '../data/clients'

const values = [
  {
    number: '01',
    title: 'Simplify First',
    body: 'Start by removing friction, not adding features. The best software gets out of the way and lets people get things done.',
  },
  {
    number: '02',
    title: 'Build to Last',
    body: 'Architecture and code that stays maintainable over time. Every decision is weighed against its long-term cost, not just its immediate convenience.',
  },
  {
    number: '03',
    title: 'Ship What Works',
    body: 'Pragmatic delivery over theoretical perfection. A working product that solves a real problem is worth more than a perfect product that never ships.',
  },
]

export default function About() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ── PAGE HERO ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl">
          <AnimatedSection>
            <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-5">
              About
            </span>
            <h1 className="f-disp text-[44px] md:text-[60px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface mb-6">
              The engineer behind the studio.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl">
              I build software that reduces friction and fits naturally into daily life — at work
              for enterprise clients, and at home for the everyday workflows that matter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          <AnimatedSection delay={0}>
            <h2 className="f-disp text-[28px] leading-[1.25] font-semibold tracking-[-0.01em] text-on-surface mb-6">
              I build software that fits naturally into daily life.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                I'm a software engineer and web & mobile specialist, currently delivering product
                work through NTT DATA for large enterprise clients. Outside of that, I channel the
                same energy into personal tools — apps that solve the small, everyday problems that
                everyone encounters but nobody builds for.
              </p>
              <p>
                My work spans the full stack: from polished React frontends to React Native mobile
                apps to the backend services that power them. I care about the craft at every layer
                — clean component architecture, thoughtful API design, and interfaces that feel
                effortless to use.
              </p>
              <p>
                When I'm not building, I'm thinking about what to build next. The best ideas come
                from friction you experience yourself — and there's always more friction to remove.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── VALUES ── */}
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

      {/* ── CTA ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32 text-center">
        <AnimatedSection>
          <h2 className="f-disp text-[32px] font-semibold tracking-[-0.01em] text-on-surface mb-4">
            Want to work together?
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-sm mx-auto leading-relaxed">
            I'm open to select freelance projects and consulting engagements.
          </p>
          <motion.div className="inline-block" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-primary text-on-primary rounded-lg f-disp text-sm font-bold hover:opacity-80 transition-opacity duration-200 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

    </motion.div>
  )
}
