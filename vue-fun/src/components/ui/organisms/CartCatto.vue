<!-- vue-fun/src/components/ui/organisms/CartCatto.vue -->
<!-- vue-fun/src/components/ui/organisms/CartCatto.vue -->

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <GlobeIcon class="w-8 h-8 text-blue-600" />
          <h1 class="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
        <p class="text-gray-600">Review your items and proceed to checkout</p>
      </div>

      <!-- Cart Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Section - Cart Items (2/3 width) -->
        <div class="lg:col-span-2 space-y-4">
          <div v-if="cartItems.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13v6a2 2 0 002 2h9.5M9 19.5h.01M20 19.5h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p class="text-gray-500">Add some items to get started!</p>
          </div>

          <CartItemCatto
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
        </div>

        <!-- Right Section - Order Summary (1/3 width) -->
        <div class="lg:col-span-1">
          <OrderSummaryCatto
            :subtotal="subtotal"
            :total-items="totalItems"
            :shipping="shipping"
            :tax-rate="0.08"
            @checkout="handleCheckout"
            @apply-promo="handlePromoCode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CartItemCatto from '../molecules/CartItemCatto.vue';

import OrderSummaryCatto from '../molecules/OrderSummaryCatto.vue';

// Replace with your existing icon component or add lucide-vue-next
// import { GlobeIcon } from 'lucide-vue-next'

// Temporary inline SVG component until you add lucide-vue-next
const GlobeIcon = {
  template: `
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `,
};

interface CartItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

// Sample cart data - replace with your actual data management
const cartItems = ref<CartItemType[]>([
  {
    id: 1,
    name: 'Premium Hiking Boots',
    description:
      'Durable waterproof hiking boots with advanced grip technology. Perfect for outdoor adventures and challenging terrains. Features breathable mesh lining and reinforced toe protection.',
    price: 149.99,
    quantity: 1,
    size: 'US 10',
    color: 'Brown',
    image:
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Tactical Combat Boots',
    description:
      'Military-grade tactical boots designed for durability and comfort. Features steel toe protection, slip-resistant sole, and quick-dry technology.',
    price: 199.99,
    quantity: 2,
    size: 'US 9',
    color: 'Black',
    image:
      'https://images.unsplash.com/photo-1608667508764-33cf0726d0a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
]);

const shipping = computed((): number => {
  return subtotal.value > 100 ? 0 : 9.99;
});

const subtotal = computed((): number => {
  return cartItems.value.reduce(
    (sum: number, item: CartItemType) => sum + item.price * item.quantity,
    0
  );
});

const totalItems = computed((): number => {
  return cartItems.value.reduce((sum: number, item: CartItemType) => sum + item.quantity, 0);
});

const updateQuantity = (id: number, newQuantity: number) => {
  const item = cartItems.value.find((item) => item.id === id);
  if (item) {
    item.quantity = newQuantity;
  }
};

const removeItem = (id: number) => {
  const index = cartItems.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};

const handleCheckout = () => {
  // Handle checkout logic
  console.log('Proceeding to checkout...');
  // You can emit an event or navigate to checkout page
};

const handlePromoCode = (code: string) => {
  // Handle promo code logic
  console.log('Applying promo code:', code);
  // Validate and apply promo code
};
</script>
