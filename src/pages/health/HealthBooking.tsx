import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Upload, Check, Calendar, Clock, ChevronRight, PartyPopper, Lock } from 'lucide-react';
import { healthCategories } from '@/data/health';
import { healthPackages } from '@/data/health';
import { healingTimeSlots } from '@/data/healing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';

const dates = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

export default function HealthBooking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [disease, setDisease] = useState('');
  const [pkg, setPkg] = useState('');
  const [date, setDate] = useState<number | null>(null);
  const [time, setTime] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [success, setSuccess] = useState(false);

  const next = () => {
    if (step === 1 && (!disease || !pkg)) { toast.error('Please select a condition and package'); return; }
    if (step === 2 && (date === null || !time)) { toast.error('Please pick a date and time'); return; }
    setStep((s) => Math.min(s + 1, 4));
  };

  const pay = () => {
    setSuccess(true);
    setTimeout(() => toast.success('Appointment confirmed!'), 300);
  };

  if (success) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-28">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }} className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/10">
          <PartyPopper className="h-10 w-10 text-rose-500" />
        </motion.div>
        <h1 className="mt-6 font-display text-4xl">Appointment Confirmed</h1>
        <p className="mt-3 max-w-sm text-center text-sm text-ink/60">
          Your consultation is booked. A confirmation and video link have been sent to your email. We can't wait to begin your journey.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={() => navigate('/health/dashboard')} className="rounded-full bg-rose-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-600">Go to Dashboard</button>
          <button onClick={() => navigate('/health')} className="rounded-full border border-rose-500 px-6 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-500 hover:text-white">Back to Health</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <section className="container-lux px-6 py-10 md:px-12">
        <div className="mb-10 text-center">
          <p className="eyebrow">Booking</p>
          <h1 className="font-display text-4xl md:text-5xl">Book your <span className="text-gold-gradient">consultation</span></h1>
        </div>

        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] md:gap-4">
          {['Details', 'Schedule', 'Reports', 'Payment'].map((s, i) => (
            <div key={s} className="flex items-center gap-2 md:gap-4">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full border text-[0.7rem] ${
                step > i + 1 ? 'border-rose-500 bg-rose-500 text-white' : step === i + 1 ? 'border-rose-500 text-rose-600' : 'border-ink/20 text-ink/40'
              }`}>
                {step > i + 1 ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={step === i + 1 ? 'text-rose-600' : 'text-ink/40'}>{s}</span>
              {i < 3 && <ChevronRight className="h-4 w-4 text-ink/20" />}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5 rounded-3xl bg-white p-8 shadow-sm">
                <div>
                  <Label className="mb-2">Select Condition</Label>
                  <Select value={disease} onValueChange={setDisease}>
                    <SelectTrigger><SelectValue placeholder="Choose a condition" /></SelectTrigger>
                    <SelectContent>
                      {healthCategories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2">Select Package</Label>
                  <Select value={pkg} onValueChange={setPkg}>
                    <SelectTrigger><SelectValue placeholder="Choose a package" /></SelectTrigger>
                    <SelectContent>
                      {healthPackages.map((p) => <SelectItem key={p.id} value={p.id}>{p.name} — ₹{p.price.toLocaleString('en-IN')}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label className="mb-2">Full Name</Label><Input placeholder="Your name" /></div>
                  <div><Label className="mb-2">Phone</Label><Input placeholder="+91 ..." /></div>
                </div>
                <div><Label className="mb-2">Email</Label><Input type="email" placeholder="you@email.com" /></div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white p-8 shadow-sm">
                <Label className="mb-3 flex items-center gap-2"><Calendar className="h-4 w-4 text-rose-500" /> Select a Date</Label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setDate(i)}
                      className={`flex flex-col items-center rounded-xl border p-3 transition-all ${
                        date === i ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/10 hover:border-rose-500'
                      }`}
                    >
                      <span className="text-[0.65rem] uppercase">{d.toLocaleDateString('en', { weekday: 'short' })}</span>
                      <span className="font-display text-lg">{d.getDate()}</span>
                      <span className="text-[0.6rem] opacity-70">{d.toLocaleDateString('en', { month: 'short' })}</span>
                    </button>
                  ))}
                </div>

                <Label className="mb-3 mt-6 flex items-center gap-2"><Clock className="h-4 w-4 text-rose-500" /> Select a Time</Label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {healingTimeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`rounded-full border py-2.5 text-sm transition-all ${
                        time === t ? 'border-rose-500 bg-rose-500 text-white' : 'border-ink/10 hover:border-rose-500'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white p-8 shadow-sm">
                <Label className="mb-3 flex items-center gap-2"><Upload className="h-4 w-4 text-rose-500" /> Upload Medical Reports (optional)</Label>
                <button
                  onClick={() => { setUploaded(true); toast.success('Report uploaded'); }}
                  className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-10 transition-all ${
                    uploaded ? 'border-rose-500 bg-rose-500/5' : 'border-ink/15 hover:border-rose-500'
                  }`}
                >
                  {uploaded ? <Check className="h-8 w-8 text-rose-500" /> : <Upload className="h-8 w-8 text-ink/40" />}
                  <p className="text-sm font-medium">{uploaded ? 'Report uploaded' : 'Click to upload'}</p>
                  <p className="text-xs text-ink/50">PDF, JPG, PNG up to 10MB</p>
                </button>
                <p className="mt-4 text-xs text-ink/50">Recent lab reports help us personalise your plan precisely. You can skip this step and email them later.</p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center gap-2 text-sm text-ink/60">
                  <Lock className="h-4 w-4 text-rose-500" /> Mock payment — no real charge
                </div>
                <div className="space-y-3">
                  {['Credit / Debit Card', 'UPI', 'Net Banking'].map((m, i) => (
                    <label key={m} className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/10 p-4 transition-all hover:border-rose-500 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-500/5">
                      <input type="radio" name="pay" defaultChecked={i === 0} className="accent-rose-500" />
                      <span className="text-sm font-medium">{m}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  <Input placeholder="Card number" />
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="MM / YY" />
                    <Input placeholder="CVV" />
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-cream-200 p-4 text-sm">
                  <div className="flex justify-between"><span className="text-ink/60">Package</span><span className="font-medium">₹7,999</span></div>
                  <div className="mt-1 flex justify-between"><span className="text-ink/60">Tax</span><span className="font-medium">₹0</span></div>
                  <div className="mt-2 flex justify-between border-t border-ink/10 pt-2 font-display text-lg"><span>Total</span><span>₹7,999</span></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className={`rounded-full border border-ink/15 px-6 py-3 text-sm ${step === 1 ? 'invisible' : 'hover:bg-rose-500/5'}`}
            >
              Back
            </button>
            {step < 4 ? (
              <button onClick={next} className="rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">
                Continue
              </button>
            ) : (
              <button onClick={pay} className="rounded-full bg-rose-500 px-8 py-3 text-sm font-medium text-white hover:bg-rose-600">
                Pay & Confirm
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
