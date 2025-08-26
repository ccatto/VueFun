<!-- vue-fun/src/components/ui/organisms/HomeCatto.vue -->

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">


    <!-- Main Content -->
    <div class="max-w-6xl mx-auto p-6 space-y-8">
      <!-- Header Section -->
      <div class="text-center space-y-4">
        <div class="flex justify-center mb-4">
          <GlobeIcon class="w-16 h-16 text-orange-500" />
        </div>
        <h1 class="text-4xl font-bold text-white">
          Vue Learning Project <span class="text-orange-500"></span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Chris Catto build this as a hands-on Vue 3 starter application built to explore and demonstrate fundamental Vue
          concepts, modern tooling, and best practices.
        </p>
      </div>

      <!-- Explore Other Pages -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          class="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
        >
          <h2 class="text-2xl font-semibold text-orange-500 mb-3">🛒 Shopping Cart</h2>
          <p class="text-gray-300 mb-4">
            Experience state management and cart functionality with our interactive shopping cart
            page.
          </p>
          <a
            href="/cart"
            class="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-200 font-medium"
          >
            View Cart Page →
          </a>
        </div>

        <div
          class="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
        >
          <h2 class="text-2xl font-semibold text-orange-500 mb-3">📦 Product Details</h2>
          <p class="text-gray-300 mb-4">
            Explore component composition and Vue reactivity with our detailed product showcase
            page.
          </p>
          <a
            href="https://chris-catto-health-vue-fun.fly.dev/product/1"
            class="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-200 font-medium"
          >
            View Product →
          </a>
        </div>
      </div>

      <!-- Repository -->
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
        <h2 class="text-2xl font-semibold text-orange-500 mb-3">📂 Source Code</h2>
        <p class="text-gray-300 mb-4">
          Explore the complete source code and contribute to this Vue learning project:
        </p>
        <a
          href="https://github.com/ccatto/VueFun"
          target="_blank"
          class="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white rounded-md transition-colors duration-200 font-medium"
        >
          View on GitHub →
        </a>
      </div>

      <!-- Tech Stack -->
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">🛠️ Tech Stack</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">Vue 3</span>
            <span class="text-gray-400">- Progressive JavaScript framework</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">TypeScript</span>
            <span class="text-gray-400">- Type safety and enhanced DX</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">Vite</span>
            <span class="text-gray-400">- Fast build tool</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">Tailwind CSS</span>
            <span class="text-gray-400">- Utility-first CSS</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">ESLint</span>
            <span class="text-gray-400">- Code linting</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-400">•</span>
            <span class="font-medium text-white">Fly.io</span>
            <span class="text-gray-400">- Deployment platform</span>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">📱 Features</h2>
        <p class="text-gray-300 mb-4">
          This learning project includes several key pages to demonstrate Vue fundamentals:
        </p>
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <span class="text-orange-400 mt-1">🏠</span>
            <div>
              <span class="font-medium text-white">Home Page</span>
              <span class="text-gray-400"> - Landing page showcasing the application</span>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-orange-400 mt-1">📦</span>
            <div>
              <span class="font-medium text-white">Product Detail Page</span>
              <span class="text-gray-400"> - Individual product information and interactions</span>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-orange-400 mt-1">🛒</span>
            <div>
              <span class="font-medium text-white">Cart Page</span>
              <span class="text-gray-400"> - Shopping cart functionality and state management</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Architecture & Learning Objectives -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 class="text-2xl font-semibold text-orange-500 mb-4">🧱 Architecture</h2>
          <p class="text-gray-300 mb-4">
            Built following
            <span class="text-white font-medium">Atomic Design Principles</span> with a focus on:
          </p>
          <ul class="space-y-2">
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Vue's reactivity system</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Small, reusable components</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Component composition and props</span>
            </li>

            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Modern JavaScript/TypeScript patterns</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 class="text-2xl font-semibold text-orange-500 mb-4">🎯 Learning Objectives</h2>
          <p class="text-gray-300 mb-4">This project was built to explore and understand:</p>
          <ul class="space-y-2">
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Vue 3 Composition API and reactivity</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Component architecture and reusability</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">TypeScript integration with Vue</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-orange-400 mt-1">•</span>
              <span class="text-gray-300">Modern development tooling</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center py-8 border-t border-gray-700">
        <p class="text-gray-400">Built using Vue 3, TypeScript, and Tailwind CSS</p>
        <p class="text-gray-500 mt-2">Deployed on Fly.io</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobeIcon from '@/components/ui/atoms/GlobeIcon.vue';
</script>
