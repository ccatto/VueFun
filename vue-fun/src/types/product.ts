// vue-fun/src/types/product.ts

export interface ProductSize {
  value: string;
  label: string;
  available: boolean;
}

export interface ProductColor {
  value: string;
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  rating?: number;
  reviewCount?: number;
  features?: string[];
  sizes?: ProductSize[];
  colors?: ProductColor[];
  inStock: boolean;
  stockCount?: number;
  maxQuantity: number;
}

export interface AddToCartPayload {
  productId: number;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
