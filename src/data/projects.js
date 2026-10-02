/**
 * @typedef {import('../types/project').Project} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'biweki',
    title: 'Biweki',
    category: 'Mobile / Multiplatform',
    year: '2025',
    status: 'In Progress',
    description: {
      es: 'App móvil de finanzas personales multiplataforma con lógica compartida, persistencia cloud en tiempo real y asistencia inteligente.',
      en: 'Cross-platform personal finance mobile app with shared domain architecture, real-time cloud data, and intelligent insights.'
    },
    tags: ['Kotlin Multiplatform', 'Compose', 'SwiftUI', 'Supabase', 'AI / LLM'],
    githubUrl: 'https://github.com/Carllos22',
    isPrivate: false,
    featured: true
  },
  {
    id: 'jackyher-bags',
    title: 'JackyHer Bags',
    category: 'Client Project',
    year: '2025',
    status: 'Live',
    description: {
      es: 'Tienda e-commerce y vitrina digital de marroquinería con CMS headless, navegación fluida y optimización para conversión.',
      en: 'High-end leather goods e-commerce and digital showcase engineered with Headless CMS, fluid UI, and conversion optimization.'
    },
    tags: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'TypeScript', 'Structured SEO'],
    demoUrl: 'https://jackyherbags.com',
    githubUrl: null,
    isPrivate: true,
    featured: true
  },
  {
    id: 'j-velasco',
    title: 'J. Velasco Portfolio',
    category: 'Client Project',
    year: '2025',
    status: 'Live',
    description: {
      es: 'Plataforma web de exhibición visual y gestión de reservas para artista, construida para máxima velocidad de carga y SEO.',
      en: 'Visual showcase platform and booking workflow for contemporary artist, optimized for ultra-fast performance and discoverability.'
    },
    tags: ['Next.js', 'Vercel', 'Tailwind CSS', 'TypeScript', 'Web Optimization'],
    demoUrl: 'https://jvelasco.art',
    githubUrl: null,
    isPrivate: true,
    featured: false
  },
  {
    id: 'healthy-heaven',
    title: 'Healthy Heaven',
    category: 'Client Project',
    year: '2024',
    status: 'Live',
    description: {
      es: 'Optimización web de marca gastronómica saludable con estrategia de SEO local, schema markup estructurado y captación.',
      en: 'Healthy culinary brand web platform optimized with local SEO, rich structured schema markup, and inbound customer funnels.'
    },
    tags: ['Next.js', 'Local SEO', 'Schema Markup', 'Tailwind CSS', 'Analytics'],
    demoUrl: 'https://healthyheaven.es',
    githubUrl: null,
    isPrivate: true,
    featured: false
  }
];
