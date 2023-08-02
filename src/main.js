import { createApp } from 'vue'
import '@/assets/tailwind.css';

import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import './assets/tailwind.css'
const options = {
    timeout: 2000,
    position: "top-right",
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    // You can set your default options here
};

createApp(App)
    .use(router)
    .use(store)
    .use(Toast, options)
    .mount('#app')