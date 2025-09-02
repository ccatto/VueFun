<!-- vue-fun/src/components/ui/organisms/ProductDetailHeaderCatto.vue -->

<template>
  <div class="flex items-center justify-between mb-8">
    <div class="flex items-center gap-3">
      <GlobeIcon class="text-orange-500" />
      <div>
        <h1 class="text-3xl font-bold text-slate-50">Product Details</h1>
        <p class="text-gray-400">Explore our premium collection</p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button
        @click="$emit('go-back')"
        class="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-slate-50 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back
      </button>
      <button
        @click="$emit('share')"
        class="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-slate-50 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 
               12.482 9 12c0-.482-.114-.938-.316-1.342m0 
               2.684a3 3 0 110-2.684m0 2.684l6.632 
               3.316m-6.632-6l6.632-3.316m0 
               0a3 3 0 105.367-2.684 3 3 0 
               00-5.367 2.684zm0 9.316a3 3 0 
               105.367 2.684 3 3 0 
               00-5.367-2.684z"
          />
        </svg>
        Share
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobeIcon from '@/components/ui/atoms/GlobeIcon.vue';

defineEmits(['go-back', 'share']);
</script>
