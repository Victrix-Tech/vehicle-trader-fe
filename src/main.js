import './assets/index.css'
import "font-awesome/css/font-awesome.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'aos/dist/aos.css'
import AOS from 'aos';

const app = createApp(App)

AOS.init();
app.use(router)

app.mount('#app')
