// vue-fun/src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import TutorialCatto from '@/views/TutorialCatto.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue'),
  },
  {
    path: '/tutorial-catto',
    name: 'TutorialCatto',
    component: TutorialCatto,
    meta: {
      title: 'Vue Tutorial Catto - Master Vue 3',
      description:
        'Comprehensive Vue 3 tutorial covering Composition API, Pinia, Vue Router and more',
      requiresProgress: false, // Set to true if you want to track tutorial progress
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
