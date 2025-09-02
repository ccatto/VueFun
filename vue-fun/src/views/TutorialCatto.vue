<!-- TutorialCatto.vue -->
<template>
  <Layout>
    <div class="min-h-screen bg-gray-900 text-gray-100">
      <!-- Header -->
      <HeaderCatto />

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-6 py-8">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <div
            class="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"
          >
            <span class="text-4xl">🐱</span>
          </div>
          <h1
            class="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4"
          >
            Master Vue 3 with Catto!
          </h1>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn Vue 3's most important concepts through interactive examples and hands-on
            tutorials. From basics to advanced patterns, become a Vue expert step by step.
          </p>
        </div>

        <!-- Tutorial Stepper -->
        <TutorialStepper />

        <!-- Tutorial Modules Grid -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          <VueBasicsCatto />
          <VueCompositionApiCatto />
          <VueComposablesCatto />
          <VueStateManagementPiniaCatto />
          <VueRoutingCatto />
          <VueAdvancedCatto />
        </div>

        <!-- Repository Section -->
        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center mb-8">
          <h2 class="text-2xl font-semibold text-orange-500 mb-3">📂 Source Code</h2>
          <p class="text-gray-300 mb-4">
            Explore the complete source code and contribute to this Vue learning project:
          </p>
          <a
            href="https://github.com/ccatto/VueFun"
            target="_blank"
            class="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white rounded-md transition-colors duration-200 font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clip-rule="evenodd"
              />
            </svg>
            View on GitHub →
          </a>
        </div>

        <!-- Completion Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
            >
              <span class="text-2xl">🎉</span>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-orange-500 mb-4">Keep Learning!</h3>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            You're on your way to mastering Vue 3! Complete all modules to unlock your Vue
            expertise. Each concept builds upon the previous one, creating a solid foundation for
            real-world development.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-gray-700/50 rounded-lg px-4 py-2">
              <span class="text-sm text-gray-400">Next Steps:</span>
              <span class="text-orange-400 ml-2 font-medium">Build a real project!</span>
            </div>
            <div class="bg-gray-700/50 rounded-lg px-4 py-2">
              <span class="text-sm text-gray-400">Resources:</span>
              <!-- <span class="text-orange-400 ml-2 font-medium">Vue.js docs & ecosystem</span> -->
              <a
                href="https://vuejs.org/guide/quick-start.html"
                target="_blank"
                rel="noopener noreferrer"
                class="text-orange-400 ml-2 font-medium"
              >
                Vue.js docs & ecosystem
              </a>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <!-- <FooterCatto /> -->
    </div>
  </Layout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTutorialStore } from '@/stores/tutorialStore';
import Layout from '@/components/layout/Layout.vue';
// Components
import HeaderCatto from '@/components/ui/molecules/Tutorial/HeaderCatto.vue';
import TutorialStepper from '@/components/ui/molecules/Tutorial/TutorialStepper.vue';

import VueBasicsCatto from '@/components/ui/molecules/Tutorial/VueBasicsCatto.vue';
import VueCompositionApiCatto from '@/components/ui/molecules/Tutorial/VueCompositionApiCatto.vue';
import VueComposablesCatto from '@/components/ui/molecules/Tutorial/VueComposablesCatto.vue';
import VueStateManagementPiniaCatto from '@/components/ui/molecules/Tutorial/VueStateManagementPiniaCatto.vue';
import VueRoutingCatto from '@/components/ui/molecules/Tutorial/VueRoutingCatto.vue';
import VueAdvancedCatto from '@/components/ui/molecules/Tutorial/VueAdvancedCatto.vue';

// Store
const tutorialStore = useTutorialStore();

// Meta information for SEO
defineOptions({
  name: 'TutorialCatto',
});

// Page setup
onMounted(() => {
  // Track page visit
  console.log('Vue Tutorial Catto page loaded! 🐱');

  // Initialize tutorial if needed
  if (!tutorialStore.initialized) {
    tutorialStore.initializeTutorial();
  }

  // Try to load saved progress
  tutorialStore.loadProgress();
});
</script>

<style scoped>
/* Custom animations */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background: linear-gradient(-45deg, #ff6b35, #ff8c69, #ffa500, #ff6347);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #ff6b35;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff8c69;
}
</style>
