import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '@/components/SectionHeading';
import { Stagger, StaggerItem } from '@/components/Reveal';

const divisions = ['All', 'Fashion', 'Health', 'Healing'];

export default function Testimonials() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? testimonials : testimonials.filter((t) => t.division === filter);

  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading eyebrow="Voices" title={<>Loved by <span className="text-gold-gradient">our clients</span></>} subtitle="Real stories from the Flaunt Berries family. Couture, healing and health — in their words." />
        </div>
      </section>

      {/* Featured carousel */}
      <section className="bg-cream-100 py-14">
        <div className="container-lux px-6 md:px-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            className="!pb-12"
          >
            {testimonials.slice(0, 4).map((t) => (
              <SwiperSlide key={t.id}>
                <div className="mx-auto max-w-3xl px-4 text-center">
                  <Quote className="mx-auto h-10 w-10 text-rose-500/30" />
                  <p className="mt-5 font-display text-2xl leading-relaxed text-ink md:text-3xl">"{t.text}"</p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div className="text-left">
                      <p className="font-medium text-ink">{t.name}</p>
                      <p className="text-xs text-ink/55">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section-pad bg-cream-200">
        <div className="container-lux">
          <div className="mb-10 flex justify-center gap-2">
            {divisions.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === d ? 'bg-rose-500 text-white' : 'bg-white text-ink/60 hover:bg-rose-500/10'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <StaggerItem key={t.id}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-rose-500 text-rose-500" />)}
                    </div>
                    <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs text-rose-600">{t.division}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-ink">{t.name}</p>
                      <p className="text-xs text-ink/55">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
