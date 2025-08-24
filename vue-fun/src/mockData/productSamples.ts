// vue-fun/src/mockData/productSamples.ts

import type { Product } from '@/types/product';

export const sampleProduct: Product = {
  id: 1,
  name: 'Premium Hiking Boots',
  description: 'Experience unparalleled comfort...',
  price: 149.99,
  originalPrice: 199.99,
  category: 'Footwear',
  images: [
    /* ... */
  ],
  rating: 4,
  reviewCount: 127,
  features: [
    /* ... */
  ],
  sizes: [
    /* ... */
  ],
  colors: [
    /* ... */
  ],
  inStock: true,
  stockCount: 15,
  maxQuantity: 5,
};

export const relatedProducts: Product[] = [
  {
    id: 2,
    name: 'Tactical Combat Boots',
    description: 'Boots desc',
    category: 'Footwear',
    price: 199.99,
    images: [
      /* ... */
    ],
    inStock: true,
    maxQuantity: 5,
  },
  {
    id: 3,
    name: 'Outdoor Trail Runners',
    description: 'Runners desc',
    category: 'Footwear',
    price: 89.99,
    images: [
      /* ... */
    ],
    inStock: true,
    maxQuantity: 5,
  },
];
