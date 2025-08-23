<!-- vue-fun/src/components/ui/GlobeIcon.vue 
 A fun little globe icon -->

<template>
  <div
    class="flex items-center justify-center w-64 h-64 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full relative"
  >
    <div class="flex flex-col items-center space-y-2">
      <div class="w-16 h-4 bg-gray-800"></div>
      <div class="w-16 h-4 bg-gray-800"></div>
      <div class="w-16 h-4 bg-gray-800"></div>
    </div>
    <div class="absolute flex flex-col items-center space-y-2 ml-20">
      <div class="w-16 h-4 bg-gray-200"></div>
      <div class="w-16 h-4 bg-gray-200"></div>
      <div class="w-16 h-4 bg-gray-200"></div>
    </div>
    <div class="absolute w-40 h-1 bg-gray-500 transform -rotate-15"></div>
    <div class="absolute w-40 h-1 bg-gray-300 transform rotate-15"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobeIcon',
};
</script>
