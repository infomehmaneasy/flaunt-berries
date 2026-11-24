import { motion } from 'framer-motion';

// Brand wordmark logo with animated rose-gold shimmer.
export default function Logo({
  className = '',
  animated = true,
  light = false,
}: {
  className?: string;
  animated?: boolean;
  light?: boolean;
}) {
  const wordmarkColor = light ? 'text-cream-100' : 'text-ink';

  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <motion.div
        initial={animated ? { opacity: 0, scale: 0.92 } : false}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <span className={`font-script text-4xl leading-none tracking-normal ${wordmarkColor} md:text-5xl`}>
          <span className="text-gold-gradient">Flaunt</span>{' '}
          <span className={wordmarkColor}>Berries</span>
        </span>
      </motion.div>
      <motion.span
        initial={animated ? { opacity: 0, y: 6 } : false}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25 }}
        className={`mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.35em] ${light ? 'text-rose-300' : 'text-rose-700'}`}
      >
        by Kajal
      </motion.span>
    </div>
  );
}
