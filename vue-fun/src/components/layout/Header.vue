<!-- // vue-fun/src/components/layout/Header.vue -->

<template>
  <header class="bg-blue-900 text-slate-50 p-4">
    <h1 class="text-xl font-bold">Tutorial Test - Vue Fun App</h1>
    <nav class="space-x-4">
      <RouterLink to="/" class="hover:underline" active-class="font-bold underline">
        Home
      </RouterLink>
      <RouterLink to="/cart" class="hover:underline" active-class="font-bold underline">
        Cart
      </RouterLink>
      <RouterLink to="/product/1" class="hover:underline" active-class="font-bold underline">
        PDP
      </RouterLink>
      <RouterLink to="/tutorial-catto" class="hover:underline" active-class="font-bold underline">
        Vue Tutorial
      </RouterLink>
    </nav>
  </header>
</template>
