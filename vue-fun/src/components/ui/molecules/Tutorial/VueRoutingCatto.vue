<template>
  <div
    class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
  >
    <h3 class="text-xl font-semibold text-orange-500 mb-4 flex items-center">
      <span class="mr-2">🛣️</span> Vue Router
    </h3>

    <p class="text-gray-300 mb-4">
      Vue Router is the official routing library for Vue.js. It enables navigation between different
      views in a Single Page Application with dynamic routes and guards.
    </p>

    <div class="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-600">
      <pre
        class="text-sm text-gray-300 overflow-x-auto"
      ><code><span class="text-purple-400">import</span> { createRouter, createWebHistory } <span class="text-purple-400">from</span> <span class="text-green-400">'vue-router'</span>;

<span class="text-purple-400">const</span> routes = [
  { 
    path: <span class="text-green-400">'/'</span>, 
    name: <span class="text-green-400">'Home'</span>, 
    component: Home 
  },
  { 
    path: <span class="text-green-400">'/about'</span>, 
    name: <span class="text-green-400">'About'</span>, 
    component: () => <span class="text-purple-400">import</span>(<span class="text-green-400">'./About.vue'</span>) 
  },
  { 
    path: <span class="text-green-400">'/user/:id'</span>, 
    component: UserProfile,
    props: <span class="text-purple-400">true</span>
  }
];

<span class="text-purple-400">const</span> router = <span class="text-blue-400">createRouter</span>({
  history: <span class="text-blue-400">createWebHistory</span>(),
  routes
});</code></pre>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Navigation Demo:</h4>
      <div class="flex flex-wrap gap-2 mb-3">
        <button
          @click="simulateRoute('home')"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-all duration-200',
            currentRoute === 'home'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-600 hover:bg-gray-500 text-gray-300',
          ]"
        >
          🏠 Home
        </button>
        <button
          @click="simulateRoute('about')"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-all duration-200',
            currentRoute === 'about'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-600 hover:bg-gray-500 text-gray-300',
          ]"
        >
          ℹ️ About
        </button>
        <button
          @click="simulateRoute('profile')"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-all duration-200',
            currentRoute === 'profile'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-600 hover:bg-gray-500 text-gray-300',
          ]"
        >
          👤 Profile
        </button>
        <button
          @click="simulateRoute('tutorial')"
          :class="[
            'px-3 py-1 rounded text-sm font-medium transition-all duration-200',
            currentRoute === 'tutorial'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-600 hover:bg-gray-500 text-gray-300',
          ]"
        >
          📚 Tutorial
        </button>
      </div>
      <div class="text-sm text-gray-300">
        Current Route: <span class="text-orange-400 font-mono">{{ routeDisplay }}</span>
      </div>
    </div>

    <div class="bg-gray-700/50 rounded-lg p-3 mb-4">
      <h4 class="text-orange-400 font-semibold mb-2">Router Features:</h4>
      <ul class="text-sm text-gray-300 space-y-1">
        <li>• <span class="text-orange-400">Dynamic routes</span> with parameters (/user/:id)</li>
        <li>• <span class="text-orange-400">Lazy loading</span> for code splitting</li>
        <li>• <span class="text-orange-400">Navigation guards</span> for authentication</li>
        <li>• <span class="text-orange-400">Nested routes</span> for complex layouts</li>
        <li>• <span class="text-orange-400">History modes</span> (hash vs web history)</li>
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
const isComplete = computed(() => store.isStepCompleted(4));

// Demo routing simulation
const currentRoute = ref('home');

const routeDisplay = computed(() => {
  const routes = {
    home: '/',
    about: '/about',
    profile: '/user/123',
    tutorial: '/tutorial-catto',
  };
  return routes[currentRoute.value] || '/';
});

const simulateRoute = (route) => {
  currentRoute.value = route;
};

const markComplete = () => {
  store.markStepComplete(4);
};
</script>
