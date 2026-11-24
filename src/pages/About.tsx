import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { aboutTimeline, aboutValues } from '@/data/common';
import { Stagger, StaggerItem } from '@/components/Reveal';
import Reveal from '@/components/Reveal';
import SectionHeading, { StatCounter } from '@/components/SectionHeading';
import { healthStats } from '@/data/health';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-200 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="container-lux grid items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Founder</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Meet <span className="text-gold-gradient">Kajal Kashyap</span>
            </h1>
            <p className="mt-2 font-script text-3xl text-rose-500">Designer · Nutritionist · Healer</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Kajal began her journey with a single needle and a belief — that luxury should nourish the whole person. What started as a home couture studio became a house of three divisions, each devoted to a different layer of the self.
            </p>
            <button onClick={() => navigate('/contact')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
              Connect with Kajal <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl luxury-shadow">
              <img src="/images/founder/ChatGPT_Image_Jul_22,_2026,_12_47_38_AM.png" alt="Kajal Kashyap" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <SectionHeading eyebrow="What We Stand For" title={<>Our <span className="text-gold-gradient">values</span></>} />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v) => {
              const Icon = (Icons as any)[v.icon] || Icons.Sparkles;
              return (
                <StaggerItem key={v.title}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10">
                      <Icon className="h-5 w-5 text-rose-500" />
                    </div>
                    <h3 className="mt-4 font-display text-xl">{v.title}</h3>
                    <p className="mt-2 text-sm text-ink/65">{v.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux">
          <SectionHeading eyebrow="Our Journey" title={<>The <span className="text-gold-gradient">story</span> so far</>} />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-rose-500/20 md:left-1/2" />
            {aboutTimeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className={`relative mb-10 flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                      <p className="font-display text-2xl text-rose-600">{t.year}</p>
                      <h3 className="mt-1 font-display text-lg">{t.title}</h3>
                      <p className="mt-2 text-sm text-ink/65">{t.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16">
        <div className="container-lux grid grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {healthStats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={(s as any).decimals} label={s.label} light />
          ))}
        </div>
      </section>
    </div>
  );
}
