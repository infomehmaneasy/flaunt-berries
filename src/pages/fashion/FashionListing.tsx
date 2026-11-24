import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, SlidersHorizontal, X, Star } from 'lucide-react';
import { fashionProducts, fashionCategories, fashionFilters, type Product } from '@/data/fashion';
import { Stagger, StaggerItem } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import toast from 'react-hot-toast';

export default function FashionListing() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('New Arrivals');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return fashionProducts.filter((p) => {
      if (activeCat !== 'New Arrivals' && activeCat !== "Women's Wear") {
        if (activeCat === 'Couture' && !p.isCouture) return false;
        if (activeCat !== 'Couture' && p.category !== activeCat) return false;
      }
      if (selectedColors.length && !p.colors.some((c) => selectedColors.includes(c))) return false;
      if (selectedSizes.length && !p.sizes.some((s) => selectedSizes.includes(s))) return false;
      if (priceRange && (p.price < priceRange || p.price > priceRange + 15000)) return false;
      if (selectedCollection && p.collection !== selectedCollection) return false;
      return true;
    });
  }, [activeCat, selectedColors, selectedSizes, priceRange, selectedCollection]);

  const toggleWish = (id: string) => {
    setWishlist((w) => {
      const n = new Set(w);
      if (n.has(id)) {
        n.delete(id);
        toast('Removed from wishlist', { icon: '🤍' });
      } else {
        n.add(id);
        toast.success('Added to wishlist');
      }
      return n;
    });
  };

  const clearFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange(null);
    setSelectedCollection(null);
  };

  return (
    <div className="pt-28">
      {/* Hero band */}
      <section className="relative overflow-hidden bg-cream-200 py-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="container-lux grid items-center gap-8 px-6 md:px-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Flaunt Berries Fashion"
            title={<>Couture, <span className="text-gold-gradient">crafted for you</span></>}
            subtitle="Hand-embroidered couture, bridal, ethnic and designer wear. Made to measure, made to last."
          />
          <div className="relative">
            <div className="pointer-events-none absolute inset-12 rounded-full bg-[#b8934f]/20 blur-3xl" />
            <img
              src="/clothing.png"
              alt="Flaunt Berries by Kajal — The Fashion Studio"
              className="hero-artwork hero-artwork-fashion relative aspect-[3/2] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 z-30 glass border-y border-rose-500/15">
        <div className="container-lux flex items-center gap-4 overflow-x-auto px-6 py-4 md:px-12">
          {fashionCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCat === cat
                  ? 'bg-rose-500 text-white'
                  : 'text-ink/70 hover:bg-rose-500/10 hover:text-rose-600'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(true)}
            className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-rose-500/30 px-4 py-2 text-sm font-medium text-rose-600 transition-all hover:bg-rose-500 hover:text-white"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-pad bg-cream-100">
        <div className="container-lux">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-ink/60">{filtered.length} pieces</p>
            {(selectedColors.length || selectedSizes.length || priceRange || selectedCollection) ? (
              <button onClick={clearFilters} className="text-sm text-rose-600 hover:underline">
                Clear filters
              </button>
            ) : null}
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display text-2xl text-ink/60">No pieces match your filters.</p>
              <button onClick={clearFilters} className="mt-4 text-rose-600 hover:underline">Reset</button>
            </div>
          ) : (
            <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
              {filtered.map((p) => (
                <StaggerItem key={p.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md shadow-rose-900/5"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Badges */}
                      <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                        {p.isNew && (
                          <span className="rounded-full bg-rose-500 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                            New
                          </span>
                        )}
                        {p.isCouture && (
                          <span className="rounded-full bg-ink/80 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-cream-100 backdrop-blur">
                            Couture
                          </span>
                        )}
                      </div>
                      {/* Wishlist */}
                      <button
                        onClick={() => toggleWish(p.id)}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-all hover:scale-110"
                        aria-label="Wishlist"
                      >
                        <Heart className={`h-4 w-4 ${wishlist.has(p.id) ? 'fill-rose-500 text-rose-500' : 'text-ink/60'}`} />
                      </button>
                      {/* Hover actions */}
                      <div className="absolute inset-x-3 bottom-3 flex translate-y-4 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          onClick={() => navigate(`/fashion/${p.id}`)}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-rose-500 py-2.5 text-xs font-medium text-white transition-colors hover:bg-rose-600"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          View
                        </button>
                        <button
                          onClick={() => setQuickView(p)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-colors hover:bg-white"
                          aria-label="Quick view"
                        >
                          <Eye className="h-4 w-4 text-ink/70" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-rose-600">{p.collection}</p>
                      <h3 className="mt-1 font-display text-base leading-tight text-ink">{p.name}</h3>
                      <div className="mt-2 flex items-center gap-1.5">
                        <Star className="h-3 w-3 fill-rose-500 text-rose-500" />
                        <span className="text-xs text-ink/60">{p.rating} · {p.reviews}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="font-display text-base font-semibold text-ink">₹{p.price.toLocaleString('en-IN')}</span>
                        <span className="text-xs text-ink/40 line-through">₹{p.mrp.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Filter drawer */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-cream-100 p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-2xl">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="rounded-full p-2 hover:bg-rose-500/10">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Color */}
              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {fashionFilters.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() =>
                        setSelectedColors((s) => s.includes(c.hex) ? s.filter((x) => x !== c.hex) : [...s, c.hex])
                      }
                      className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all ${
                        selectedColors.includes(c.hex) ? 'border-rose-500 bg-rose-500/10' : 'border-ink/15'
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full border border-ink/10" style={{ background: c.hex }} />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {fashionFilters.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSizes((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s])}
                      className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                        selectedSizes.includes(s) ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/15'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Price</h4>
                <div className="space-y-2">
                  {fashionFilters.priceRanges.map((r) => (
                    <button
                      key={r.label}
                      onClick={() => setPriceRange(priceRange === r.min ? null : r.min)}
                      className={`block w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-all ${
                        priceRange === r.min ? 'border-rose-500 bg-rose-500/10' : 'border-ink/10'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collection */}
              <div className="mb-8">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Collection</h4>
                <div className="flex flex-wrap gap-2">
                  {fashionFilters.collections.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCollection(selectedCollection === c ? null : c)}
                      className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                        selectedCollection === c ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/15'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full rounded-full bg-rose-500 py-3 text-sm font-medium text-white hover:bg-rose-600"
              >
                Show {filtered.length} pieces
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quick view modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickView(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="grid w-full max-w-3xl overflow-hidden rounded-3xl bg-cream-100 md:grid-cols-2"
            >
              <div className="aspect-square overflow-hidden md:aspect-auto">
                <img src={quickView.image} alt={quickView.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-rose-600">{quickView.collection}</p>
                <h3 className="mt-1 font-display text-2xl">{quickView.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-rose-500 text-rose-500" />
                  <span className="text-sm text-ink/60">{quickView.rating} · {quickView.reviews} reviews</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{quickView.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-display text-2xl font-semibold">₹{quickView.price.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-ink/40 line-through">₹{quickView.mrp.toLocaleString('en-IN')}</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => navigate(`/fashion/${quickView.id}`)}
                    className="flex-1 rounded-full bg-rose-500 py-3 text-sm font-medium text-white hover:bg-rose-600"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => { toast.success('Added to cart'); setQuickView(null); }}
                    className="flex-1 rounded-full border border-rose-500 py-3 text-sm font-medium text-rose-600 hover:bg-rose-500 hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
