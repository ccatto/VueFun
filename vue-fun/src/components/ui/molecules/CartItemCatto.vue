<!-- vue-fun/src/components/ui/molecules/CartItemCatto.vue -->
<template>
  <div class="bg-white rounded-lg shadow-sm border p-6">
    <div class="flex gap-6">
      <!-- Product Image -->
      <div class="flex-shrink-0">
        <img
          :src="item.image"
          :alt="item.name"
          class="w-32 h-32 object-cover rounded-lg bg-gray-100"
        />
      </div>

      <!-- Product Details -->
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ item.name }}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">{{ item.description }}</p>

            <div class="flex items-center gap-4 mb-4">
              <span class="text-sm text-gray-500">Size:</span>
              <span class="text-sm font-medium">{{ item.size }}</span>
              <span class="text-sm text-gray-500">Color:</span>
              <span class="text-sm font-medium">{{ item.color }}</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-2xl font-bold text-gray-900">${{ item.price }}</span>
              <div class="flex items-center border rounded-lg">
                <button
                  @click="decreaseQuantity"
                  class="px-3 py-1 hover:bg-gray-100 transition-colors"
                  :disabled="item.quantity <= 1"
                >
                  -
                </button>
                <span class="px-4 py-1 border-x">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity"
                  class="px-3 py-1 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <!-- Remove Button -->
          <button @click="removeItem" class="text-red-500 hover:text-red-700 transition-colors p-2">
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
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

interface Props {
  item: CartItem;
}

interface Emits {
  (e: 'update-quantity', id: number, quantity: number): void;
  (e: 'remove-item', id: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

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
