// vue-fun/src/main.ts

// import { createApp } from 'vue'
// import App from './App.vue'

import { createApp } from 'vue';
import './assets/styles/style.css';
import App from './App.vue';

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

createApp(App).mount('#app');
