import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { blogs } from '@/data/common';
import { Stagger, StaggerItem } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const categories = ['All', 'Fashion', 'Health', 'Healing'];

export default function Blog() {
  const navigate = useNavigate();
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? blogs : blogs.filter((b) => b.category === cat);

  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading eyebrow="The Journal" title={<>Words on <span className="text-gold-gradient">fashion, food & spirit</span></>} subtitle="Essays, guides and stories from the Flaunt Berries studio, clinic and healing space." />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <div className="mb-10 flex justify-center gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${cat === c ? 'bg-rose-500 text-white' : 'bg-white text-ink/60 hover:bg-rose-500/10'}`}>{c}</button>
            ))}
          </div>

          <Stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <StaggerItem key={b.id}>
                <motion.article whileHover={{ y: -8 }} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm" onClick={() => navigate('/blog')}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-rose-600 backdrop-blur">{b.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink/50">
                      <span>{b.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {b.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-tight text-ink group-hover:text-rose-600">{b.title}</h3>
                    <p className="mt-2 text-sm text-ink/65">{b.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-600">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
