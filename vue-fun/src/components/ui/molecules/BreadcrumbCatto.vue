<!-- vue-fun/src/components/ui/molecules/BreadcrumbCatto.vue -->

<template>
  <nav class="mb-8">
    <ol class="flex items-center space-x-2 text-sm text-gray-500">
      <li>
        <button @click="$emit('go-home')" class="hover:text-blue-600 transition-colors">
          Home
        </button>
      </li>
      <li>
        <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4 
               4a1 1 0 010 1.414l-4 
               4a1 1 0 01-1.414 0z"
          />
        </svg>
      </li>
      <li>
        <button @click="$emit('go-category')" class="hover:text-blue-600 transition-colors">
          {{ category }}
        </button>
      </li>
      <li>
        <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
               7.293 6.707a1 1 0 011.414-1.414l4 
               4a1 1 0 010 1.414l-4 
               4a1 1 0 01-1.414 0z"
          />
        </svg>
      </li>
      <li class="text-gray-900 font-medium">
        {{ productName }}
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  category: string;
  productName: string;
}>();

defineEmits(['go-home', 'go-category']);
</script>
