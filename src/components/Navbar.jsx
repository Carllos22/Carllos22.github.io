import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { AmbientPlayer } from './AmbientPlayer';

export const Navbar = ({ onOpenWizard }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: t('nav.about') },
    { href: '#servicios', label: t('nav.services') },
    { href: '#proyectos', label: t('nav.projects') },
    { href: '#stack', label: t('nav.stack') },
    { href: '#metodologia', label: t('nav.methodology') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/85 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex flex-col group">
          <span className="font-semibold text-sm text-zinc-900 dark:text-[#EDEDED] tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {t('nav.brand')}
          </span>
          <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400/90 hidden sm:inline">
            {t('nav.brandSubtitle')}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <AmbientPlayer />

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Cambiar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="uppercase">{language}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
          </button>

          <button
            onClick={onOpenWizard}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white dark:text-zinc-950 font-semibold text-xs shadow-xs hover:shadow-sm active:scale-95 transition-all"
          >
            {t('nav.quoteBtn')}
          </button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <AmbientPlayer />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAFAFA] dark:bg-[#09090b] border-b border-zinc-200 dark:border-zinc-800 px-6 py-5 flex flex-col gap-3.5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
            <button onClick={toggleLanguage} className="text-zinc-600 dark:text-zinc-400">
              Idioma: <span className="text-amber-600 dark:text-amber-400 uppercase">{language}</span>
            </button>
            <button onClick={toggleTheme} className="text-zinc-600 dark:text-zinc-400">
              Tema: <span className="text-amber-600 dark:text-amber-400">{theme}</span>
            </button>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWizard();
            }}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white dark:text-zinc-950 font-semibold text-xs shadow-xs"
          >
            {t('nav.quoteBtn')}
          </button>
        </div>
      )}
    </header>
  );
};
