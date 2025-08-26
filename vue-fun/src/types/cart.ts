// vue-fun/src/types/cart.ts

// vue-fun/src/types/cart.ts

export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

export interface CartItemProps {
  item: CartItem;
}

export interface CartItemEvents {
  (e: 'update-quantity', id: number, quantity: number): void;
  (e: 'remove-item', id: number): void;
}

export interface OrderSummaryProps {
  subtotal: number;
  totalItems: number;
  shipping: number;
  taxRate: number;
}

export interface OrderSummaryEvents {
  (e: 'checkout'): void;
  (e: 'apply-promo', code: string): void;
}