<!-- OrderSummary.vue -->
<template>
  <div class="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
    <h3 class="text-xl font-semibold mb-6">Order Summary</h3>

    <!-- Order Details -->
    <div class="space-y-4 mb-6">
      <div class="flex justify-between text-gray-600">
        <span>Subtotal ({{ totalItems }} items)</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between text-gray-600">
        <span>Shipping</span>
        <span v-if="shipping === 0" class="text-green-600 font-medium">Free</span>
        <span v-else>${{ shipping.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between text-gray-600">
        <span>Tax</span>
        <span>${{ tax.toFixed(2) }}</span>
      </div>

      <hr class="my-4" />

      <div class="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Promo Code -->
    <div class="mb-6">
      <div class="flex gap-2">
        <input
          v-model="promoCode"
          type="text"
          placeholder="Promo code"
          class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          @click="applyPromoCode"
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Apply
        </button>
      </div>
    </div>

    <!-- Checkout Button -->
    <button
      @click="checkout"
      class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      :disabled="totalItems === 0"
      :class="{ 'opacity-50 cursor-not-allowed': totalItems === 0 }"
    >
      Proceed to Checkout
    </button>

    <!-- Security Info -->
    <div class="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        ></path>
      </svg>
      <span>Secure checkout</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  subtotal: number;
  totalItems: number;
  shipping?: number;
  taxRate?: number;
}

interface Emits {
  (e: 'checkout'): void;
  (e: 'apply-promo', code: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  shipping: 0,
  taxRate: 0.08,
});

const emit = defineEmits<Emits>();

const promoCode = ref('');

const tax = computed(() => {
  return props.subtotal * props.taxRate;
});

const total = computed(() => {
  return props.subtotal + props.shipping + tax.value;
});

const applyPromoCode = () => {
  if (promoCode.value.trim()) {
    emit('apply-promo', promoCode.value.trim());
    promoCode.value = '';
  }
};

const checkout = () => {
  emit('checkout');
};
</script>
