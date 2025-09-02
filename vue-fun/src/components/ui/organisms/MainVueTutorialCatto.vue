<!-- vue-fun/src/components/ui/organisms/MainVueTutorialCatto.vue -->

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Header Section -->
    <header class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo and Title -->
          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center"
            >
              <span class="text-2xl">🐱</span>
            </div>
            <div>
              <h1
                class="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
              >
                Vue Tutorial Catto
              </h1>
              <p class="text-sm text-gray-400">Master Vue 3 step by step</p>
            </div>
          </div>

          <!-- Progress Display -->
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-sm text-gray-400">Overall Progress</p>
              <div class="flex items-center space-x-2">
                <div class="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
                    :style="{ width: tutorialStore.progressPercentage + '%' }"
                  ></div>
                </div>
                <span class="text-orange-400 font-bold text-sm"
                  >{{ tutorialStore.progressPercentage }}%</span
                >
              </div>
            </div>

            <!-- Navigation Controls -->
            <div class="flex space-x-2">
              <button
                @click="tutorialStore.prevStep"
                :disabled="tutorialStore.currentStep === 0"
                :class="[
                  'p-2 rounded-lg transition-all duration-200',
                  tutorialStore.currentStep === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300',
                ]"
              >
                ←
              </button>
              <button
                @click="tutorialStore.nextStep"
                :disabled="tutorialStore.currentStep === tutorialStore.totalSteps - 1"
                :class="[
                  'p-2 rounded-lg transition-all duration-200',
                  tutorialStore.currentStep === tutorialStore.totalSteps - 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300',
                ]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <div
          class="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
        >
          <span class="text-4xl">🐱</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-100 mb-4">
          Master Vue 3 with <span class="text-orange-400">Catto</span>!
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Learn Vue 3's most important concepts through interactive examples and hands-on tutorials.
          From basics to advanced patterns, become a Vue expert step by step with our comprehensive
          guide.
        </p>

        <!-- Quick Stats -->
        <div class="flex justify-center space-x-8 mt-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-orange-400">{{ tutorialStore.totalSteps }}</div>
            <div class="text-sm text-gray-400">Tutorial Modules</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-orange-400">
              {{ tutorialStore.completedSteps.size }}
            </div>
            <div class="text-sm text-gray-400">Completed</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-orange-400">
              {{ tutorialStore.estimatedTimeRemaining }}
            </div>
            <div class="text-sm text-gray-400">Time Remaining</div>
          </div>
        </div>
      </div>

      <!-- Tutorial Modules Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
        <VueBasicsCatto />
        <VueCompositionApiCatto />
        <VueComposablesCatto />
        <VueStateManagementPiniaCatto />
        <VueRoutingCatto />
        <VueAdvancedCatto />
      </div>

      <!-- Progress Summary -->
      <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
        <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
          <span class="mr-2">📊</span> Learning Progress
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Module Progress -->
          <div class="space-y-3">
            <h4 class="text-gray-300 font-medium">Module Completion</h4>
            <div
              v-for="(module, index) in tutorialStore.tutorialModules"
              :key="module.id"
              class="flex items-center justify-between text-sm"
            >
              <div class="flex items-center space-x-2">
                <span
                  :class="tutorialStore.isStepCompleted(index) ? 'text-green-400' : 'text-gray-400'"
                >
                  {{ tutorialStore.isStepCompleted(index) ? '✓' : '○' }}
                </span>
                <span class="text-gray-300">{{ module.name }}</span>
              </div>
              <span class="text-xs text-gray-400">{{ module.estimatedTime }}</span>
            </div>
          </div>

          <!-- Current Focus -->
          <div class="space-y-3">
            <h4 class="text-gray-300 font-medium">Current Focus</h4>
            <div class="bg-gray-700/50 rounded-lg p-3">
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-lg">{{ tutorialStore.currentModule.icon }}</span>
                <span class="text-orange-400 font-medium">{{
                  tutorialStore.currentModule.name
                }}</span>
              </div>
              <p class="text-sm text-gray-400">{{ tutorialStore.currentModule.description }}</p>
            </div>
          </div>

          <!-- Next Steps -->
          <div class="space-y-3">
            <h4 class="text-gray-300 font-medium">What's Next</h4>
            <div v-if="tutorialStore.nextModule" class="bg-gray-700/50 rounded-lg p-3">
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-lg">{{ tutorialStore.nextModule.icon }}</span>
                <span class="text-gray-300 font-medium">{{ tutorialStore.nextModule.name }}</span>
              </div>
              <p class="text-sm text-gray-400">{{ tutorialStore.nextModule.description }}</p>
            </div>
            <div v-else class="bg-green-600/20 rounded-lg p-3 border border-green-600/30">
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-lg">🎉</span>
                <span class="text-green-400 font-medium">All Complete!</span>
              </div>
              <p class="text-sm text-green-300">You've mastered all modules!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="text-center space-y-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            @click="tutorialStore.resetTutorial"
            class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <span>🔄</span>
            <span>Reset Progress</span>
          </button>

          <button
            @click="scrollToTop"
            class="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <span>⬆️</span>
            <span>Back to Top</span>
          </button>

          <button
            @click="tutorialStore.saveProgress"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <span>💾</span>
            <span>Save Progress</span>
          </button>
        </div>

        <p class="text-sm text-gray-400">
          Progress is automatically saved locally. You can return anytime to continue learning!
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 border-t border-gray-700 mt-16">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <span class="text-2xl">🐱</span>
            <span class="text-orange-400 font-bold text-lg">Vue Tutorial Catto</span>
          </div>
          <p class="text-gray-400 text-sm mb-4">
            Made with 💻 and ☕ for Vue developers everywhere
          </p>
          <div class="flex justify-center space-x-6 text-sm text-gray-400">
            <a
              href="https://vuejs.org"
              target="_blank"
              class="hover:text-orange-400 transition-colors"
              >Vue.js Docs</a
            >
            <a
              href="https://pinia.vuejs.org"
              target="_blank"
              class="hover:text-orange-400 transition-colors"
              >Pinia</a
            >
            <a
              href="https://router.vuejs.org"
              target="_blank"
              class="hover:text-orange-400 transition-colors"
              >Vue Router</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTutorialStore } from '@/stores/tutorialStore';

// Import all tutorial components
import VueBasicsCatto from '../molecules/Tutorial/VueBasicsCatto.vue';
import VueCompositionApiCatto from '../molecules/Tutorial/VueCompositionApiCatto.vue';
import VueComposablesCatto from '../molecules/Tutorial/VueComposablesCatto.vue';
import VueStateManagementPiniaCatto from '../molecules/Tutorial/VueStateManagementPiniaCatto.vue';
import VueRoutingCatto from '../molecules/Tutorial/VueRoutingCatto.vue';
import VueAdvancedCatto from '../molecules/Tutorial/VueAdvancedCatto.vue';

// Initialize store
const tutorialStore = useTutorialStore();

// Utility functions
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Lifecycle
onMounted(() => {
  // Initialize tutorial and try to load saved progress
  if (!tutorialStore.loadProgress()) {
    tutorialStore.initializeTutorial();
  }

  console.log('Vue Tutorial Catto loaded! 🐱');
});

// Auto-save progress periodically
setInterval(() => {
  if (tutorialStore.initialized) {
    tutorialStore.saveProgress();
  }
}, 30000); // Save every 30 seconds
</script>

<style scoped>
/* Custom animations */
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Smooth scroll */
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
  background: linear-gradient(to bottom, #f97316, #ea580c);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #ea580c, #dc2626);
}
</style>
