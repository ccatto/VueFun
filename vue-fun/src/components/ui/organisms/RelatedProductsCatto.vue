<!-- vue-fun/src/components/ui/organisms/RelatedProductsCatto.vue -->

<template>
  <div v-if="products.length > 0" class="bg-white rounded-lg shadow-sm border p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCardCatto
        v-for="item in products"
        :key="item.id"
        :product="item"
        @view-product="$emit('view-product', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product';
import ProductCardCatto from '../molecules/ProductCardCatto.vue';

defineProps<{
  products: Product[];
}>();

defineEmits(['view-product']);
</script>
