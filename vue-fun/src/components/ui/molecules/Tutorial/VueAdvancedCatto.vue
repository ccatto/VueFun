<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">🚀</span> Advanced Vue Concepts
    </h3>

    <p class="text-gray-300 mb-4">
      Learn advanced Vue patterns and techniques for building complex, scalable applications with
      modern development practices.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div
        v-for="concept in advancedConcepts"
        :key="concept.id"
        class="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all duration-200 cursor-pointer"
        @click="selectConcept(concept.id)"
        :class="{ 'ring-2 ring-orange-500': selectedConcept === concept.id }"
      >
        <div class="flex items-center mb-2">
          <span class="text-lg mr-2">{{ concept.icon }}</span>
          <h4 class="text-orange-400 font-semibold">{{ concept.title }}</h4>
        </div>
        <p class="text-sm text-gray-300">{{ concept.description }}</p>
      </div>
    </div>

    <div v-if="selectedConceptData" class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <h4 class="text-orange-400 font-semibold mb-2">{{ selectedConceptData.title }} Example:</h4>
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code v-html="selectedConceptData.code"></code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Advanced Topics Covered:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Custom Directives
        </div>
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Teleport Components
        </div>
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Suspense & Async
        </div>
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Provide/Inject Pattern
        </div>
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Performance Optimization
        </div>
        <div class="flex items-center">
          <span class="text-orange-400 mr-2">•</span>
          Testing Strategies
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-400">
        <span class="text-orange-400">⏱️</span> Est. time: 7 minutes
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
const isComplete = computed(() => store.isStepCompleted(5));

const selectedConcept = ref(0);

const advancedConcepts = ref([
  {
    id: 0,
    title: 'Teleport',
    icon: '🌀',
    description: 'Render components in different DOM locations',
  },
  {
    id: 1,
    title: 'Suspense',
    icon: '⏳',
    description: 'Handle async components with loading states',
  },
  {
    id: 2,
    title: 'Custom Directives',
    icon: '🎛️',
    description: 'Create reusable DOM manipulation logic',
  },
  {
    id: 3,
    title: 'Provide/Inject',
    icon: '🔗',
    description: 'Dependency injection for component trees',
  },
]);

const conceptExamples = {
  0: {
    title: 'Teleport',
    code: `<span class="text-gray-500">// Render modal outside component tree</span>
<span class="text-purple-400">&lt;Teleport</span> <span class="text-yellow-400">to</span>=<span class="text-green-400">"body"</span><span class="text-purple-400">&gt;</span>
  <span class="text-purple-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-green-400">"modal"</span><span class="text-purple-400">&gt;</span>
    <span class="text-purple-400">&lt;p&gt;</span>Modal content<span class="text-purple-400">&lt;/p&gt;</span>
  <span class="text-purple-400">&lt;/div&gt;</span>
<span class="text-purple-400">&lt;/Teleport&gt;</span>`,
  },
  1: {
    title: 'Suspense',
    code: `<span class="text-gray-500">// Handle async components</span>
<span class="text-purple-400">&lt;Suspense&gt;</span>
  <span class="text-purple-400">&lt;template</span> <span class="text-yellow-400">#default</span><span class="text-purple-400">&gt;</span>
    <span class="text-purple-400">&lt;AsyncComponent</span> <span class="text-purple-400">/&gt;</span>
  <span class="text-purple-400">&lt;/template&gt;</span>
  <span class="text-purple-400">&lt;template</span> <span class="text-yellow-400">#fallback</span><span class="text-purple-400">&gt;</span>
    <span class="text-purple-400">&lt;div&gt;</span>Loading...<span class="text-purple-400">&lt;/div&gt;</span>
  <span class="text-purple-400">&lt;/template&gt;</span>
<span class="text-purple-400">&lt;/Suspense&gt;</span>`,
  },
  2: {
    title: 'Custom Directives',
    code: `<span class="text-gray-500">// Custom focus directive</span>
<span class="text-purple-400">const</span> vFocus = {
  <span class="text-yellow-400">mounted</span>(el) {
    el.<span class="text-blue-400">focus</span>();
  }
};

<span class="text-gray-500">// Usage in template</span>
<span class="text-purple-400">&lt;input</span> <span class="text-yellow-400">v-focus</span> <span class="text-purple-400">/&gt;</span>`,
  },
  3: {
    title: 'Provide/Inject',
    code: `<span class="text-gray-500">// Parent provides theme</span>
<span class="text-blue-400">provide</span>(<span class="text-green-400">'theme'</span>, { color: <span class="text-green-400">'orange'</span> });

<span class="text-gray-500">// Child injects theme</span>
<span class="text-purple-400">const</span> theme = <span class="text-blue-400">inject</span>(<span class="text-green-400">'theme'</span>);`,
  },
};

const selectedConceptData = computed(() => {
  return conceptExamples[selectedConcept.value];
});

const selectConcept = (id) => {
  selectedConcept.value = id;
};

const markComplete = () => {
  store.markStepComplete(5);
};
</script>
