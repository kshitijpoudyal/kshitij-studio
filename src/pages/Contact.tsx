import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition } from '../lib/motion'
import AnimatedSection from '../components/AnimatedSection'
import { socialLinks } from '../data/navigation'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

const initialFields: FormFields = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [fields, setFields] = useState<FormFields>(initialFields)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Replace this with your actual submission logic (e.g. Formspree, EmailJS)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">

      {/* ── PAGE HEADER ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pt-40 pb-16 md:pt-48 md:pb-20">
        <AnimatedSection>
          <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-5">
            Contact
          </span>
          <h1 className="f-disp text-[44px] md:text-[60px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface">
            Let's build something useful.
          </h1>
        </AnimatedSection>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="max-w-site mx-auto px-6 md:px-10 lg:px-20 pb-32 md:pb-40">
        <div className="grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">

          {/* Form */}
          <AnimatedSection delay={0}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="py-16"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 16 }}
                    className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-6"
                  >
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="f-disp text-2xl font-semibold text-on-surface mb-3">Message sent.</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    Thanks for reaching out. I'll get back to you within a couple of business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFields(initialFields) }}
                    className="f-disp text-sm font-semibold text-on-surface border-b border-on-surface pb-0.5 hover:opacity-60 transition-opacity duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Name */}
                  <div>
                    <label className="f-disp text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      className="input-line"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="f-disp text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={fields.email}
                      onChange={handleChange}
                      className="input-line"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="f-disp text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant block mb-2">
                      What are you working on?
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="New app, redesign, consulting…"
                      value={fields.subject}
                      onChange={handleChange}
                      className="input-line"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="f-disp text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and what you're hoping to achieve."
                      value={fields.message}
                      onChange={handleChange}
                      className="input-line resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={submitting ? {} : { scale: 1.02 }}
                    whileTap={submitting ? {} : { scale: 0.97 }}
                    className="px-8 py-3.5 bg-primary text-on-primary rounded-lg f-disp text-sm font-bold disabled:opacity-50 transition-opacity duration-200 inline-flex items-center gap-2.5"
                  >
                    {submitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full inline-block"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={0.18}>
            <div className="space-y-10">

              {/* Availability */}
              <div>
                <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-4">
                  Availability
                </span>
                <div className="flex items-center gap-2.5 mb-3">
                  <motion.span
                    animate={{ scale: [1, 1.45, 1], opacity: [1, 0.45, 1] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="w-2.5 h-2.5 rounded-full bg-secondary block shrink-0"
                  />
                  <span className="f-disp text-sm font-semibold text-on-surface">
                    Open to select projects
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Response time: 1–2 business days.
                </p>
              </div>

              {/* Direct email */}
              <div>
                <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-4">
                  Direct
                </span>
                <a
                  href="mailto:kshitijpoudyal@gmail.com"
                  className="f-disp text-sm font-semibold text-on-surface border-b border-on-surface/20 pb-0.5 hover:border-on-surface transition-colors duration-200"
                >
                  kshitijpoudyal@gmail.com
                </a>
              </div>

              {/* Social links */}
              <div>
                <span className="f-disp text-[11px] font-bold uppercase tracking-[0.12em] text-secondary block mb-4">
                  Online
                </span>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 f-disp text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>

    </motion.div>
  )
}
