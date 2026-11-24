import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }: Props) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`eyebrow ${light ? 'text-rose-300' : ''}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`heading-lux ${light ? 'text-cream-100' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`mt-4 text-base leading-relaxed ${light ? 'text-cream-100/70' : 'text-ink/65'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function StatCounter({
  value,
  suffix = '',
  decimals = 0,
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  light?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <div ref={ref} className="text-center">
      <div className={`font-display text-4xl md:text-5xl ${light ? 'text-cream-100' : 'text-ink'}`}>
        {inView && <CountUp end={value} duration={2.2} decimals={decimals} suffix={suffix} />}
      </div>
      <p className={`mt-2 text-xs font-medium uppercase tracking-[0.2em] ${light ? 'text-cream-100/60' : 'text-ink/50'}`}>
        {label}
      </p>
    </div>
  );
}
