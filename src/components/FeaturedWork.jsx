import React from 'react';
import { ArrowUpRight, Github, Smartphone, Briefcase, TrendingUp, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export const FeaturedWork = () => {
  const { language, t } = useLanguage();

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Client Project':
        return {
          icon: <Briefcase className="w-3 h-3 text-sky-600 dark:text-sky-400" />,
          classes: 'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300'
        };
      case 'Mobile & Multiplatform':
        return {
          icon: <Smartphone className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />,
          classes: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
        };
      case 'SEO & Consulting':
        return {
          icon: <TrendingUp className="w-3 h-3 text-amber-600 dark:text-amber-400" />,
          classes: 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300'
        };
      default:
        return {
          icon: <Briefcase className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />,
          classes: 'border-zinc-500/20 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300'
        };
    }
  };

  return (
    <section
      id="proyectos"
      aria-labelledby="featured-projects-heading"
      className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
            {t('projects.tag')}
          </span>
          <h2
            id="featured-projects-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]"
          >
            {t('projects.title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 or 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project) => {
            const badgeMeta = getCategoryBadge(project.category);
            const description = project.description[language] || project.description.es;
            const hasActions = Boolean(project.liveUrl || project.githubUrl);

            return (
              <article
                key={project.id}
                className="shadcn-card group relative p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  {/* Category & Status Pill Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${badgeMeta.classes}`}
                    >
                      {badgeMeta.icon}
                      <span>{project.category}</span>
                    </span>

                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === 'Live'
                              ? 'bg-emerald-500 animate-pulse'
                              : 'bg-amber-500'
                          }`}
                          aria-hidden="true"
                        />
                        <span>
                          {project.year ? `${project.year} · ` : ''}
                          {project.status === 'Live' ? t('projects.live') : t('projects.inProgress')}
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-[#EDEDED] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description (Concise, 1-2 lines) */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                    {description}
                  </p>

                  {/* Key Tech Stack Minimalist Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditional Action Buttons / Links: Only rendered if at least one URL exists */}
                {hasActions && (
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live site: ${project.title}`}
                          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-amber-600 dark:text-amber-400 hover:underline underline-offset-4"
                        >
                          {project.linkType === 'maps' ? (
                            <>
                              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{t('projects.viewMaps')}</span>
                            </>
                          ) : (
                            <>
                              <span>{t('projects.liveDemo')}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </>
                          )}
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View GitHub repository for ${project.title}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#EDEDED] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{t('projects.repository')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
