import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { healthPackages } from '@/data/health';
import { Stagger, StaggerItem } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const accentMap = {
  rose: 'glass-rose ring-2 ring-rose-500/30',
  olive: 'bg-olive-500/10 ring-2 ring-olive-500/20',
  cream: 'bg-white shadow-sm',
};

export default function HealthPackages() {
  const navigate = useNavigate();
  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading
            eyebrow="Pricing"
            title={<>Plans for <span className="text-gold-gradient">every journey</span></>}
            subtitle="From a single consultation to a 6-month transformation. Every plan is personalised, clinically guided and fully supported."
          />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {healthPackages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 ${accentMap[pkg.accent]}`}
                >
                  {pkg.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-rose-500 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  )}
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">{pkg.duration}</p>
                  <h3 className="mt-2 font-display text-2xl">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="font-display text-3xl font-semibold"
                    >
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </motion.span>
                    <span className="text-sm text-ink/40 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm text-ink/70">
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
                      pkg.popular
                        ? 'bg-rose-500 text-white hover:bg-rose-600'
                        : 'border border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white'
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

      {/* Guarantee */}
      <section className="bg-cream-200 py-16">
        <div className="container-lux grid gap-6 px-6 text-center md:grid-cols-3 md:px-12">
          {[
            { icon: '🩺', title: 'Clinically guided', text: 'Every plan is reviewed by a clinical nutritionist.' },
            { icon: '💬', title: 'Weekly check-ins', text: 'Never alone — your nutritionist is a message away.' },
            { icon: '🔄', title: 'Flexible & pauseable', text: 'Pause your plan during travel, up to 14 days.' },
          ].map((g) => (
            <div key={g.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">{g.icon}</div>
              <h3 className="mt-3 font-display text-lg">{g.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{g.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
