import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import toast from 'react-hot-toast';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success('Message sent. We will be in touch shortly.');
  };

  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading eyebrow="Get in Touch" title={<>Let's <span className="text-gold-gradient">connect</span></>} subtitle="For couture commissions, nutrition enquiries or healing sessions — we would love to hear from you." />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-lux grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label className="mb-2">First Name</Label><Input required placeholder="Jane" /></div>
                <div><Label className="mb-2">Last Name</Label><Input required placeholder="Doe" /></div>
              </div>
              <div className="mt-4"><Label className="mb-2">Email</Label><Input type="email" required placeholder="jane@email.com" /></div>
              <div className="mt-4"><Label className="mb-2">Phone</Label><Input placeholder="+91 ..." /></div>
              <div className="mt-4">
                <Label className="mb-2">Division</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select a division" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="healing">Aatmic Healing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4"><Label className="mb-2">Message</Label><Textarea rows={5} placeholder="Tell us how we can help..." /></div>
              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rose-500 py-3.5 text-sm font-medium text-white hover:bg-rose-600">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@flauntberries.com', href: 'mailto:hello@flauntberries.com' },
                { icon: Phone, label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/910000000000' },
                { icon: MapPin, label: 'Studio', value: 'New Delhi, India · Worldwide', href: '#' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 transition-colors group-hover:bg-rose-500">
                    <c.icon className="h-5 w-5 text-rose-500 transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/50">{c.label}</p>
                    <p className="font-display text-lg text-ink">{c.value}</p>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl bg-ink p-6 text-cream-100">
                <p className="font-display text-xl">Follow the journey</p>
                <p className="mt-1 text-sm text-cream-100/60">Behind-the-scenes, drops and healing circles.</p>
                <div className="mt-4 flex gap-3">
                  {[Instagram, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-400/30 text-rose-300 transition-all hover:bg-rose-500 hover:text-white">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
