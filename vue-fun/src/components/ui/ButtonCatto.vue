<!-- vue-fun/src/components/ui/ButtonCatto.vue -->

<template>
  <button
    class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
}>();
</script>

<!--
     ____        __  __                                           
   / __ )__  __/ /_/ /_____  ____     __  ___________ _____ ____ 
  / __  / / / / __/ __/ __ \/ __ \   / / / / ___/ __ `/ __ `/ _ \
 / /_/ / /_/ / /_/ /_/ /_/ / / / /  / /_/ (__  ) /_/ / /_/ /  __/
/_____/\__,_/\__/\__/\____/_/ /_/   \__,_/____/\__,_/\__, /\___/ 
                                                    /____/       
usage example
<ButtonCatto @click="doSomething">Click Me</ButtonCatto> 
-->
