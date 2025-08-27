<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 text-slate-50">Description</h3>
    <p class="text-gray-300 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>