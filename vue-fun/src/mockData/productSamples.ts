// vue-fun/src/mockData/productSamples.ts

import type { Product } from '@/types/product';

export const sampleProduct: Product = {
  id: 1,
  name: 'Premium Walking Boot',
  description: 'Orthopedic walking boot designed for post-injury recovery and rehabilitation. Features adjustable air cushioning, rigid sole protection, and breathable interior lining for optimal comfort during healing.',
  price: 89.99,
  originalPrice: 119.99,
  category: 'Medical Equipment',
  images: [
    /* ... */
  ],
  rating: 4,
  reviewCount: 127,
  features: [
    'Adjustable air cushioning system',
    'Rigid rocker sole for natural walking motion',
    'Breathable moisture-wicking liner',
    'Low-profile design fits most shoes',
    'Universal left/right compatibility',
    'Easy-release buckles and straps'
  ],
  sizes: [
    { id: 'xs', name: 'X-Small', value: 'XS' },
    { id: 's', name: 'Small', value: 'S' },
    { id: 'm', name: 'Medium', value: 'M' },
    { id: 'l', name: 'Large', value: 'L' },
    { id: 'xl', name: 'X-Large', value: 'XL' }
  ],
  colors: [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'gray', name: 'Gray', hex: '#808080' }
  ],
  inStock: true,
  stockCount: 15,
  maxQuantity: 5,
};

export const relatedProducts: Product[] = [
  {
    id: 2,
    name: 'Adjustable Aluminum Crutches',
    description: 'Lightweight aluminum crutches with comfortable underarm pads and non-slip rubber tips. Height adjustable from 4\'2" to 5\'10".',
    category: 'Medical Equipment',
    price: 34.99,
    images: [
      /* ... */
    ],
    inStock: true,
    maxQuantity: 5,
  },
  {
    id: 3,
    name: 'Forearm Crutches (Pair)',
    description: 'Ergonomic forearm crutches with adjustable cuff and comfortable grip handles. Ideal for long-term mobility support.',
    category: 'Medical Equipment',
    price: 49.99,
    images: [
      /* ... */
    ],
    inStock: true,
    maxQuantity: 5,
  },
];