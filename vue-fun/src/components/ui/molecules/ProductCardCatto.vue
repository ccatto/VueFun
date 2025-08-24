<!-- vue-fun/src/components/ui/molecules/ProductCardCatto.vue -->
<template>
  <div @click="$emit('view-product', product.id)" class="cursor-pointer group">
    <div class="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 class="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
      {{ product.name }}
    </h3>
    <p class="text-sm text-gray-600 mb-2">{{ product.category }}</p>
    <p class="text-lg font-bold text-gray-900">${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product';

defineProps<{
  product: Product;
}>();

defineEmits<{
  (e: 'view-product', id: number): void;
}>();
</script>
