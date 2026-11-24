import { generalFaqs } from '@/data/common';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeading from '@/components/SectionHeading';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  const navigate = useNavigate();
  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading eyebrow="Help Center" title={<>Frequently <span className="text-gold-gradient">asked</span></>} subtitle="Everything you need to know about our three divisions, bookings, shipping and more." />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-lux max-w-3xl">
          <Accordion type="single" collapsible className="rounded-2xl bg-white p-2 shadow-sm">
            {generalFaqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="px-4 text-left font-display text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-ink/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl bg-ink p-8 text-center text-cream-100">
            <h3 className="font-display text-2xl">Still have questions?</h3>
            <p className="mt-2 text-sm text-cream-100/60">Our team is here to help, personally.</p>
            <button onClick={() => navigate('/contact')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3 text-sm font-medium text-white hover:bg-rose-600">
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
