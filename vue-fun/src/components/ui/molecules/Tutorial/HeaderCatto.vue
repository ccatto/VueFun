<!-- vue-fun/src/components/ui/molecules/Tutorial/HeaderCatto.vue -->

<template>
  <header class="bg-catto-dark border-b border-catto-orange/20 p-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between">
        <!-- Left side: logo + title -->
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-catto-orange rounded-full flex items-center justify-center">
            <span class="text-2xl">🐱</span>
          </div>
          <h1 class="text-3xl font-bold gradient-text">Vue Tutorial Catto</h1>
        </div>

        <!-- Right side: progress -->
        <div class="flex items-center space-x-4">
          <div class="text-right">
            <p class="text-sm text-gray-400">Progress</p>
            <!-- <div class="w-32 bg-gray-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
                :style="{ width: progressPercentage + '%' }"
              />
            </div> -->
          </div>
          <span class="text-catto-orange font-bold">{{ Math.round(progress) }}%</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useTutorialStore } from '@/stores/tutorialStore';
const store = useTutorialStore();
const progress = computed(() => store.userProgress);
</script>
