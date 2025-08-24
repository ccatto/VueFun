<!-- vue-fun/src/components/ui/organisms/ProductDetailCatto.vue -->

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb Navigation -->
      <BreadcrumbCatto
        :category="product.category"
        :productName="product.name"
        @go-home="goHome"
        @go-category="goToCategory"
      />

      <!-- Header -->
      <ProductDetailHeaderCatto @go-back="goBack" @share="shareProduct" />

      <!-- Main Product Content -->
      <div class="space-y-8">
        <ProductDetailContentCatto
          :product="product"
          @add-to-cart="handleAddToCart"
          @add-to-wishlist="handleAddToWishlist"
          @remove-from-wishlist="handleRemoveFromWishlist"
        />
        <!-- Related Products Section -->
        <RelatedProductsCatto :products="relatedProducts" @view-product="viewProduct" />
      </div>

      <!-- Success Toast -->
      <ToastCatto :visible="showSuccessToast" :message="successMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductDetailContentCatto from '../molecules/ProductDetailContentCatto.vue'; // from './ProductDetailContent.vue'
import type { Product, AddToCartPayload } from '@/types/product';
import { sampleProduct, relatedProducts as mockRelated } from '@/mockData/productSamples';
import BreadcrumbCatto from '../molecules/BreadcrumbCatto.vue';
import ProductDetailHeaderCatto from './ProductDetailHeaderCatto.vue';
import ToastCatto from '../atoms/ToastCatto.vue';
import RelatedProductsCatto from './RelatedProductsCatto.vue';

// // Data
const product = ref<Product>(sampleProduct);
const relatedProducts = ref<Product[]>(mockRelated);

// Temporary inline SVG component until you add lucide-vue-next
const GlobeIcon = {
  template: `
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `,
};

// Component state
const showSuccessToast = ref<boolean>(false);
const successMessage = ref<string>('');

// Methods
const handleAddToCart = (payload: AddToCartPayload): void => {
  console.log('Adding to cart:', payload);
  showToast('Added to cart successfully!');
  // Here you would typically call your cart service/store
};

const handleAddToWishlist = (productId: number): void => {
  console.log('Adding to wishlist:', productId);
  showToast('Added to wishlist!');
};

const handleRemoveFromWishlist = (productId: number): void => {
  console.log('Removing from wishlist:', productId);
  showToast('Removed from wishlist');
};

const showToast = (message: string): void => {
  successMessage.value = message;
  showSuccessToast.value = true;
  setTimeout(() => {
    showSuccessToast.value = false;
  }, 3000);
};

const goBack = (): void => {
  // Handle navigation back
  console.log('Going back...');
  // You can use router.go(-1) or emit an event
};

const goHome = (): void => {
  console.log('Going to home...');
  // Navigate to home page
};

const goToCategory = (): void => {
  console.log('Going to category:', product.value.category);
  // Navigate to category page
};

const shareProduct = (): void => {
  // Handle product sharing
  if (navigator.share) {
    navigator.share({
      title: product.value.name,
      text: product.value.description,
      url: window.location.href,
    });
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    showToast('Product link copied to clipboard!');
  }
};

const viewProduct = (productId: number): void => {
  console.log('Viewing product:', productId);
  // Navigate to product detail page
};
</script>
