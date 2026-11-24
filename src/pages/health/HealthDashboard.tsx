import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, FileText, Salad, CreditCard, Download, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

const appointments = [
  { id: 1, disease: 'PCOS', date: 'Aug 2, 2026', time: '10:30 AM', status: 'upcoming' },
  { id: 2, disease: 'Weight Loss', date: 'Jul 18, 2026', time: '04:00 PM', status: 'completed' },
  { id: 3, disease: 'Weight Loss', date: 'Jul 11, 2026', time: '04:00 PM', status: 'completed' },
];

const dietPlans = [
  { id: 1, week: 'Week 1', title: 'Foundation Plan', meals: 5, calories: 1600 },
  { id: 2, week: 'Week 2', title: 'Hormone Balance', meals: 5, calories: 1550 },
  { id: 3, week: 'Week 3', title: 'Metabolism Boost', meals: 6, calories: 1650 },
];

const reports = [
  { id: 1, name: 'Blood Panel — July', date: 'Jul 20, 2026' },
  { id: 2, name: 'Hormone Profile', date: 'Jul 05, 2026' },
];

const payments = [
  { id: 1, item: '3 Months Plan', amount: 19999, date: 'Jul 01, 2026', status: 'Paid' },
  { id: 2, item: 'One Consultation', amount: 2499, date: 'Jun 15, 2026', status: 'Paid' },
];

const tabs = [
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'diet', label: 'Diet Plans', icon: Salad },
  { id: 'payments', label: 'Payments', icon: CreditCard },
];

export default function HealthDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('appointments');

  return (
    <div className="pt-28">
      <section className="container-lux px-6 py-10 md:px-12">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1 className="font-display text-3xl md:text-4xl">Your <span className="text-gold-gradient">wellness</span> dashboard</h1>
          </div>
          <button onClick={() => navigate('/health/book')} className="rounded-full bg-rose-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-600">
            Book New Appointment
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Appointments', value: '3', icon: Calendar },
            { label: 'Active Plan', value: '3 Months', icon: Salad },
            { label: 'Weight Lost', value: '5.2 kg', icon: ChevronRight },
            { label: 'Next Check-in', value: 'Aug 2', icon: Clock },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 shadow-sm">
              <s.icon className="h-5 w-5 text-rose-500" />
              <p className="mt-2 font-display text-2xl">{s.value}</p>
              <p className="text-xs text-ink/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  tab === t.id ? 'bg-rose-500 text-white' : 'bg-white text-ink/70 hover:bg-rose-500/10'
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {tab === 'appointments' && (
                  <div className="space-y-4">
                    {appointments.map((a) => (
                      <div key={a.id} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.status === 'upcoming' ? 'bg-rose-500/10' : 'bg-olive-500/10'}`}>
                            <Calendar className={`h-5 w-5 ${a.status === 'upcoming' ? 'text-rose-500' : 'text-olive-600'}`} />
                          </div>
                          <div>
                            <p className="font-display text-lg">{a.disease}</p>
                            <p className="text-sm text-ink/55">{a.date} · {a.time}</p>
                          </div>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${a.status === 'upcoming' ? 'bg-rose-500/10 text-rose-600' : 'bg-olive-500/10 text-olive-600'}`}>
                          {a.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'reports' && (
                  <div className="space-y-4">
                    {reports.map((r) => (
                      <div key={r.id} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10">
                            <FileText className="h-5 w-5 text-rose-500" />
                          </div>
                          <div>
                            <p className="font-display text-lg">{r.name}</p>
                            <p className="text-sm text-ink/55">{r.date}</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 rounded-full border border-rose-500 px-4 py-2 text-sm text-rose-600 hover:bg-rose-500 hover:text-white">
                          <Download className="h-4 w-4" /> Download
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'diet' && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {dietPlans.map((d) => (
                      <div key={d.id} className="rounded-2xl bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600">{d.week}</span>
                          <Salad className="h-5 w-5 text-olive-600" />
                        </div>
                        <h3 className="mt-3 font-display text-xl">{d.title}</h3>
                        <div className="mt-3 flex gap-4 text-sm text-ink/60">
                          <span>{d.meals} meals/day</span>
                          <span>·</span>
                          <span>{d.calories} kcal</span>
                        </div>
                        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-rose-500 py-2.5 text-sm font-medium text-white hover:bg-rose-600">
                          <Download className="h-4 w-4" /> Download Plan
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'payments' && (
                  <div className="space-y-4">
                    {payments.map((p) => (
                      <div key={p.id} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10">
                            <CreditCard className="h-5 w-5 text-rose-500" />
                          </div>
                          <div>
                            <p className="font-display text-lg">{p.item}</p>
                            <p className="text-sm text-ink/55">{p.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-lg">₹{p.amount.toLocaleString('en-IN')}</p>
                          <span className="inline-flex items-center gap-1 text-xs text-olive-600"><CheckCircle2 className="h-3 w-3" /> {p.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
