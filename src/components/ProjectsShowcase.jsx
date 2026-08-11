import React, { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';

export const ProjectsShowcase = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const tagIcons = {
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'Kotlin Multiplatform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'iOS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
  };

  const biwekiProject = {
    id: 'biweki',
    title: 'Biweki — KMP Personal Finance',
    category: 'Kotlin Multiplatform App',
    featured: true,
    description: t('projects.biwekiDesc'),
    longDescription: 'Biweki es una solución móvil multiplataforma orientada a la gestión y control inteligente de finanzas personales.',
    story: 'Desarrollada utilizando Kotlin Multiplatform (KMP) para compartir la lógica de dominio e integración con Supabase entre Android e iOS. En Android cuenta con interfaz nativa construida con Jetpack Compose y en iOS con SwiftUI.',
    features: [
      'Arquitectura KMP con lógica de negocio compartida',
      'UI Nativa en Jetpack Compose (Android) & SwiftUI (iOS)',
      'Persistencia de datos en Supabase / PostgreSQL'
    ],
    tags: ['Kotlin', 'Kotlin Multiplatform', 'Supabase', 'Android', 'iOS'],
    githubUrl: 'https://github.com/Carllos22'
  };

  return (
    <section id="proyectos" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 space-y-1.5">
          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
            {t('projects.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]">
            {t('projects.title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {t('projects.subtitle')}
          </p>
        </div>

        <SpotlightCard className="p-6 sm:p-7 group">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono font-medium text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-500/15 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                {t('projects.featuredBadge')}
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {biwekiProject.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-[#EDEDED] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {biwekiProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
              {biwekiProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {biwekiProject.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                  {tagIcons[tag] && (
                    <img src={tagIcons[tag]} alt={tag} className="w-3.5 h-3.5 object-contain" />
                  )}
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
              <button
                onClick={() => setSelectedProject(biwekiProject)}
                className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <span>{t('projects.viewDetails')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://github.com/Carllos22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t('projects.repository')}</span>
              </a>
            </div>
          </div>
        </SpotlightCard>

      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
