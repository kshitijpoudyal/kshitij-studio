import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'recipe-page',
    title: 'Recipe Page',
    category: 'Web App',
    group: 'Public Product',
    description:
      'Add recipes and build a weekly meal schedule. Built for home cooks who want a clean, organized way to plan their week.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_FvWCcfXJ1iDvfExI_v7C-Ph_cS97eBpBWkvJSrxy92XaZz2nPAEqYQT_ipp9l9Fu0KDaP1eFOJ5kq6VVten8m-z-XaSv8GmReiDxhVCxPorUR5kj-eWyAlcHPtfvIZmspyG2PF2yZetWymwSeirsrWGLDln8A-vuCGstXC2O7TjAAN478KlonsijwW5ZlOmRPts2LLvxevbjxb-Hjd4-DFbm9e23CNCILjG7RYT3JKkeeWtrr6NntUsq0q8Ni1MdXFi0O81QkI',
    imageAlt: 'Recipe Page — clean recipe management and weekly meal scheduling interface',
    featured: true,
    href: 'https://recipe.kshitijstudio.com',
    year: 2024,
    status: 'live',
    tags: ['React', 'TypeScript', 'Supabase'],
  },
  {
    id: 'hustle-books',
    title: 'Hustle Books',
    category: 'Fintech',
    group: 'Public Product',
    description:
      'Track expenses, taxes, and income across multiple side hustles. Built for freelancers and creators who want simple financial clarity.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATbjel-qRMtTkxe_zU4d8j4B0eo4cYN1FOAjh-3LRLA1qEK-8yS8cgu459CKuyCvhINJbOraMWkFnGztvanBXPC_XuKp6vFUtsTV7bx_LuCrxbi715FTbvgjjo7SuXRrJY2NdM5RbBgwvPcGDgKh4Eb42IN_F4FKt77W1n-HmFzazPZCi7wGJ7gz-shSjPAd2IaniNr8V93b_lnQU_pLbcObadZZEWL4MYSaspENWfEjwXXdk6I0CyQFXfKN5aX_h9Mh24ZpgZpuU',
    imageAlt: 'Hustle Books — expense tracking and income dashboard for side hustles',
    featured: true,
    href: 'https://hustlebooks.kshitijstudio.com',
    year: 2024,
    status: 'live',
    tags: ['React Native', 'TypeScript', 'Node.js'],
  },
  {
    id: 'wedding-budget-planner',
    title: 'Wedding Budget Planner',
    category: 'Personal Tool',
    group: 'Personal Tool',
    description:
      'Plan and manage a wedding budget with real-time allocation tracking. Handles the complexity of event finances without the overwhelm.',
    imageUrl: null,
    imageAlt: 'Wedding Budget Planner — real-time event budget allocation tool',
    featured: true,
    href: 'https://weddingbudget.kshitijstudio.com',
    year: 2023,
    status: 'live',
    tags: ['React', 'TypeScript'],
  },
  {
    id: 'review-club',
    title: 'Review Club',
    category: 'Consumer',
    group: 'Personal Tool',
    description:
      'Track review products, pending reviews, and refunds. Keeps the entire review lifecycle organized and easy to act on.',
    imageUrl: null,
    imageAlt: 'Review Club — review lifecycle tracking and management dashboard',
    featured: true,
    href: 'https://reviewclub.kshitijstudio.com',
    year: 2023,
    status: 'live',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    id: 'peak-paw-chew',
    title: 'PeakPawChew',
    category: 'E-Commerce',
    group: 'Client Work',
    description:
      'Full e-commerce experience for a premium dog chew brand. Clean product catalog, cart, and checkout designed to build brand trust and drive conversions.',
    imageUrl: null,
    imageAlt: 'PeakPawChew — premium dog chew brand e-commerce storefront',
    featured: false,
    href: 'https://www.PeakPawChew.com',
    year: 2024,
    status: 'live',
    tags: ['React', 'TypeScript', 'Shopify'],
  },
]
