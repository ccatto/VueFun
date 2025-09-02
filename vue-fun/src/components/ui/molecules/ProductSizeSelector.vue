<template>
  <div v-if="features && features.length > 0">
    <h3 class="text-lg font-semibold mb-3 text-slate-50">Key Features</h3>
    <ul class="space-y-2">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-2">
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
</template>

<script setup lang="ts">
defineProps<{
  features?: string[];
}>();
</script>
