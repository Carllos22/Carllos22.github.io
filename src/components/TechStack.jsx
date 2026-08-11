import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

export const TechStack = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t('techStack.catMobile'),
      skills: [
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Kotlin Multiplatform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'SwiftUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' }
      ]
    },
    {
      title: t('techStack.catWeb'),
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'HTML5 / CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
      ]
    },
    {
      title: t('techStack.catDatabase'),
      skills: [
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-1.5">
          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
            {t('techStack.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#EDEDED]">
            {t('techStack.title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {t('techStack.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <SpotlightCard key={idx} className="p-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-[#EDEDED] border-b border-zinc-100 dark:border-zinc-800/60 pb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                      <span>{skill.name}</span>
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
