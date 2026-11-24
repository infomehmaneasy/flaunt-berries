// Common mock data: testimonials, blogs, faqs
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  division: 'Fashion' | 'Health' | 'Healing';
  image: string;
};

const img = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop`;

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Aanya Mehta',
    role: 'Bride, Mumbai',
    text: 'Flaunt Berries dressed me for my wedding and healed my gut before the big day. A brand that truly cares.',
    division: 'Fashion',
    image: img('1239291'),
  },
  {
    id: 't2',
    name: 'Dr. Riya Sharma',
    role: 'Client, Delhi',
    text: 'My PCOS reversed in 4 months. The clinical nutrition plan was precise and the support was constant.',
    division: 'Health',
    image: img('415829'),
  },
  {
    id: 't3',
    name: 'Karan Verma',
    role: 'Entrepreneur',
    text: 'The distance healing session helped me through the hardest month of my life. Profound work.',
    division: 'Healing',
    image: img('697509'),
  },
  {
    id: 't4',
    name: 'Meera Patel',
    role: 'Mother of two',
    text: 'Postpartum nutrition plan gave me my energy back. I feel like myself again.',
    division: 'Health',
    image: img('733872'),
  },
  {
    id: 't5',
    name: 'Sara Khan',
    role: 'Fashion Editor',
    text: 'The couture gown I wore to the gala was a showstopper. Flaunt Berries is the new standard of luxury.',
    division: 'Fashion',
    image: img('774909'),
  },
  {
    id: 't6',
    name: 'Devansh Rao',
    role: 'Yoga Teacher',
    text: 'Chakra balancing left me aligned for weeks. Kajal has a rare gift.',
    division: 'Healing',
    image: img('1220757'),
  },
];

export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const blogImg = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

export const blogs: Blog[] = [
  {
    id: 'b1',
    title: 'The Rose Gold Edit: How to Style Heirloom Tones in 2026',
    excerpt: 'A masterclass in styling rose gold, olive and ivory for the modern Indian wardrobe.',
    category: 'Fashion',
    date: 'Jul 12, 2026',
    readTime: '6 min',
    image: blogImg('1755385'),
  },
  {
    id: 'b2',
    title: 'Healing PCOS with Food: A Clinical Nutritionist’s Guide',
    excerpt: 'The five pillars of a PCOS-reversing diet, backed by practice and patient results.',
    category: 'Health',
    date: 'Jul 5, 2026',
    readTime: '8 min',
    image: blogImg('4046718'),
  },
  {
    id: 'b3',
    title: 'Understanding Your Aura: A Beginner’s Guide',
    excerpt: 'What your aura says about you, and how to keep it clear in a noisy world.',
    category: 'Healing',
    date: 'Jun 28, 2026',
    readTime: '5 min',
    image: blogImg('3052362'),
  },
  {
    id: 'b4',
    title: 'Couture or Custom? Choosing the Right Bridal Path',
    excerpt: 'When to invest in couture and when custom stitching is the smarter luxury.',
    category: 'Fashion',
    date: 'Jun 20, 2026',
    readTime: '7 min',
    image: blogImg('1755428'),
  },
  {
    id: 'b5',
    title: 'Gut Health 101: Why Your Second Brain Matters',
    excerpt: 'Everything you need to know about the gut-brain axis and healing from within.',
    category: 'Health',
    date: 'Jun 10, 2026',
    readTime: '9 min',
    image: blogImg('4750274'),
  },
  {
    id: 'b6',
    title: 'A Daily Energy Practice for High Performers',
    excerpt: 'A 10-minute morning routine to clear your field and protect your energy.',
    category: 'Healing',
    date: 'Jun 2, 2026',
    readTime: '4 min',
    image: blogImg('3822622'),
  },
];

export const generalFaqs = [
  { q: 'What is Flaunt Berries by Kajal?', a: 'Flaunt Berries is a luxury parent brand with three divisions — Fashion, Health (clinical nutrition), and Aatmic Healing (energy & spiritual healing) — all founded by Kajal Kashyap.' },
  { q: 'Do you ship internationally?', a: 'Yes. Fashion orders ship worldwide. Duties and taxes are calculated at checkout.' },
  { q: 'Are nutrition plans available online?', a: 'All consultations are available virtually. You can book a session from anywhere in the world.' },
  { q: 'How do I book a healing session?', a: 'Visit the Aatmic Healing section, choose a service, pick a slot and confirm. Distance healing is available for remote clients.' },
  { q: 'What is your return policy for fashion?', a: 'Made-to-measure and couture pieces are non-returnable. Ready-to-wear can be returned within 7 days, unworn.' },
  { q: 'Can I gift a consultation?', a: 'Absolutely. Gift cards are available for all three divisions and never expire.' },
];

export const aboutTimeline = [
  { year: '2014', title: 'The First Stitch', text: 'Kajal begins bespoke couture from a home studio in Delhi.' },
  { year: '2018', title: 'Flaunt Berries Fashion', text: 'The fashion division is born, dressing brides across India.' },
  { year: '2021', title: 'Flaunt Berries Health', text: 'A clinical nutrition practice launches, transforming 4,000+ lives.' },
  { year: '2024', title: 'Aatmic Healing', text: 'The spiritual healing division opens, completing the trinity.' },
];

export const aboutValues = [
  { icon: 'Sparkles', title: 'Craftsmanship', text: 'Every stitch, every plan, every session is made with intention.' },
  { icon: 'Heart', title: 'Care', text: 'We treat each client as the only one. Deeply, personally, fully.' },
  { icon: 'Leaf', title: 'Wholeness', text: 'Fashion, food and spirit — we believe true luxury is holistic.' },
  { icon: 'Gem', title: 'Excellence', text: 'We hold a standard that few dare to. And we never lower it.' },
];
