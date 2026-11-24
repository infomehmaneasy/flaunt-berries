import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { healthCategories, healthStats } from '@/data/health';
import { Stagger, StaggerItem } from '@/components/Reveal';
import SectionHeading, { StatCounter } from '@/components/SectionHeading';

export default function HealthLanding() {
  const navigate = useNavigate();

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-200 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-olive-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="container-lux relative grid items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Flaunt Berries Health</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Clinical nutrition, <span className="text-gold-gradient">reimagined</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Evidence-based nutrition therapy for 17+ health conditions. Personalised plans, weekly check-ins, and a nutritionist in your pocket.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('/health/book')} className="group flex items-center justify-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
                <Calendar className="h-4 w-4" />
                Book a Consultation
              </button>
              <button onClick={() => navigate('/health/packages')} className="rounded-full border border-rose-500 px-7 py-3.5 text-sm font-medium text-rose-600 hover:bg-rose-500 hover:text-white">
                View Packages
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-rose-200/45 blur-3xl" />
              <img
                src="/home.jpg"
                alt="Flaunt Berries Health by Dt. Kajal Kashyap"
                className="hero-artwork hero-artwork-light relative aspect-[3/2] w-full object-contain"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 glass-rose rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15">
                  <Sparkles className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="font-display text-lg">4,200+</p>
                  <p className="text-xs text-ink/60">Lives transformed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-100 py-14">
        <div className="container-lux grid grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {healthStats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={(s as any).decimals} label={s.label} />
          ))}
        </div>
      </section>

      {/* Disease categories */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Conditions We Treat"
            title={<>Healing for <span className="text-gold-gradient">every body</span></>}
            subtitle="Tap a condition to learn how we approach it — with overview, symptoms, diet importance, FAQs and real client results."
          />

          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {healthCategories.map((c) => {
              const Icon = (Icons as any)[c.icon] || Icons.Activity;
              return (
                <StaggerItem key={c.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    onClick={() => navigate(`/health/${c.id}`)}
                    className="group relative h-44 cursor-pointer overflow-hidden rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-rose-500/10"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-500/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-rose-500/10" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 transition-colors group-hover:bg-rose-500">
                        <Icon className="h-5 w-5 text-rose-500 transition-colors group-hover:text-white" />
                      </div>
                      <h3 className="mt-3 font-display text-lg leading-tight">{c.name}</h3>
                      <p className="mt-1 text-xs text-ink/55">{c.tagline}</p>
                      <div className="mt-auto flex items-center gap-1 text-xs font-medium text-rose-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Explore <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="container-lux relative px-6 text-center md:px-12">
          <SectionHeading
            light
            eyebrow="Begin Your Journey"
            title={<>Your healthiest self <span className="text-gold-gradient">awaits</span></>}
            subtitle="Book a one-on-one consultation with a clinical nutritionist. The first step is the most important one."
          />
          <button onClick={() => navigate('/health/book')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
