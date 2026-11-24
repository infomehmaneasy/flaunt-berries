import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingBag, Truck, Scissors, ShieldCheck, Minus, Plus, ChevronRight } from 'lucide-react';
import { fashionProducts, fashionReviews } from '@/data/fashion';
import { Stagger, StaggerItem } from '@/components/Reveal';
import toast from 'react-hot-toast';

export default function FashionProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = fashionProducts.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const [wish, setWish] = useState(false);
  const [tab, setTab] = useState<'description' | 'fabric' | 'reviews' | 'stitching'>('description');

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-28">
        <p className="font-display text-3xl">Piece not found</p>
        <Link to="/fashion" className="rounded-full bg-rose-500 px-6 py-2.5 text-white">Back to Fashion</Link>
      </div>
    );
  }

  const addToCart = () => {
    if (!size) { toast.error('Please select a size'); return; }
    toast.success('Added to cart');
  };

  const buyNow = () => {
    if (!size) { toast.error('Please select a size'); return; }
    navigate('/fashion/checkout');
  };

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="container-lux flex items-center gap-2 px-6 py-4 text-xs text-ink/50 md:px-12">
        <Link to="/fashion" className="hover:text-rose-600">Fashion</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-rose-600">{product.name}</span>
      </div>

      <section className="container-lux grid gap-10 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div>
          <motion.div
            key={activeImg}
            initial={{ opacity: 0.6, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-200"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <motion.img
              src={product.images[activeImg]}
              alt={product.name}
              animate={{ scale: zoom ? 1.6 : 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-20 w-16 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImg === i ? 'border-rose-500' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-600">{product.collection}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-ink md:text-5xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-rose-500 text-rose-500' : 'text-ink/20'}`} />
              ))}
            </div>
            <span className="text-sm text-ink/60">{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-display text-3xl font-semibold text-ink">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-base text-ink/40 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
            <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600">
              {Math.round((1 - product.price / product.mrp) * 100)}% off
            </span>
          </div>

          {/* Colors */}
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Color</p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-9 w-9 rounded-full border-2 transition-all ${
                    color === c ? 'border-rose-500 ring-2 ring-rose-500/30' : 'border-ink/15'
                  }`}
                  style={{ background: c }}
                  aria-label={`Color ${c}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[3rem] rounded-full border px-4 py-2 text-sm transition-all ${
                    size === s ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/15 hover:border-rose-500'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Quantity</p>
            <div className="inline-flex items-center gap-4 rounded-full border border-ink/15 px-4 py-2">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-ink/60 hover:text-rose-600">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="text-ink/60 hover:text-rose-600">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={addToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-rose-500 py-3.5 text-sm font-medium text-rose-600 transition-all hover:bg-rose-500 hover:text-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
            <button
              onClick={buyNow}
              className="flex-1 rounded-full bg-rose-500 py-3.5 text-sm font-medium text-white transition-all hover:bg-rose-600"
            >
              Buy Now
            </button>
            <button
              onClick={() => { setWish((w) => !w); toast.success(wish ? 'Removed' : 'Wishlisted'); }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 transition-all hover:border-rose-500"
            >
              <Heart className={`h-5 w-5 ${wish ? 'fill-rose-500 text-rose-500' : 'text-ink/60'}`} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Truck, label: 'Free shipping', sub: 'Worldwide' },
              { icon: Scissors, label: 'Custom stitch', sub: 'Made to measure' },
              { icon: ShieldCheck, label: 'Authenticity', sub: 'Guaranteed' },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl bg-white p-3 text-center shadow-sm">
                <b.icon className="mx-auto h-5 w-5 text-rose-500" />
                <p className="mt-1.5 text-xs font-medium text-ink">{b.label}</p>
                <p className="text-[0.65rem] text-ink/50">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-lux px-6 pb-16 md:px-12">
        <div className="flex gap-6 border-b border-ink/10">
          {(['description', 'fabric', 'reviews', 'stitching'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative pb-3 text-sm font-medium capitalize transition-colors ${
                tab === t ? 'text-rose-600' : 'text-ink/50 hover:text-ink'
              }`}
            >
              {t}
              {tab === t && (
                <motion.div layoutId="tab-underline" className="absolute -bottom-px left-0 h-0.5 w-full bg-rose-500" />
              )}
            </button>
          ))}
        </div>

        <div className="py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              {tab === 'description' && <p className="leading-relaxed text-ink/75">{product.description}</p>}
              {tab === 'fabric' && (
                <div>
                  <p className="leading-relaxed text-ink/75">{product.fabric}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink/70">
                    <li>· Dry clean only</li>
                    <li>· Store in a cool, dry place</li>
                    <li>· Iron on low heat with a cloth barrier</li>
                  </ul>
                </div>
              )}
              {tab === 'reviews' && (
                <Stagger className="space-y-5">
                  {fashionReviews.map((r) => (
                    <StaggerItem key={r.name}>
                      <div className="rounded-2xl bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-ink">{r.name}</p>
                          <span className="text-xs text-ink/50">{r.date}</span>
                        </div>
                        <div className="mt-1 flex">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-rose-500 text-rose-500" />
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-ink/70">{r.text}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}
              {tab === 'stitching' && (
                <div>
                  <p className="leading-relaxed text-ink/75">
                    Every Flaunt Berries piece is made to measure. After checkout, our atelier will reach out for your measurements and schedule a virtual fitting. Custom stitching is included with couture pieces.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {['Bust', 'Waist', 'Hips', 'Shoulder', 'Sleeve length', 'Garment length'].map((m) => (
                      <div key={m} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm shadow-sm">
                        <span className="text-ink/70">{m}</span>
                        <span className="text-ink/40">To be measured</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Delivery */}
      <section className="container-lux px-6 pb-20 md:px-12">
        <div className="grid gap-4 rounded-3xl bg-ink p-8 text-cream-100 md:grid-cols-3 md:p-12">
          {[
            { icon: Truck, title: 'Dispatch', text: 'Ready-to-wear ships in 3–5 days. Couture in 4–6 weeks.' },
            { icon: ShieldCheck, title: 'Insurance', text: 'Every shipment is fully insured until it reaches you.' },
            { icon: Scissors, title: 'Alterations', text: 'One complimentary alteration within 30 days of delivery.' },
          ].map((d) => (
            <div key={d.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500/20">
                <d.icon className="h-5 w-5 text-rose-300" />
              </div>
              <div>
                <h4 className="font-display text-lg">{d.title}</h4>
                <p className="mt-1 text-sm text-cream-100/70">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
