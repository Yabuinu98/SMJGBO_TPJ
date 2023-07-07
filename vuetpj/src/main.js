import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$myname = 'myname' // 전역변수 설정
app.config.globalProperties.$myfn = () => alert('쨔쟌')
