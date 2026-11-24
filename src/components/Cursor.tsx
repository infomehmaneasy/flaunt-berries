import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine-pointer desktops
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]')
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
            animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0.75 : 1 }}
            transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.3 }}
          >
            <div className="h-3 w-3 rounded-full bg-white" />
          </motion.div>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-rose-500/60"
            animate={{
              x: pos.x - 20,
              y: pos.y - 20,
              width: hovering ? 56 : 40,
              height: hovering ? 56 : 40,
              opacity: hovering ? 0.9 : 0.5,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.4 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
