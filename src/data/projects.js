/**
 * @typedef {import('../types/project').Project} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'doblaje',
    title: 'Tu Camino al Doblaje',
    category: 'Client Project',
    year: '2025',
    status: 'Live',
    description: {
      es: 'Plataforma de reservas de alta concurrencia con gestión atómica de cupos en Supabase y pasarela automatizada con Stripe Webhooks.',
      en: 'High-converting booking platform featuring atomic slot inventory via Supabase and automated payments with Stripe Webhooks.'
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe API', 'Tailwind CSS', 'Cloudflare'],
    liveUrl: 'https://doblaje.sebastianreggio.com',
    linkType: 'web',
    isPrivate: true
  },
  {
    id: 'biweki',
    title: 'Biweki',
    category: 'Mobile & Multiplatform',
    year: '2025',
    status: 'In Progress',
    description: {
      es: 'App móvil multiplatforma de finanzas personales con seguimiento inteligente de ingresos/gastos y asistencia basada en IA.',
      en: 'Cross-platform personal finance mobile app featuring smart expense tracking, real-time sync, and AI-driven insights.'
    },
    tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Supabase', 'AI Integration'],
    isPrivate: true
  },
  {
    id: 'jackyher-bags',
    title: 'JackyHer Bags',
    category: 'Client Project',
    year: '2025',
    status: 'Live',
    description: {
      es: 'E-commerce y catálogo interactivo para marca de moda artesanal, construido con arquitectura headless orientada a rendimiento y SEO.',
      en: 'Artisan e-commerce storefront powered by a headless CMS architecture (Sanity.io), optimized for speed and SEO.'
    },
    tags: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Vercel', 'Schema.org'],
    liveUrl: 'https://www.jackyherbags.com/',
    linkType: 'web',
    isPrivate: true
  },
  {
    id: 'j-velasco-tattoo',
    title: 'J. Velasco Tattoo',
    category: 'Client Project',
    year: '2025',
    status: 'Live',
    description: {
      es: 'Sitio web showcase y pasarela de reservas para artista de tatuaje en Barcelona, optimizado para conversión móvil y velocidad.',
      en: 'Showcase portfolio and booking system for a Barcelona tattoo artist, optimized for mobile conversion and fast loading.'
    },
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://www.jvelasco.online/',
    linkType: 'web',
    isPrivate: true
  },
  {
    id: 'healthy-heaven',
    title: 'Healthy Heaven Coffee Shop',
    category: 'SEO & Consulting',
    year: '2024',
    status: 'Live',
    description: {
      es: 'Optimización técnica web, auditoría de presencia digital y arquitectura de microdatos JSON-LD para posicionamiento y captación local.',
      en: 'Technical web performance tuning, local SEO strategy, and structured schema implementation to drive foot traffic.'
    },
    tags: ['Local SEO', 'JSON-LD Schema', 'Web Performance', 'Google Business Profile'],
    liveUrl: 'https://maps.app.goo.gl/hNVQ5ceJFVRquwR48',
    linkType: 'maps',
    isPrivate: true
  }
];
