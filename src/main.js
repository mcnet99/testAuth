import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { createApp } from 'vue'

// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
 
import fnPlugin from '@/Function/function'
 

const refs = {
  dt: ref(null), // ตัวอย่าง ref ที่ส่งไปให้ fn
}

 

 
// Create vue app
const app = createApp(App)

 
app.use(fnPlugin, {  refs })
// Register plugins
registerPlugins(app)
 
// Mount vue app
app.mount('#app')
