import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { healingServices, healingTestimonials } from '@/data/healing';
import { Stagger, StaggerItem } from '@/components/Reveal';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { Star } from 'lucide-react';

export default function HealingLanding() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-[#fbefe8] pt-24 text-ink">
      {/* Glowing particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-rose-400/10"
          style={{
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            left: `${(i * 47) % 100}%`,
            top: `${(i * 31) % 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}

      {/* Floating mandala */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full text-rose-500">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 100 100)`}>
              <ellipse cx="100" cy="40" rx="8" ry="30" fill="currentColor" opacity="0.5" />
              <circle cx="100" cy="20" r="4" fill="currentColor" />
            </g>
          ))}
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Hero */}
      <section className="relative py-12 md:py-20">
        <div className="container-lux relative px-6 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mb-4 w-full max-w-[32rem]"
          >
            <img
              src="/atamic healing.png"
              alt="Aatmic Healing — Meet The Real You"
              className="hero-artwork hero-artwork-light aspect-square w-full object-contain"
            />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-rose-500">Aatmic Healing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Realign your <span className="text-gold-gradient">being</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/60">
            Energy healing, tarot, meditation and chakra balancing. A sacred space to release, realign and return to yourself.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex justify-center">
            <button onClick={() => navigate('/healing/book')} className="group flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
              <Sparkles className="h-4 w-4" />
              Book a Session
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-16">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading
            light={false}
            eyebrow="Our Services"
            title={<>Twelve paths to <span className="text-gold-gradient">wholeness</span></>}
            subtitle="Each session is a sacred, personalised experience. Choose what calls to you."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {healingServices.map((s) => {
              const Icon = (Icons as any)[s.icon] || Icons.Sparkles;
              return (
                <StaggerItem key={s.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    onClick={() => navigate('/healing/book')}
                    className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl bg-white border border-rose-200/30 p-6 transition-all hover:shadow-lg hover:shadow-rose-500/15"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-500/5 blur-2xl transition-all duration-500 group-hover:scale-150" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 transition-all group-hover:bg-rose-500">
                        <Icon className="h-5 w-5 text-rose-500 transition-colors group-hover:text-white" />
                      </div>
                      <h3 className="mt-4 font-display text-xl text-ink">{s.name}</h3>
                      <p className="mt-1 text-xs text-rose-600/70">{s.tagline}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="font-display text-lg text-ink">₹{s.price.toLocaleString('en-IN')}</span>
                        <span className="flex items-center gap-1 text-xs text-rose-500 opacity-0 transition-opacity group-hover:opacity-100">
                          Book <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-20">
        <div className="container-lux grid items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop" alt="Meditation" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow text-rose-500">The Experience</p>
            <h2 className="font-display text-4xl text-ink md:text-5xl">A sacred space, <span className="text-gold-gradient">held for you</span></h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              Every session begins with intention-setting and ends with integration. You are held — fully, gently, without judgement. Whether in-person or across distance, the energy meets you exactly where you are.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              {['Personalised to your energy and intention', 'Distance healing with equal efficacy', 'Follow-up voice note summary', 'Discreet, confidential, sacred'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> {t}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/healing/book')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
              Book a Session <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading light={false} eyebrow="Voices" title={<>Heard, held, <span className="text-gold-gradient">healed</span></>} />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {healingTestimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full rounded-2xl bg-white border border-rose-200/30 p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />)}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">"{t.text}"</p>
                  <div className="mt-4">
                    <p className="font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-rose-600/70">{t.service}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-center">
        <div className="container-lux px-6 md:px-12">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Your healing <span className="text-gold-gradient">begins here</span></h2>
          <button onClick={() => navigate('/healing/book')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
            Book a Session <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
