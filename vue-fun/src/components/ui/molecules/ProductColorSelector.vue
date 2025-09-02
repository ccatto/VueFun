<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 text-slate-50">Color</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="color in colors"
        :key="color.value"
        @click="selected = color.value"
        class="flex items-center gap-2 px-4 py-2 border rounded-lg font-medium transition-colors"
        :class="
          selected === color.value
            ? 'border-orange-500 bg-orange-900/20 text-orange-400'
            : 'border-gray-600 hover:border-gray-500 text-gray-300'
        "
      >
        <div
          class="w-4 h-4 rounded-full border border-gray-500"
          :style="{ backgroundColor: color.hex }"
        ></div>
        {{ color.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductColor } from '@/types/product';

defineProps<{
  colors: ProductColor[];
}>();

const selected = defineModel<string>({ required: true });
</script>
