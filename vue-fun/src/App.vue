<script setup>
// TypeScript setup - no semicolons needed!
const message = 'Tailwind is working!';
const isWorking = true;
</script>

<template>
  <div class="bg-orange-500 h-screen w-full">
    <div class="bg-white p-4 m-4 border-2 border-black">
      <h1 class="text-red-500 text-4xl">{{ message }}</h1>
      <p class="text-blue-600">
        Visit
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="underline">
          vuejs.org 888 alter
        </a>
        to read the documentation
      </p>
      <div v-if="isWorking" class="bg-green-200 p-2 mt-2">✅ Testing Tailwind classes</div>

      <!-- Debug info -->
      <div class="mt-4 text-xs">
        <p>If you see colors and spacing, Tailwind utilities are working!</p>
        <p>Orange background + white box + red text + blue link = Success!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can still add custom CSS here if needed */
</style>
