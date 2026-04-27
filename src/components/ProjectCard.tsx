import { motion } from 'framer-motion'
import type { Project, ProjectGroup } from '../types'

interface Props {
  project: Project
}

const groupColors: Record<ProjectGroup, { badge: string; placeholder: string; icon: string }> = {
  'Public Product': { badge: 'bg-blue-100 text-blue-700',     placeholder: 'bg-blue-50',   icon: 'text-blue-300'   },
  'Personal Tool':  { badge: 'bg-violet-100 text-violet-700', placeholder: 'bg-violet-50', icon: 'text-violet-300' },
  'Client Work':    { badge: 'bg-amber-100 text-amber-700',   placeholder: 'bg-amber-50',  icon: 'text-amber-300'  },
}

function PlaceholderIcon({ category, iconClass }: { category: string; iconClass: string }) {
  if (category === 'Fintech') {
    return (
      <svg className={`w-10 h-10 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
  if (category === 'Personal Tool') {
    return (
      <svg className={`w-10 h-10 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
  if (category === 'Consumer') {
    return (
      <svg className={`w-10 h-10 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
  if (category === 'E-Commerce') {
    return (
      <svg className={`w-10 h-10 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
  // Default: Web App / monitor
  return (
    <svg className={`w-10 h-10 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export default function ProjectCard({ project }: Props) {
  const colors = groupColors[project.group]
  const linkProps = project.href
    ? { href: project.href }
    : { href: '#', 'aria-disabled': true }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition-shadow duration-500 flex flex-col h-full"
    >
      {/* Image / placeholder */}
      <div className="aspect-video overflow-hidden flex items-center justify-center shrink-0">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${colors.placeholder}`}>
            <PlaceholderIcon category={project.category} iconClass={colors.icon} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="f-disp text-xl font-semibold text-on-surface">{project.title}</h3>
          <span className={`f-disp text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ml-3 shrink-0 ${colors.badge}`}>
            {project.category}
          </span>
        </div>

        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="f-disp text-[10px] font-semibold uppercase tracking-wide text-outline bg-surface-container px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          {...linkProps}
          className="inline-flex items-center gap-1.5 f-disp text-sm font-bold text-on-surface group-hover:gap-3 transition-all duration-200 mt-auto"
        >
          Explore Project
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.article>
  )
}
