import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Star } from 'lucide-react';
import { healthDiseases } from '@/data/health';
import { healthPackages } from '@/data/health';
import { Stagger, StaggerItem } from '@/components/Reveal';
import Reveal from '@/components/Reveal';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function HealthDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const disease = healthDiseases.find((d) => d.id === id);

  if (!disease) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-28">
        <p className="font-display text-3xl">Condition not found</p>
        <Link to="/health" className="rounded-full bg-rose-500 px-6 py-2.5 text-white">Back to Health</Link>
      </div>
    );
  }

  const featuredPackages = healthPackages.slice(0, 3);

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="container-lux flex items-center gap-2 px-6 py-4 text-xs text-ink/50 md:px-12">
        <Link to="/health" className="hover:text-rose-600">Health</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-rose-600">{disease.name}</span>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-200 py-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-olive-300/30 blur-3xl" />
        <div className="container-lux grid items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{disease.tagline}</p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">{disease.name} Nutrition</h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">{disease.overview}</p>
            <div className="mt-8 flex gap-3">
              <button onClick={() => navigate('/health/book')} className="rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
                Book Consultation
              </button>
              <button onClick={() => navigate('/health/packages')} className="rounded-full border border-rose-500 px-7 py-3.5 text-sm font-medium text-rose-600 hover:bg-rose-500 hover:text-white">
                View Packages
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl luxury-shadow">
              <img src={disease.image} alt={disease.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-500/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Symptoms', items: disease.symptoms, icon: '⚠️' },
            { title: 'Causes', items: disease.causes, icon: '🔍' },
            { title: 'Benefits of Our Plan', items: disease.benefits, icon: '✨' },
          ].map((block, i) => (
            <Reveal key={block.title} delay={i * 0.1} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-display text-xl">{block.title}</h3>
              <ul className="space-y-2.5 text-sm text-ink/70">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="rounded-2xl bg-ink p-6 text-cream-100">
            <h3 className="mb-4 font-display text-xl">Diet Importance</h3>
            <p className="text-sm leading-relaxed text-cream-100/75">{disease.dietImportance}</p>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux">
          <div className="mb-12 text-center">
            <p className="eyebrow">Choose Your Plan</p>
            <h2 className="heading-lux">Packages for {disease.name}</h2>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-3xl p-7 ${
                    pkg.popular ? 'glass-rose ring-2 ring-rose-500/30' : 'bg-white shadow-sm'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-rose-500 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  )}
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">{pkg.duration}</p>
                  <h3 className="mt-2 font-display text-2xl">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold">₹{pkg.price.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-ink/40 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-sm text-ink/70">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/health/book')}
                    className={`mt-6 w-full rounded-full py-3 text-sm font-medium transition-all ${
                      pkg.popular ? 'bg-rose-500 text-white hover:bg-rose-600' : 'border border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white'
                    }`}
                  >
                    Book Now
                  </button>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <div className="mb-12 text-center">
            <p className="eyebrow">Real Results</p>
            <h2 className="heading-lux">Client stories</h2>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {disease.testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-rose-500 text-rose-500" />)}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">"{t.text}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-medium text-ink">{t.name}</p>
                    <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600">{t.result}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux max-w-3xl">
          <div className="mb-10 text-center">
            <p className="eyebrow">Questions</p>
            <h2 className="heading-lux">Frequently asked</h2>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl bg-white p-2 shadow-sm">
            {disease.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="px-4 text-left font-display text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-ink/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center">
        <div className="container-lux px-6 md:px-12">
          <h2 className="font-display text-3xl text-cream-100 md:text-4xl">
            Ready to begin your <span className="text-gold-gradient">healing</span>?
          </h2>
          <button onClick={() => navigate('/health/book')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
            Book Consultation <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
