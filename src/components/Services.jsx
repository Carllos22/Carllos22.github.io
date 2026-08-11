import React from 'react';
import { Smartphone, Globe, TrendingUp, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

export const Services = ({ onOpenWizard }) => {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: 'mobile',
      icon: <Smartphone className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      tags: t('services.s1Tags')
    },
    {
      id: 'web',
      icon: <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      tags: t('services.s2Tags')
    },
    {
      id: 'seo',
      icon: <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      tags: t('services.s3Tags')
    },
    {
      id: 'consulting',
      icon: <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: t('services.s4Title'),
      desc: t('services.s4Desc'),
      tags: t('services.s4Tags')
    }
  ];

  return (
    <section id="servicios" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 space-y-1.5">
          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
            {t('services.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]">
            {t('services.title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesList.map((service) => (
            <SpotlightCard
              key={service.id}
              onClick={onOpenWizard}
              className="p-5 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center">
                  {service.icon}
                </div>

                <h3 className="text-base font-semibold text-zinc-900 dark:text-[#EDEDED] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
