import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Lock, ShieldCheck, Truck, ChevronRight, PartyPopper } from 'lucide-react';
import { fashionProducts } from '@/data/fashion';
import toast from 'react-hot-toast';

export default function FashionCheckout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  const [placed, setPlaced] = useState(false);

  // Mock cart with 2 items
  const cart = [fashionProducts[0], fashionProducts[3]];
  const subtotal = cart.reduce((s, p) => s + p.price, 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const placeOrder = () => {
    setPlaced(true);
    setStep('success');
    setTimeout(() => toast.success('Order placed!'), 400);
  };

  return (
    <div className="pt-28">
      <section className="container-lux px-6 py-10 md:px-12">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] md:gap-6">
          {(['cart', 'shipping', 'payment'] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-3 md:gap-6">
              <button
                onClick={() => !placed && setStep(s)}
                className={`flex items-center gap-2 transition-colors ${
                  step === s ? 'text-rose-600' : 'text-ink/40'
                }`}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  step === s ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/20'
                }`}>
                  {i + 1}
                </span>
                {s}
              </button>
              {i < 2 && <ChevronRight className="h-4 w-4 text-ink/20" />}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main panel */}
          <div>
            <AnimatePresence mode="wait">
              {step === 'cart' && (
                <motion.div key="cart" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="mb-6 font-display text-3xl">Your Cart</h2>
                  <div className="space-y-4">
                    {cart.map((p) => (
                      <div key={p.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <img src={p.image} alt={p.name} className="h-28 w-24 rounded-xl object-cover" />
                        <div className="flex flex-1 flex-col">
                          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-rose-600">{p.collection}</p>
                          <h3 className="font-display text-lg">{p.name}</h3>
                          <p className="text-xs text-ink/50">Size: M · Qty: 1</p>
                          <p className="mt-auto font-display text-lg font-semibold">₹{p.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setStep('shipping')} className="mt-6 rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">
                    Continue to Shipping
                  </button>
                </motion.div>
              )}

              {step === 'shipping' && (
                <motion.div key="ship" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="mb-6 font-display text-3xl">Shipping Details</h2>
                  <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input placeholder="First name" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                      <input placeholder="Last name" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                    </div>
                    <input placeholder="Address" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                    <div className="grid gap-4 sm:grid-cols-3">
                      <input placeholder="City" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                      <input placeholder="State" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                      <input placeholder="PIN" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                    </div>
                    <input placeholder="Phone" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep('cart')} className="rounded-full border border-ink/15 px-6 py-3 text-sm hover:bg-rose-500/5">Back</button>
                    <button onClick={() => setStep('payment')} className="rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">Continue to Payment</button>
                  </div>
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div key="pay" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="mb-6 font-display text-3xl">Payment</h2>
                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-2 text-sm text-ink/60">
                      <Lock className="h-4 w-4 text-rose-500" /> Secured by 256-bit encryption
                    </div>
                    <div className="space-y-3">
                      {['Credit / Debit Card', 'UPI', 'Net Banking', 'Wallet'].map((m, i) => (
                        <label key={m} className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/10 p-4 transition-all hover:border-rose-500 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-500/5">
                          <input type="radio" name="pay" defaultChecked={i === 0} className="accent-rose-500" />
                          <CreditCard className="h-5 w-5 text-rose-500" />
                          <span className="text-sm font-medium">{m}</span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-3">
                      <input placeholder="Card number" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                      <div className="grid grid-cols-2 gap-3">
                        <input placeholder="MM / YY" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                        <input placeholder="CVV" className="h-11 rounded-lg border border-ink/15 bg-cream-100 px-4 text-sm focus:border-rose-500 focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep('shipping')} className="rounded-full border border-ink/15 px-6 py-3 text-sm hover:bg-rose-500/5">Back</button>
                    <button onClick={placeOrder} className="rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">
                      Pay ₹{total.toLocaleString('en-IN')}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center rounded-3xl bg-white py-16 text-center shadow-sm">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/10"
                  >
                    <PartyPopper className="h-10 w-10 text-rose-500" />
                  </motion.div>
                  <h2 className="mt-6 font-display text-3xl">Order Confirmed!</h2>
                  <p className="mt-2 max-w-sm text-sm text-ink/60">
                    Your order <span className="font-medium text-rose-600">#FB{Math.floor(Math.random() * 90000 + 10000)}</span> is confirmed. A confirmation has been sent to your email.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => navigate('/fashion')} className="rounded-full border border-rose-500 px-6 py-2.5 text-sm text-rose-600 hover:bg-rose-500 hover:text-white">Continue Shopping</button>
                    <button onClick={() => navigate('/health/dashboard')} className="rounded-full bg-rose-500 px-6 py-2.5 text-sm text-white hover:bg-rose-600">Track Order</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="h-fit">
            <div className="sticky top-28 rounded-2xl bg-ink p-6 text-cream-100">
              <h3 className="font-display text-xl">Order Summary</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-cream-100/70">
                  <span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-cream-100/70">
                  <span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-cream-100/70">
                  <span>Tax (5%)</span><span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="my-3 h-px bg-cream-100/10" />
                <div className="flex justify-between font-display text-lg">
                  <span>Total</span><span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-xs text-cream-100/60">
                <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-rose-300" /> Free worldwide shipping</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-rose-300" /> Insured delivery</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-rose-300" /> 7-day returns on ready-to-wear</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
