import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = { onDone: () => void };

export default function Loader({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 8 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setExit(true), 500);
        setTimeout(onDone, 1300);
      }
      setProgress(Math.min(p, 100));
    }, 120);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-100"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floating particles */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-rose-500/20"
              style={{
                width: `${4 + (i % 4) * 3}px`,
                height: `${4 + (i % 4) * 3}px`,
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 text-center"
          >
            <h1 className="font-script text-6xl leading-none max-[360px]:text-5xl md:text-8xl">
              <span className="text-shimmer">Flaunt Berries</span>
            </h1>
            <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-rose-700 md:text-xs">
              by Kajal
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 text-xs font-medium uppercase tracking-[0.4em] text-ink/70"
          >
            Where Fashion Meets Wellness
          </motion.p>

          {/* Progress bar */}
          <div className="mt-8 h-px w-56 overflow-hidden bg-rose-500/20 md:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-[0.65rem] font-medium tracking-[0.3em] text-ink/70"
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
