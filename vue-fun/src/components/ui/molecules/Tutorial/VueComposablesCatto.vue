<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">🎯</span> Composables
    </h3>

    <p class="text-gray-300 mb-4">
      Composables are reusable functions that encapsulate stateful logic. They leverage Vue's
      reactivity system and can be shared across components.
    </p>

    <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code><span class="text-gray-500">// useCounter.js</span>
<span class="text-purple-400">import</span> { ref, computed } <span class="text-purple-400">from</span> <span class="text-green-400">'vue'</span>;

<span class="text-purple-400">export function</span> <span class="text-yellow-400">useCounter</span>(initialValue = 0) {
  <span class="text-purple-400">const</span> count = <span class="text-blue-400">ref</span>(initialValue);
  
  <span class="text-purple-400">const</span> increment = () => count.value++;
  <span class="text-purple-400">const</span> decrement = () => count.value--;
  <span class="text-purple-400">const</span> reset = () => count.value = initialValue;
  
  <span class="text-purple-400">const</span> isPositive = <span class="text-blue-400">computed</span>(() => count.value > 0);
  
  <span class="text-purple-400">return</span> {
    count: <span class="text-blue-400">readonly</span>(count),
    increment, decrement, reset, isPositive
  };
}</code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Live Composable Demo:</h4>
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-4">
          <span class="text-gray-300"
            >Count: <span class="text-orange-400 font-bold">{{ counter.count }}</span></span
          >
          <span
            :class="['text-sm font-medium', counter.isPositive ? 'text-green-400' : 'text-red-400']"
          >
            {{ counter.isPositive ? '✓ Positive' : '✗ Zero/Negative' }}
          </span>
        </div>
      </div>
      <div class="flex space-x-2">
        <button
          @click="counter.increment"
          class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          + Add
        </button>
        <button
          @click="counter.decrement"
          class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          - Subtract
        </button>
        <button
          @click="counter.reset"
          class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          🔄 Reset
        </button>
      </div>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Why Composables?</h4>
      <ul class="text-sm text-gray-300 space-y-1">
        <li>• <span class="text-orange-400">Reusable logic</span> across multiple components</li>
        <li>• <span class="text-orange-400">Easy testing</span> of isolated functionality</li>
        <li>• <span class="text-orange-400">Clean separation</span> of concerns</li>
        <li>• <span class="text-orange-400">Better code organization</span> in large apps</li>
      </ul>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-400">
        <span class="text-orange-400">⏱️</span> Est. time: 4 minutes
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
const isComplete = computed(() => store.isStepCompleted(2));

// Demo composable implementation
const useCounter = (initialValue = 5) => {
  const count = ref(initialValue);

  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => (count.value = initialValue);
  const isPositive = computed(() => count.value > 0);

  return { count, increment, decrement, reset, isPositive };
};

// Use the composable
const counter = useCounter(5);

const markComplete = () => {
  store.markStepComplete(2);
};
</script>
