import { motion } from 'motion/react';
import { Github, FolderOpen } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Voala Records',
      description:
        'Landing page da gravadora Voala Records, desenvolvida com foco em visual forte, animações e responsividade..',
      tech: ['React', 'Tailwind', 'Motion', 'Lucide'],
      image: '/Voala.png',
      github: 'https://github.com/padilhx/VoalaRec',
    },
    {
      title: 'WG Meter',
      description:
        'API para processamento de imagens e extração de informações numéricas usando o modelo Gemini da Google API.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'axios', 'Dotenv'],
      image: '/WG.api.png',
      github: 'https://github.com/padilhx/WG-meter',
    },
    {
      title: 'Transition Company',
      description:
        'Um sistema de gerenciamento para empresas que permite a realização de transações entre clientes e empresas, com suporte para notificações e callbacks via webhooks.',
      tech: ['Java', 'Maven', 'Spring Boot', 'MySQL'],
      image: '/transitioncompany.png',
      github: 'https://github.com/padilhx/sistema-empresa',
    },
    {
      title: 'Nox Gallery',
      description:
        'Uma landing page moderna para uma galeria de arte digital, desenvolvida com React, Vite e TypeScriptO projeto foi criado com foco em experiência visual, design minimalista e animações suaves.',
      tech: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Lucide'],
      image: '/nox.png',
      github: 'https://github.com/padilhx/NoxGallery',
    },
    {
      title: 'SaaScrew',
      description:
        'Dashboard SaaS moderno para gestão de tarefas, projetos e produtividade, com interface interativa, foco em UX e componentes reutilizáveis.',
      tech: ['React', 'Tailwind', 'vite', 'TypeScript'],
      image: '/Saascrew.png',
      github: 'https://github.com/padilhx/SaaScrew',
    },
    {
      title: 'PulseTech',
      description:
        'PulseTech é uma plataforma de noticias e novidades sobre tecnologia, com insights sobre as principais noticias do mundo da tecnologia.',
      tech: ['next.js', 'Tailwind', 'vite'],
      image: '/pulse.png',
      github: 'https://github.com/padilhx/PulseTech',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-portfolio-accent-soft border border-portfolio-accent-border flex items-center justify-center">
          <FolderOpen className="w-6 h-6 text-portfolio-accent" />
        </div>
        <h2 className="text-4xl font-bold">Projetos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="portfolio-card group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-portfolio-card-from to-portfolio-card-to border border-portfolio-border hover:border-portfolio-accent-border transition-all duration-500 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden bg-portfolio-image-bg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-card-to via-transparent to-transparent" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-portfolio-fg group-hover:text-portfolio-accent transition-colors duration-500">
                {project.title}
              </h3>

              <p className="text-portfolio-muted text-sm leading-relaxed mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 min-h-16 content-start">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-lg bg-portfolio-surface border border-portfolio-border text-portfolio-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio-surface border border-portfolio-border hover:bg-portfolio-accent-soft hover:border-portfolio-accent-border transition-all duration-500 text-sm text-portfolio-muted hover:text-portfolio-accent"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
