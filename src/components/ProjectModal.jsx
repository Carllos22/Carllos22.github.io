import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectModal = ({ project, onClose }) => {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="ag-card w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 pr-8">
          <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <div className="bg-[#F4F0EA] dark:bg-neutral-900 p-4 rounded-xl border border-[#D8D2C6] dark:border-neutral-800">
            <h4 className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider mb-2">Arquitectura & Detalles</h4>
            <p>{project.story}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Características</h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              {project.features?.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="ag-badge px-2.5 py-1 rounded-full text-xs text-neutral-800 dark:text-neutral-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#E6E1D8] dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold underline underline-offset-4 hover:opacity-80"
              >
                <span>{t('projects.liveDemo')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t('projects.repository')}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
