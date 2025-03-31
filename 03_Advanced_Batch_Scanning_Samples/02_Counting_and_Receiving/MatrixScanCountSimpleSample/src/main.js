
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue } from '@ionic/vue';
import router from "./js/router";

// import the root component App from a single-file component.
import App from './js/App.vue'

const pinia = createPinia()
const app = createApp(App).use(pinia).use(IonicVue).use(router)

app.mount('#app')
