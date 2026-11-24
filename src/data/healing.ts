// Mock data for Aatmic Healing
export type HealingService = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  duration: string;
  price: number;
  image: string;
  benefits: string[];
};

const img = (id: string, w = 800, h = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const healingServices: HealingService[] = [
  {
    id: 'tarot',
    name: 'Tarot Reading',
    tagline: 'Clarity from the cards',
    description:
      'A guided tarot session to illuminate your path, uncover blocks and receive intuitive guidance on love, career and purpose.',
    icon: 'Sparkles',
    duration: '45 min',
    price: 2499,
    image: img('3052568'),
    benefits: ['Clarity on decisions', 'Emotional release', 'Intuitive insight'],
  },
  {
    id: 'energy-healing',
    name: 'Energy Healing',
    tagline: 'Reset your frequency',
    description:
      'A hands-on energy healing session that clears stagnant energy, restores flow and rebalances your subtle body.',
    icon: 'Zap',
    duration: '60 min',
    price: 3299,
    image: img('3052478'),
    benefits: ['Deep relaxation', 'Chakra clearing', 'Renewed vitality'],
  },
  {
    id: 'prana-healing',
    name: 'Prana Healing',
    tagline: 'Vital life force',
    description:
      'Pranic healing uses life-force energy to cleanse and energise the body, accelerating natural healing without touch.',
    icon: 'Wind',
    duration: '60 min',
    price: 2999,
    image: img('3568354'),
    benefits: ['Faster recovery', 'Pain relief', 'Immune boost'],
  },
  {
    id: 'meditation',
    name: 'Guided Meditation',
    tagline: 'Stillness, found',
    description:
      'A personalised guided meditation journey to quiet the mind, regulate the nervous system and reconnect with self.',
    icon: 'Brain',
    duration: '45 min',
    price: 1999,
    image: img('3822622'),
    benefits: ['Reduced anxiety', 'Better sleep', 'Inner calm'],
  },
  {
    id: 'aura-cleansing',
    name: 'Aura Cleansing',
    tagline: 'Clear your field',
    description:
      'A gentle cleansing of the auric field to release absorbed energies, protect your space and restore luminosity.',
    icon: 'Sun',
    duration: '50 min',
    price: 2799,
    image: img('3052362'),
    benefits: ['Lighter energy', 'Emotional clarity', 'Protection'],
  },
  {
    id: 'distance-healing',
    name: 'Distance Healing',
    tagline: 'Healing across space',
    description:
      'Energy knows no distance. Receive a full healing session remotely, with a follow-up voice note summary.',
    icon: 'Radio',
    duration: '45 min',
    price: 2299,
    image: img('3568354'),
    benefits: ['Heal from home', 'Flexible timing', 'Same efficacy'],
  },
  {
    id: 'chakra-balancing',
    name: 'Chakra Balancing',
    tagline: 'Align your centres',
    description:
      'A complete seven-chakra alignment session using sound, breath and energy to harmonise your entire being.',
    icon: 'Circle',
    duration: '70 min',
    price: 3499,
    image: img('3052478'),
    benefits: ['Full alignment', 'Emotional balance', 'Spiritual growth'],
  },
  {
    id: 'holistic-wellness',
    name: 'Holistic Wellness',
    tagline: 'The complete reset',
    description:
      'A signature 90-minute journey combining energy healing, chakra balancing and guided meditation for total renewal.',
    icon: 'Flower2',
    duration: '90 min',
    price: 4999,
    image: img('3822622'),
    benefits: ['Complete reset', 'Deep transformation', 'Lasting peace'],
  },
  {
    id: 'crystal-therapy',
    name: 'Crystal Therapy',
    tagline: 'Harness earth\'s gems',
    description:
      'Utilise the natural vibrations of crystals to amplify healing energy, restore balance and manifest intentions.',
    icon: 'Gem',
    duration: '50 min',
    price: 2699,
    image: img('3052568'),
    benefits: ['Energy amplification', 'Intention setting', 'Natural healing'],
  },
  {
    id: 'garba-sanskar',
    name: 'Garba Sanskar',
    tagline: 'Prenatal spiritual blessing',
    description:
      'A sacred prenatal session combining chanting, mudras and meditation to bless the mother and unborn child with positive energy.',
    icon: 'Heart',
    duration: '60 min',
    price: 3899,
    image: img('3568354'),
    benefits: ['Fetal bonding', 'Maternal wellness', 'Spiritual protection'],
  },
  {
    id: 'angel-card-reading',
    name: 'Angel Card Reading',
    tagline: 'Divine guidance awaits',
    description:
      'Connect with angelic wisdom through oracle cards. Receive divine messages and heavenly guidance for your journey.',
    icon: 'Wand2',
    duration: '45 min',
    price: 2399,
    image: img('3052478'),
    benefits: ['Divine guidance', 'Hope and clarity', 'Spiritual connection'],
  },
  {
    id: 'pebbles-therapy',
    name: 'Pebbles Therapy',
    tagline: 'Ancient stone wisdom',
    description:
      'Harness the grounding energy of ancient pebbles and stones placed on energy points to release tension and restore equilibrium.',
    icon: 'Layers',
    duration: '55 min',
    price: 2599,
    image: img('3052362'),
    benefits: ['Grounding energy', 'Deep relaxation', 'Physical release'],
  },
];

export const healingTestimonials = [
  { name: 'Priya M.', text: 'I walked in anxious and walked out weightless. The energy healing was profound.', service: 'Energy Healing' },
  { name: 'Karan V.', text: 'The tarot reading was eerily accurate. It gave me the clarity I needed for a big decision.', service: 'Tarot Reading' },
  { name: 'Ananya S.', text: 'Distance healing worked. I felt the shift during the session and slept like a baby after.', service: 'Distance Healing' },
  { name: 'Devansh R.', text: 'Chakra balancing left me feeling aligned for weeks. I now go monthly.', service: 'Chakra Balancing' },
];

export const healingTimeSlots = [
  '09:00 AM', '10:30 AM', '12:00 PM',
  '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM',
];
