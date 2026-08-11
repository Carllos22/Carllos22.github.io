import React from 'react';
import { Layers, Sparkles, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

export const Methodology = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      icon: <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: t('methodology.c1Title'),
      badge: t('methodology.c1Badge'),
      desc: t('methodology.c1Desc')
    },
    {
      icon: <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: t('methodology.c2Title'),
      badge: t('methodology.c2Badge'),
      desc: t('methodology.c2Desc')
    },
    {
      icon: <Target className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: t('methodology.c3Title'),
      badge: t('methodology.c3Badge'),
      desc: t('methodology.c3Desc')
    }
  ];

  return (
    <section id="metodologia" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-1.5">
          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
            {t('methodology.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]">
            {t('methodology.title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            {t('methodology.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blocks.map((block, idx) => (
            <SpotlightCard key={idx} className="p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shrink-0">
                    {block.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300">
                    {block.badge}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-zinc-900 dark:text-[#EDEDED]">
                  {block.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
