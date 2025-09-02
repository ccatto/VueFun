<!-- TutorialCardCatto.vue -->
<template>
  <div
    class="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-orange-500/50 transition-all duration-300 group"
  >
    <div class="flex justify-center mb-4">
      <div
        class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
      >
        <span class="text-3xl">🐱</span>
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-orange-500 mb-3">📚 Vue Tutorial Catto</h2>

    <p class="text-gray-300 mb-6">
      Learn Vue 3 with our comprehensive interactive tutorial. Learn Composition API, Composables,
      Pinia state management, Vue Router, and advanced patterns through hands-on examples and
      real-world scenarios.
    </p>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-700/50 rounded-lg p-3">
        <div class="text-orange-400 font-semibold text-sm">Topics Covered</div>
        <div class="text-gray-300 text-xs mt-1">6 Core Concepts</div>
      </div>
      <div class="bg-gray-700/50 rounded-lg p-3">
        <div class="text-orange-400 font-semibold text-sm">Difficulty</div>
        <div class="text-gray-300 text-xs mt-1">Beginner to Advanced</div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-6">
      <span class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">
        Composition API
      </span>
      <span class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">
        Pinia
      </span>
      <span class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">
        Vue Router
      </span>
      <span class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">
        Composables
      </span>
    </div>

    <router-link
      :to="tutorialRoute"
      class="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white rounded-md transition-colors duration-200 font-medium group-hover:shadow-lg group-hover:shadow-orange-500/25"
    >
      <span>Start Learning</span>
      <svg
        class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Props for customization
const props = defineProps({
  tutorialRoute: {
    type: [String, Object],
    default: '/tutorial-catto',
  },
});
</script>

<style scoped>
/* Additional styles for enhanced visual effects */
.group:hover .bg-orange-500 {
  background: linear-gradient(135deg, #ff6b35, #ff8c69);
}
</style>
