import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStack } from './components/TechStack';
import { Methodology } from './components/Methodology';
import { ProjectWizardModal } from './components/ProjectWizardModal';
import { Footer } from './components/Footer';

export function AppContent() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090b] text-[#18181B] dark:text-[#EDEDED] transition-colors duration-300 relative overflow-hidden">
      <div className="ambient-glow" />

      <Navbar onOpenWizard={() => setWizardOpen(true)} />

      <main className="relative z-10">
        <Hero onOpenWizard={() => setWizardOpen(true)} />
        <Services onOpenWizard={() => setWizardOpen(true)} />
        <ProjectsShowcase />
        <TechStack />
        <Methodology />
      </main>

      <Footer onOpenWizard={() => setWizardOpen(true)} />

      <ProjectWizardModal isOpen={wizardOpen} onClose={() => setWizardOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
