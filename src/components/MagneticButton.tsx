import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

// A button/link wrapper that subtly follows the cursor (magnetic effect).
export default function MagneticButton({ children, className = '', strength = 0.3 }: Props) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
