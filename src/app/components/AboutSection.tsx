import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'React & Node.js',
    'TypeScript',
    'PostgreSQL',
    'APIs RESTful',
    'Next.js',
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-portfolio-accent-soft border border-portfolio-accent-border flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-portfolio-accent" />
        </div>
        <h2 className="text-4xl font-bold">Sobre mim</h2>
      </div>

      <div className="space-y-6 text-portfolio-muted leading-relaxed">
        <p className="text-lg text-portfolio-fg font-medium">
          Olá! Sou um desenvolvedor FullStack apaixonado por criar experiências
          digitais elegantes e funcionais. Comecei minha jornada na programação
          há alguns anos e desde então venho me dedicando a construir aplicações
          web modernas e escaláveis.
        </p>

        <p>
          Minha abordagem é focada em escrever código limpo, manutenível e que
          resolva problemas reais. Gosto de trabalhar tanto no frontend quanto
          no backend, sempre buscando entender a aplicação como um todo e não
          apenas partes isoladas.
        </p>

        <p>
          Atualmente estou focado em aprofundar meus conhecimentos em
          arquitetura de software, boas práticas de desenvolvimento e em
          contribuir com projetos open source. Acredito que a melhor forma de
          aprender é construindo e compartilhando conhecimento.
        </p>

        <div className="pt-6">
          <h3 className="text-xl font-semibold mb-4 text-portfolio-fg">
            Principais habilidades
          </h3>
          <div className="flex flex-wrap gap-3">
            {highlights.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="px-4 py-2 rounded-lg bg-portfolio-accent-soft border border-portfolio-accent-border text-portfolio-accent font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-portfolio-border">
          {[
            { value: '2+', label: 'Anos de experiência' },
            { value: '15+', label: 'Projetos completos' },
            { value: '10+', label: 'Tecnologias' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-4 rounded-xl bg-portfolio-surface border border-portfolio-border"
            >
              <div className="text-3xl font-bold text-portfolio-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-portfolio-subtle">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
