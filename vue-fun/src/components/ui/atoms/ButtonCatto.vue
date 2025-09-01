<!-- vue-fun/src/components/ui/atoms/ButtonCatto.vue -->
<template>
  <button
    :class="classes"
    @click="handleClick"
    :disabled="disabled"
    @mouseleave="$event.target.blur()"
    @mouseup="$event.target.blur()"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type StyleAnimations = 'none' | 'tada' | 'bounce' | 'pulse' | 'wobble' | 'swing'

interface ButtonProps {
  label?: string
  variant?: 
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'catto'
    | 'ghost'
    | 'outline'
    | 'goGreen'
    | 'funOrange'
    | 'outlineRoundedXL'
    | 'blueGradientXL'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  width?: 'full' | 'auto' | 'fit' | string
  animation?: StyleAnimations
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'catto',
  size: 'large',
  disabled: false,
  width: 'full',
  animation: 'tada'
})

const emit = defineEmits<{
  click: []
}>()

const isAnimating = ref(false)

const handleClick = () => {
  if (props.animation !== 'none') {
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 1000) // Reset after animation; 'You need to calm down' T-Swizzle HA
  }
  emit('click')
}

// Width styles mapping
const widthStyles = {
  full: 'w-full',
  auto: 'w-auto',
  fit: 'w-fit',
}

// Get width class - either from predefined options or custom class
const getWidthClass = (width: string) => {
  return widthStyles[width as keyof typeof widthStyles] || width
}

// computed is imported from Vue and new Composition API 
const getAnimationClass = computed(() => {
  if (!isAnimating.value || props.animation === 'none') {
    return ''
  }
  return `animate-${props.animation}`
})

const baseStyles = computed(() => `
  inline-flex 
  items-center 
  justify-center 
  font-medium 
  rounded-lg 
  transition-all 
  duration-200 
  focus:outline-hidden 
  focus:ring-2 
  focus:ring-offset-2
  disabled:cursor-not-allowed 
  disabled:active:scale-100
  active:scale-95
  ${getWidthClass(props.width)}
  ${getAnimationClass.value}
`)

const variantStyles = {
  primary: `
    bg-catto-button-primary 
    text-catto-button-primary-foreground 
    hover:bg-blue-600 
    active:bg-blue-700
    focus:ring-blue-500
    dark:catto-button-primary 
    dark:hover:bg-blue-700
    dark:active:bg-blue-800
    border-2 
    border-transparent
    hover:border-blue-400
    dark:hover:border-blue-300
    disabled:bg-gray-300
    disabled:text-gray-500
    dark:disabled:bg-gray-700
    dark:disabled:text-gray-500
  `,
  secondary: `
    bg-gray-500 
    text-slate-50 
    hover:bg-gray-600 
    active:bg-gray-700
    focus:ring-gray-500
    dark:bg-gray-600
    dark:hover:bg-gray-700
    dark:active:bg-gray-800
    border-2 
    border-transparent
    hover:border-gray-400
    dark:hover:border-gray-300
    disabled:bg-gray-300
    disabled:text-gray-500
    dark:disabled:bg-gray-700
    dark:disabled:text-gray-500
  `,
  tertiary: `
    bg-transparent 
    text-gray-700 
    hover:bg-gray-100 
    active:bg-gray-200 
    focus:ring-gray-300 
    dark:text-gray-300 
    dark:hover:bg-gray-700 
    dark:active:bg-gray-600 
    border-2 
    border-transparent 
    hover:border-gray-300 
    dark:hover:border-gray-400 
    dark:border-slate-500
    disabled:text-gray-400 
    dark:disabled:text-gray-500
    disabled:border-transparent
  `,
  danger: `
    bg-red-500 
    text-slate-50 
    hover:bg-red-600 
    active:bg-red-700
    focus:ring-red-500
    focus:text-slate-950
    dark:bg-red-600
    dark:hover:bg-red-700
    dark:active:bg-red-800
    border-2 
    border-transparent
    hover:border-red-400
    dark:hover:border-red-300
    disabled:bg-gray-300
    disabled:text-gray-500
    dark:disabled:bg-gray-700
    dark:disabled:text-gray-500
  `,
  catto: `
    bg-blue-600
    text-slate-50
    dark:text-slate-800
    hover:bg-blue-700
    active:bg-blue-800
    focus:ring-blue-500
    dark:bg-orange-500
    dark:hover:bg-orange-600
    dark:active:bg-orange-700
    border-2 
    border-transparent
    hover:border-blue-400
    dark:hover:border-orange-300
    dark:hover:text-slate-900
    disabled:bg-gray-300
    disabled:text-gray-500
    dark:disabled:bg-gray-700
    dark:disabled:text-orange-500
  `,
  ghost: `hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 hover:text-orange-500`,
  outline: `border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto`,
  goGreen: `
    bg-green-400 
    text-gray-950 
    hover:bg-green-600 
    active:bg-green-700
    focus:ring-green-500
    focus:text-gray-50
    dark:bg-green-500 
    dark:hover:bg-green-700
    dark:active:bg-green-800
    border-2 
    border-transparent
    hover:border-green-400
    dark:hover:border-green-300
    disabled:bg-gray-300
    disabled:text-gray-500
    dark:disabled:bg-gray-700
    dark:disabled:text-gray-500
  `,
  funOrange: `
    bg-gradient-to-r from-orange-500 to-orange-600 
    hover:from-orange-600 hover:to-orange-700 
    px-16 py-5 
    rounded-2xl 
    font-bold text-xl 
    transition-all duration-300 
    transform hover:scale-105 
    shadow-2xl hover:shadow-orange-500/25 
    text-white
  `,
  outlineRoundedXL: `
    border-2 
    border-slate-500 
    dark:border-slate-300 
    text-slate-800 
    dark:text-white 
    hover:bg-slate-200/30 
    dark:hover:bg-slate-50/10 
    px-16 
    py-5 
    rounded-2xl 
    font-bold 
    text-xl 
    transition-all 
    duration-300 
    transform 
    hover:scale-105
  `,
  blueGradientXL: `
    w-full 
    bg-gradient-to-r from-blue-600 to-blue-700 
    hover:from-blue-700 hover:to-blue-800 
    py-3 
    rounded-xl 
    font-semibold 
    text-white 
    transition-all 
    duration-300 
    transform 
    hover:scale-105
  `,
}

