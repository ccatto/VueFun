<!-- vue-fun/src/components/ui/molecules/CartItemCatto.vue -->

<!-- vue-fun/src/components/ui/molecules/CartItemCatto.vue -->
<template>
  <div class="bg-slate-700 rounded-lg shadow-sm border border-slate-600 p-6">
    <div class="flex gap-6">
      <!-- Product Image -->
      <div class="flex-shrink-0">
        <img
          :src="item.image"
          :alt="item.name"
          class="w-32 h-32 object-cover rounded-lg bg-slate-600"
        />
      </div>

      <!-- Product Details -->
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold text-slate-50 mb-2">{{ item.name }}</h3>
            <p class="text-slate-300 mb-4 leading-relaxed">{{ item.description }}</p>

            <div class="flex items-center gap-4 mb-4">
              <span class="text-sm text-slate-400">Size:</span>
              <span class="text-sm font-medium text-slate-200">{{ item.size }}</span>
              <span class="text-sm text-slate-400">Color:</span>
              <span class="text-sm font-medium text-slate-200">{{ item.color }}</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-2xl font-bold text-orange-500">${{ item.price }}</span>
              <div class="flex items-center border border-slate-500 rounded-lg">
                <button
                  @click="decreaseQuantity"
                  class="px-3 py-1 text-slate-200 hover:bg-slate-600 transition-colors"
                  :disabled="item.quantity <= 1"
                  :class="{ 'opacity-50 cursor-not-allowed': item.quantity <= 1 }"
                >
                  -
                </button>
                <span class="px-4 py-1 border-x border-slate-500 text-slate-200">{{
                  item.quantity
                }}</span>
                <button
                  @click="increaseQuantity"
                  class="px-3 py-1 text-slate-200 hover:bg-slate-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <!-- Remove Button -->
          <button @click="removeItem" class="text-red-400 hover:text-red-300 transition-colors p-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItemProps, CartItemEvents } from '@/types/cart';

const props = defineProps<CartItemProps>();
const emit = defineEmits<CartItemEvents>();

const increaseQuantity = () => {
  emit('update-quantity', props.item.id, props.item.quantity + 1);
};

const decreaseQuantity = () => {
  if (props.item.quantity > 1) {
    emit('update-quantity', props.item.id, props.item.quantity - 1);
  }
};

const removeItem = () => {
  emit('remove-item', props.item.id);
};
</script>
