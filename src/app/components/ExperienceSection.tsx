import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Desenvolvedor FullStack',
      company: 'Autônomo',
      period: 'fev 2025 - Atualmente',
      description:
        'Atuação no desenvolvimento de aplicações web utilizando React, Next.js e Node.js, com foco em performance, responsividade e experiência do usuário.',
      achievements: [
        'Desenvolvimento de interfaces modernas e reutilizáveis',
        'Configuração de deploys e automações com Docker e GitHub Actions',
        'Implementação de APIs RESTful integrando front-end e back-end',
        'Otimização de performance com lazy loading e code splitting',
      ],
    },
    {
      title: 'Desenvolvedor FullStack Júnior',
      company: 'VetSolutions',
      period: 'Nov 2023 - nov 2024',
      description:
        'Desenvolvimento e manutenção de aplicações web utilizando React, TypeScript, Node.js e PostgreSQL, participando da implementação de novas funcionalidades e melhorias no sistema.',
      achievements: [
        'Desenvolvimento e refatoração de interfaces responsivas',
        'Integração de APIs externas e serviços internos',
        'Implementação de testes automatizados com Jest e Cypress',
        'Otimização de queries, deploys e pipelines com GitHub Actions',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-portfolio-accent-soft border border-portfolio-accent-border flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-portfolio-accent" />
        </div>
        <h2 className="text-4xl font-bold">Experiência</h2>
      </div>

      <div className="relative space-y-8">
        <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-portfolio-gradient-from via-portfolio-gradient-to to-transparent hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative md:pl-12"
          >
            <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-portfolio-accent border-4 border-portfolio-bg hidden md:block -translate-x-[5px]" />

            <div className="portfolio-card rounded-2xl bg-gradient-to-br from-portfolio-card-from to-portfolio-card-to border border-portfolio-border p-6 hover:border-portfolio-accent-border transition-all duration-500 group">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-portfolio-fg mb-1 group-hover:text-portfolio-accent transition-colors duration-500">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-portfolio-muted font-medium">
                    {exp.company}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-portfolio-subtle">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-portfolio-muted mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-portfolio-accent mt-2 flex-shrink-0" />
                    <span className="text-portfolio-muted text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-portfolio-border">
        <h3 className="text-2xl font-semibold mb-6 text-portfolio-fg flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-portfolio-gradient-from to-portfolio-gradient-to rounded-full" />
          Formação
        </h3>

        <div className="portfolio-card rounded-2xl bg-gradient-to-br from-portfolio-card-from to-portfolio-card-to border border-portfolio-border p-6">
          <h4 className="text-lg font-semibold text-portfolio-fg mb-2">
            Análise e Desenvolvimento de Sistemas
          </h4>
          <div className="text-portfolio-muted mb-2">Faculdade de Tecnologia</div>
          <div className="flex items-center gap-2 text-sm text-portfolio-subtle">
            <Calendar className="w-4 h-4" />
            <span>2023 - 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
