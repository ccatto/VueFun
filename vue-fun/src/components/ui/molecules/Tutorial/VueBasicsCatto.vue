<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">📚</span> Vue 3 Basics
    </h3>

    <p class="text-gray-300 mb-4">
      Vue 3 is a progressive JavaScript framework for building user interfaces. It's designed to be
      incrementally adoptable and focuses on declarative rendering and component composition.
    </p>

    <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code><span class="text-purple-400">const</span> { createApp, ref } = Vue;

<span class="text-purple-400">const</span> app = <span class="text-blue-400">createApp</span>({
  <span class="text-yellow-400">setup</span>() {
    <span class="text-purple-400">const</span> message = <span class="text-blue-400">ref</span>(<span class="text-green-400">'Hello Vue Catto!'</span>);
    <span class="text-purple-400">return</span> { message };
  }
});

app.<span class="text-blue-400">mount</span>(<span class="text-green-400">'#app'</span>);</code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Key Concepts:</h4>
      <ul class="text-sm text-gray-300 space-y-1">
        <li>• <span class="text-orange-400">Reactive data</span> with ref() and reactive()</li>
        <li>• <span class="text-orange-400">Template syntax</span> for declarative rendering</li>
        <li>• <span class="text-orange-400">Component-based</span> architecture</li>
      </ul>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-400">
        <span class="text-orange-400">⏱️</span> Est. time: 2 minutes
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
const isComplete = computed(() => store.isStepCompleted(0));

const markComplete = () => {
  store.markStepComplete(0);
};
</script>
