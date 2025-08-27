<template>
  <div>
    <div class="flex items-center gap-2 mb-2">
      <span class="text-sm font-medium text-orange-400 bg-orange-900/20 px-2 py-1 rounded">
        {{ product.category }}
      </span>
      <div v-if="product.rating" class="flex items-center gap-1">
        <div class="flex text-orange-400">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-4 h-4"
            :class="star <= product.rating ? 'fill-current' : 'text-gray-600'"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <span class="text-sm text-gray-400 ml-1">({{ product.reviewCount }} reviews)</span>
      </div>
    </div>
    <h1 class="text-3xl font-bold text-slate-50 mb-2">{{ product.name }}</h1>
    <div class="flex items-center gap-4">
      <span class="text-3xl font-bold text-slate-50">${{ product.price }}</span>
      <span v-if="product.originalPrice" class="text-xl text-gray-400 line-through">
        ${{ product.originalPrice }}
      </span>
      <span
        v-if="product.originalPrice"
        class="text-sm font-medium text-green-400 bg-green-900/20 px-2 py-1 rounded"
      >
        Save ${{ (product.originalPrice - product.price).toFixed(2) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types/product';

defineProps<{
  product: Product;
}>();
</script>