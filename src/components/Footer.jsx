import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = ({ onOpenWizard }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="py-14 bg-[#FAFAFA] dark:bg-[#09090b] text-zinc-500 dark:text-zinc-400 border-t border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-[#EDEDED]">
              Carlos Contreras Hernández
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              {t('footer.bio')}
            </p>
          </div>

          <button
            onClick={onOpenWizard}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white dark:text-zinc-950 text-xs font-semibold transition-all shadow-xs"
          >
            {t('nav.quoteBtn')}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Carllos22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/carloscontrerasch/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-500">
            <span>© {new Date().getFullYear()} Carlos Contreras</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <span>{t('footer.backToTop')}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
