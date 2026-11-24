import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
// import { useLenis } from '@/hooks/use-lenis';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';
import PageTransition from '@/components/PageTransition';

import Home from '@/pages/Home';
import FashionListing from '@/pages/fashion/FashionListing';
import FashionProduct from '@/pages/fashion/FashionProduct';
import FashionCheckout from '@/pages/fashion/FashionCheckout';
import HealthLanding from '@/pages/health/HealthLanding';
import HealthDetail from '@/pages/health/HealthDetail';
import HealthPackages from '@/pages/health/HealthPackages';
import HealthBooking from '@/pages/health/HealthBooking';
import HealthDashboard from '@/pages/health/HealthDashboard';
import HealingLanding from '@/pages/healing/HealingLanding';
import HealingBooking from '@/pages/healing/HealingBooking';
import About from '@/pages/About';
import Testimonials from '@/pages/Testimonials';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Legal from '@/pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  // useLenis();
  const { pathname } = useLocation();
  const brandTheme = pathname.startsWith('/fashion')
    ? 'brand-fashion'
    : pathname.startsWith('/health')
      ? 'brand-health'
      : pathname.startsWith('/healing')
        ? 'brand-healing'
        : '';

  return (
    <>
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <main className={`app-shell ${brandTheme}`}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/fashion" element={<PageTransition><FashionListing /></PageTransition>} />
            <Route path="/fashion/:id" element={<PageTransition><FashionProduct /></PageTransition>} />
            <Route path="/fashion/checkout" element={<PageTransition><FashionCheckout /></PageTransition>} />
            <Route path="/health" element={<PageTransition><HealthLanding /></PageTransition>} />
            <Route path="/health/packages" element={<PageTransition><HealthPackages /></PageTransition>} />
            <Route path="/health/book" element={<PageTransition><HealthBooking /></PageTransition>} />
            <Route path="/health/dashboard" element={<PageTransition><HealthDashboard /></PageTransition>} />
            <Route path="/health/:id" element={<PageTransition><HealthDetail /></PageTransition>} />
            <Route path="/healing" element={<PageTransition><HealingLanding /></PageTransition>} />
            <Route path="/healing/book" element={<PageTransition><HealingBooking /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/:type" element={<PageTransition><Legal /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = loading ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [loading]);

  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#2F2F2F',
            color: '#F8F3EF',
            borderRadius: '9999px',
            padding: '12px 24px',
            fontSize: '13px',
            fontFamily: 'Poppins, sans-serif',
          },
        }}
      />
      {loading ? <Loader onDone={() => setLoading(false)} /> : <AppShell />}
    </BrowserRouter>
  );
}
