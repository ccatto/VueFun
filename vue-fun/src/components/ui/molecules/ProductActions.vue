<template>
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-semibold mb-3 text-slate-50">Quantity</h3>
      <div class="flex items-center border border-gray-600 rounded-lg w-fit">
        <button
          @click="$emit('update:quantity', quantity - 1)"
          class="px-4 py-2 hover:bg-gray-700 transition-colors text-gray-300"
          :disabled="quantity <= 1"
        >
          -
        </button>
        <span class="px-6 py-2 border-x border-gray-600 text-slate-50">{{ quantity }}</span>
        <button
          @click="$emit('update:quantity', quantity + 1)"
          class="px-4 py-2 hover:bg-gray-700 transition-colors text-gray-300"
          :disabled="quantity >= product.maxQuantity"
        >
          +
        </button>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-3">
      <button
        @click="$emit('add-to-cart')"
        :disabled="!canAddToCart"
        class="flex-1 bg-orange-600 text-slate-50 py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
      </button>
      <button
        @click="$emit('toggle-wishlist')"
        class="px-4 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        :title="isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'"
      >
        <svg
          class="w-5 h-5"
          :class="isInWishlist ? 'text-red-400 fill-current' : 'text-gray-400'"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex items-center gap-2 text-sm">
      <div
        class="w-2 h-2 rounded-full"
        :class="product.inStock ? 'bg-green-400' : 'bg-red-400'"
      ></div>
      <span :class="product.inStock ? 'text-green-400' : 'text-red-400'">
        {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
      </span>
      <span v-if="product.inStock && product.stockCount" class="text-gray-400">
        ({{ product.stockCount }} remaining)
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Product } from '@/types/product';

defineProps<{
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  isInWishlist: boolean;
}>();

defineEmits<{
  (e: 'update:quantity', value: number): void;
  (e: 'add-to-cart'): void;
  (e: 'toggle-wishlist'): void;
}>();

const canAddToCart = computed((): boolean => {
  return product.inStock && (!product.sizes || selectedSize) && (!product.colors || selectedColor);
});
</script>
