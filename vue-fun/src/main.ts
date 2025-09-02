// vue-fun/src/main.ts

// import { createApp } from 'vue'
// import App from './App.vue'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/styles/style.css';

const app = createApp(App);

// Create and use Pinia before mounting the app
const pinia = createPinia();
app.use(pinia);

app.use(router);
app.mount('#app');

// old dev comments to remove:

// createApp(App).mount('#app');

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
