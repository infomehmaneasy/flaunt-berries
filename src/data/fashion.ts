// Mock data for Flaunt Berries Fashion
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  fabric: string;
  description: string;
  rating: number;
  reviews: number;
  collection: string;
  isNew?: boolean;
  isCouture?: boolean;
};

const img = (id: string, w = 800, h = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const fashionCategories = [
  'New Arrivals',
  "Women's Wear",
  'Ethnic',
  'Western',
  'Bridal',
  'Party Wear',
  'Designer Dresses',
  'Couture',
  'Custom Outfits',
];

export const fashionCollections = [
  'Rose Gold Edit',
  'Mehendi Muse',
  'Vows & Veils',
  'Soirée Noir',
  'Atelier Couture',
];

export const fashionProducts: Product[] = [
  {
    id: 'f1',
    name: 'Saffron Lehenga Set',
    category: 'Bridal',
    price: 48500,
    mrp: 62000,
    image: img('1755385'),
    images: [img('1755385'), img('1755428'), img('1755380')],
    colors: ['#C98B79', '#7B7A4D', '#2F2F2F'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Raw silk with hand embroidery',
    description:
      'A sculpted bridal lehenga in raw silk, hand-embroidered with zardozi and sequin work. The blouse is structured for a couture silhouette and the dupatta is finished with a rose-gold scallop border.',
    rating: 4.9,
    reviews: 128,
    collection: 'Vows & Veils',
    isCouture: true,
  },
  {
    id: 'f2',
    name: 'Ivory Couture Gown',
    category: 'Designer Dresses',
    price: 32900,
    mrp: 41000,
    image: img('2703202'),
    images: [img('2703202'), img('2703182'), img('2703199')],
    colors: ['#F8F3EF', '#C98B79'],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: 'Italian crepe with satin lining',
    description:
      'A floor-sweeping couture gown in ivory Italian crepe with a sculpted shoulder and fluid skirt. Designed for the modern muse.',
    rating: 4.8,
    reviews: 86,
    collection: 'Atelier Couture',
    isCouture: true,
  },
  {
    id: 'f3',
    name: 'Olive Drape Saree',
    category: 'Ethnic',
    price: 18900,
    mrp: 24000,
    image: '/images/products/olive-drape-saree.jpg',
    images: ['/images/products/olive-drape-saree.jpg', img('1755385'), img('1755428')],
    colors: ['#7B7A4D', '#C98B79'],
    sizes: ['Free Size'],
    fabric: 'Handloom linen with thread work',
    description:
      'A handloom linen saree in olive with a rose-gold thread border. Comes with an unstitched blouse piece.',
    rating: 4.7,
    reviews: 54,
    collection: 'Rose Gold Edit',
  },
  {
    id: 'f4',
    name: 'Rose Gold Anarkali',
    category: 'Party Wear',
    price: 24750,
    mrp: 31000,
    image: img('1755428'),
    images: [img('1755428'), img('1755385'), img('1755380')],
    colors: ['#C98B79', '#E2A589'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Georgette with stone work',
    description:
      'A flowing anarkali in rose-gold georgette with delicate stone work on the yoke and a sheer layered skirt.',
    rating: 4.9,
    reviews: 102,
    collection: 'Mehendi Muse',
    isNew: true,
  },
  {
    id: 'f5',
    name: 'Noir Tailored Blazer',
    category: 'Western',
    price: 16800,
    mrp: 21000,
    image: img('7679720'),
    images: [img('7679720'), img('7679719'), img('7679721')],
    colors: ['#2F2F2F', '#7B7A4D'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Wool blend with satin lapel',
    description:
      'A sharply tailored blazer in noir wool blend with a satin lapel. A wardrobe staple for the woman who means business.',
    rating: 4.6,
    reviews: 47,
    collection: 'Soirée Noir',
  },
  {
    id: 'f6',
    name: 'Blush Silk Co-ord',
    category: "Women's Wear",
    price: 14200,
    mrp: 18500,
    image: img('2065200'),
    images: [img('2065200'), img('2065202'), img('2065204')],
    colors: ['#F8F3EF', '#E2A589'],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: 'Mulberry silk',
    description:
      'A blush mulberry silk co-ord set with a cropped shirt and high-waist trouser. Effortless luxury for day to dusk.',
    rating: 4.8,
    reviews: 73,
    collection: 'Rose Gold Edit',
    isNew: true,
  },
  {
    id: 'f7',
    name: 'Gilded Sherwani Set',
    category: 'Bridal',
    price: 56800,
    mrp: 72000,
    image: '/images/products/gilded-sherwani.jpg',
    images: ['/images/products/gilded-sherwani.jpg', img('2703202'), img('2703182')],
    colors: ['#C98B79', '#D69E6B'],
    sizes: ['38', '40', '42', '44', '46'],
    fabric: 'Jacquard silk with hand zardozi',
    description:
      'A gilded sherwani set in jacquard silk with hand zardozi work, paired with a churidar and matching stole.',
    rating: 5.0,
    reviews: 41,
    collection: 'Vows & Veils',
    isCouture: true,
  },
  {
    id: 'f8',
    name: 'Meadow Midi Dress',
    category: 'Designer Dresses',
    price: 12400,
    mrp: 16000,
    image: img('2065202'),
    images: [img('2065202'), img('2065200'), img('2065204')],
    colors: ['#7B7A4D', '#F8F3EF'],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: 'Viscose satin',
    description:
      'A fluid midi dress in meadow olive viscose satin with a cowl neckline and bias-cut skirt.',
    rating: 4.5,
    reviews: 38,
    collection: 'Atelier Couture',
    isNew: true,
  },
];

export const fashionFilters = {
  colors: [
    { name: 'Rose Gold', hex: '#C98B79' },
    { name: 'Soft Beige', hex: '#F8F3EF' },
    { name: 'Olive', hex: '#7B7A4D' },
    { name: 'Noir', hex: '#2F2F2F' },
    { name: 'Ivory', hex: '#FFFFFF' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'Free Size'],
  priceRanges: [
    { label: 'Under ₹15,000', min: 0, max: 15000 },
    { label: '₹15,000 – ₹30,000', min: 15000, max: 30000 },
    { label: '₹30,000 – ₹50,000', min: 30000, max: 50000 },
    { label: '₹50,000+', min: 50000, max: 1000000 },
  ],
  collections: fashionCollections,
};

export const fashionReviews = [
  {
    name: 'Aanya Mehta',
    rating: 5,
    text: 'The craftsmanship is unreal. Felt like couture from a Paris atelier but with soul.',
    date: '2 weeks ago',
  },
  {
    name: 'Riya Sharma',
    rating: 5,
    text: 'Wore the lehenga for my reception — compliments did not stop. Worth every rupee.',
    date: '1 month ago',
  },
  {
    name: 'Sara Khan',
    rating: 4,
    text: 'Beautiful fabric and fit. Custom stitching was precise to my measurements.',
    date: '1 month ago',
  },
];
