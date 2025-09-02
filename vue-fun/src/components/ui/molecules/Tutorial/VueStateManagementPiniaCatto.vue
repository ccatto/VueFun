<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">🍍</span> State Management - Pinia
    </h3>

    <p class="text-gray-300 mb-4">
      Pinia is the official state management library for Vue. It provides a simple API with
      excellent TypeScript support and DevTools integration.
    </p>

    <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code><span class="text-purple-400">import</span> { defineStore } <span class="text-purple-400">from</span> <span class="text-green-400">'pinia'</span>;

<span class="text-purple-400">export const</span> <span class="text-yellow-400">useUserStore</span> = <span class="text-blue-400">defineStore</span>(<span class="text-green-400">'user'</span>, () => {
  <span class="text-purple-400">const</span> name = <span class="text-blue-400">ref</span>(<span class="text-green-400">'Catto User'</span>);
  <span class="text-purple-400">const</span> preferences = <span class="text-blue-400">ref</span>({ theme: <span class="text-green-400">'dark'</span> });
  
  <span class="text-purple-400">const</span> updateName = (newName) => {
    name.value = newName;
  };
  
  <span class="text-purple-400">return</span> { name, preferences, updateName };
});</code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Live Store State:</h4>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between items-center">
          <span class="text-gray-300">Current Step:</span>
          <span class="text-orange-400 font-bold"
            >{{ store.currentStep + 1 }} / {{ store.totalSteps }}</span
          >
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-300">Completed Steps:</span>
          <span class="text-orange-400 font-bold">{{ store.completedSteps.size }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-300">Progress:</span>
          <div class="flex items-center space-x-2">
            <div class="w-20 bg-gray-600 rounded-full h-2">
              <div
                class="bg-orange-500 h-2 rounded-full transition-all duration-300"
                :style="{ width: store.progressPercentage + '%' }"
              ></div>
            </div>
            <span class="text-orange-400 font-bold">{{ store.progressPercentage }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Pinia Advantages:</h4>
      <ul class="text-sm text-gray-300 space-y-1">
        <li>• <span class="text-orange-400">Intuitive API</span> - similar to Composition API</li>
        <li>• <span class="text-orange-400">TypeScript support</span> without complex typing</li>
        <li>• <span class="text-orange-400">DevTools integration</span> for debugging</li>
        <li>• <span class="text-orange-400">Modular stores</span> for better organization</li>
        <li>• <span class="text-orange-400">Server-side rendering</span> support</li>
      </ul>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-400">
        <span class="text-orange-400">⏱️</span> Est. time: 5 minutes
      </div>
      <button
        @click="markComplete"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all duration-200',
          isComplete
            ? 'bg-green-600 text-white'
            : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg',
        ]"
      >
        {{ isComplete ? '✓ Completed' : 'Mark Complete' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTutorialStore } from '@/stores/tutorialStore';

const store = useTutorialStore();
const isComplete = computed(() => store.isStepCompleted(3));

const markComplete = () => {
  store.markStepComplete(3);
};
</script>
