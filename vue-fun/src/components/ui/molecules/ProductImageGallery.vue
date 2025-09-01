<!-- vue-fun/src/components/ui/molecules/ProductImageGallery.vue -->

<template>
  <div class="space-y-4">
    <div class="aspect-square rounded-lg overflow-hidden bg-gray-700">
      <img
        :src="selectedImage"
        :alt="productName"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="flex gap-2 overflow-x-auto pb-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="selectedImage = image"
        class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors"
        :class="selectedImage === image ? 'border-orange-500' : 'border-gray-600 hover:border-gray-500'"
      >
        <img
          :src="image"
          :alt="`${productName} view ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// example of Composition API
import { ref } from 'vue';

defineProps<{
  images: string[];
  productName: string;
}>();

const selectedImage = defineModel<string>('selectedImage', { required: true });
</script>