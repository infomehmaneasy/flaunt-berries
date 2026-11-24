import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useState } from 'react';
import toast from 'react-hot-toast';

const columns = [
  {
    title: 'Divisions',
    links: [
      { label: 'Fashion', to: '/fashion' },
      { label: 'Health', to: '/health' },
      { label: 'Aatmic Healing', to: '/healing' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'About Kajal', to: '/about' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Journal', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Shipping', to: '/shipping' },
      { label: 'Refund Policy', to: '/refund' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Welcome to the inner circle.');
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-cream-100">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-olive-500/10 blur-3xl" />

      <div className="container-lux relative px-6 py-16 md:px-12 md:py-20">
        {/* Newsletter */}
        <div className="grid gap-10 border-b border-cream-100/10 pb-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="font-display text-3xl text-cream-100 md:text-4xl">
              Join the <span className="text-gold-gradient">inner circle</span>
            </h3>
            <p className="mt-3 max-w-md text-sm text-cream-100/70">
              Early access to couture drops, wellness wisdom and healing circles. No noise — only beauty.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex w-full max-w-md gap-3 lg:ml-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-12 flex-1 rounded-full border border-cream-100/20 bg-cream-100/5 px-5 text-sm text-cream-100 placeholder:text-cream-100/40 focus:border-rose-500 focus:outline-none"
            />
            <button
              type="submit"
              className="group flex h-12 items-center gap-2 rounded-full bg-rose-500 px-6 text-sm font-medium text-white transition-all hover:bg-rose-600"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo animated={false} light />
            <p className="mt-5 max-w-xs text-sm text-cream-100/60">
              Where fashion meets wellness. A luxury house of couture, clinical nutrition and spiritual healing.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: MessageCircle, href: 'https://wa.me/910000000000', label: 'WhatsApp' },
                { icon: Mail, href: 'mailto:hello@flauntberries.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-500/30 text-rose-400 transition-all hover:bg-rose-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-rose-400">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream-100/70 transition-colors hover:text-rose-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/50 md:flex-row">
          <p>© {new Date().getFullYear()} Flaunt Berries by Kajal. Crafted with intention.</p>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-rose-400" />
            <span>New Delhi · India · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
