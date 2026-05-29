import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

type SkillLevel = 'basico' | 'intermediario' | 'avancado';

const levelLabels: Record<SkillLevel, string> = {
  basico: 'Básico',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
};

const levelStyles: Record<SkillLevel, string> = {
  basico: 'bg-portfolio-surface border-portfolio-border text-portfolio-muted',
  intermediario:
    'bg-portfolio-accent-soft border-portfolio-accent-border text-portfolio-accent-muted',
  avancado:
    'bg-portfolio-accent-soft border-portfolio-accent-border text-portfolio-accent',
};

export default function TechSection() {
  const techCategories = [
    {
      name: 'Frontend',
      items: [
        { name: 'React', level: 'avancado' as SkillLevel },
        { name: 'TypeScript', level: 'avancado' as SkillLevel },
        { name: 'Next.js', level: 'intermediario' as SkillLevel },
        { name: 'Tailwind CSS', level: 'avancado' as SkillLevel },
        { name: 'HTML/CSS', level: 'avancado' as SkillLevel },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', level: 'avancado' as SkillLevel },
        { name: 'Express', level: 'intermediario' as SkillLevel },
        { name: 'PostgreSQL', level: 'intermediario' as SkillLevel },
        { name: 'Java', level: 'basico' as SkillLevel },
        { name: 'REST APIs', level: 'avancado' as SkillLevel },
      ],
    },
    {
      name: 'Ferramentas',
      items: [
        { name: 'Git & GitHub', level: 'avancado' as SkillLevel },
        { name: 'Docker', level: 'basico' as SkillLevel },
        { name: 'VS Code', level: 'avancado' as SkillLevel },
        { name: 'Figma', level: 'basico' as SkillLevel },
        { name: 'Cursor', level: 'intermediario' as SkillLevel },
        { name: 'Postman', level: 'intermediario' as SkillLevel },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-portfolio-accent-soft border border-portfolio-accent-border flex items-center justify-center">
          <Code2 className="w-6 h-6 text-portfolio-accent" />
        </div>
        <h2 className="text-4xl font-bold">Tecnologias</h2>
      </div>

      <div className="space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: categoryIndex * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-portfolio-fg mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-portfolio-gradient-from to-portfolio-gradient-to rounded-full" />
              {category.name}
            </h3>

            <div className="space-y-3">
              {category.items.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: categoryIndex * 0.1 + index * 0.05,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex justify-between items-center py-3 px-4 rounded-xl bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent-border transition-all duration-500"
                >
                  <span className="text-portfolio-muted group-hover:text-portfolio-fg transition-colors duration-500">
                    {tech.name}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-lg border transition-colors duration-500 ${levelStyles[tech.level]}`}
                  >
                    {levelLabels[tech.level]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-portfolio-border">
        <h3 className="text-xl font-semibold mb-4 text-portfolio-fg">
          Outras habilidades
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Design Responsivo',
            'Integração de APIs',
            'Consumo de APIs REST',
            'Controle de Versão',
            'Metodologias Ágeis (Scrum/Kanban)',
            'Resolução de Problemas',
            'Correção e Análise de Bugs',
            'Tratamento de Erros',
            'Análise de Sistemas',
            'Trabalho em Equipe',
            'Debugging e Identificação de Falhas',
            'Integração de projetos com modelos de IA',
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.04,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-4 py-2 rounded-lg bg-portfolio-surface border border-portfolio-border text-portfolio-muted text-sm hover:bg-portfolio-accent-soft hover:border-portfolio-accent-border hover:text-portfolio-accent transition-all duration-500 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
