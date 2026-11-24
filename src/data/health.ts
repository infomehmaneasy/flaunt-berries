// Mock data for Flaunt Berries Health
export type Disease = {
  id: string;
  name: string;
  tagline: string;
  icon: string; // lucide icon name
  image: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  benefits: string[];
  dietImportance: string;
  faqs: { q: string; a: string }[];
  testimonials: { name: string; text: string; result: string }[];
};

export type Package = {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice: number;
  features: string[];
  popular?: boolean;
  accent: 'rose' | 'olive' | 'cream';
};

const img = (id: string, w = 800, h = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const healthCategories = [
  { id: 'weight-loss', name: 'Weight Loss', icon: 'TrendingDown', tagline: 'Sustainable, clinical fat loss', image: img('2611817') },
  { id: 'weight-gain', name: 'Weight Gain', icon: 'TrendingUp', tagline: 'Healthy mass, the right way', image: img('1640777') },
  { id: 'pcos', name: 'PCOS', icon: 'Flower2', tagline: 'Balance hormones, reclaim cycles', image: img('4046718') },
  { id: 'thyroid', name: 'Thyroid', icon: 'Activity', tagline: 'Tame T3, T4 & TSH', image: img('3939383') },
  { id: 'diabetes', name: 'Diabetes', icon: 'Droplet', tagline: 'Stabilise sugar, naturally', image: img('3683101') },
  { id: 'heart', name: 'Heart Health', icon: 'HeartPulse', tagline: 'Cardiac-grade nutrition', image: img('4386466') },
  { id: 'gut', name: 'Gut Health', icon: 'Leaf', tagline: 'Heal from within', image: img('4750274') },
  { id: 'kidney', name: 'Kidney', icon: 'ShieldPlus', tagline: 'Renal-safe meal plans', image: img('248412') },
  { id: 'fatty-liver', name: 'Fatty Liver', icon: 'GlassWater', tagline: 'Reverse NAFLD', image: img('4040692') },
  { id: 'pregnancy', name: 'Pregnancy', icon: 'Baby', tagline: 'Nourish two lives', image: img('3933222') },
  { id: 'fertility', name: 'Fertility', icon: 'Sparkles', tagline: 'Fertility-first nutrition', image: img('3752834') },
  { id: 'cancer', name: 'Cancer Nutrition', icon: 'Ribbon', tagline: 'Supportive oncology diet', image: img('3661193') },
  { id: 'child', name: 'Child Nutrition', icon: 'Baby', tagline: 'Grow strong, grow right', image: img('8434697') },
  { id: 'women', name: "Women's Health", icon: 'Venus', tagline: 'Hormones, iron & energy', image: img('3683101') },
  { id: 'sports', name: 'Sports Nutrition', icon: 'Dumbbell', tagline: 'Performance fuel', image: img('4750304') },
  { id: 'corporate', name: 'Corporate Wellness', icon: 'Briefcase', tagline: 'Energy for high performers', image: img('3184465') },
  { id: 'senior', name: 'Senior Citizen', icon: 'HeartHandshake', tagline: 'Vitality at every age', image: img('8434621') },
];

const baseDisease = (id: string, name: string, tagline: string, image: string): Disease => ({
  id,
  name,
  tagline,
  icon: 'Activity',
  image,
  overview: `${name} requires a personalised, clinically-guided nutrition approach. At Flaunt Berries Health, we blend evidence-based diet therapy with lifestyle medicine to address root causes — not just symptoms. Your plan is built around your labs, your routine and your goals.`,
  symptoms: [
    'Persistent fatigue and low energy',
    'Unexplained weight changes',
    'Disrupted sleep and mood swings',
    'Digestive discomfort and bloating',
  ],
  causes: [
    'Sedentary lifestyle and poor sleep',
    'Highly processed, low-fibre diet',
    'Chronic stress and cortisol imbalance',
    'Nutrient deficiencies',
  ],
  benefits: [
    'Improved energy and mental clarity',
    'Sustainable, healthy body composition',
    'Balanced hormones and better sleep',
    'Reduced reliance on medication over time',
  ],
  dietImportance:
    'Food is the first medicine. A structured, nutrient-dense plan reduces inflammation, supports metabolic function and creates the conditions for your body to heal itself. Every plan is reviewed by a clinical nutritionist.',
  faqs: [
    { q: 'Do I need medical reports before starting?', a: 'Not mandatory, but recent reports help us personalise your plan precisely. You can upload them during booking.' },
    { q: 'How often will I speak to my nutritionist?', a: 'Weekly check-ins are included in all monthly packages, with async support on chat.' },
    { q: 'Is the diet plan suitable for vegetarians?', a: 'Absolutely. Every plan is tailored to your preferences, allergies and cultural cuisine.' },
    { q: 'Can I pause my plan during travel?', a: 'Yes, plans can be paused for up to 14 days within a 3 or 6 month package.' },
  ],
  testimonials: [
    { name: 'Nidhi R.', text: 'Lost 8kg in 3 months without starving. My PCOS symptoms reversed.', result: '-8kg in 3 months' },
    { name: 'Arjun S.', text: 'My HbA1c dropped from 7.8 to 6.1. Doctors were stunned.', result: 'HbA1c 7.8 → 6.1' },
    { name: 'Meera P.', text: 'The plan fit my busy corporate life. Energy is through the roof.', result: 'Energy + focus' },
  ],
});

export const healthDiseases: Disease[] = [
  baseDisease('weight-loss', 'Weight Loss', 'Sustainable, clinical fat loss', img('2611817')),
  baseDisease('weight-gain', 'Weight Gain', 'Healthy mass, the right way', img('1640777')),
  baseDisease('pcos', 'PCOS', 'Balance hormones, reclaim cycles', img('4046718')),
  baseDisease('thyroid', 'Thyroid', 'Tame T3, T4 & TSH', img('3939383')),
  baseDisease('diabetes', 'Diabetes', 'Stabilise sugar, naturally', img('3683101')),
  baseDisease('heart', 'Heart Health', 'Cardiac-grade nutrition', img('4386466')),
  baseDisease('gut', 'Gut Health', 'Heal from within', img('4750274')),
  baseDisease('kidney', 'Kidney', 'Renal-safe meal plans', img('248412')),
  baseDisease('fatty-liver', 'Fatty Liver', 'Reverse NAFLD', img('4040692')),
  baseDisease('pregnancy', 'Pregnancy', 'Nourish two lives', img('3933222')),
  baseDisease('fertility', 'Fertility', 'Fertility-first nutrition', img('3752834')),
  baseDisease('cancer', 'Cancer Nutrition', 'Supportive oncology diet', img('3661193')),
  baseDisease('child', 'Child Nutrition', 'Grow strong, grow right', img('8434697')),
  baseDisease('women', "Women's Health", 'Hormones, iron & energy', img('3683101')),
  baseDisease('sports', 'Sports Nutrition', 'Performance fuel', img('4750304')),
  baseDisease('corporate', 'Corporate Wellness', 'Energy for high performers', img('3184465')),
  baseDisease('senior', 'Senior Citizen', 'Vitality at every age', img('8434621')),
];

export const healthPackages: Package[] = [
  {
    id: 'one',
    name: 'One Consultation',
    duration: 'Single session',
    price: 2499,
    originalPrice: 3499,
    features: [
      '60-min clinical consult',
      'Basic diet assessment',
      'Starter meal framework',
      '1 follow-up email',
    ],
    accent: 'cream',
  },
  {
    id: 'one-month',
    name: '1 Month Plan',
    duration: '30 days',
    price: 7999,
    originalPrice: 11999,
    features: [
      '4 weekly consultations',
      'Personalised meal plan',
      'Recipe library access',
      'Weekly progress review',
      'Chat support (Mon–Sat)',
    ],
    accent: 'rose',
    popular: true,
  },
  {
    id: 'three-month',
    name: '3 Months Plan',
    duration: '90 days',
    price: 19999,
    originalPrice: 29999,
    features: [
      '12 weekly consultations',
      'Advanced lab-based plan',
      'Supplement guidance',
      'Body composition tracking',
      'Priority chat support',
    ],
    accent: 'olive',
  },
  {
    id: 'six-month',
    name: '6 Months Plan',
    duration: '180 days',
    price: 34999,
    originalPrice: 54999,
    features: [
      '24 weekly consultations',
      'Quarterly lab review',
      'Lifestyle & sleep coaching',
      'Maintenance phase',
      'Lifetime community access',
    ],
    accent: 'rose',
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Plan',
    duration: 'Trimester-wise',
    price: 24999,
    originalPrice: 34999,
    features: [
      'Trimester-specific plans',
      'Prenatal nutrition guidance',
      'Postpartum recovery plan',
      'Lactation support',
      'Weekly check-ins',
    ],
    accent: 'olive',
  },
  {
    id: 'fertility',
    name: 'Fertility Plan',
    duration: '90 days',
    price: 22999,
    originalPrice: 31999,
    features: [
      'Fertility-optimising diet',
      'Hormone balance protocol',
      'Supplement guidance',
      'Stress & sleep coaching',
      'Partner nutrition tips',
    ],
    accent: 'cream',
  },
  {
    id: 'therapeutic',
    name: 'Therapeutic Plan',
    duration: '90–180 days',
    price: 27999,
    originalPrice: 39999,
    features: [
      'Disease-specific protocol',
      'Lab-driven adjustments',
      'Medication coordination',
      'Quarterly review',
      'Priority support',
    ],
    accent: 'rose',
  },
];

export const healthStats = [
  { label: 'Clients Transformed', value: 4200, suffix: '+' },
  { label: 'Years of Practice', value: 12, suffix: '' },
  { label: 'Avg. Client Rating', value: 4.9, suffix: '/5', decimals: 1 },
  { label: 'Diet Plans Delivered', value: 18000, suffix: '+' },
];
