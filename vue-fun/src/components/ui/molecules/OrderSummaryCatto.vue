<!-- vue-fun/src/components/ui/molecules/OrderSummaryCatto.vue -->
<!-- OrderSummaryCatto.vue -->
<template>
  <div class="bg-slate-700 rounded-lg shadow-sm border border-slate-600 p-6 sticky top-4">
    <h3 class="text-xl font-semibold text-slate-50 mb-6">Order Summary</h3>

    <!-- Order Details -->
    <div class="space-y-4 mb-6">
      <div class="flex justify-between text-slate-300">
        <span>Subtotal ({{ totalItems }} items)</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between text-slate-300">
        <span>Shipping</span>
        <span v-if="shipping === 0" class="text-orange-500 font-medium">Free</span>
        <span v-else>${{ shipping.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between text-slate-300">
        <span>Tax</span>
        <span>${{ tax.toFixed(2) }}</span>
      </div>

      <hr class="my-4 border-slate-600" />

      <div class="flex justify-between text-lg font-semibold text-slate-50">
        <span>Total</span>
        <span class="text-orange-500">${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Promo Code -->
    <div class="mb-6">
      <div class="flex gap-2">
        <input
          v-model="promoCode"
          type="text"
          placeholder="Promo code"
          class="flex-1 px-3 py-2 bg-slate-600 border border-slate-500 text-slate-50 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          @click="applyPromoCode"
          class="px-4 py-2 bg-slate-600 text-slate-200 rounded-lg hover:bg-slate-500 transition-colors border border-slate-500"
        >
          Apply
        </button>
      </div>
    </div>

    <!-- Checkout Button -->
    <ButtonCatto
      label="Proceed to Checkout"
      @click="checkout"
      variant="catto"
      size="large"
      width="full"
      :disabled="totalItems === 0"
      :animation="totalItems === 0 ? 'none' : 'tada'"
    />

    <!-- Security Info -->
    <div class="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
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
import ButtonCatto from '@/components/ui/atoms/ButtonCatto.vue';
import type { OrderSummaryProps, OrderSummaryEvents } from '@/types/cart';

const props = withDefaults(defineProps<OrderSummaryProps>(), {
  shipping: 0,
  taxRate: 0.08,
});

const emit = defineEmits<OrderSummaryEvents>();

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
