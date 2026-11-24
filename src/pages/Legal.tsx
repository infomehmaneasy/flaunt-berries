import { useParams } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

type LegalContent = {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
};

const legalContent: Record<string, LegalContent> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'July 2026',
    sections: [
      { heading: 'Information We Collect', body: 'We collect information you provide directly — such as your name, email, phone, shipping address and medical reports when you choose to share them. We also collect usage data to improve your experience.' },
      { heading: 'How We Use Your Information', body: 'Your information is used to fulfil orders, schedule consultations, personalise nutrition plans, deliver healing sessions and communicate with you. We never sell your data to third parties.' },
      { heading: 'Medical Data', body: 'Any medical reports you upload are treated with the strictest confidentiality. They are reviewed only by your assigned nutritionist and stored securely. You may request deletion at any time.' },
      { heading: 'Data Security', body: 'We use industry-standard encryption and security measures to protect your information. Access is restricted to authorised personnel only.' },
      { heading: 'Your Rights', body: 'You have the right to access, correct or delete your personal data. To exercise these rights, contact us at hello@flauntberries.com.' },
    ],
  },
  refund: {
    title: 'Refund Policy',
    updated: 'July 2026',
    sections: [
      { heading: 'Fashion', body: 'Ready-to-wear pieces can be returned within 7 days of delivery, unworn and with original tags. Made-to-measure and couture pieces are non-returnable. Refunds are processed to the original payment method within 7–10 business days.' },
      { heading: 'Health Consultations', body: 'Single consultations are non-refundable once the session has been conducted. Monthly packages are refundable on a pro-rata basis for unused weeks, within the first 14 days.' },
      { heading: 'Healing Sessions', body: 'Sessions can be rescheduled up to 24 hours in advance at no cost. Cancellations within 24 hours are non-refundable.' },
      { heading: 'How to Request', body: 'To initiate a refund, email hello@flauntberries.com with your order ID and reason. Our team will respond within 48 hours.' },
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    updated: 'July 2026',
    sections: [
      { heading: 'Dispatch Times', body: 'Ready-to-wear ships within 3–5 business days. Couture and made-to-measure pieces ship in 4–6 weeks after measurements are confirmed.' },
      { heading: 'Domestic Shipping', body: 'Free shipping across India on all orders. Delivery in 3–7 business days after dispatch.' },
      { heading: 'International Shipping', body: 'We ship worldwide. Duties and taxes are calculated at checkout. Delivery in 7–14 business days depending on destination.' },
      { heading: 'Tracking', body: 'A tracking link is emailed once your order is dispatched. You can also track your order from your dashboard.' },
      { heading: 'Insurance', body: 'Every shipment is fully insured until it reaches you. In the rare event of loss or damage in transit, we will replace or refund.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'July 2026',
    sections: [
      { heading: 'Acceptance of Terms', body: 'By using our website and services, you agree to these terms. If you do not agree, please do not use our services.' },
      { heading: 'Services', body: 'Flaunt Berries offers fashion, clinical nutrition and spiritual healing services. All services are provided on a best-effort basis. Health outcomes vary by individual and are not guaranteed.' },
      { heading: 'Intellectual Property', body: 'All content on this site — including designs, images, text and branding — is the property of Flaunt Berries by Kajal and may not be reproduced without permission.' },
      { heading: 'User Conduct', body: 'You agree to provide accurate information and to use our services respectfully. Abuse, harassment or fraudulent activity will result in termination of service.' },
      { heading: 'Limitation of Liability', body: 'Flaunt Berries is not liable for indirect or consequential damages arising from the use of our services. Our liability is limited to the value of the service purchased.' },
    ],
  },
};

export default function Legal() {
  const { type } = useParams();
  const content = legalContent[type || 'privacy'] || legalContent.privacy;

  return (
    <div className="pt-28">
      <section className="bg-cream-200 py-16 text-center md:py-20">
        <div className="container-lux px-6 md:px-12">
          <SectionHeading eyebrow="Legal" title={<span className="text-gold-gradient">{content.title}</span>} subtitle={`Last updated · ${content.updated}`} />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-lux max-w-3xl space-y-8">
          {content.sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="font-display text-xl text-ink">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
