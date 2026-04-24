import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { socialLinks } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.06] py-14 px-6 md:px-10 lg:px-20">
      <div className="max-w-site mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="f-disp font-bold text-on-surface hover:opacity-70 transition-opacity duration-200"
          >
            Kshitij Studio
          </Link>
          <p className="text-xs text-on-surface-variant mt-1.5 tracking-wide">
            &copy; {new Date().getFullYear()} Kshitij Studio. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="f-disp text-xs font-medium uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
