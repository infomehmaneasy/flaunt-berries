import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

type Scores = { fashion: number; health: number; healing: number };

const steps = [
  {
    question: 'How are you feeling today?',
    sub: 'Be honest — this is a judgement-free space.',
    options: [
      { label: 'Off balance', icon: '⚖️', desc: 'Energy feels depleted, body not cooperating', score: { fashion: 0, health: 3, healing: 2 } },
      { label: 'Dull & uninspired', icon: '✨', desc: 'I need a spark, a lift, a fresh identity', score: { fashion: 3, health: 1, healing: 1 } },
      { label: 'Anxious & scattered', icon: '🌪️', desc: 'Mind is loud, spirit feels heavy', score: { fashion: 0, health: 1, healing: 3 } },
      { label: 'Ready to grow', icon: '🌱', desc: 'I want to invest in my best self', score: { fashion: 1, health: 3, healing: 2 } },
    ],
  },
  {
    question: 'What matters most right now?',
    sub: 'Choose the one that resonates deepest.',
    options: [
      { label: 'Looking powerful', icon: '👑', desc: 'Clothes that make a statement', score: { fashion: 3, health: 1, healing: 0 } },
      { label: 'Healing a condition', icon: '💚', desc: 'Weight, hormones, gut, sugar — any of these', score: { fashion: 0, health: 3, healing: 1 } },
      { label: 'Inner peace & clarity', icon: '🕊️', desc: 'Letting go of what no longer serves me', score: { fashion: 0, health: 0, healing: 3 } },
      { label: 'Full transformation', icon: '🦋', desc: 'Body, mind and spirit — all of it', score: { fashion: 1, health: 2, healing: 2 } },
    ],
  },
  {
    question: 'If you could gift yourself one thing—',
    sub: 'No limits. What would it be?',
    options: [
      { label: 'A couture outfit', icon: '🪡', desc: 'Handcrafted, made for my body', score: { fashion: 3, health: 0, healing: 0 } },
      { label: 'A nutrition plan', icon: '🥗', desc: 'Evidence-based, built around my labs', score: { fashion: 0, health: 3, healing: 0 } },
      { label: 'An energy session', icon: '🌙', desc: 'Reset, realign, release', score: { fashion: 0, health: 0, healing: 3 } },
      { label: 'All three', icon: '🌟', desc: 'The full Flaunt Berries experience', score: { fashion: 1, health: 1, healing: 1 } },
    ],
  },
];

const results = {
  fashion: {
    title: 'Fashion Studio',
    tagline: 'Your style is your armour',
    desc: 'You are ready to step into a version of yourself the world cannot ignore. Our atelier is waiting.',
    cta: 'Explore Fashion',
    to: '/fashion',
    icon: '👗',
    color: 'bg-rose-500',
  },
  health: {
    title: 'Flaunt Berries Health',
    tagline: 'Your body is ready to heal',
    desc: 'A personalised clinical nutrition plan will transform how you feel from the inside out.',
    cta: 'Book a Consultation',
    to: '/health',
    icon: '🌿',
    color: 'bg-olive-600',
  },
  healing: {
    title: 'Aatmic Healing',
    tagline: 'Your spirit is calling',
    desc: 'Something in you knows it is time to release, realign and return to yourself.',
    cta: 'Book a Session',
    to: '/healing',
    icon: '✨',
    color: 'bg-rose-800',
  },
};

export default function WellnessQuiz() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ fashion: 0, health: 0, healing: 0 });
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<keyof typeof results | null>(null);

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const opt = steps[step].options[idx];
    const next: Scores = {
      fashion: scores.fashion + opt.score.fashion,
      health: scores.health + opt.score.health,
      healing: scores.healing + opt.score.healing,
    };
    setTimeout(() => {
      if (step < steps.length - 1) {
        setScores(next);
        setStep((s) => s + 1);
        setSelected(null);
      } else {
        const winner = (Object.keys(next) as (keyof Scores)[]).reduce((a, b) =>
          next[a] >= next[b] ? a : b
        );
        setResult(winner);
      }
    }, 420);
  };

  const reset = () => {
    setStep(0);
    setScores({ fashion: 0, health: 0, healing: 0 });
    setSelected(null);
    setResult(null);
  };

  const current = steps[step];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink p-px">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-rose-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-olive-500/10 blur-3xl" />

      <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0e0e0e] px-6 py-10 md:px-10 md:py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/15">
              <Sparkles className="h-4 w-4 text-rose-300" />
            </div>
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-rose-300">Find Your Path</p>
              <p className="text-xs text-white/40">3-question wellness quiz</p>
            </div>
          </div>
          {(step > 0 || result) && (
            <button onClick={reset} className="flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-rose-300">
              <RotateCcw className="h-3.5 w-3.5" /> Restart
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Progress */}
              <div className="mb-7 flex gap-2">
                {steps.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ width: i === step ? 32 : 8, opacity: i <= step ? 1 : 0.25 }}
                    transition={{ duration: 0.35 }}
                    className={`h-1.5 rounded-full ${i <= step ? 'bg-rose-400' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              <h3 className="font-display text-2xl text-white md:text-3xl">{current.question}</h3>
              <p className="mt-1.5 text-sm text-white/50">{current.sub}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: selected === null ? 1.02 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => choose(i)}
                    className={`relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      selected === i
                        ? 'border-rose-400 bg-rose-500/20'
                        : 'border-white/10 hover:border-rose-400/50 hover:bg-white/5'
                    }`}
                  >
                    <span className="mt-0.5 text-2xl leading-none">{opt.icon}</span>
                    <div>
                      <p className="font-medium text-white">{opt.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/50">{opt.desc}</p>
                    </div>
                    {selected === i && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500"
                      >
                        <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              <p className="mt-5 text-center text-xs text-white/25">
                Question {step + 1} of {steps.length}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              {/* Burst particles */}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: Math.cos((i / 10) * Math.PI * 2) * 90,
                    y: Math.sin((i / 10) * Math.PI * 2) * 70,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="pointer-events-none absolute left-1/2 top-1/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-rose-400"
                />
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.15 }}
                className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl"
              >
                {results[result].icon}
              </motion.div>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-rose-300">Your perfect match</p>
              <h3 className="mt-2 font-display text-3xl text-white">{results[result].title}</h3>
              <p className="mt-1 font-script text-xl text-rose-400">{results[result].tagline}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                {results[result].desc}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => navigate(results[result!].to)}
                  className="group flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30"
                >
                  {results[result].cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button onClick={reset} className="text-sm text-white/35 transition-colors hover:text-rose-300">
                  Retake quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
