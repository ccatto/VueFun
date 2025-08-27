<!-- vue-fun/src/components/ui/molecules/ProductDetailContent.vue -->

<template>
  <div class="bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <!-- Left Section - Product Images -->
      <div class="space-y-4">
        <!-- Main Image -->
        <div class="aspect-square rounded-lg overflow-hidden bg-gray-700">
          <img
            :src="selectedImage"
            :alt="product.name"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Thumbnail Images -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          <button
            v-for="(image, index) in product.images"
            :key="index"
            @click="selectedImage = image"
            class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors"
            :class="
              selectedImage === image ? 'border-orange-500' : 'border-gray-600 hover:border-gray-500'
            "
          >
            <img
              :src="image"
              :alt="`${product.name} view ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <!-- Right Section - Product Details -->
      <div class="space-y-6">
        <!-- Product Title and Price -->
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

        <!-- Product Description -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-slate-50">Description</h3>
          <p class="text-gray-300 leading-relaxed">{{ product.description }}</p>
        </div>

        <!-- Product Features -->
        <div v-if="product.features && product.features.length > 0">
          <h3 class="text-lg font-semibold mb-3 text-slate-50">Key Features</h3>
          <ul class="space-y-2">
            <li v-for="feature in product.features" :key="feature" class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span class="text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Size Selection -->
        <div v-if="product.sizes && product.sizes.length > 0">
          <h3 class="text-lg font-semibold mb-3 text-slate-50">Size</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="size in product.sizes"
              :key="size.value"
              @click="selectedSize = size.value"
              :disabled="!size.available"
              class="px-4 py-2 border rounded-lg font-medium transition-colors"
              :class="[
                selectedSize === size.value
                  ? 'border-orange-500 bg-orange-900/20 text-orange-400'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300',
                !size.available && 'opacity-50 cursor-not-allowed bg-gray-700',
              ]"
            >
              {{ size.label }}
            </button>
          </div>
        </div>

        <!-- Color Selection -->
        <div v-if="product.colors && product.colors.length > 0">
          <h3 class="text-lg font-semibold mb-3 text-slate-50">Color</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in product.colors"
              :key="color.value"
              @click="selectedColor = color.value"
              class="flex items-center gap-2 px-4 py-2 border rounded-lg font-medium transition-colors"
              :class="
                selectedColor === color.value
                  ? 'border-orange-500 bg-orange-900/20 text-orange-400'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300'
              "
            >
              <div
                class="w-4 h-4 rounded-full border border-gray-500"
                :style="{ backgroundColor: color.hex }"
              ></div>
              {{ color.name }}
            </button>
          </div>
        </div>

        <!-- Quantity and Add to Cart -->
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-slate-50">Quantity</h3>
            <div class="flex items-center border border-gray-600 rounded-lg w-fit">
              <button
                @click="decreaseQuantity"
                class="px-4 py-2 hover:bg-gray-700 transition-colors text-gray-300"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <span class="px-6 py-2 border-x border-gray-600 text-slate-50">{{ quantity }}</span>
              <button
                @click="increaseQuantity"
                class="px-4 py-2 hover:bg-gray-700 transition-colors text-gray-300"
                :disabled="quantity >= product.maxQuantity"
              >
                +
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              @click="addToCart"
              :disabled="!canAddToCart"
              class="flex-1 bg-orange-600 text-slate-50 py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
            </button>
            <button
              @click="addToWishlist"
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
        </div>

        <!-- Stock Status -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Product } from '@/types/product';

interface ProductSize {
  value: string;
  label: string;
  available: boolean;
}

interface ProductColor {
  value: string;
  name: string;
  hex: string;
}

interface Props {
  product: Product;
}

interface Emits {
  (
    e: 'add-to-cart',
    payload: {
      productId: number;
      quantity: number;
      selectedSize?: string;
      selectedColor?: string;
    }
  ): void;
  (e: 'add-to-wishlist', productId: number): void;
  (e: 'remove-from-wishlist', productId: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// Component state
const selectedImage = ref<string>(props.product.images[0]);
const selectedSize = ref<string>(props.product.sizes?.[0]?.value || '');
const selectedColor = ref<string>(props.product.colors?.[0]?.value || '');
const quantity = ref<number>(1);
const isInWishlist = ref<boolean>(false);

// Computed properties
const canAddToCart = computed((): boolean => {
  return (
    props.product.inStock &&
    (!props.product.sizes || selectedSize.value) &&
    (!props.product.colors || selectedColor.value)
  );
});

// Methods
const increaseQuantity = (): void => {
  if (quantity.value < props.product.maxQuantity) {
    quantity.value++;
  }
};

const decreaseQuantity = (): void => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = (): void => {
  if (canAddToCart.value) {
    emit('add-to-cart', {
      productId: props.product.id,
      quantity: quantity.value,
      selectedSize: selectedSize.value || undefined,
      selectedColor: selectedColor.value || undefined,
    });
  }
};

const addToWishlist = (): void => {
  if (isInWishlist.value) {
    emit('remove-from-wishlist', props.product.id);
    isInWishlist.value = false;
  } else {
    emit('add-to-wishlist', props.product.id);
    isInWishlist.value = true;
  }
};
</script>