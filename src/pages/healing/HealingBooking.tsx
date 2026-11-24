import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Calendar, Clock, ChevronRight, Check, PartyPopper, Lock, Sparkles } from 'lucide-react';
import { healingServices, healingTimeSlots } from '@/data/healing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';

const dates = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

export default function HealingBooking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [date, setDate] = useState<number | null>(null);
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);

  const selected = healingServices.find((s) => s.id === service);

  const next = () => {
    if (step === 1 && !service) { toast.error('Please choose a service'); return; }
    if (step === 2 && (date === null || !time)) { toast.error('Please pick a date and time'); return; }
    setStep((s) => Math.min(s + 1, 3));
  };

  const confirm = () => {
    setSuccess(true);
    setTimeout(() => toast.success('Session confirmed!'), 300);
  };

  if (success) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream-50 px-6 pt-28 text-center text-ink">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-rose-400/10" style={{ width: 4, height: 4, left: `${(i * 61) % 100}%`, top: `${(i * 37) % 100}%` }} animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }} />
        ))}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }} className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/15">
          <PartyPopper className="h-10 w-10 text-rose-500" />
        </motion.div>
        <h1 className="mt-6 font-display text-4xl">Session Confirmed</h1>
        <p className="mt-3 max-w-sm text-sm text-ink/70">
          Your healing session is booked. A confirmation with preparation notes has been sent to your email. Take a breath — the work begins before we meet.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={() => navigate('/healing')} className="rounded-full border border-rose-400/40 px-6 py-2.5 text-sm text-rose-600 hover:bg-rose-500 hover:text-white">Back to Healing</button>
          <button onClick={() => navigate('/')} className="rounded-full bg-rose-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-600">Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-cream-50 pt-28 text-ink">
      <motion.div className="pointer-events-none absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.02]" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}>
        <svg viewBox="0 0 200 200" className="h-full w-full text-rose-500">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 100 100)`}>
              <ellipse cx="100" cy="40" rx="8" ry="30" fill="currentColor" />
            </g>
          ))}
        </svg>
      </motion.div>

      <section className="relative container-lux px-6 py-10 md:px-12">
        <div className="mb-10 text-center">
          <p className="eyebrow text-rose-500">Booking</p>
          <h1 className="font-display text-4xl text-ink md:text-5xl">Book a <span className="text-gold-gradient">session</span></h1>
        </div>

        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] md:gap-4">
          {['Service', 'Schedule', 'Confirm'].map((s, i) => (
            <div key={s} className="flex items-center gap-2 md:gap-4">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full border text-[0.7rem] ${
                step > i + 1 ? 'border-rose-500 bg-rose-500 text-white' : step === i + 1 ? 'border-rose-400 text-rose-500' : 'border-ink/20 text-ink/40'
              }`}>
                {step > i + 1 ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={step === i + 1 ? 'text-rose-500' : 'text-ink/40'}>{s}</span>
              {i < 2 && <ChevronRight className="h-4 w-4 text-ink/20" />}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                {healingServices.map((s) => {
                  const Icon = (Icons as any)[s.icon] || Icons.Sparkles;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                        service === s.id ? 'border-rose-500 bg-rose-500/10' : 'border-ink/15 hover:border-rose-400/50'
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/15">
                        <Icon className="h-5 w-5 text-rose-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-lg text-ink">{s.name}</p>
                        <p className="text-xs text-ink/60">{s.duration} · ₹{s.price.toLocaleString('en-IN')}</p>
                      </div>
                      {service === s.id && <Check className="h-5 w-5 text-rose-500" />}
                    </button>
                  );
                })}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white border border-rose-200/30 p-8">
                <Label className="mb-3 flex items-center gap-2 text-ink"><Calendar className="h-4 w-4 text-rose-500" /> Select a Date</Label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {dates.map((d, i) => (
                    <button key={i} onClick={() => setDate(i)} className={`flex flex-col items-center rounded-xl border p-3 transition-all ${date === i ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/15 hover:border-rose-400'}`}>
                      <span className="text-[0.65rem] uppercase">{d.toLocaleDateString('en', { weekday: 'short' })}</span>
                      <span className="font-display text-lg">{d.getDate()}</span>
                      <span className="text-[0.6rem] opacity-70">{d.toLocaleDateString('en', { month: 'short' })}</span>
                    </button>
                  ))}
                </div>
                <Label className="mb-3 mt-6 flex items-center gap-2 text-ink"><Clock className="h-4 w-4 text-rose-500" /> Select a Time</Label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {healingTimeSlots.map((t) => (
                    <button key={t} onClick={() => setTime(t)} className={`rounded-full border py-2.5 text-sm transition-all ${time === t ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/15 hover:border-rose-400'}`}>{t}</button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white border border-rose-200/30 p-8">
                <div className="mb-5 flex items-center gap-2 text-sm text-ink/60">
                  <Lock className="h-4 w-4 text-rose-500" /> Mock payment — no real charge
                </div>
                {selected && (
                  <div className="mb-5 rounded-xl bg-rose-500/10 p-4">
                    <p className="font-display text-lg text-ink">{selected.name}</p>
                    <p className="text-sm text-ink/60">{selected.duration} · {selected.tagline}</p>
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label className="mb-2 text-ink">Name</Label><Input placeholder="Your name" className="bg-ink/5 border-ink/15 text-ink placeholder:text-ink/40" /></div>
                  <div><Label className="mb-2 text-ink">Phone</Label><Input placeholder="+91 ..." className="bg-ink/5 border-ink/15 text-ink placeholder:text-ink/40" /></div>
                </div>
                <div className="mt-4"><Label className="mb-2 text-ink">Email</Label><Input type="email" placeholder="you@email.com" className="bg-ink/5 border-ink/15 text-ink placeholder:text-ink/40" /></div>
                <div className="mt-5 space-y-3">
                  {['Credit / Debit Card', 'UPI'].map((m, i) => (
                    <label key={m} className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/15 p-4 transition-all hover:border-rose-400 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-500/10">
                      <input type="radio" name="pay" defaultChecked={i === 0} className="accent-rose-500" />
                      <span className="text-sm font-medium text-ink">{m}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-ink/5 p-4 text-sm text-ink">
                  <div className="flex justify-between"><span className="text-ink/60">Session</span><span className="font-medium">₹{selected?.price.toLocaleString('en-IN') || '—'}</span></div>
                  <div className="mt-2 flex justify-between border-t border-ink/10 pt-2 font-display text-lg"><span>Total</span><span>₹{selected?.price.toLocaleString('en-IN') || '—'}</span></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 flex justify-between">
            <button onClick={() => setStep((s) => Math.max(1, s - 1))} className={`rounded-full border border-ink/20 px-6 py-3 text-sm text-ink ${step === 1 ? 'invisible' : 'hover:bg-rose-500/10'}`}>Back</button>
            {step < 3 ? (
              <button onClick={next} className="rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">Continue</button>
            ) : (
              <button onClick={confirm} className="flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">
                <Sparkles className="h-4 w-4" /> Confirm & Pay
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
