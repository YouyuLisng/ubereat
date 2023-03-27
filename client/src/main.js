import { createApp } from 'vue'
import '../public/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
window.router = router
import $ from 'jquery'
import 'bootstrap'
window.$ = $

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
