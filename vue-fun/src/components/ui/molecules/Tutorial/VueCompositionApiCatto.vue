<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">🔧</span> Composition API
    </h3>

    <p class="text-gray-300 mb-4">
      The Composition API provides a more flexible way to organize component logic. It's especially
      useful for complex components and code reuse.
    </p>

    <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code><span class="text-purple-400">import</span> { ref, computed, onMounted } <span class="text-purple-400">from</span> <span class="text-green-400">'vue'</span>;

<span class="text-purple-400">export default</span> {
  <span class="text-yellow-400">setup</span>() {
    <span class="text-purple-400">const</span> count = <span class="text-blue-400">ref</span>(0);
    <span class="text-purple-400">const</span> doubled = <span class="text-blue-400">computed</span>(() => count.value * 2);
    
    <span class="text-purple-400">const</span> increment = () => {
      count.value++;
    };
    
    <span class="text-blue-400">onMounted</span>(() => {
      console.log(<span class="text-green-400">'Component mounted!'</span>);
    });
    
    <span class="text-purple-400">return</span> { count, doubled, increment };
  }
};</code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Interactive Demo:</h4>
      <div class="flex items-center space-x-4 mb-3">
        <span class="text-gray-300"
          >Count: <span class="text-orange-400 font-bold">{{ demoCount }}</span></span
        >
        <span class="text-gray-300"
          >Doubled: <span class="text-orange-400 font-bold">{{ demoDoubled }}</span></span
        >
      </div>
      <button
        @click="incrementDemo"
        class="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm font-medium transition-colors"
      >
        Increment Count
      </button>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Key Benefits:</h4>
      <ul class="text-sm text-gray-300 space-y-1">
        <li>• <span class="text-orange-400">Better logic reuse</span> across components</li>
        <li>• <span class="text-orange-400">TypeScript support</span> out of the box</li>
        <li>• <span class="text-orange-400">More flexible</span> than Options API</li>
      </ul>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-400">
        <span class="text-orange-400">⏱️</span> Est. time: 3 minutes
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
import { ref, computed } from 'vue';
import { useTutorialStore } from '@/stores/tutorialStore';

const store = useTutorialStore();
const isComplete = computed(() => store.isStepCompleted(1));

// Demo functionality
const demoCount = ref(0);
const demoDoubled = computed(() => demoCount.value * 2);

const incrementDemo = () => {
  demoCount.value++;
};

const markComplete = () => {
  store.markStepComplete(1);
};
</script>
