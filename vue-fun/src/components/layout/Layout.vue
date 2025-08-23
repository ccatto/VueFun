<!-- vue-fun/src/components/layout/Layout.vue -->

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 p-4">
      <!-- Page-specific content goes here -->
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
