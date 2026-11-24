import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Leaf, ChevronDown, Quote } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { StatCounter } from '@/components/SectionHeading';
import { healthStats } from '@/data/health';
import WellnessQuiz from '@/components/WellnessQuiz';

const divisions = [
  {
    title: 'Fashion Studio',
    tagline: 'Couture & ready-to-wear',
    description: 'Hand-crafted couture, bridal and designer wear. Where every stitch tells a story.',
    to: '/fashion',
    icon: Sparkles,
    glyph: '🪡',
    image: '/clothing.png',
    imageAlt: 'Flaunt Berries by Kajal fashion studio logo',
    accent: 'rose',
    bg: 'from-rose-500/15 to-rose-500/0',
    ring: 'group-hover:border-rose-400/50',
    glow: 'bg-rose-500/15',
    iconBg: 'bg-rose-500/15 text-rose-600',
    tag: 'text-rose-600',
    pill: 'group-hover:bg-rose-500',
  },
  {
    title: 'Flaunt Berries Health',
    tagline: 'Clinical nutrition',
    description: 'Evidence-based nutrition therapy for 17+ health conditions. Heal from within.',
    to: '/health',
    icon: Heart,
    glyph: '🌿',
    image: '/home.jpg',
    imageAlt: 'Flaunt Berries Health logo',
    accent: 'olive',
    bg: 'from-olive-500/15 to-olive-500/0',
    ring: 'group-hover:border-olive-500/50',
    glow: 'bg-olive-500/15',
    iconBg: 'bg-olive-500/15 text-olive-700',
    tag: 'text-olive-700',
    pill: 'group-hover:bg-olive-600',
  },
  {
    title: 'Aatmic Healing',
    tagline: 'Energy & spiritual healing',
    description: 'Tarot, energy healing, chakra balancing and meditation. Realign your being.',
    to: '/healing',
    icon: Leaf,
    glyph: '🌙',
    image: '/atamic healing.png',
    imageAlt: 'Aatmic Healing logo',
    accent: 'ink',
    bg: 'from-ink/15 to-ink/0',
    ring: 'group-hover:border-ink/50',
    glow: 'bg-ink/10',
    iconBg: 'bg-ink/10 text-ink',
    tag: 'text-ink',
    pill: 'group-hover:bg-ink',
  },
];

