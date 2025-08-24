<!-- // vue-fun/src/components/layout/Header.vue -->

<template>
  <header class="bg-blue-600 text-slate-50 p-4">
    <h1 class="text-xl font-bold">HealthTest - Vue Fun App</h1>
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
    </nav>
  </header>
</template>
