export type ProjectGroup = 'Public Product' | 'Personal Tool' | 'Client Work'
export type FilterCategory = 'All' | ProjectGroup

export interface Project {
  id: string
  title: string
  /** Display tag shown on the card badge: 'Web App', 'Fintech', 'E-Commerce', etc. */
  category: string
  /** Used for filtering on the Work page */
  group: ProjectGroup
  description: string
  imageUrl: string | null
  imageAlt: string
  featured: boolean
  /** null = coming soon / no public URL yet */
  href: string | null
  year: number
  status: 'live' | 'wip' | 'archived'
  tags: string[]
}

export interface Client {
  name: string
  description: string
  via: string
}

export interface NavItem {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
}