// Floating decorative shapes for the division cards
const floatShapes = [
  { glyph: '✦', x: 'top-6 right-6', size: 'text-xl', d: 0 },
  { glyph: '✧', x: 'bottom-8 left-8', size: 'text-base', d: 0.6 },
  { glyph: '·', x: 'top-1/2 right-10', size: 'text-2xl', d: 1.2 },
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-100">
        <motion.div style={{ y: yBlob }} className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/30 blur-3xl animate-gradient-pan" />
          <div className="absolute right-1/4 bottom-1/4 h-[35rem] w-[35rem] translate-x-1/2 translate-y-1/2 rounded-full bg-olive-300/25 blur-3xl animate-gradient-pan" />
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/40 blur-3xl" />
        </motion.div>

        {/* Floating botanical glyphs */}
        {[
          { src: '🌿', x: '8%', y: '20%', d: 0, size: 'text-5xl' },
          { src: '🍃', x: '85%', y: '25%', d: 1, size: 'text-4xl' },
          { src: '🌿', x: '15%', y: '75%', d: 1.5, size: 'text-4xl' },
          { src: '🍃', x: '80%', y: '70%', d: 0.8, size: 'text-5xl' },
        ].map((b, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            className={`pointer-events-none absolute hidden ${b.size} opacity-25 md:block`}
            style={{ left: b.x, top: b.y }}
            animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: b.d }}
          >
            {b.src}
          </motion.div>
        ))}

        <motion.div style={{ y: yText, opacity }} className="container-lux relative z-10 px-6 text-center">
          <h1 className="font-script text-7xl leading-[0.95] text-rose-500 md:text-9xl lg:text-[10rem]">
            {['Flaunt', 'Berries'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-7 flex items-center justify-center gap-5 text-3xl font-light tracking-[0.45em] text-ink md:text-4xl"
          >
            <span className="h-px w-16 bg-rose-500 md:w-24" />
            <span>HEALTH</span>
            <span className="h-px w-16 bg-rose-500 md:w-24" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-5 text-base font-medium uppercase tracking-[0.45em] text-rose-600 md:text-lg"
          >
            Dt. KAJAL KASHYAP
          </motion.p>
        </motion.div>

        <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-rose-600/60"
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* THREE DIVISION CARDS — animated, no photos */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <Stagger className="mx-auto mb-16 max-w-2xl text-center">
            <StaggerItem>
              <p className="eyebrow">The Trinity</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="heading-lux">
                Three divisions, <span className="text-gold-gradient">one philosophy</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-base leading-relaxed text-ink/65">
                Flaunt Berries is a house where beauty is worn, health is nourished and spirit is healed. Discover the world that awaits.
              </p>
            </StaggerItem>
          </Stagger>

          <Stagger className="grid gap-8 md:grid-cols-3">
            {divisions.map((d) => (
              <StaggerItem key={d.to}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  onClick={() => navigate(d.to)}
                  className={`group relative flex h-[26rem] cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-all ${d.ring} luxury-shadow-hover`}
                >
                  {/* Soft gradient backdrop */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${d.bg}`} />
                  {/* Hover glow */}
                  <div className={`pointer-events-none absolute -inset-1 rounded-3xl ${d.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Floating glyphs */}
                  {floatShapes.map((s, i) => (
                    <motion.span
                      key={i}
                      className={`pointer-events-none absolute ${s.x} ${s.size} text-ink/10`}
                      animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4 + i, repeat: Infinity, delay: s.d }}
                    >
                      {s.glyph}
                    </motion.span>
                  ))}

                  {/* Big animated glyph */}
                  <motion.div
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className={`relative mb-auto flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl ${
                      d.accent === 'ink' ? 'bg-[#fff8f5]' : d.accent === 'rose' ? 'bg-ink' : 'bg-[#fff8f5]'
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${d.iconBg}`}>
                        <d.icon className="h-4 w-4" />
                      </div>
                      <p className={`text-xs font-medium uppercase tracking-[0.25em] ${d.tag}`}>{d.tagline}</p>
                    </div>
                    <h3 className="font-display text-2xl text-ink">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{d.description}</p>
                    <button
                      className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink/5 px-5 py-2.5 text-sm font-medium text-ink transition-all ${d.pill} group-hover:text-white`}
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative overflow-hidden bg-ink py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="container-lux relative grid grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-12">
          {healthStats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={(s as any).decimals} label={s.label} light />
          ))}
        </div>
      </section>

      {/* WELLNESS QUIZ */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Find Your Path</p>
            <h2 className="heading-lux">
              Not sure where to <span className="text-gold-gradient">begin?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Take our 60-second wellness quiz. Answer three honest questions and we will match you with the Flaunt Berries division that meets you exactly where you are — fashion, health or healing.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Personalised recommendation in under a minute',
                'No email, no signup — just you and your truth',
                'Begin your journey the moment you are ready',
              ].map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-ink/70"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/15 text-rose-600">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <WellnessQuiz />
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY — animated, no photo */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-ink p-10 text-center md:p-16"
          >
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rose-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-olive-500/15 blur-3xl" />

            {/* Floating glyphs */}
            {['✦', '✧', '·', '✦'].map((g, i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute text-2xl text-rose-300/30"
                style={{ left: `${15 + i * 24}%`, top: i % 2 ? '12%' : 'auto', bottom: i % 2 ? 'auto' : '12%' }}
                animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
              >
                {g}
              </motion.span>
            ))}

            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15"
              >
                <Quote className="h-7 w-7 text-rose-300" />
              </motion.div>

              <p className="eyebrow text-rose-300">Our Philosophy</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-cream-100 md:text-5xl">
                True luxury is <span className="text-gold-gradient">wholeness</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/70">
                We believe beauty is not surface. It is the harmony of how you dress, how you nourish your body and how you tend to your spirit. Flaunt Berries was born to bring these three worlds together — under one house, with one standard of excellence.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
                From a hand-embroidered bridal lehenga to a clinical nutrition plan that reverses PCOS, to a chakra balancing session that leaves you lighter — every experience is crafted with intention.
              </p>

              <div className="mt-8 flex flex-col items-center gap-2">
                <p className="font-script text-3xl text-rose-400">Kajal Kashyap</p>
                <p className="text-xs uppercase tracking-[0.2em] text-cream-100/40">Founder · Healer · Designer</p>
                <button
                  onClick={() => navigate('/about')}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-rose-400/40 px-7 py-3 text-sm font-medium text-rose-300 transition-all hover:bg-rose-500 hover:text-white"
                >
                  Meet Kajal
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