const sizeStyles = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const classes = computed(() => `
  ${baseStyles.value}
  ${variantStyles[props.variant]}
  ${sizeStyles[props.size]}
`)
</script>

<style scoped>
/* Optional: Add custom animations if not using Tailwind's animate classes */
@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-tada {
  animation: tada 1s;
}

.animate-bounce {
  animation: bounce 1s;
}

.animate-pulse {
  animation: pulse 1s;
}
</style>


<!--
  _____                           _        _   _
 | ____|_  ____ _ _ __ ___  _ __ | | ___  | | | |___  __ _  __ _  ___
 |  _| \ \/ / _` | '_ ` _ \| '_ \| |/ _ \ | | | / __|/ _` |/ _` |/ _ \
 | |___ >  < (_| | | | | | | |_) | |  __/ | |_| \__ \ (_| | (_| |  __/
 |_____/_/\_\__,_|_| |_| |_| .__/|_|\___|  \___/|___/\__,_|\__, |\___|
                           |_|                             |___/

Example usage:

<template>
  <div class="p-8 space-y-8 max-w-2xl mx-auto">
    [ Width Variations ]
    <div class="space-y-4">
      <h2 class="text-xl font-bold">Width Variations</h2>
      <div class="space-y-2">
        <ButtonCatto label="Full Width Button (Default)" @click="handleClick" />
        <ButtonCatto label="Auto Width" @click="handleClick" width="auto" />
        <ButtonCatto label="Fit Content" @click="handleClick" width="fit" />
        <ButtonCatto label="Half Width" @click="handleClick" width="w-1/2" />
      </div>
    </div>

    [ Variants ]
    <div class="space-y-4">
      <h2 class="text-xl font-bold">Variants</h2>
      <div class="grid grid-cols-2 gap-4">
        <ButtonCatto label="Primary" @click="handleClick" variant="primary" width="auto" />
        <ButtonCatto label="Secondary" @click="handleClick" variant="secondary" width="auto" />
        <ButtonCatto label="Danger" @click="handleClick" variant="danger" width="auto" />
        <ButtonCatto label="Catto" @click="handleClick" variant="catto" width="auto" />
      </div>
    </div>

    [ Sizes ]
    <div class="space-y-4">
      <h2 class="text-xl font-bold">Sizes</h2>
      <div class="flex items-center gap-4">
        <ButtonCatto label="Small" @click="handleClick" size="small" width="auto" />
        <ButtonCatto label="Medium" @click="handleClick" size="medium" width="auto" />
        <ButtonCatto label="Large" @click="handleClick" size="large" width="auto" />
      </div>
    </div>

    [ States ]
    <div class="space-y-4">
      <h2 class="text-xl font-bold">States</h2>
      <div class="grid grid-cols-2 gap-4">
        <ButtonCatto label="Enabled" @click="handleClick" width="auto" />
        <ButtonCatto label="Disabled" @click="handleClick" :disabled="true" width="auto" />
      </div>
    </div>

    [ With Custom Content ]
    <div class="space-y-4">
      <h2 class="text-xl font-bold">With Custom Content</h2>
      <ButtonCatto @click="handleClick" variant="catto" width="auto">
        <div class="flex items-center gap-2">
          <span>👋</span>
          <span>Custom Content</span>
          <span>✨</span>
        </div>
      </ButtonCatto>
    </div>
  </div>
</template>

<script setup>
import ButtonCatto from './ButtonCatto.vue'

const handleClick = () => {
  alert('Button clicked!')
}
</script>
-->
