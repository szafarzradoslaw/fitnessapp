import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { router } from './views/index.ts'
let app = createApp(App)
app.use(router).mount('#app')
