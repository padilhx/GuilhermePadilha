import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechSection from './components/TechSection';
import ExperienceSection from './components/ExperienceSection';
import ThemeToggle from './components/ThemeToggle';

type Section = 'about' | 'projects' | 'tech' | 'experience';

const sectionEase = [0.22, 1, 0.36, 1] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const sections = [
    { id: 'about' as Section, label: 'Sobre mim' },
    { id: 'projects' as Section, label: 'Projetos' },
    { id: 'tech' as Section, label: 'Tecnologias' },
    { id: 'experience' as Section, label: 'Experiência' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'tech':
        return <TechSection />;
      case 'experience':
        return <ExperienceSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="portfolio-shell min-h-screen bg-portfolio-bg text-portfolio-fg">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Profile */}
        <div className="portfolio-panel lg:w-[400px] lg:min-h-screen bg-gradient-to-br from-portfolio-panel to-portfolio-bg lg:border-r border-portfolio-border p-8 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col">
          <ProfileSection />

          {/* Navigation */}
          <nav className="mt-12 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="portfolio-nav-btn relative w-full text-left px-4 py-3 rounded-lg transition-all duration-500 group cursor-pointer"
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg border border-portfolio-accent-border bg-portfolio-accent-soft"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-500 ${
                    activeSection === section.id
                      ? 'text-portfolio-accent'
                      : 'text-portfolio-muted group-hover:text-portfolio-fg'
                  }`}
                >
                  {section.label}
                </span>

                {activeSection === section.id && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-portfolio-gradient-from to-portfolio-gradient-to rounded-r-full"
                    layoutId="indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-12">
            <div className="flex gap-4 justify-center">
              {[
                {
                  href: 'https://github.com/padilhx',
                  icon: Github,
                  label: 'GitHub',
                },
                {
                  href: 'https://www.linkedin.com/in/guilhermepadilhajobins/',
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:guilhermepjobins@hotmail.com',
                  icon: Mail,
                  label: 'Email',
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-portfolio-surface border border-portfolio-border flex items-center justify-center hover:bg-portfolio-accent-soft hover:border-portfolio-accent-border transition-all duration-500 group cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-portfolio-muted group-hover:text-portfolio-accent transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="flex-1 lg:overflow-y-auto">
          <div className="p-8 lg:p-16 min-h-screen flex items-start">
            <div className="w-full max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.55, ease: sectionEase }}
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
