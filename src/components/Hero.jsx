import React from 'react';
import { Github, Linkedin, ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = ({ onOpenWizard }) => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="pt-32 pb-20 md:pt-44 md:pb-28 relative border-b border-zinc-200/80 dark:border-zinc-800/80 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-6 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">{t('hero.statusBadge')}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]">
              Carlos Contreras Hernández
            </h1>
            <h2 className="text-base sm:text-lg font-medium text-amber-600 dark:text-amber-400/90 leading-snug">
              {t('hero.titleRole')}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed border-l-2 border-amber-500/50 pl-4 py-0.5">
            {t('hero.bio')}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenWizard}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white dark:text-zinc-950 font-semibold text-xs shadow-sm hover:shadow-md active:scale-95 transition-all"
            >
              <span>{t('hero.quoteProject')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenWizard}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-xs transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{t('hero.askConsultation')}</span>
            </button>

            <div className="flex items-center gap-1.5 ml-1">
              <a
                href="https://github.com/Carllos22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all"
                aria-label="GitHub Carllos22"
                title="GitHub: Carllos22"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/carloscontrerasch/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all"
                aria-label="LinkedIn Carlos Contreras"
                title="LinkedIn: carloscontrerasch"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
