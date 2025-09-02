<!-- src/components/ui/molecules/Tutorial/TutorialStepper.vue -->

<template>
  <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold text-orange-500">Tutorial Progress</h2>
      <div class="text-sm text-gray-400">{{ completedCount }} of {{ totalSteps }} completed</div>
    </div>

    <!-- Progress Bar -->
    <div class="w-full bg-gray-700 rounded-full h-2 mb-6">
      <div
        class="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
        :style="{ width: progressPercentage + '%' }"
      />
    </div>

    <!-- Steps -->
    <div class="flex flex-wrap gap-4">
      <div v-for="(module, index) in tutorialModules" :key="module.id" class="flex-1 min-w-[200px]">
        <div
          @click="goToStep(index)"
          :class="[
            'relative p-4 rounded-lg border transition-all duration-300 cursor-pointer',
            {
              'bg-green-600/20 border-green-500': isStepCompleted(index),
              'bg-orange-500/20 border-orange-500':
                currentStep === index && !isStepCompleted(index),
              'bg-gray-700/50 border-gray-600 hover:border-gray-500':
                currentStep !== index && !isStepCompleted(index),
            },
          ]"
        >
          <!-- Step Number/Status -->
          <div class="flex items-center mb-2">
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3',
                {
                  'bg-green-500 text-white': isStepCompleted(index),
                  'bg-orange-500 text-white': currentStep === index && !isStepCompleted(index),
                  'bg-gray-600 text-gray-300': currentStep !== index && !isStepCompleted(index),
                },
              ]"
            >
              <span v-if="isStepCompleted(index)">✓</span>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div class="text-lg">{{ module.icon }}</div>
          </div>

          <!-- Step Content -->
          <h3
            :class="[
              'font-semibold text-sm mb-1',
              {
                'text-green-400': isStepCompleted(index),
                'text-orange-400': currentStep === index,
                'text-gray-300': currentStep !== index && !isStepCompleted(index),
              },
            ]"
          >
            {{ module.name }}
          </h3>

          <p class="text-xs text-gray-400 mb-2 line-clamp-2">
            {{ module.description }}
          </p>

          <div class="text-xs text-gray-500">
            {{ module.estimatedTime }}
          </div>

          <!-- Current Step Indicator -->
          <div
            v-if="currentStep === index"
            class="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"
          />
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
      <button
        @click="prevStep"
        :disabled="currentStep === 0"
        :class="[
          'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200',
          currentStep === 0
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gray-600 hover:bg-gray-500 text-white',
        ]"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      <div class="text-center">
        <div class="text-sm text-gray-400">Current Module</div>
        <div class="text-orange-400 font-semibold">{{ currentModule.name }}</div>
      </div>

      <button
        @click="nextStep"
        :disabled="currentStep === totalSteps - 1"
        :class="[
          'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200',
          currentStep === totalSteps - 1
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg',
        ]"
      >
        Next
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Quick Actions -->
    <div class="flex items-center justify-center gap-4 mt-4">
      <button
        @click="resetTutorial"
        class="text-xs text-gray-400 hover:text-gray-300 underline transition-colors"
      >
        Reset Progress
      </button>

      <button
        @click="saveProgress"
        class="text-xs text-orange-400 hover:text-orange-300 underline transition-colors"
      >
        Save Progress
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTutorialStore } from '@/stores/tutorialStore';

const store = useTutorialStore();

// Computed properties from store
const currentStep = computed(() => store.currentStep);
const tutorialModules = computed(() => store.tutorialModules);
const totalSteps = computed(() => store.totalSteps);
const progressPercentage = computed(() => store.progressPercentage);
const currentModule = computed(() => store.currentModule);

const completedCount = computed(() => store.completedSteps.size);

// Actions
const goToStep = (stepIndex: number) => {
  store.goToStep(stepIndex);
};

const nextStep = () => {
  store.nextStep();
};

const prevStep = () => {
  store.prevStep();
};

const isStepCompleted = (stepIndex: number) => {
  return store.isStepCompleted(stepIndex);
};

const resetTutorial = () => {
  if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
    store.resetTutorial();
  }
};

const saveProgress = () => {
  store.saveProgress();
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
