import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-portfolio-surface border border-portfolio-border" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo noturno'}
      className="w-10 h-10 rounded-lg bg-portfolio-surface border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-portfolio-accent hover:border-portfolio-accent-border hover:bg-portfolio-accent-soft transition-colors duration-500 cursor-pointer"
    >
      <motion.span
        key={isDark ? 'sun' : 'moon'}
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.span>
    </motion.button>
  );
}
