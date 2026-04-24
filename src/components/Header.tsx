import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '../data/navigation'
import { useScrolled } from '../hooks/useScrolled'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrolled = useScrolled(16)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      animate={
        scrolled
          ? { backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)' }
          : { backgroundColor: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(16px)' }
      }
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-black/[0.06]"
      style={{ backdropFilter: 'blur(16px)' }}
    >
      <nav className="max-w-site mx-auto px-6 md:px-10 lg:px-20 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="f-disp text-base font-bold tracking-tight text-on-surface hover:opacity-70 transition-opacity duration-200"
        >
          Kshitij Studio
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative f-disp text-sm font-semibold transition-colors duration-200 inline-block py-1 ${
                    isActive
                      ? 'text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-on-surface rounded-full"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2 bg-primary text-on-primary rounded-lg f-disp text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="md:hidden p-1.5 -mr-1.5 text-on-surface"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
            className="md:hidden border-t border-black/[0.06] bg-white/95"
          >
            <ul className="max-w-site mx-auto px-6 py-6 flex flex-col gap-5 list-none">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.055, duration: 0.28 }}
                >
                  <Link
                    to={item.to}
                    className={`f-disp text-sm font-semibold ${
                      location.pathname === item.to
                        ? 'text-on-surface'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 + navItems.length * 0.055, duration: 0.28 }}
                className="pt-1"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-primary text-on-primary rounded-lg f-disp text-sm font-semibold"
                >
                  Get in Touch
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
