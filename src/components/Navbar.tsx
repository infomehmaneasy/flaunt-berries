import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, ShoppingBag } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './Logo';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Fashion', to: '/fashion' },
  { label: 'Health', to: '/health' },
  { label: 'Aatmic Healing', to: '/healing' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const isActiveLink = (pathname: string, to: string) =>
  to === '/'
    ? pathname === '/'
    : pathname === to || pathname.startsWith(`${to}/`);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isFashionPage = location.pathname.startsWith('/fashion');

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 py-3 transition-all duration-300 lg:py-4 ${
        scrolled
          ? isFashionPage
            ? 'border-b border-white/10 bg-[#100e0b]/65 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'border-b border-white/50 bg-cream-50/75 shadow-md shadow-rose-900/5 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-lux flex items-center justify-between gap-4 px-4 md:px-8 xl:px-12"
        aria-label="Main navigation"
      >
        <button onClick={() => navigate('/')} className="shrink-0" aria-label="Home">
          <Logo animated={false} light={isFashionPage} />
        </button>

        <div className="hidden items-center justify-end gap-x-4 lg:flex xl:gap-x-8">
          {links.map((link) => {
            const active = isActiveLink(location.pathname, link.to);

            return (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                aria-current={active ? 'page' : undefined}
                className={`link-underline whitespace-nowrap text-xs font-medium tracking-wide transition-colors xl:text-sm ${
                  active
                    ? isFashionPage
                      ? 'text-[#d7b56f]'
                      : 'text-rose-500'
                    : isFashionPage
                      ? 'text-cream-100/90 hover:text-white'
                      : 'text-ink/75 hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            onClick={() => navigate('/fashion/checkout')}
            className={`hidden transition-colors xl:block ${
              isFashionPage ? 'text-cream-100/90 hover:text-rose-400' : 'text-ink/75 hover:text-rose-500'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                  isFashionPage
                    ? 'border-[#d7b56f]/30 bg-white/5 text-cream-100 hover:bg-white/10'
                    : 'border-rose-200/80 bg-white/70 text-ink hover:bg-white'
                }`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              overlayClassName="bg-ink/35 backdrop-blur-sm"
              className={`top-[4.75rem] max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain rounded-b-3xl border-x-0 p-5 shadow-2xl lg:hidden ${
                isFashionPage
                  ? 'border-[#d7b56f]/20 bg-[#181510] text-cream-100'
                  : 'border-rose-100 bg-[#fffaf6] text-ink'
              }`}
            >
              <SheetHeader className="mb-4 pr-8 text-left">
                <SheetTitle className={isFashionPage ? 'text-cream-100' : 'text-ink'}>
                  Explore Flaunt Berries
                </SheetTitle>
                <SheetDescription className={isFashionPage ? 'text-cream-100/60' : 'text-ink/55'}>
                  Fashion, health and healing — all under one roof.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-1">
                {links.map((link) => {
                  const active = isActiveLink(location.pathname, link.to);

                  return (
                    <SheetClose asChild key={link.to}>
                      <button
                        type="button"
                        onClick={() => navigate(link.to)}
                        aria-current={active ? 'page' : undefined}
                        className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                          active
                            ? isFashionPage
                              ? 'bg-[#d7b56f]/15 text-[#f1d18b]'
                              : 'bg-rose-100/70 text-rose-800'
                            : isFashionPage
                              ? 'text-cream-100/85 hover:bg-white/5'
                              : 'text-ink/75 hover:bg-rose-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </button>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
