// src/stores/tutorialStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface TutorialModule {
  id: number;
  name: string;
  description: string;
  icon: string;
  estimatedTime: string;
}

export const useTutorialStore = defineStore('tutorial', () => {
  // State
  const currentStep = ref(0);
  const completedSteps = ref(new Set<number>());
  const userProgress = ref(0);
  const initialized = ref(false);
  const startTime = ref<number | null>(null);
  const lastActivity = ref(Date.now());

  // Tutorial configuration
  const tutorialModules = ref<TutorialModule[]>([
    {
      id: 0,
      name: 'Vue Basics',
      description: 'Fundamentals of Vue 3 and reactive data',
      icon: '📚',
      estimatedTime: '2 min',
    },
    {
      id: 1,
      name: 'Composition API',
      description: 'Modern Vue development with Composition API',
      icon: '🔧',
      estimatedTime: '3 min',
    },
    {
      id: 2,
      name: 'Composables',
      description: 'Reusable stateful logic with composables',
      icon: '🎯',
      estimatedTime: '4 min',
    },
    {
      id: 3,
      name: 'Pinia State Management',
      description: 'Centralized state with Pinia store',
      icon: '🍍',
      estimatedTime: '5 min',
    },
    {
      id: 4,
      name: 'Vue Router',
      description: 'Client-side routing and navigation',
      icon: '🛣️',
      estimatedTime: '4 min',
    },
    {
      id: 5,
      name: 'Advanced Patterns',
      description: 'Advanced Vue concepts and patterns',
      icon: '🚀',
      estimatedTime: '7 min',
    },
  ]);

  // Getters (computed)
  const totalSteps = computed(() => tutorialModules.value.length);

  const progressPercentage = computed(() => {
    return Math.round((completedSteps.value.size / totalSteps.value) * 100);
  });

  const currentModule = computed(() => {
    return tutorialModules.value[currentStep.value] || tutorialModules.value[0];
  });

  const isCompleted = computed(() => {
    return completedSteps.value.size === totalSteps.value;
  });

  const nextModule = computed(() => {
    const nextIndex = currentStep.value + 1;
    return nextIndex < totalSteps.value ? tutorialModules.value[nextIndex] : null;
  });

  const prevModule = computed(() => {
    const prevIndex = currentStep.value - 1;
    return prevIndex >= 0 ? tutorialModules.value[prevIndex] : null;
  });

  const estimatedTimeRemaining = computed(() => {
    const remaining = tutorialModules.value
      .filter((module) => !completedSteps.value.has(module.id))
      .reduce((total, module) => {
        const time = parseInt(module.estimatedTime);
        return total + time;
      }, 0);
    return `${remaining} min`;
  });

  // Actions
  const initializeTutorial = () => {
    if (!initialized.value) {
      startTime.value = Date.now();
      initialized.value = true;
      console.log('Tutorial initialized! 🐱');
    }
  };

  const markStepComplete = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < totalSteps.value) {
      completedSteps.value.add(stepIndex);
      userProgress.value = progressPercentage.value;
      lastActivity.value = Date.now();

      // Auto-advance to next step if not at the end
      if (stepIndex === currentStep.value && currentStep.value < totalSteps.value - 1) {
        setTimeout(() => {
          nextStep();
        }, 1000); // Small delay for UX
      }

      console.log(`Step ${stepIndex + 1} completed! Progress: ${progressPercentage.value}%`);
    }
  };

  const markStepIncomplete = (stepIndex: number) => {
    if (completedSteps.value.has(stepIndex)) {
      completedSteps.value.delete(stepIndex);
      userProgress.value = progressPercentage.value;
      lastActivity.value = Date.now();
    }
  };

  const nextStep = () => {
    if (currentStep.value < totalSteps.value - 1) {
      currentStep.value++;
      lastActivity.value = Date.now();
    }
  };

  const prevStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--;
      lastActivity.value = Date.now();
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < totalSteps.value) {
      currentStep.value = stepIndex;
      lastActivity.value = Date.now();
    }
  };

  const resetTutorial = () => {
    currentStep.value = 0;
    completedSteps.value.clear();
    userProgress.value = 0;
    startTime.value = Date.now();
    lastActivity.value = Date.now();
    console.log('Tutorial reset! 🐱');
  };

  const getTimeSpent = (): string => {
    if (!startTime.value) return '0 min';
    const minutes = Math.floor((Date.now() - startTime.value) / 1000 / 60);
    return `${minutes} min`;
  };

  const isStepCompleted = (stepIndex: number): boolean => {
    return completedSteps.value.has(stepIndex);
  };

  const getModuleById = (id: number): TutorialModule | undefined => {
    return tutorialModules.value.find((module) => module.id === id);
  };

  // Persistence helpers
  const saveProgress = () => {
    try {
      const progress = {
        currentStep: currentStep.value,
        completedSteps: Array.from(completedSteps.value),
        userProgress: userProgress.value,
        startTime: startTime.value,
        lastActivity: lastActivity.value,
      };
      localStorage.setItem('vue-tutorial-catto-progress', JSON.stringify(progress));
      console.log('Progress saved! 💾');
    } catch (error) {
      console.warn('Could not save tutorial progress:', error);
    }
  };

  const loadProgress = (): boolean => {
    try {
      const saved = localStorage.getItem('vue-tutorial-catto-progress');
      if (saved) {
        const progress = JSON.parse(saved);
        currentStep.value = progress.currentStep || 0;
        completedSteps.value = new Set(progress.completedSteps || []);
        userProgress.value = progress.userProgress || 0;
        startTime.value = progress.startTime || Date.now();
        lastActivity.value = progress.lastActivity || Date.now();
        initialized.value = true;
        console.log('Progress loaded! 📁');
        return true;
      }
    } catch (error) {
      console.warn('Could not load tutorial progress:', error);
    }
    return false;
  };

  return {
    // State
    currentStep,
    completedSteps,
    userProgress,
    initialized,
    startTime,
    lastActivity,
    tutorialModules,

    // Getters
    totalSteps,
    progressPercentage,
    currentModule,
    isCompleted,
    nextModule,
    prevModule,
    estimatedTimeRemaining,

    // Actions
    initializeTutorial,
    markStepComplete,
    markStepIncomplete,
    nextStep,
    prevStep,
    goToStep,
    resetTutorial,
    getTimeSpent,
    isStepCompleted,
    getModuleById,
    saveProgress,
    loadProgress,
  };
});
